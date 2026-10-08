import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { StatusLed, SchematicSymbol } from './ElectronicsElements';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Milestones', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050816] border-t border-[rgba(0,229,255,0.15)] text-[#8B9BB4] py-14 overflow-hidden">
      {/* Top PCB Copper Trace Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F5A0]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[rgba(0,229,255,0.1)]">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg text-[#EAF2FF] tracking-wider">
                SAMARTH <span className="text-[#00F5A0]">SAHU</span>
              </span>
            </div>
            <p className="font-mono text-xs text-[#8B9BB4]">
              B.Tech in ECE • JECRC University, Jaipur, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-5 text-xs font-heading">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00F5A0] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] hover:border-[#00F5A0] text-[#8B9BB4] hover:text-[#00F5A0] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] hover:border-[#00D2FF] text-[#8B9BB4] hover:text-[#00D2FF] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] hover:border-[#FFF2B2] text-[#8B9BB4] hover:text-[#FFF2B2] transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] hover:bg-[#00F5A0] hover:text-black transition-all ml-2"
              aria-label="Scroll back to top"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Annotations & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8B9BB4]/70 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Samarth Sahu // Digital Electronics Laboratory Interface.
          </p>
          <p className="flex items-center gap-2 justify-center">
            <span>React + Vite + Tailwind CSS</span>
            <span className="text-[#00F5A0]">⚡</span>
            <span>Optimized for Vercel</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
