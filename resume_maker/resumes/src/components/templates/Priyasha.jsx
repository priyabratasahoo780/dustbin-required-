import React from 'react';
import useResume from '../../hooks/useResume';

const Priyasha = () => {
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

  return (
    <div 
      className="flex h-full flex-col font-sans text-slate-800 border-[10px] border-slate-100 p-6"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Boxed Header */}
      <header 
        className="mb-8 p-6 bg-white border border-slate-200 shadow-sm rounded-xl text-center"
        style={{ marginBottom: `${(sectionSpacing || 8) * 4}px` }}
      >
        <h1 
          className="font-black uppercase text-slate-900 tracking-tighter mb-2 italic leading-none"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
          {personalInfo.fullName || 'PRIYASHA YADAV'}
        </h1>
        <p 
          className="font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 leading-none"
          style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
        >
          {personalInfo.jobTitle || 'Product Designer'}
        </p>
        <div 
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold uppercase tracking-widest text-slate-500"
          style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
        >
          {personalInfo.location && <span>📍 {personalInfo.location}</span>}
          {personalInfo.email && <span className="text-indigo-600">✉ {personalInfo.email}</span>}
          {personalInfo.phone && <span>📱 {personalInfo.phone}</span>}
          {personalInfo.linkedin && <span className="underline decoration-indigo-300 italic lowercase tracking-tight">🔗 {personalInfo.linkedin}</span>}
        </div>
      </header>

      <div 
        className="flex flex-1 gap-12"
        style={{ gap: `${(sectionSpacing || 8) * 4}px` }}
      >
        {/* Main Side (60%) */}
        <div 
          className="w-[60%] flex flex-col"
          style={{ gap: `${(sectionSpacing || 8) * 2}px` }}
        >
           <section>
             <h2 
               className="font-black italic uppercase text-slate-900 border-l-4 border-indigo-500 pl-3 mb-6 tracking-widest"
               style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
             >
               Selected Work
             </h2>
             <div className="space-y-8">
                {projects.map((proj, index) => (
                   <div key={index} className="space-y-1">
                     <div className="flex justify-between font-black mb-1 uppercase tracking-tight">
                       <span 
                        className="text-slate-900"
                        style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '11px' }}
                       >
                        {proj.title}
                       </span>
                       <span 
                        className="text-indigo-600"
                        style={{ fontSize: techStackSize ? `${techStackSize}px` : '11px' }}
                       >
                        ({proj.tech})
                       </span>
                     </div>
                     <p className="text-[10.5px] font-medium italic text-slate-400 line-clamp-2 leading-relaxed">
                       {proj.description}
                     </p>
                     {proj.link && <span className="text-[8px] font-black opacity-20 uppercase tracking-widest">{proj.link}</span>}
                   </div>
                ))}
             </div>
           </section>

           <section>
              <h2 
                className="font-black italic uppercase text-slate-900 border-l-4 border-indigo-500 pl-3 mb-6 tracking-widest"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
              >
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <p 
                      className="text-slate-400 font-black tracking-widest uppercase mb-1"
                      style={{ fontSize: durationSize ? `${durationSize}px` : '9px' }}
                    >
                      {exp.duration}
                    </p>
                    <h3 
                      className="font-black text-sm uppercase text-slate-900 leading-none mb-1"
                      style={{ fontSize: roleSize ? `${roleSize}px` : 'inherit' }}
                    >
                      {exp.role}
                    </h3>
                    <p 
                      className="font-bold text-indigo-600 tracking-wider mb-2 uppercase"
                      style={{ fontSize: companySize ? `${companySize}px` : '9px' }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-[10px] leading-relaxed text-slate-500 italic opacity-80 line-clamp-2 underline decoration-slate-100 underline-offset-4 decoration-2">
                       {exp.description}
                    </p>
                  </div>
                ))}
              </div>
           </section>
        </div>

        {/* Sidebar (40%) */}
        <div 
          className="w-[40%] flex flex-col"
          style={{ gap: `${(sectionSpacing || 8) * 2}px` }}
        >
           <section>
             <h2 
               className="font-black uppercase text-indigo-600 tracking-widest mb-6"
               style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '11px' }}
             >
               Competencies
             </h2>
             <div className="flex flex-wrap gap-2">
               {safeSkills.map((skill, index) => (
                 <span 
                  key={index} 
                  className="px-2 py-0.5 bg-slate-50 border border-slate-100 font-black uppercase text-slate-800 leading-tight rounded-sm tracking-tighter"
                  style={{ fontSize: skillSize ? `${skillSize}px` : '9px' }}
                 >
                    {skill}
                 </span>
               ))}
             </div>
           </section>

           <section>
              <h2 
                className="font-black uppercase text-indigo-600 tracking-widest mb-6"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '11px' }}
              >
                Credentials
              </h2>
              <ul className="space-y-3">
                 {safeCerts.map((cert, index) => (
                   <li 
                    key={index} 
                    className="font-black uppercase text-slate-700 italic border-l-2 border-indigo-100 pl-3 pb-0.5 leading-tight tracking-tight"
                    style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '9px' }}
                   >
                     {cert}
                   </li>
                 ))}
              </ul>
           </section>

           <section className="mt-auto">
              <h2 
                className="font-black uppercase text-indigo-600 tracking-widest mb-6"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '11px' }}
              >
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                   <div key={index} className="mb-4">
                      <p 
                        className="font-black text-slate-900 mb-1 uppercase tracking-tight leading-none"
                        style={{ fontSize: degreeSize ? `${degreeSize}px` : '10px' }}
                      >
                        {edu.degree}
                      </p>
                      <p 
                        className="font-bold text-slate-400 lowercase italic underline mb-2 decoration-slate-100"
                        style={{ fontSize: institutionSize ? `${institutionSize}px` : '9px' }}
                      >
                        {edu.college}
                      </p>
                       <div 
                        className="font-black w-fit px-2 py-1 bg-indigo-50 text-indigo-600 rounded-sm tracking-widest uppercase"
                        style={{ fontSize: yearSize ? `${yearSize}px` : '8px' }}
                      >
                        {edu.year || edu.duration} | <span style={{ fontSize: gpaSize ? `${gpaSize}px` : 'inherit' }}>CGPA {edu.cgpa}</span>
                      </div>
                   </div>
                ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Priyasha;
