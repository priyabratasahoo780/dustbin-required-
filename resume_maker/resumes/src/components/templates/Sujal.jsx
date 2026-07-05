import React from 'react';
import { 
  Mail, 
  Phone, 
  Globe
} from 'lucide-react';
import useResume from '../../hooks/useResume';

const Sujal = () => {
  const { 
    personalInfo, 
    skills, 
    education, 
    projects, 
    certifications, 
    figmaLinks, 
    achievements,
    socialLinks,
    settings
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
    certTitleSize = 0,
    certIssuerSize = 0,
    achievementsSize = 0,
    figmaSize = 0
  } = settings || {};

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('mailto:') || url.startsWith('tel:')) return url;
    return url.startsWith('http') ? url : `https://${url}`;
  };

  return (
    <div 
      className="template-root flex flex-col bg-white text-[#333] font-serif leading-tight h-full"
      style={{ fontSize: bodySize ? `${bodySize}px` : `${fontSize}px` }}
    >
      {/* Header */}
      <header className="px-8 pt-6 pb-4 flex justify-between items-center border-b border-slate-200 bg-slate-50/10">
        <div className="flex-1">
          <h1 className="font-extrabold tracking-tight text-slate-900 uppercase">
             <span 
              className="border-b-2 border-slate-800 pb-1 inline-block"
              style={{ fontSize: nameSize ? `${nameSize}px` : '1.875rem' }}
             >
                {personalInfo.fullName || 'VASARA SUJAL'}
             </span>
          </h1>
          <p 
            className="text-slate-600 font-bold mt-2 italic"
            style={{ fontSize: taglineSize ? `${taglineSize}px` : '0.9rem' }}
          >
            {personalInfo.jobTitle || 'UI/UX Designer & Full Stack Developer'}
          </p>
        </div>
        <div 
          className="flex flex-col items-end gap-2 font-bold"
          style={{ fontSize: contactSize ? `${contactSize}px` : '0.85rem' }}
        >
          {personalInfo.phone && (
            <div className="flex items-center gap-2 h-5">
              <span className="leading-none">{personalInfo.phone}</span>
              <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-white shrink-0">
                <Phone size={8} fill="currentColor" />
              </div>
            </div>
          )}
          {personalInfo.email && (
            <div className="flex items-center gap-2 h-5">
              <span className="leading-none">{personalInfo.email}</span>
              <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-white shrink-0">
                <Mail size={8} fill="currentColor" />
              </div>
            </div>
          )}
          {(personalInfo.portfolio || personalInfo.website) && (
            <div className="flex items-center gap-2 h-5">
              <span className="leading-none">{personalInfo.portfolio || personalInfo.website}</span>
              <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-white shrink-0">
                <Globe size={8} />
              </div>
            </div>
          )}
         </div>
      </header>

      {/* Social Bar */}
      {socialLinks?.length > 0 && (
        <div 
          className="px-6 border-b-2 border-slate-800 flex justify-between font-bold uppercase tracking-wider bg-white shrink-0"
          style={{ 
            fontSize: socialSize ? `${socialSize}px` : '0.8rem',
            paddingTop: `${(sectionSpacing || 4) * 2}px`,
            paddingBottom: `${(sectionSpacing || 4) * 2}px` 
          }}
        >
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={normalizeUrl(link.url)} 
              target="_blank" 
              rel="noreferrer" 
              className={`flex-1 text-center px-2 hover:text-indigo-600 transition-colors ${idx < socialLinks.length - 1 ? 'border-r border-slate-200' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Content Columns */}
      <div className="flex flex-1 p-6 gap-8">
        
        {/* Left Column (Skills, Education, Certifications) */}
        <div className="w-[35%] space-y-6 pr-4 border-r border-slate-100 flex flex-col">
          
          {/* Skills Section */}
          <section className="flex-1 flex flex-col">
            <h2 
              className="font-bold uppercase text-slate-900 border-b border-slate-300 flex items-center gap-1.5 shrink-0"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem', 
                paddingBottom: `${sectionSpacing || 4}px`, 
                marginBottom: `${(sectionSpacing || 4) * 2}px` 
              }}
            >
              SKILLS
            </h2>
            <div className="space-y-4 flex-1 flex flex-col justify-start">
              {(Array.isArray(skills) ? skills : []).map((category, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 
                    className="font-extrabold text-slate-900 flex items-center gap-1.5 italic uppercase tracking-tighter"
                    style={{ fontSize: skillCategorySize ? `${skillCategorySize}px` : '11px' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0"></span>
                    {category.category}
                  </h3>
                  <div className="pl-3">
                    <p 
                      className="text-slate-700 leading-snug font-semibold"
                      style={{ fontSize: skillSize ? `${skillSize}px` : '10px' }}
                    >
                      {Array.isArray(category.items) ? category.items.join(', ') : category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="flex-1 flex flex-col pt-4">
            <h2 
              className="font-bold uppercase text-slate-900 border-b border-slate-300 shrink-0"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem',
                paddingBottom: `${sectionSpacing || 4}px`, 
                marginBottom: `${(sectionSpacing || 4) * 2}px` 
              }}
            >
              EDUCATION
            </h2>
            <div className="space-y-4 flex-1 flex flex-col justify-start">
              {(education || []).map((edu, idx) => (
                <div key={idx} className="leading-tight">
                  <h3 
                    className="font-bold text-slate-900 uppercase"
                    style={{ fontSize: institutionSize ? `${institutionSize}px` : '11px' }}
                  >
                    {edu.college}
                  </h3>
                  <p 
                    className="italic font-medium mt-1 text-slate-700 underline decoration-slate-100 underline-offset-2"
                    style={{ fontSize: degreeSize ? `${degreeSize}px` : '10px' }}
                  >
                    {edu.degree}
                  </p>
                  <p 
                    className="font-bold text-slate-400 mt-1"
                    style={{ fontSize: yearSize ? `${yearSize}px` : '10px' }}
                  >
                    {edu.year || edu.duration}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="flex-1 pt-4">
            <h2 
              className="font-bold uppercase text-slate-900 border-b border-slate-300 shrink-0"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem',
                paddingBottom: `${sectionSpacing || 4}px`, 
                marginBottom: `${(sectionSpacing || 4) * 2}px` 
              }}
            >
              CERTIFICATIONS
            </h2>
            <div className="space-y-4">
              {(certifications || []).map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 
                    className="font-bold text-slate-900 italic underline decoration-slate-200 underline-offset-1"
                    style={{ fontSize: certTitleSize ? `${certTitleSize}px` : '10px' }}
                  >
                    {cat.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-y-1 pl-1.5">
                    {(cat.items || []).map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-1.5 font-medium leading-tight text-slate-600"
                        style={{ fontSize: certIssuerSize ? `${certIssuerSize}px` : '9px' }}
                      >
                        <span className="text-slate-900 shrink-0 select-none text-[10px]">•</span>
                        {typeof item === 'object' && item.url ? (
                          <a href={normalizeUrl(item.url)} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                            {item.name}
                          </a>
                        ) : (
                          <span>{typeof item === 'object' ? item.name : item}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Projects, Figma, Achievements) */}
        <div className="flex-1 flex flex-col">
          
          {/* Projects Section */}
          <section className="flex-[3] flex flex-col min-h-0">
            <h2 
              className="font-bold uppercase text-slate-900 border-b border-slate-300 flex items-center justify-between shrink-0"
              style={{ 
                fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem',
                paddingBottom: `${sectionSpacing || 4}px`, 
                marginBottom: `${(sectionSpacing || 4) * 2}px` 
              }}
            >
              PROJECTS
            </h2>
            <div className="flex-1 flex flex-col justify-start space-y-6">
              {(projects || []).map((proj, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 
                      className="font-extrabold text-slate-900 uppercase tracking-tight underline decoration-slate-200 underline-offset-4 decoration-2"
                      style={{ fontSize: projTitleSize ? `${projTitleSize}px` : '12px' }}
                    >
                      {proj.title}
                    </h3>
                    <span 
                      className="text-slate-400 italic shrink-0"
                      style={{ fontSize: durationSize ? `${durationSize}px` : '9px' }}
                    >
                      {proj.duration ? `(${proj.duration})` : ''}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 text-[10px] pl-0.5 leading-snug font-semibold text-slate-700">
                    <li className="flex gap-2">
                       <span className="font-extrabold shrink-0 underline decoration-slate-100 underline-offset-2">Desc:</span> 
                       <span className="flex-1">{Array.isArray(proj.description) ? proj.description[0] : (proj.description || "").split('\n')[0]}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold shrink-0 underline decoration-slate-100 underline-offset-2">Tech:</span> 
                      <span 
                        className="flex-1 italic"
                        style={{ fontSize: techStackSize ? `${techStackSize}px` : '10px' }}
                      >
                        {proj.tech}
                      </span>
                    </li>
                    <li className="pt-1 flex flex-wrap gap-x-3 gap-y-1">
                      {proj.links && proj.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={normalizeUrl(link.url)} 
                          target="_blank" 
                          rel="noreferrer"
                          className="underline decoration-slate-300 italic text-slate-500 font-bold decoration-1 underline-offset-2 hover:text-indigo-600 transition-colors"
                        >
                           {link.label}
                        </a>
                      ))}
                      {proj.github && (
                        <a href={normalizeUrl(proj.github)} target="_blank" rel="noreferrer" className="underline decoration-slate-300 italic text-slate-500 font-bold decoration-1 underline-offset-2 hover:text-indigo-600 transition-colors">
                          GitHub
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Figma Section */}
          {(figmaLinks && figmaLinks.length > 0) && (
            <section className="flex-1 flex flex-col pt-6">
              <h2 
                className="font-bold uppercase text-slate-900 border-b border-slate-300 flex items-center gap-1.5 shrink-0"
                style={{ 
                  fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem',
                  paddingBottom: `${sectionSpacing || 4}px`, 
                  marginBottom: `${(sectionSpacing || 4) * 2}px` 
                }}
              >
                FIGMA
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 pl-1.5 flex-1 items-start">
                {figmaLinks.map((link, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 font-bold leading-tight text-slate-600 italic"
                    style={{ fontSize: figmaSize ? `${figmaSize}px` : '10px' }}
                  >
                    <span className="text-slate-900 leading-none select-none">•</span>
                    <a href={normalizeUrl(link.url)} target="_blank" rel="noreferrer" className="underline decoration-slate-200 underline-offset-2 hover:text-indigo-600">
                      {link.title}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements Section */}
          {(achievements && achievements.length > 0) && (
            <section className="flex-1 flex flex-col pt-6">
              <h2 
                className="font-bold uppercase text-slate-900 border-b border-slate-300 flex items-center gap-1.5 shrink-0"
                style={{ 
                  fontSize: sectionTitleSize ? `${sectionTitleSize}px` : '1.125rem',
                  paddingBottom: `${sectionSpacing || 4}px`, 
                  marginBottom: `${(sectionSpacing || 4) * 2}px` 
                }}
              >
                ACHIEVEMENTS
              </h2>
              <ul 
                className="flex-1 flex flex-col justify-start space-y-2 pl-1.5 leading-snug font-semibold text-slate-700"
                style={{ fontSize: achievementsSize ? `${achievementsSize}px` : '10px' }}
              >
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="shrink-0 leading-none select-none text-slate-900 opacity-40 mt-1">•</span>
                    <span className="flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sujal;
