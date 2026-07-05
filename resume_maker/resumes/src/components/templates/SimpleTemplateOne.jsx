import React from 'react';
import useResume from '../../hooks/useResume';

const SimpleTemplateOne = () => {
  const { personalInfo, summary, skills, education, projects, certifications, settings, getFlattened } = useResume();
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
      className="w-full bg-white text-black font-sans leading-relaxed min-h-full p-4"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* HEADER */}
      <h1 
        className="font-bold tracking-wide border-b pb-2 text-slate-900 leading-none"
        style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
      >
        {personalInfo.fullName || 'YOUR NAME'}
      </h1>

      <p 
        className="mt-2 font-bold text-slate-500 uppercase tracking-widest leading-none"
        style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
      >
        {personalInfo.jobTitle || 'JOB TITLE'}
      </p>

      <div 
        className="mt-4 border-b pb-4 flex flex-wrap gap-x-6 gap-y-2 text-slate-400 font-bold uppercase tracking-tighter"
        style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
      >
        {personalInfo.phone && <p>{personalInfo.phone}</p>}
        {personalInfo.email && <p>{personalInfo.email}</p>}
        {personalInfo.github && <p>GitHub: {personalInfo.github}</p>}
        {personalInfo.linkedin && <p>LinkedIn: {personalInfo.linkedin}</p>}
      </div>

      {/* ABOUT */}
      {summary && (
        <section style={{ marginTop: `${(sectionSpacing || 8) * 2}px` }}>
          <h2 
            className="font-bold border-b pb-1 text-slate-800 uppercase tracking-widest"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
          >
            ABOUT ME
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed font-medium italic opacity-80">
            {summary}
          </p>
        </section>
      )}

      {/* SKILLS */}
      {safeSkills?.length > 0 && (
        <section style={{ marginTop: `${(sectionSpacing || 8) * 2}px` }}>
          <h2 
            className="font-bold border-b pb-1 text-slate-800 uppercase tracking-widest"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
          >
            SKILLS
          </h2>
          <ul 
            className="mt-4 grid grid-cols-4 gap-3 text-slate-700 font-black uppercase tracking-tighter"
            style={{ fontSize: skillSize ? `${skillSize}px` : 'inherit' }}
          >
            {safeSkills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-200 rounded-full" />
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PROJECTS */}
      {projects?.length > 0 && (
        <section style={{ marginTop: `${(sectionSpacing || 8) * 2}px` }}>
          <h2 
            className="font-bold border-b pb-1 text-slate-800 uppercase tracking-widest"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
          >
            PROJECTS
          </h2>

          <div className="space-y-6 mt-4">
            {projects.map((proj, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 
                    className="font-black text-slate-900 uppercase tracking-tight"
                    style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '13px' }}
                  >
                    {proj.title}
                  </h3>
                  <span 
                    className="font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded"
                    style={{ fontSize: techStackSize ? `${techStackSize}px` : '10px' }}
                  >
                    {proj.tech}
                  </span>
                </div>

                {proj.link && (
                  <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest mb-1">
                    {proj.link}
                  </p>
                )}

                <p className="text-[11px] font-medium text-slate-500 leading-relaxed italic line-clamp-2">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {education?.length > 0 && (
        <section style={{ marginTop: `${(sectionSpacing || 8) * 2}px` }}>
          <h2 
            className="font-bold border-b pb-1 text-slate-800 uppercase tracking-widest"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
          >
            EDUCATION
          </h2>
          <div className="space-y-4 mt-4">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between text-[11px] items-center">
                <div>
                  <p 
                    className="font-black text-slate-900 uppercase tracking-tight leading-none mb-1"
                    style={{ fontSize: institutionSize ? `${institutionSize}px` : 'inherit' }}
                  >
                    {edu.college}
                  </p>
                  <p 
                    className="text-slate-400 font-bold italic lowercase"
                    style={{ fontSize: degreeSize ? `${degreeSize}px` : 'inherit' }}
                  >
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right">
                  <p 
                    className="font-black text-indigo-500 tracking-widest uppercase mb-1"
                    style={{ fontSize: yearSize ? `${yearSize}px` : 'inherit' }}
                  >
                    {edu.year || edu.duration}
                  </p>
                  <p 
                    className="text-slate-400 font-black uppercase tracking-tighter"
                    style={{ fontSize: gpaSize ? `${gpaSize}px` : 'inherit' }}
                  >
                    {edu.cgpa && `GPA: ${edu.cgpa}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CERTIFICATIONS */}
      {safeCerts?.length > 0 && (
        <section className="mt-auto pt-8">
          <h2 
            className="font-bold border-b pb-1 text-slate-800 uppercase tracking-widest"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '12px' }}
          >
            CERTIFICATIONS
          </h2>
          <ul 
            className="mt-4 space-y-2 text-slate-600 font-bold uppercase tracking-tight italic"
            style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : 'inherit' }}
          >
            {safeCerts.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-slate-100 rotate-45 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default SimpleTemplateOne;
