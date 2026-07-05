import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';

const EducationForm = () => {
  const { education, updateList, settings, updateSettings } = useResume();
  const { sectionTitleSize = 0, bodySize = 0, sectionSpacing = 0, institutionSize = 0, degreeSize = 0, yearSize = 0, gpaSize = 0 } = settings || {};

  const addEducation = () => {
    updateList('education', [...education, { college: '', degree: '', year: '', cgpa: '' }]);
  };

  const removeEducation = (index) => {
    updateList('education', education.filter((_, i) => i !== index));
  };

  const handleChange = (index, name, value) => {
    const newList = education.map((edu, i) => 
      i === index ? { ...edu, [name]: value } : edu
    );
    updateList('education', newList);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Education" 
            subtitle="Your academic qualifications" 
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
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Inst.</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={institutionSize || ''}
                onChange={(e) => updateSettings({ institutionSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Degree</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={degreeSize || ''}
                onChange={(e) => updateSettings({ degreeSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Year</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={yearSize || ''}
                onChange={(e) => updateSettings({ yearSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">GPA</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={gpaSize || ''}
                onChange={(e) => updateSettings({ gpaSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
        >
          <Plus size={18} /> Add Degree
        </button>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <GlassCard key={index} className="relative p-4 sm:p-8 group border-slate-100 bg-white/60">
            <button
              onClick={() => removeEducation(index)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumInput
                label="Institution"
                placeholder="e.g. Stanford University"
                value={edu.college}
                onChange={(e) => handleChange(index, 'college', e.target.value)}
              />
              <PremiumInput
                label="Degree"
                placeholder="e.g. B.S. in Computer Science"
                value={edu.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
              />
              <PremiumInput
                label="Graduation Year"
                placeholder="e.g. 2024"
                value={edu.year}
                onChange={(e) => handleChange(index, 'year', e.target.value)}
              />
              <PremiumInput
                label="GPA / Result"
                placeholder="e.g. 3.9/4.0"
                value={edu.cgpa}
                onChange={(e) => handleChange(index, 'cgpa', e.target.value)}
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default EducationForm;
