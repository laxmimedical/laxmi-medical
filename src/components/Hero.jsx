import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck, Star, Award, Truck, Clock, CheckCircle } from 'lucide-react'
import { STORE } from '../data/index.js'

/* ─── Count-up animation hook ─── */
function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])
  return value
}

/* ─── Floating Product Card (Interactive) ─── */
const FloatingCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="absolute bottom-12 right-0 lg:-right-12 z-20 hidden md:block"
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-emerald-100"
      style={{ minWidth: 260 }}
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-inner">
         <ShieldCheck className="text-white" size={24} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Quality Assured</p>
        <p className="text-sm font-bold text-slate-800">100% Genuine Medicines</p>
        <div className="flex items-center gap-1 mt-0.5">
          <CheckCircle size={10} className="text-emerald-500" />
          <span className="text-[10px] text-slate-500 font-medium">Verified by Laxmi Medical</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

/* ─── Stat Pill Component ─── */
const StatPill = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
      <Icon size={16} className="text-white" />
    </div>
    <div>
      <p className="text-slate-900 font-bold text-sm leading-none">{value}</p>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tight mt-1">{label}</p>
    </div>
  </motion.div>
)

const Hero = () => {
  const containerRef = useRef(null)
  const count = useCountUp(5000, 2000)
  
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/stock.webp.webp" 
          alt="Laxmi Medical Pharmacy" 
          className="w-full h-full object-cover object-center"
        />
        {/* Deep Green Gradient Overlay for that professional Medical feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Content */}
          <div className="flex flex-col">
            
  
             
          
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
            >
              Your Trusted <br />
              <span className="text-emerald-400 italic">Healthcare</span> Partner
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-emerald-50/80 text-lg md:text-xl leading-relaxed max-w-lg mb-10 border-l-2 border-emerald-400/50 pl-6"
            >
              {STORE.subTagline} — Premium medicines, expert consultation, and 100% genuine products delivered with absolute care.
            </motion.p>

            

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#contact')}
                className="px-8 py-4 bg-emerald-500 text-slate-900 font-bold rounded-xl shadow-xl shadow-emerald-500/20 flex items-center gap-2 hover:bg-emerald-400 transition-colors"
              >
                <Phone size={18} />
                Contact Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#services')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                Explore Services
                <ArrowRight size={18} />
              </motion.button>
            </div>

            
          </div>
        

        </div>
      </div>

      
    </section>
  )
}

export default Hero