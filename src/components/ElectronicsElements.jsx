import React, { useState, useEffect } from 'react';

/**
 * Subtle Background with PCB grid, circuit nodes, and signal pulses
 */
export const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle PCB Grid Pattern */}
      <div className="absolute inset-0 pcb-grid opacity-60" />

      {/* Low-contrast ambient glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#00F5A0]/[0.035] rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#00D2FF]/[0.04] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-[#FFF2B2]/[0.02] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* PCB Trace Vector Overlay with Solder Nodes & Signal Pulses */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFF2B2" stopOpacity="0.3" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Trace Lines */}
        <g stroke="url(#traceGrad)" strokeWidth="1.2" fill="none">
          <path d="M 0 120 L 220 120 L 260 160 L 520 160 L 560 200 L 900 200" strokeDasharray="6 4" />
          <path d="M 120 0 L 120 280 L 160 320 L 360 320 L 400 360 L 400 680" strokeDasharray="8 6" />
          <path d="M 800 100 L 950 100 L 980 130 L 1200 130" strokeDasharray="5 5" />
          <path d="M 300 800 L 480 800 L 520 760 L 780 760 L 820 800 L 1200 800" strokeDasharray="6 6" />
        </g>

        {/* Solder Pads / Circuit Nodes */}
        <g fill="#00D2FF" opacity="0.8">
          <circle cx="220" cy="120" r="3.5" />
          <circle cx="260" cy="160" r="3" fill="#00F5A0" />
          <circle cx="520" cy="160" r="3" />
          <circle cx="560" cy="200" r="4" fill="#FFF2B2" />
          <circle cx="120" cy="280" r="3.5" fill="#00F5A0" />
          <circle cx="160" cy="320" r="3" />
          <circle cx="360" cy="320" r="3" fill="#00D2FF" />
          <circle cx="400" cy="360" r="4" fill="#00F5A0" />
          <circle cx="950" cy="100" r="3.5" />
          <circle cx="480" cy="800" r="3.5" fill="#00F5A0" />
          <circle cx="520" cy="760" r="3" />
          <circle cx="780" cy="760" r="3.5" fill="#00D2FF" />
        </g>

        {/* Animated Traveling Signal Pulse along Trace */}
        <circle r="3.5" fill="#00F5A0" filter="url(#glow)">
          <animateMotion
            path="M 0 120 L 220 120 L 260 160 L 520 160 L 560 200 L 900 200"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="3" fill="#00D2FF" filter="url(#glow)">
          <animateMotion
            path="M 120 0 L 120 280 L 160 320 L 360 320 L 400 360 L 400 680"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="3" fill="#FFF2B2" filter="url(#glow)">
          <animateMotion
            path="M 300 800 L 480 800 L 520 760 L 780 760 L 820 800 L 1200 800"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

/**
 * Status LED Indicator with authentic laboratory pulse
 */
export const StatusLed = ({ color = "mint", label = "", pulse = true }) => {
  const colorMap = {
    mint: {
      dot: "bg-[#00F5A0]",
      shadow: "shadow-[0_0_8px_#00F5A0]",
      ping: "bg-[#00F5A0]",
      text: "text-[#00F5A0]"
    },
    teal: {
      dot: "bg-[#00D2FF]",
      shadow: "shadow-[0_0_8px_#00D2FF]",
      ping: "bg-[#00D2FF]",
      text: "text-[#00D2FF]"
    },
    lemon: {
      dot: "bg-[#FFF2B2]",
      shadow: "shadow-[0_0_8px_#FFF2B2]",
      ping: "bg-[#FFF2B2]",
      text: "text-[#FFF2B2]"
    }
  };

  const selected = colorMap[color] || colorMap.mint;

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-[#EAF2FF]">
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${selected.ping}`} />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${selected.dot} ${selected.shadow}`} />
      </span>
      {label && <span className="font-semibold">{label}</span>}
    </span>
  );
};

/**
 * Interactive Oscilloscope Laboratory Screen
 * Supports Sine Wave, Square Wave, and Digital Clock Pulse
 */
export const OscilloscopeMonitor = () => {
  const [waveType, setWaveType] = useState('sine'); // 'sine' | 'square' | 'clock'
  const [freqKhz, setFreqKhz] = useState(1.0); // kHz
  const [ampVolts, setAmpVolts] = useState(3.3); // V peak-to-peak

  return (
    <div className="rounded-2xl bg-[#070D1E] border border-[rgba(0,229,255,0.2)] p-4 sm:p-5 shadow-2xl relative overflow-hidden">
      {/* Top Scope Chassis Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[rgba(0,229,255,0.15)] text-xs font-mono">
        <div className="flex items-center gap-2">
          <StatusLed color="mint" pulse />
          <span className="text-[#EAF2FF] font-semibold text-[11px] tracking-wider">
            OSCILLOSCOPE // CH1 [LIVE]
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#8B9BB4]">
          <span>CAL: OK</span>
          <span className="text-[#00D2FF]">500mV/DIV</span>
        </div>
      </div>

      {/* Oscilloscope CRT Grid & Wave Canvas Display */}
      <div className="relative h-44 sm:h-52 w-full rounded-xl bg-[#030611] border border-[rgba(0,245,160,0.2)] overflow-hidden">
        {/* Scope Graticule Grid */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 160, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 160, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Center Crosshairs */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#00F5A0]/30 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-[#00F5A0]/30 pointer-events-none" />

        {/* Dynamic Animated Waveform SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5A0" />
              <stop offset="50%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
            <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render Waveforms based on selection */}
          {waveType === 'sine' && (
            <path
              d="M -100 80 Q -75 25 -50 80 T 0 80 Q 25 25 50 80 T 100 80 Q 125 25 150 80 T 200 80 Q 225 25 250 80 T 300 80 Q 325 25 350 80 T 400 80 Q 425 25 450 80 T 500 80"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2.5"
              filter="url(#waveGlow)"
              className="animate-waveform"
            />
          )}

          {waveType === 'square' && (
            <path
              d="M -100 80 V 35 H -50 V 125 H 0 V 35 H 50 V 125 H 100 V 35 H 150 V 125 H 200 V 35 H 250 V 125 H 300 V 35 H 350 V 125 H 400 V 35 H 450 V 125 H 500"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2.2"
              filter="url(#waveGlow)"
              className="animate-waveform"
            />
          )}

          {waveType === 'clock' && (
            <path
              d="M -100 120 V 40 H -70 V 120 H -40 V 40 H -10 V 120 H 20 V 40 H 50 V 120 H 80 V 40 H 110 V 120 H 140 V 40 H 170 V 120 H 200 V 40 H 230 V 120 H 260 V 40 H 290 V 120 H 320 V 40 H 350 V 120 H 380 V 40 H 410 V 120 H 440 V 40 H 470 V 120 H 500"
              fill="none"
              stroke="#00F5A0"
              strokeWidth="2.2"
              filter="url(#waveGlow)"
              className="animate-waveform"
            />
          )}
        </svg>

        {/* Live On-Screen Telemetry Overlay */}
        <div className="absolute top-2 left-3 font-mono text-[10px] text-[#00F5A0] space-y-0.5 pointer-events-none drop-shadow">
          <div>Vpp: {ampVolts.toFixed(1)}V</div>
          <div>Freq: {(freqKhz).toFixed(2)} kHz</div>
        </div>
        <div className="absolute bottom-2 right-3 font-mono text-[10px] text-[#00D2FF] pointer-events-none drop-shadow">
          TYPE: {waveType.toUpperCase()} WAVE
        </div>
      </div>

      {/* Scope Controls / Interactive Buttons */}
      <div className="mt-3.5 pt-3 border-t border-[rgba(0,229,255,0.12)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[#8B9BB4] mr-1">WAVEFORM:</span>
          <button
            onClick={() => setWaveType('sine')}
            className={`px-2.5 py-1 rounded text-[11px] transition-all ${
              waveType === 'sine'
                ? 'bg-[#00F5A0]/20 text-[#00F5A0] border border-[#00F5A0]/40 font-semibold'
                : 'bg-[#050816] text-[#8B9BB4] hover:text-white border border-[rgba(0,229,255,0.1)]'
            }`}
          >
            SINE
          </button>
          <button
            onClick={() => setWaveType('square')}
            className={`px-2.5 py-1 rounded text-[11px] transition-all ${
              waveType === 'square'
                ? 'bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 font-semibold'
                : 'bg-[#050816] text-[#8B9BB4] hover:text-white border border-[rgba(0,229,255,0.1)]'
            }`}
          >
            SQUARE
          </button>
          <button
            onClick={() => setWaveType('clock')}
            className={`px-2.5 py-1 rounded text-[11px] transition-all ${
              waveType === 'clock'
                ? 'bg-[#FFF2B2]/20 text-[#FFF2B2] border border-[#FFF2B2]/40 font-semibold'
                : 'bg-[#050816] text-[#8B9BB4] hover:text-white border border-[rgba(0,229,255,0.1)]'
            }`}
          >
            CLOCK
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#8B9BB4]">
          <span>IMPEDANCE: <strong className="text-[#EAF2FF]">50Ω</strong></span>
          <span>•</span>
          <span>TRIG: <strong className="text-[#00F5A0]">AUTO</strong></span>
        </div>
      </div>
    </div>
  );
};

/**
 * Clean IEEE Schematic Electronic Component Symbols
 */
export const SchematicSymbol = ({ type = "resistor", className = "w-6 h-6", color = "text-[#00F5A0]" }) => {
  switch (type) {
    case 'resistor':
      return (
        <svg className={`${className} ${color}`} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 0 10 L 8 10 L 12 3 L 16 17 L 20 3 L 24 17 L 28 3 L 32 10 L 40 10" />
        </svg>
      );
    case 'capacitor':
      return (
        <svg className={`${className} ${color}`} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="0" y1="10" x2="16" y2="10" />
          <line x1="16" y1="2" x2="16" y2="18" strokeWidth="2.5" />
          <line x1="24" y1="2" x2="24" y2="18" strokeWidth="2.5" />
          <line x1="24" y1="10" x2="40" y2="10" />
        </svg>
      );
    case 'diode':
      return (
        <svg className={`${className} ${color}`} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="10" x2="14" y2="10" />
          <polygon points="14,3 14,17 26,10" fill="currentColor" fillOpacity="0.2" />
          <line x1="26" y1="3" x2="26" y2="17" strokeWidth="2.2" />
          <line x1="26" y1="10" x2="40" y2="10" />
        </svg>
      );
    case 'led':
      return (
        <svg className={`${className} ${color}`} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="12" x2="14" y2="12" />
          <polygon points="14,5 14,19 26,12" fill="currentColor" fillOpacity="0.2" />
          <line x1="26" y1="5" x2="26" y2="19" strokeWidth="2.2" />
          <line x1="26" y1="12" x2="40" y2="12" />
          {/* Light Emission Rays */}
          <line x1="22" y1="4" x2="27" y2="1" strokeWidth="1.5" />
          <line x1="26" y1="7" x2="31" y2="4" strokeWidth="1.5" />
        </svg>
      );
    case 'logic-and':
      return (
        <svg className={`${className} ${color}`} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="2" y1="6" x2="12" y2="6" />
          <line x1="2" y1="18" x2="12" y2="18" />
          <path d="M 12 2 H 22 C 30 2 34 8 34 12 C 34 16 30 22 22 22 H 12 Z" fill="currentColor" fillOpacity="0.15" />
          <line x1="34" y1="12" x2="38" y2="12" />
        </svg>
      );
    case 'antenna':
      return (
        <svg className={`${className} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <path d="M12 2v20" />
          <path d="M7 7l5 5 5-5" />
        </svg>
      );
    default:
      return null;
  }
};

export const CircuitChipIcon = ({ className = "w-5 h-5", glow = false }) => {
  return (
    <svg className={`${className} text-[#00F5A0]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="5" y="5" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" fill="currentColor" fillOpacity="0.2" />
      <path d="M9 2v3" />
      <path d="M15 2v3" />
      <path d="M9 19v3" />
      <path d="M15 19v3" />
      <path d="M2 9h3" />
      <path d="M2 15h3" />
      <path d="M19 9h3" />
      <path d="M19 15h3" />
    </svg>
  );
};

export const LedIndicator = StatusLed;

