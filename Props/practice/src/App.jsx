import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'Projects', id: 'projects' },
  { name: 'Hackathons', id: 'hackathons' },
  { name: 'YouTube', id: 'youtube' },
  { name: 'Links', id: 'links' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section tracking
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      let current = '';
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary">
      {/* Dynamic Background Glow Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none delay-1000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold tracking-tighter cursor-pointer text-white flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background text-lg shadow-[0_0_15px_rgba(102,252,241,0.5)] group-hover:scale-105 transition-transform">
              P
            </span>
            <span className="group-hover:text-primary transition-colors">Portfolio.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 border border-white/5 bg-white/5 backdrop-blur-md rounded-full px-2 py-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary/10 text-primary shadow-[inset_0_0_10px_rgba(102,252,241,0.2)]' 
                    : 'text-textLight hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
               onClick={() => scrollToSection('contact')}
               className="text-sm font-medium text-textLight hover:text-white transition-colors"
            >
              Contact
            </button>
            <button className="px-5 py-2 rounded-full bg-primary text-background font-semibold text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all transform hover:-translate-y-0.5">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 w-full glass transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-b border-white/10' : 'max-h-0 border-transparent border-none'}`}>
          <div className="p-4 flex flex-col gap-2">
            {[...navItems, { name: 'Contact', id: 'contact' }].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                  activeSection === item.id ? 'bg-primary/10 text-primary' : 'text-textLight hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="mt-2 w-full px-4 py-3 rounded-lg bg-primary/20 text-primary font-semibold border border-primary/30 hover:bg-primary hover:text-background transition-colors">
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col w-full">
        <HeroSection id="home" title="Building Digital Experiences." highlight="Home" isFirst />
        <ComingSoonSection id="about" title="About Me" />
        <ComingSoonSection id="skills" title="Technical Skills" />
        <ComingSoonSection id="certificates" title="Certifications" />
        <ComingSoonSection id="projects" title="Project Activity" />
        <ComingSoonSection id="hackathons" title="Hackathons" />
        <ComingSoonSection id="youtube" title="YouTube Content" />
        <ComingSoonSection id="links" title="Important Links" />
        <ComingSoonSection id="contact" title="Get In Touch" />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 glass-nav py-8 mt-20 text-center text-sm text-textLight">
        <p>© {new Date().getFullYear()} My Portfolio. Crafted with React & Tailwind.</p>
      </footer>
    </div>
  );
}

// Minimal Hero Section Component for Home
function HeroSection({ id, title, highlight, isFirst }) {
  return (
    <section id={id} className={`w-full min-h-screen flex items-center justify-center pt-20 px-6 ${!isFirst && 'border-t border-white/5'}`}>
      <div className="max-w-4xl mx-auto text-center space-y-8 mt-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(102,252,241,0.15)] backdrop-blur-md">
          {highlight} Section
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
           Welcome to the <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Future of Web.</span>
        </h1>
        <p className="text-lg md:text-xl text-textLight max-w-2xl mx-auto leading-relaxed">
          I'm crafting beautiful, dynamic, and responsive web applications with a focus on immersive user experiences and modern design aesthetics.
        </p>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-background font-bold hover:shadow-[0_0_25px_rgba(102,252,241,0.5)] transition-all transform hover:-translate-y-1">
            Explore My Work
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full glass text-white font-medium hover:bg-white/10 transition-all border border-white/10">
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}

// Reusable "Coming Soon" styling for other sections
function ComingSoonSection({ id, title }) {
  return (
    <section id={id} className="w-full min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden shrink-0 border-t border-white/5 mt-10 lg:mt-20">
      
      {/* Decorative localized glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-md group-hover:blur-xl transition-all duration-700 opacity-50"></div>
        <div className="relative glass p-10 md:p-16 rounded-3xl text-center border overflow-hidden">
          
          {/* subtle grid pattern background for the card */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto"></div>
            
            <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary font-medium tracking-widest text-sm uppercase">Coming Soon</span>
            </div>
            
            <p className="text-textLight mt-2 max-w-sm mx-auto text-sm md:text-base">
              I am currently brewing something amazing for this section. Stay tuned for the update!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
