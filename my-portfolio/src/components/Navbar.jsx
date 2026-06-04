import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NavbarLinks = [
  { id: 1, name: 'Home', link: '#home' },
  { id: 2, name: 'About', link: '#about' },
  { id: 3, name: 'Skills', link: '#skills' },
  { id: 4, name: 'Projects', link: '#projects' },
  { id: 5, name: 'Contact', link: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section detection
      const sections = NavbarLinks.map(l => l.link.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (link) => {
    setActiveLink(link.replace('#', ''))
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-purple-900/10'
          : 'bg-transparent'
      }`}
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-6 sm:px-12 lg:px-24 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          onClick={() => handleLinkClick('#home')}
        >
          <span className="text-2xl sm:text-3xl font-bold gradient-text font-[Space_Grotesk]">
            Rishi Rana
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden focus:outline-none z-50 p-2 rounded-lg glass transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen
            ? <FiX className="w-6 h-6 text-white" />
            : <FiMenu className="w-6 h-6 text-white" />
          }
        </button>

        {/* Desktop Nav */}
        <nav className="  hidden md:flex items-center gap-6">
          {NavbarLinks.map((link) => {
            const isActive = activeLink === link.link.replace('#', '')
            return (
              <a
                key={link.id}
                href={link.link}
                onClick={() => handleLinkClick(link.link)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive
                    ? 'text-purple-300 bg-purple-500/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400" />
                )}
              </a>
            )
          })}

          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="btn-primary ml-4 text-sm py-2 px-5"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-72 glass flex flex-col items-center justify-center gap-6 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            aria-label="Close menu"
            className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-6 h-6" />
          </button>

          {NavbarLinks.map((link) => {
            const isActive = activeLink === link.link.replace('#', '')
            return (
              <a
                key={link.id}
                href={link.link}
                onClick={() => handleLinkClick(link.link)}
                className={`text-lg font-medium transition-all duration-300 ${
                  isActive ? 'gradient-text' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            )
          })}

          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="btn-primary mt-4"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
