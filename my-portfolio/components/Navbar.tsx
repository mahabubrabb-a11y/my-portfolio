"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080808] border-b border-[#222222] px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-[#ff5e00] font-bold text-xl">&lt;/&gt;</span>
        <div className="flex flex-col">
          <span className="font-bold text-white text-base leading-tight">
            Mahabub Hasan Rabby
          </span>
          <span className="text-[10px] text-[#ff5e00] tracking-widest font-mono">
            — THE LEARNER —
          </span>
        </div>
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wider text-gray-300 bg-[#121212] px-6 py-2 rounded-full border border-[#222222]">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors hover:text-[#ff5e00] ${
                isActive ? "text-[#ff5e00] font-bold" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}