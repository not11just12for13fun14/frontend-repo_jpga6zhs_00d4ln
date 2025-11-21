import { GraduationCap } from 'lucide-react'

const items = [
  {
    title: 'Scaler School of Technology',
    date: 'Jun 2028',
    subtitle: 'B.Tech, Computer Science and Engineering',
    meta: 'GPA: 9.17/10 | Bangalore, Karnataka',
    details: 'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, MERN Stack, Computer Networks, OOP',
  },
  {
    title: 'MPVM Ganga Gurukulam',
    date: 'May 2022',
    subtitle: '12th Grade',
    meta: '85.40% | Prayagraj, Uttar Pradesh',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3"><GraduationCap className="w-7 h-7 text-teal-300"/>Education</h2>
        <ol className="relative border-s border-white/10">
          {items.map((item, i) => (
            <li key={i} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-teal-400 rounded-full mt-1.5 -start-1.5 border border-white/20"></div>
              <time className="mb-1 text-sm leading-none text-teal-300">{item.date}</time>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-slate-300">{item.subtitle}</p>
              {item.meta && <p className="text-slate-400 text-sm">{item.meta}</p>}
              {item.details && <p className="text-slate-400 text-sm mt-1">{item.details}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}