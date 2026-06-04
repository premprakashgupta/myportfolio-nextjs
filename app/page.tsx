"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  FileText, 
  Copy, 
  Check, 
  ArrowRight,
  Code2,
  Terminal,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ---------------------------------------------------------
// Helper components & Hooks
// ---------------------------------------------------------

function CountUpNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const numValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1200; // ms
      const steps = 30;
      const stepTime = duration / steps;
      const increment = numValue / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= numValue) {
          setCount(numValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numValue]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

function CopyableText({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">{label}</span>
      <div className="flex items-center gap-2 group max-w-full">
        <span className="text-[#111827] font-medium text-sm sm:text-base md:text-lg break-all">{text}</span>
        <button 
          onClick={handleCopy}
          className="p-1.5 rounded-lg border border-[#E5E7EB] bg-white text-[#6B7280] hover:text-[#2563EB] hover:border-[#2563EB] transition-colors flex-shrink-0"
          title={`Copy ${label}`}
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Data Configurations
// ---------------------------------------------------------

const STATS = [
  { value: "2", label: "Years Experience", suffix: "+" },
  { value: "3", label: "Companies", suffix: "" },
  { value: "10", label: "Live Products", suffix: "+" },
  { value: "3000", label: "Users Served", suffix: "+" }
];

const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Thundergits Consultancy Pvt. Ltd.",
    location: "Remote",
    dates: "Apr 2025 – Present",
    bullets: [
      "Built a medical e-commerce + warehouse ERP with 250+ REST APIs serving 3,000+ active users",
      "Implemented JWT auth, RBAC, multi-tenant architecture — reduced unauthorised access to zero across 5+ tenants",
      "AWS EC2 + S3 deployment with Nginx + PM2 — reduced server downtime by 80%"
    ],
    tech: ["Node.js", "MySQL", "Prisma", "React", "AWS", "Docker"]
  },
  {
    role: "Full Stack Developer",
    company: "Systellar Technologies Pvt. Ltd.",
    location: "Gurugram",
    dates: "Apr 2024 – Mar 2025",
    bullets: [
      "Built full backend for Praesentia (attendance platform, 50+ organisations) — improved data accuracy by 98%",
      "Improved API response time by 35% by rewriting slow queries and restructuring 4 core modules",
      "Built 20+ reusable React components; mentored 3 junior developers in React best practices"
    ],
    tech: ["Node.js", "MySQL", "React", "REST APIs"]
  },
  {
    role: "Full Stack Developer",
    company: "MittArv Technology Pvt. Ltd.",
    location: "Remote",
    dates: "Oct 2023 – Mar 2024",
    bullets: [
      "Built 10+ reusable React components and REST API integrations — improved page load time by 25%",
      "Fixed critical Flutter bugs — reduced crash frequency by 45%"
    ],
    tech: ["React", "Node.js", "Flutter", "MySQL"]
  }
];

const PROJECTS = [
  {
    title: "PharmaSuite ERP",
    featured: true,
    statsBadge: "3,000+ active users",
    problem: "Medical store networks needed a unified e-commerce + warehouse management system",
    tech: ["Node.js", "MySQL", "Prisma", "React", "AWS EC2", "S3"],
    live: "",
    bgGradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Thikana 360",
    featured: false,
    problem: "PG/Hostel accommodation finder and management SaaS with digital tenant onboarding",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "",
    bgGradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Bhakti Villas",
    featured: false,
    problem: "Luxury resort reservation platform with interactive gallery and booking workflow",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "Nginx"],
    live: "",
    bgGradient: "from-amber-500 to-orange-600"
  },
  {
    title: "Edugits",
    featured: false,
    problem: "School management SaaS — classes, fees, results, admit cards",
    tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
    live: "",
    bgGradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Coding Pandas",
    featured: false,
    statsBadge: "60% API throughput improvement",
    problem: "Competitive programming platform with online compiler and real-time leaderboard",
    tech: ["Next.js", "Node.js", "BullMQ", "SSE", "R2"],
    live: "https://codingpandas.in",
    bgGradient: "from-orange-500 to-red-600"
  },
  {
    title: "Loqo AI",
    featured: false,
    problem: "Spiritual video streaming platform with HLS and Google Ads integration",
    tech: ["Next.js", "HLS", "Video.js", "Google Ads"],
    live: "",
    bgGradient: "from-sky-500 to-blue-600"
  }
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Socket.IO", "JWT", "BullMQ"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Firebase"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS (EC2, S3)", "Docker", "Nginx", "PM2", "Git", "Jest", "Postman", "CI/CD"]
  }
];

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#2563EB] selection:text-white">
      {/* NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? "bg-white border-b border-[#E5E7EB] py-4" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#2563EB]/10 flex items-center justify-center font-bold text-xl text-[#2563EB] transition-all duration-300">
              <Image 
                src="/avatar.png" 
                alt="Prem Prakash Gupta Logo" 
                width={40} 
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-[#111827] text-lg tracking-tight group-hover:text-[#2563EB] transition-colors hidden sm:inline">
              Prem Prakash
            </span>
          </button>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#6B7280] hover:text-[#111827] font-medium text-sm transition-colors relative py-1 focus:outline-none"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right Solid Button */}
          <div className="hidden md:block">
            <a 
              href="/resume/Prem_Prakash_Gupta__Resume.pdf" 
              download="Prem_Prakash_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow active:scale-95"
            >
              <FileText size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#6B7280] hover:text-[#111827] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-[#E5E7EB] shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#6B7280] hover:text-[#111827] font-semibold text-left py-2 border-b border-[#F3F4F6]"
              >
                {item}
              </button>
            ))}
            <a 
              href="/resume/Prem_Prakash_Gupta__Resume.pdf" 
              download="Prem_Prakash_Gupta_Resume.pdf"
              className="w-full text-center py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-xl mt-2 block"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </header>

      {/* SECTION 1 — HERO */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Opportunities Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to opportunities
            </div>

            {/* Name */}
            <h1 
              style={{ fontSize: "clamp(42px, 6.5vw, 72px)" }}
              className="font-extrabold text-[#111827] tracking-tight leading-[1.05] mb-6"
            >
              PREM PRAKASH GUPTA
            </h1>

            {/* Role line */}
            <p className="text-lg md:text-xl font-semibold text-[#2563EB] mb-4">
              Full Stack Developer (MERN) · 2+ Years · 3 Companies · 10+ Live Products
            </p>

            {/* Value Proposition */}
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-xl">
              I build scalable SaaS backends and clean React UIs — shipped to 3,000+ real users.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-base rounded-xl transition-all shadow-sm hover:shadow active:scale-95"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              <a 
                href="/resume/Prem_Prakash_Gupta__Resume.pdf" 
                download="Prem_Prakash_Gupta_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] text-[#111827] font-semibold text-base rounded-xl transition-all active:scale-95"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a 
                href="https://github.com/premprakashgupta" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/premprakashgupta-/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#6B7280] hover:text-[#2563EB] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:prem.com0011@gmail.com" 
                className="text-[#6B7280] hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right Column (40%) - Terminal */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md bg-[#1E1E2E] rounded-2xl shadow-xl border border-white/5 overflow-hidden flex flex-col">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#151522] border-b border-white/5">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-[#FF5F56] rounded-full"></span>
                  <span className="w-3 h-3 bg-[#FFBD2E] rounded-full"></span>
                  <span className="w-3 h-3 bg-[#27C93F] rounded-full"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-mono">
                  <Terminal size={12} />
                  developer.js
                </div>
                <div className="w-10"></div>
              </div>
              {/* Terminal Body */}
              <pre 
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="p-6 text-sm text-[#CDD6F4] overflow-x-auto leading-relaxed"
              >
                <code>
                  <span className="text-[#F38BA8]">const</span> <span className="text-[#89B4FA]">developer</span> = <span className="text-[#A6E3A1]">{"{"}</span><br />
                  &nbsp;&nbsp;name: <span className="text-[#A6E3A1]">&apos;Prem Prakash Gupta&apos;</span>,<br />
                  &nbsp;&nbsp;role: <span className="text-[#A6E3A1]">&apos;Full Stack Engineer&apos;</span>,<br />
                  &nbsp;&nbsp;experience: <span className="text-[#FAB387]">&apos;2+ Years&apos;</span>,<br />
                  &nbsp;&nbsp;companies: <span className="text-[#FAB387]">3</span>,<br />
                  &nbsp;&nbsp;status: <span className="text-[#A6E3A1]">&apos;Open to opportunities&apos;</span><br />
                  <span className="text-[#A6E3A1]">{"}"}</span>;<br /><br />

                  <span className="text-[#F38BA8]">function</span> <span className="text-[#89B4FA]">isReady</span><span className="text-[#F9E2AF]">(candidate)</span> <span className="text-[#A6E3A1]">{"{"}</span><br />
                  &nbsp;&nbsp;<span className="text-[#F38BA8]">return</span> candidate.experience &gt;= <span className="text-[#FAB387]">&apos;2Y&apos;</span> <span className="text-[#F38BA8]">&amp;&amp;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;candidate.status === <span className="text-[#A6E3A1]">&apos;Open to opportunities&apos;</span>;<br />
                  <span className="text-[#A6E3A1]">{"}"}</span><br /><br />

                  <span className="text-[#CBA6F7]">console</span>.<span className="text-[#89B4FA]">log</span><span className="text-[#F9E2AF]">(isReady(developer))</span>;<br />
                  <span className="text-[#6C7086]">{"// Output: true"}</span>
                </code>
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — STATS STRIP */}
      <section className="w-full bg-[#F3F4F6] py-8 border-y border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-1">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs md:text-sm font-medium text-[#6B7280] uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — EXPERIENCE */}
      <section id="experience" className="py-20 max-w-[1100px] mx-auto px-6 border-b border-[#E5E7EB]">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-[#111827] mb-12 tracking-tight">Work Experience</h2>

          <div className="space-y-16">
            {EXPERIENCES.map((job, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                
                {/* Left: Company & Dates (4 cols) */}
                <div className="md:col-span-4 flex flex-col">
                  <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-1">{job.dates}</span>
                  <h3 className="text-xl font-bold text-[#111827]">{job.company}</h3>
                  <span className="text-sm font-medium text-[#6B7280] mt-1">{job.location}</span>
                </div>

                {/* Right: Role & Bullets & Badges (8 cols) */}
                <div className="md:col-span-8 flex flex-col">
                  <h4 className="text-lg font-bold text-[#2563EB] mb-3">{job.role}</h4>
                  
                  <ul className="space-y-3.5 mb-5 text-[#6B7280] text-[15px] leading-relaxed">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((badge, bIdx) => (
                      <span 
                        key={bIdx}
                        className="px-3 py-1 bg-white border border-[#E5E7EB] text-[#111827] rounded-full text-xs font-semibold shadow-2xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — SELECTED PROJECTS */}
      <section id="projects" className="py-20 max-w-[1100px] mx-auto px-6 border-b border-[#E5E7EB]">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111827] tracking-tight mb-2">Selected Work</h2>
            <p className="text-lg text-[#6B7280]">Production applications used by real businesses</p>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12"
              >
                {/* Left side: Simulated Screenshot Placeholder (4 cols) */}
                <div className={`md:col-span-4 bg-gradient-to-br ${project.bgGradient} p-8 flex flex-col justify-between text-white relative min-h-[180px] md:min-h-full`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
                  
                  <div className="z-10 flex items-center justify-between w-full">
                    <Code2 size={24} className="opacity-80" />
                    {project.statsBadge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white/20 rounded-full border border-white/20">
                        {project.statsBadge}
                      </span>
                    )}
                  </div>

                  <div className="z-10">
                    <h4 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h4>
                    <p className="text-white/70 text-xs font-mono">
                      {project.live ? project.live.replace("https://", "").replace("http://", "") : "Confidential Project"}
                    </p>
                  </div>
                </div>

                {/* Right side: Project Details (8 cols) */}
                <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center text-[10px] font-bold text-[#2563EB] uppercase tracking-widest mb-3">
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-[#111827] mb-2">{project.title}</h3>
                    <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
                      <strong className="text-[#111827] font-semibold">Problem solved:</strong> {project.problem}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#F3F4F6] text-[#6B7280] rounded-lg text-xs font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-2 border-t border-[#F3F4F6]">
                      {project.live ? (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]"
                        >
                          Visit Application
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider bg-[#F3F4F6] px-2.5 py-1 rounded">
                          NDA Protected (Private Codebase)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* View all projects footer */}
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/premprakashgupta" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1d4ed8] font-bold text-base transition-colors"
            >
              View all 18+ projects
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — TECHNICAL SKILLS */}
      <section id="skills" className="py-20 max-w-[1100px] mx-auto px-6 border-b border-[#E5E7EB]">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-[#111827] tracking-tight mb-12">Technical Skills</h2>

          <div className="space-y-8">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-4 border-b border-[#F3F4F6] last:border-0">
                <span className="w-32 text-sm font-bold text-[#111827] uppercase tracking-wider flex-shrink-0">
                  {group.title}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-white border border-[#E5E7EB] text-[#111827] rounded-xl text-sm font-semibold shadow-2xs hover:border-[#2563EB] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 — CONTACT */}
      <section id="contact" className="py-20 max-w-[1100px] mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Let&apos;s build something together
          </h2>
          <p className="text-lg text-[#6B7280] mb-12">
            Open to full-time roles and freelance projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full max-w-xl mb-12 text-left bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-xs">
            <CopyableText text="prem.com0011@gmail.com" label="Email Address" />
            <CopyableText text="+91-9955804730" label="Phone Number" />
            
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">LinkedIn</span>
              <a 
                href="https://www.linkedin.com/in/premprakashgupta-/" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#2563EB] hover:text-[#1d4ed8] font-semibold text-lg flex items-center gap-1 hover:underline"
              >
                premprakashgupta-
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">GitHub</span>
              <a 
                href="https://github.com/premprakashgupta" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#111827] hover:text-[#2563EB] font-semibold text-lg flex items-center gap-1 hover:underline"
              >
                premprakashgupta
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#E5E7EB] py-12">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#6B7280] text-sm">
            © 2025 Prem Prakash Gupta · Full Stack Developer · Built with Next.js
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/premprakashgupta" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#6B7280] hover:text-[#111827] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/premprakashgupta-/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#6B7280] hover:text-[#2563EB] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:prem.com0011@gmail.com" 
              className="text-[#6B7280] hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
