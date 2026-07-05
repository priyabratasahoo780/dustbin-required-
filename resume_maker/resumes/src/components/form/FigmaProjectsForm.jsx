import React, { useState } from 'react';
import { Plus, Trash2, Layout, X } from 'lucide-react';
import { motion } from 'framer-motion';
import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';

const FigmaProjectsForm = () => {
  const { figmaLinks, updateList, settings, updateSettings } = useResume();
  const { sectionTitleSize = 0, bodySize = 0, sectionSpacing = 0, figmaSize = 0 } = settings || {};
  const [newLink, setNewLink] = useState({ title: '', url: '' });

  const addLink = () => {
    if (newLink.title.trim()) {
      updateList('figmaLinks', [...(figmaLinks || []), newLink]);
      setNewLink({ title: '', url: '' });
    }
  };

  const removeLink = (index) => {
    updateList('figmaLinks', (figmaLinks || []).filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="UI/UX Tags" 
            subtitle="Add design keywords like 'Figma', 'Prototyping', etc." 
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
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Figma</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={figmaSize || ''}
                onChange={(e) => updateSettings({ figmaSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <PremiumInput
            placeholder="e.g. Figma, Framer, User Research"
            value={newLink.title}
            onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
            onKeyDown={(e) => e.key === 'Enter' && addLink()}
          />
        </div>
        <button
          onClick={addLink}
          className="px-6 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:shadow-xl transition-all flex items-center justify-center gap-2 h-14 sm:h-[60px]"
        >
          <Plus size={20} /> Add Tag
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {(figmaLinks || []).map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm transition-all hover:border-indigo-300"
          >
            <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{proj.title}</span>
            <button
              onClick={() => removeLink(index)}
              className="text-slate-300 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
        {(!figmaLinks || figmaLinks.length === 0) && (
          <div className="w-full text-center py-10 text-slate-400 font-medium bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200">
            No UI/UX tags added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default FigmaProjectsForm;
