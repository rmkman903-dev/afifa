import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Printer, Download, Mail, MapPin, Linkedin, GraduationCap, Award, Briefcase, Cpu } from './Icons'
import { personalData, academics, projects, achievements, skillCategories } from '../data/portfolioData'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030014]/85 backdrop-blur-xl"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#090720] text-slate-100 rounded-3xl border border-cyan-400/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,240,255,0.3)] z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-purple-500/25">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                VERIFIED RESUME MATRIX // AFIFA TAZEEN
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-purple-900/30 hover:bg-cyan-500/20 text-cyan-300 border border-purple-500/40 hover:border-cyan-400 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-purple-900/30 text-slate-300 hover:text-cyan-300 border border-purple-500/40 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
              <div>
                <h1 className="text-3xl font-display font-extrabold text-white">
                  {personalData.name}
                </h1>
                <p className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                  {personalData.title} &bull; Vaagdevi College of Engineering
                </p>
                <p className="text-xs text-slate-400 mt-2 max-w-xl">
                  {personalData.bio}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-slate-300 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalData.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-pink-400" />
                  <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    linkedin.com/in/afifa-tazeen
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Academic Background
              </h2>
              <div className="space-y-3">
                {academics.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-sm text-white">{item.institution}</div>
                      <div className="text-xs text-purple-300">{item.degree}</div>
                      <div className="text-[11px] text-slate-400">{item.details}</div>
                    </div>
                    <div className="text-right sm:flex-shrink-0">
                      <div className="text-xs font-bold font-mono text-cyan-300">{item.score}</div>
                      <div className="text-[10px] font-mono text-slate-400">{item.timeline}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Key Technical Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-xs text-white">{proj.title}</h3>
                      <span className="text-[10px] font-mono text-cyan-300">{proj.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">{proj.tagline}</p>
                    <div className="mt-2 text-[10px] font-mono text-slate-400">
                      Stack: {proj.technologies.slice(0, 4).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Awards */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Key Distinctions & Responsibilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  &bull; 1st Prize — Thought Spire 2.0 (Vaagdevi College)
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  &bull; Best Blueprint Design — Crafting the Cosmos (KITS)
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  &bull; Secretary — IEEE VCE Student Branch
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  &bull; Event & Operational Head — SAC Esports Club
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
