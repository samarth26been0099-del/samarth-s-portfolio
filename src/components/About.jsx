import React from 'react';
import { Cpu, Terminal, Compass, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { StatusLed, SchematicSymbol } from './ElectronicsElements';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] text-xs font-mono tracking-widest uppercase">
            <StatusLed color="mint" pulse={false} />
            <span>01 // ENGINEERING PROFILE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF2FF] tracking-tight">
            About <span className="text-ece-gradient">The Student</span>
          </h2>
          <p className="font-sans text-[#8B9BB4] text-sm sm:text-base leading-relaxed">
            Academic dossier, foundational hardware-software interests, and current exploration roadmap.
          </p>
        </div>

        {/* Main Content Grid: Dossier Card & Animated Circuit Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Engineering Profile Dossier (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0A1024] border border-[rgba(0,229,255,0.18)] shadow-2xl relative overflow-hidden">
              
              {/* Technical Labels Bar Requested by User */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pb-6 mb-6 border-b border-[rgba(0,229,255,0.15)] font-mono text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#050816] border border-[rgba(0,229,255,0.1)]">
                  <span className="text-[#8B9BB4] block text-[9px] uppercase tracking-wider">FIELD:</span>
                  <span className="text-[#00F5A0] font-semibold">{personalInfo.dossier.field}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#050816] border border-[rgba(0,229,255,0.1)]">
                  <span className="text-[#8B9BB4] block text-[9px] uppercase tracking-wider">LEVEL:</span>
                  <span className="text-[#00D2FF] font-semibold">{personalInfo.dossier.level}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#050816] border border-[rgba(0,229,255,0.1)]">
                  <span className="text-[#8B9BB4] block text-[9px] uppercase tracking-wider">STATUS:</span>
                  <span className="text-[#FFF2B2] font-semibold">{personalInfo.dossier.status}</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 font-sans text-[#EAF2FF]/90 text-sm sm:text-base leading-relaxed">
                <p>
                  I’m a first-year B.Tech student in <strong className="text-[#00F5A0] font-semibold">Electronics & Communication Engineering (ECE)</strong> at{' '}
                  <strong className="text-[#EAF2FF]">{personalInfo.college}</strong>, Jaipur. My journey is propelled by genuine curiosity to understand how silicon microchips, physical sensors, and digital signals coordinate to power modern technology.
                </p>
                <p className="text-[#8B9BB4]">
                  Rather than rushing into buzzwords, I focus on building a strong foundation in circuit laws, logic gate systems, programming with C/C++, and hardware prototyping on microcontrollers.
                </p>
              </div>

              {/* Learning Areas & Interests Grid */}
              <div className="mt-8 pt-6 border-t border-[rgba(0,229,255,0.15)] grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Interests */}
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold text-sm text-[#00F5A0] flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    <span>Areas of Curiosity & Interest</span>
                  </h4>
                  <ul className="space-y-2 font-mono text-xs text-[#8B9BB4]">
                    {personalInfo.interests.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00D2FF] mt-0.5">&gt;</span>
                        <span className="text-[#EAF2FF]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Goals */}
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold text-sm text-[#00D2FF] flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>Active Engineering Goals</span>
                  </h4>
                  <ul className="space-y-2 font-mono text-xs text-[#8B9BB4]">
                    {personalInfo.learningGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00F5A0] mt-0.5">&bull;</span>
                        <span className="text-[#EAF2FF]">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Dossier Footer */}
              <div className="mt-7 pt-4 border-t border-[rgba(0,229,255,0.12)] flex items-center justify-between text-[11px] font-mono text-[#8B9BB4]">
                <span>CAMPUS: {personalInfo.dossier.institution}</span>
                <span className="text-[#00F5A0]">// ACADEMIC PROFILE VERIFIED</span>
              </div>

            </div>
          </div>

          {/* Right Column: Animated Electronic Circuit Diagram (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0A1024] border border-[rgba(0,229,255,0.18)] shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(0,229,255,0.15)] text-xs font-mono">
                <span className="text-[#00D2FF] font-semibold">// SCHEMATIC SIMULATION</span>
                <span className="text-[#8B9BB4] text-[10px]">TEST BENCH: ACTIVE</span>
              </div>

              {/* Interactive / Animated Circuit Diagram SVG */}
              <div className="p-4 rounded-xl bg-[#050816] border border-[rgba(0,245,160,0.15)] relative">
                <svg viewBox="0 0 320 220" className="w-full h-auto" fill="none">
                  {/* Schematic Title Annotation */}
                  <text x="10" y="20" fill="#8B9BB4" fontSize="9" fontFamily="JetBrains Mono">CKT: 5V DC PULSE & RC FILTER</text>

                  {/* Circuit Loop Path */}
                  <path
                    d="M 40 60 H 120 H 200 H 280 V 160 H 200 H 120 H 40 V 60"
                    stroke="rgba(0, 229, 255, 0.3)"
                    strokeWidth="2"
                  />

                  {/* Animated Charge Pulse along Circuit */}
                  <circle r="3" fill="#00F5A0">
                    <animateMotion
                      path="M 40 60 H 120 H 200 H 280 V 160 H 200 H 120 H 40 V 60"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* DC Voltage Source on Left */}
                  <g transform="translate(30, 95)">
                    <circle cx="10" cy="15" r="14" stroke="#00D2FF" strokeWidth="1.8" fill="#0A1024" />
                    <text x="7" y="13" fill="#00D2FF" fontSize="10" fontFamily="JetBrains Mono">+</text>
                    <text x="7" y="23" fill="#00D2FF" fontSize="10" fontFamily="JetBrains Mono">-</text>
                    <text x="-18" y="18" fill="#EAF2FF" fontSize="9" fontFamily="JetBrains Mono">VCC</text>
                  </g>

                  {/* Resistor R1 */}
                  <g transform="translate(130, 50)">
                    <rect x="0" y="3" width="40" height="14" fill="#0A1024" stroke="#00F5A0" strokeWidth="1.5" />
                    <text x="12" y="14" fill="#00F5A0" fontSize="9" fontFamily="JetBrains Mono">R1</text>
                    <text x="5" y="-3" fill="#8B9BB4" fontSize="8" fontFamily="JetBrains Mono">10kΩ</text>
                  </g>

                  {/* Capacitor C1 Branch */}
                  <g transform="translate(200, 85)">
                    <line x1="0" y1="0" x2="0" y2="75" stroke="rgba(0,229,255,0.3)" strokeWidth="2" />
                    {/* Parallel plates */}
                    <line x1="-12" y1="32" x2="12" y2="32" stroke="#FFF2B2" strokeWidth="2.5" />
                    <line x1="-12" y1="42" x2="12" y2="42" stroke="#FFF2B2" strokeWidth="2.5" />
                    <text x="16" y="40" fill="#FFF2B2" fontSize="9" fontFamily="JetBrains Mono">C1 (100nF)</text>
                  </g>

                  {/* LED Indicator D1 on Right */}
                  <g transform="translate(280, 100)">
                    <polygon points="-8,-6 -8,6 8,0" fill="#00F5A0" fillOpacity="0.4" stroke="#00F5A0" strokeWidth="1.5" />
                    <line x1="8" y1="-8" x2="8" y2="8" stroke="#00F5A0" strokeWidth="2" />
                    {/* Light emission arrows */}
                    <line x1="4" y1="-9" x2="10" y2="-15" stroke="#00F5A0" strokeWidth="1.2" />
                    <line x1="9" y1="-7" x2="15" y2="-13" stroke="#00F5A0" strokeWidth="1.2" />
                    <text x="16" y="4" fill="#00F5A0" fontSize="9" fontFamily="JetBrains Mono">LED1</text>
                  </g>

                  {/* Test Point Annotations */}
                  <circle cx="100" cy="60" r="3" fill="#00D2FF" />
                  <text x="94" y="52" fill="#00D2FF" fontSize="8" fontFamily="JetBrains Mono">TP1</text>

                  <circle cx="240" cy="60" r="3" fill="#00F5A0" />
                  <text x="234" y="52" fill="#00F5A0" fontSize="8" fontFamily="JetBrains Mono">TP2</text>

                  {/* Ground symbol at bottom */}
                  <g transform="translate(150, 160)">
                    <line x1="10" y1="0" x2="10" y2="10" stroke="#8B9BB4" strokeWidth="1.5" />
                    <line x1="2" y1="10" x2="18" y2="10" stroke="#8B9BB4" strokeWidth="1.5" />
                    <line x1="5" y1="13" x2="15" y2="13" stroke="#8B9BB4" strokeWidth="1.5" />
                    <line x1="8" y1="16" x2="12" y2="16" stroke="#8B9BB4" strokeWidth="1.5" />
                    <text x="22" y="14" fill="#8B9BB4" fontSize="8" fontFamily="JetBrains Mono">GND</text>
                  </g>
                </svg>
              </div>

              {/* Circuit Parameters Key */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#8B9BB4]">
                <div className="p-2 rounded bg-[#050816] border border-[rgba(0,229,255,0.1)]">
                  <span>Supply:</span> <strong className="text-[#00D2FF]">+5.0V DC</strong>
                </div>
                <div className="p-2 rounded bg-[#050816] border border-[rgba(0,229,255,0.1)]">
                  <span>Cutoff Freq:</span> <strong className="text-[#00F5A0]">159.2 Hz</strong>
                </div>
              </div>

              {/* Lab Quote */}
              <div className="mt-4 p-3 rounded-xl bg-[#050816] border border-[rgba(0,245,160,0.15)] text-xs font-mono text-[#8B9BB4]">
                <span className="text-[#00F5A0] block">// LAB NOTEBOOK:</span>
                <span className="italic text-[#EAF2FF]/80">
                  "Every complex microchip is simply millions of fundamental circuit switches working in harmony."
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
