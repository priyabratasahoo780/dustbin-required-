import React from 'react';
import useResume from '../../hooks/useResume';
import { 
  MailIcon, 
  PhoneIcon, 
  GitHubIcon, 
  LinkedInIcon, 
  ExternalLinkIcon, 
  GlobeIcon, 
  CodeIcon 
} from '../ui/Icons';

const Kalpan = () => {
  const { 
    personalInfo, 
    summary, 
    skills, 
    projects, 
    education, 
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
    skillSize = 0
  } = settings || {};

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('mailto:') || url.startsWith('tel:')) return url;
    if (url.startsWith('http')) return url;
    return `https://${url}`;
  };

  const getLinkIcon = (label = '') => {
    const l = label.toLowerCase();
    if (l.includes('github')) return <GitHubIcon size={fontSize} />;
    if (l.includes('figma') || l.includes('layout')) return <GlobeIcon size={fontSize} />;
    if (l.includes('deploy') || l.includes('live')) return <ExternalLinkIcon size={fontSize} />;
    return <CodeIcon size={fontSize} />;
  };

  const sectionMarginStyle = { marginBottom: `${sectionSpacing || 20}px` };

  // Safe checks for categorised vs flat skills
  const isCategorized = Array.isArray(skills) && skills.length > 0 && typeof skills[0] === 'object' && 'category' in skills[0];
  const safeSkills = isCategorized ? skills : [{ category: 'Skills', items: getFlattened(skills) }];

  return (
    <div 
      className="flex flex-col bg-white text-black font-sans px-10 py-10 min-h-0"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Header Area */}
      <header className="shrink-0">
        <h1 
          className="font-bold tracking-tight leading-none mb-4"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
           {personalInfo.fullName || 'KALPAN KANERIYA'}
         </h1>
          <div className="border-t-2 border-black mb-4">
            <h2 
              className="mt-1 font-medium text-slate-700"
              style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
            >
               {personalInfo.jobTitle || 'Full Stack Devloper'}
             </h2>
          </div>

        {/* Contact Info */}
        <div 
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-300 py-2 mb-1 font-medium"
          style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
        >
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <PhoneIcon size={14} className="fill-black text-white shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <MailIcon size={14} className="fill-black text-white shrink-0" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <GlobeIcon size={14} className="fill-black text-white shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        {socialLinks?.length > 0 && (
          <div 
            className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-300 py-2 mb-5 font-medium italic underline decoration-slate-300 underline-offset-2"
            style={{ fontSize: socialSize ? `${socialSize}px` : '0.8rem' }}
          >
            {socialLinks.map((link, idx) => (
              <a key={idx} href={normalizeUrl(link.url)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                {link.label?.toLowerCase().includes('github') ? <GitHubIcon size={14} /> : <LinkedInIcon size={14} />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <div className="flex-1 flex flex-col min-h-0">
        
        {/* About Me */}
        <section style={sectionMarginStyle} className="shrink-0">
          <h2 
          className="font-bold uppercase tracking-tight border-b-2 border-black pb-0.5 mb-5"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
             ABOUT ME
          </h2>
          <p className="leading-relaxed opacity-90 text-[1.1em]">
            {personalInfo.summary || summary || 'Full-stack MERN developer with a passion for building dynamic, scalable applications...'}
          </p>
        </section>

        {/* Skills Section */}
        <section style={sectionMarginStyle} className="shrink-0">
          <h2 
          className="font-bold uppercase tracking-tight border-b-2 border-black pb-0.5 mb-5"
          style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
        >
             SKILLS
          </h2>
          <div className="grid grid-cols-4 gap-x-8 gap-y-3">
            {safeSkills.map((cat, idx) => (
              <div key={idx} className="space-y-1.5">
                {(cat.items || []).map((skill, sidx) => (
                  <div key={sidx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rotate-45 shrink-0" />
                    <span 
                      className="font-bold uppercase"
                      style={{ fontSize: skillSize ? `${skillSize}px` : '0.95em' }}
                    >
                      {typeof skill === 'object' ? skill.name : skill}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - Flexible Vertical Fill */}
        <section style={sectionMarginStyle} className="flex-1 flex flex-col min-h-0">
          <h2 
            className="font-bold uppercase tracking-tight border-b-2 border-black pb-0.5 mb-5 shrink-0"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
          >
             PROJECTS
          </h2>
          <div className="flex-1 flex flex-col justify-start gap-6 overflow-hidden">
            {(projects || []).map((proj, idx) => (
              <div key={idx} className="mb-2 last:mb-0">
                <h3 
                  className="font-bold mb-1 underline decoration-slate-300 underline-offset-4 decoration-1"
                  style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '1.1em' }}
                >
                  {proj.title}
                </h3>
                
                {/* Project Links Row */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                  {(proj.links || []).map((link, lidx) => (
                    <a 
                      key={lidx} 
                      href={normalizeUrl(link.url)} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1 text-[12px] font-bold text-slate-500 hover:text-indigo-600 transition-colors underline decoration-slate-200 underline-offset-2"
                    >
                      {getLinkIcon(link.label)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                  {proj.github && (
                    <a href={normalizeUrl(proj.github)} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[12px] font-bold text-slate-500 hover:text-indigo-600 transition-colors underline decoration-slate-200 underline-offset-2">
                      <GitHubIcon size={12} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <p className="text-[1.15em] leading-relaxed opacity-90 italic mb-1.5 uppercase-bullets">
                  {proj.description}
                </p>
                <p className="text-[0.95em] font-bold">
                   <span className="opacity-60 italic">Tech Stack:</span> <span 
                     className="text-slate-500 font-medium italic"
                     style={{ fontSize: techStackSize ? `${techStackSize}px` : 'inherit' }}
                   >
                     {proj.tech}
                   </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Footer Section */}
        <section className="mt-8 border-t-2 border-slate-200 pt-6 shrink-0">
          <h2 
            className="font-bold uppercase tracking-tight border-b-2 border-black pb-0.5 mb-5"
            style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '26px' }}
          >
             EDUCATION
          </h2>
          <div className="space-y-4">
            {education && education.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <span 
                    className="font-bold"
                    style={{ fontSize: degreeSize ? `${degreeSize}px` : '1.1em' }}
                  >
                    {edu.degree} — <span style={{ fontSize: institutionSize ? `${institutionSize}px` : 'inherit' }}>{edu.college}</span>
                  </span>
                  <span 
                    className="font-bold italic opacity-70 whitespace-nowrap"
                    style={{ fontSize: yearSize ? `${yearSize}px` : '0.9em' }}
                  >
                    [{edu.year}]
                  </span>
                </div>
                {edu.cgpa && (
                  <span 
                    className="font-bold italic opacity-60"
                    style={{ fontSize: gpaSize ? `${gpaSize}px` : '0.9em' }}
                  >
                    Result: {edu.cgpa}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kalpan;
