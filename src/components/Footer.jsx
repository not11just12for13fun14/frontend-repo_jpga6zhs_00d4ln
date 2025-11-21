export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">© {new Date().getFullYear()} Vimal Kumar Yadav. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#home" className="hover:text-teal-300">Home</a>
          <a href="#projects" className="hover:text-teal-300">Projects</a>
          <a href="#skills" className="hover:text-teal-300">Skills</a>
          <a href="#contact" className="hover:text-teal-300">Contact</a>
        </nav>
      </div>
    </footer>
  )
}