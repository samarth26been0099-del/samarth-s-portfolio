import React from 'react';
import { Calendar, MapPin, GraduationCap, Cpu, Binary, Code, Wifi, Activity, Bot, CheckCircle } from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';
import { StatusLed, SchematicSymbol } from './ElectronicsElements';

export const Education = () => {
  const learningAreas = [
    { name: "Electronic Devices & Circuit Analysis", icon: Cpu, type: "Core ECE" },
    { name: "Digital Logic Design & Microprocessors", icon: Binary, type: "Digital Systems" },
    { name: "C++ & Object-Oriented Programming", icon: Code, type: "Software Logic" },
    { name: "Internet of Things (IoT) & Embedded C", icon: Wifi, type: "Embedded" },
    { name: "Engineering Mathematics & Signal Theory", icon: Activity, type: "Analysis" },
    { name: "Robotics & Automation Foundations", icon: Bot, type: "Hardware Labs" }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0A1024]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] text-xs font-mono tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04 // ACADEMIC CIRCUIT PATH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF2FF] tracking-tight">
            Education <span className="text-ece-gradient">& Milestones</span>
          </h2>
          <p className="font-sans text-[#8B9BB4] text-sm sm:text-base leading-relaxed">
            Designed as a continuous PCB trace connecting foundational physics with university-level engineering coursework.
          </p>
        </div>

        {/* PCB Trace Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing PCB Trace Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#00F5A0] via-[#00D2FF] to-[#FFF2B2] -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(0,245,160,0.5)] pointer-events-none" />

          {/* Timeline Milestones */}
          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 pl-12 md:pl-0`}
                >
                  
                  {/* Glowing PCB Solder Pad Node in Center */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className="w-6 h-6 rounded-full bg-[#050816] border-2 flex items-center justify-center shadow-lg"
                      style={{ borderColor: item.nodeColor }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full animate-ping-slow"
                        style={{ backgroundColor: item.nodeColor }}
                      />
                    </div>
                  </div>

                  {/* Milestone Card Content */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="pcb-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group">
                      
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(0,229,255,0.15)] font-mono text-xs">
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#050816] border border-[rgba(0,229,255,0.2)] text-[#00F5A0]">
                          {item.stage}
                        </span>
                        <span className="text-[#8B9BB4] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#00D2FF]" />
                          {item.year}
                        </span>
                      </div>

                      {/* Degree / Title */}
                      <h3 className="font-heading font-bold text-xl text-[#EAF2FF] group-hover:text-[#00F5A0] transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-[#8B9BB4]">
                        <span className="text-[#00D2FF] font-semibold">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-[#8B9BB4] mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Trace Milestones List */}
                      <div className="mt-4 pt-3 border-t border-[rgba(0,229,255,0.1)] space-y-2">
                        {item.traceMilestones.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-start gap-2 text-xs font-mono text-[#EAF2FF]">
                            <span className="text-[#00F5A0] mt-0.5">&gt;</span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>

                      {/* Node Status Footer */}
                      <div className="mt-4 pt-2 flex items-center justify-between text-[10px] font-mono text-[#8B9BB4]">
                        <span>SIGNAL: {item.signalType}</span>
                        <span className="text-[#00F5A0]">● {item.status}</span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Relevant Learning Areas Grid */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-[#EAF2FF]">
              Active Undergraduate Curriculum Domains
            </h4>
            <p className="font-mono text-xs text-[#00D2FF] mt-1">
              // B.TECH ECE 1ST YEAR PRACTICAL & THEORETICAL MODULES
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.12)] hover:border-[#00F5A0]/40 transition-all flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-[#050816] text-[#00F5A0] group-hover:scale-110 transition-transform">
                    <AreaIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#EAF2FF] group-hover:text-[#00F5A0] transition-colors">
                      {area.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#8B9BB4]">
                      {area.type}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
