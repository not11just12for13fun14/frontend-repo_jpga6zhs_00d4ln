import { Mail, Phone, MapPin, Github, Linkedin, FileDown } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 p-6 bg-slate-800/40 space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea required rows="5" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="How can I help?" />
            </div>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-white transition-colors">Send Message</button>
          </form>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 p-6 bg-slate-800/40 space-y-3">
              <div className="flex items-center gap-3 text-slate-300"><Mail className="w-5 h-5 text-teal-300"/> vimalyadavkr001@gmail.com</div>
              <div className="flex items-center gap-3 text-slate-300"><Phone className="w-5 h-5 text-teal-300"/> +91 8604732097</div>
              <div className="flex items-center gap-3 text-slate-300"><MapPin className="w-5 h-5 text-teal-300"/> Bengaluru, Karnataka</div>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/yamiSukehiro2907" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-slate-200 hover:border-teal-400/40"><Github className="w-4 h-4"/> GitHub</a>
              <a href="https://www.linkedin.com/in/vimalyadavkr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-slate-200 hover:border-teal-400/40"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-700/60 text-slate-100 border border-white/10 hover:bg-slate-700"><FileDown className="w-4 h-4"/> Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}