import React, { useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 overflow-x-hidden">
      {/* Interactive Cyber Cursor for Desktop */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* Full-Screen Futuristic 3D Hero */}
        <Hero />

        {/* Identity & Academics */}
        <About />

        {/* Neural Matrix / Technical Skills */}
        <Skills />

        {/* Innovation Archive / Projects */}
        <Projects />

        {/* Honors, Leadership & Accreditations */}
        <Achievements />

        {/* Transmission Terminal / Contact */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Cyber Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}
