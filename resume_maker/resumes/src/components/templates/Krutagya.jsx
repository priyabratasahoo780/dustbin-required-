import React from 'react';
import useResume from '../../hooks/useResume';
import { MapPin } from 'lucide-react';
import { PhoneIcon as Phone, MailIcon as Mail, LinkedInIcon as Linkedin, GlobeIcon as Globe } from '../ui/Icons';

const Krutagya = () => {
  const { personalInfo, skills, education, experience, projects, certifications, socialLinks, settings, getFlattened } = useResume();
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
    certTitleSize = 0,
    certIssuerSize = 0
  } = settings || {};
  const safeCerts = getFlattened(certifications);

  // Helper to normalize URLs
  const normalizeUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `https://${url}`;
  };

  const sectionMargin = { marginBottom: `${sectionSpacing || 16}px` };

  return (
    <div 
      className="template-root flex flex-col bg-white font-serif text-black p-[4%] leading-snug select-text h-full"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center space-y-2 mb-4">
        <h1 
          className="font-sans font-bold tracking-tight uppercase leading-none text-black"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
          {personalInfo.fullName || 'KRUTAGYA KANERIA'}
        </h1>
        <p 
          className="font-medium text-slate-700 italic"
          style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
        >
          {personalInfo.jobTitle || 'Backend Developer'}
        </p>
        
        {/* Contact Info Row */}
        <div 
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pt-1 font-sans"
          style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
        >
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5 group">
              <Phone size={12} className="text-slate-800" />
              <span className="font-medium">{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.email && (
            <div className="flex items-center gap-1.5 group">
              <Mail size={12} className="text-slate-800" />
              <a href={`mailto:${personalInfo.email}`} className="font-medium border-b border-slate-300 hover:border-black transition-all">
                {personalInfo.email}
              </a>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5 group">
              <MapPin size={12} className="text-slate-800" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          )}
        </div>

        {/* Social Links Row */}
        {((socialLinks && socialLinks.length > 0) || personalInfo.linkedin || personalInfo.github || personalInfo.portfolio) && (
          <div 
            className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1 pt-1 font-sans italic"
            style={{ fontSize: socialSize ? `${socialSize}px` : '0.85rem' }}
          >
            {personalInfo.linkedin && (
              <a href={normalizeUrl(personalInfo.linkedin)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors border-b border-indigo-100">
                <Linkedin size={12} />
                <span>LinkedIn</span>
              </a>
            )}
            {personalInfo.github && (
              <a href={normalizeUrl(personalInfo.github)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors border-b border-indigo-100">
                <Globe size={12} />
                <span>GitHub</span>
              </a>
            )}
            {socialLinks && socialLinks.map((link, idx) => (
              <a key={idx} href={normalizeUrl(link.url)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors border-b border-indigo-100">
                <Globe size={12} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="border-b-[1.5px] border-black/10 mb-6" />

      {/* Technical Skills */}
      <section style={sectionMargin}>
        <h2 
          className="font-sans font-bold border-b border-black pb-0.5 mb-3 uppercase tracking-wider"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          Technical Skills
        </h2>
        <div className="space-y-1.5 pl-1">
          {(skills || []).map((skillGroup, idx) => (
            <p 
              key={idx} 
              className="leading-tight"
              style={{ fontSize: skillSize ? `${skillSize}px` : 'inherit' }}
            >
              <span 
                className="font-bold underline decoration-slate-200 underline-offset-4"
                style={{ fontSize: skillCategorySize ? `${skillCategorySize}px` : 'inherit' }}
              >
                {skillGroup.category}:
              </span> {Array.isArray(skillGroup.items) ? skillGroup.items.join(', ') : skillGroup}
            </p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section style={sectionMargin}>
        <h2 
          className="font-sans font-bold border-b border-black pb-0.5 mb-4 uppercase tracking-wider"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          Experience
        </h2>
        <div className="space-y-6">
          {(experience || []).map((exp, idx) => (
            <div key={idx} className="pl-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 
                  className="font-bold text-black"
                  style={{ fontSize: roleSize ? `${roleSize}px` : '1.05rem' }}
                >
                  {exp.role} <span className="font-normal mx-1 opacity-40">|</span> <span style={{ fontSize: companySize ? `${companySize}px` : 'inherit' }}>{exp.company}</span>
                </h3>
                <span 
                  className="font-bold text-slate-800 uppercase tracking-tighter"
                  style={{ fontSize: durationSize ? `${durationSize}px` : '0.85rem' }}
                >
                  {exp.duration}
                </span>
              </div>
              <div className="flex justify-between items-center text-[0.85rem] font-medium text-slate-500 italic mb-2">
                <span>{exp.location || 'Gujarat, India'}</span>
              </div>
              <ul className="list-none space-y-1.5">
                {(Array.isArray(exp.description) ? exp.description : (exp.description || "").split('\n')).map((bullet, bidx) => (
                  <li key={bidx} className="flex gap-2.5 text-[0.95rem] leading-snug text-slate-900 text-justify">
                    <span className="mt-[8px] w-1 h-1 bg-black/60 rounded-full shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={sectionMargin}>
        <h2 
          className="font-sans font-bold border-b border-black pb-0.5 mb-4 uppercase tracking-wider"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          Projects
        </h2>
        <div className="space-y-6">
          {(projects || []).map((proj, idx) => (
            <div key={idx} className="pl-1">
              <div className="flex justify-between items-baseline mb-1.5">
                <h3 
                  className="font-bold text-black uppercase tracking-tight"
                  style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '1.05rem' }}
                >
                  {proj.title} <span className="font-normal lowercase mx-1 opacity-30">—</span> <span 
                    className="italic font-medium text-slate-700"
                    style={{ fontSize: techStackSize ? `${techStackSize}px` : '0.9rem' }}
                  >
                    {proj.tech}
                  </span>
                </h3>
              </div>
              <ul className="list-none space-y-1.5 pl-1">
                {(Array.isArray(proj.description) ? proj.description : (proj.description || "").split('\n')).map((bullet, bidx) => (
                  <li key={bidx} className="flex gap-2.5 text-[0.95rem] leading-snug text-slate-900 text-justify">
                    <span className="mt-[8px] w-1 h-1 bg-black/40 rounded-full shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section style={sectionMargin}>
        <h2 
          className="font-sans font-bold border-b border-black pb-0.5 mb-3 uppercase tracking-wider"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          Certifications
        </h2>
        <div className="space-y-2 pl-1">
          {(certifications || []).map((cert, idx) => {
             const certTitle = typeof cert === 'string' ? cert : (cert.title || cert.name);
             const certIssuer = typeof cert === 'object' ? (cert.issuer || cert.organization) : '';
             const certDate = typeof cert === 'object' ? (cert.date || cert.year) : '';
             
             return (
               <div key={idx} className="flex justify-between items-baseline">
                 <div className="flex gap-2.5 items-center">
                   <span className="w-1 h-1 bg-black/40 rounded-full shrink-0" />
                   <span 
                    className="font-bold underline decoration-slate-100 underline-offset-4"
                    style={{ fontSize: certTitleSize ? `${certTitleSize}px` : '0.95rem' }}
                   >
                    {certTitle}
                   </span>
                 </div>
                 {(certIssuer || certDate) && (
                   <span 
                    className="font-medium text-slate-600 italic"
                    style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '0.85rem' }}
                   >
                     {certIssuer}{certIssuer && certDate ? ' · ' : ''}{certDate}
                   </span>
                 )}
               </div>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 
          className="font-sans font-bold border-b border-black pb-0.5 mb-4 uppercase tracking-wider"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1rem' }}
        >
          Education
        </h2>
        <div className="space-y-4 pl-1">
          {(education || []).map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 
                  className="font-bold text-black"
                  style={{ fontSize: institutionSize ? `${institutionSize}px` : '1.05rem' }}
                >
                  {edu.college}
                </h3>
                <span 
                  className="font-bold text-slate-800 tracking-tight"
                  style={{ fontSize: yearSize ? `${yearSize}px` : '0.85rem' }}
                >
                  {edu.year || edu.duration}
                </span>
              </div>
              <div className="flex justify-between items-center text-[0.9rem] font-medium text-slate-600 italic">
                <span style={{ fontSize: degreeSize ? `${degreeSize}px` : 'inherit' }}>
                  {edu.degree} {edu.cgpa && <span style={{ fontSize: gpaSize ? `${gpaSize}px` : 'inherit' }}>· Result: {edu.cgpa}</span>}
                </span>
                <span style={{ fontSize: bodySize ? `${bodySize}px` : 'inherit' }}>{edu.location || 'Gujarat, India'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Krutagya;
