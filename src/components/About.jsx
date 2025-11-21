import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="text-slate-300 leading-relaxed text-lg">
          Backend engineer with deep expertise in building production-ready systems using Spring Boot and MERN stack. Proven ability to architect complex real-time applications with stateful logic, authentication middleware, and scalable cloud deployments. Known for rapid adaptability—learning new technologies and writing production-grade code that evolves into successful applications. Currently expanding expertise in cloud hosting optimization and infrastructure design.
        </motion.p>
      </div>
    </section>
  )
}