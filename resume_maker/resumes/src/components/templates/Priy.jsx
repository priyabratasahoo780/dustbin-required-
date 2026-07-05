import React from 'react';
import useResume from '../../hooks/useResume';
import { 
  GitHubIcon as Github, 
  LinkedInIcon as Linkedin, 
  ExternalLinkIcon as ExternalLink,
  YoutubeIcon as Youtube,
  MailIcon as Mail,
  GlobeIcon as Globe,
  CodeIcon as Code2,
  LinkIcon
} from '../ui/Icons';

const Priy = () => {
  const { 
    personalInfo, 
    socialLinks, 
    skills, 
    certifications, 
    achievements, 
    education, 
    projects,
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
    achievementsSize = 0
  } = settings || {};

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('mailto:') || url.startsWith('tel:')) return url;
    return url.startsWith('http') ? url : `https://${url}`;
  };

  const getSocialIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes('linkedin')) return <Linkedin size={socialSize ? Math.max(10, socialSize - 2) : 12} className="text-[#0077b5]" />;
    if (l.includes('github')) return <Github size={socialSize ? Math.max(10, socialSize - 2) : 12} />;
    if (l.includes('leetcode')) return <div className="bg-[#ffa116] rounded-sm flex items-center justify-center text-white font-bold" style={{ width: socialSize ? `${socialSize}px` : '12px', height: socialSize ? `${socialSize}px` : '12px', fontSize: socialSize ? `${socialSize * 0.6}px` : '8px' }}>L</div>;
    if (l.includes('youtube')) return <Youtube size={socialSize ? Math.max(10, socialSize - 2) : 12} className="text-[#ff0000]" />;
    if (l.includes('portfolio')) return <Globe size={socialSize ? Math.max(10, socialSize - 2) : 12} className="text-[#10b981]" />;
    if (l.includes('email')) return <Mail size={socialSize ? Math.max(10, socialSize - 2) : 12} />;
    return <ExternalLink size={socialSize ? Math.max(10, socialSize - 2) : 12} />;
  };

  const getProjectIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes('github')) return <Github size={10} />;
    if (l.includes('api')) return <Code2 size={10} />;
    if (l.includes('video') || l.includes('demo')) return <Youtube size={10} />;
    return <LinkIcon size={10} />;
  };

  // Safe checks for categorised vs flat skills
  const isCategorized = Array.isArray(skills) && skills.length > 0 && typeof skills[0] === 'object' && 'category' in skills[0];
  const safeSkillsArray = isCategorized ? skills : [{ category: 'Skills', items: getFlattened(skills) }];
  const safeCerts = getFlattened(certifications);

  return (
    <div 
      className="flex flex-col bg-white text-[#1a1a1a] font-sans leading-tight pt-3 px-8 pb-3 min-h-0"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Header */}
      <header className="shrink-0" style={{ marginBottom: `${(sectionSpacing || 4) * 4}px` }}>
        <h1 
          className="text-center font-serif text-black tracking-tight mb-2 leading-none"
          style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
        >
          {personalInfo.fullName || 'Priy Mavani'}
        </h1>
        <div 
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-bold text-slate-800"
          style={{ fontSize: socialSize ? `${socialSize}px` : '0.8rem' }}
        >
           {(socialLinks || []).map((link, idx) => (
             <React.Fragment key={idx}>
               <a href={normalizeUrl(link.url)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors group">
                 {getSocialIcon(link.label)}
                 <span className="underline decoration-slate-400 decoration-1 underline-offset-4 group-hover:decoration-indigo-600">
                   {link.label}
                 </span>
               </a>
                {idx < (socialLinks?.length || 0) - 1 && <span className="text-slate-300 font-normal scale-y-110 ml-1">|</span>}
             </React.Fragment>
           ))}
        </div>
        <div className="h-[1px] bg-black w-full mt-3" />
      </header>

      <div className="flex-1 flex gap-8 pt-2 min-h-0">
        {/* Left Column */}
        <div className="w-[36%] flex flex-col justify-between min-h-0" style={{ gap: `${(sectionSpacing || 4) * 4}px` }}>
          {/* Contact */}
          <section>
            <h2 
              className="font-bold text-[#475569] tracking-tight uppercase border-b-2 border-slate-100 mb-2"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '15px',
                paddingBottom: `${sectionSpacing || 4}px`
              }}
            >
              Contact
            </h2>
            <div 
              className="space-y-2"
              style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
            >
              {personalInfo.email && (
                <div className="flex items-center gap-2.5 font-medium text-slate-600">
                  <Mail size={12} fill="#475569" className="text-white shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2.5 font-medium text-slate-600">
                  <div className="w-3 h-3 bg-slate-600 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 border-t border-r border-white rotate-45" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2.5 font-medium text-slate-600">
                  <Globe size={12} className="text-slate-500 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 
              className="font-bold text-[#475569] tracking-tight uppercase border-b-2 border-slate-100 mb-2"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '15px',
                paddingBottom: `${sectionSpacing || 4}px`
              }}
            >
              Skills
            </h2>
            <div className="space-y-3">
              {safeSkillsArray.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                   <h3 
                    className="font-extrabold text-[#1e293b] uppercase tracking-tighter"
                    style={{ fontSize: skillCategorySize ? `${skillCategorySize}px` : '11.5px' }}
                   >
                    {cat.category}
                   </h3>
                   <p 
                    className="text-slate-500 italic font-medium leading-relaxed"
                    style={{ fontSize: skillSize ? `${skillSize}px` : '10.5px' }}
                   >
                     {(cat.items || []).join(', ')}
                   </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificate */}
          {safeCerts.length > 0 && (
            <section>
              <h2 
                className="font-bold text-[#475569] tracking-tight uppercase border-b-2 border-slate-100 mb-2"
                style={{ 
                  fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '15px',
                  paddingBottom: `${sectionSpacing || 4}px`
                }}
              >
                Certifications
              </h2>
              <div className="space-y-2">
                 {safeCerts.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-1.5 font-medium text-slate-600 italic group"
                    style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '10.5px' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                    <span>{typeof cert === 'object' ? cert.name : cert}</span>
                    {(typeof cert === 'object' ? cert.url : null) && (
                      <a href={normalizeUrl(cert.url)} target="_blank" rel="noreferrer" className="flex items-center gap-0.5 ml-0.5 hover:text-indigo-600 transition-colors">
                        <LinkIcon size={9} className="text-slate-400 group-hover:text-indigo-400" />
                        <span className="underline decoration-slate-300 decoration-1 underline-offset-2 text-[10px] text-slate-500 font-bold group-hover:text-indigo-600">Link</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements?.length > 0 && (
            <section>
              <h2 
                className="font-bold text-[#475569] tracking-tight uppercase border-b-2 border-slate-100 mb-2"
                style={{ 
                  fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '15px',
                  paddingBottom: `${sectionSpacing || 4}px`
                }}
              >
                Achievements
              </h2>
              <div className="space-y-3">
                 {achievements.map((ach, idx) => {
                   const [title, ...rest] = typeof ach === 'string' ? ach.split(' - ') : ['Award'];
                   return (
                     <div 
                      key={idx} 
                      className="space-y-0.5"
                      style={{ fontSize: achievementsSize ? `${achievementsSize}px` : 'inherit' }}
                     >
                        <div className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                          <span className="text-[1.1em] font-bold text-[#334155] leading-tight">{title}</span>
                        </div>
                        {rest.length > 0 && <p className="text-[0.9em] text-slate-400 italic font-medium ml-2.5">{rest.join(' - ')}</p>}
                     </div>
                   );
                 })}
              </div>
            </section>
          )}

          {/* Education */}
          <section className="flex-1 flex flex-col justify-end min-h-0">
            <h2 
              className="font-bold text-[#475569] tracking-tight uppercase border-b-2 border-slate-100 mb-2"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '15px',
                paddingBottom: `${sectionSpacing || 4}px`
              }}
            >
              Education
            </h2>
            <div className="space-y-4">
              {(education || []).map((edu, idx) => (
                <div key={idx} className="space-y-1">
                   <h3 
                    className="font-black text-slate-800 uppercase tracking-tight leading-tight"
                    style={{ fontSize: institutionSize ? `${institutionSize}px` : '12px' }}
                   >
                     {edu.college}
                   </h3>
                   <p 
                    className="text-slate-500 italic font-medium leading-none"
                    style={{ fontSize: degreeSize ? `${degreeSize}px` : '11px' }}
                   >
                     {edu.degree}
                   </p>
                   <p 
                    className="font-bold text-slate-300 uppercase tracking-widest mt-1"
                    style={{ fontSize: yearSize ? `${yearSize}px` : '10.5px' }}
                   >
                     {edu.year || edu.duration}
                   </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Timeline */}
        <div className="w-[64%] flex flex-col min-h-0">
           <div className="flex items-center gap-4 mb-4 ml-[-6px] shrink-0">
              <div className="w-4 h-4 rounded-full border-[3px] border-[#94a3b8] bg-[#f8fafc]" />
              <h2 
                className="font-bold text-[#475569] tracking-tight uppercase"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem' }}
              >
                Projects
              </h2>
           </div>
           
           <div 
             className="flex-1 flex flex-col justify-start relative border-l-2 border-[#e2e8f0] ml-1 pl-10 min-h-0"
             style={{ gap: `${(sectionSpacing || 4) * 6}px`, paddingBottom: `${(sectionSpacing || 4) * 4}px` }}
           >
              {(projects || []).map((proj, idx) => {
                const descLines = (Array.isArray(proj.description) ? proj.description : (proj.description || '').split('\n'));
                const projectType = descLines.find(l => typeof l === 'string' && l.includes('Project Type:'))?.replace('Project Type:', '').trim();
                const bulletPoints = descLines.filter(l => typeof l === 'string' && !l.includes('Project Type:'));

                return (
                  <div key={idx} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-[48.5px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#94a3b8] z-10 shadow-sm flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#94a3b8]" />
                    </div>

                    <div className="flex justify-between items-start mb-2">
                       <h3 
                        className="font-bold text-[#1e293b] tracking-tight leading-none uppercase font-serif underline decoration-[#f1f5f9] decoration-[4px] underline-offset-4"
                        style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '15px' }}
                       >
                        {proj.title}
                       </h3>
                       {projectType && (
                        <span 
                          className="font-bold text-slate-400 tracking-tight"
                          style={{ fontSize: durationSize ? `${durationSize}px` : '10px' }}
                        >
                          {projectType}
                        </span>
                       )}
                    </div>

                    <div className="flex gap-4 items-center mb-2.5">
                       {(proj.links || []).map((link, lidx) => (
                         <a key={lidx} href={normalizeUrl(link.url)} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-slate-500 underline decoration-slate-200 decoration-1 underline-offset-4 hover:text-indigo-600 transition-colors uppercase italic">
                           {getProjectIcon(link.label)}
                           {link.label}
                         </a>
                       ))}
                       {proj.github && (
                         <a href={normalizeUrl(proj.github)} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-slate-500 underline decoration-slate-200 decoration-1 underline-offset-4 hover:text-indigo-600 transition-colors uppercase italic">
                           <Github size={10} />
                           GitHub
                         </a>
                       )}
                    </div>

                    <p className="text-[10px] font-bold text-slate-800 mb-2">
                      Tech Stack: <span 
                        className="text-slate-500 font-medium italic"
                        style={{ fontSize: techStackSize ? `${techStackSize}px` : 'inherit' }}
                      >
                        {proj.tech}
                      </span>
                    </p>

                    <ul className="space-y-2 list-disc pl-4">
                       {bulletPoints.map((point, pidx) => (
                         <li key={pidx} className="text-[10px] text-slate-600 font-medium leading-normal marker:text-slate-300">
                           {typeof point === 'string' ? point.trim() : point}
                         </li>
                       ))}
                    </ul>
                  </div>
                );
              })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Priy;
