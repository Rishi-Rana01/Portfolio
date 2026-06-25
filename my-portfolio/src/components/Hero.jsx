import React from 'react'
import Navbar from './Navbar'
import LiquidEther from './LiquidEther'
import { FiGithub, FiLinkedin, FiInstagram, FiDownload, FiArrowDown } from 'react-icons/fi'

const socialLinks = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    href: 'https://github.com/Rishi-Rana01',
    label: 'GitHub',
    color: 'hover:text-white hover:border-white/40',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-blue-400 hover:border-blue-400/40',
  },
  {
    icon: <FiInstagram className="w-5 h-5" />,
    href: 'https://www.instagram.com/the.rishi_rana?igsh=Z3k2ZmZjbTIxYXp1',
    label: 'Instagram',
    color: 'hover:text-pink-400 hover:border-pink-400/40',
  },
]

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-grid overflow-hidden">

      {/* Interactive LiquidEther background */}
      <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Decorative rotated card */}
      <div className="hidden lg:block absolute right-8 top-32 z-0 w-80 h-[480px] rounded-3xl bg-linear-to-br from-purple-700/30 via-violet-500/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/20 transform rotate-6 animate-float" />

      <Navbar />

      {/* Main hero content */}
      <main
        id="home"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between flex-1 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-24 pt-36 pb-24 gap-16 lg:gap-20"
      >
        {/* Left — Text content */}
        <section
          className="flex-1 max-w-2xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-purple-300 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4 font-[Space_Grotesk]">
            Hi, I'm{' '}
            <span className="gradient-text">Rishi Rana</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-400 mb-6">
            Full Stack Developer &amp;{' '}
            <span className="text-purple-400">AI Enthusiast</span>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            I build intelligent, responsive web applications using the MERN stack,
            Next.js &amp; Python — focused on clean UIs, scalable APIs, and
            data-driven features powered by AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#projects" className="btn-primary">
              View Projects
              <FiArrowDown className="w-4 h-4" />
            </a>
            <a href="/Rishi-Rana.pdf" download className="btn-outline">
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <span className="text-xs text-zinc-600 uppercase tracking-widest mr-1">Connect</span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`p-2.5 rounded-full glass border border-white/8 text-zinc-400 transition-all duration-300 shrink-0 ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </section>

        {/* Right — Image */}
        <figure
          className="flex-1 flex justify-center lg:justify-end relative"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-purple-500/20 animate-spin-slow" />
            <div className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-purple-400/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
          </div>

          {/* Profile image */}
          <div className="relative z-10 rounded-3xl overflow-hidden w-56 sm:w-80 lg:w-[380px] shadow-2xl shadow-purple-900/40 border border-purple-500/20 animate-float">
            <img
              src="/img.png"
              alt="Rishi Rana — Full Stack Developer"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-purple-900/40 via-transparent to-transparent" />
          </div>

          {/* Floating badge: exp */}
          <div className="absolute -bottom-4 -left-4 sm:left-4 glass rounded-2xl px-4 py-3 border border-purple-500/20 shadow-lg">
            <p className="text-2xl font-bold text-white">2+</p>
            <p className="text-xs text-zinc-400">Years Experience</p>
          </div>

          {/* Floating badge: projects */}
          <div className="absolute -top-2 -right-2 sm:right-4 glass rounded-2xl px-4 py-3 border border-purple-500/20 shadow-lg">
            <p className="text-2xl font-bold gradient-text">7+</p>
            <p className="text-xs text-zinc-400">Projects Built</p>
          </div>
        </figure>
      </main>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-zinc-600 hover:text-purple-400 transition-colors duration-300 group"
          aria-label="Scroll to about"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent group-hover:from-purple-400 transition-colors duration-300" />
        </a>
      </div>
    </div>
  )
}

export default Hero
