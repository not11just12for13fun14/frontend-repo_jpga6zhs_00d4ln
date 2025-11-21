import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 shadow-sm' : 'bg-transparent'} ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            Vimal<span className="text-teal-400">.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm hover:text-teal-400 transition-colors">
                {l.label}
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-md border border-white/10 hover:border-teal-400/40 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-md border border-white/10 hover:border-teal-400/40 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Open menu" className="p-2">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className={`md:hidden px-4 pb-4 space-y-2 ${theme === 'dark' ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur`}> 
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm hover:text-teal-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}