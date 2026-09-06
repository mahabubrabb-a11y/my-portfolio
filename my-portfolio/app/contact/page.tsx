"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success?: boolean;
    message?: string;
  }>({ loading: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "Message sent successfully! I will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="py-16 bg-[#080808] text-white font-mono px-4 sm:px-8 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      
      {/* Soft Orange Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#ff5e00]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] bg-[#ff5e00]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-xs text-[#ff5e00] tracking-widest uppercase mb-1 font-semibold">
          // navigate//contact
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Get In <span className="text-[#ff5e00] drop-shadow-[0_0_15px_rgba(255,94,0,0.4)]">Touch</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Have a project in mind, a question, or just want to connect? Send a message and I&apos;ll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Column: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#111111]/80 backdrop-blur-md border border-[#222222] hover:border-[#ff5e00]/40 rounded-2xl p-6 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#ff5e00]">&gt;</span> Contact_Info
            </h3>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[#ff5e00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Email</p>
                  <a href="mailto:mahabub.rabby@example.com" className="text-gray-200 hover:text-[#ff5e00] transition-colors font-medium">
                    mahabubrabb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[#ff5e00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Location</p>
                  <p className="text-gray-200 font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[#ff5e00]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Availability</p>
                  <p className="text-gray-200 font-medium">01953655443</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-[#222222]">
              <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-3">Connect via social</p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/mahabubrabb-a11y?tab=repositories" target="_blank" rel="noreferrer" className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-400 hover:text-white hover:border-[#ff5e00]/50 transition-all">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/mahabub-hasan-rabby-2424b225a/?skipRedirect=t" target="_blank" rel="noreferrer" className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-400 hover:text-white hover:border-[#ff5e00]/50 transition-all">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/mahabub.rabby.5" target="_blank" rel="noreferrer" className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-400 hover:text-white hover:border-[#ff5e00]/50 transition-all">
                  <FaFacebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="bg-[#111111]/90 backdrop-blur-md border border-[#222222] hover:border-[#ff5e00]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#ff5e00]">&gt;</span> Send_Message
            </h3>

            {/* Status Alert */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-xl text-xs flex items-center gap-3 border ${
                status.success 
                  ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" 
                  : "bg-rose-950/40 border-rose-500/40 text-rose-300"
              }`}>
                {status.success ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="full_name"
                    className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5e00] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1 font-medium">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5e00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1 font-medium">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5e00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1 font-medium">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I would like to discuss a project..."
                  className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5e00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-[#ff5e00] hover:bg-[#ff7b2b] text-white font-bold py-3 px-6 rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#ff5e00]/20 disabled:opacity-50"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}