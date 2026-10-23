# NEXT DIMENSION — Afifa Tazeen Portfolio

A futuristic, production-grade 3D personal portfolio website engineered for **Afifa Tazeen** (B.Tech CSE Data Science, Vaagdevi College of Engineering).

---

## 🚀 Live Local URL
The development server is running and accessible at:
👉 **[http://localhost:5173/](http://localhost:5173/)**
*(Or on your local network: `http://192.168.1.8:5173/`)*

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite 5
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei` (procedural quantum metallic core, floating rings & particle constellations)
- **Styling**: Tailwind CSS, Glassmorphism, Cyber Gradients & Neon Glows
- **Animations**: Framer Motion (smooth scroll reveals, interactive tabs, modals)
- **Icons**: Production-grade SVG system (zero missing dependency errors)

---

## 📁 How to Customize Your Portfolio

All personal details, projects, skills, and links are kept in a single, well-documented file:
📂 **`src/data/portfolioData.js`**

| To Change | File Location & Key |
| :--- | :--- |
| **Name, Title, Bio, Email, Phone** | `src/data/portfolioData.js` -> `personalData` |
| **Profile Photo / Avatar** | `src/data/portfolioData.js` -> `personalData.avatarPlaceholder` |
| **LinkedIn & GitHub Links** | `src/data/portfolioData.js` -> `personalData.linkedin`, `personalData.github` |
| **Academics & CGPA** | `src/data/portfolioData.js` -> `academics` |
| **Skills & Proficiency Levels** | `src/data/portfolioData.js` -> `skillCategories` |
| **Projects (Titles, Tech, Descriptions)** | `src/data/portfolioData.js` -> `projects` |
| **Achievements & Certifications** | `src/data/portfolioData.js` -> `achievements`, `certifications` |
| **Career & Research Vision** | `src/data/portfolioData.js` -> `careerVision` |

---

## ⌨️ Command Scripts

- **Run Dev Server**:
  ```bash
  npm run dev
  ```
  *(or `npm.cmd run dev` on Windows PowerShell)*

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## ✨ Features Implemented
1. **Interactive 3D Hero Scene**: Procedural metallic quantum sculpture with real-time mouse parallax, dual gyroscope rings, and 300+ floating stardust particles. Includes an automatic CSS fallback.
2. **Dynamic Role Line**: Cycles automatically through *"Data Science Aspirant"*, *"AI & Machine Learning Innovator"*, *"Full-Stack Web Developer"*, and *"Aerospace & Tech Researcher"*.
3. **About Section**: Interactive 3-tab matrix (*Biography*, *Academics*, *Career Vision & Research*) with your exact CGPA (8.35), 12th (83%), 10th (9.0 GPA), and Vaagdevi College details.
4. **Skills Matrix**: Categorized grid with filter tabs (*Languages*, *Web*, *AI & ML*, *Databases*, *Tools*, *Creative & Research*) with glowing progress meters.
5. **Featured Projects**:
   - **Safe Tomorrow** (AI Emergency Voice Detection - ANN, Speech Recognition, NLP)
   - **Leftover Food Sharing Portal** (Team Leader - Java, MySQL, HTML, CSS)
   - **SmartFeed AI** (SIH 2026 - Dairy Spoilage AI Detection - Flutter, OpenCV, PyTorch, FastAPI)
   - **AERO GUARD** (SIH 2024 - Aircraft Safety & Emergency Protection Concept - NOMEX 3-A, Kevlar)
   - Includes **"Inspect Specs" modal** for deep-dive technical architectures.
6. **Distinctions & Accreditations**: Bento grid showcasing your 1st Prize at Thought Spire 2.0, Best Blueprint Design at KITS Warangal, SIH participation, IEEE Secretary & SAC Esports leadership, and Cisco/Simplilearn/Infosys certifications.
7. **Contact Terminal**: Real-time validated message dispatch with automatic pre-filled `mailto:` client triggering and 1-click email clipboard copy.
8. **Curriculum Vitae Modal**: Interactive modal with one-click **Print / Save PDF** support.
