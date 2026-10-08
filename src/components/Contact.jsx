import React, { useState } from 'react';
import { 
  Mail, Linkedin, Github, Send, Copy, Check, MapPin, Sparkles, 
  Radio, ArrowUpRight, Clock, ShieldCheck, ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { StatusLed, SchematicSymbol } from './ElectronicsElements';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F5A0', '#00D2FF', '#FFF2B2']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTransmitting(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name} via ECE Portfolio`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    setTimeout(() => {
      setIsTransmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00F5A0', '#00D2FF', '#FFF2B2']
      });
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A1024]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1024] border border-[rgba(0,229,255,0.2)] text-[#00F5A0] text-xs font-mono tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5" />
            <span>06 // TRANSMITTER & TELEMETRY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAF2FF] tracking-tight">
            Connect <span className="text-ece-gradient">With Me</span>
          </h2>
          <p className="font-sans text-[#8B9BB4] text-sm sm:text-base leading-relaxed">
            Inspired by an electronic communication link — open for tech discussions, student collaborations, and internship opportunities.
          </p>

          {/* Visual Element Requested by User: INPUT → SIGNAL → CONNECTION */}
          <div className="pt-3 flex items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded bg-[#050816] text-[#00F5A0] border border-[rgba(0,245,160,0.3)]">
              INPUT
            </span>
            <span className="text-[#00D2FF] font-bold">&rarr;</span>
            <span className="px-3 py-1 rounded bg-[#050816] text-[#00D2FF] border border-[rgba(0,210,255,0.3)]">
              SIGNAL
            </span>
            <span className="text-[#FFF2B2] font-bold">&rarr;</span>
            <span className="px-3 py-1 rounded bg-[#050816] text-[#FFF2B2] border border-[rgba(255,242,178,0.3)]">
              CONNECTION
            </span>
          </div>
        </div>

        {/* Contact Grid: Direct Communication Channels & Transmitter Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pcb-card rounded-2xl p-7 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,229,255,0.15)]">
                <div className="flex items-center gap-2">
                  <StatusLed color="mint" pulse />
                  <span className="font-mono text-xs text-[#00F5A0] font-semibold tracking-wider">
                    RF CHANNEL: OPEN
                  </span>
                </div>
                <SchematicSymbol type="antenna" className="w-4 h-4" color="text-[#00D2FF]" />
              </div>

              {/* Email Terminal Card */}
              <div className="p-4 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] hover:border-[#00F5A0]/40 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8B9BB4] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00F5A0]" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#0A1024] hover:bg-slate-800 text-[#00F5A0] border border-[rgba(0,229,255,0.15)] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00F5A0]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm font-semibold text-[#EAF2FF] hover:text-[#00F5A0] transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* LinkedIn Network */}
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] hover:border-[#00D2FF] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A1024] text-[#00D2FF] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8B9BB4]">LinkedIn Network</span>
                    <div className="font-heading text-sm font-bold text-[#EAF2FF] group-hover:text-[#00D2FF] transition-colors">
                      samarth-sahu-a44544430
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B9BB4] group-hover:text-[#00D2FF] transition-colors" />
              </a>

              {/* GitHub Profile */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] hover:border-[#00F5A0] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A1024] text-[#00F5A0] group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8B9BB4]">GitHub Repository Log</span>
                    <div className="font-mono text-sm font-bold text-[#EAF2FF] group-hover:text-[#00F5A0] transition-colors">
                      {personalInfo.githubUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B9BB4] group-hover:text-[#00F5A0] transition-colors" />
              </a>

              {/* Location & Timezone Coordinates */}
              <div className="p-4 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.1)] flex items-center justify-between text-xs font-mono text-[#8B9BB4]">
                <div className="flex items-center gap-2 text-[#EAF2FF]">
                  <MapPin className="w-4 h-4 text-[#00F5A0]" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#8B9BB4]">
                  <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>IST (UTC +5:30)</span>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-[#0A1024] border border-[rgba(0,245,160,0.2)] text-xs font-sans text-[#8B9BB4] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00F5A0] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Active undergraduate communication channel. I typically respond to academic discussions, internship inquiries, and collaborative queries within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Signal Transmitter Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="pcb-card rounded-2xl p-7 sm:p-9 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-5 border-b border-[rgba(0,229,255,0.15)] mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#EAF2FF] flex items-center gap-2">
                    <Send className="w-4 h-4 text-[#00F5A0]" />
                    <span>Signal Transmitter Console</span>
                  </h3>
                  <p className="font-mono text-xs text-[#8B9BB4] mt-1">
                    Direct packet relay to sahusamarth2610@gmail.com
                  </p>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#050816] border border-[rgba(0,229,255,0.2)] text-[#00D2FF] hidden sm:inline-block">
                  TELEMETRY: READY
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#050816] border border-[#00F5A0] text-[#00F5A0] flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.3)]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-[#EAF2FF]">Signal Dispatched!</h4>
                  <p className="font-sans text-sm text-[#8B9BB4] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#00F5A0]">{formState.name}</strong>. Your default email client has been prepared with your packet data.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.2)] text-xs font-mono text-[#EAF2FF] hover:border-[#00F5A0]"
                  >
                    Transmit Another Packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4] mb-1.5">
                        Transmitter Identity (Your Name) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Johnson"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] text-[#EAF2FF] placeholder:text-slate-600 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4] mb-1.5">
                        Return Address (Your Email) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] text-[#EAF2FF] placeholder:text-slate-600 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4] mb-1.5">
                      Subject Line
                    </label>
                    <input
                      type="text"
                      placeholder="Internship / Engineering Project / Technical Chat"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] focus:border-[#00D2FF] text-[#EAF2FF] placeholder:text-slate-600 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4] mb-1.5">
                      Message Payload *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Samarth, I came across your ECE portfolio and wanted to reach out regarding..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-[rgba(0,229,255,0.15)] focus:border-[#00F5A0] text-[#EAF2FF] placeholder:text-slate-600 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-[#00F5A0] hover:bg-[#00D2FF] shadow-[0_0_20px_rgba(0,245,160,0.35)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isTransmitting ? (
                      <span>Modulating Carrier & Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#8B9BB4] font-mono pt-1">
                    Direct connection to sahusamarth2610@gmail.com
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
