import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const Input = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-bold text-slate-500 ml-1">
          {label}
        </label>
      )}
      <input
        className={cn(
          "flex h-12 w-full rounded-2xl border-2 border-slate-100 bg-white/50 px-4 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-bold placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm",
          className
        )}
        {...props}
      />
    </div>
  );
};

export const TextArea = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-bold text-slate-500 ml-1">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-2xl border-2 border-slate-100 bg-white/50 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none shadow-sm",
          className
        )}
        {...props}
      />
    </div>
  );
};

export const Section = ({ title, children, className }) => {
  return (
    <div className={cn("space-y-4 mb-8", className)}>
      <h2 className="text-xl font-black text-slate-900 border-b-4 border-indigo-500/20 inline-block pb-1.5 px-1 mb-6">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};
