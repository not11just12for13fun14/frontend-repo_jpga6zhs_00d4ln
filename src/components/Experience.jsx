import { Briefcase } from 'lucide-react'

const roles = [
  {
    role: 'Backend Engineer',
    company: 'Bricks Education',
    period: 'Apr 2025 – Sept 2025',
    location: 'Remote',
    bullets: [
      'Developed backend systems using Spring Boot, Java, Maven',
      'Collaborated with React Native frontend team',
      'Followed Agile practices and OOP principles',
    ],
  },
  {
    role: 'Freelance Shopify Developer',
    company: 'Private Client',
    period: 'Feb 2025 – Mar 2025',
    location: 'Remote',
    bullets: [
      'Designed custom Shopify store with responsive layouts',
      'Coded in Liquid language',
      'Implemented SEO best practices',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3"><Briefcase className="w-7 h-7 text-teal-300"/>Experience</h2>
        <div className="grid gap-6">
          {roles.map((r, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-6 bg-slate-800/40">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">{r.role} | <span className="text-teal-300">{r.company}</span></h3>
                <p className="text-sm text-slate-400">{r.period} | {r.location}</p>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {r.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}