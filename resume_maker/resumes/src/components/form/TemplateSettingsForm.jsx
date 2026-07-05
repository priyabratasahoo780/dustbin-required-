import React from 'react';
import useResume from '../../hooks/useResume';
import { Settings, Maximize, Minimize, Type, Move } from 'lucide-react';

const TemplateSettingsForm = () => {
  const { settings, updateSettings } = useResume();
  const { 
    fontSize = 10, 
    sectionSpacing = 4, 
    smartFit = true, 
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
    techStackSize = 0,
    skillCategorySize = 0,
    skillSize = 0,
    certTitleSize = 0,
    certIssuerSize = 0,
    achievementsSize = 0,
    langSize = 0,
    figmaSize = 0
  } = settings || {};

  const handleFontSizeChange = (val) => {
    updateSettings({ fontSize: parseInt(val) });
  };

  const handleSpacingChange = (val) => {
    updateSettings({ sectionSpacing: parseInt(val) });
  };

  const toggleSmartFit = () => {
    updateSettings({ smartFit: !smartFit });
  };

  const handleManualSizeChange = (key, val) => {
    updateSettings({ [key]: val === '' ? 0 : parseInt(val) });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-2">
        <Settings className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-bold text-slate-800">Template Scaling</h2>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-slate-500" />
            <span className="font-semibold text-slate-700">Smart Auto-Fit</span>
          </div>
          <button
            onClick={toggleSmartFit}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              smartFit ? 'bg-indigo-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                smartFit ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-0">
          Automatically adjusts font size and spacing to fill the page.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Type className="w-4 h-4 text-slate-500" />
              Base Font Size ({fontSize}px)
            </label>
          </div>
          <input
            type="range"
            min="8"
            max="16"
            step="1"
            value={fontSize}
            onChange={(e) => handleFontSizeChange(e.target.value)}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>Small</span>
            <span>Large</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Move className="w-4 h-4 text-slate-500" />
              Section Spacing ({sectionSpacing})
            </label>
          </div>
          <input
            type="range"
            min="0"
            max="12"
            step="1"
            value={sectionSpacing}
            onChange={(e) => handleSpacingChange(e.target.value)}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>Tight</span>
            <span>Spacious</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-200">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Manual Overrides (PX)</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Name</label>
            <input
              type="number"
              placeholder="Auto"
              value={nameSize || ''}
              onChange={(e) => handleManualSizeChange('nameSize', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Tagline</label>
            <input
              type="number"
              placeholder="Auto"
              value={taglineSize || ''}
              onChange={(e) => handleManualSizeChange('taglineSize', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Section Titles</label>
            <input
              type="number"
              placeholder="Auto"
              value={sectionTitleSize || ''}
              onChange={(e) => handleManualSizeChange('sectionTitleSize', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Body Text</label>
            <input
              type="number"
              placeholder="Auto"
              value={bodySize || ''}
              onChange={(e) => handleManualSizeChange('bodySize', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Contact Info</label>
            <input
              type="number"
              placeholder="Auto"
              value={contactSize || ''}
              onChange={(e) => handleManualSizeChange('contactSize', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Social Links</label>
            <input
              type="number"
              placeholder="Auto"
              value={socialSize || ''}
              onChange={(e) => handleManualSizeChange('socialSize', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Role Size</label>
            <input
              type="number"
              placeholder="Auto"
              value={roleSize || ''}
              onChange={(e) => handleManualSizeChange('roleSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Company Size</label>
            <input
              type="number"
              placeholder="Auto"
              value={companySize || ''}
              onChange={(e) => handleManualSizeChange('companySize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Inst. Size</label>
            <input
              type="number"
              placeholder="Auto"
              value={institutionSize || ''}
              onChange={(e) => handleManualSizeChange('institutionSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Degree Size</label>
            <input
              type="number"
              placeholder="Auto"
              value={degreeSize || ''}
              onChange={(e) => handleManualSizeChange('degreeSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Proj. Title</label>
            <input
              type="number"
              placeholder="Auto"
              value={projTitleSize || ''}
              onChange={(e) => handleManualSizeChange('projTitleSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Tech Size</label>
            <input
              type="number"
              placeholder="Auto"
              value={techStackSize || ''}
              onChange={(e) => handleManualSizeChange('techStackSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Skill Cat.</label>
            <input
              type="number"
              placeholder="Auto"
              value={skillCategorySize || ''}
              onChange={(e) => handleManualSizeChange('skillCategorySize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Skill Item</label>
            <input
              type="number"
              placeholder="Auto"
              value={skillSize || ''}
              onChange={(e) => handleManualSizeChange('skillSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Cert Title</label>
            <input
              type="number"
              placeholder="Auto"
              value={certTitleSize || ''}
              onChange={(e) => handleManualSizeChange('certTitleSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Cert Issuer</label>
            <input
              type="number"
              placeholder="Auto"
              value={certIssuerSize || ''}
              onChange={(e) => handleManualSizeChange('certIssuerSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Achiev.</label>
            <input
              type="number"
              placeholder="Auto"
              value={achievementsSize || ''}
              onChange={(e) => handleManualSizeChange('achievementsSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Lang.</label>
            <input
              type="number"
              placeholder="Auto"
              value={langSize || ''}
              onChange={(e) => handleManualSizeChange('langSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5 text-indigo-600/70">
            <label className="text-[10px] font-black uppercase tracking-widest leading-none">Figma</label>
            <input
              type="number"
              placeholder="Auto"
              value={figmaSize || ''}
              onChange={(e) => handleManualSizeChange('figmaSize', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/20 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">Section Space</label>
            <input
              type="number"
              placeholder="Auto"
              value={sectionSpacing || ''}
              onChange={(e) => handleManualSizeChange('sectionSpacing', e.target.value)}
              className="w-full px-3 py-2 bg-indigo-50/30 border border-indigo-100 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 transition-all font-mono text-indigo-600"
            />
          </div>
        </div>

        <p className="text-[10px] text-slate-400 italic mt-4">
          Tip: Set to 0 or leave empty for template-defined auto sizing.
        </p>
      </div>

      <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100 italic text-xs text-indigo-700 text-center">
        Tip: Adjust font size to fit more content or fill whitespace.
      </div>
    </div>
  );
};

export default TemplateSettingsForm;
