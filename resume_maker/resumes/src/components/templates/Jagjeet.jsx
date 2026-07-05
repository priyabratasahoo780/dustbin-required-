import React from 'react';
import useResume from '../../hooks/useResume';

const Jagjeet = () => {
  const { 
    personalInfo, 
    summary, 
    skills, 
    education, 
    experience, 
    projects, 
    certifications, 
    socialLinks,
    figmaLinks,
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
    figmaSize = 0
  } = settings || {};

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('mailto:') || url.startsWith('tel:')) return url;
    if (url.startsWith('http')) return url;
    return `https://${url}`;
  };

  const safeSkills = Array.isArray(skills) && typeof skills[0] === 'object' ? skills : [];
  const safeCerts = getFlattened(certifications);
  const safeFigma = Array.isArray(figmaLinks) ? figmaLinks : [];

  return (
    <div 
      className="template-root flex flex-col bg-white text-slate-800 px-8 py-4 font-serif min-h-0"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Header Area */}
      <header className="shrink-0 mb-4">
        <div className="flex justify-between items-baseline border-b border-black pb-2 mb-2">
          <h1 
            className="font-bold text-black uppercase tracking-tight leading-none"
            style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
          >
            {personalInfo.fullName || 'JAGJEET DANGAR'}
          </h1>
          <div 
            className="text-right font-bold space-y-0.5 text-slate-700 font-sans"
            style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
          >
             <p>{personalInfo.phone || '+91 9426921514'}</p>
             <p>{personalInfo.email || 'jagjeet.dangar.cg@gmail.com'}</p>
             <a href={normalizeUrl(personalInfo.portfolio)} target="_blank" rel="noreferrer" className="underline block">
               {personalInfo.portfolio || 'My Portfolio'}
             </a>
          </div>
        </div>
        
        {/* Subtle Triple Column Nav Bar */}
        <div 
          className="flex border-y-2 border-black py-1 font-black uppercase text-slate-900 font-sans italic"
          style={{ fontSize: socialSize ? `${socialSize}px` : '0.8rem' }}
        >
           <div className="flex-1 text-center border-r border-slate-300">
             {socialLinks?.[0] ? <a href={normalizeUrl(socialLinks[0].url)} target="_blank" rel="noreferrer" className="underline">{socialLinks[0].label}</a> : 'GitHub Profile'}
           </div>
           <div className="flex-1 text-center border-r border-slate-300">
             {socialLinks?.[1] ? <a href={normalizeUrl(socialLinks[1].url)} target="_blank" rel="noreferrer" className="underline">{socialLinks[1].label}</a> : 'Linkedin Profile'}
           </div>
           <div className="flex-1 text-center">
             {socialLinks?.[2] ? <a href={normalizeUrl(socialLinks[2].url)} target="_blank" rel="noreferrer" className="underline">{socialLinks[2].label}</a> : 'Leetcode Profile'}
           </div>
        </div>
      </header>

      {/* About Me Centered Section */}
      <section 
        className="text-center shrink-0 border-b border-slate-100 pb-4"
        style={{ marginBottom: `${(sectionSpacing || 1) * 6}px` }}
      >
         <div className="inline-block relative mb-2">
            <h2 
              className="font-bold uppercase tracking-[0.2em] text-black"
              style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '18px' }}
            >
              ABOUT ME
            </h2>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-300" />
         </div>
         <p className="max-w-3xl mx-auto text-[1.1em] font-sans text-slate-600 leading-relaxed italic opacity-90">
           {summary || personalInfo.summary}
         </p>
      </section>

      {/* Two-Column Body Grid */}
      <div 
        className="flex-1 flex gap-10 min-h-0"
        style={{ marginTop: `${(sectionSpacing || 1) * 4}px` }}
      >
        
        {/* Left Narrow Column (Education, Skills, etc.) */}
        <div 
          className="w-[38%] flex flex-col border-r border-slate-300 pr-8 overflow-hidden"
          style={{ gap: `${(sectionSpacing || 1) * 8}px` }}
        >
           
           {/* Education */}
           <section>
             <h3 
               className="font-bold uppercase tracking-widest text-[#1e293b] border-b border-slate-300 pb-0.5 mb-4 shrink-0"
               style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '16px' }}
             >
               EDUCATION
             </h3>
             <div className="space-y-4">
                {(education || []).map((edu, idx) => (
                   <div key={idx} className="font-sans">
                      <p 
                        className="font-bold text-[1.1em] text-black italic"
                        style={{ fontSize: institutionSize ? `${institutionSize}px` : 'inherit' }}
                       >
                        {edu.college}
                       </p>
                      <p 
                        className="text-[0.95em] text-slate-600 font-medium"
                        style={{ fontSize: degreeSize ? `${degreeSize}px` : 'inherit' }}
                       >
                        {edu.degree}
                       </p>
                      <p 
                        className="text-[0.95em] text-slate-500"
                        style={{ fontSize: yearSize ? `${yearSize}px` : 'inherit' }}
                       >
                        {edu.year}
                       </p>
                      {edu.cgpa && (
                        <p 
                          className="text-[1em] font-bold text-black mt-0.5"
                          style={{ fontSize: gpaSize ? `${gpaSize}px` : 'inherit' }}
                        >
                          CGPA : {edu.cgpa}
                        </p>
                       )}
                   </div>
                ))}
             </div>
           </section>

           {/* Skills Categorized */}
           <section>
             <h3 
               className="font-bold uppercase tracking-widest text-[#1e293b] border-b border-slate-300 pb-0.5 mb-4 shrink-0"
               style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '16px' }}
             >
               SKILLS
             </h3>
             <div className="space-y-4 font-sans">
                {safeSkills.map((cat, idx) => (
                   <div key={idx} className="leading-tight text-[1em]">
                      <span 
                        className="font-bold text-black uppercase tracking-tighter"
                        style={{ fontSize: skillCategorySize ? `${skillCategorySize}px` : 'inherit' }}
                      >
                        {cat.category}: 
                      </span>
                      <span 
                        className="text-slate-600 font-medium leading-relaxed block mt-1"
                        style={{ fontSize: skillSize ? `${skillSize}px` : 'inherit' }}
                      >
                        {(cat.items || []).join(', ')}
                      </span>
                   </div>
                ))}
                {!safeSkills.length && getFlattened(skills).map((skill, idx) => (
                  <div key={idx} className="flex gap-2 text-[1em] font-medium items-center">
                    <span className="w-1 h-1 bg-black shrink-0" />
                    <span style={{ fontSize: skillSize ? `${skillSize}px` : 'inherit' }}>{skill}</span>
                  </div>
                ))}
             </div>
           </section>

           {/* Certifications List */}
           <section>
              <h3 
                className="font-bold uppercase tracking-widest text-[#1e293b] border-b border-slate-300 pb-0.5 mb-4 shrink-0"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '16px' }}
              >
                CERTIFICATES
              </h3>
              <ul className="space-y-2 font-sans">
                {safeCerts.map((cert, idx) => (
                   <li key={idx} className="flex gap-2 items-center text-[1em] font-medium group">
                      <span className="w-1.5 h-1.5 border border-black rotate-45 shrink-0" />
                      <span className="underline decoration-slate-200 underline-offset-2 decoration-1 group-hover:text-indigo-600 italic">{cert}</span>
                   </li>
                ))}
              </ul>
           </section>

           {/* Figma Designs */}
           {safeFigma.length > 0 && (
             <section>
                <h3 
                  className="font-bold uppercase tracking-widest text-[#1e293b] border-b border-slate-300 pb-0.5 mb-4 shrink-0"
                  style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '16px' }}
                >
                  FIGMA
                </h3>
                <ul className="space-y-2 font-sans">
                  {safeFigma.map((fig, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-[1em] font-medium">
                        <span className="w-1.5 h-1.5 border border-black rotate-45 shrink-0" />
                        <a href={normalizeUrl(fig.url)} target="_blank" rel="noreferrer" className="underline decoration-slate-200 underline-offset-2 hover:text-indigo-600">
                          {fig.title}
                        </a>
                    </li>
                  ))}
                </ul>
             </section>
           )}
        </div>

        {/* Right Wide Column (Experience, Projects) */}
        <div 
          className="flex-1 flex flex-col min-w-0 font-sans"
          style={{ gap: `${(sectionSpacing || 1) * 12}px` }}
        >
           
           {/* Work Experience */}
           <section className="shrink-0">
              <h3 
                className="font-serif font-black uppercase tracking-widest text-black border-b border-slate-300 pb-0.5 mb-4 shrink-0"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '16px' }}
              >
                WORK EXPERIENCE
              </h3>
              <div>
                {(experience || []).map((exp, idx) => {
                   const lines = exp.description?.split('\n') || [];
                   return (
                    <div key={idx} className="mb-8">
                       <div className="flex justify-between items-baseline mb-2">
                          <h4 
                            className="font-bold text-[1.25em] text-black italic"
                            style={{ fontSize: companySize ? `${companySize}px` : 'inherit' }}
                          >
                            {exp.company}
                          </h4>
                          <span 
                            className="text-[0.9em] font-bold text-slate-500 uppercase tracking-widest"
                            style={{ fontSize: durationSize ? `${durationSize}px` : 'inherit' }}
                          >
                            {exp.duration}
                          </span>
                       </div>
                       <p 
                        className="font-bold text-[1.1em] text-black mb-2"
                        style={{ fontSize: roleSize ? `${roleSize}px` : 'inherit' }}
                       >
                        {exp.role}
                       </p>
                       <ul className="space-y-1.5 pl-4 list-disc marker:text-black">
                          {lines.map((line, lidx) => {
                            const isLabel = line.includes(':');
                            if (isLabel) {
                              const [label, ...val] = line.split(':');
                              return (
                                <li key={lidx} className="text-[1em] leading-relaxed text-slate-700">
                                   <span className="font-bold underline decoration-slate-300 underline-offset-2">{label}:</span>
                                   <span>{val.join(':')}</span>
                                </li>
                              );
                            }
                            return <li key={lidx} className="text-[1em] leading-relaxed text-slate-700">{line}</li>;
                          })}
                       </ul>
                    </div>
                  );
                })}
              </div>
           </section>

           {/* Projects */}
           <section className="shrink-0">
              <h3 
                className="font-serif font-black uppercase tracking-widest text-black border-b border-slate-300 pb-0.5 mb-4 shrink-0"
                style={{ fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '16px' }}
              >
                PROJECTS
              </h3>
              <div className="space-y-10">
                  {(projects || []).map((proj, idx) => {
                    const descLines = proj.description?.split('\n') || [];
                    const primaryLink = (proj.links || []).find(l => ['github', 'live demo', 'deployed link', 'demo video'].includes(l.label.toLowerCase())) || proj.links?.[0];
                    
                    return (
                      <div key={idx} className="group/proj">
                         <div className="flex justify-between items-baseline mb-3">
                             {primaryLink ? (
                               <a 
                                 href={normalizeUrl(primaryLink.url)} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="font-bold text-[1.3em] text-black tracking-tight hover:text-blue-700 hover:underline decoration-blue-200 decoration-2 transition-all cursor-pointer italic"
                                 style={{ fontSize: projTitleSize ? `${projTitleSize}px` : 'inherit' }}
                               >
                                 {proj.title}
                               </a>
                             ) : (
                               <h4 
                                className="font-bold text-[1.3em] text-black tracking-tight italic"
                                style={{ fontSize: projTitleSize ? `${projTitleSize}px` : 'inherit' }}
                               >
                                {proj.title}
                               </h4>
                             )}
                             <span 
                              className="text-[0.85em] font-bold text-slate-500 italic uppercase bg-slate-50 px-2 py-0.5 rounded-sm"
                              style={{ fontSize: techStackSize ? `${techStackSize}px` : 'inherit' }}
                             >
                              {proj.tech}
                             </span>
                         </div>
                         <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                            {descLines.map((line, lidx) => {
                               // Function to inject links into a line of text
                               const renderLineWithLinks = (text) => {
                                 const validLinks = (proj.links || []).filter(l => l.label && l.label.trim().length > 0);
                                 
                                 // Step 1: Detect raw URLs first (highest priority)
                                 let parts = [{ type: 'text', content: text }];
                                 
                                 // Step 2: Match by labels (fuzzy)
                                 const sortedLinks = [...validLinks].sort((a, b) => b.label.length - a.label.length);
                                 
                                 sortedLinks.forEach(link => {
                                   let newParts = [];
                                   parts.forEach(part => {
                                     if (part.type === 'link') {
                                       newParts.push(part);
                                       return;
                                     }
                                     
                                     const escapedLabel = link.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                                     // Match "Label" or "Label: Value" or "Label- Value" using a very greedy regex
                                     const regex = new RegExp(`(${escapedLabel}\\s*[\\:\\-\\–\\—]\\s*[^\\|\\n]+|${escapedLabel})`, 'gi');
                                     const splitParts = part.content.split(regex);
                                     
                                     splitParts.forEach((sp, i) => {
                                       if (i % 2 === 1) {
                                         newParts.push({ type: 'link', content: sp, url: link.url });
                                       } else if (sp) {
                                         newParts.push({ type: 'text', content: sp });
                                       }
                                     });
                                   });
                                   parts = newParts;
                                 });
                                 
                                 // Step 3: Global common label matching (for GitHub, Demo, Live) if still text
                                 const commonLabels = ['github', 'demo', 'live', 'video', 'link', 'deployed', 'certificate'];
                                 commonLabels.forEach(cl => {
                                   let newParts = [];
                                   parts.forEach(part => {
                                     if (part.type === 'link') {
                                       newParts.push(part);
                                       return;
                                     }
                                     
                                     // Only if this common label isn't already handled AND a link for it exists in proj.links
                                     const matchingLink = validLinks.find(l => l.label.toLowerCase().includes(cl));
                                     if (matchingLink) {
                                       const regex = new RegExp(`(${cl}\\s*[:\\-]\\s*[^\\|\\n]+|${cl})`, 'gi');
                                       const splitParts = part.content.split(regex);
                                       splitParts.forEach((sp, i) => {
                                         if (i % 2 === 1) {
                                           newParts.push({ type: 'link', content: sp, url: matchingLink.url });
                                         } else if (sp) {
                                           newParts.push({ type: 'text', content: sp });
                                         }
                                       });
                                     } else {
                                       newParts.push(part);
                                     }
                                   });
                                   parts = newParts;
                                 });
 
                                 return parts.map((part, i) => (
                                   part.type === 'link' ? (
                                     <a 
                                       key={i}
                                       href={normalizeUrl(part.url)} 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       onClick={(e) => e.stopPropagation()}
                                       className="text-slate-800 font-extrabold no-underline hover:underline decoration-blue-200 transition-all cursor-pointer relative z-10 mx-0.5"
                                     >
                                       {part.content}
                                     </a>
                                   ) : (
                                     <span key={i} dangerouslySetInnerHTML={{ 
                                       __html: part.content.replace(
                                         /(https?:\/\/[^\s|]+)/g, 
                                         '<a href="$1" target="_blank" class="text-slate-800 font-bold no-underline hover:underline cursor-pointer">link</a>'
                                       ) 
                                     }} />
                                   )
                                 ));
                               };
 
                               return (
                                 <p key={lidx} className="text-[1.05em] font-medium text-slate-700 leading-relaxed">
                                   {renderLineWithLinks(line)}
                                 </p>
                               );
                            })}
                         </div>
                      </div>
                    );
                  })}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Jagjeet;
