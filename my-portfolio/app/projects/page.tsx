"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Full Stack", "Team Project", "Frontend", "Backend"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-16 bg-[#080808] text-white font-mono px-4 sm:px-8 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      
      {/* Background Soft Orange Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff5e00]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#ff5e00]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-xs text-[#ff5e00] tracking-widest uppercase mb-1 font-semibold">
          // navigate//projects
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Featured <span className="text-[#ff5e00] drop-shadow-[0_0_15px_rgba(255,94,0,0.4)]">Projects</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          A showcase of my development journey — from web applications to core systems, built with clean and efficient code.
        </p>
      </div>

      {/* Top Stats Bar with Light Orange Borders & Hover Glow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12 relative z-10">
        {[
          { label: "Total Projects", value: projectsData.length },
          { label: "Live Projects", value: projectsData.filter(p => p.live && p.live !== "#").length },
          { label: "Team Projects", value: projectsData.filter(p => p.category === "Team Project").length },
          { label: "Full Stack", value: projectsData.filter(p => p.category === "Full Stack").length },
          { label: "Backend Focus", value: projectsData.filter(p => p.category === "Backend").length },
        ].map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-[#111111]/80 backdrop-blur-md border border-[#ff5e00]/20 hover:border-[#ff5e00]/60 rounded-xl p-4 text-center transition-all duration-300 shadow-lg hover:shadow-[#ff5e00]/10"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#ff5e00] mb-1">{stat.value}</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-xs transition-all duration-300 border ${
              activeFilter === cat
                ? "bg-[#ff5e00] text-white border-[#ff5e00] font-bold shadow-[0_0_15px_rgba(255,94,0,0.4)]"
                : "bg-[#111111] text-gray-400 border-[#222222] hover:border-[#ff5e00]/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 mb-8 font-mono">
        Showing <span className="text-[#ff5e00] font-bold">{filteredProjects.length}</span> projects
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111111]/90 border border-[#222222] hover:border-[#ff5e00]/60 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(255,94,0,0.15)] hover:-translate-y-1"
          >
            <div>
              {/* Image Banner with Orange Gradient Overlay */}
              <div className="relative w-full h-52 bg-[#1a1a1a] overflow-hidden border-b border-[#222222]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#000000]/80 backdrop-blur-md text-[#ff5e00] border border-[#ff5e00]/40 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff5e00] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mb-5 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section: Tags and Action Links */}
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300 text-[10px] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#222222] text-xs font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#ff5e00] hover:text-[#ff7b2b] transition-all group-hover:translate-x-0.5"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}