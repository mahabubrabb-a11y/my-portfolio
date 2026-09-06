'use client';

import React from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Globe,
  Cpu,
  Terminal,
} from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      subtitle: "Core languages I write in",
      icon: Code2,
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      ],
    },
    {
      title: "Frontend Development",
      subtitle: "Building responsive, modern UIs",
      icon: Layout,
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Scalable APIs & server logic",
      icon: Server,
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ],
    },
    {
      title: "Database Management",
      subtitle: "Data storage & querying",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      title: "Tools & Technologies",
      subtitle: "Development & deployment tools",
      icon: Wrench,
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      ],
    },
    {
      title: "Others & Core Concepts",
      subtitle: "Additional Computer Science fundamentals",
      icon: Cpu,
      skills: [
        { name: "Data Structures", icon: "https://img.icons8.com/color/96/data-configuration.png" },
        { name: "Algorithms", icon: "https://img.icons8.com/color/96/flow-chart.png" },
        { name: "OOP", icon: "https://img.icons8.com/color/96/code.png" },
      ],
    },
  ];

  return (
    <div className="relative py-12 px-6 md:px-16 max-w-7xl mx-auto space-y-16 text-gray-300 min-h-screen">
      {/* Background Glowing Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff5e00]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* HEADER SECTION */}
      <div className="text-center space-y-3">
        <p className="text-[#ff5e00] font-mono text-xs tracking-widest uppercase">
          ~/portfolio:~$ skills --all
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white">
          Skills & <span className="text-[#ff5e00] drop-shadow-[0_0_25px_rgba(255,94,0,0.6)]">Technologies</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          A full map of my technical toolkit — from core programming languages to full-stack web development and computer science fundamentals.
        </p>
      </div>

      {/* STATS COUNTER BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#121212]/80 border border-[#222222] p-6 rounded-2xl shadow-xl font-mono text-center relative overflow-hidden">
        <div className="space-y-1">
          <span className="text-3xl font-bold text-white">25+</span>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Total Skills</p>
        </div>
        <div className="space-y-1">
          <span className="text-3xl font-bold text-[#ff5e00]">6</span>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Categories</p>
        </div>
        <div className="space-y-1">
          <span className="text-3xl font-bold text-white">2+</span>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</p>
        </div>
        <div className="space-y-1">
          <span className="text-3xl font-bold text-[#ff5e00]">6</span>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Languages</p>
        </div>
      </div>

      {/* SKILL CATEGORIES GRID */}
      <div className="space-y-12">
        {skillCategories.map((category, idx) => {
          const CategoryIcon = category.icon;
          return (
            <div key={idx} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-[#222222] pb-3">
                <div className="p-2 bg-[#ff5e00]/10 border border-[#ff5e00]/30 rounded-lg text-[#ff5e00]">
                  <CategoryIcon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-gray-500 font-mono">{category.subtitle}</p>
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative bg-[#121212] border border-[#222222] hover:border-[#ff5e00] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_0_25px_rgba(255,94,0,0.35)] overflow-hidden"
                  >
                    {/* Orange Glow Effect Behind Logo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff5e00]/0 via-[#ff5e00]/0 to-[#ff5e00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Glowing Aura on Hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#ff5e00]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Skill Logo */}
                    <div className="w-12 h-12 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain filter group-hover:drop-shadow-[0_0_12px_rgba(255,94,0,0.8)]"
                      />
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs font-mono font-medium text-gray-300 group-hover:text-white transition-colors relative z-10">
                      {skill.name}
                    </span>

                    {/* Heartbeat Pulse Line at Bottom */}
                    <div className="w-full h-0.5 bg-[#222222] group-hover:bg-[#ff5e00] transition-colors relative overflow-hidden rounded-full">
                      <div className="w-full h-full bg-[#ff5e00] opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#ff5e00]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}