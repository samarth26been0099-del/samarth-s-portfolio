import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Cpu, Activity, Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { StatusLed, SchematicSymbol } from './ElectronicsElements';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] text-xs font-mono tracking-widest uppercase">
            <StatusLed color="mint" pulse={false} />
            <span>03 // HARDWARE & SOFTWARE MODULES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF2FF] tracking-tight">
            Featured <span className="text-ece-gradient">Projects</span>
          </h2>
          <p className="font-sans text-[#8B9BB4] text-sm sm:text-base leading-relaxed">
            Engineered prototypes bridging web frontends, artificial intelligence APIs, and digital electronics laboratory concepts.
          </p>
        </div>

        {/* PCB Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0A1024] border border-[rgba(0,229,255,0.18)] hover:border-[#00D2FF] hover:shadow-[0_12px_35px_-5px_rgba(0,210,255,0.25)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-2xl"
              >
                {/* Animated PCB Trace Line across top on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00F5A0] via-[#00D2FF] to-[#FFF2B2] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Solder Mask / Silkscreen Top Chassis Header */}
                <div className="p-4 bg-[#050816]/90 border-b border-[rgba(0,229,255,0.12)] flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]/80 shadow-[0_0_6px_#00F5A0]" />
                    <span className="text-[#8B9BB4] text-[11px] font-semibold">{project.silkLabel}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00D2FF]">
                    {project.id}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1">
                  
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#EAF2FF] group-hover:text-[#00F5A0] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#00D2FF] mt-1">
                      // {project.tagline}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#8B9BB4] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Hardware & Software Components Used */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B9BB4] mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#00F5A0]" />
                      <span>Technologies & Components:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#050816] text-[#EAF2FF] border border-[rgba(0,229,255,0.15)] group-hover:border-[#00D2FF]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Silkscreen Pinout Spec Bar */}
                  <div className="pt-2 grid grid-cols-3 gap-2 font-mono text-[10px] text-[#8B9BB4] border-t border-[rgba(0,229,255,0.08)]">
                    <div>
                      <span className="block text-[8px] uppercase">LOGIC:</span>
                      <span className="text-[#00F5A0] font-semibold">{project.specs.voltage}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase">CLK:</span>
                      <span className="text-[#00D2FF] font-semibold truncate">{project.specs.clockRate}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase">PORT:</span>
                      <span className="text-[#FFF2B2] font-semibold">{project.specs.interface}</span>
                    </div>
                  </div>

                </div>

                {/* PCB Module Card Footer & Action Buttons */}
                <div className="p-5 bg-[#050816]/70 border-t border-[rgba(0,229,255,0.12)] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00F5A0]/15 hover:bg-[#00F5A0] border border-[#00F5A0]/40 text-[#00F5A0] hover:text-black font-heading font-semibold text-xs tracking-wide transition-all duration-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Module Specs</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.15)] hover:border-[#00D2FF] text-[#8B9BB4] hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Modal Overlay */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

        {/* GitHub Repositories Banner */}
        <div className="mt-14 text-center">
          <p className="font-sans text-xs sm:text-sm text-[#8B9BB4] mb-3">
            Want to inspect my public repositories, homework scripts, and engineering builds?
          </p>
          <a
            href="https://github.com/samarth26been0099-del"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A1024] hover:bg-[#050816] border border-[rgba(0,229,255,0.2)] hover:border-[#00F5A0] text-[#EAF2FF] font-mono text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,245,160,0.25)]"
          >
            <Github className="w-4 h-4 text-[#00F5A0]" />
            <span>GitHub Profile // @samarth26been0099-del</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#8B9BB4]" />
          </a>
        </div>

      </div>
    </section>
  );
};
