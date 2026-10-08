import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github, Linkedin, Send } from 'lucide-react';
import { StatusLed } from './ElectronicsElements';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Milestones', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-[rgba(0,229,255,0.15)] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with ECE IC Badge */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-[#EAF2FF] hover:text-[#00F5A0] transition-colors"
          >
            <div className="p-2 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.2)] group-hover:border-[#00F5A0] group-hover:shadow-[0_0_15px_rgba(0,245,160,0.3)] transition-all shrink-0">
              <Cpu className="w-5 h-5 text-[#00F5A0] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5">
                SAMARTH <span className="text-[#00F5A0]">SAHU</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8B9BB4] -mt-0.5">
                B.Tech ECE // Lab Interface
              </span>
            </div>
          </a>

          {/* Desktop Navigation in Space Grotesk */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A1024]/80 p-1 rounded-full border border-[rgba(0,229,255,0.15)] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-heading tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#00F5A0] bg-[#00F5A0]/10 font-bold border border-[#00F5A0]/30 shadow-[0_0_12px_rgba(0,245,160,0.25)]'
                      : 'text-[#8B9BB4] hover:text-[#EAF2FF] hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA and Socials */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] hover:border-[#00F5A0]/50 text-[#8B9BB4] hover:text-[#00F5A0] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] hover:border-[#00D2FF]/50 text-[#8B9BB4] hover:text-[#00D2FF] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold text-black bg-[#00F5A0] hover:bg-[#00D2FF] transition-all shadow-[0_0_15px_rgba(0,245,160,0.35)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] hover:border-[#00F5A0] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#0A1024]/95 border border-[rgba(0,229,255,0.25)] rounded-2xl shadow-2xl backdrop-blur-xl p-5 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(0,229,255,0.15)]">
            <StatusLed color="mint" label="ECE Lab Interface Active" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8B9BB4] hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-heading transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#00F5A0]/10 border border-[#00F5A0]/40 text-[#00F5A0] font-bold'
                      : 'text-[#EAF2FF] hover:bg-slate-900/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-[#00F5A0] text-xs font-mono">// active</span>}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[rgba(0,229,255,0.15)] flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#050816] border border-[rgba(0,229,255,0.15)] text-[#8B9BB4] hover:text-[#00F5A0]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#050816] border border-[rgba(0,229,255,0.15)] text-[#8B9BB4] hover:text-[#00D2FF]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-heading font-bold uppercase text-black bg-[#00F5A0] hover:bg-[#00D2FF]"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
