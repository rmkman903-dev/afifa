import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Sparkles, Terminal } from './Icons'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030014]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel-glow bg-[#08071f]/95 rounded-3xl border border-cyan-400/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-purple-900/30 border border-purple-500/40 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header & Badges */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {project.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-cyan-400 mt-1">{project.subtitle}</p>
          </div>

          {/* Tagline / Abstract */}
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 mb-6">
            <p className="text-sm font-mono text-purple-200 leading-relaxed">
              "{project.tagline}"
            </p>
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> System Overview & Engineering Thesis
            </h4>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architecture Innovations */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Key Innovations & Technical Highlights
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Stack & Hardware Specification
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-500/20">
            <div className="text-xs font-mono text-slate-400">
              *Project architecture developed & tested by Afifa Tazeen
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              >
                Close View
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:brightness-110 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
