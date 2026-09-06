'use client';

import React from "react";
import {
  MapPin,
  Download,
  Mail,
  Phone,
  Target,
  GraduationCap,
  Brain,
  MessageSquare,
  Users,
  Zap,
  Code2,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative py-10 px-6 md:px-16 max-w-7xl mx-auto space-y-20 text-gray-300">
      {/* 🟠 BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-[#ff5e00]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#ff5e00]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* 1. TOP ABOUT HERO SECTION */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Bio Content */}
        <div className="flex-1 space-y-6">
          <p className="text-[#ff5e00] font-mono text-xs tracking-widest uppercase">
            ~/portfolio:~$ about
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Mahabub <span className="text-[#ff5e00]">Hasan Rabby</span>
          </h1>

          <p className="text-[#ff5e00] font-mono text-sm">
            @mahabub_rabby &nbsp;|&nbsp; Full Stack Developer & Problem Solver
          </p>

          <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              I am a full stack developer and problem solver based in Dhaka, Bangladesh. I specialize in building scalable, real-world applications with a strong focus on clean code, performance, and maintainable system design.
            </p>
            <p>
              My journey began in Dhaka, and later I entered to pursue my B.Sc. in Computer Science & Engineering at University of Asia Pacific (UAP). During this time, I developed production-level applications and focused on modern software engineering practices.
            </p>
            <p>
              I am passionate about building impactful systems — from individual tools to global communities. I continuously seek opportunities to learn, grow, and take on new challenges.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="bg-[#121212] border border-[#222222] text-gray-300 px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5">
              <MapPin size={14} className="text-[#ff5e00]" /> Dhaka, Bangladesh
            </span>
            <span className="bg-green-950/30 border border-green-500/30 text-green-400 px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to Work
            </span>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <a href="#" className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a href="#" className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a href="#" className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] transition-all"><Mail size={18} /></a>
              <a href="#" className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] transition-all"><Phone size={18} /></a>
            </div>

            <button className="bg-[#ff5e00] hover:bg-[#ff7b2b] text-white px-5 py-2.5 rounded-lg font-semibold text-xs font-mono flex items-center gap-2 shadow-md hover:shadow-[0_0_15px_rgba(255,94,0,0.4)] transition-all">
              <Download size={16} /> Download CV
            </button>
          </div>
        </div>

        {/* Right Terminal Profile Card */}
        <div className="w-full md:w-[380px] bg-[#121212]/90 border border-[#222222] rounded-2xl p-5 font-mono text-xs shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-gray-500 text-[11px]">profile.json</span>
          </div>

          {/* 🟠 Orange Glow Effect & Framed Profile Image */}
          <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
            {/* Background Orange Glow */}
            <div className="absolute inset-0 bg-[#ff5e00]/25 rounded-2xl blur-xl pointer-events-none" />

            {/* Image Container with Orange Border */}
            <div className="relative w-full h-full rounded-2xl border-2 border-[#ff5e00] overflow-hidden bg-[#1a1a1a] shadow-[0_0_20px_rgba(255,94,0,0.3)]">
              <img
                src="/profile.png"
                alt="Mahabub Hasan Rabby"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />

              {/* Grid Lines Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 94, 0, 0.4) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 94, 0, 0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Online Status Indicator */}
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#121212] z-10 shadow-sm" />
            </div>
          </div>

          <div className="space-y-2.5 border-t border-[#222222] pt-4 text-gray-400">
            <div className="flex justify-between"><span className="text-gray-500">Full Name:</span> <span className="text-white font-medium">Mahabub Hasan Rabby</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Username:</span> <span className="text-white">mahabub_rabby</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Nationality:</span> <span className="text-white">Bangladeshi</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Hometown:</span> <span className="text-white">Dhaka, Bangladesh</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Current City:</span> <span className="text-white">Dhaka, Bangladesh</span></div>
            <div className="flex justify-between"><span className="text-gray-500">University:</span> <span className="text-[#ff5e00]">UAP</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Status:</span> <span className="text-green-400">Open for Work</span></div>
          </div>
        </div>
      </div>

      {/* 2. CAREER OBJECTIVE CARD */}
      <div className="bg-[#121212] border border-[#222222] rounded-2xl p-6 flex items-start gap-5 shadow-lg">
        <div className="p-3 bg-[#ff5e00]/10 border border-[#ff5e00]/30 rounded-xl text-[#ff5e00] shrink-0">
          <Target size={24} />
        </div>
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-[#ff5e00] tracking-wider uppercase">
            CAREER OBJECTIVE
          </span>
          <p className="text-gray-300 text-sm leading-relaxed">
            Motivated Full Stack Developer and problem solver seeking a software development role to build scalable applications while applying strong problem-solving skills and clean coding practices.
          </p>
        </div>
      </div>

        {/* 3. ACADEMIC BACKGROUND */}
<div className="space-y-6">
  <div>
    <span className="text-xs font-mono text-[#ff5e00] tracking-wider uppercase">ACADEMIC BACKGROUND</span>
    <h2 className="text-2xl font-bold text-white flex items-center gap-2 mt-1">
      <GraduationCap className="text-[#ff5e00]" size={22} /> Education
    </h2>
  </div>

  <div className="relative border-l-2 border-[#222222] pl-6 md:pl-8 space-y-6 ml-2">
    {/* 1. UAP BSC */}
    <div className="relative group">
      <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#ff5e00] border-4 border-[#080808] shadow-[0_0_12px_#ff5e00]" />
      
      <div className="bg-[#121212] border border-[#222222] group-hover:border-[#ff5e00]/50 p-5 rounded-2xl transition-all flex items-start gap-4">
        {/* 🏫 University Logo Container */}
        <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#333333] flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
          <img 
            src="/uap-logo.png" 
            alt="UAP Logo" 
            className="w-full h-full object-contain"
            onError={(e) => {
              // ইমেজ লোড না হলে ব্যাকআপ ফ্রেম দেখাবে
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold text-white">B.Sc. (Eng.) in Computer Science & Engineering</h3>
            <span className="bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-[#ff5e00] text-[10px] font-mono px-2.5 py-0.5 rounded-md uppercase tracking-wider">CURRENT</span>
          </div>

          <p className="text-[#ff5e00] text-xs font-medium">University of Asia Pacific (UAP)</p>

          <div className="flex flex-wrap items-center gap-3 text-gray-500 text-[11px] font-mono pt-1">
            <span>📍 Dhaka, Bangladesh</span>
            <span>🗓️ Nov 2022 - Nov 2026 (Expected)</span>
            <span className="bg-green-950/30 border border-green-500/30 text-green-400 px-2 py-0.5 rounded text-[10px]">Running</span>
          </div>
        </div>
      </div>
    </div>

    {/* 2. HSC */}
    <div className="relative group">
      <div className="absolute -left-[31px] md:-left-[39px] top-6 w-3 h-3 rounded-full bg-[#333333] border-4 border-[#080808] group-hover:bg-[#ff5e00] transition-colors" />
      
      <div className="bg-[#121212] border border-[#222222] p-5 rounded-2xl flex items-start gap-4">
        {/* 🎓 College Icon or Logo Container */}
        <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#222222] flex items-center justify-center text-gray-400 shrink-0">
          <GraduationCap size={22} />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold text-gray-200">Higher Secondary Certificate (H.S.C)</h3>
          </div>

          <p className="text-[#ff5e00] text-xs font-medium">Monipur High School and College</p>

          <div className="flex flex-wrap items-center gap-3 text-gray-500 text-[11px] font-mono pt-1">
            <span>📍 Dhaka, Bangladesh</span>
            <span>🗓️ July 2018 - January 2020</span>
            <span className="bg-[#1a1a1a] border border-[#333] text-gray-400 px-2 py-0.5 rounded text-[10px]">Passed 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* 4. SOFT SKILLS & INTERESTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono text-[#ff5e00] tracking-wider uppercase">PERSONAL SKILLS</span>
            <h3 className="text-xl font-bold text-white mt-1">Soft Skills</h3>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Problem Solving", icon: Brain },
              { name: "Communication", icon: MessageSquare },
              { name: "Team Work", icon: Users },
              { name: "Adaptability", icon: Zap },
              { name: "Clean Code", icon: Code2 },
              { name: "System Design", icon: Sparkles },
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-[#121212] border border-[#222222] hover:border-[#ff5e00]/40 p-3.5 rounded-xl flex flex-col items-center text-center gap-2 transition-all">
                  <div className="text-[#ff5e00]"><Icon size={18} /></div>
                  <span className="text-[11px] text-gray-300 font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono text-[#ff5e00] tracking-wider uppercase">WHAT I LOVE</span>
            <h3 className="text-xl font-bold text-white mt-1">Interests</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Competitive Programming", "Open Source", "AI & Machine Learning",
              "Web Systems", "Software Architecture", "DevOps"
            ].map((interest, index) => (
              <span key={index} className="bg-[#121212] border border-[#222222] text-gray-300 px-3 py-1.5 rounded-lg text-xs font-mono hover:border-[#ff5e00]/40 transition-all">
                # {interest}
              </span>
            ))}
          </div>

          <div className="bg-[#121212] border border-[#222222] rounded-xl p-4 font-mono text-xs space-y-1.5 text-gray-400 mt-2">
            <p className="text-gray-500">// personal_status.json</p>
            <p><span className="text-[#ff5e00]">"currentGoal"</span>: <span className="text-green-400">"Full Stack Developer"</span>,</p>
            <p><span className="text-[#ff5e00]">"location"</span>: <span className="text-green-400">"Dhaka, Bangladesh"</span>,</p>
            <p><span className="text-[#ff5e00]">"status"</span>: <span className="text-green-400">"Open for Opportunities"</span></p>
          </div>
        </div>
      </div>

      {/* 5. WORKSHOPS & SEMINARS */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-mono text-[#ff5e00] tracking-wider uppercase">CONTINUOUS LEARNING</span>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <BookOpen className="text-[#ff5e00]" size={20} /> Workshops & Seminars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#121212] border border-[#222222] p-4 rounded-xl flex items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Seminar on Cybersecurity in Software Engineering</h4>
              <p className="text-xs text-gray-500 font-mono mt-1">Organized at UAP, CSE</p>
            </div>
            <span className="bg-blue-950/30 border border-blue-500/30 text-blue-400 text-[10px] font-mono px-2 py-0.5 rounded shrink-0">Attendee</span>
          </div>

          <div className="bg-[#121212] border border-[#222222] p-4 rounded-xl flex items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Web Development Bootcamp</h4>
              <p className="text-xs text-gray-500 font-mono mt-1">Organized at UAP, CSE — Full Stack Focus</p>
            </div>
            <span className="bg-orange-950/30 border border-orange-500/30 text-orange-400 text-[10px] font-mono px-2 py-0.5 rounded shrink-0">Bootcamp</span>
          </div>
        </div>
      </div>

      {/* 6. ACADEMIC REFERENCES */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-mono text-[#ff5e00] tracking-wider uppercase">REFERENCES</span>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Award className="text-[#ff5e00]" size={20} /> Academic References
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#121212] border border-[#222222] p-5 rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-[#ff5e00] flex items-center justify-center font-bold text-xs shrink-0">
              UAP
            </div>
            <div className="space-y-1 text-xs">
              <h4 className="text-sm font-bold text-white">Prof. Dr. Aloke Kumar Saha</h4>
              <p className="text-[#ff5e00]">Professor</p>
              <p className="text-gray-400">Department of CSE, UAP</p>
              <p className="text-gray-500 font-mono text-[11px] pt-1">✉️ aloke@uap-bd.edu</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-[#222222] p-5 rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-[#ff5e00] flex items-center justify-center font-bold text-xs shrink-0">
              UAP
            </div>
            <div className="space-y-1 text-xs">
              <h4 className="text-sm font-bold text-white">Md Akhtaruzzaman Adnan</h4>
              <p className="text-[#ff5e00]">Assistant Professor</p>
              <p className="text-gray-400">Department of CSE, UAP</p>
              <p className="text-gray-500 font-mono text-[11px] pt-1">✉️ akhtaruzzaman.adnan@bracu.ac.bd</p>
            </div>
          </div>
        </div>
      </div>

           {/* 7. TERMINAL STATUS BAR */}
<div className="w-full bg-[#121212]/90 border border-[#222222] rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
  {/* Terminal Top Window Buttons */}
  <div className="flex items-center gap-2 border-b border-[#222222] pb-3 mb-4">
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
    </div>
    <span className="text-gray-500 text-[11px] ml-2">&gt;_ portfolio_status.sh</span>
  </div>

  {/* Terminal Command Output */}
  <div className="space-y-3 text-gray-300">
    <p className="text-gray-400">
      <span className="text-[#ff5e00]">mahabub@portfolio:~$</span> cat portfolio_status.sh
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-1">
      <div>
        <span className="text-[#ff5e00]">developer</span> = <span className="text-green-400">"Mahabub Hasan Rabby"</span>
      </div>
      <div>
        <span className="text-[#ff5e00]">role</span> = <span className="text-green-400">"Full Stack Developer"</span>
      </div>
      <div>
        <span className="text-[#ff5e00]">university</span> = <span className="text-green-400">"UAP · CSE"</span>
      </div>
      <div>
        <span className="text-[#ff5e00]">location</span> = <span className="text-green-400">"Dhaka, Bangladesh"</span>
      </div>
      <div>
        <span className="text-[#ff5e00]">status</span> = <span className="text-green-400">"Open to Work"</span>
      </div>
      <div>
        <span className="text-[#ff5e00]">stack</span> = <span className="text-green-400">"MERN / Next.js"</span>
      </div>
      <div>
        <span className="text-[#ff5e00]">projects</span> = <span className="text-green-400">"10+"</span>
      </div>
    </div>

    <p className="text-gray-400 pt-1">
      <span className="text-[#ff5e00]">mahabub@portfolio:~$</span> <span className="inline-block w-2 h-4 bg-[#ff5e00] align-middle animate-pulse ml-1"></span>
    </p>
  </div>
</div>


    </div>
  );
}