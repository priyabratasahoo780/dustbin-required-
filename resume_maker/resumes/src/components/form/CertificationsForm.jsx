import React, { useState } from 'react';
import { Plus, Trash2, FolderPlus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import useResume from '../../hooks/useResume';
import { PremiumInput, SectionTitle, GlassCard } from '../ui/UIComponents';

const CertificationsForm = () => {
  const { certifications, updateList, settings, updateSettings } = useResume();
  const { 
    sectionTitleSize = 0, 
    bodySize = 0, 
    sectionSpacing = 0,
    certTitleSize = 0,
    certIssuerSize = 0
  } = settings || {};
  const [newCategory, setNewCategory] = useState('');

  // Handle case where certifications might be old string array
  const formattedCerts = Array.isArray(certifications) && (certifications.length === 0 || typeof certifications[0] === 'string')
    ? [{ category: 'Professional Certifications', items: certifications }]
    : certifications;

  const addCategory = () => {
    if (newCategory.trim()) {
      updateList('certifications', [...formattedCerts, { category: newCategory.trim(), items: [] }]);
      setNewCategory('');
    }
  };

  const removeCategory = (catIndex) => {
    updateList('certifications', formattedCerts.filter((_, i) => i !== catIndex));
  };

  const addCertToCategory = (catIndex, name, url) => {
    if (name.trim()) {
      const newList = [...formattedCerts];
      newList[catIndex] = {
        ...newList[catIndex],
        items: [...newList[catIndex].items, { name: name.trim(), url: url.trim() }]
      };
      updateList('certifications', newList);
    }
  };

  const removeCertFromCategory = (catIndex, certIndex) => {
    const newList = [...formattedCerts];
    newList[catIndex] = {
      ...newList[catIndex],
      items: newList[catIndex].items.filter((_, i) => i !== certIndex)
    };
    updateList('certifications', newList);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <SectionTitle 
            title="Certifications & Awards" 
            subtitle="Group your certificates by domain or type" 
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
                value={certTitleSize || ''}
                onChange={(e) => updateSettings({ certTitleSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-tight">Issuer</label>
              <input 
                type="number" 
                placeholder="Auto"
                value={certIssuerSize || ''}
                onChange={(e) => updateSettings({ certIssuerSize: e.target.value === '' ? 0 : parseInt(e.target.value) })}
                className="w-14 sm:w-16 h-7 sm:h-8 bg-indigo-50/30 border border-indigo-100 rounded text-[10px] sm:text-xs font-mono text-center focus:ring-1 focus:ring-indigo-500 text-indigo-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Category */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <PremiumInput
            placeholder="e.g. Cloud Foundations, Development"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <button
          onClick={addCategory}
          className="px-6 py-4 rounded-2xl bg-indigo-600 text-white font-black hover:shadow-xl transition-all flex items-center justify-center gap-2 h-14 sm:h-[60px]"
        >
          <FolderPlus size={20} /> Add Category
        </button>
      </div>

      <div className="space-y-6">
        {formattedCerts.map((category, catIndex) => (
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
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    id={`cert-name-${catIndex}`}
                    placeholder="Certification Name..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-bold bg-white/50"
                  />
                  <input
                    type="text"
                    id={`cert-url-${catIndex}`}
                    placeholder="Link URL (optional)..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-bold bg-white/50"
                  />
                  <button
                    onClick={() => {
                      const nameInput = document.getElementById(`cert-name-${catIndex}`);
                      const urlInput = document.getElementById(`cert-url-${catIndex}`);
                      if (nameInput.value.trim()) {
                        addCertToCategory(catIndex, nameInput.value, urlInput.value);
                        nameInput.value = '';
                        urlInput.value = '';
                      }
                    }}
                    className="p-3 bg-indigo-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Plus size={18} className="sm:inline" />
                    <span className="sm:hidden ml-2 font-bold uppercase text-xs">Add Cert</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(category.items || []).map((cert, certIndex) => {
                  const certName = typeof cert === 'object' ? cert.name : cert;
                  const certUrl = typeof cert === 'object' ? cert.url : null;
                  
                  return (
                    <motion.div
                      key={certIndex}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="flex items-center justify-between gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-700 text-xs font-bold hover:border-indigo-200 transition-all group/item"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="line-clamp-1">{certName}</span>
                        {certUrl && <span className="text-[9px] text-indigo-400 font-medium truncate">{certUrl}</span>}
                      </div>
                      <button
                        onClick={() => removeCertFromCategory(catIndex, certIndex)}
                        className="text-slate-300 hover:text-red-500 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default CertificationsForm;
