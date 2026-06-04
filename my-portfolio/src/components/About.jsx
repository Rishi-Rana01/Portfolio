import React from 'react'
import { FiCode, FiCpu, FiDatabase, FiZap } from 'react-icons/fi'

const stats = [
  { label: 'Projects Completed', value: '7+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Experience', value: '2+' },
  { label: 'Happy Clients', value: '5+' },
]

const highlights = [
  { icon: <FiCode className="w-4 h-4" />, text: 'MERN Stack Expert' },
  { icon: <FiCpu className="w-4 h-4" />, text: 'AI/ML Integration' },
  { icon: <FiDatabase className="w-4 h-4" />, text: 'Database Architecture' },
  { icon: <FiZap className="w-4 h-4" />, text: 'Fast, Scalable APIs' },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center text-white px-6 sm:px-12 lg:px-24 py-28 lg:py-40 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-700/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — Image stack */}
        <figure
          className="relative flex justify-center items-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* Main image */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-br from-purple-600 via-violet-600 to-pink-600 rounded-3xl blur-sm opacity-40" />
            <img
              src="/img.png"
              alt="Rishi Rana - Developer"
              className="relative w-64 sm:w-80 lg:w-[380px] rounded-3xl object-cover shadow-2xl border border-white/5"
            />
            <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Decorative ring */}
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full border-2 border-dashed border-purple-500/30 animate-spin-slow" />

          {/* Stats card */}
          <div className="absolute -bottom-6 -right-4 sm:right-0 glass rounded-2xl p-4 border border-purple-500/20 shadow-xl">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-lg font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-zinc-500 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary image */}
          <div className="absolute -top-8 -left-4 sm:left-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-linear-to-br from-violet-600 to-purple-600 rounded-2xl blur-sm opacity-60" />
              <img
                src="/img_about.png"
                alt="About Rishi"
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-lg border border-white/10"
              />
            </div>
          </div>
        </figure>

        {/* Right — Content */}
        <article
          className="text-center lg:text-left"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 text-xs text-purple-400 uppercase tracking-widest border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            About Me
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight font-[Space_Grotesk]">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>{' '}
            That Matter
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-5">
            I'm <span className="text-white font-semibold">Rishi Rana</span> — an AI-focused Full Stack Developer
            experienced with the MERN stack and Python-based machine learning tools. I build scalable,
            maintainable web applications that combine clean UI, robust APIs, and intelligent data features.
          </p>

          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-8">
            My projects span end-to-end development: API design, database modeling, frontend UX,
            and deploying production-ready solutions. I'm passionate about leveraging AI to solve
            real-world problems.
          </p>

          {/* Highlight pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-full text-sm text-zinc-300 border border-purple-500/15"
              >
                <span className="text-purple-400">{h.icon}</span>
                {h.text}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
