import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code,
  Layout,
  Cpu,
  Database,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle,
  TrendingUp,
  BrainCircuit
} from './Icons'
import { skillCategories } from '../data/portfolioData'

const iconMap = {
  Code,
  Layout,
  Cpu,
  Database,
  Wrench,
  Sparkles
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...skillCategories.map((c) => c.category)]

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory)

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
            <span>NEURAL MATRIX // COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            TECHNICAL <span className="gradient-text-cyber">CAPABILITIES</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Comprehensive skill matrix across programming languages, machine learning, databases, and research operations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.35)] scale-105'
                    : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-purple-500/40'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, groupIdx) => {
              const IconComp = iconMap[group.icon] || Code

              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: groupIdx * 0.05 }}
                  className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-cyan-400/50 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-500/40 text-cyan-300 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {group.category}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-400">{group.description}</p>
                      </div>
                    </div>

                    {/* Skill Bars & Badges */}
                    <div className="space-y-4 my-4">
                      {group.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-200 font-medium">{skill.name}</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-500/20 border border-purple-500/30 text-purple-300">
                              {skill.badge}
                            </span>
                          </div>

                          {/* Futuristic Glowing Progress Bar */}
                          <div className="h-2 w-full bg-slate-900/80 rounded-full overflow-hidden p-0.5 border border-purple-900/40">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: sIdx * 0.1, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="pt-3 mt-2 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <TrendingUp className="w-3.5 h-3.5" /> High Proficiency
                    </span>
                    <span>{group.skills.length} Modules</span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
