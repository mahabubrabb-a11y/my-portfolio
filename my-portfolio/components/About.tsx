import React from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, 
  FaGraduationCap, FaCertificate, FaUserTie, FaMapMarkerAlt, FaBriefcase 
} from 'react-icons/fa';
import { 
  BsPuzzleFill, BsChatDotsFill, BsPeopleFill, 
  BsLightningChargeFill, BsCodeSquare, BsDiagram3Fill 
} from 'react-icons/bs';

const AboutSection = () => {
  return (
    <div className="bg-[#0b0b0b] text-gray-300 min-h-screen py-10 px-4 md:px-12 font-sans space-y-12 max-w-7xl mx-auto">
      
      {/* 1. HERO / TOP PROFILE SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-orange-500 font-semibold tracking-wider uppercase text-xs">Background • Info</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            BORO <span className="text-orange-500">BORO</span>
          </h1>
          <p className="text-gray-400 font-medium text-sm">
            @boroboro • Junior Software Developer & MERN Stack Enthusiast
          </p>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              I am a junior-level software developer based in Dhaka, Bangladesh. I specialize in building scalable web applications using React, Node.js, Express, and MongoDB, with a strong focus on clean architecture and database performance.
            </p>
            <p>
              Currently pursuing my B.Sc. in Computer Science & Engineering. During my academic journey, I have worked on real-world projects, including full-stack e-commerce platforms, and actively practice data structures and algorithms.
            </p>
            <p>
              I am passionate about building efficient digital systems and constantly improving my problem-solving and software design capabilities.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="bg-neutral-900 border border-neutral-800 text-xs text-gray-300 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-orange-500" /> Dhaka, Bangladesh
            </span>
            <span className="bg-neutral-900 border border-neutral-800 text-xs text-emerald-400 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Open to Work
            </span>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex gap-2">
              <a href="#" className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-orange-500 text-gray-300 hover:text-white transition-colors"><FaGithub /></a>
              <a href="#" className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-orange-500 text-gray-300 hover:text-white transition-colors"><FaLinkedin /></a>
              <a href="#" className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-orange-500 text-gray-300 hover:text-white transition-colors"><FaEnvelope /></a>
            </div>
            <a href="#cv" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-all">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Right Terminal / ID Card */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          {/* Terminal Dots */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          {/* Avatar Placeholder */}
          <div className="w-28 h-28 mx-auto mb-6 bg-neutral-800 rounded-2xl border-2 border-neutral-700 overflow-hidden flex items-center justify-center">
             <FaUserTie className="text-5xl text-neutral-500" />
          </div>

          {/* Key Details List */}
          <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-neutral-800/60 pb-2">
              <span className="text-gray-500">Full Name</span>
              <span className="text-white font-medium">BORO BORO</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800/60 pb-2">
              <span className="text-gray-500">Nationality</span>
              <span className="text-white">Bangladeshi</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800/60 pb-2">
              <span className="text-gray-500">Location</span>
              <span className="text-white">Dhaka, Bangladesh</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800/60 pb-2">
              <span className="text-gray-500">Role</span>
              <span className="text-white">Junior Software Developer</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="text-emerald-400 font-medium">Open to Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAREER OBJECTIVE */}
      <section className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 flex gap-4 items-start">
        <div className="p-3 bg-neutral-800/80 rounded-xl text-orange-500 text-xl border border-neutral-700/50">
          <FaBriefcase />
        </div>
        <div>
          <span className="text-xs text-orange-500 font-semibold tracking-wider uppercase">Career Objective</span>
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            Motivated Junior Software Developer seeking a developer role to build scalable web applications while expanding problem-solving capabilities and engineering clean backend systems.
          </p>
        </div>
      </section>

      {/* 3. EDUCATION TIMELINE */}
      <section className="space-y-6">
        <div>
          <p className="text-xs text-orange-500 font-semibold tracking-wider uppercase">Academic Background</p>
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>

        <div className="relative border-l border-neutral-800 ml-4 space-y-6 pl-6">
          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-[#0b0b0b]"></span>
            <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-xl space-y-1">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-base font-semibold text-white">B.Sc. in Computer Science & Engineering</h3>
                <span className="text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-1 rounded-full font-medium">Running</span>
              </div>
              <p className="text-xs text-gray-400">University Program • Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-700 ring-4 ring-[#0b0b0b]"></span>
            <div className="bg-neutral-900/30 border border-neutral-800/60 p-4 rounded-xl space-y-1">
              <h3 className="text-sm font-medium text-white">Higher Secondary Certificate (H.S.C)</h3>
              <p className="text-xs text-gray-400">Science Stream • Passed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS & INTERESTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Soft Skills */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-orange-500 font-semibold tracking-wider uppercase">Capabilities</p>
            <h2 className="text-xl font-bold text-white">Soft Skills</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Problem Solving', icon: <BsPuzzleFill /> },
              { label: 'Communication', icon: <BsChatDotsFill /> },
              { label: 'Teamwork', icon: <BsPeopleFill /> },
              { label: 'Adaptability', icon: <BsLightningChargeFill /> },
              { label: 'Clean Code', icon: <BsCodeSquare /> },
              { label: 'System Logic', icon: <BsDiagram3Fill /> },
            ].map((skill, index) => (
              <div key={index} className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl flex flex-col items-center text-center gap-2 hover:border-neutral-700 transition-colors">
                <div className="text-orange-500 text-xl">{skill.icon}</div>
                <span className="text-xs font-medium text-gray-300">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-orange-500 font-semibold tracking-wider uppercase">What I Love</p>
            <h2 className="text-xl font-bold text-white">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Web Development', 'MERN Stack', 'REST APIs', 
              'Data Structures', 'Database Design', 'Open Source', 'UI/UX Design'
            ].map((interest, index) => (
              <span key={index} className="bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 text-xs text-gray-300 px-3 py-2 rounded-lg transition-colors cursor-default">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKSHOPS & SEMINARS */}
      <section className="space-y-4">
        <div>
          <p className="text-xs text-orange-500 font-semibold tracking-wider uppercase">Continuous Learning</p>
          <h2 className="text-xl font-bold text-white">Workshops & Seminars</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-white">Full Stack Web Development Bootcamp</h3>
              <p className="text-xs text-gray-400">Modern Web Architecture & Best Practices</p>
            </div>
            <span className="text-[10px] bg-neutral-800 text-orange-400 border border-neutral-700 px-2 py-1 rounded">Certified</span>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-white">Software Engineering & Clean Architecture</h3>
              <p className="text-xs text-gray-400">Interactive Seminar & Hands-on Session</p>
            </div>
            <span className="text-[10px] bg-neutral-800 text-gray-400 border border-neutral-700 px-2 py-1 rounded">Attended</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutSection;