import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  RotateCcw, 
  Database,
  FileEdit,
  Eye,
  Layout as LayoutIcon,
  Sparkles
} from 'lucide-react';
import useResume from './hooks/useResume';
import FormContainer from './components/form/FormContainer';
import A4Preview from './components/preview/A4Preview';
import { GradientButton, Dropdown } from './components/ui/UIComponents';

function App() {
  const { resetData, fillDemoData, fillSujalData, fillRidhamData, fillPriyData, fillKalpanData, fillJagjeetData, fillKrutagyaData, fillDevData } = useResume();
  const [activeTab, setActiveTab] = useState('form');
  const [isFullPreview, setIsFullPreview] = useState(false);
  const [resumeStyle, setResumeStyle] = useState('modern');
  const [previewScale, setPreviewScale] = useState(1);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    window.dispatchEvent(new CustomEvent('export-pdf'));
  };

  const styles = [
    { id: 'modern', label: 'Modern' },
    { id: 'strict', label: 'Strict' },
    { id: 'creative', label: 'Creative' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Ultra-Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 120, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] rounded-full bg-pink-500/5 blur-[110px]" 
        />
      </div>

      {/* Sticky Premium White Navbar */}
      <header className="sticky top-0 z-50 px-2 sm:px-4 py-2 sm:py-3">
        <nav className="max-w-[1700px] mx-auto glass p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl flex items-center justify-between shadow-2xl shadow-indigo-100/20 border-white/60">
          <div className="flex items-center gap-2 sm:gap-4 ml-2">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20"
            >
              <LayoutIcon size={20} className="sm:size-[26px] stroke-[2.5]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-2xl font-black tracking-tighter text-slate-900 leading-none">
                ResumeForge
              </span>
              <span className="text-[7px] sm:text-[10px] font-bold text-indigo-500 tracking-[0.2em] uppercase mt-0.5 sm:mt-1 hidden xs:block">
                Premium Builder
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Styles Toggle - Only on large screens */}
            <div className="hidden lg:flex items-center bg-slate-100/50 p-1 rounded-[1rem] mr-2 border border-slate-200/40">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setResumeStyle(style.id)}
                  className={`relative px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-tight transition-colors duration-300 z-10 ${
                    resumeStyle === style.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {resumeStyle === style.id && (
                    <motion.div
                      layoutId="style-pill"
                      className="absolute inset-0 bg-white shadow-sm border border-slate-200/50 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {style.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Theme Dropdown for Mobile */}
              <div className="lg:hidden">
                <Dropdown 
                  label=""
                  icon={Sparkles}
                  className="scale-90 sm:scale-100"
                  items={styles.map(s => ({
                    label: s.label,
                    onClick: () => setResumeStyle(s.id),
                    icon: LayoutIcon,
                    variant: resumeStyle === s.id ? 'active' : 'default'
                  }))}
                />
              </div>

              <Dropdown 
                label={isMobile ? "" : "Demo Data"}
                icon={Database}
                className="scale-90 sm:scale-100"
                items={[
                  { label: "Fill Demo Data", onClick: fillDemoData },
                  { label: "Fill Sujal Demo", onClick: fillSujalData },
                  { label: "Fill Ridham Demo", onClick: fillRidhamData },
                  { label: "Fill Priy Demo", onClick: fillPriyData },
                  { label: "Fill Kalpan Demo", onClick: fillKalpanData },
                  { label: "Fill Jagjeet Demo", onClick: fillJagjeetData },
                  { label: "Fill Krutagya Demo", onClick: fillKrutagyaData },
                  { label: "Fill Dev Demo", onClick: fillDevData },
                  { label: "Reset All Data", onClick: resetData, variant: 'danger', icon: RotateCcw }
                ]}
              />

              <GradientButton 
                onClick={handleDownload} 
                icon={Download}
                className="px-3 sm:px-8 py-2.5 sm:py-4 scale-90 sm:scale-100 !text-xs sm:!text-base"
              >
                {!isMobile && <span>Download</span>}
                {isMobile ? <span>PDF</span> : null}
              </GradientButton>
            </div>
          </div>
        </nav>
      </header>

      {/* Cinematic Entrance Animation Wrapper */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {/* Main SaaS Layout - WIDER */}
          <main className="max-w-[1750px] mx-auto h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-4 sm:gap-6 px-2 sm:px-4 pb-4 sm:pb-8 overflow-hidden">
            {/* Scrollable Editor */}
            <motion.div 
              animate={{ 
                width: isMobile ? '100%' : (isFullPreview ? '0%' : '40%'),
                opacity: (isMobile && activeTab !== 'form') || (!isMobile && isFullPreview) ? 0 : 1,
                pointerEvents: (isMobile && activeTab !== 'form') || (!isMobile && isFullPreview) ? 'none' : 'auto',
                x: (!isMobile && isFullPreview) ? -50 : 0
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full overflow-y-auto custom-scrollbar rounded-[2.5rem] bg-white/30 backdrop-blur-sm border border-white/40 shadow-xl ${isMobile ? (activeTab === 'form' ? 'block' : 'hidden') : (isFullPreview ? 'hidden' : 'block')}`}
            >
              <div className="px-6 py-6 pb-20">
                <FormContainer />
              </div>
            </motion.div>

            {/* Floating Preview Panel */}
            <motion.div 
              animate={{ 
                width: isMobile ? '100%' : (isFullPreview ? '100%' : '60%'),
                opacity: isMobile && activeTab !== 'preview' ? 0 : 1,
                pointerEvents: isMobile && activeTab !== 'preview' ? 'none' : 'auto',
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-1 h-full flex flex-col items-center justify-start overflow-auto custom-scrollbar rounded-[2.5rem] bg-indigo-50/10 backdrop-blur-md border border-white/60 shadow-2xl shadow-indigo-200/20 py-8 sm:py-12 px-2 relative group ${isMobile ? (activeTab === 'preview' ? 'flex' : 'hidden') : 'flex'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 to-transparent pointer-events-none" />



               <div className="sticky top-0 mb-8 z-10 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white px-5 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl shadow-indigo-100 border border-slate-100 text-indigo-600 font-black text-xs tracking-widest"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    {isFullPreview ? 'FULL PREVIEW MODE' : 'LIVE PREVIEW'} <Sparkles size={12} />
                  </motion.div>
                  
                  <button 
                    onClick={() => setIsFullPreview(!isFullPreview)}
                    className="p-2.5 bg-white rounded-2xl shadow-xl shadow-indigo-100 border border-slate-100 text-slate-500 hover:text-indigo-600 hover:scale-110 active:scale-95 transition-all"
                    title={isFullPreview ? "Return to Editor" : "Expand to Full Page"}
                  >
                    {isFullPreview ? <FileEdit size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Preview Scale Control */}
                {!isFullPreview && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Zoom</span>
                    <input 
                      type="range"
                      min="0.5"
                      max="1.5"
                      step="0.05"
                      value={previewScale}
                      onChange={(e) => setPreviewScale(parseFloat(e.target.value))}
                      className="w-24 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                    <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md min-w-[40px] text-center">
                      {Math.round(previewScale * 100)}%
                    </span>
                  </motion.div>
                )}
              </div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: isFullPreview ? 1.05 * previewScale : 1 * previewScale, 
                  opacity: 1,
                  y: isFullPreview ? 20 : 0
                }}
                transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.2 }}
                className={`origin-top transition-all duration-700 w-full flex justify-center ${!isFullPreview ? 'scale-[0.5] xs:scale-[0.6] sm:scale-[0.7] md:scale-[0.75] lg:scale-[0.85] xl:scale-100' : ''}`}
                style={{ scale: isFullPreview ? 1.05 * previewScale : undefined }}
              >
                <div className="max-w-full overflow-visible">
                  <A4Preview />
                </div>
              </motion.div>
            </motion.div>
          </main>
        </motion.div>
      </AnimatePresence>
        {/* Premium Mobile Navigation */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 md:hidden z-50">
          <div className="bg-white/80 backdrop-blur-2xl p-2 rounded-3xl flex gap-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/60">
            <button 
              onClick={() => setActiveTab('form')}
              className={`px-6 sm:px-10 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 font-black tracking-tight ${activeTab === 'form' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'text-slate-400'}`}
            >
              <FileEdit size={20} className="stroke-[2.5]" /> Editor
            </button>
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-6 sm:px-10 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 font-black tracking-tight ${activeTab === 'preview' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'text-slate-400'}`}
            >
              <Eye size={20} className="stroke-[2.5]" /> View
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
