import React from 'react'
import { ArrowUp, Heart, Terminal, Sparkles, Linkedin, Mail, MapPin } from './Icons'
import { personalData } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#02000e] text-slate-400 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/15">
          {/* Brand & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-display font-bold text-xs shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              {personalData.initials}
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white tracking-wide">
                {personalData.name}
              </div>
              <div className="text-[10px] font-mono text-cyan-400">
                NEXT DIMENSION // QUANTUM PORTFOLIO
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#academics" className="hover:text-cyan-300 transition-colors">Academics</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-2 rounded-xl glass-panel border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 text-xs font-mono transition-all group"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-2">
            <span>Built with React, Three.js, R3F & Tailwind CSS</span>
          </div>
          <div className="text-cyan-400/80">
            {personalData.location}
          </div>
        </div>
      </div>
    </footer>
  )
}
