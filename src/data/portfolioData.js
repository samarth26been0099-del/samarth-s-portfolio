export const personalInfo = {
  name: "SAMARTH SAHU",
  shortName: "Samarth Sahu",
  role: "B.Tech (ECE) Student",
  tagline: "1st-Year ECE Student // Hardware & Software Explorer",
  statement: "Exploring Electronics, Embedded Systems, Programming & the Technology Behind Connected Devices.",
  statusIndicator: "ECE STUDENT // BUILDING & LEARNING",
  college: "JECRC UNIVERSITY",
  location: "JAIPUR, INDIA",
  email: "sahusamarth2610@gmail.com",
  linkedIn: "https://www.linkedin.com/in/samarth-sahu-a44544430",
  github: "https://github.com/samarth26been0099-del",
  githubUsername: "samarth26been0099-del",
  bio: `I am a first-year B.Tech student in Electronics & Communication Engineering (ECE) with a deep curiosity for how hardware, circuits, and intelligent software converge. Rather than claiming years of industry expertise, my focus is on hands-on experimentation, disciplined engineering fundamentals, and continuous skill acquisition.

Currently exploring circuit theory, digital logic, microcontrollers, and modern programming languages, I enjoy taking concepts from schematic diagrams and lines of code into functional real-world prototypes.`,
  dossier: {
    field: "ELECTRONICS & COMMUNICATION",
    level: "B.TECH / YEAR 1",
    status: "LEARNING & BUILDING",
    institution: "JECRC UNIVERSITY, JAIPUR",
    primaryCuriosity: "Circuits, Embedded Systems, IoT & AI",
  },
  learningGoals: [
    "Design and simulate custom multi-layer PCBs using EDA tools",
    "Deepen low-level firmware engineering with C/C++ on ARM & AVR microcontrollers",
    "Integrate IoT sensors with wireless telemetry (WiFi, Bluetooth, LoRa)",
    "Bridge electronic hardware inputs with lightweight machine learning inference"
  ],
  interests: [
    "Digital Logic & Circuit Analysis",
    "Microcontroller Interfacing & Embedded C",
    "Modern Web Architecture & UI Design",
    "Artificial Intelligence & Automation Workflows"
  ]
};

export const skillsModules = [
  {
    category: "Electronics",
    description: "Core hardware fundamentals, circuit analysis & semiconductor building blocks.",
    status: "ACADEMIC & LAB FOUNDATION",
    icon: "Cpu",
    items: [
      { name: "Basic Circuit Analysis", stage: "Active Coursework", detail: "Ohm's & Kirchhoff's laws, nodal/mesh analysis, RLC circuits", icon: "Activity" },
      { name: "Digital Electronics", stage: "Laboratory Focus", detail: "Logic gates, boolean algebra, multiplexers, flip-flops, counters", icon: "Binary" },
      { name: "Analog Electronics", stage: "Exploring", detail: "Diodes, BJT/FET transistors, op-amps, rectification & signal conditioning", icon: "Waveform" },
      { name: "Electronic Components", stage: "Hands-on", detail: "Resistors, capacitors, inductors, sensors, LEDs & semiconductor packages", icon: "Component" }
    ]
  },
  {
    category: "Programming",
    description: "Computational logic, algorithmic problem-solving & system software.",
    status: "DAILY CODE PRACTICE",
    icon: "Code2",
    items: [
      { name: "C", stage: "Core Foundation", detail: "Structured programming, memory pointers, bitwise operations, headers", icon: "Terminal" },
      { name: "C++", stage: "Active Building", detail: "Object-Oriented Programming (OOP), STL, DSA fundamentals, memory management", icon: "FileCode" },
      { name: "Python", stage: "Scripting & AI", detail: "Scripting, algorithmic exploration, data handling, automation tools", icon: "FileTerminal" },
      { name: "HTML & CSS", stage: "Strong Foundation", detail: "Modern semantic structure, Tailwind layout engines, responsive web UI", icon: "Layout" },
      { name: "JavaScript", stage: "Interactive UI", detail: "ES6+, DOM APIs, asynchronous events, frontend application logic", icon: "FileJson" }
    ]
  },
  {
    category: "Tools",
    description: "Development environments, hardware prototyping platforms & workflow automation.",
    status: "PROTOTYPING TOOLKIT",
    icon: "Wrench",
    items: [
      { name: "Arduino IDE", stage: "Active Prototyping", detail: "Microcontroller sketch development, digital/analog I/O, sensor readouts", icon: "Cpu" },
      { name: "Git & GitHub", stage: "Version Control", detail: "Repository tracking, branches, open-source workflow, version hygiene", icon: "GitBranch" },
      { name: "VS Code", stage: "Primary Editor", detail: "Compiler tooling, linting, platform extensions, debugging workflows", icon: "Monitor" },
      { name: "Simulation Tools", stage: "Virtual Prototyping", detail: "Tinkercad Circuits, LTspice, circuit verification before breadboard assembly", icon: "Layers" }
    ]
  },
  {
    category: "Learning & Exploring",
    description: "Forward-looking engineering domains under active exploration and self-study.",
    status: "ACTIVE STUDY ROADMAP",
    icon: "Compass",
    items: [
      { name: "Embedded Systems", stage: "Self-Paced Research", detail: "Microcontroller memory maps, peripheral registers, interrupt service routines", icon: "Microchip" },
      { name: "Microcontrollers", stage: "Hardware Labs", detail: "AVR ATmega328P, ESP32 architecture, GPIO protocols (UART, SPI, I2C)", icon: "Cpu" },
      { name: "Communication Systems", stage: "Curriculum Prep", detail: "Modulation schemes, signal propagation, wireless transceivers & antennas", icon: "Radio" },
      { name: "PCB Design", stage: "Beginning Phase", detail: "Schematic capture, PCB routing, component footprints, Gerber exports", icon: "Grid" }
    ]
  }
];

export const projectsData = [
  {
    id: "MOD-01",
    title: "Personal Portfolio Website",
    tagline: "Interactive Digital Electronics Lab & PCB Interface",
    silkLabel: "HW-REV: 1.2 // VERCEL-PROD",
    category: "Web & Hardware Aesthetics",
    description: "A tailored digital portfolio designed like a smart laboratory bench. Showcases ECE coursework, modular technical toolkits, and interactive oscilloscope wave visualizers.",
    technicalFeatures: [
      "Custom PCB grid overlay with subtle animated signal traces",
      "Interactive multi-mode waveform monitor with frequency simulation",
      "Modular hardware card layout with zero fake progress percentages",
      "Lightweight, 100% responsive, optimized for instantaneous Vercel delivery"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "SVG Circuit Graphics"],
    componentsUsed: ["Virtual Logic Gates", "Oscilloscope Engine", "Signal Traces", "Responsive Canvas"],
    githubUrl: "https://github.com/samarth26been0099-del",
    demoUrl: "#",
    specs: {
      voltage: "3.3V Logic",
      clockRate: "Instant Client Load",
      interface: "REST / Web APIs"
    }
  },
  {
    id: "MOD-02",
    title: "AI Website Project",
    tagline: "Generative AI Platform & Interactive Engineering Assistant",
    silkLabel: "HW-REV: 1.0 // GEN-AI-CORE",
    category: "AI & Emerging Tech",
    description: "An intelligent web application integrating modern AI models to assist with technical queries, concept explanations, and automated problem troubleshooting.",
    technicalFeatures: [
      "Context-aware prompt parsing tailored for STEM & engineering topics",
      "Real-time dynamic response rendering with code block highlighting",
      "Clean laboratory-style chat interface with low visual fatigue",
      "Modular API client architecture allowing plug-and-play LLM backends"
    ],
    technologies: ["Python", "JavaScript", "Generative AI APIs", "React", "REST APIs"],
    componentsUsed: ["API Pipeline", "Context Buffer", "Tokenizer Parser", "Reactive State"],
    githubUrl: "https://github.com/samarth26been0099-del",
    demoUrl: "#",
    specs: {
      voltage: "5.0V Emulated",
      clockRate: "Sub-Second Inference",
      interface: "JSON Streams"
    }
  },
  {
    id: "MOD-03",
    title: "Student Productivity Project",
    tagline: "Modular Engineering Academic & Lab Milestone Organizer",
    silkLabel: "HW-REV: 2.1 // TASK-STORAGE",
    category: "Productivity & Systems",
    description: "A digital workspace engineered for engineering undergraduates to manage complex semester coursework, laboratory reports, circuit design deadlines, and focus intervals.",
    technicalFeatures: [
      "Custom Pomodoro study timer with electronic audio pulses",
      "Curriculum tracker for circuit theories, math assignments, and lab records",
      "Persistent zero-latency browser storage without requiring logins",
      "Minimalist interface engineered to prevent cognitive overload"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Local Storage API", "State Management"],
    componentsUsed: ["Interval Timers", "Local State Engine", "Audio Tone Synthesizer", "Storage Cache"],
    githubUrl: "https://github.com/samarth26been0099-del",
    demoUrl: "#",
    specs: {
      voltage: "Zero Overhead",
      clockRate: "Client-Side Native",
      interface: "DOM Events"
    }
  }
];

export const educationTimeline = [
  {
    id: "NODE-01",
    stage: "CURRENT MILESTONE",
    degree: "B.Tech in Electronics & Communication Engineering (ECE)",
    institution: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    year: "2026 - 2030",
    status: "Currently Enrolled & Building",
    signalType: "Active Processing",
    nodeColor: "#00F5A0",
    description: "Developing rigorous theoretical and practical competencies across semiconductor physics, circuit theorems, digital logic, and programming fundamentals.",
    traceMilestones: [
      "Circuit Analysis & Network Theorems (Kirchhoff, Thevenin, Norton)",
      "Digital Logic Design, Binary Systems & Combinational Circuits",
      "Object-Oriented Programming (C++) & Data Structures fundamentals",
      "Microcontroller experimentation & sensor interfacing in university labs"
    ]
  },
  {
    id: "NODE-00",
    stage: "FOUNDATIONAL MILESTONE",
    degree: "Senior Secondary Education (Class XII - PCM)",
    institution: "Science & Mathematics Stream",
    location: "Betul, Madhya Pradesh, India",
    year: "Completed 2025",
    status: "Graduated with Honors",
    signalType: "Input Signal Completed",
    nodeColor: "#00D2FF",
    description: "Built strong mathematical reasoning and physics intuition in electromagnetism, semiconductors, alternating currents, and differential calculus.",
    traceMilestones: [
      "Mastered Newtonian physics, electrostatics, magnetics & semiconductor diodes",
      "Completed rigorous analytical mathematics in calculus & vectors",
      "Participated in regional science exhibitions and technology workshops"
    ]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Python & Programming Foundations",
    issuer: "Technical Learning Platform",
    category: "Certifications",
    date: "2024",
    description: "Hands-on certification covering procedural programming, data structures, and algorithmic logic.",
    badge: "Verified Certificate",
    icon: "Award"
  },
  {
    id: 2,
    title: "Generative AI & Prompt Engineering",
    issuer: "AI Learning Cohort",
    category: "Courses",
    date: "2024",
    description: "Explored model inference, prompt design architectures, and automated developer tooling.",
    badge: "Specialization",
    icon: "Sparkles"
  },
  {
    id: 3,
    title: "University Tech Hackathon Participant",
    issuer: "JECRC University Tech Fest",
    category: "Hackathons",
    date: "2024",
    description: "Collaborated on an engineering ideation project integrating sensor telemetry with software.",
    badge: "Hackathon",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Digital Electronics & Breadboard Lab",
    issuer: "ECE Student Society",
    category: "Courses",
    date: "2024",
    description: "Completed practical lab training on logic gates, IC pinouts, breadboarding, and signal verification.",
    badge: "Hands-on Lab",
    icon: "Cpu"
  },
  {
    id: 5,
    title: "Academic Excellence in Science & Math",
    issuer: "Senior Secondary Board",
    category: "Awards",
    date: "2024",
    description: "Distinction in Physics and Mathematics, establishing the theoretical base for ECE studies.",
    badge: "Academic Honor",
    icon: "Trophy"
  },
  {
    id: 6,
    title: "Independent Open-Source Explorer",
    issuer: "GitHub & Self-Initiated",
    category: "Other Achievements",
    date: "Ongoing",
    description: "Continually committing code, testing developer libraries, and maintaining public repositories.",
    badge: "Active Builder",
    icon: "GitBranch"
  }
];
