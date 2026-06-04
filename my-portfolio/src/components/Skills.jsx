import React from 'react'
import { FiLayout, FiServer, FiDatabase, FiCpu } from 'react-icons/fi'

const skillsData = [
  {
    id: 1,
    icon: <FiLayout className="w-7 h-7" />,
    image: '/Frontend.png',
    title: 'Frontend',
    color: 'from-violet-600/20 to-purple-600/10',
    borderColor: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'TypeScript'],
    description: 'Crafting beautiful, performant UIs with modern frameworks and responsive design principles.',
  },
  {
    id: 2,
    icon: <FiServer className="w-7 h-7" />,
    image: '/backend.png',
    title: 'Backend',
    color: 'from-purple-600/20 to-indigo-600/10',
    borderColor: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    tags: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Microservices'],
    description: 'Building scalable server-side solutions with clean architecture and optimal performance.',
  },
  {
    id: 3,
    icon: <FiDatabase className="w-7 h-7" />,
    image: '/database.png',
    title: 'Database',
    color: 'from-pink-600/20 to-purple-600/10',
    borderColor: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    tags: ['MongoDB', 'Mongoose', 'Firebase', 'Redis', 'Schema Design'],
    description: 'Designing efficient data models and managing high-performance NoSQL databases.',
  },
  {
    id: 4,
    icon: <FiCpu className="w-7 h-7" />,
    image: '/Ai.png',
    title: 'AI & ML',
    color: 'from-indigo-600/20 to-violet-600/10',
    borderColor: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    tags: ['Gemini AI', 'Pandas', 'NumPy', 'Gen AI', 'LLM Integration'],
    description: 'Integrating cutting-edge AI/ML capabilities to build intelligent, data-driven applications.',
  },
]

const SkillCard = ({ icon, title, color, borderColor, iconColor, tags, description }) => (
  <article
    className={`glass-card rounded-2xl p-6 border ${borderColor} flex flex-col gap-4 group`}
    data-aos="fade-up"
  >
    {/* Icon and title */}
    <div className="flex items-center gap-3">
      <div className={`p-3 rounded-xl bg-linear-to-br ${color} border ${borderColor}`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>

    {/* Description */}
    <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full text-xs font-medium bg-white/4 text-zinc-400 border border-white/6 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </article>
)

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center text-white px-6 sm:px-12 lg:px-24 py-28 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[150px]" />
        <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-violet-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Section header */}
        <header
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 text-xs text-purple-400 uppercase tracking-widest border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] mb-4">
            My Skills &amp;{' '}
            <span className="gradient-text">Technologies</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A modern full-stack developer with a strong focus on AI integration.
            I architect end-to-end solutions — from pixel-perfect frontends to
            intelligent, data-driven backends.
          </p>
        </header>

        {/* Skills grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>

        {/* Bottom tech list */}
        <div
          className="mt-20 glass h gap-4 rounded-2xl p-6 sm:p-8 border border-purple-500/15"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-6">
            Full technology stack
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js',
              'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Docker',
              'Git', 'REST APIs', 'Gemini AI', 'Vercel', 'Render',
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full text-sm text-zinc-400 border border-white/6 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
