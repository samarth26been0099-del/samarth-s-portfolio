import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Sparkles, Layers } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0A1024] border border-[rgba(0,229,255,0.3)] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[rgba(0,229,255,0.15)]">
          <div className="space-y-1">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#050816] text-[#00F5A0] border border-[rgba(0,245,160,0.3)]">
              {project.category}
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#EAF2FF] pt-2">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-[#00D2FF]">
              // {project.silkLabel}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#050816] text-[#8B9BB4] hover:text-[#EAF2FF] border border-[rgba(0,229,255,0.15)] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Detailed Overview */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#8B9BB4] mb-2">
              Architecture & Problem Definition
            </h4>
            <p className="font-sans text-sm sm:text-base text-[#EAF2FF]/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Engineering Highlights */}
          {project.technicalFeatures && (
            <div className="p-5 rounded-2xl bg-[#050816] border border-[rgba(0,229,255,0.15)]">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#00F5A0] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Technical Specifications & Features</span>
              </h4>
              <div className="space-y-2.5">
                {project.technicalFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EAF2FF]">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies & Components Used */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#8B9BB4] mb-3">
              Technologies & Laboratory Sub-systems
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#050816] border border-[rgba(0,229,255,0.2)] text-[#EAF2FF] font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hardware Telemetry Specs */}
          {project.specs && (
            <div className="p-4 rounded-xl bg-[#050816] border border-[rgba(0,245,160,0.2)] font-mono text-xs text-[#00F5A0] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-[#8B9BB4] block text-[9px]">VOLTAGE/LOGIC:</span>
                <span>{project.specs.voltage}</span>
              </div>
              <div>
                <span className="text-[#8B9BB4] block text-[9px]">CLOCK / SPEED:</span>
                <span className="text-[#00D2FF]">{project.specs.clockRate}</span>
              </div>
              <div>
                <span className="text-[#8B9BB4] block text-[9px]">INTERFACE:</span>
                <span className="text-[#FFF2B2]">{project.specs.interface}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-5 border-t border-[rgba(0,229,255,0.15)] flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#050816] hover:bg-slate-900 border border-[rgba(0,229,255,0.2)] hover:border-[#00F5A0] text-[#EAF2FF] text-xs font-heading font-semibold tracking-wide transition-all"
          >
            <Github className="w-4 h-4 text-[#00F5A0]" />
            <span>View GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#00F5A0] hover:bg-[#00D2FF] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,160,0.35)] transition-all"
          >
            Close Module View
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};
