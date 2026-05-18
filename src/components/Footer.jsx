import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react'
import { STORE, NAV_LINKS } from '../data/index.js'

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)' }} />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.1), transparent)' }} />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #10B981, transparent)', transform: 'translate(-50%, 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-emerald-500/10 bg-white p-1.5 shadow-sm">
                <img 
                  src="/icon.png" 
                  alt="Laxmi Medical" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-theme-dark leading-none mb-1">Laxmi <span className="text-emerald-500">Medical</span></p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-theme-emerald uppercase font-black">Udaipur</p>
              </div>
            </div>

            <p className="font-body text-theme-gray text-sm leading-relaxed mb-6 font-medium">
              Your trusted healthcare partner in Udaipur. Genuine medicines, expert guidance, and community care since 2020.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, href: `https://wa.me/${STORE.whatsapp}`, color: '#25d366', label: 'WhatsApp' },
                { icon: Instagram, href: STORE.instagram, color: '#e1306c', label: 'Instagram' },
                { icon: Phone, href: `tel:${STORE.phones[0]}`, color: '#10B981', label: 'Call' },
              ].map(({ icon: Icon, href, color, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: `${color}08`, border: `1px solid ${color}15` }}
                  whileHover={{ scale: 1.1, background: `${color}12`, borderColor: `${color}30` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} style={{ color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-theme-emerald uppercase mb-5 font-bold">Quick Links</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="font-body text-theme-gray hover:text-theme-emerald text-sm transition-colors animated-underline font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-theme-emerald uppercase mb-5 font-bold">Our Services</p>
            <ul className="space-y-3">
              {['Prescription Medicines', 'OTC Medicines', 'Health Supplements', 'Baby Care', 'Surgical Products', 'Personal Care'].map((s) => (
                <li key={s}>
                  <span className="font-body text-theme-gray text-sm hover:text-theme-emerald transition-colors cursor-default font-medium">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-theme-emerald uppercase mb-5 font-bold">Contact</p>
            <div className="space-y-4">
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.address.full)}`}
                target="_blank" rel="noreferrer"
                className="flex items-start gap-3 group">
                <MapPin size={14} className="text-theme-emerald group-hover:text-theme-emerald mt-1 flex-shrink-0 transition-colors" />
                <span className="font-body text-theme-gray group-hover:text-theme-dark text-sm transition-colors leading-relaxed font-medium">
                  {STORE.address.line1},<br />{STORE.address.line2}
                </span>
              </a>

              {STORE.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`}
                  className="flex items-center gap-3 group">
                  <Phone size={13} className="text-theme-emerald group-hover:text-theme-emerald flex-shrink-0 transition-colors" />
                  <span className="font-mono text-theme-gray group-hover:text-theme-dark text-sm transition-colors font-bold">{phone}</span>
                </a>
              ))}

              <a href={`mailto:${STORE.email}`}
                className="flex items-center gap-3 group">
                <Mail size={13} className="text-theme-emerald group-hover:text-theme-emerald flex-shrink-0 transition-colors" />
                <span className="font-body text-theme-gray group-hover:text-theme-dark text-sm transition-colors font-medium">{STORE.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-theme-emerald/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-theme-gray/40 text-xs flex items-center gap-1.5 font-medium">
            © {new Date().getFullYear()} Laxmi Medical Store. Made with
            <Heart size={11} className="text-red-500 fill-red-500" />
            for Udaipur.
          </p>

          {/* Developer credit */}
          <motion.a
            href="https://visiontechx.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-body text-xs font-medium"
            style={{ color: 'rgba(100,116,139,0.45)' }}
            whileHover={{ color: '#10B981', y: -1 }}
            transition={{ duration: 0.2 }}
          >
            Developed by{' '}
            <span
              className="font-bold"
              style={{ color: 'inherit' }}
            >
              Vision TechX
            </span>
          </motion.a>

          <motion.button
            onClick={scrollTop}
            className="flex items-center gap-2 font-mono text-xs text-theme-gray/40 hover:text-theme-emerald transition-colors font-bold"
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
