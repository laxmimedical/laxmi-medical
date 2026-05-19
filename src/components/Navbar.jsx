import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { STORE } from '../data/index.js'
import { useActiveSection } from '../hooks/useScrollProgress.js'

// Nav links in the exact order sections appear on the page
const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#choose-us' },
  { label: 'About',    href: '#about' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  // Array of IDs for the scroll-spy logic
  const sectionIds = ['hero', 'products', 'services', 'choose-us', 'about', 'gallery', 'contact']
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80 // Adjust based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Dynamic Styles
  const textColor = scrolled ? 'text-slate-800' : 'text-white'
  const subTextColor = scrolled ? 'text-emerald-600' : 'text-emerald-300'
  const navBg = scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${navBg}`}>
            
            {/* ── LOGO ── */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 sm:gap-4 group shrink-0"
            >
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-emerald-500/20 bg-white p-1 shadow-lg shadow-emerald-900/10 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src="/icon.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-emerald-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex flex-col">
                <span className={`font-display font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300 ${textColor}`}>
                  Laxmi <span className="text-emerald-500">Medical</span>
                </span>
                <span className={`text-[10px] sm:text-[11px] tracking-[0.3em] font-black uppercase transition-colors duration-300 ${subTextColor}`}>
                  Healthcare · Udaipur
                </span>
              </div>
            </motion.a>

            {/* ── DESKTOP NAVIGATION ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive 
                        ? (scrolled ? 'text-emerald-700' : 'text-emerald-400') 
                        : (scrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white')
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full -z-0 ${scrolled ? 'bg-emerald-100' : 'bg-white/10'}`}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* ── CTA SECTION ── */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${STORE.phones[0]}`}
                className={`flex items-center gap-2 font-bold text-sm transition-colors duration-300 ${scrolled ? 'text-slate-700' : 'text-emerald-50'}`}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                   <Phone size={14} className="text-emerald-500" />
                </div>
                <span>{STORE.phones[0]}</span>
              </a>
              
              <button
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 ${
                  scrolled 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700' 
                    : 'bg-white text-emerald-900 hover:bg-emerald-50 shadow-xl'
                }`}
              >
                Get In Touch
              </button>
            </div>

            {/* ── MOBILE TOGGLE ── */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'bg-slate-100 text-slate-800' : 'bg-white/10 text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-emerald-950 flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
               <span className="text-emerald-400 font-black text-xl uppercase tracking-widest">Menu</span>
               <button onClick={() => setMenuOpen(false)} className="p-3 bg-white/5 rounded-2xl text-white">
                 <X size={28} />
               </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-3xl font-bold text-white/90 hover:text-emerald-400 transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 flex flex-col gap-5">
               <div className="bg-emerald-900/40 p-6 rounded-3xl border border-white/5">
                 <p className="text-emerald-400 text-xs font-black uppercase mb-2 tracking-widest">Emergency Contact</p>
                 <a href={`tel:${STORE.phones[0]}`} className="text-white text-2xl font-bold flex items-center gap-3">
                   <Phone size={24} /> {STORE.phones[0]}
                 </a>
               </div>
               <button 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-5 bg-emerald-500 text-emerald-950 font-black text-lg rounded-2xl shadow-2xl shadow-emerald-500/20"
               >
                  Book Consultation
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar