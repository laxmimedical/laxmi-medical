import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, STORE } from '../data/index.js'
import { useActiveSection } from '../hooks/useScrollProgress.js'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(['hero', 'about', 'services', 'products', 'gallery', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', menuOpen)
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass border-white py-3 px-6 shadow-sm shadow-medical-blue/5'
            : 'bg-transparent py-3 px-6'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">

            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0284C7, #0369a1)' }}>
                <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
                  <rect x="14" y="4" width="8" height="28" rx="2" fill="white" />
                  <rect x="4" y="14" width="28" height="8" rx="2" fill="white" />
                </svg>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284C7)' }}
                />
              </div>
              <div>
                <span className="font-display font-semibold text-medical-slate text-base leading-tight block">
                  Laxmi Medical
                </span>
                <span className="font-mono text-[9px] tracking-widest text-medical-blue font-bold uppercase">
                  Udaipur
                </span>
              </div>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`relative px-4 py-2 rounded-full font-body text-sm transition-all duration-300 animated-underline ${
                      isActive
                        ? 'text-medical-blue font-semibold'
                        : 'text-medical-gray hover:text-medical-slate'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(2,132,199,0.05)', border: '1px solid rgba(2,132,199,0.1)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.a>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${STORE.phones[0]}`}
                className="flex items-center gap-2 text-medical-blue hover:text-medical-blue/80 transition-colors font-body text-sm font-semibold"
              >
                <Phone size={14} />
                <span>{STORE.phones[0]}</span>
              </a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary text-sm px-5 py-2.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Get In Touch</span>
              </motion.a>
            </div>

            {/* Hamburger */}
            <motion.button
              className="lg:hidden p-2 rounded-xl text-medical-slate hover:bg-medical-blue/5"
              style={{ background: 'rgba(2,132,199,0.05)' }}
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(248,250,252,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0284C7, #0369a1)' }}>
                  <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
                    <rect x="14" y="4" width="8" height="28" rx="2" fill="white" />
                    <rect x="4" y="14" width="28" height="8" rx="2" fill="white" />
                  </svg>
                </div>
                <div>
                  <span className="font-display font-semibold text-medical-slate text-xl block">Laxmi Medical</span>
                  <span className="font-mono text-xs tracking-widest text-medical-blue font-bold uppercase">Udaipur</span>
                </div>
              </div>

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-3xl font-semibold text-medical-slate hover:text-medical-blue transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-3 mt-6"
              >
                <a href={`tel:${STORE.phones[0]}`}
                  className="flex items-center gap-2 text-medical-blue font-mono text-sm font-bold">
                  <Phone size={14} />
                  {STORE.phones[0]}
                </a>
                <a href={`tel:${STORE.phones[1]}`}
                  className="flex items-center gap-2 text-medical-blue font-mono text-sm font-bold">
                  <Phone size={14} />
                  {STORE.phones[1]}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
