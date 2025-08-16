"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography';
import { Github, Instagram, Linkedin, Mail, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileImage } from "@/app/_constants/constant";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Define types
interface User {
  name: string;
  profile: string;
  about: string;
  title: string;
  subtitle: string;
  linkedIn: string;
  instagram: string;
  github: string;
  email: string;
}

interface Project {
  projectNameAndTechStack: string;
  link: string;
  priority: string | undefined;
  description: string;
  techStack: string[];
}

interface Experience {
  company: string;
  location: string;
  role: string;
  dates: string;
  project: {
    name: string;
    tech: string[];
  };
  responsibilities: string[];
}

// Sample data
const userData: User = {
  name: "Prem Prakash Gupta",
  profile: "Full Stack Developer",
  about: "I specialize in building responsive web applications with modern technologies. With a passion for clean code and intuitive user experiences, I transform ideas into digital reality.",
  title: "Hello, I'm Prem",
  subtitle: "Full Stack Developer & UI/UX Enthusiast",
  linkedIn: "https://linkedin.com/in/premprakashgupta-",
  instagram: "https://instagram.com",
  github: "https://github.com/premprakashgupta",
  email: "prem.com0011@gmail.com"
};

const techColorMap: { [key: string]: string } = {
  'MERN': 'bg-green-200 text-green-800',
  'Socket.IO': 'bg-blue-200 text-blue-800',
  'Cloudinary': 'bg-purple-200 text-purple-800',
  'React': 'bg-blue-300 text-blue-900',
  'jsPDF': 'bg-red-200 text-red-800',
  'Flutter': 'bg-cyan-200 text-cyan-800',
  'Firebase': 'bg-yellow-200 text-yellow-800',
  'Dialogflow': 'bg-orange-200 text-orange-800',
  'Node.js': 'bg-green-300 text-green-900',
  'REST API': 'bg-gray-300 text-gray-900',
  'Razorpay': 'bg-blue-400 text-blue-900',
  'HTML': 'bg-red-300 text-red-900',
  'CSS': 'bg-blue-300 text-blue-900',
  'JavaScript': 'bg-yellow-300 text-yellow-900',
};

const projectsData: Project[] = [
  {
    "projectNameAndTechStack": "WhatsApp Clone – MERN, Socket.IO",
    "link": "https://github.com/premprakashgupta/whatsApp_clone_Mern",
    "priority": undefined,
    "description": "A real-time chat application mimicking WhatsApp's core features. Users can send and receive messages instantly, thanks to the power of Socket.IO and the MERN stack.",
    "techStack": ["MERN", "Socket.IO"]
  },
  {
    "projectNameAndTechStack": "Instagram Clone – MERN, Cloudinary",
    "link": "https://github.com/premprakashgupta/preminsta",
    "priority": undefined,
    "description": "A full-featured Instagram clone where users can register, post photos, follow other users, and receive notifications. Built with the MERN stack and Cloudinary for image management.",
    "techStack": ["MERN", "Cloudinary"]
  },
  {
    "projectNameAndTechStack": "Resume Builder – React, jsPDF",
    "link": "https://resume4u.netlify.app/resume",
    "priority": undefined,
    "description": "A simple yet powerful resume builder that allows users to create professional resumes and export them as PDF or image files. Built with React and jsPDF.",
    "techStack": ["React", "jsPDF"]
  },
  {
    "projectNameAndTechStack": "Museuo Bharat – Flutter, Firebase, Dialogflow",
    "link": "clent project",
    "priority": undefined,
    "description": "A mobile application for booking museum tickets. It features a chatbot powered by Dialogflow to assist users with booking and information gathering. Built with Flutter and Firebase.",
    "techStack": ["Flutter", "Firebase", "Dialogflow"]
  },
  {
    "projectNameAndTechStack": "Chikit (Medicine SaaS) – MERN",
    "link": "https://chikit360.thundergits.com/",
    "priority": "highlighted",
    "description": "A multi-tenant SaaS platform for managing medical stores. It includes features like inventory management, billing, and payment gateway integration. Built with the MERN stack.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "Edugits – MERN",
    "link": "https://edugits.thundergits.com/",
    "priority": "highlighted",
    "description": "A comprehensive school management system with features like class creation, student management, fee management, and subscription-based services. Built with the MERN stack.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "Sticky Notes App – MERN",
    "link": "https://github.com/premprakashgupta/stickyNote",
    "priority": undefined,
    "description": "A simple and intuitive sticky notes application that allows users to create and manage notes from anywhere. Built with the MERN stack for seamless data synchronization.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "Flutter E-commerce App – Flutter, REST API",
    "link": "https://github.com/premprakashgupta/e_commerce_using_flutter",
    "priority": undefined,
    "description": "A beautiful and functional e-commerce application built with Flutter. It communicates with a backend server through a REST API and uses Firebase for authentication and other services.",
    "techStack": ["Flutter", "REST API", "Firebase"]
  },
  {
    "projectNameAndTechStack": "Code Discussion Forum – Flutter, Firebase",
    "link": "",
    "priority": undefined,
    "description": "A mobile application for developers to discuss and share code snippets. It features real-time chat and code highlighting. Built with Flutter and Firebase.",
    "techStack": ["Flutter", "Firebase"]
  },
  {
    "projectNameAndTechStack": "Attendance Manager – Flutter, Firebase",
    "link": "https://github.com/premprakashgupta/attendance",
    "priority": undefined,
    "description": "A mobile application for managing student attendance. It also includes features for conducting tests and assessments. Built with Flutter and Firebase.",
    "techStack": ["Flutter", "Firebase"]
  },
  {
    "projectNameAndTechStack": "Women Safety App – Flutter, SMS",
    "link": "https://github.com/premprakashgupta/women-safety-app",
    "priority": undefined,
    "description": "A mobile application designed for women's safety. It can send emergency alerts with location to pre-defined contacts via SMS. Built with Flutter.",
    "techStack": ["Flutter", "SMS"]
  },
  {
    "projectNameAndTechStack": "Coding Pandas Platform – Node.js",
    "link": "https://codingpandas.in/",
    "priority": "most highlighted",
    "description": "A competitive programming platform similar to LeetCode, where users can solve coding problems and participate in contests. The backend is powered by Node.js.",
    "techStack": ["Node.js"]
  },
  {
    "projectNameAndTechStack": "Pasuseva – MERN, Razorpay",
    "link": "https://pasuseva.in/",
    "priority": "highlighted",
    "description": "A platform for managing loans for animal husbandry. It includes features for loan application, processing, and repayment, with Razorpay integration for payments.",
    "techStack": ["MERN", "Razorpay"]
  },
  {
    "projectNameAndTechStack": "Loqo AI – MERN",
    "link": "https://loqo.ai/",
    "priority": "highlighted",
    "description": "A streaming platform for spiritual videos, similar to YouTube. It features a vast library of content like Ramayan and Mahabharat. Built with the MERN stack.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "Fruits E-commerce (Sunshine)",
    "link": "https://sunshine-server.onrender.com/",
    "priority": undefined,
    "description": "A simple e-commerce website for selling fresh fruits. It includes basic features like product listing, shopping cart, and checkout. Built with the MERN stack.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "Web Editor",
    "link": "https://webeditor4u.netlify.app/",
    "priority": undefined,
    "description": "A simple web-based text editor with basic formatting features, similar to Notepad. A handy tool for quick notes and code snippets.",
    "techStack": ["HTML", "CSS", "JavaScript"]
  },
  {
    "projectNameAndTechStack": "Enersole Bio Gas site",
    "link": "https://www.enersolbiopower.com/",
    "priority": undefined,
    "description": "A website for a biogas company to showcase their products and services. It provides information about the company and its offerings.",
    "techStack": ["HTML", "CSS", "JavaScript"]
  },
  {
    "projectNameAndTechStack": "P-Square Pharmacy",
    "link": "https://chikit360-psquare.thundergits.com/signin",
    "priority": undefined,
    "description": "A medicine management system for an individual medical store. It helps in managing inventory, sales, and customer records.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "Carpet Decore site",
    "link": "https://carpetsdecor.com/",
    "priority": undefined,
    "description": "A website to showcase a client's carpet products. It features a beautiful gallery and product details.",
    "techStack": ["HTML", "CSS", "JavaScript"]
  },
  {
    "projectNameAndTechStack": "netajee ",
    "link": "https://netajee.in/",
    "priority": "highlighted",
    "description": "An election management application with an admin panel. It helps in managing campaigns, voters, and election results.",
    "techStack": ["MERN"]
  },
  {
    "projectNameAndTechStack": "volcanic classes",
    "link": "",
    "priority": undefined,
    "description": "An online learning platform for students. It provides video lectures, notes, and quizzes on various subjects.",
    "techStack": ["MERN"]
  }
];

const experience: Experience[] = [
  {
    company: "Systellar Technologies Pvt. Ltd.",
    location: "Gurugram, Haryana",
    role: "Full Stack Developer",
    dates: "Apr 2024 – Mar 2025",
    project: {
      name: "Praesentia",
      tech: ["Node.js", "MySQL"]
    },
    responsibilities: [
      "Built scalable backend infrastructure using Node.js and MySQL",
      "Mentored 3 interns in MERN Stack and UI design",
      "Collaborated across design, development, and QA teams"
    ]
  },
  {
    company: "MittArv Technology Pvt. Ltd.",
    location: "Hyderabad",
    role: "Full Stack Developer Intern",
    dates: "Oct 2023 – Mar 2024",
    project: {
      name: "MittArv",
      tech: ["React.js", "Node.js", "MySQL", "Flutter"]
    },
    responsibilities: [
      "Developed responsive web interfaces in React.js",
      "Integrated APIs and optimized frontend performance",
      "Debugged and enhanced cross-platform Flutter app"
    ]
  }
];

const skills = [
  { name: "React", imageSrc: "/skill_logo/React-icon.png", percentage: 90, color: "blue" },
  { name: "Next.js", imageSrc: "/skill_logo/next-js.svg", percentage: 85, color: "black" },
  { name: "Node.js", imageSrc: "/skill_logo/Node.js_logo.png", percentage: 88, color: "green" },
  { name: "TypeScript", imageSrc: "/skill_logo/typescript.png", percentage: 80, color: "blue" },
  { name: "Tailwind CSS", imageSrc: "/skill_logo/Tailwind_CSS_Logo.png", percentage: 92, color: "cyan" },
  { name: "MongoDB", imageSrc: "/skill_logo/MongoDB_Logo.png", percentage: 78, color: "green" },
  { name: "Flutter", imageSrc: "/skill_logo/flutter_logo.png", percentage: 75, color: "blue" },
  { name: "Firebase", imageSrc: "/skill_logo/firebase.png", percentage: 70, color: "orange" },
  { name: "Express.js", imageSrc: "/skill_logo/Expressjs.png", percentage: 80, color: "gray" },
  { name: "MySQL", imageSrc: "/skill_logo/mysql_logo.svg", percentage: 70, color: "blue" },
  { name: "NestJS", imageSrc: "/skill_logo/NestJS.svg", percentage: 75, color: "red" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
            <h1 className="text-xl font-medium text-gray-800">Prem Prakash Gupta</h1>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{userData.profile}</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <a onClick={() => handleScroll('about')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a onClick={() => handleScroll('experience')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Experience</a>
            <a onClick={() => handleScroll('projects')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Projects</a>
            <a onClick={() => handleScroll('skills')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Skills</a>
            <a onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
          </nav>

          <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white">
            <a download href="./resume/resume_prem_prakash.pdf">Download CV</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#f0f7ff] to-[#e6f0ff]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hello, I&apos;m <span className="text-blue-600">Prem</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              {userData.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                onClick={() => handleScroll('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => handleScroll('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="mt-8 flex gap-4">
              {userData.linkedIn && (
                <a
                  href={userData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <Linkedin className="text-blue-700" size={24} />
                </a>
              )}

              {userData.github && (
                <a
                  href={userData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <Github className="text-gray-800" size={24} />
                </a>
              )}

              {userData.instagram && (
                <a
                  href={userData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <Instagram className="text-pink-600" size={24} />
                </a>
              )}

              {userData.email && (
                <a
                  href={`mailto:${userData.email}`}
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <Mail className="text-red-600" size={24} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-md opacity-30"></div>
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white">
                <AvatarImage src={profileImage} className="object-cover" />
                <AvatarFallback className="bg-gray-200">PP</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-16" text="Professional Journey" />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-indigo-200"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 pl-10`}>
                  <div className={`relative p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gradient-to-l from-blue-50 to-indigo-50'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location} | {exp.dates}</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs px-3 py-1 rounded-full">
                        Project: {exp.project.name}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium text-gray-700">Responsibilities:</h4>
                      <ul className="mt-2 space-y-1">
                        {exp.responsibilities.map((res, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                            <span className="text-gray-600">{res}</span>
                          </li>
                        ))}
                      </ul>

                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.project.tech.map((tech, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded-full ${techColorMap[tech] || 'bg-gray-200 text-gray-800'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Timeline marker */}
                    <div className={`absolute top-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full border-4 border-white ${index % 2 === 0 ? '-right-3' : '-left-3'}`}>
                    </div>
                  </div>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-b from-white to-[#f0f7ff]">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-16" text="Technical Expertise" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  {skill.imageSrc ? (
                    <Image
                      src={skill.imageSrc}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  )}
                </div>
                <span className="font-medium text-gray-800 text-center">{skill.name}</span>
                <span className={`text-sm font-semibold text-${skill.color}-600`}>{skill.percentage}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-b from-[#f0f7ff] to-[#e6f0ff]">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-4" text="My Projects" />
          <TypographyP className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            A collection of my work, from personal projects to client work.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{project.projectNameAndTechStack}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded-full ${techColorMap[tech] || 'bg-gray-200 text-gray-800'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2 py-1 rounded-full ${project.priority ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                    {project.priority ? 'Highlighted' : 'Personal'}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    View Project <MoveRight className="ml-1" size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-4" text="Get In Touch" />
          <TypographyP className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
          >Have a project in mind or want to discuss opportunities? Feel free to reach out!</TypographyP>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-800">{userData.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-5 h-5 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-gray-800">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-5 h-5 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-gray-800">Gurugram, Haryana, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-700 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href={userData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Linkedin className="text-blue-700" size={20} />
                  </a>

                  <a
                    href={userData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Github className="text-gray-800" size={20} />
                  </a>

                  <a
                    href={userData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Instagram className="text-pink-600" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Prem Prakash Gupta</h3>
              <p className="text-blue-200">Full Stack Developer</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-blue-200">© {new Date().getFullYear()} All Rights Reserved</p>
              <p className="text-blue-200 text-sm mt-1">Designed and built with ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
