import React from 'react';
import useResume from '../../hooks/useResume';

const Dev = () => {
  const { personalInfo, socialLinks, skills, education, experience, projects, certifications, languages, settings, getFlattened } = useResume();
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
    certIssuerSize = 0,
    langSize = 0
  } = settings || {};

  // Helper to normalize URLs
  const normalizeUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `https://${url}`;
  };

  const headerMarginStyle = { marginBottom: `${sectionSpacing || 4}px` };
  const sectionMarginStyle = { marginBottom: `${sectionSpacing || 4}px` };
  const itemMarginStyle = { marginBottom: `${(sectionSpacing || 4) / 2}px` };

  return (
    <div 
      className="template-root flex flex-col bg-white font-serif text-black p-4 leading-tight select-text min-h-0 h-auto"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Centered Header */}
      <header className="flex flex-col items-center border-b border-black pb-2" style={headerMarginStyle}>
        <h1 
          className="font-bold tracking-tight uppercase leading-none mb-1"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
          {personalInfo.fullName || 'DEV PATEL'}
        </h1>
        <p 
          className="font-medium text-slate-800 mb-1"
          style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
        >
          {personalInfo.jobTitle || 'Full Stack Developer'}
        </p>
        <div 
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 font-medium text-black"
          style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
        >
          {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>}
          {personalInfo.phone && (
            <>
              <span className="text-slate-400">|</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.location && (
            <>
              <span className="text-slate-400">|</span>
              <span>{personalInfo.location}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-slate-400">|</span>
              <a href={normalizeUrl(personalInfo.linkedin)} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="text-slate-400">|</span>
              <a href={normalizeUrl(personalInfo.github)} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span className="text-slate-400">|</span>
              <a href={normalizeUrl(personalInfo.portfolio)} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
            </>
          )}
        </div>
        
        {socialLinks?.length > 0 && (
          <div 
            className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 font-medium text-black mt-1"
            style={{ fontSize: socialSize ? `${socialSize}px` : '0.8rem' }}
          >
            {socialLinks.map((link, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-400">|</span>}
                <a href={normalizeUrl(link.url)} target="_blank" rel="noreferrer" className="hover:underline">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        )}
      </header>

      {/* Education */}
      <section style={sectionMarginStyle}>
        <h2 
          className="font-bold border-b border-black pb-0.5 mb-2 uppercase tracking-tight"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          EDUCATION
        </h2>
        {(education || []).map((edu, idx) => (
          <div key={idx} style={itemMarginStyle}>
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 
                className="font-bold"
                style={{ fontSize: degreeSize ? `${degreeSize}px` : '1rem' }}
              >
                {edu.degree}
              </h3>
              <span 
                className="font-bold whitespace-nowrap"
                style={{ fontSize: yearSize ? `${yearSize}px` : '0.95rem' }}
              >
                {edu.year}
              </span>
            </div>
            <div className="flex justify-between items-baseline italic text-slate-800 font-medium leading-tight">
              <span style={{ fontSize: institutionSize ? `${institutionSize}px` : 'inherit' }}>{edu.college}</span>
              {edu.location && <span style={{ fontSize: bodySize ? `${bodySize}px` : '0.95rem' }}>{edu.location}</span>}
            </div>
            {edu.cgpa && (
              <div 
                className="mt-0.5 font-bold"
                style={{ fontSize: gpaSize ? `${gpaSize}px` : '0.95rem' }}
              >
                Grade: {edu.cgpa}
              </div>
            )}
            {edu.summary && (
              <p className="text-[0.95rem] leading-snug mt-1.5 italic text-slate-700">
                {edu.summary}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Technical Skills */}
      <section style={sectionMarginStyle}>
        <h2 
          className="font-bold border-b border-black pb-0.5 mb-2 uppercase tracking-tight"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          TECHNICAL SKILLS
        </h2>
        <div style={{ fontSize: bodySize ? `${bodySize}px` : '1rem' }} className="space-y-1">
          {(skills || []).map((skillGroup, idx) => (
            <p 
              key={idx} 
              className="leading-snug"
              style={{ fontSize: skillSize ? `${skillSize}px` : 'inherit' }}
            >
              <span 
                className="font-bold"
                style={{ fontSize: skillCategorySize ? `${skillCategorySize}px` : 'inherit' }}
              >
                {skillGroup.category}:
              </span> {Array.isArray(skillGroup.items) ? skillGroup.items.join(', ') : skillGroup}
            </p>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section style={sectionMarginStyle}>
        <h2 
          className="font-bold border-b border-black pb-0.5 mb-2 uppercase tracking-tight"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="space-y-3">
          {(experience || []).map((exp, idx) => (
            <div key={idx} style={itemMarginStyle}>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 
                  className="font-bold"
                  style={{ fontSize: roleSize ? `${roleSize}px` : '1.05rem' }}
                >
                  {exp.role}
                </h3>
                <span 
                  className="font-bold whitespace-nowrap"
                  style={{ fontSize: durationSize ? `${durationSize}px` : '0.95rem' }}
                >
                  {exp.duration}
                </span>
              </div>
              <div className="flex justify-between items-baseline italic text-slate-800 font-medium mb-1.5">
                <span style={{ fontSize: companySize ? `${companySize}px` : 'inherit' }}>{exp.company}</span>
                {exp.location && <span style={{ fontSize: bodySize ? `${bodySize}px` : '0.95rem' }}>{exp.location}</span>}
              </div>
              <ul className="list-none space-y-1.5 pl-1">
                {(Array.isArray(exp.description) ? exp.description : (exp.description || "").split('\n')).map((bullet, bidx) => (
                  <li key={bidx} className="flex gap-2 text-[0.95rem] leading-snug text-black text-justify">
                    <span className="mt-[8px] w-[3.5px] h-[3.5px] bg-black rounded-full shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section style={sectionMarginStyle}>
        <h2 
          className="font-bold border-b border-black pb-0.5 mb-2 uppercase tracking-tight"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          KEY PROJECTS
        </h2>
        <div className="space-y-3">
          {(projects || []).map((proj, idx) => (
            <div key={idx} style={itemMarginStyle}>
              <div className="flex justify-between items-start mb-1">
                <h3 
                  className="font-bold flex-1"
                  style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '1rem' }}
                >
                  {proj.title} <span className="font-medium mx-1">—</span> <span 
                    className="italic font-medium text-slate-700"
                    style={{ fontSize: techStackSize ? `${techStackSize}px` : 'inherit' }}
                  >
                    {proj.tech}
                  </span>
                </h3>
              </div>
              <ul className="list-none space-y-1.5 pl-1 mb-1.5">
                {(Array.isArray(proj.description) ? proj.description : (proj.description || "").split('\n')).map((bullet, bidx) => (
                  <li key={bidx} className="flex gap-2 text-[0.95rem] leading-snug text-black text-justify">
                    <span className="mt-[8px] w-[3.5px] h-[3.5px] bg-black rounded-full shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2.5 text-[0.85rem] mt-1">
                {proj.github && <a href={normalizeUrl(proj.github)} className="text-black border border-black/30 rounded px-2 py-0.5 hover:bg-gray-50 leading-none">GitHub</a>}
                {proj.live && <a href={normalizeUrl(proj.live)} className="text-black border border-black/30 rounded px-2 py-0.5 hover:bg-gray-50 leading-none">Live</a>}
                {proj.video && <a href={normalizeUrl(proj.video)} className="text-black border border-black/30 rounded px-2 py-0.5 hover:bg-gray-50 leading-none">Video</a>}
                {(proj.links || []).map((ln, lidx) => (
                   <a key={lidx} href={normalizeUrl(ln.url)} className="text-black border border-black/30 rounded px-2 py-0.5 hover:bg-gray-50 leading-none">{ln.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section style={sectionMarginStyle}>
         <h2 
          className="font-bold border-b border-black pb-0.5 mb-2 uppercase tracking-tight"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
          CERTIFICATIONS & ACHIEVEMENTS
        </h2>
        <div className="space-y-1">
          {(certifications || []).map((group, idx) => {
            if (typeof group === 'string') {
               return (
                 <p 
                  key={idx} 
                  className="flex gap-2 leading-snug text-black"
                  style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '0.95rem' }}
                 >
                   <span className="shrink-0">•</span>
                   <span>{group}</span>
                 </p>
               );
            }
            return (
              <div key={idx} className="mb-2 last:mb-0">
                {group.category && (
                  <h3 
                    className="text-[0.9rem] font-bold uppercase mb-1"
                    style={{ fontSize: certTitleSize ? `${certTitleSize}px` : '0.9rem' }}
                  >
                    {group.category}
                  </h3>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  {(group.items || []).map((item, iidx) => (
                    <div 
                      key={iidx} 
                      className="flex items-center gap-1.5 leading-tight text-black"
                      style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '0.95rem' }}
                    >
                       <span className="w-1 h-1 bg-black rounded-full shrink-0" />
                       <span>{typeof item === 'string' ? item : item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Languages */}
      {languages?.length > 0 && (
        <section style={sectionMarginStyle} className="mt-auto">
          <h2 
            className="font-bold border-b border-black pb-0.5 mb-2 uppercase tracking-tight"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
          >
            LANGUAGES
          </h2>
          <p 
            className="leading-tight"
            style={{ fontSize: langSize ? `${langSize}px` : '1rem' }}
          >
            <span className="font-bold">Languages Known:</span> {Array.isArray(languages) ? languages.join(', ') : languages}
          </p>
        </section>
      )}
    </div>
  );
};

export default Dev;
