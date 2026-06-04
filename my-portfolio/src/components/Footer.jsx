import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from 'react-icons/fi'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: <FiGithub className="w-4 h-4" />, href: 'https://github.com/Rishi-Rana01', label: 'GitHub' },
  { icon: <FiLinkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiInstagram className="w-4 h-4" />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FiMail className="w-4 h-4" />, href: 'mailto:rishirana@example.com', label: 'Email' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 text-zinc-400">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-24 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 mb-10">

          {/* Brand */}
          <div className="sm:col-span-1">
            <a href="#home" className="text-2xl font-bold gradient-text font-[Space_Grotesk] block mb-4">
              Rishi.dev
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              AI-focused Full Stack Developer building intelligent, responsive web applications
              using MERN stack, Next.js &amp; Python.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-600 mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-purple-400 transition-colors duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-600 mb-4">Get in Touch</h4>
            <a
              href="mailto:rishirana@example.com"
              className="text-sm text-zinc-500 hover:text-purple-400 transition-colors duration-300 block mb-6"
            >
              rishirana@example.com
            </a>
            <div className="flex items-center gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl glass border border-white/6 text-zinc-500 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 shrink-0"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-700">
          <p>
            &copy; {year} Rishi Rana. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <FiHeart className="w-3 h-3 text-purple-500" />
            {' '}using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
