import React from 'react';
import useResume from '../../hooks/useResume';

const Mayank = () => {
  const { personalInfo, summary, skills, education, experience, projects, certifications, settings, getFlattened } = useResume();
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
    certIssuerSize = 0
  } = settings || {};

  const safeSkills = getFlattened(skills);
  const safeCerts = getFlattened(certifications);
  const initials = personalInfo.fullName?.split(' ').map(n => n[0]).join('') || 'MD';

  return (
    <div 
      className="flex h-full font-sans text-slate-800"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Left Col (40%) */}
      <div 
        className="w-[40%] bg-slate-50 border-r border-slate-200 p-8 flex flex-col"
        style={{ gap: `${(sectionSpacing || 8) * 1.5}px` }}
      >
        {/* Profile Circle */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-xl flex items-center justify-center text-3xl font-black text-slate-400">
            {initials}
          </div>
          <div className="space-y-1">
            <h1 
              className="font-black uppercase text-slate-900 tracking-tight leading-none"
              style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
            >
              {personalInfo.fullName || 'MAYANK DUDHATRA'}
            </h1>
            <p 
              className="font-bold text-slate-500 uppercase tracking-widest mt-2"
              style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
            >
              {personalInfo.jobTitle || 'Full Stack Web Developer'}
            </p>
          </div>
        </div>

        {/* Contact info list */}
        <section>
          <h2 
            className="font-black uppercase tracking-widest text-indigo-600 border-b border-indigo-200 pb-1 mb-3"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '12px' }}
          >
            Contact
          </h2>
          <div 
            className="space-y-2 break-words font-bold text-slate-600"
            style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
          >
             {personalInfo.email && <p>• {personalInfo.email}</p>}
             {personalInfo.phone && <p>• {personalInfo.phone}</p>}
             {personalInfo.location && <p>• {personalInfo.location}</p>}
             {personalInfo.linkedin && <p>• LinkedIn</p>}
             {personalInfo.github && <p>• GitHub</p>}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 
            className="font-black uppercase tracking-widest text-indigo-600 border-b border-indigo-200 pb-1 mb-3"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '12px' }}
          >
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="text-[10px]">
                <p 
                  className="font-bold text-slate-900 leading-tight uppercase"
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
                  {edu.year || edu.duration}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 
            className="font-black uppercase tracking-widest text-indigo-600 border-b border-indigo-200 pb-1 mb-3"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '12px' }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {safeSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 bg-white border border-slate-200 font-black rounded shadow-sm uppercase text-slate-700 tracking-tighter"
                style={{ fontSize: skillSize ? `${skillSize}px` : '9px' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Right Col (60%) */}
      <div 
        className="flex-1 p-8 flex flex-col"
        style={{ gap: `${(sectionSpacing || 8) * 1.5}px` }}
      >
        {/* Experience */}
        {experience?.length > 0 && (
          <section>
            <h2 
              className="font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 mb-4"
              style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '14px' }}
            >
              Experience
            </h2>
            <div className="space-y-6">
              {experience.slice(0, 3).map((exp, index) => (
                <div key={index} className="border-l-2 border-indigo-500 pl-4 py-1 relative">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 absolute -left-[5px] top-2 shadow-sm" />
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 
                      className="font-bold text-sm text-slate-900 tracking-tight uppercase leading-none"
                      style={{ fontSize: roleSize ? `${roleSize}px` : 'inherit' }}
                    >
                      {exp.role}
                    </h3>
                    <span 
                      className="text-[9px] font-bold text-slate-400 uppercase tracking-widest"
                      style={{ fontSize: durationSize ? `${durationSize}px` : 'inherit' }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  <p 
                    className="text-[10px] uppercase font-black text-indigo-600 mb-2 leading-none"
                    style={{ fontSize: companySize ? `${companySize}px` : 'inherit' }}
                  >
                    {exp.company}
                  </p>
                  <p className="text-[10.5px] font-medium leading-relaxed italic text-slate-600 line-clamp-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section>
            <h2 
              className="font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 mb-4"
              style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '14px' }}
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.slice(0, 2).map((proj, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm">
                   <div className="flex justify-between items-center mb-2">
                      <h3 
                        className="font-black text-slate-900 tracking-tight uppercase text-[12px]"
                        style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '12px' }}
                      >
                        {proj.title}
                      </h3>
                      <span 
                        className="text-[9px] font-bold text-indigo-500 shrink-0 ml-2 bg-indigo-50 px-1.5 py-0.5 rounded uppercase tracking-tighter"
                        style={{ fontSize: techStackSize ? `${techStackSize}px` : 'inherit' }}
                      >
                        {proj.tech}
                      </span>
                   </div>
                   <p className="text-[10.5px] font-medium leading-relaxed mb-2 text-slate-500 italic line-clamp-2">{proj.description}</p>
                   {proj.link && <p className="text-[9px] font-black underline text-slate-400 uppercase tracking-widest">{proj.link}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Achievements */}
        {safeCerts?.length > 0 && (
          <section className="mt-auto">
             <h2 
               className="font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 mb-4"
               style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '14px' }}
             >
               Awards
             </h2>
             <div className="grid grid-cols-2 gap-4">
               {safeCerts.slice(0, 8).map((cert, index) => (
                 <div 
                   key={index} 
                   className="flex gap-2.5 items-start font-bold text-slate-700 uppercase leading-snug tracking-tighter italic"
                   style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '10px' }}
                 >
                    <div className="w-1.5 h-1.5 bg-indigo-500 mt-1.5 shrink-0 rotate-45" />
                    {cert}
                 </div>
               ))}
             </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Mayank;
