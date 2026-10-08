import React, { useState } from 'react';
import { 
  Cpu, Code2, Wrench, Compass, Terminal, FileCode, FileTerminal, Layout, FileJson,
  Binary, Activity, Layers, Radio, Grid, CheckCircle2
} from 'lucide-react';
import { skillsModules } from '../data/portfolioData';
import { StatusLed, SchematicSymbol } from './ElectronicsElements';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Programming', 'Tools', 'Learning & Exploring'];

  const iconMap = {
    Cpu: Cpu,
    Code2: Code2,
    Wrench: Wrench,
    Compass: Compass,
    Terminal: Terminal,
    FileCode: FileCode,
    FileTerminal: FileTerminal,
    Layout: Layout,
    FileJson: FileJson,
    Binary: Binary,
    Activity: Activity,
    Layers: Layers,
    Radio: Radio,
    Grid: Grid,
  };

  const filteredModules = activeCategory === 'All'
    ? skillsModules
    : skillsModules.filter(m => m.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A1024]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] text-xs font-mono tracking-widest uppercase">
            <StatusLed color="mint" pulse={false} />
            <span>02 // HARDWARE & SOFTWARE TOOLKIT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF2FF] tracking-tight">
            Technical <span className="text-ece-gradient">Modules & Skills</span>
          </h2>
          <p className="font-sans text-[#8B9BB4] text-sm sm:text-base leading-relaxed">
            Organized as modular laboratory competencies and active learning domains — zero inflated percentages, purely genuine engineering exploration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00F5A0] text-black font-bold shadow-[0_0_15px_rgba(0,245,160,0.4)]'
                  : 'bg-[#0A1024] text-[#8B9BB4] hover:text-[#EAF2FF] hover:bg-slate-800/60 border border-[rgba(0,229,255,0.15)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modular Hardware Rack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredModules.map((module, mIdx) => {
            const ModuleIcon = iconMap[module.icon] || Cpu;
            return (
              <div
                key={mIdx}
                className="pcb-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Module Top Chassis Bar with PCB Pin Headers */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[rgba(0,229,255,0.15)]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.2)] text-[#00F5A0]">
                      <ModuleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#EAF2FF]">
                        {module.category}
                      </h3>
                      <p className="font-mono text-[10px] text-[#00D2FF]">
                        // {module.status}
                      </p>
                    </div>
                  </div>

                  {/* Simulated 4-Pin Hardware Header */}
                  <div className="flex items-center gap-1.5 p-1.5 rounded bg-[#050816] border border-[rgba(0,229,255,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" title="Pin 1: VCC" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" title="Pin 2: DATA" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFF2B2]" title="Pin 3: CLK" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B9BB4]" title="Pin 4: GND" />
                  </div>
                </div>

                {/* Module Description */}
                <p className="font-sans text-xs text-[#8B9BB4] mb-5">
                  {module.description}
                </p>

                {/* Sub-items List (Technical Modules with Exploratory Stages) */}
                <div className="space-y-3">
                  {module.items.map((item, iIdx) => {
                    const ItemIcon = iconMap[item.icon] || Cpu;
                    return (
                      <div
                        key={iIdx}
                        className="p-3 rounded-xl bg-[#050816]/80 border border-[rgba(0,229,255,0.1)] hover:border-[#00F5A0]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex items-start gap-2.5">
                          <ItemIcon className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                          <div>
                            <div className="font-mono text-xs font-semibold text-[#EAF2FF]">
                              {item.name}
                            </div>
                            <div className="font-sans text-[11px] text-[#8B9BB4]">
                              {item.detail}
                            </div>
                          </div>
                        </div>

                        {/* Stage Badge instead of Fake Percentages */}
                        <span className="self-start sm:self-center font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] whitespace-nowrap">
                          {item.stage}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Module Footer Pinout Legend */}
                <div className="mt-5 pt-3 border-t border-[rgba(0,229,255,0.1)] flex items-center justify-between text-[10px] font-mono text-[#8B9BB4]">
                  <span>BUS: I2C / SPI COMPLIANT</span>
                  <span className="text-[#00F5A0] font-semibold">STATUS: ACTIVE LEARNING</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* ECE Philosophy Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#050816] text-[#00F5A0] border border-[rgba(0,245,160,0.2)]">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <p className="font-mono text-xs text-[#EAF2FF]">
              Focused on <strong className="text-[#00F5A0]">first-principles engineering</strong>: mastering circuit equations, low-level firmware memory, and algorithmic problem-solving before layering higher abstraction frameworks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
