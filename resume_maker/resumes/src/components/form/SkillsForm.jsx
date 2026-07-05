import React, { useState } from 'react';
import { X, Plus, FolderPlus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';

const SkillsForm = () => {
  const { skills, updateList, settings, updateSettings } = useResume();
  const { sectionTitleSize = 0, bodySize = 0, sectionSpacing = 0, skillCategorySize = 0, skillSize = 0 } = settings || {};
  const [newCategory, setNewCategory] = useState('');

  // Handle case where skills might be old string array
  const formattedSkills = Array.isArray(skills) && (skills.length === 0 || typeof skills[0] === 'string')
    ? [{ category: 'Professional Skills', items: Array.isArray(skills) ? skills : [] }]
    : skills;

  const addCategory = () => {
    if (newCategory.trim()) {
      updateList('skills', [...formattedSkills, { category: newCategory.trim(), items: [] }]);
      setNewCategory('');
    }
  };

  const removeCategory = (catIndex) => {
    updateList('skills', formattedSkills.filter((_, i) => i !== catIndex));
  };

  const addSkillToCategory = (catIndex, skillInput) => {
    if (skillInput.trim()) {
      const newList = [...formattedSkills];
      newList[catIndex] = {
        ...newList[catIndex],
        items: [...newList[catIndex].items, skillInput.trim()]
      };
      updateList('skills', newList);
    }
  };

  const removeSkillFromCategory = (catIndex, skillIndex) => {
    const newList = [...formattedSkills];
    newList[catIndex] = {
      ...newList[catIndex],
      items: newList[catIndex].items.filter((_, i) => i !== skillIndex)
    };
    updateList('skills', newList);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Professional Skills" 
            subtitle="Categorize your technical expertise" 
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
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Cat. Size</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={skillCategorySize || ''}
                onChange={(e) => updateSettings({ skillCategorySize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Skill Size</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={skillSize || ''}
                onChange={(e) => updateSettings({ skillSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Category */}
      <div className="flex gap-3">
        <div className="flex-1">
          <PremiumInput
            placeholder="e.g. Frontend, Backend, Tools"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <button
          onClick={addCategory}
          className="px-6 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:shadow-xl transition-all flex items-center gap-2 h-[60px]"
        >
          <FolderPlus size={20} /> Add Category
        </button>
      </div>

      <div className="space-y-6">
        {formattedSkills.map((category, catIndex) => (
          <GlassCard key={catIndex} className="p-4 sm:p-6 border-slate-100 bg-white/50 relative group">
            <button
              onClick={() => removeCategory(catIndex)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>
            
            <h3 className="text-sm font-black text-slate-800 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              {category.category}
            </h3>

            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add skill..."
                  className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-bold"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addSkillToCategory(catIndex, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {(category.items || []).map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-700 text-xs font-bold"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkillFromCategory(catIndex, skillIndex)}
                      className="text-slate-300 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
