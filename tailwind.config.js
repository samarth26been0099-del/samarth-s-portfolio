/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lab: {
          bg: '#050816',
          surface: '#0A1024',
          card: '#0D1530',
          border: 'rgba(0, 229, 255, 0.15)',
          text: '#EAF2FF',
          muted: '#8B9BB4',
        },
        accent: {
          mint: '#00F5A0',
          teal: '#00D2FF',
          lemon: '#FFF2B2',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'ece-gradient': 'linear-gradient(135deg, #00F5A0 0%, #00D2FF 50%, #FFF2B2 100%)',
        'ece-gradient-subtle': 'linear-gradient(135deg, rgba(0, 245, 160, 0.15) 0%, rgba(0, 210, 255, 0.15) 50%, rgba(255, 242, 178, 0.1) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal-flow': 'signalFlow 3s linear infinite',
        'trace-glow': 'traceGlow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        signalFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        traceGlow: {
          '0%': { opacity: '0.3', filter: 'drop-shadow(0 0 2px rgba(0, 245, 160, 0.2))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 8px rgba(0, 210, 255, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
