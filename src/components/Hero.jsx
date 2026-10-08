import React from 'react';
import { ArrowRight, Send, Terminal, Sparkles, MapPin, University, ArrowUpRight, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { StatusLed, OscilloscopeMonitor, SchematicSymbol } from './ElectronicsElements';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Personal Statement & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Technical Status Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] shadow-[0_0_15px_rgba(0,245,160,0.15)]">
              <StatusLed color="mint" pulse />
              <span className="font-mono text-[11px] text-[#00F5A0] tracking-wider font-semibold">
                {personalInfo.statusIndicator}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <p className="font-mono text-xs sm:text-sm text-[#00D2FF] tracking-widest uppercase flex items-center gap-2">
                <span>// ENGINEERING BENCH INITIALIZED</span>
              </p>
              
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#EAF2FF] leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-ece-gradient">
                  {personalInfo.name}
                </span>
              </h1>
              
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-[#EAF2FF]/90">
                {personalInfo.role}
              </h2>
            </div>

            {/* Short Statement Requested by User */}
            <p className="font-sans text-base sm:text-lg text-[#8B9BB4] leading-relaxed max-w-2xl">
              {personalInfo.statement}
            </p>

            {/* Engineering Badges: University & Location */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#8B9BB4]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1024] border border-[rgba(0,229,255,0.15)] text-[#EAF2FF]">
                <University className="w-3.5 h-3.5 text-[#00F5A0]" />
                {personalInfo.college}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1024] border border-[rgba(0,229,255,0.15)] text-[#EAF2FF]">
                <MapPin className="w-3.5 h-3.5 text-[#00D2FF]" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1024] border border-[rgba(0,229,255,0.15)] text-[#FFF2B2]">
                <Cpu className="w-3.5 h-3.5 text-[#FFF2B2]" />
                1st Year Undergrad
              </span>
            </div>

            {/* CTA Buttons: View Projects & Contact Me */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide text-black bg-[#00F5A0] hover:bg-[#00D2FF] shadow-[0_0_20px_rgba(0,245,160,0.35)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide text-[#EAF2FF] bg-[#0A1024] hover:bg-slate-900 border border-[rgba(0,229,255,0.2)] hover:border-[#00F5A0]/50 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-[#00D2FF]" />
                <span>Contact Me</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider text-[#8B9BB4] hover:text-[#00F5A0] transition-colors"
              >
                <span>Engineering Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Schematics Footnote Banner */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#8B9BB4]/80">
              <span className="text-[#00F5A0]">SCHEMATIC ICONS:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1" title="Resistor">
                  <SchematicSymbol type="resistor" className="w-7 h-4" color="text-[#00F5A0]" />
                  <span className="text-[10px]">R</span>
                </span>
                <span className="flex items-center gap-1" title="Capacitor">
                  <SchematicSymbol type="capacitor" className="w-7 h-4" color="text-[#00D2FF]" />
                  <span className="text-[10px]">C</span>
                </span>
                <span className="flex items-center gap-1" title="LED">
                  <SchematicSymbol type="led" className="w-7 h-4" color="text-[#FFF2B2]" />
                  <span className="text-[10px]">LED</span>
                </span>
                <span className="flex items-center gap-1" title="Logic AND Gate">
                  <SchematicSymbol type="logic-and" className="w-7 h-4" color="text-[#00F5A0]" />
                  <span className="text-[10px]">AND</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Electronic Oscilloscope Monitor (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <OscilloscopeMonitor />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
