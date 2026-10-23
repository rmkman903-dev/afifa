import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Sparkles, Send, FolderGit2, Terminal, ChevronRight } from './Icons'
import Scene3D from './Scene3D'
import { personalData } from '../data/portfolioData'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  // Cycle through roles every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.roles.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* 3D Canvas Scene Background */}
      <Scene3D />

      {/* Cyber Grid & Atmospheric Cosmic Overlays */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#030014]/60 pointer-events-none"></div>

      {/* Foreground Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-none">
        
        {/* Professional Academic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-slate-300 text-xs font-mono tracking-wider mb-8 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-cyan-300 font-semibold">VAAGDEVI COLLEGE OF ENGINEERING</span>
          <span className="text-slate-500">&bull;</span>
          <span className="text-slate-300">B.TECH CSE (DATA SCIENCE)</span>
        </motion.div>

        {/* Main Greeting Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <span className="block text-xs sm:text-sm font-mono font-semibold tracking-[0.35em] text-cyan-400 uppercase mb-3">
            PORTFOLIO // COMPUTATIONAL INTELLIGENCE
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight leading-none">
            <span className="text-white drop-shadow-sm">HELLO, I'M </span>
            <span className="gradient-text-cyber drop-shadow-[0_0_40px_rgba(56,189,248,0.3)]">
              {personalData.name.toUpperCase()}
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Animated Role Capsule */}
        <div className="h-14 sm:h-16 flex items-center justify-center my-3 pointer-events-auto">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-2xl glass-panel border border-slate-700/60 shadow-lg">
            <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-semibold tracking-wider uppercase">
              EXPERTISE
            </span>
            <div className="min-w-[220px] sm:min-w-[280px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-white font-sans font-semibold text-base sm:text-lg md:text-xl tracking-tight block"
                >
                  {personalData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="w-1.5 h-4 bg-cyan-400 animate-pulse rounded-full inline-block"></span>
          </div>
        </div>

        {/* Concise Professional Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 pointer-events-auto"
        >
          {personalData.bio}
        </motion.p>

        {/* Quick Achievement Metric Badges - Sleek Titanium & Ice-Cyan Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full mb-10 pointer-events-auto"
        >
          <div className="glass-card p-4 rounded-2xl border border-slate-700/60 hover:border-cyan-400/40 text-center transition-all">
            <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">8.35</div>
            <div className="text-[11px] font-mono text-cyan-400/90 font-medium uppercase mt-1">B.Tech CGPA</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-slate-700/60 hover:border-cyan-400/40 text-center transition-all">
            <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">SIH '24 & '26</div>
            <div className="text-[11px] font-mono text-sky-400 font-medium uppercase mt-1">National Hackathons</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-slate-700/60 hover:border-cyan-400/40 text-center transition-all">
            <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">1st Prize</div>
            <div className="text-[11px] font-mono text-purple-400 font-medium uppercase mt-1">Thought Spire 2.0</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-slate-700/60 hover:border-cyan-400/40 text-center transition-all">
            <div className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">Secretary</div>
            <div className="text-[11px] font-mono text-emerald-400 font-medium uppercase mt-1">IEEE VCE Branch</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-xl font-sans font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] transition-all duration-300 active:scale-95"
          >
            <FolderGit2 className="w-4 h-4 text-sky-100 group-hover:rotate-12 transition-transform" />
            <span className="tracking-wide">Explore My Work</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-xl font-sans font-medium text-sm text-slate-200 glass-panel hover:bg-slate-800/40 border border-slate-700 hover:border-cyan-400/60 hover:text-white transition-all duration-300 active:scale-95 shadow-md"
          >
            <Send className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span className="tracking-wide">Initiate Contact</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-auto"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
          SCROLL TO EXPLORE
        </span>
        <a
          href="#about"
          className="w-8 h-12 rounded-full border border-cyan-400/40 flex items-start justify-center p-1.5 hover:border-cyan-300 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]"
          />
        </a>
      </motion.div>
    </section>
  )
}
