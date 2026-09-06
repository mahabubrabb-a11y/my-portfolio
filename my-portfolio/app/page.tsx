"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, ExternalLink, ArrowUpRight, X, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  // Typewriter effect states
  const words = ["Problem Solver", "Software Developer", "Full Stack Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("body"); // 'body' or 'preview'
  const [requestType, setRequestType] = useState("Full-time Role");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Hiring Inquiry – Full Stack Role",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetWord.substring(0, currentText.length + 1));
        if (currentText === targetWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(targetWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  // Handle Copy JSON
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Direct Resume PDF Download Handler
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // public/resume.pdf path
    link.download = "Mahabub_Hasan_Rabby_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Clean and single handleSubmit Function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          requestType: requestType,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg("✔ Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "Hiring Inquiry – Full Stack Role",
          message: "",
        });
        setTimeout(() => setIsModalOpen(false), 2000);
      } else {
        setStatusMsg("✖ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatusMsg("✖ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Tools/Technologies list
  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "ex" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ];

  // Sample Projects List
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce web app built with Next.js, Node.js, and MongoDB featuring payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/yourusername/project-1",
      live: "https://project-demo.com",
    },
    {
      title: "Portfolio Website",
      description: "Personal terminal-themed portfolio built with Next.js and Tailwind CSS with custom smooth styling.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/yourusername/project-2",
      live: "https://project-demo.com",
    },
    {
      title: "Task Management App",
      description: "Real-time task and project management dashboard with dynamic status tracking.",
      tags: ["React", "Express.js", "PostgreSQL"],
      github: "https://github.com/yourusername/project-3",
      live: "https://project-demo.com",
    },
  ];

  const jsonPreviewData = {
    method: "POST",
    endpoint: "/api/v1/contact/send-mail",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: {
      sender: {
        name: formData.name || "<your_name>",
        email: formData.email || "<your_email>",
      },
      request_type: requestType.toLowerCase().replace(" ", "_"),
      subject: formData.subject || "<subject>",
      message: formData.message || "<your_message>",
      timestamp: new Date().toISOString(),
      meta: {
        recipient: "mahabubhasanrabby@gmail.com",
        version: "v1",
      },
    },
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen font-sans selection:bg-[#ff5e00] selection:text-white scroll-smooth relative">
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite; 
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222222] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[#ff5e00] font-bold text-xl">&lt;/&gt;</span>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base leading-tight">
              Mahabub Hasan Rabby
            </span>
            <span className="text-[10px] text-[#ff5e00] tracking-widest font-mono">
              — THE LEARNER —
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wider text-gray-300 bg-[#121212]/80 px-6 py-2 rounded-full border border-[#222222]">
          <Link href="/" className="hover:text-[#ff5e00] transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-[#ff5e00] transition-colors">ABOUT</Link>
          <Link href="/skills" className="hover:text-[#ff5e00] transition-colors">SKILLS</Link>
          <Link href="/projects" className="hover:text-[#ff5e00] transition-colors">PROJECTS</Link>
          <Link href="/contact" className="hover:text-[#ff5e00] transition-colors">CONTACT</Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#ff5e00] hover:bg-[#ff7b2b] text-white font-semibold px-4 py-2 rounded-full transition-all text-xs tracking-wider flex items-center gap-1 shadow-lg shadow-[#ff5e00]/20 hover:shadow-[#ff5e00]/40"
          >
            HIRE ME &rarr;
          </button>
          <button
            onClick={handleResumeDownload}
            className="border border-[#ff5e00]/50 hover:border-[#ff5e00] text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all text-xs tracking-wider font-semibold bg-[#121212]"
          >
            RESUME
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
<section
  id="home"
  className="relative overflow-hidden pt-8 pb-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto"
>
  {/* 🟠 ORANGE AMBIENT GLOW EFFECTS */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ff5e00]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
  <div className="absolute top-1/2 -right-20 w-[450px] h-[450px] bg-[#ff5e00]/15 rounded-full blur-[150px] pointer-events-none -z-10" />

  <div className="flex-1 space-y-6 relative z-10">
    <p className="text-[#ff5e00] font-mono text-sm">
      ~/portfolio:~$ <span className="animate-pulse">_</span>
    </p>

    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
      <span className="text-[#ff5e00]">Mahabub Hasan</span> <br />
      Rabby
    </h1>

    <h2 className="text-2xl md:text-3xl font-bold text-[#ff5e00] font-mono min-h-[40px] flex items-center">
      ~/ {currentText}
      <span className="animate-pulse ml-1 text-white">|</span>
    </h2>

    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
      Building scalable, real-world applications with clean & efficient code.
      Specialized in modern JavaScript & TypeScript, frameworks and Software engineering.
    </p>
    <p className="text-xs text-gray-500 font-mono flex items-center gap-2">
      <span>📍 Dhaka, Bangladesh</span>
      <span>•</span>
      <span>Full Stack Developer</span>
      <span>•</span>
      <span>UAP.CSE.November 2026</span>
    </p>

    <div className="flex flex-wrap items-center gap-4 pt-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#ff5e00] hover:bg-[#ff7b2b] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all text-sm shadow-md hover:shadow-[0_0_15px_rgba(255,94,0,0.4)]"
      >
        Hire Me &rarr;
      </button>
      <button
        onClick={handleResumeDownload}
        className="border border-[#222222] bg-[#121212] hover:border-[#ff5e00] hover:text-[#ff5e00] hover:shadow-[0_0_15px_rgba(255,94,0,0.3)] text-white px-6 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2"
      >
        Resume <ArrowUpRight size={16} />
      </button>
      <div className="border border-green-500/30 bg-green-950/20 text-green-400 px-4 py-3 rounded-md text-xs font-mono flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
        AVAILABLE FOR WORK
      </div>
    </div>

    <div className="flex items-center gap-4 pt-4 text-gray-400">
      <a
        href="https://github.com/mahabubrabb-a11y?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] hover:shadow-[0_0_15px_rgba(255,94,0,0.5)] transition-all"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/mahabub-hasan-rabby-2424b225a/"
        target="_blank"
        rel="noreferrer"
        className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] hover:shadow-[0_0_15px_rgba(255,94,0,0.5)] transition-all"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="mahabubrabb@gmail.com"
        className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] hover:shadow-[0_0_15px_rgba(255,94,0,0.5)] transition-all"
      >
        <Mail size={20} />
      </a>
      <a
        href="01953655443"
        className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] hover:shadow-[0_0_15px_rgba(255,94,0,0.5)] transition-all"
      >
        <Phone size={20} />
      </a>
    </div>
  </div>

  {/* Code Terminal Window */}
  <div className="w-full md:w-[500px] bg-[#121212]/90 backdrop-blur-md border border-[#ff5e00]/20 rounded-xl p-5 shadow-[0_0_40px_rgba(255,94,0,0.15)] font-mono text-xs relative z-10">
    <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-4">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
      </div>
      <span className="text-gray-500">profile.json</span>
    </div>

    <div className="flex items-center gap-5 bg-[#0a0a0a] p-4 rounded-xl border border-[#222222] mb-5">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-[#1a1a1a] border border-[#333] overflow-hidden flex items-center justify-center shrink-0 shadow-lg">
        <img
          src="/profile.png"
          alt="Mahabub Hasan Rabby"
          className="w-full h-full object-cover object-top scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-white font-bold text-base md:text-lg leading-tight">
          Mahabub Hasan Rabby
        </h3>
        <p className="text-gray-400 text-xs font-mono">@mahabub_rabby</p>
        <span className="inline-block bg-[#ff5e00]/10 text-[#ff5e00] text-[11px] font-mono px-2 py-0.5 rounded border border-[#ff5e00]/30 mt-1">
          Full Stack Software Developer
        </span>
      </div>
    </div>

    <div className="space-y-2 text-gray-300">
      <p>
        <span className="text-orange-500">const</span>{" "}
        <span className="text-blue-400">developer</span> = &#123;
      </p>
      <p className="pl-4">
        <span className="text-green-400">&quot;name&quot;</span>:{" "}
        <span className="text-lime-300">&quot;Mahabub Hasan Rabby&quot;</span>,
      </p>
      <p className="pl-4">
        <span className="text-green-400">&quot;role&quot;</span>:{" "}
        <span className="text-lime-300">&quot;Full Stack Software Developer&quot;</span>,
      </p>
      <p className="pl-4">
        <span className="text-green-400">&quot;interest&quot;</span>:{" "}
        <span className="text-lime-300">&quot;MERN Stack & Software Engineer&quot;</span>,
      </p>
      <p className="pl-4">
        <span className="text-green-400">&quot;Degree&quot;</span>:{" "}
        <span className="text-lime-300">&quot;B.Sc in CSE&quot;</span>
      </p>
      <p className="pl-4">
        <span className="text-[#ff5e00]">&quot;Phone&quot;</span>:{" "}
        <span className="text-lime-300">&quot;01953655443&quot;</span>
      </p>
      <p className="pl-4">
        <span className="text-[#ff5e00]">&quot;status&quot;</span>:{" "}
        <span className="text-lime-300">&quot;open_to_work&quot;</span>
      </p>
      
      <p>&#125;</p>
    </div>

    <div className="mt-6 pt-4 border-t border-[#333333] flex flex-wrap gap-2">
      {[
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind",
      ].map((tech) => (
        <span
          key={tech}
          className="bg-[#1a110b] border border-[#ff5e00]/30 text-[#ff8c38] px-3 py-1 rounded-md text-[11px] font-mono shadow-[0_0_10px_rgba(255,94,0,0.1)] hover:border-[#ff5e00] hover:shadow-[0_0_12px_rgba(255,94,0,0.3)] transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-12 px-6 md:px-16 max-w-7xl mx-auto">
        <p className="text-[#ff5e00] font-mono text-center text-sm mb-2">
          ~/portfolio:~$ ./skills
        </p>
        <h2 className="text-4xl font-extrabold text-center text-white mb-2">
          Skills & <span className="text-[#ff5e00]">Technologies</span>
        </h2>
        <p className="text-gray-400 text-center text-sm max-w-lg mx-auto mb-12">
          A full map of my technical toolkit — from MERN stack development to backend architecture.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { title: "Languages", count: "JavaScript, TypeScript, C, C++, Python" },
            { title: "Frontend", count: "React.js, Next.js, HTML5, CSS3, Tailwind" },
            { title: "Backend", count: "Node.js, Next.js, Express.js, REST API" },
            { title: "Database & Tools", count: "MongoDB, MySQL, PostgreSQL, Git, Postman" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#222222] p-5 rounded-xl text-center hover:border-[#ff5e00]/50 transition-all"
            >
              <p className="text-[#ff5e00] font-bold text-lg">{stat.title}</p>
              <p className="text-gray-400 text-xs mt-1">{stat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 px-6 md:px-16 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <p className="text-[#ff5e00] font-mono text-center text-sm mb-2">
          ~/portfolio:~$ ./projects
        </p>
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Featured <span className="text-[#ff5e00]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:shadow-[0_0_20px_rgba(255,94,0,0.2)] rounded-xl p-6 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff5e00] transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ff5e00] transition-colors">
                      <FaGithub size={18} />
                    </a>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ff5e00] transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222222]">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono bg-[#1a1a1a] text-[#ff8c38] px-2 py-1 rounded border border-[#ff5e00]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS MARQUEE SECTION */}
      <section className="py-16 border-t border-b border-[#1a1a1a] bg-[#0c0c0c] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <p className="text-[#ff5e00] font-mono text-xs uppercase tracking-widest mb-1">
            TECH STACK
          </p>
          <h2 className="text-3xl font-extrabold text-white">Tools I Work With</h2>
        </div>

        <div className="relative w-full overflow-hidden py-4 flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-4">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:shadow-[0_0_12px_rgba(255,94,0,0.3)] px-5 py-2.5 rounded-xl text-xs font-medium text-gray-300 hover:text-white transition-all shrink-0 cursor-pointer shadow-md group"
              >
                <span className="text-sm">{tool.icon}</span>
                <span className="group-hover:text-[#ff5e00] transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#222222] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl hover:border-[#ff5e00]/40 transition-all">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff5e00]/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-[#ff5e00] font-mono text-xs tracking-widest uppercase mb-3">
            — START A PROJECT —
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Got a project in mind?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8">
            I’d love to help you build your next big idea. Let’s create something great together.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ff5e00] hover:bg-[#ff7b2b] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#ff5e00]/30 hover:shadow-[#ff5e00]/50"
            >
              <Mail size={16} /> Send Email
            </button>
            <a
              href="tel:+8801700000000"
              className="border border-[#333333] hover:border-[#ff5e00] hover:text-[#ff5e00] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 bg-[#121212]"
            >
              <Phone size={16} /> Touch Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="border-t border-[#222222] bg-[#080808] pt-16 pb-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#ff5e00] font-bold text-2xl">&lt;/&gt;</span>
              <span className="font-extrabold text-white text-lg">Mahabub Hasan Rabby</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Full Stack Software Developer crafting efficient code and digital experiences with modern web technologies.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/mahabubrabb-a11y?tab=repositories" target="_blank" rel="noreferrer" className="p-2 bg-[#121212] border border-[#222] rounded-lg text-gray-400 hover:text-[#ff5e00] hover:border-[#ff5e00] hover:shadow-[0_0_12px_rgba(255,94,0,0.5)] transition-all">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mahabub-hasan-rabby-2424b225a/" target="_blank" rel="noreferrer" className="p-2 bg-[#121212] border border-[#222] rounded-lg text-gray-400 hover:text-[#ff5e00] hover:border-[#ff5e00] hover:shadow-[0_0_12px_rgba(255,94,0,0.5)] transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="mahabubrabb@gmail.com" className="p-2 bg-[#121212] border border-[#222] rounded-lg text-gray-400 hover:text-[#ff5e00] hover:border-[#ff5e00] hover:shadow-[0_0_12px_rgba(255,94,0,0.5)] transition-all">
                <Mail size={16} />
              </a>
              <a href="tel: 01953655443" className="p-2 bg-[#121212] border border-[#222] rounded-lg text-gray-400 hover:text-[#ff5e00] hover:border-[#ff5e00] hover:shadow-[0_0_12px_rgba(255,94,0,0.5)] transition-all">
                <Phone size={16} />
              </a>
            </div> 
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-l-2 border-[#ff5e00] pl-2">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-[#ff5e00] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#ff5e00] transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-[#ff5e00] transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-[#ff5e00] transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#ff5e00] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-l-2 border-[#ff5e00] pl-2">Technologies</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>React.js / Next.js</li>
              <li>Node.js / Express.js</li>
              <li>TypeScript / JavaScript</li>
              <li>MongoDB / PostgreSQL</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-l-2 border-[#ff5e00] pl-2">Get In Touch</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Location: Dhaka, Bangladesh</li>
              <li>Email: mahabubrabb@gmail.com</li>
              <li>Phone: +880 1953655443</li>
              <li className="text-[#ff5e00] pt-2">Available for Freelance & Full-time</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-[#121212] border border-[#222222] rounded-xl p-4 font-mono text-xs mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="text-gray-500 ml-2">portfolio_status.sh</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300 pt-2">
            <div><span className="text-orange-400">developer =</span> &quot;Mahabub Hasan Rabby&quot;</div>
            <div><span className="text-orange-400">role =</span> &quot;Full Stack Developer&quot;</div>
            <div><span className="text-orange-400">location =</span> &quot;Dhaka, Bangladesh&quot;</div>
            <div><span className="text-orange-400">status =</span> &quot;Open for work&quot;</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 pt-4 border-t border-[#1a1a1a]">
          <p>© 2026 Mahabub Hasan Rabby • All rights reserved</p>
          <p>Designed with Terminal & Modern Tech Vibe</p>
        </div>
      </footer>

      {/* TERMINAL CONTACT API MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0e0e0e] border border-[#222222] rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col font-mono text-xs">
            
            <div className="bg-[#141414] border-b border-[#222222] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsModalOpen(false)}></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 bg-[#0a0a0a] px-3 py-1 rounded-md border border-[#222222] text-[11px]">
                <span className="text-amber-500 font-bold">POST</span>
                <span>/api/v1/contact/send-mail</span>
                <span className="bg-[#ff5e00]/20 text-[#ff5e00] text-[9px] px-1.5 py-0.5 rounded font-mono">HTTP/1.1</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#222222] max-h-[80vh] overflow-y-auto">
              
              <div className="p-5 space-y-4 bg-[#0a0a0a]">
                <div className="flex border-b border-[#222222] pb-2 text-[11px] font-bold tracking-wider gap-4">
                  <button
                    onClick={() => setActiveTab("body")}
                    className={`pb-1 transition-colors ${activeTab === "body" ? "text-[#ff5e00] border-b-2 border-[#ff5e00]" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    REQUEST BODY
                  </button>
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`pb-1 transition-colors ${activeTab === "preview" ? "text-[#ff5e00] border-b-2 border-[#ff5e00]" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    PREVIEW JSON
                  </button>
                </div>

                {activeTab === "body" ? (
                    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
  <div>
    <label className="text-[10px] text-gray-500 block mb-1 uppercase tracking-wider">request_type</label>
    <div className="grid grid-cols-2 gap-2">
      {["Full-time Role", "Project Work", "Collaboration", "Other"].map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => setRequestType(type)}
          className={`py-2 px-3 rounded text-[11px] text-left border transition-all ${
            requestType === type
              ? "border-[#ff5e00] bg-[#ff5e00]/10 text-[#ff5e00]"
              : "border-[#222222] bg-[#121212] text-gray-400 hover:border-gray-700"
          }`}
        >
          {requestType === type ? "> " : ""}{type}
        </button>
      ))}
    </div>
  </div>

  <div>
    <label className="text-[10px] text-gray-500 block mb-1 uppercase tracking-wider">sender.name</label>
    <input
      type="text"
      required
      placeholder='" Your full name "'
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="w-full bg-[#121212] border border-[#222222] focus:border-[#ff5e00] rounded px-3 py-2 text-white placeholder-gray-600 outline-none text-xs"
    />
  </div>

  <div>
    <label className="text-[10px] text-gray-500 block mb-1 uppercase tracking-wider">sender.email</label>
    <input
      type="email"
      required
      placeholder='" your@email.com "'
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full bg-[#121212] border border-[#222222] focus:border-[#ff5e00] rounded px-3 py-2 text-white placeholder-gray-600 outline-none text-xs"
    />
  </div>

  <div>
    <label className="text-[10px] text-gray-500 block mb-1 uppercase tracking-wider">subject</label>
    <input
      type="text"
      required
      value={formData.subject}
      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      className="w-full bg-[#121212] border border-[#222222] focus:border-[#ff5e00] rounded px-3 py-2 text-white outline-none text-xs"
    />
  </div>

  <div>
    <label className="text-[10px] text-gray-500 block mb-1 uppercase tracking-wider">message</label>
    <textarea
      rows={3}
      required
      placeholder='" Write your message here... "'
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      className="w-full bg-[#121212] border border-[#222222] focus:border-[#ff5e00] rounded px-3 py-2 text-white placeholder-gray-600 outline-none text-xs resize-none"
    />
  </div>

  {/* Status Message Display */}
  {statusMsg && (
    <p className={`text-xs font-mono text-center my-2 ${statusMsg.includes("✔") ? "text-green-500" : "text-red-500"}`}>
      {statusMsg}
    </p>
  )}

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-[#ff5e00] hover:bg-[#ff7b2b] text-white font-bold py-2.5 rounded transition-all flex items-center justify-center gap-2 tracking-wider shadow-lg shadow-[#ff5e00]/20 disabled:opacity-50"
  >
    {loading ? "SENDING..." : "SEND REQUEST →"}
  </button>
</form>
                ) : (
                  <div className="relative bg-[#121212] p-3 rounded border border-[#222222] text-gray-300 font-mono text-[11px] overflow-x-auto">
                    <button
                      onClick={() => handleCopy(JSON.stringify(jsonPreviewData, null, 2))}
                      className="absolute top-2 right-2 text-gray-500 hover:text-white p-1"
                    >
                      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                    <pre>{JSON.stringify(jsonPreviewData, null, 2)}</pre>
                  </div>
                )}
              </div>

              <div className="p-5 bg-[#0d0d0d] space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#222222] pb-2 text-[10px] text-gray-500 uppercase tracking-wider">
                    <span>LIVE RESPONSE</span>
                    <span className="flex items-center gap-1 text-emerald-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      awaiting
                    </span>
                  </div>

                  <div className="mt-3 bg-[#080808] border border-[#1f1f1f] rounded-lg p-3 text-[11px] font-mono text-gray-400 space-y-1 relative">
                    <button
                      onClick={() => handleCopy(JSON.stringify(jsonPreviewData, null, 2))}
                      className="absolute top-2 right-2 text-gray-500 hover:text-white flex items-center gap-1 text-[10px]"
                    >
                      {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />} Copy
                    </button>
                    <p className="text-gray-500 mb-2">// response_body.json</p>
                    <p>&#123;</p>
                    <p className="pl-3"><span className="text-emerald-400">&quot;method&quot;</span>: <span className="text-amber-400">&quot;POST&quot;</span>,</p>
                    <p className="pl-3"><span className="text-emerald-400">&quot;endpoint&quot;</span>: <span className="text-emerald-300">&quot;/api/v1/contact/send-mail&quot;</span>,</p>
                    <p className="pl-3"><span className="text-emerald-400">&quot;headers&quot;</span>: &#123; <span className="text-gray-400">&quot;Content-Type&quot;: &quot;application/json&quot;</span> &#125;,</p>
                    <p className="pl-3"><span className="text-emerald-400">&quot;body&quot;</span>: &#123;</p>
                    <p className="pl-6"><span className="text-emerald-400">&quot;sender&quot;</span>: &#123;</p>
                    <p className="pl-9"><span className="text-emerald-400">&quot;name&quot;</span>: <span className="text-amber-300">&quot;{formData.name || "<your_name>"}&quot;</span>,</p>
                    <p className="pl-9"><span className="text-emerald-400">&quot;email&quot;</span>: <span className="text-amber-300">&quot;{formData.email || "<your_email>"}&quot;</span></p>
                    <p className="pl-6">&#125;</p>
                    <p className="pl-3">&#125;</p>
                    <p>&#125;</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block">DIRECT CHANNELS</span>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <a href="mailto:mahabubhasanrabby@gmail.com" className="bg-[#121212] border border-[#222222] p-2.5 rounded-lg flex items-center gap-2 hover:border-[#ff5e00] transition-all">
                      <Mail size={14} className="text-[#ff5e00]" />
                      <div className="truncate">
                        <p className="text-gray-500 text-[9px]">Email</p>
                        <p className="text-gray-200 truncate">mahabubrabb@gmail.com</p>
                      </div>
                    </a>
                    <a href="https://github.com/mahabubrabb-a11y?tab=repositories" target="_blank" rel="noreferrer" className="bg-[#121212] border border-[#222222] p-2.5 rounded-lg flex items-center gap-2 hover:border-[#ff5e00] transition-all">
                      <FaGithub size={14} className="text-[#ff5e00]" />
                      <div>
                        <p className="text-gray-500 text-[9px]">GitHub</p>
                        <p className="text-gray-200">mahabubrabb-a11y</p>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mahabub-hasan-rabby-2424b225a/" target="_blank" rel="noreferrer" className="bg-[#121212] border border-[#222222] p-2.5 rounded-lg flex items-center gap-2 hover:border-[#ff5e00] transition-all">
                      <FaLinkedin size={14} className="text-[#ff5e00]" />
                      <div>
                        <p className="text-gray-500 text-[9px]">LinkedIn</p>
                        <p className="text-gray-200">Mahabub Hasan Rabby</p>
                      </div>
                    </a>
                    <a href="tel:+8801700000000" className="bg-[#121212] border border-[#222222] p-2.5 rounded-lg flex items-center gap-2 hover:border-[#ff5e00] transition-all">
                      <Phone size={14} className="text-[#ff5e00]" />
                      <div>
                        <p className="text-gray-500 text-[9px]">Phone</p>
                        <p className="text-gray-200">01953655443</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-gray-500 pt-2 border-t border-[#1a1a1a]">
                    <span className="text-emerald-400 flex items-center gap-1">● Open to Work</span>
                    <span>📍 Dhaka, Bangladesh</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] text-gray-600 pt-1">
                  <span>ESC to close</span>
                  <span className="bg-[#1f1f1f] text-gray-400 px-1.5 py-0.5 rounded">READY</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}