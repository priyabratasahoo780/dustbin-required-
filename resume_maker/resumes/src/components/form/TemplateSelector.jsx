import React from 'react';
import useResume from '../../hooks/useResume';
import { Check } from 'lucide-react';
import { SectionTitle } from '../ui/UIComponents';
import { motion } from 'framer-motion';

const TEMPLATES = [
  'Arjun', 'SimpleTemplateOne', 'Krutagya', 'Mayank', 'Priyasha', 'Dev', 
  'Jagjeet', 'Kalpan', 'Priy', 'Ridham', 'Sujal'
];

const TemplateSelector = () => {
  const { activeTemplate, setActiveTemplate } = useResume();

  return (
    <div className="space-y-8">
      <SectionTitle 
        title="Choose a Template" 
        subtitle="Select a professional layout tailored for your resume" 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((template) => (
          <motion.div
            key={template}
            whileHover={{ y: -8 }}
            onClick={() => setActiveTemplate(template)}
            className={`
              relative group cursor-pointer rounded-3xl overflow-hidden transition-all duration-500
              ${activeTemplate === template 
                ? 'ring-4 ring-indigo-500/20 shadow-2xl shadow-indigo-100' 
                : 'hover:shadow-xl hover:shadow-slate-200'}
            `}
          >
            {/* Template Card */}
            <div className={`
              aspect-[3/4] p-4 bg-white/80 border-2 transition-all duration-500
              ${activeTemplate === template 
                ? 'border-indigo-500' 
                : 'border-slate-100 group-hover:border-indigo-200'}
            `}>
              {/* Fake Resume Content Preview */}
              <div className="w-full h-full bg-slate-50 rounded-xl p-4 space-y-3 overflow-hidden">
                <div className="w-2/3 h-4 bg-slate-200 rounded-lg" />
                <div className="w-full h-2 bg-slate-100 rounded-sm" />
                <div className="w-5/6 h-2 bg-slate-100 rounded-sm" />
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <div className="h-20 bg-slate-200/50 rounded-lg" />
                  <div className="h-20 bg-slate-200/50 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Template Info Overlay */}
            <div className={`
              absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent pt-10 transition-all duration-500
              ${activeTemplate === template ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}
            `}>
              <h3 className="font-black text-slate-800 tracking-tight">{template}</h3>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Professional Choice</p>
            </div>

            {/* Selection Checkmark */}
            {activeTemplate === template && (
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute top-4 right-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <Check size={18} className="stroke-[3]" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
