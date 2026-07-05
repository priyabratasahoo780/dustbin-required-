import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsForm = () => {
  const { projects, updateList, settings, updateSettings } = useResume();
  const { 
    sectionTitleSize = 0, 
    bodySize = 0, 
    sectionSpacing = 0, 
    projTitleSize = 0, 
    techStackSize = 0 
  } = settings || {};

  const addProject = () => {
    const newEntry = {
      title: '',
      tech: '',
      description: '',
      link: '',
    };
    updateList('projects', [...projects, newEntry]);
  };

  const removeProject = (index) => {
    updateList('projects', projects.filter((_, i) => i !== index));
  };

  const handleChange = (index, name, value) => {
    const newList = projects.map((proj, i) => 
      i === index ? { ...proj, [name]: value } : proj
    );
    updateList('projects', newList);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Key Projects" 
            subtitle="Showcase your best work and achievements" 
          />
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 px-1 mt-1">
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-tight">Section (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={sectionTitleSize || ''}
                onChange={(e) => updateSettings({ sectionTitleSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-slate-50 border border-slate-200 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-tight">Body (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={bodySize || ''}
                onChange={(e) => updateSettings({ bodySize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-slate-50 border border-slate-200 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-tight">Space (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={sectionSpacing || ''}
                onChange={(e) => updateSettings({ sectionSpacing: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-slate-50 border border-slate-200 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Title</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={projTitleSize || ''}
                onChange={(e) => updateSettings({ projTitleSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Tech</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={techStackSize || ''}
                onChange={(e) => updateSettings({ techStackSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((proj, index) => (
          <GlassCard key={index} className="relative p-4 sm:p-8 group border-slate-100 bg-white/60">
            <button
              onClick={() => removeProject(index)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumInput
                label="Project Title"
                placeholder="e.g. AI Mirror Chat Bot"
                value={proj.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
              />
              <PremiumInput
                label="Tech Stack"
                placeholder="e.g. React, Node.js, Tailwind"
                value={proj.tech}
                onChange={(e) => handleChange(index, 'tech', e.target.value)}
              />

              {/* Explicit Link Inputs for UX */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <PremiumInput
                  label="GitHub URL"
                  placeholder="https://github.com/..."
                  value={(proj.links || []).find(l => l.label.toLowerCase() === 'github')?.url || ''}
                  onChange={(e) => {
                    const newList = [...projects];
                    const links = Array.isArray(newList[index].links) ? [...newList[index].links] : [];
                    const foundIdx = links.findIndex(l => l.label.toLowerCase() === 'github');
                    if (foundIdx >= 0) {
                      links[foundIdx] = { ...links[foundIdx], url: e.target.value };
                    } else {
                      links.push({ label: 'GitHub', url: e.target.value });
                    }
                    newList[index] = { ...newList[index], links };
                    updateList('projects', newList);
                  }}
                />
                <PremiumInput
                  label="Live Demo URL"
                  placeholder="https://..."
                  value={(proj.links || []).find(l => l.label.toLowerCase() === 'live demo')?.url || ''}
                  onChange={(e) => {
                    const newList = [...projects];
                    const links = Array.isArray(newList[index].links) ? [...newList[index].links] : [];
                    const foundIdx = links.findIndex(l => l.label.toLowerCase() === 'live demo');
                    if (foundIdx >= 0) {
                      links[foundIdx] = { ...links[foundIdx], url: e.target.value };
                    } else {
                      links.push({ label: 'Live Demo', url: e.target.value });
                    }
                    newList[index] = { ...newList[index], links };
                    updateList('projects', newList);
                  }}
                />
                <PremiumInput
                  label="Video URL"
                  placeholder="https://youtube.com/..."
                  value={(proj.links || []).find(l => l.label.toLowerCase() === 'demo video')?.url || ''}
                  onChange={(e) => {
                    const newList = [...projects];
                    const links = Array.isArray(newList[index].links) ? [...newList[index].links] : [];
                    const foundIdx = links.findIndex(l => l.label.toLowerCase() === 'demo video');
                    if (foundIdx >= 0) {
                      links[foundIdx] = { ...links[foundIdx], url: e.target.value };
                    } else {
                      links.push({ label: 'Demo Video', url: e.target.value });
                    }
                    newList[index] = { ...newList[index], links };
                    updateList('projects', newList);
                  }}
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="flex justify-between items-center px-1">
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-slate-800 uppercase tracking-tight">Additional Links</label>
                    <span className="text-[10px] text-slate-400 font-medium italic">Labels added here will be clickable in description text</span>
                  </div>
                  <button
                    onClick={() => {
                      const newList = [...projects];
                      const links = Array.isArray(newList[index].links) ? newList[index].links : [];
                      newList[index] = { ...newList[index], links: [...links, { label: '', url: '' }] };
                      updateList('projects', newList);
                    }}
                    className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded-lg transition-all"
                  >
                    <Plus size={14} /> Add Custom Link
                  </button>
                </div>
                
                <div className="space-y-3">
                  {(Array.isArray(proj.links) ? proj.links : [])
                    .filter(l => !['github', 'live demo', 'demo video'].includes(l.label.toLowerCase()))
                    .map((link, lidx) => (
                      <div key={lidx} className="flex gap-3 items-end animate-in fade-in slide-in-from-left-2 duration-300">
                        <div className="flex-1">
                          <PremiumInput
                            placeholder="Label (e.g. Portfolio)"
                            value={link.label}
                            onChange={(e) => {
                              const newList = [...projects];
                              const actualLidx = newList[index].links.findIndex(l => l === link);
                              newList[index].links[actualLidx].label = e.target.value;
                              updateList('projects', newList);
                            }}
                          />
                        </div>
                        <div className="flex-[2]">
                          <PremiumInput
                            placeholder="URL (e.g. https://...)"
                            value={link.url}
                            onChange={(e) => {
                              const newList = [...projects];
                              const actualLidx = newList[index].links.findIndex(l => l === link);
                              newList[index].links[actualLidx].url = e.target.value;
                              updateList('projects', newList);
                            }}
                          />
                        </div>
                        <button
                          onClick={() => {
                            const newList = [...projects];
                            newList[index].links = proj.links.filter(l => l !== link);
                            updateList('projects', newList);
                          }}
                          className="p-3.5 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all mb-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-2 group">
                <label className="text-sm font-semibold text-slate-500 ml-1 group-focus-within:text-indigo-500 transition-colors">
                  Project Description
                </label>
                <textarea
                  placeholder="What problem did you solve? What technologies did you use?"
                  value={proj.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  className="w-full px-5 py-3 rounded-2xl bg-white/50 border-2 border-slate-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 text-slate-800 resize-none h-32"
                />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsForm;
