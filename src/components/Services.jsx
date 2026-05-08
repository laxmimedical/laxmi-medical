import { motion } from 'framer-motion'
import {
  Pill, ShoppingBag, Scissors, Leaf, Baby, Sparkles, Stethoscope, Zap,
  ArrowRight
} from 'lucide-react'
import { SERVICES } from '../data/index.js'

const ICON_MAP = {
  Pill, ShoppingBag, Scissors, Leaf, Baby, Sparkles, Stethoscope, Zap,
}

const ServiceCard = ({ service, index }) => {
  const Icon = ICON_MAP[service.icon] || Pill

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
      style={{
        background: `#FFFFFF`,
        border: '1px solid rgba(2,132,199,0.08)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(circle at top left, ${service.accent}18, transparent 60%)`,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${service.accent}30, transparent)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '1px',
          transition: 'opacity 0.4s ease',
        }} />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative"
          style={{
            background: `${service.accent}18`,
            border: `1px solid ${service.accent}30`,
          }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={22} style={{ color: service.accent }} />
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle, ${service.accent}30, transparent)`,
              transition: 'opacity 0.3s ease',
            }}
          />
        </motion.div>

        <h3 className="font-display font-semibold text-medical-slate text-lg mb-2">
          {service.title}
        </h3>
        <p className="font-body text-medical-gray text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Learn more arrow */}
        <motion.div
          className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          style={{ color: service.accent }}
        >
          <span className="font-mono text-xs tracking-wide">Learn more</span>
          <ArrowRight size={12} />
        </motion.div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)' }} />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #0284C7, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag mb-4">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-medical-slate mt-4 mb-4">
            Comprehensive{' '}
            <span className="gradient-text">Healthcare Services</span>
          </h2>
          <p className="font-body text-medical-gray text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            From prescription medicines to surgical products, we provide a complete range of healthcare solutions with expert guidance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-body text-medical-gray/60 mb-4 text-sm font-medium">
            Can't find what you're looking for? We can help.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Ask Our Pharmacist
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
