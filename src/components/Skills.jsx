const categories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Node.js', 'Express.js'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'React Router', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Databases',
    skills: ['MySQL (Advanced)', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'APIs & Web',
    skills: ['RESTful APIs', 'WebSocket', 'JWT Authentication', 'SOAP APIs', 'Socket.IO'],
  },
  {
    title: 'Tools',
    skills: ['Maven', 'Git', 'Postman', 'OAuth2', 'Redux Toolkit', 'Mongoose'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Render', 'Netlify', 'MongoDB Atlas', 'GCP', 'CORS Configuration'],
  },
  {
    title: 'Concepts',
    skills: ['OOP', 'DSA', 'DBMS', 'Operating Systems', 'SDLC'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 p-6 bg-slate-800/40">
              <h3 className="text-lg font-semibold text-teal-300 mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs bg-slate-700/60 text-slate-200 border border-white/10">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}