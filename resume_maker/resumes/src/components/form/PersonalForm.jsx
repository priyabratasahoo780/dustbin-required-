import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle } from '../ui/UIComponents';
import { Plus, Trash2 } from 'lucide-react';

const PersonalForm = () => {
  const { personalInfo, updatePersonalInfo, socialLinks, updateList, settings, updateSettings } = useResume();
  const { 
    nameSize = 0, 
    taglineSize = 0, 
    sectionTitleSize = 0, 
    bodySize = 0, 
    contactSize = 0, 
    socialSize = 0, 
    sectionSpacing = 0 
  } = settings || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Personal Details" 
            subtitle="Help recruiters get in touch with you easily" 
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
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Name</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={nameSize || ''}
                onChange={(e) => updateSettings({ nameSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Tagline</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={taglineSize || ''}
                onChange={(e) => updateSettings({ taglineSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Contact</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={contactSize || ''}
                onChange={(e) => updateSettings({ contactSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-100 pb-8">
        <div className="space-y-2">
          <PremiumInput 
            label="Full Name" 
            name="fullName" 
            value={personalInfo.fullName} 
            onChange={handleChange} 
            placeholder="e.g. ARJUN DIVRANIYA"
          />
          <div className="flex items-center gap-2 px-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Name (PX)</label>
            <input 
              type="number" 
              placeholder="Auto"
              value={nameSize || ''}
              onChange={(e) => updateSettings({ nameSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
              className="w-16 h-7 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="space-y-2">
          <PremiumInput 
            label="Job Title" 
            name="jobTitle" 
            value={personalInfo.jobTitle} 
            onChange={handleChange} 
            placeholder="e.g. Full Stack Developer"
          />
          <div className="flex items-center gap-2 px-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Tagline (PX)</label>
            <input 
              type="number" 
              placeholder="Auto"
              value={taglineSize || ''}
              onChange={(e) => updateSettings({ taglineSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
              className="w-16 h-7 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-4 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-3xl border border-slate-100/50">
          <div className="flex justify-between items-center md:col-span-2 px-1 mb-2">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact Details</h4>
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Contact (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={contactSize || ''}
                onChange={(e) => updateSettings({ contactSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-16 h-7 bg-white border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <PremiumInput 
            label="Email" 
            name="email" 
            type="email" 
            value={personalInfo.email} 
            onChange={handleChange} 
            placeholder="arjun@example.com"
          />
          <PremiumInput 
            label="Phone" 
            name="phone" 
            value={personalInfo.phone} 
            onChange={handleChange} 
            placeholder="+91 1234567890"
          />
          <PremiumInput 
            label="Location" 
            name="location" 
            value={personalInfo.location} 
            onChange={handleChange} 
            placeholder="City, State"
          />
          <PremiumInput 
            label="Portfolio URL" 
            name="portfolio" 
            value={personalInfo.portfolio} 
            onChange={handleChange} 
            placeholder="arjun.dev"
          />
          <PremiumInput 
            label="LinkedIn" 
            name="linkedin" 
            value={personalInfo.linkedin} 
            onChange={handleChange} 
            placeholder="linkedin.com/in/arjun"
          />
          <PremiumInput 
            label="GitHub" 
            name="github" 
            value={personalInfo.github} 
            onChange={handleChange} 
            placeholder="github.com/arjun"
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center px-1">
          <div className="flex flex-col gap-1">
            <SectionTitle 
              title="Header Social Links" 
              subtitle="Add custom links like Youtube, Discord, etc."
            />
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Social (PX)</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={socialSize || ''}
                onChange={(e) => updateSettings({ socialSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-16 h-7 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button
            onClick={() => {
              const links = Array.isArray(socialLinks) ? socialLinks : [];
              updateList('socialLinks', [...links, { label: '', url: '' }]);
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 text-sm"
          >
            <Plus size={18} /> Add Link
          </button>
        </div>

        <div className="space-y-3">
          {(Array.isArray(socialLinks) ? socialLinks : []).map((link, index) => (
            <div key={index} className="flex gap-4 items-end bg-white/40 p-4 rounded-2xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex-1">
                <PremiumInput
                  label="Label"
                  placeholder="e.g. Youtube"
                  value={link.label}
                  onChange={(e) => {
                    const newList = [...socialLinks];
                    newList[index].label = e.target.value;
                    updateList('socialLinks', newList);
                  }}
                />
              </div>
              <div className="flex-[2]">
                <PremiumInput
                  label="URL"
                  placeholder="https://..."
                  value={link.url}
                  onChange={(e) => {
                    const newList = [...socialLinks];
                    newList[index].url = e.target.value;
                    updateList('socialLinks', newList);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  updateList('socialLinks', socialLinks.filter((_, i) => i !== index));
                }}
                className="p-3 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all mb-1"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          
          {(!socialLinks || socialLinks.length === 0) && (
            <div className="text-center py-8 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/30">
              <p className="text-slate-400 text-sm">No social links added yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
