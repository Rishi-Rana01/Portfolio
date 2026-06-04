import React, { useState } from 'react'
import {
  FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin,
  FiInstagram, FiCheckCircle, FiAlertCircle, FiLoader,
} from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: 'Email',
    value: 'rishirana012354@gmail.com',
    href: 'mailto:rishirana012354@gmail.com',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'India',
    href: null,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
]

const socialLinks = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    href: 'https://github.com/Rishi-Rana01',
    label: 'GitHub',
    hoverColor: 'hover:bg-white/10 hover:text-white hover:border-white/20',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    hoverColor: 'hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30',
  },
  {
    icon: <FiInstagram className="w-5 h-5" />,
    href: 'https://www.instagram.com/the.rishi_rana?igsh=Z3k2ZmZjbTIxYXp1',
    label: 'Instagram',
    hoverColor: 'hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30',
  },
]

const INPUT_INITIAL = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(INPUT_INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    try {
      // Using mailto as the contact handler (no backend required)
      const mailtoLink = `mailto:[EMAIL_ADDRESS]?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
      window.location.href = mailtoLink
      setStatus('success')
      setForm(INPUT_INITIAL)
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center text-white px-6 sm:px-12 lg:px-24 py-28 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/12 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-10 w-[250px] h-[250px] bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-pink-600/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Header */}
        <header
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 text-xs text-purple-400 uppercase tracking-widest border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Let's Connect
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] mb-4">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — Info panel */}
          <aside
            className="lg:col-span-2 flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Contact info cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-2xl p-5 border flex items-center gap-4 ${info.bg}`}
                >
                  <div className={`p-3 rounded-xl ${info.bg} border`}>
                    <span className={info.color}>{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-zinc-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-green-500/15 flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-400">Available for Opportunities</p>
                <p className="text-xs text-zinc-500">Open to full-time roles</p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex items-center gap-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`p-3 rounded-xl glass border border-white/6 text-zinc-500 transition-all duration-300 shrink-0 ${s.hoverColor}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="text-center text-xs text-zinc-700 border-t border-white/4 pt-4">
              ⚡ Typical response time: within 24 hours
            </div>
          </aside>

          {/* Right — Form */}
          <div
            className="lg:col-span-3 glass-card rounded-3xl p-7 sm:p-10 border border-purple-500/10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rishi Rana"
                    className={`form-input ${errors.name ? 'border-red-500/60 focus:border-red-500' : ''}`}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? 'border-red-500/60 focus:border-red-500' : ''}`}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Job Opportunity / General Inquiry..."
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className={`form-input resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500' : ''}`}
                />
                <div className="flex items-center justify-between">
                  {errors.message ? (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  ) : <span />}
                  <span className={`text-xs ${form.message.length > 800 ? 'text-red-400' : 'text-zinc-700'}`}>
                    {form.message.length}/1000
                  </span>
                </div>
              </div>

              {/* Status message */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <FiCheckCircle className="w-4 h-4" />
                  Message prepared! Your email client should open shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <FiAlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                id="contact-submit"
                disabled={status === 'loading'}
                className="btn-primary justify-center w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-zinc-700">
                Your information is safe and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
