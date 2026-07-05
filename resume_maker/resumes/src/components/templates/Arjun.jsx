import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { GitHubIcon as Github, LinkedInIcon as Linkedin, ExternalLinkIcon as ExternalLink } from '../ui/Icons';
import useResume from '../../hooks/useResume';

const Arjun = () => {
  const { personalInfo, summary, skills, education, experience, projects, certifications, languages, settings, getFlattened } = useResume();
  
  const { 
    fontSize = 10, 
    sectionSpacing = 4, 
    nameSize = 0, 
    taglineSize = 0, 
    sectionTitleSize = 0, 
    bodySize = 0,
    contactSize = 0,
    socialSize = 0,
    companySize = 0,
    roleSize = 0,
    durationSize = 0,
    institutionSize = 0,
    degreeSize = 0,
    yearSize = 0,
    gpaSize = 0,
    projTitleSize = 0,
    techStackSize = 0,
    skillCategorySize = 0,
    skillSize = 0,
    certIssuerSize = 0,
    langSize = 0
  } = settings || {};

  const safeSkills = getFlattened(skills);
  const safeCerts = getFlattened(certifications);

  return (
    <div 
      className="flex flex-col h-full font-sans text-slate-800 p-2"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Header */}
      <div 
        className="mb-6 border-b-2 border-slate-700 pb-4"
        style={{ marginBottom: `${(sectionSpacing || 8) * 1.5}px` }}
      >
        <h1 
          className="font-black uppercase text-slate-900 tracking-tight leading-none"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
          {personalInfo.fullName || 'ARJUN DIVRANIYA'}
        </h1>
        <p 
          className="font-semibold text-slate-600 mt-2 italic"
          style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
        >
          {personalInfo.jobTitle || 'Aspiring Full Stack Developer'}
        </p>
      </div>

      <div 
        className="flex flex-1 gap-8 overflow-hidden"
        style={{ gap: `${(sectionSpacing || 8) * 1.5}px` }}
      >
        {/* Left Sidebar */}
        <div 
          className="w-[30%] space-y-8 border-r-2 border-slate-100 pr-6 shrink-0"
          style={{ gap: `${sectionSpacing || 8}px` }}
        >
          {/* Contact */}
          <section>
            <h2 
              className="font-bold border-b-2 border-slate-800 mb-3 uppercase tracking-wider"
              style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '18px' }}
            >
              Contact
            </h2>
            <div 
              className="space-y-2 break-words font-semibold text-slate-700"
              style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
            >
              {personalInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-slate-500 shrink-0" />
                  <span className="break-all">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-slate-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-slate-500 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.github && (
                <div className="flex items-center gap-2">
                  <Github size={12} className="text-slate-500 shrink-0" />
                  <span className="break-all">{personalInfo.github}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin size={12} className="text-slate-500 shrink-0" />
                  <span className="break-all">{personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 
              className="font-bold border-b-2 border-slate-800 mb-3 uppercase tracking-wider text-black"
              style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '18px' }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {safeSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-1 bg-slate-100 font-black rounded uppercase tracking-tighter text-slate-800"
                  style={{ fontSize: skillSize ? `${skillSize}px` : '10px' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 
              className="font-bold border-b-2 border-slate-800 mb-3 uppercase tracking-wider text-black"
              style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '18px' }}
            >
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="text-[10px]">
                  <p 
                    className="font-bold uppercase leading-tight text-slate-900"
                    style={{ fontSize: institutionSize ? `${institutionSize}px` : 'inherit' }}
                  >
                    {edu.college}
                  </p>
                  <p 
                    className="text-slate-500 font-medium italic mt-0.5"
                    style={{ fontSize: degreeSize ? `${degreeSize}px` : 'inherit' }}
                  >
                    {edu.degree}
                  </p>
                  <p 
                    className="text-indigo-600 font-black mt-1 tracking-widest"
                    style={{ fontSize: yearSize ? `${yearSize}px` : 'inherit' }}
                  >
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          {languages?.length > 0 && (
            <section>
              <h2 
                className="font-bold border-b-2 border-slate-800 mb-3 uppercase tracking-wider text-black"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
              >
                Languages
              </h2>
              <div 
                className="font-black space-y-1 text-slate-700 tracking-wider"
                style={{ fontSize: langSize ? `${langSize}px` : '10px' }}
              >
                {languages.map((lang, index) => (
                  <p key={index} className="uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                    {lang}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Main Content */}
        <div 
          className="flex-1 min-w-0 flex flex-col"
          style={{ gap: `${(sectionSpacing || 8) * 1.5}px` }}
        >
          {/* Summary */}
          {summary && (
            <section>
              <h2 
                className="font-bold border-b-2 border-slate-800 mb-3 uppercase tracking-wider text-black"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
              >
                Profile
              </h2>
              <p className="text-[11.5px] font-medium leading-[1.6] text-slate-600 italic">
                {summary}
              </p>
            </section>
          )}

          {/* Experience / Projects */}
          {(projects?.length > 0 || experience?.length > 0) && (
            <section>
              <h2 
                className="font-bold border-b-2 border-slate-800 mb-4 uppercase tracking-wider text-black"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
              >
                Notable Work
              </h2>
              <div className="space-y-8">
                {(projects || []).slice(0, 3).map((proj, index) => (
                  <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-indigo-600 before:rounded-full after:absolute after:left-[3px] after:top-[14px] after:w-[1.5px] after:h-[calc(100%+32px)] after:bg-slate-100 last:after:hidden">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 
                        className="font-black text-sm uppercase text-slate-900 leading-tight flex-1 tracking-tight"
                        style={{ fontSize: projTitleSize ? `${projTitleSize}px` : 'inherit' }}
                      >
                        {proj.title}
                      </h3>
                      <span 
                        className="text-[10px] font-black text-indigo-600 shrink-0 uppercase tracking-tighter bg-indigo-50 px-2 py-0.5 rounded-sm"
                        style={{ fontSize: techStackSize ? `${techStackSize}px` : 'inherit' }}
                      >
                        {proj.tech}
                      </span>
                    </div>
                    <p className="text-[10.5px] font-medium leading-relaxed mb-2 text-slate-600 italic">{proj.description}</p>
                    {proj.link && (
                      <a href={`https://${proj.link}`} className="text-[9.5px] font-black text-slate-400 flex items-center gap-1 hover:text-indigo-600 transition-colors break-all uppercase tracking-widest">
                        <ExternalLink size={10} />
                        Link
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {safeCerts?.length > 0 && (
            <section className="mt-auto">
              <h2 
                className="font-bold border-b-2 border-slate-800 mb-4 uppercase tracking-wider text-black"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '18px' }}
              >
                Certifications
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {safeCerts.slice(0, 10).map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex gap-2.5 items-center"
                    style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '10px' }}
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-200 rotate-45 shrink-0" />
                    <span className="font-black uppercase text-slate-700 tracking-tight leading-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Arjun;
