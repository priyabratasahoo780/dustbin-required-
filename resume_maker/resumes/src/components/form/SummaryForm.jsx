import useResume from '../../hooks/useResume';
import { SectionTitle } from '../ui/UIComponents';

const SummaryForm = () => {
  const { personalInfo, updatePersonalInfo, settings, updateSettings } = useResume();
  const { sectionTitleSize = 0, bodySize = 0, sectionSpacing = 0 } = settings || {};

  const handleChange = (e) => {
    updatePersonalInfo({ summary: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Professional Summary" 
            subtitle="Summarize your career highlights in 2-3 sentences" 
          />
          <div className="flex items-center gap-4 px-1">
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Section (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={sectionTitleSize || ''}
                onChange={(e) => updateSettings({ sectionTitleSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-16 h-7 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Body (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={bodySize || ''}
                onChange={(e) => updateSettings({ bodySize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-16 h-7 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Space (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={sectionSpacing || ''}
                onChange={(e) => updateSettings({ sectionSpacing: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-16 h-7 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="group space-y-2">
        <label className="text-sm font-bold text-slate-500 ml-1 group-focus-within:text-indigo-500 transition-colors">
          About You
        </label>
        <textarea
          value={personalInfo.summary}
          onChange={handleChange}
          placeholder="Professional, results-driven developer with 5+ years of experience..."
          className="w-full px-6 py-5 rounded-[2rem] bg-white/60 backdrop-blur-sm border-2 border-slate-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 text-slate-800 resize-none h-48 shadow-sm focus:shadow-xl focus:shadow-indigo-500/10"
        />
      </div>
    </div>
  );
};

export default SummaryForm;
