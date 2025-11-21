import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Bricks Learning Management System',
    period: 'Nov 2024 – Apr 2025',
    tech: ['Spring Boot', 'Java', 'Maven', 'MySQL', 'React Native'],
    points: [
      'Production-ready LMS for schools and coaching centers',
      'RESTful APIs with Spring Security and JWT authentication',
      'Normalized MySQL database schema',
    ],
    links: [
      { label: 'GitHub', href: '#', icon: Github },
      { label: 'Live Demo', href: '#', icon: ExternalLink },
    ],
  },
  {
    title: 'Studi.io - Real-Time Collaborative Platform',
    period: 'Aug 2025 – Oct 2025',
    tech: ['MERN', 'Socket.IO', 'Fabric.js', 'Redux Toolkit', 'Cloudinary'],
    points: [
      'Real-time chat and interactive whiteboard',
      'Deployed on Render, Netlify, MongoDB Atlas',
      'Solved CORS and httpOnly cookie authentication',
    ],
    links: [
      { label: 'Live Demo', href: '#', icon: ExternalLink },
      { label: 'GitHub', href: '#', icon: Github },
    ],
  },
  {
    title: 'devStreak - Open-Source Activity Tracker',
    period: 'May 2025 – Jun 2025',
    tech: ['Spring Boot', 'React', 'Tailwind CSS', 'PostgreSQL'],
    points: [
      'Plugin-based architecture for platform integrations',
      'Comprehensive developer documentation',
      'Open-source with community contributions',
    ],
    links: [
      { label: 'GitHub', href: '#', icon: Github },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-slate-800/40 overflow-hidden flex flex-col">
              <div className="h-36 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 group-hover:from-teal-500/30 group-hover:to-indigo-500/30 transition-colors"/>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-sm text-teal-300 mb-1">
                  <span>{p.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{p.tech.join(' • ')}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  {p.links.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-white transition-colors">
                      <Icon className="w-4 h-4" /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}