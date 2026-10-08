import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, Sparkles, Zap, Cpu, Trophy, GitBranch, PlusCircle, CheckCircle, Calendar, X } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { StatusLed } from './ElectronicsElements';

export const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showGuideModal, setShowGuideModal] = useState(false);

  const categories = ['All', 'Certifications', 'Hackathons', 'Courses', 'Awards', 'Other Achievements'];

  const iconMap = {
    Award: Award,
    Sparkles: Sparkles,
    Zap: Zap,
    Cpu: Cpu,
    Trophy: Trophy,
    GitBranch: GitBranch,
  };

  const filteredAchievements = selectedCategory === 'All'
    ? achievementsData
    : achievementsData.filter(a => a.category === selectedCategory);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] text-xs font-mono tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>05 // VERIFIED LAB LOGS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF2FF] tracking-tight">
            Recognitions & <span className="text-ece-gradient">Milestones</span>
          </h2>
          <p className="font-sans text-[#8B9BB4] text-sm sm:text-base leading-relaxed">
            Certifications, university hackathon participations, laboratory workshops, and academic distinctions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[rgba(0,229,255,0.12)]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-heading transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00F5A0] text-black font-bold shadow-[0_0_15px_rgba(0,245,160,0.35)]'
                    : 'bg-[#0A1024] text-[#8B9BB4] hover:text-[#EAF2FF] border border-[rgba(0,229,255,0.12)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowGuideModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A1024] border border-[rgba(0,229,255,0.2)] hover:border-[#00F5A0] text-[#00F5A0] text-xs font-mono transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add New Milestone</span>
          </button>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="pcb-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#050816] text-[#00F5A0] border border-[rgba(0,229,255,0.15)] group-hover:border-[#00F5A0]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#050816] border border-[rgba(0,229,255,0.2)] text-[#00D2FF]">
                        {item.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#8B9BB4] flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#EAF2FF] group-hover:text-[#00F5A0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#00D2FF] mt-1 mb-2">
                    // {item.issuer}
                  </p>
                  <p className="font-sans text-xs text-[#8B9BB4] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[rgba(0,229,255,0.1)] flex items-center justify-between text-[11px] font-mono text-[#8B9BB4]">
                  <span className="capitalize">{item.category}</span>
                  <span className="text-[#00F5A0] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Logged
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guide Modal for Customizing / Adding Milestones */}
        {showGuideModal && createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setShowGuideModal(false)}
            />
            <div className="relative w-full max-w-2xl rounded-3xl bg-[#0A1024] border border-[rgba(0,229,255,0.3)] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,229,255,0.15)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#050816] text-[#00F5A0] border border-[rgba(0,245,160,0.3)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#EAF2FF]">How to Log New Milestones</h3>
                    <p className="font-mono text-xs text-[#00D2FF]">Configured in src/data/portfolioData.js</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="p-2 text-[#8B9BB4] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 space-y-4 font-sans text-xs sm:text-sm text-[#8B9BB4]">
                <p>
                  As you complete new electronics workshops, college hackathons, or online certifications, easily append them into the <code className="text-[#00F5A0] bg-[#050816] px-2 py-0.5 rounded border border-[rgba(0,229,255,0.15)] font-mono">achievementsData</code> array:
                </p>

                <pre className="p-4 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] text-[11px] font-mono text-[#00F5A0] overflow-x-auto leading-relaxed">
{`{
  id: 7,
  title: "Robotics & Microcontroller Workshop",
  issuer: "JECRC University Robotics Club",
  category: "Certifications", // or Hackathons, Courses, Awards
  date: "2025",
  description: "Built autonomous obstacle-avoiding bot using ultrasonic sensors.",
  badge: "Workshop Winner",
  icon: "Cpu"
}`}
                </pre>
              </div>

              <div className="pt-4 border-t border-[rgba(0,229,255,0.15)] flex justify-end">
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#00F5A0] hover:bg-[#00D2FF] text-black font-heading font-bold text-xs uppercase"
                >
                  Understood, Return to Portfolio
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      </div>
    </section>
  );
};
