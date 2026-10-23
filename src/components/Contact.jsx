import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  PhoneCall,
  Download
} from './Icons'
import { personalData } from '../data/portfolioData'

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null) // 'success' | null

  // Validate form fields
  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.'
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify the subject or purpose.'
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // Show simulated delivery buffer status and trigger default mail client
    setSubmissionStatus('success')

    // Construct pre-filled mailto URL for immediate seamless delivery
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    // Open mailto link so user's client dispatches directly
    setTimeout(() => {
      window.open(mailtoUrl, '_blank')
    }, 800)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSMISSION // INITIATE DIALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            CONNECT WITH <span className="gradient-text-cyber">AFIFA</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Open for research internships, engineering collaborations, technical symposiums, and innovative AI ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Hub (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Direct Communication Coordinates
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-6">
                Feel free to reach out directly via email, connect on LinkedIn, or dispatch a message through the contact console.
              </p>

              <div className="space-y-4 font-mono text-xs">
                {/* Email Item with Copy Trigger */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between group">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400 uppercase">Primary Email</div>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-cyan-300 font-medium hover:underline truncate block"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Geographic Location</div>
                    <div className="text-slate-200 font-medium">{personalData.location}</div>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Professional Network</div>
                      <div className="text-slate-200 font-medium">Afifa Tazeen</div>
                    </div>
                  </div>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Resume Trigger Banner */}
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-purple-900/40 via-cyan-950/40 to-purple-900/40 border border-cyan-400/30 hover:border-cyan-400 text-cyan-300 font-mono text-xs transition-all shadow-md group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Inspect Full Curriculum Vitae</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Reactive Contact Console (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/20">
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Interactive Dispatch Terminal</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">STATUS: READY</span>
              </div>

              {/* Status Banner */}
              {submissionStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-200">Dispatch Prepared & Ready!</div>
                    <div className="mt-1 text-slate-300">
                      Your message has been pre-formatted for direct transmission to <span className="text-cyan-300">{personalData.email}</span> via your mail client.
                    </div>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 flex items-center justify-between">
                      <span>Full Name</span>
                      {errors.name && <span className="text-pink-400 text-[10px]">{errors.name}</span>}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Alex Mercer"
                      className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border ${
                        errors.name ? 'border-pink-500/60' : 'border-purple-500/30'
                      } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 flex items-center justify-between">
                      <span>Email Address</span>
                      {errors.email && <span className="text-pink-400 text-[10px]">{errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@university.edu"
                      className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border ${
                        errors.email ? 'border-pink-500/60' : 'border-purple-500/30'
                      } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-300 flex items-center justify-between">
                    <span>Subject / Inquiring Entity</span>
                    {errors.subject && <span className="text-pink-400 text-[10px]">{errors.subject}</span>}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Research Internship Inquiry / Project Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border ${
                      errors.subject ? 'border-pink-500/60' : 'border-purple-500/30'
                    } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                  />
                </div>

                {/* Message Body */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-300 flex items-center justify-between">
                    <span>Message Body</span>
                    {errors.message && <span className="text-pink-400 text-[10px]">{errors.message}</span>}
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="State your proposition, project requirements, or invitation..."
                    className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border ${
                      errors.message ? 'border-pink-500/60' : 'border-purple-500/30'
                    } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Communication</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
