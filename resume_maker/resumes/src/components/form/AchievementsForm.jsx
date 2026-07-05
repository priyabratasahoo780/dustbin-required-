import React, { useState } from 'react';
import { Plus, Trash2, Trophy, X } from 'lucide-react';
import { motion } from 'framer-motion';
import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';

const AchievementsForm = () => {
  const { achievements, updateList, settings, updateSettings } = useResume();
  const { 
    sectionTitleSize = 0, 
    bodySize = 0, 
    sectionSpacing = 0,
    achievementsSize = 0
  } = settings || {};
  const [newAchievement, setNewAchievement] = useState('');

  const addAchievement = () => {
    if (newAchievement.trim()) {
      updateList('achievements', [...achievements, newAchievement.trim()]);
      setNewAchievement('');
    }
  };

  const removeAchievement = (index) => {
    updateList('achievements', achievements.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Achievements" 
            subtitle="Your notable accomplishments" 
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
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Achiev.</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={achievementsSize || ''}
                onChange={(e) => updateSettings({ achievementsSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <PremiumInput
            placeholder="e.g. Indradhanu Global Finalist: Top 25 Finalist | Jan 2026"
            value={newAchievement}
            onChange={(e) => setNewAchievement(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addAchievement()}
          />
        </div>
        <button
          onClick={addAchievement}
          className="px-6 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:shadow-xl transition-all flex items-center justify-center gap-2 h-14 sm:h-[60px]"
        >
          <Plus size={20} /> Add Achiev.
        </button>
      </div>

      <div className="space-y-3">
        {(achievements || []).map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <Trophy size={16} />
              </div>
              <span className="text-sm font-bold text-slate-700">{ach}</span>
            </div>
            <button
              onClick={() => removeAchievement(index)}
              className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
            >
              <Trash2 size={18} />
            </button>
          </motion.div>
        ))}
        {(!achievements || achievements.length === 0) && (
          <div className="text-center py-10 text-slate-400 font-medium bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200">
            No achievements added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsForm;
