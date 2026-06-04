import React, { useState } from 'react'
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Get Me A Chai',
    image: '/Front.Page.png',
    description: 'A modern crowdfunding platform for creators, built with Next.js and integrated with a payment gateway.',
    github: 'https://github.com/Rishi-Rana01/get-me-a-chai',
    live: null,
    skills: ['Next.js', 'NextAuth.js', 'Tailwind', 'MongoDB', 'Payment Gateway'],
    featured: true,
  },
  {
    id: 2,
    title: 'PrepFast',
    image: '/PrepFast.png',
    description: 'An interactive AI-powered mock interview platform built with Next.js App Router, TypeScript and Firebase.',
    github: null,
    live: 'https://mock-interview-platform-brown.vercel.app/',
    skills: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS', 'AI'],
    featured: true,
  },
  {
    id: 3,
    title: 'Fullstack Dashboard',
    image: '/fullstack-dashboard.png',
    description: 'A comprehensive interactive full-stack admin dashboard with data visualization, user management, and real-time analytics.',
    github: 'https://github.com/Rishi-Rana01/Fullstack-Dashboard',
    live: null,
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Recharts', 'MongoDB'],
    featured: true,
  },
  {
    id: 4,
    title: 'Quite App',
    image: '/quite-app.png',
    description: 'A full-featured productivity application designed to help users focus on goals and manage tasks effectively.',
    github: 'https://github.com/Rishi-Rana01/quite-app',
    live: null,
    skills: ['Next.js', 'TypeScript', 'shadcn/ui', 'Gemini AI', 'Mongoose', 'Next-Auth'],
  },
  {
    id: 5,
    title: 'AI Code Reviewer',
    image: '/Home.png',
    description: 'An AI-powered code review web app with a React frontend and Node/Express backend using Google Gemini.',
    github: 'https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer',
    live: null,
    skills: ['React', 'Node.js', 'Express', 'Gemini AI', 'Tailwind CSS'],
  },
  {
    id: 6,
    title: 'FinanceBoard',
    image: '/finance2.png',
    description: 'An advanced personal finance and budget tracking app to monitor expenses, visualize income streams, and manage savings.',
    github: 'https://github.com/Rishi-Rana01/Finance2',
    live: null,
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Chart.js'],
  },
  {
    id: 7,
    title: 'Weather App',
    image: '/Weather.png',
    description: 'A clean weather forecasting app using OpenWeatherMap API with real-time weather data and forecasts.',
    github: null,
    live: 'https://weather-app-fawn-iota.vercel.app/',
    skills: ['JavaScript', 'OpenWeatherMap API', 'CSS', 'HTML'],
  },
]

const ProjectCard = ({ image, title, description, github, live, skills, featured, index }) => (
  <article
    className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group border border-purple-500/10"
    data-aos="fade-up"
    data-aos-delay={100 + index * 80}
  >
    {/* Image — fixed height so all cards align */}
    <div className="relative overflow-hidden h-48 shrink-0">
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label={`${title} GitHub`}
          >
            <FiGithub className="w-4 h-4" /> Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-purple-500/50 hover:bg-purple-600 transition-all duration-300"
            aria-label={`${title} Live Demo`}
          >
            <FiExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
      </div>

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/80 text-white backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          Featured
        </div>
      )}
    </div>

    {/* Content — flex-col with space-between keeps bottom links pinned */}
    <div className="p-6 flex flex-col flex-1 justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-white leading-snug">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/8 text-purple-300 border border-purple-500/15"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-4 pt-2 border-t border-white/4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors duration-300"
            >
              <FiGithub className="w-3.5 h-3.5" /> Source Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
          {!github && !live && (
            <span className="text-xs text-zinc-700">Private Repository</span>
          )}
        </div>
      </div>
    </div>
  </article>
)

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 6)

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center text-white px-6 sm:px-12 lg:px-24 py-28 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[300px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-violet-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Header */}
        <header
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 text-xs text-purple-400 uppercase tracking-widest border border-purple-500/20">
            <FiTag className="w-3 h-3" />
            Portfolio
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills in full-stack development,
            AI integration, and production-ready deployment.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {visible.map((project, idx) => (
            <ProjectCard key={project.id} {...project} index={idx} />
          ))}
        </div>

        {/* Show more */}
        {projects.length > 6 && (
          <div className="text-center mt-10" data-aos="fade-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
