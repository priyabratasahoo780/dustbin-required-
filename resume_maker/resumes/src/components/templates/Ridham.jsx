import React from 'react';
import useResume from '../../hooks/useResume';

const Ridham = () => {
  const { 
    personalInfo, 
    summary,
    skills, 
    education, 
    projects, 
    experience,
    certifications, 
    achievements,
    figmaLinks,
    socialLinks,
    settings,
    getFlattened
  } = useResume();

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
    achievementsSize = 0,
    figmaSize = 0,
    langSize = 0
  } = settings || {};

  const allCerts = getFlattened(certifications);

  const SectionHeader = ({ title }) => (
    <div className="mb-2">
      <h2 
        className="font-[900] uppercase text-black tracking-tight mb-0.5"
        style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
      >
        {title}
      </h2>
      <div className="h-[2px] bg-[#166534] w-full" />
    </div>
  );

  return (
    <div 
      className="flex flex-col h-full bg-white text-[#1a1a1a] font-sans leading-[1.2] overflow-hidden"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      
      {/* Header Area */}
      <header className="px-8 pt-4 pb-1">
        <h1 
          className="font-serif font-bold tracking-tight text-[#1a1a1a] leading-none mb-1"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
          {personalInfo.fullName || 'RIDHAM PATEL'}
        </h1>
        <p 
          className="font-bold tracking-[0.4em] uppercase text-[#166534] mb-3"
          style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
        >
          {personalInfo.jobTitle || 'FULL STACK DEVELOPER'}
        </p>
        
        <div 
          className="flex flex-wrap items-center gap-x-6 gap-y-1 font-bold text-slate-700 mb-2"
          style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
        >
          {personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <span className="text-[12px]">📧</span>
              <span className="underline decoration-slate-200">{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <span className="text-[12px]">📱</span>
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <span className="text-[12px]">📍</span>
              <span>{personalInfo.location}</span>
            </div>
          )}
          {socialLinks?.length > 0 && (
            <div 
              className="flex items-center gap-1.5 ml-1"
              style={{ fontSize: socialSize ? `${socialSize}px` : '0.8rem' }}
            >
              <span className="text-[11px]">🔗</span>
              {socialLinks.map((link, idx) => (
                <React.Fragment key={idx}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="underline decoration-slate-400 hover:text-[#166534] transition-colors leading-none">
                    {link.label}
                  </a>
                  {idx < socialLinks.length - 1 && <span className="opacity-40 font-normal leading-none px-0.5">|</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <div className="h-[4px] bg-[#1a4731] w-full mt-1" />
      </header>

      {/* Main Body */}
      <div 
        className="grid grid-cols-[42%_58%] flex-1 px-8 pt-3 gap-8 pb-2 overflow-hidden"
        style={{ paddingTop: `${(sectionSpacing || 4) * 2}px` }}
      >
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          
          {/* Skills */}
          {skills?.length > 0 && (
            <section>
              <SectionHeader title="SKILLS" />
              <div 
                className="space-y-4 pr-2"
                style={{ paddingTop: `${sectionSpacing || 4}px` }}
              >
                {skills.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <h3 
                      className="font-bold text-[#166534] uppercase tracking-tighter"
                      style={{ fontSize: skillCategorySize ? `${skillCategorySize}px` : '11px' }}
                    >
                      {cat.category}
                    </h3>
                    <p 
                      className="text-slate-700 font-medium leading-relaxed"
                      style={{ fontSize: skillSize ? `${skillSize}px` : '9.5px' }}
                    >
                      {Array.isArray(cat.items) ? cat.items.join(', ') : (typeof cat === 'object' ? cat.category : cat)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hackathons */}
          {achievements?.length > 0 && (
            <section>
              <SectionHeader title="HACKATHONS & AWARDS" />
              <div 
                className="space-y-4"
                style={{ paddingTop: `${sectionSpacing || 4}px` }}
              >
                {achievements.slice(0, 4).map((ach, idx) => {
                  const parts = ach.split(':');
                  const title = parts[0];
                  const rest = (parts[1] || '').split('|');
                  return (
                    <div 
                      key={idx} 
                      className="relative pl-5 space-y-0.5"
                      style={{ fontSize: achievementsSize ? `${achievementsSize}px` : 'inherit' }}
                    >
                      <span className="absolute left-0 top-0 text-[1.1em] font-black text-[#166534]">{idx + 1}.</span>
                      <h3 className="text-[1.1em] font-bold text-black leading-tight uppercase">{title}</h3>
                      {rest[0] && <p className="text-[0.95em] font-bold text-[#166534] leading-tight italic">{rest[0].trim()}</p>}
                      {rest[1] && <p className="text-[0.95em] font-medium text-slate-500 leading-tight">{rest[1].trim()}</p>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Certifications */}
          {allCerts?.length > 0 && (
            <section>
              <SectionHeader title="CERTIFICATIONS" />
              <div 
                className="grid grid-cols-1 gap-y-2 pr-2"
                style={{ paddingTop: `${sectionSpacing || 4}px` }}
              >
                {allCerts.slice(0, 12).map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-2 font-bold leading-tight items-start"
                    style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '9.5px' }}
                  >
                    <span className="text-[#166534] font-black shrink-0">#</span>
                    <span className="underline decoration-slate-100">{typeof cert === 'object' ? cert.name : cert}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          <section className="mt-auto pb-4">
             <SectionHeader title="LANGUAGES" />
             <div style={{ paddingTop: `${sectionSpacing || 4}px` }}>
              <p 
                className="font-black text-slate-800 uppercase tracking-widest"
                style={{ fontSize: langSize ? `${langSize}px` : '10px' }}
              >
                 English | Gujarati | Hindi
              </p>
             </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          
          {/* Expertise */}
          <section className="bg-slate-50 border-l-4 border-l-[#166534] border-t-4 border-t-[#166534] p-4 rounded-sm shadow-sm">
            <h2 className="text-[12px] font-black text-black mb-3 uppercase tracking-tighter">EXPERTISE & SUMMARY</h2>
            <ul className="space-y-1.5">
              {(Array.isArray(summary) ? summary : []).map((line, i) => (
                <li key={i} className="flex gap-2.5 items-start text-[10px] font-bold text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#166534] mt-1 shrink-0" />
                  <span className="leading-snug">{line}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <SectionHeader title="EDUCATION" />
            <div 
              className="space-y-4 pr-2"
              style={{ paddingTop: `${sectionSpacing || 4}px` }}
            >
              {(education || []).map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 
                      className="font-bold text-black uppercase"
                      style={{ fontSize: institutionSize ? `${institutionSize}px` : '12px' }}
                    >
                      {edu.college}
                    </h3>
                    <span 
                      className="font-black text-[#166534] tracking-widest"
                      style={{ fontSize: yearSize ? `${yearSize}px` : '10px' }}
                    >
                      {edu.year || edu.duration}
                    </span>
                  </div>
                  <p 
                    className="font-medium text-slate-500 italic underline decoration-slate-50 underline-offset-2"
                    style={{ fontSize: degreeSize ? `${degreeSize}px` : '10.5px' }}
                  >
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Freelance / Experience */}
          {experience?.length > 0 && (
            <section>
              <SectionHeader title="EXPERIENCE" />
              <div 
                className="space-y-4"
                style={{ paddingTop: `${sectionSpacing || 4}px` }}
              >
                {experience.slice(0, 2).map((exp, idx) => (
                  <div key={idx} className="border border-slate-100 p-3 rounded-sm space-y-2 bg-white border-t-4 border-t-black shadow-sm">
                    <div className="flex justify-between items-baseline">
                      <h3 
                        className="font-black text-black uppercase italic tracking-tight"
                        style={{ fontSize: roleSize ? `${roleSize}px` : '12px' }}
                      >
                        {exp.role}
                      </h3>
                      <span 
                        className="font-bold text-slate-400"
                        style={{ fontSize: durationSize ? `${durationSize}px` : '9px' }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    <p 
                      className="font-bold text-[#166534] tracking-tight"
                      style={{ fontSize: companySize ? `${companySize}px` : '11px' }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-[10px] text-slate-700 font-medium leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Professional Projects */}
          {projects?.length > 0 && (
            <section>
              <SectionHeader title="KEY PROJECTS" />
              <div 
                className="space-y-5"
                style={{ paddingTop: `${sectionSpacing || 4}px` }}
              >
                {projects.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="space-y-2 border-l-4 border-l-[#166534]/10 pl-4 py-0.5">
                    <div className="flex justify-between items-baseline">
                      <h3 
                        className="font-black text-black leading-tight uppercase tracking-tight"
                        style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '13px' }}
                      >
                        {item.title}
                      </h3>
                      <span 
                        className="text-slate-300 italic"
                        style={{ fontSize: durationSize ? `${durationSize}px` : '9px' }}
                      >
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-slate-600 font-medium leading-relaxed pr-2">
                      {Array.isArray(item.description) ? item.description[0] : item.description}
                    </p>
                    <p 
                      className="font-bold text-[#166534] leading-tight italic bg-emerald-50 inline-block px-1.5 py-0.5 rounded-sm"
                      style={{ fontSize: techStackSize ? `${techStackSize}px` : '10px' }}
                    >
                      {item.tech}
                    </p>
                    {item.github && (
                       <div className="flex gap-2 pt-1">
                          <a href={item.github} target="_blank" rel="noreferrer" className="text-[9px] font-black text-slate-900 underline decoration-slate-200 hover:text-emerald-700 transition-colors uppercase tracking-widest">GitHub</a>
                       </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Figma UI/UX Grid Section */}
          {figmaLinks?.length > 0 && (
            <section className="pb-4">
              <SectionHeader title="UI/UX DESIGN" />
              <div 
                className="grid grid-cols-3 gap-2 pr-2"
                style={{ paddingTop: `${sectionSpacing || 4}px` }}
              >
                {figmaLinks.slice(0, 6).map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="border-b-2 border-slate-100 p-1.5 text-center font-bold uppercase truncate bg-slate-50/50 hover:bg-emerald-50 transition-colors"
                    style={{ fontSize: figmaSize ? `${figmaSize}px` : '8px' }}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default Ridham;
