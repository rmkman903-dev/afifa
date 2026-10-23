import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  FolderGit2,
  Cpu,
  Layers,
  ChevronRight,
  Maximize2
} from './Icons'
import { projects } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeModalProject, setActiveModalProject] = useState(null)

  const categories = ['All', 'Artificial Intelligence', 'Computer Vision & Edge AI', 'Aerospace & Safety', 'Web Systems']

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARSENAL // INNOVATION ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            FEATURED <span className="gradient-text-cyber">PROJECTS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Engineered systems spanning real-time acoustic neural networks, computer vision for agriculture, aircraft emergency telemetry, and community food redistribution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.35)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-purple-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2 columns on medium/large screens with featured styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 hover:border-cyan-400/50 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Subtle top-corner gradient streak */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.accentColor} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                <div>
                  {/* Badges and Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-purple-300/90 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Specs</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for detailed specifications */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  )
}
