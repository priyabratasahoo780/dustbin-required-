import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlassCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4, shadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`glass-card p-8 border-white/60 bg-white/40 backdrop-blur-md transition-all border shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

export const GradientButton = ({ children, onClick, className = "", icon: Icon }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-white
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400
      shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)]
      hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.6)]
      transition-all duration-300 flex items-center justify-center gap-2
      ${className}
    `}
  >
    {Icon && <Icon size={window.innerWidth < 640 ? 18 : 20} className="stroke-[3]" />}
    <span className="tracking-tight text-sm sm:text-base">{children}</span>
  </motion.button>
);

export const PremiumInput = ({ label, name, value, onChange, placeholder, type = "text", error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-1.5 group relative pt-2">
      <label className={`
        absolute left-5 transition-all duration-300 pointer-events-none font-bold
        ${(isFocused || value) 
          ? '-top-2.5 text-xs text-indigo-600 bg-white px-2 rounded-full shadow-sm' 
          : 'top-3.5 text-slate-400 opacity-0'}
      `}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? "" : placeholder}
          className={`
            w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm
            border-2 border-slate-100 hover:border-slate-200
            focus:border-indigo-500 focus:bg-white outline-none transition-all
            placeholder:text-slate-400 text-slate-800 font-medium text-sm sm:text-base
            shadow-sm focus:shadow-xl focus:shadow-indigo-500/10
            ${error ? 'border-red-500 shake' : ''}
          `}
        />
        <AnimatePresence>
          {isFocused && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 rounded-2xl ring-4 ring-indigo-500/5 pointer-events-none" 
            />
          )}
        </AnimatePresence>
      </div>
      {error && <p className="text-xs text-red-500 mt-1 ml-2 font-bold">{error}</p>}
    </div>
  );
};

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-10">
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex items-center gap-3 mb-2"
    >
      <div className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
      <h2 className="text-3xl font-black text-slate-900 tracking-tight">
        {title}
      </h2>
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 font-medium ml-4 border-l-2 border-slate-100 pl-4"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const Dropdown = ({ label, items, icon: Icon, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`} onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-100/50 hover:bg-white border border-slate-200/40 text-xs sm:text-sm font-bold text-slate-600 transition-all hover:shadow-lg hover:shadow-indigo-100"
      >
        {Icon && <Icon size={window.innerWidth < 640 ? 14 : 16} />}
        {label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 w-screen max-w-[260px] sm:w-56 p-2 bg-white/80 backdrop-blur-3xl border border-white/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden"
          >
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.variant === 'danger' && idx > 0 && (
                  <div className="h-px bg-slate-200/50 my-1.5 mx-2" />
                )}
                <button
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all text-left ${
                    item.variant === 'danger' 
                      ? 'text-red-500 hover:bg-red-50' 
                      : item.variant === 'active'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  {item.icon && <item.icon size={14} className={item.variant === 'danger' ? 'text-red-400' : ''} />}
                  {item.label}
                </button>
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
