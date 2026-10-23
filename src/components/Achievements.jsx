import React from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Award,
  Flame,
  ShieldCheck,
  Gamepad2,
  Users,
  CheckCircle2,
  Medal,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Network
} from './Icons'
import { achievements, certifications } from '../data/portfolioData'

const iconMap = {
  Trophy,
  Award,
  Flame,
  ShieldCheck,
  Gamepad2,
  Users,
  Network,
  CheckCircle2,
  GraduationCap,
  Medal
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>HALL OF VALOR // DISTINCTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            HONORS & <span className="gradient-text-cyber">LEADERSHIP</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Competitive prizes, national hackathon entries, executive club leadership, and accredited technical credentials.
          </p>
        </div>

        {/* Bento Grid Layout for Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, index) => {
            const IconComp = iconMap[item.icon] || Trophy

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-cyan-400/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                    {item.organization} &bull; <span className="text-slate-400">{item.date}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Category: {item.category}</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Technical Certifications & Online Credentials Bar */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-purple-500/20 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Professional Certifications & Badges</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Technical Learning Credentials
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              *Accredited via Cisco, Simplilearn & Infosys Springboard
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, cIdx) => {
              const CertIcon = iconMap[cert.icon] || Medal
              return (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 hover:border-cyan-400/40 transition-all flex items-start space-x-3"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex-shrink-0 mt-0.5">
                    <CertIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">{cert.name}</h4>
                    <p className="text-[11px] font-mono text-cyan-400 mt-0.5">{cert.issuer}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{cert.field}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
