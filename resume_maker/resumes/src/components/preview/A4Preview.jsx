import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import useResume from '../../hooks/useResume';
import TemplateRenderer from './TemplateRenderer';

const A4Preview = () => {
  const { activeTemplate, personalInfo, settings, updateSettings, data } = useResume();
  const { smartFit = true, fontSize = 10, sectionSpacing = 1 } = settings || {};
  const resumeRef = useRef(null);

  // Use a ref to always have access to the latest state inside the event listener
  const stateRef = useRef({ activeTemplate, personalInfo });
  
  useEffect(() => {
    stateRef.current = { activeTemplate, personalInfo };
  }, [activeTemplate, personalInfo]);

  // Smart Fit Logic using MutationObserver for robust detection
  useEffect(() => {
    if (!smartFit || !resumeRef.current) return;

    const checkHeight = () => {
      const element = resumeRef.current;
      if (!element) return;
      
      const content = element.querySelector('.template-root') || element.firstElementChild;
      const height = content ? content.offsetHeight : element.scrollHeight;
      // TARGET: 1100px to allow for larger typography footprints
      const targetHeight = 1120;
      const tolerance = 5;

      if (height > targetHeight + tolerance) {
        const overflow = height - targetHeight;
        // Aggressive shrinking to settle layout quickly
        const shrinkAmount = overflow > 40 ? 1 : 0.5;
        
        if (fontSize > 5.5) {
          updateSettings({ fontSize: fontSize - shrinkAmount });
        } else if (sectionSpacing > 0.0) {
          updateSettings({ sectionSpacing: Math.max(0, sectionSpacing - 0.1) });
        }
      } else if (height < targetHeight - 80) {
        if (fontSize < 12) {
          updateSettings({ fontSize: fontSize + 0.5 });
        } else if (sectionSpacing < 1.0) {
          updateSettings({ sectionSpacing: sectionSpacing + 0.1 });
        }
      }
    };

    // Ultra-fast debounce for near-instant feedback
    let timer;
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(checkHeight, 50);
    });

    observer.observe(resumeRef.current, { 
      childList: true, 
      subtree: true, 
      characterData: true,
      attributes: true // Added to catch style changes (fontSize)
    });

    // Initial check
    checkHeight();

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [smartFit, activeTemplate, fontSize, sectionSpacing]); // Removed 'data' to avoid race conditions

  useEffect(() => {
    const handleExport = async () => {
      const { activeTemplate: currentTemplate, personalInfo: currentInfo } = stateRef.current;
      console.log('Starting PDF Export for:', currentTemplate);
      const element = resumeRef.current;
      if (!element) return;

      try {
        // Wait for fonts and images
        await document.fonts.ready;
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const canvas = await html2canvas(element, {
          scale: 3, // Higher scale for better text clarity
          useCORS: true,
          logging: true,
          backgroundColor: '#ffffff',
          // Explicitly set dimensions to match A4 ratio
          width: 794, // 210mm at 96 DPI
          height: 1123, // 297mm at 96 DPI
          onclone: (clonedDoc) => {
            const el = clonedDoc.querySelector('.a4-sheet');
            if (el) {
              el.style.boxShadow = 'none';
              el.style.transform = 'none';
              el.style.margin = '0';
              el.style.border = 'none';
            }
            
            // Aggressive oklch sanitizer
            const allElements = clonedDoc.getElementsByTagName("*");
            for (let i = 0; i < allElements.length; i++) {
              const node = allElements[i];
              const computed = window.getComputedStyle(node);
              
              node.style.transition = 'none';
              node.style.animation = 'none';
              node.style.boxShadow = 'none';
              
              ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke'].forEach(prop => {
                const val = computed[prop];
                if (val && (val.includes('oklch') || val.includes('oklab'))) {
                    node.style[prop] = prop === 'color' ? '#333333' : (prop === 'backgroundColor' ? 'transparent' : 'inherit');
                }
              });
            }
          }
        });

        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px', // Use pixels for precise mapping from html2canvas
          format: [794, 1123] // A4 in pixels at 96 DPI
        });

        pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123);
        
        const fileName = currentInfo?.fullName 
          ? currentInfo.fullName.trim().replace(/\s+/g, '_') 
          : 'Resume';
        pdf.save(`${fileName}.pdf`);
        console.log('PDF Export successful!');
      } catch (error) {
        console.error('PDF Export failed:', error);
      }
    };

    window.addEventListener('export-pdf', handleExport);
    return () => window.removeEventListener('export-pdf', handleExport);
  }, []); // Empty deps so the listener is only added once

  return (
    <div className="relative group">
      {/* A4 Sheet Container */}
      <div 
        ref={resumeRef}
        className="a4-sheet shadow-2xl transition-all duration-500 force-light"
      >
        <TemplateRenderer templateName={activeTemplate} />
      </div>

      {/* Floating Indicator */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1 rounded-full shadow-lg pointer-events-none">
        A4 Live Preview ({activeTemplate})
      </div>
    </div>
  );
};

export default A4Preview;
