import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Instagram, ChevronUp, X } from 'lucide-react'
import { useState } from 'react'
import { STORE } from '../data/index.js'

const FloatingActions = () => {
  const [open, setOpen] = useState(false)

  const actions = [
    {
      icon: MessageCircle,
      href: `https://wa.me/${STORE.whatsapp}?text=Hello%20Laxmi%20Medical%20Store!`,
      label: 'WhatsApp',
      color: '#25d366',
      bg: 'rgba(37,211,102,0.15)',
      border: 'rgba(37,211,102,0.3)',
    },
    {
      icon: Phone,
      href: `tel:${STORE.phones[0]}`,
      label: 'Call',
      color: '#10B981',
      bg: 'rgba(16,185,129,0.15)',
      border: 'rgba(16,185,129,0.3)',
    },
    {
      icon: Instagram,
      href: STORE.instagram,
      label: 'Instagram',
      color: '#e1306c',
      bg: 'rgba(225,48,108,0.12)',
      border: 'rgba(225,48,108,0.25)',
    },
  ]

  return (
    <div className="fixed bottom-8 right-6 z-40 flex flex-col items-center gap-3">
      {/* Action buttons */}
      <AnimatePresence>
        {open && actions.map((action, i) => {
          const Icon = action.icon
          return (
            <motion.a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              aria-label={action.label}
              className="relative flex items-center justify-center w-11 h-11 rounded-full"
              style={{ background: action.bg, border: `1px solid ${action.border}`, backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={17} style={{ color: action.color }} />

              {/* Tooltip */}
              <span className="absolute right-14 font-mono text-[10px] tracking-wide text-theme-gray whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none font-bold">
                {action.label}
              </span>
            </motion.a>
          )
        })}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #10B981, #059669)',
          boxShadow: open
            ? '0 0 0 0 rgba(16,185,129,0)'
            : '0 10px 25px rgba(16,185,129,0.4), 0 0 60px rgba(16,185,129,0.1)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: open ? 0 : 0 }}
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {open ? <X size={18} color="white" /> : <Phone size={17} color="white" />}
        </motion.div>
      </motion.button>
    </div>
  )
}

export default FloatingActions
