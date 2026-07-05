import React from 'react';
import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceForm = () => {
  const { experience, updateList, settings, updateSettings } = useResume();
  const { sectionTitleSize = 0, bodySize = 0, sectionSpacing = 0, companySize = 0, roleSize = 0, durationSize = 0 } = settings || {};

  const addExperience = () => {
    const newEntry = {
      company: '',
      role: '',
      duration: '',
      description: '',
    };
    updateList('experience', [...experience, newEntry]);
  };

  const removeExperience = (index) => {
    updateList('experience', experience.filter((_, i) => i !== index));
  };

  const handleChange = (index, name, value) => {
    const newList = experience.map((exp, i) => 
      i === index ? { ...exp, [name]: value } : exp
    );
    updateList('experience', newList);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle
            title="Work Experience"
            subtitle="Showcase your professional journey"
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
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Company</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={companySize || ''}
                onChange={(e) => updateSettings({ companySize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Role</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={roleSize || ''}
                onChange={(e) => updateSettings({ roleSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Dur</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={durationSize || ''}
                onChange={(e) => updateSettings({ durationSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
        >
          <Plus size={18} /> Add Role
        </button>
      </div>

      <div className="space-y-4">
        {experience.map((exp, index) => (
          <GlassCard key={index} className="relative p-4 sm:p-8 group border-slate-100 bg-white/60">
            <button
              onClick={() => removeExperience(index)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumInput
                label="Company Name"
                placeholder="e.g. Google"
                value={exp.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
              />
              <PremiumInput
                label="Role / Title"
                placeholder="e.g. Senior Developer"
                value={exp.role}
                onChange={(e) => handleChange(index, 'role', e.target.value)}
              />
              <PremiumInput
                label="Duration"
                placeholder="e.g. June 2022 - Present"
                value={exp.duration}
                onChange={(e) => handleChange(index, 'duration', e.target.value)}
              />
              <div className="md:col-span-2 space-y-2 group">
                <label className="text-sm font-semibold text-slate-500 ml-1 group-focus-within:text-indigo-500 transition-colors">
                  Job Description
                </label>
                <textarea
                  placeholder="Describe your key responsibilities and achievements..."
                  value={exp.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  className="w-full px-5 py-3 rounded-2xl bg-white/50 border-2 border-slate-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 text-slate-800 resize-none h-32"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-bold text-slate-800 uppercase tracking-tight">Project Links</label>
                  <button
                    onClick={() => {
                      const newList = [...experience];
                      const links = Array.isArray(newList[index].links) ? newList[index].links : [];
                      newList[index] = { ...newList[index], links: [...links, { label: '', url: '' }] };
                      updateList('experience', newList);
                    }}
                    className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded-lg transition-all"
                  >
                    <Plus size={14} /> Add Link
                  </button>
                </div>
                
                <div className="space-y-3">
                  {(Array.isArray(exp.links) ? exp.links : []).map((link, lidx) => (
                    <div key={lidx} className="flex gap-3 items-end animate-in fade-in slide-in-from-left-2 duration-300">
                      <div className="flex-1">
                        <PremiumInput
                          placeholder="Label (e.g. LIVE)"
                          value={link.label}
                          onChange={(e) => {
                            const newList = [...experience];
                            newList[index].links[lidx].label = e.target.value;
                            updateList('experience', newList);
                          }}
                        />
                      </div>
                      <div className="flex-[2]">
                        <PremiumInput
                          placeholder="URL (e.g. https://...)"
                          value={link.url}
                          onChange={(e) => {
                            const newList = [...experience];
                            newList[index].links[lidx].url = e.target.value;
                            updateList('experience', newList);
                          }}
                        />
                      </div>
                      <button
                        onClick={() => {
                          const newList = [...experience];
                          newList[index].links = exp.links.filter((_, i) => i !== lidx);
                          updateList('experience', newList);
                        }}
                        className="p-3.5 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all mb-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}

        {experience.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl">
            <p className="text-slate-500 italic">No experience added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
