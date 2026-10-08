import React from 'react';
import { CircuitBackground } from './components/ElectronicsElements';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-[#EAF2FF] font-sans selection:bg-[#00F5A0] selection:text-black overflow-x-hidden">
      {/* Background Circuit Traces & Ambient Effects */}
      <CircuitBackground />

      {/* Responsive Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
