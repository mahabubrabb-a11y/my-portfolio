'use client';

import React from "react";
import Link from "next/link";

import { Mail, Phone, MapPin, Code, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 pb-8 text-gray-400 font-sans relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#ff5e00]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
        {/* 1. TOP FOOTER LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff5e00] flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(255,94,0,0.5)]">
                &lt;/&gt;
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-wide">
                  Mahabub <span className="text-[#ff5e00]">Hasan Rabby</span>
                </h3>
                <p className="text-[11px] font-mono text-[#ff5e00] uppercase tracking-wider">
                  — The Developer —
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed pt-1">
              Building scalable, real-world applications with clean & efficient code.
            </p>

            <div className="space-y-1 text-xs font-mono text-gray-500 pt-1">
              <p className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#ff5e00]" /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-1.5">
                <Code size={13} className="text-[#ff5e00]" /> UAP · CSE · 2026
              </p>
            </div>

            {/* Social Buttons with inline SVG (Build Error Free) */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/mahabubrabb-a11y?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] text-gray-300 transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mahabub-hasan-rabby-2424b225a/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] text-gray-300 transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mahabubrabb@gmail.com"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] text-gray-300 transition-all shadow-md"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+880"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#ff5e00] hover:text-[#ff5e00] text-gray-300 transition-all shadow-md"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#222222] pb-2">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Experience'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="hover:text-[#ff5e00] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#ff5e00]">•</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#222222] pb-2">
              CONNECT
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'GitHub', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Facebook', url: '#' },
                { name: 'Email', url: 'mahabubrabb@gmail.com' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="hover:text-[#ff5e00] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#ff5e00]">•</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Projects */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#222222] pb-2">
              PROJECTS
            </h4>
            <ul className="space-y-2 text-xs">
              {['E-Commerce App', 'Portfolio Website', 'Management System', 'API Service'].map((project) => (
                <li key={project}>
                  <Link
                    href="/projects"
                    className="hover:text-[#ff5e00] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#ff5e00]">•</span> {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. BOTTOM TERMINAL CARD */}
        <div className="w-full bg-[#111111]/90 border border-[#222222] rounded-2xl p-5 font-mono text-xs shadow-2xl relative">
          <div className="flex items-center gap-2 border-b border-[#222222] pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-gray-500 text-[11px] ml-2 flex items-center gap-1">
              <Terminal size={12} className="text-[#ff5e00]" /> portfolio_status.sh
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-gray-400">
              <span className="text-[#ff5e00]">mahabub@portfolio:~$</span> cat portfolio_status.sh
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-[11px] pt-1">
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
                <span className="text-[#ff5e00]">status</span> = <span className="text-green-400">"Open for Work"</span>
              </div>
              <div>
                <span className="text-[#ff5e00]">stack</span> = <span className="text-green-400">"MERN / Next.js"</span>
              </div>
              <div>
                <span className="text-[#ff5e00]">projects</span> = <span className="text-green-400">"10+"</span>
              </div>
            </div>

            <p className="text-gray-400 pt-1 flex items-center">
              <span className="text-[#ff5e00]">mahabub@portfolio:~$</span>
              <span className="w-2 h-4 bg-[#ff5e00] inline-block ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        {/* 3. COPYRIGHT FOOTER LINE */}
        <div className="pt-4 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between text-gray-500 text-[11px] font-mono gap-2">
          <p>© {new Date().getFullYear()} Mahabub Hasan Rabby. All rights reserved.</p>
          <a
            href="#top"
            className="hover:text-[#ff5e00] transition-colors flex items-center gap-1"
          >
            back_to_top() ↵
          </a>
        </div>
      </div>
    </footer>
  );
}