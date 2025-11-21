import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.08),transparent_60%)]" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative">
        <Hero theme={theme} />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App