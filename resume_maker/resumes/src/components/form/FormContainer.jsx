import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Quote,
  Cpu,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  ChevronRight
} from 'lucide-react';
import useResume from '../../hooks/useResume';

// Form Components
import PersonalForm from './PersonalForm';
import SummaryForm from './SummaryForm';
import SkillsForm from './SkillsForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import ProjectsForm from './ProjectsForm';
import CertificationsForm from './CertificationsForm';
import AchievementsForm from './AchievementsForm';
import LanguagesForm from './LanguagesForm';
import FigmaProjectsForm from './FigmaProjectsForm';
import TemplateSelector from './TemplateSelector';
import TemplateSettingsForm from './TemplateSettingsForm';
import { Settings as SettingsIcon, Languages as LangIcon } from 'lucide-react';

const sections = [
  { id: 'personal', title: 'Personal', icon: User, component: PersonalForm },
  { id: 'summary', title: 'Summary', icon: Quote, component: SummaryForm },
  { id: 'skills', title: 'Skills', icon: Cpu, component: SkillsForm },
  { id: 'experience', title: 'Experience', icon: Briefcase, component: ExperienceForm },
  { id: 'education', title: 'Education', icon: GraduationCap, component: EducationForm },
  { id: 'projects', title: 'Projects', icon: Code2, component: ProjectsForm },
  { id: 'certifications', title: 'Certifications', icon: Award, component: CertificationsForm },
  { id: 'achievements', title: 'Achievements', icon: Award, component: AchievementsForm },
  { id: 'languages', title: 'Languages', icon: LangIcon, component: LanguagesForm },
  { id: 'figma', title: 'UI/UX tags', icon: Code2, component: FigmaProjectsForm },
  { id: 'settings', title: 'Settings', icon: SettingsIcon, component: TemplateSettingsForm },
  { id: 'templates', title: 'Templates', icon: Code2, component: TemplateSelector },
];

const FormContainer = () => {
  const { activeSection, setActiveSection } = useResume();

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || PersonalForm;

  return (
    <div className="flex flex-col gap-8">
      {/* Premium Horizontal Navigation */}
      <div className="sticky top-0 z-30 py-2 sm:py-4 -mx-2 sm:-mx-4 px-2 sm:px-4 bg-gradient-to-b from-[#FDFDFF] via-[#FDFDFF]/90 to-transparent">
        <div className="glass p-1.5 sm:p-2.5 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar snap-x shadow-2xl shadow-indigo-100/40 border-white/80 bg-white/40 backdrop-blur-xl">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`
                  relative flex items-center gap-2 sm:gap-3 px-4 sm:px-7 py-3 sm:py-4 rounded-xl sm:rounded-2xl whitespace-nowrap transition-all duration-500 font-black tracking-tight snap-center
                  ${isActive
                    ? 'text-white shadow-2xl shadow-indigo-200 scale-[1.02]'
                    : 'text-slate-400 hover:text-indigo-500 hover:bg-white/80'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 rounded-2xl -z-10 shadow-lg shadow-indigo-500/20"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <Icon size={18} className={isActive ? 'stroke-[3] rotate-12 transition-transform' : 'stroke-[2]'} />
                <span className="text-xs uppercase tracking-widest">{section.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[600px] pt-6 pr-1"
        >
          <ActiveComponent />

          {/* Navigation Flow Button */}
          <div className="mt-20 flex justify-end">
            {activeSection !== 'templates' && (
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex(s => s.id === activeSection);
                  setActiveSection(sections[currentIndex + 1].id);
                }}
                className="group flex items-center gap-3 sm:gap-4 px-7 sm:px-10 py-3.5 sm:py-5 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white text-indigo-600 font-black border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all duration-700 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] shadow-xl shadow-indigo-100/20 active:scale-95 text-sm sm:text-base"
              >
                Next Section
                <div className="p-0.5 sm:p-1 rounded-full bg-indigo-50 group-hover:bg-white/20 transition-colors">
                  <ChevronRight size={18} className="sm:size-5 group-hover:translate-x-1 transition-transform stroke-[3]" />
                </div>
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FormContainer;
