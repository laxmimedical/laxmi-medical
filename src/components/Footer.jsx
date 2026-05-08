import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react'
import { STORE, NAV_LINKS } from '../data/index.js'

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }} />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.1), transparent)' }} />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #0284C7, transparent)', transform: 'translate(-50%, 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0284C7, #0369a1)' }}>
                <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
                  <rect x="14" y="4" width="8" height="28" rx="2" fill="white" />
                  <rect x="4" y="14" width="28" height="8" rx="2" fill="white" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-medical-slate">Laxmi Medical</p>
                <p className="font-mono text-[9px] tracking-widest text-medical-blue uppercase font-bold">Udaipur</p>
              </div>
            </div>

            <p className="font-body text-medical-gray text-sm leading-relaxed mb-6 font-medium">
              Your trusted healthcare partner in Udaipur. Genuine medicines, expert guidance, and community care since 2014.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, href: `https://wa.me/${STORE.whatsapp}`, color: '#25d366', label: 'WhatsApp' },
                { icon: Instagram, href: STORE.instagram, color: '#e1306c', label: 'Instagram' },
                { icon: Phone, href: `tel:${STORE.phones[0]}`, color: '#0284C7', label: 'Call' },
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
            <p className="font-mono text-[10px] tracking-widest text-medical-blue uppercase mb-5 font-bold">Quick Links</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="font-body text-medical-gray hover:text-medical-blue text-sm transition-colors animated-underline font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-medical-blue uppercase mb-5 font-bold">Our Services</p>
            <ul className="space-y-3">
              {['Prescription Medicines', 'OTC Medicines', 'Health Supplements', 'Baby Care', 'Surgical Products', 'Personal Care'].map((s) => (
                <li key={s}>
                  <span className="font-body text-medical-gray text-sm hover:text-medical-blue transition-colors cursor-default font-medium">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-medical-blue uppercase mb-5 font-bold">Contact</p>
            <div className="space-y-4">
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.address.full)}`}
                target="_blank" rel="noreferrer"
                className="flex items-start gap-3 group">
                <MapPin size={14} className="text-medical-blue group-hover:text-medical-blue mt-1 flex-shrink-0 transition-colors" />
                <span className="font-body text-medical-gray group-hover:text-medical-slate text-sm transition-colors leading-relaxed font-medium">
                  {STORE.address.line1},<br />{STORE.address.line2}
                </span>
              </a>

              {STORE.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`}
                  className="flex items-center gap-3 group">
                  <Phone size={13} className="text-medical-blue group-hover:text-medical-blue flex-shrink-0 transition-colors" />
                  <span className="font-mono text-medical-gray group-hover:text-medical-slate text-sm transition-colors font-bold">{phone}</span>
                </a>
              ))}

              <a href={`mailto:${STORE.email}`}
                className="flex items-center gap-3 group">
                <Mail size={13} className="text-medical-blue group-hover:text-medical-blue flex-shrink-0 transition-colors" />
                <span className="font-body text-medical-gray group-hover:text-medical-slate text-sm transition-colors font-medium">{STORE.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-medical-blue/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-medical-gray/40 text-xs flex items-center gap-1.5 font-medium">
            © {new Date().getFullYear()} Laxmi Medical Store. Made with
            <Heart size={11} className="text-red-500 fill-red-500" />
            for Udaipur.
          </p>

          <motion.button
            onClick={scrollTop}
            className="flex items-center gap-2 font-mono text-xs text-medical-gray/40 hover:text-medical-blue transition-colors font-bold"
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
