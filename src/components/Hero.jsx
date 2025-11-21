import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowDown, LinkIcon } from 'lucide-react'

const socials = [
  { href: 'https://github.com/yamiSukehiro2907', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/vimalyadavkr', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:vimalyadavkr001@gmail.com', icon: Mail, label: 'Email' },
  { href: 'tel:+918604732097', icon: Phone, label: 'Phone' },
]

export default function Hero({ theme }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-teal-300 text-sm tracking-widest uppercase">Backend Engineer • Full Stack Developer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Vimal Kumar Yadav
          </h1>
          <p className="text-slate-300 max-w-xl">
            Backend engineer specializing in Spring Boot and MERN stack. Building scalable, production-ready systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-white transition-colors shadow">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:border-teal-400/40 text-white transition-colors">
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-3 pt-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-teal-400/40 text-white transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
        <div className="hidden md:block"></div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-teal-300 hover:text-white transition-colors">
        <ArrowDown className="w-5 h-5 animate-bounce" />
        <span className="text-sm">Scroll</span>
      </a>
    </section>
  )
}