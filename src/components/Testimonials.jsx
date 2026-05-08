import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { TESTIMONIALS } from '../data/index.js'

const TestimonialCard = ({ testimonial, isActive }) => (
  <motion.div
    className="glass-card rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.92 }}
    transition={{ duration: 0.4 }}
  >
    {/* Quote mark */}
    <div className="absolute top-4 right-6 opacity-10">
      <Quote size={48} className="text-medical-blue rotate-180" />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>

    {/* Text */}
    <p className="font-body text-medical-gray text-base leading-relaxed italic mb-6 flex-1 font-medium">
      "{testimonial.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-semibold text-sm bg-gradient-to-br from-medical-blue to-medical-blue/80 shadow-sm shadow-medical-blue/20`}>
        {testimonial.initials}
      </div>
      <div>
        <p className="font-body font-semibold text-medical-slate text-sm">{testimonial.name}</p>
        <p className="font-mono text-xs text-medical-blue font-bold">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
)

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  // Get 3 visible testimonials
  const visible = [
    TESTIMONIALS[(current) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ]

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }} />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #0284C7, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag mb-4">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-medical-slate mt-4">
              Voices of{' '}
              <span className="gradient-text">Our Community</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <motion.button
              onClick={prev}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-medical-gray/60 hover:text-medical-blue"
              style={{ background: '#FFFFFF', border: '1px solid rgba(2,132,199,0.1)' }}
              whileHover={{ scale: 1.1, background: 'rgba(2,132,199,0.05)', borderColor: 'rgba(2,132,199,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              onClick={next}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-medical-gray/60 hover:text-medical-blue"
              style={{ background: '#FFFFFF', border: '1px solid rgba(2,132,199,0.1)' }}
              whileHover={{ scale: 1.1, background: 'rgba(2,132,199,0.05)', borderColor: 'rgba(2,132,199,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Cards — 3 visible on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <motion.div
              key={t.id + '-' + current}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${i > 0 ? 'hidden md:block' : ''} ${i > 1 ? 'md:hidden lg:block' : ''}`}
            >
              <TestimonialCard testimonial={t} isActive={i === 0} />
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                background: i === current ? '#0284C7' : 'rgba(2,132,199,0.15)',
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
