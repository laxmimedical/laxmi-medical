import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const CategoryTabs = ({ active, onChange, counts }) => {
  const scrollRef = useRef(null)
  const activeRef = useRef(null)

  /* Auto-scroll active tab into view */
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current
      const el = activeRef.current
      const left = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2
      container.scrollTo({ left, behavior: 'smooth' })
    }
  }, [active])

  const CATEGORIES = [
    { id: 'all',       label: 'All Products',      emoji: '🏥' },
    { id: 'baby',      label: 'Baby Care',          emoji: '👶' },
    { id: 'vitamins',  label: 'Vitamins & Suppl.',  emoji: '💊' },
    { id: 'diabetes',  label: 'Diabetes Care',      emoji: '🩸' },
    { id: 'personal',  label: 'Personal Care',      emoji: '🧴' },
    { id: 'skin',      label: 'Skin Care',          emoji: '✨' },
    { id: 'hair',      label: 'Hair Care',          emoji: '💆' },
    { id: 'immunity',  label: 'Immunity',           emoji: '🛡️' },
    { id: 'ayurvedic', label: 'Ayurvedic',          emoji: '🌿' },
    { id: 'pain',      label: 'Pain Relief',        emoji: '💪' },
    { id: 'devices',   label: 'Medical Devices',    emoji: '🔬' },
    { id: 'women',     label: "Women's Health",     emoji: '🌸' },
    { id: 'elderly',   label: 'Elderly Care',       emoji: '❤️' },
  ]

  return (
    <div className="relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #fafcfa, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #fafcfa, transparent)' }}
      />

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-1 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' },
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id
          const count = cat.id === 'all'
            ? Object.values(counts || {}).reduce((a, b) => a + b, 0)
            : (counts?.[cat.id] || 0)

          return (
            <motion.button
              key={cat.id}
              ref={isActive ? activeRef : null}
              onClick={() => onChange(cat.id)}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all"
              style={{
                fontFamily: "'DM Sans', 'Inter', sans-serif",
                background: isActive
                  ? 'linear-gradient(135deg, #10B981, #059669)'
                  : '#ffffff',
                color: isActive ? '#ffffff' : '#475569',
                border: isActive ? '1.5px solid transparent' : '1.5px solid #e8ece9',
                boxShadow: isActive
                  ? '0 4px 12px rgba(16,185,129,0.25)'
                  : '0 1px 3px rgba(0,0,0,0.04)',
                letterSpacing: '0.01em',
              }}
            >
              {cat.label}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryTabs