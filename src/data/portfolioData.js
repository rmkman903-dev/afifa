/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * Central source of truth for all portfolio content.
 * You can easily update your personal information, academics, projects,
 * skills, and achievements by editing this file.
 */

export const personalData = {
  name: "Afifa Tazeen",
  initials: "AT",
  title: "B.Tech CSE (Data Science) Student",
  roles: [
    "Data Science Aspirant",
    "AI & Machine Learning Innovator",
    "Full-Stack Web Developer",
    "Aerospace & Tech Researcher",
    "Creative Problem Solver"
  ],
  bio: "Pre-final year Computer Science & Engineering (Data Science) student at Vaagdevi College of Engineering. Passionate about machine learning, predictive intelligence, and interdisciplinary research spanning artificial intelligence, autonomous systems, and societal impact technologies. Eager to contribute to research internships and high-impact engineering ventures.",
  location: "Warangal, Telangana, India",
  email: "afifamohammed444@gmail.com",
  phone: "+91 99999 99999", // Replace with your phone if desired
  linkedin: "https://www.linkedin.com/in/afifa-tazeen-388a82398?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com", // Replace with your GitHub handle
  status: "Available for Research & Internships",
  resumeUrl: "#resume", // Link to your resume PDF or hosted link
  avatarPlaceholder: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", // Futuristic profile placeholder
};

export const careerVision = {
  summary: "Driven by research-oriented career opportunities, particularly in emerging technologies, Artificial Intelligence, Data Science, and interdisciplinary domains. Actively seeking research internships, collaborative labs, and software development challenges that transform theoretical machine learning into real-world protective systems.",
  focusAreas: [
    { title: "Artificial Neural Networks & NLP", desc: "Acoustic signal processing, voice recognition, and real-time emergency inference." },
    { title: "Computer Vision & Edge AI", desc: "Object detection, agricultural quality screening, and automated bio-spoilage analysis." },
    { title: "Aeronautics & Predictive Safety", desc: "Sensor-fused safety systems, telemetry tracking, and advanced fire-resistant protective mechanisms." },
    { title: "Full-Stack Data Solutions", desc: "Bridging intelligent Python/FastAPI microservices with responsive Java/Web applications." }
  ]
};

export const academics = [
  {
    institution: "Vaagdevi College of Engineering",
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    timeline: "2022 — 2026 (3rd Year, 5th Sem)",
    score: "8.35 CGPA",
    details: "Core focus on Data Structures, Machine Learning, Statistical Analysis, Database Management Systems, and Artificial Intelligence.",
    highlight: "Consistent Top Performer"
  },
  {
    institution: "SR Junior College",
    degree: "Intermediate / 12th Standard (MPC)",
    timeline: "Completed in 2024",
    score: "83%",
    details: "Mathematics, Physics, and Chemistry foundation with excellence in analytical problem-solving.",
    highlight: "Distinction"
  },
  {
    institution: "Kiddie Koop High School",
    degree: "Secondary School Certificate (10th)",
    timeline: "Completed in 2022",
    score: "9.0 GPA",
    details: "Comprehensive academic curriculum with distinction in Science, Mathematics, and Co-curricular leadership.",
    highlight: "High Academic Standing"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core algorithmic problem solving & data pipelines",
    skills: [
      { name: "Java", level: 85, badge: "OOP & Backend" },
      { name: "Python", level: 90, badge: "Data Science & AI" },
      { name: "R", level: 75, badge: "Statistical Computing" }
    ]
  },
  {
    category: "Web & Frontend",
    icon: "Layout",
    description: "Modern, dynamic & responsive user interfaces",
    skills: [
      { name: "HTML5 & Semantic Markup", level: 95, badge: "Core" },
      { name: "CSS3 & Tailwind CSS", level: 90, badge: "Styling" },
      { name: "JavaScript (ES6+)", level: 85, badge: "Logic & DOM" },
      { name: "React.js Ecosystem", level: 80, badge: "Component Systems" }
    ]
  },
  {
    category: "AI, ML & Data Science",
    icon: "Cpu",
    description: "Neural architectures, computer vision & speech inference",
    skills: [
      { name: "Artificial Neural Networks (ANN)", level: 85, badge: "Deep Learning" },
      { name: "Speech Recognition & NLP", level: 80, badge: "Acoustics" },
      { name: "Computer Vision & OpenCV", level: 80, badge: "Vision" },
      { name: "TensorFlow & PyTorch", level: 78, badge: "Frameworks" },
      { name: "Data Science & Pandas/NumPy", level: 88, badge: "Analysis" }
    ]
  },
  {
    category: "Databases & Backend",
    icon: "Database",
    description: "Structured storage, relational queries & APIs",
    skills: [
      { name: "SQL (Structured Query Language)", level: 90, badge: "Queries & Joins" },
      { name: "MySQL", level: 85, badge: "RDBMS" },
      { name: "PostgreSQL & Supabase", level: 78, badge: "Cloud DB" },
      { name: "FastAPI / REST Services", level: 75, badge: "Microservices" }
    ]
  },
  {
    category: "Tools & Software",
    icon: "Wrench",
    description: "Development environments & productivity suites",
    skills: [
      { name: "VS Code", level: 92, badge: "IDE" },
      { name: "Google Colab", level: 90, badge: "Cloud GPU" },
      { name: "Microsoft Excel & PowerPoint", level: 95, badge: "Analytics & Decks" },
      { name: "Microsoft Word", level: 95, badge: "Documentation" }
    ]
  },
  {
    category: "Research, Media & Creative",
    icon: "Sparkles",
    description: "Multidisciplinary exploration & event leadership",
    skills: [
      { name: "Archaeological & Aerospace Documentary Research", level: 92, badge: "Field Research" },
      { name: "Technical Documentation", level: 90, badge: "Authoring" },
      { name: "Presentation & Template Design", level: 94, badge: "Creative" },
      { name: "Image & Video Editing", level: 85, badge: "Multimedia" },
      { name: "Event & Operations Management", level: 95, badge: "Leadership" }
    ]
  }
];

export const projects = [
  {
    id: "safe-tomorrow",
    title: "Safe Tomorrow",
    subtitle: "AI Emergency Voice Detection & Alert Dispatch System",
    category: "Artificial Intelligence",
    badge: "AI & Neural Networks",
    featured: true,
    tagline: "Acoustic surveillance system detecting distress calls and human screams in real-time.",
    description: "An AI-based emergency voice detection system engineered to identify emergency situations through audio and voice pattern recognition. Leverages Artificial Neural Networks (ANN) and Natural Language Processing (NLP) models to discriminate ambient audio from critical human distress cues, facilitating rapid and automated alert dispatch.",
    technologies: ["Artificial Intelligence", "Artificial Neural Networks (ANN)", "Speech Recognition", "NLP", "Python", "Audio Processing"],
    highlights: [
      "Trained on vocal distress acoustic profiles and high-stress pitch triggers",
      "Real-time spectrogram feature extraction for low-latency classification",
      "Automated SOS dispatch webhook architecture for emergency services"
    ],
    github: "https://github.com",
    demo: "#explore-safe-tomorrow",
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "smartfeed-ai",
    title: "SmartFeed AI — SIH 2026",
    subtitle: "Dairy Feed & Silage Spoilage Assessment System",
    category: "Computer Vision & Edge AI",
    badge: "SIH 2026 Project",
    featured: true,
    tagline: "Intelligent agricultural vision screening feed quality and spoilage risks for dairy farmers.",
    description: "A software-based AI solution developed for dairy farmers that processes images of feed and silage to screen for visible spoilage, fungal contamination, and nutritional degradation risks. Provides instant, farmer-friendly recommendations and downloadable digital analytical reports.",
    technologies: ["Flutter", "Dart", "Python", "OpenCV", "TensorFlow / PyTorch", "FastAPI", "PostgreSQL / Supabase"],
    highlights: [
      "Multi-class visual segmentation of mold, bacterial rot, and discoloration",
      "Lightweight mobile interface built with Flutter for rural accessibility",
      "High-throughput FastAPI inference server backed by cloud Supabase database"
    ],
    github: "https://github.com",
    demo: "#explore-smartfeed",
    accentColor: "from-emerald-400 to-cyan-500"
  },
  {
    id: "aero-guard",
    title: "AERO GUARD",
    subtitle: "Aircraft Safety & Emergency Protection System — SIH 2024",
    category: "Aerospace & Safety",
    badge: "SIH 2024 Innovation",
    featured: true,
    tagline: "Next-gen passenger survival concept utilizing sensor telemetry and advanced ballistic fabrics.",
    description: "AERO GUARD is a pioneering aviation safety concept engineered to drastically enhance passenger protection during catastrophic airborne emergencies. Proposes a sensor-monitored emergency survival suit fabricated from high-grade fire-resistant materials including NOMEX 3-A and Kevlar. Integrates real-time telemetry from Air Data Computers (airspeed, altitude, cabin pressure) to predict crash probabilities and trigger life-saving deployable protections.",
    technologies: ["Predictive Maintenance AI", "Air Data Computers", "Aircraft Monitoring Sensors", "NOMEX 3-A", "Kevlar Composites", "Aviation Telemetry"],
    highlights: [
      "Real-time sensor integration evaluating anomalous descent rates and structural stress",
      "Automatic deployment algorithm linked to critical flight-envelope thresholds",
      "Engineered thermal and impact attenuation using dual-layer NOMEX & Kevlar"
    ],
    github: "https://github.com",
    demo: "#explore-aeroguard",
    accentColor: "from-purple-500 to-indigo-600"
  },
  {
    id: "leftover-food-portal",
    title: "Leftover Food Sharing Portal (RTRP)",
    subtitle: "Community Food Redistribution & Anti-Waste Ecosystem",
    category: "Web Systems",
    badge: "Team Leader",
    featured: false,
    tagline: "Web portal coordinating surplus food donations from commercial venues to charitable NGOs.",
    description: "A dedicated web-based community platform connecting food donors (restaurants, caterers, banquet halls, individuals) with verified NGOs to streamline food donations, catalog available rations, automate collection scheduling, and optimize distribution routes to eradicate preventable hunger and food waste.",
    technologies: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript", "Relational Database Design"],
    highlights: [
      "Led full project development lifecycle as designated Team Leader",
      "Relational MySQL database tracking inventory expiration timestamps",
      "Intuitive donor-to-NGO matching workflow with schedule confirmations"
    ],
    github: "https://github.com",
    demo: "#explore-food-portal",
    accentColor: "from-amber-400 to-orange-500"
  }
];

export const achievements = [
  {
    title: "1st Prize — Thought Spire 2.0",
    organization: "Vaagdevi College of Engineering",
    date: "1st Year B.Tech",
    category: "Project Presentation",
    badge: "Champion",
    description: "Awarded First Prize for presenting an innovative engineering project during the premier departmental symposium Thought Spire 2.0.",
    icon: "Trophy"
  },
  {
    title: "Best Blueprint Design — Crafting the Cosmos",
    organization: "KITS Warangal",
    date: "Inter-College Workshop",
    category: "Aerospace & Design",
    badge: "Best Design",
    description: "Selected as the Best Blueprint Design among inter-college participants in the prestigious aerospace & cosmological engineering workshop.",
    icon: "Award"
  },
  {
    title: "Smart India Hackathon Participant (SIH 2024 & 2026)",
    organization: "Ministry of Education & AICTE",
    date: "2024 & 2026 Editions",
    category: "National Hackathon",
    badge: "National Participant",
    description: "Contributed innovative solutions to complex national problem statements: AERO GUARD (Aviation Safety) and SmartFeed AI (Agricultural Quality Automation).",
    icon: "Flame"
  },
  {
    title: "Secretary — IEEE VCE Student Branch",
    organization: "IEEE Student Branch",
    date: "Present",
    category: "Leadership",
    badge: "Executive Board",
    description: "Directing technical operations, coordinating IEEE symposiums, fostering student research participation, and managing global professional compliance.",
    icon: "ShieldCheck"
  },
  {
    title: "Event & Operational Head — SAC Esports Club",
    organization: "Student Activity Center",
    date: "Active Tenure",
    category: "Management",
    badge: "Core Head",
    description: "Heading logistics, tournament bracket management, live stream coordination, and operational protocols for campus-wide competitive esports events.",
    icon: "Gamepad2"
  },
  {
    title: "Student Coordinator — NSS & ISTE",
    organization: "National Service Scheme & Indian Society for Technical Education",
    date: "Ongoing",
    category: "Social & Technical Service",
    badge: "Coordinator",
    description: "Coordinated 5+ large-scale inter-college technical events and actively volunteered across 15+ community welfare drives and tech symposiums.",
    icon: "Users"
  }
];

export const certifications = [
  {
    name: "Cisco Networking & Technical Certifications",
    issuer: "Cisco Networking Academy",
    field: "Networking Fundamentals & Emerging Tech",
    icon: "Network"
  },
  {
    name: "Simplilearn Technical Courses",
    issuer: "Simplilearn",
    field: "Modern Software & Technology Foundations",
    icon: "CheckCircle2"
  },
  {
    name: "Infosys Springboard Online Certifications",
    issuer: "Infosys Springboard",
    field: "Industry-aligned Computing & Programming",
    icon: "GraduationCap"
  },
  {
    name: "15+ Institutional & Technical Volunteering Accreditations",
    issuer: "Vaagdevi College & Affiliated Bodies",
    field: "Event Architecture & Community Outreach",
    icon: "Medal"
  }
];
