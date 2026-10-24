import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  Mail,
  Linkedin,
  Compass,
  Cpu,
  Brain,
  Rocket,
  Shield,
  Award,
  Terminal,
  FileCheck,
  CheckCircle2,
  Calendar
} from './Icons'
import { personalData, academics, careerVision } from '../data/portfolioData'

export default function About() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSMISSION // IDENTITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            ABOUT <span className="gradient-text-cyber">THE DEVELOPER</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Synthesizing computational intelligence, data science rigor, and interdisciplinary engineering.
          </p>
        </div>

        {/* Main Content Grid: Holographic Identity Card + Bio/Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Holographic ID Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative glass-panel rounded-3xl p-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] group">
              {/* Corner Sci-Fi Bracket Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

              {/* Avatar Frame with Cyber Hologram Effect */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-cyan-900/30 to-purple-950/40 border border-purple-500/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
                <img
                  src={personalData.avatarPlaceholder}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                />
                {/* Holographic Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent bg-[length:100%_4px] pointer-events-none opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>

                {/* Profile Badge */}
                <div className="absolute bottom-3 left-3 right-3 glass-panel px-3 py-2 rounded-xl border border-cyan-400/40 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-xs font-mono font-medium text-cyan-200">ID: AT-VCE-2026</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider">3RD YEAR CSE</span>
                </div>
              </div>

              {/* Personal Quick Info Table */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-2 border-b border-purple-500/15">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Location
                  </span>
                  <span className="text-slate-200 font-medium">{personalData.location}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-purple-500/15">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> Institution
                  </span>
                  <span className="text-slate-200 font-medium text-right">Vaagdevi College</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-purple-500/15">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-pink-400" /> Major
                  </span>
                  <span className="text-cyan-300 font-medium">CSE (Data Science)</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" /> B.Tech CGPA
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">8.35 / 10.0</span>
                </div>
              </div>

              {/* Quick Connect Link */}
              <div className="mt-6 pt-4 border-t border-purple-500/20">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-purple-900/30 hover:bg-cyan-500/20 text-cyan-300 border border-purple-500/40 hover:border-cyan-400 transition-all text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Verify on LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Tabs & Bio Content (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col space-y-6"
          >
            {/* Interactive Tab Controls */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 glass-panel rounded-2xl border border-purple-500/20 w-fit">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                01 // Biography
              </button>
              <button
                onClick={() => setActiveTab('academics')}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'academics'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                02 // Academics
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'vision'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                03 // Career Vision & Research
              </button>
            </div>

            {/* Tab 1: Biography */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                    Architecting Intelligent Systems at the Intersection of Data and Society
                  </h3>
                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    <p>
                      Hello! I am <strong className="text-cyan-300 font-medium">Afifa Tazeen</strong>, a 3rd-year Computer Science & Engineering student specializing in <strong className="text-purple-300 font-medium">Data Science</strong> at Vaagdevi College of Engineering in Warangal, Telangana.
                    </p>
                    <p>
                      My technical curiosity thrives in the domain of <span className="text-slate-100 font-normal">Artificial Neural Networks, Speech Recognition, and Computer Vision</span>. I bridge rigorous machine learning foundations with pragmatic software architecture to solve urgent safety, agricultural, and resource-allocation problems.
                    </p>
                    <p>
                      Beyond coding, I possess deep curiosity in <strong className="text-cyan-300 font-medium">interdisciplinary research</strong>, including historical archaeology documentary data curation, aerospace safety engineering, and large-scale technical event leadership as the Secretary of the IEEE Student Branch and Head at SAC Esports.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mt-0.5">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Data Science & AI</div>
                        <div className="text-xs text-slate-400">Deep neural models, acoustic voice recognition, & computer vision.</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 mt-0.5">
                        <Rocket className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Aerospace & Safety Research</div>
                        <div className="text-xs text-slate-400">AERO GUARD SIH concept with NOMEX 3-A & Kevlar sensor suites.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Academics */}
            {activeTab === 'academics' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {academics.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-cyan-400/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 text-cyan-300">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base sm:text-lg font-display font-bold text-white">
                            {item.institution}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                            {item.highlight}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-purple-300 mt-0.5">{item.degree}</p>
                        <p className="text-xs text-slate-400 mt-1.5">{item.details}</p>
                        <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 mt-2">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between pt-3 md:pt-0 border-t md:border-t-0 border-purple-500/20">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Evaluation</div>
                      <div className="text-xl sm:text-2xl font-display font-bold text-cyan-300">{item.score}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 3: Career Vision & Research Interests */}
            {activeTab === 'vision' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Compass className="w-6 h-6 text-cyan-400 animate-spin-slow" />
                    <h3 className="text-xl font-display font-bold text-white">
                      Research & Interdisciplinary Trajectory
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {careerVision.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {careerVision.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 hover:border-cyan-400/40 transition-all"
                      >
                        <div className="text-sm font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span>{area.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">{area.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  )
}
