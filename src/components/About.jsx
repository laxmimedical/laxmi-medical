import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react'
import { STATS, STORE } from '../data/index.js'

// Animated counter
const Counter = ({ value, suffix, label }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, borderColor: 'rgba(16,185,129,0.2)' }}
      transition={{ duration: 0.4 }}
    >
      <p className="font-display text-4xl font-semibold gradient-text leading-none mb-2">
        {isInView ? count.toLocaleString() : 0}{suffix}
      </p>
      <p className="font-body text-xs text-theme-gray tracking-wide font-medium">{label}</p>
    </motion.div>
  )
}

const About = () => {


  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 50%, #F0FDF4 100%)' }} />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16,185,129,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-theme-dark mt-4 mb-4">
            Years of{' '}
            <span className="gradient-text">Trusted Care</span>
          </h2>
          <p className="font-body text-theme-gray text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            More than just a pharmacy — we're your neighbors, your health partners, your trusted advisors in every healthcare journey.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Story text */}
            <div className="space-y-5 mb-10">
              <p className="font-body text-theme-gray text-base leading-relaxed">
                Established in the heart of Udaipur, <strong className="text-theme-emerald font-semibold">Laxmi Medical Store</strong> has been serving the community with dedication, integrity, and expert pharmaceutical care for over 5 years.
              </p>
              <p className="font-body text-theme-gray/80 text-base leading-relaxed">
                We believe that access to genuine, affordable medicines is a fundamental right. That's why we've built a pharmacy that combines clinical expertise with warm, personal service — making every customer feel heard and cared for.
              </p>
              <p className="font-body text-theme-gray/80 text-base leading-relaxed">
                From prescription medicines to surgical products, baby care to health supplements, we maintain a comprehensive inventory ensuring you always find what you need under one roof.
              </p>
            </div>

            {/* Contact quick info */}
            <div className="mt-8 space-y-3">
              {[
                { icon: MapPin, text: STORE.address.full, href: '#' },
                { icon: Phone, text: STORE.phones.join(' · '), href: `tel:${STORE.phones[0]}` },
                { icon: Mail, text: STORE.email, href: `mailto:${STORE.email}` },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href}
                  className="flex items-start gap-3 text-theme-gray hover:text-theme-emerald transition-colors group">
                  <Icon size={14} className="mt-1 flex-shrink-0 text-theme-emerald group-hover:text-theme-emerald" />
                  <span className="font-body text-sm font-medium">{text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats + visual */}
          <div>
            {/* Stats counters */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((stat) => (
                <Counter key={stat.label} {...stat} />
              ))}
            </div>

            {/* Big quote card */}
            <motion.div
              className="glass-card rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 font-display text-8xl text-theme-emerald/10 leading-none select-none">
                "
              </div>
              <p className="font-display text-xl font-medium text-theme-dark leading-relaxed mb-6 relative z-10 italic">
                Health is not just the absence of disease — it's the presence of complete well-being. We're here to support your journey every step of the way.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-semibold text-sm"
                  style={{ background: 'linear-gradient(135deg, #10B981, #064E3B)' }}>
                  LM
                </div>
                <div>
                  <p className="font-body font-semibold text-theme-dark text-sm">Laxmi Medical Team</p>
                  <p className="font-mono text-xs text-theme-emerald font-bold">Nakoda Nagar, Udaipur</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
