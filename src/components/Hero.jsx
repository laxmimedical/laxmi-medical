import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, ChevronDown, Shield, Clock, Star, Pill, Heart, Activity, Zap, Stethoscope } from 'lucide-react'
import { useRef } from 'react'
import { STORE } from '../data/index.js'

// Floating medical icon component
const FloatingIcon = ({ Icon, style, delay = 0, size = 20 }) => (
  <motion.div
    className="absolute flex items-center justify-center rounded-2xl"
    style={{
      width: size + 24,
      height: size + 24,
      background: 'rgba(2,132,199,0.05)',
      border: '1px solid rgba(2,132,199,0.1)',
      backdropFilter: 'blur(10px)',
      ...style,
    }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 5 + delay,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  >
    <Icon size={size} color="#0284C7" />
  </motion.div>
)

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, #f1f5f9 0%, #F8FAFC 60%, #F8FAFC 100%)' }} />

        {/* Animated blobs */}
        <div className="blob-1 absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, transparent 70%)' }} />
        <div className="blob-2 absolute bottom-1/3 right-1/6 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.1) 0%, transparent 70%)' }} />
        <div className="blob-3 absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.08) 0%, transparent 70%)' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(2,132,199,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,132,199,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />

        {/* Radial vignette */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, #F8FAFC 100%)' }} />
      </div>

      {/* Floating icons */}
      <FloatingIcon Icon={Pill} style={{ top: '18%', left: '8%' }} delay={0} size={18} />
      <FloatingIcon Icon={Heart} style={{ top: '30%', right: '10%' }} delay={1.2} size={16} />
      <FloatingIcon Icon={Activity} style={{ bottom: '35%', left: '6%' }} delay={2.1} size={20} />
      <FloatingIcon Icon={Stethoscope} style={{ top: '60%', right: '8%' }} delay={0.8} size={18} />
      <FloatingIcon Icon={Zap} style={{ top: '15%', right: '22%' }} delay={1.8} size={14} />
      <FloatingIcon Icon={Shield} style={{ bottom: '25%', right: '18%' }} delay={3} size={16} />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-medical-blue animate-pulse" />
                Udaipur's Trusted Pharmacy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] mt-6 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-medical-slate">Your Trusted</span>
              <br />
              <span className="gradient-text">Healthcare</span>
              <br />
              <span className="text-medical-slate">Partner</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="font-body text-medical-gray text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {STORE.subTagline} — Premium medicines, expert consultation, and genuine healthcare products delivered with care and trust.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(2,132,199,0.2)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-2">
                  <Phone size={15} />
                  Contact Now
                </span>
              </motion.a>

              <motion.a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
                <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: Shield, label: 'Genuine Medicines' },
                { icon: Clock, label: '24/7 Available' },
                { icon: Star, label: '5★ Rated' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                  style={{ background: 'rgba(2,132,199,0.05)', border: '1px solid rgba(2,132,199,0.1)' }}>
                  <Icon size={13} className="text-medical-blue" />
                  <span className="font-body text-xs text-medical-gray font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual Card Stack */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[420px] h-[480px]">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'radial-gradient(circle at center, rgba(16,185,129,0.15), transparent 70%)' }} />

              {/* Main card */}
              <motion.div
                className="absolute inset-8 glass-card rounded-3xl p-8 flex flex-col justify-between"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ boxShadow: '0 20px 50px rgba(2,132,199,0.08), 0 0 20px rgba(2,132,199,0.05)' }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #0284C7, #0369a1)' }}>
                      <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
                        <rect x="14" y="4" width="8" height="28" rx="2" fill="white" />
                        <rect x="4" y="14" width="28" height="8" rx="2" fill="white" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-medical-slate text-sm">Laxmi Medical</p>
                      <p className="font-mono text-[10px] text-medical-blue font-bold tracking-widest">PREMIUM PHARMACY</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono"
                    style={{ background: 'rgba(2,132,199,0.1)', color: '#0284C7' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-medical-blue animate-pulse" />
                    Open Now
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  {[
                    { label: 'Medicines', value: '3000+', icon: Pill },
                    { label: 'Happy Patients', value: '5000+', icon: Heart },
                    { label: 'Years Trust', value: '10+', icon: Shield },
                    { label: 'Daily Service', value: '24/7', icon: Clock },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="rounded-2xl p-3"
                      style={{ background: 'rgba(2,132,199,0.03)', border: '1px solid rgba(2,132,199,0.05)' }}>
                      <Icon size={14} className="text-medical-blue mb-2" />
                      <p className="font-display font-semibold text-medical-slate text-xl leading-none">{value}</p>
                      <p className="font-mono text-[10px] text-medical-gray mt-1 tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="rounded-xl p-3 flex items-center gap-3"
                  style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(2,132,199,0.1)' }}>
                    <Activity size={14} className="text-medical-blue" />
                  </div>
                  <div>
                    <p className="font-body text-medical-slate text-xs font-medium">{STORE.address.line1}</p>
                    <p className="font-body text-medical-gray text-xs">{STORE.address.line2}</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3"
                animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="font-body text-medical-slate text-xs font-semibold">5.0 Rating</span>
                </div>
              </motion.div>

              {/* Bottom floating card */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3"
                animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-medical-blue animate-pulse" />
                  <span className="font-mono text-medical-blue text-xs font-bold">Genuine Medicines</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-medical-gray/40 hover:text-medical-blue transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
