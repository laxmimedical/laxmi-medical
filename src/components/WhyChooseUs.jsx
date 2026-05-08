import { motion } from 'framer-motion'
import { ShieldCheck, Award, BadgeIndianRupee, GraduationCap, Clock, HeartHandshake } from 'lucide-react'
import { FEATURES } from '../data/index.js'

const ICON_MAP = { ShieldCheck, Award, BadgeIndianRupee, GraduationCap, Clock, HeartHandshake }

const FeatureCard = ({ feature, index }) => {
  const Icon = ICON_MAP[feature.icon] || ShieldCheck

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative p-6 rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(2,132,199,0.08)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease',
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl"
        style={{ background: 'radial-gradient(circle at top left, rgba(2,132,199,0.08), transparent 70%)' }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: 'rgba(2,132,199,0.1)', border: '1px solid rgba(2,132,199,0.2)' }}>
          <Icon size={20} className="text-medical-blue" />
        </div>
        <h3 className="font-display font-semibold text-medical-slate text-base mb-2">
          {feature.title}
        </h3>
        <p className="font-body text-medical-gray text-sm leading-relaxed font-medium">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)' }} />

      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(2,132,199,0.2) 1px, transparent 1px)`,
          backgroundSize: '100% 80px',
        }} />

      {/* Corner glow */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #0284C7, transparent)' }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #0369a1, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag mb-4">Why Laxmi Medical</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-medical-slate mt-4 leading-tight">
              The Standard You{' '}
              <span className="gradient-text">Deserve</span>
            </h2>
          </motion.div>

          <motion.p
            className="font-body text-medical-gray text-lg leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            We don't just dispense medicines — we build lasting health partnerships with every customer who walks through our doors.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom highlight banner */}
        <motion.div
          className="mt-14 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(2,132,199,0.05), rgba(248,250,252,0.8))',
            border: '1px solid rgba(2,132,199,0.1)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at right, rgba(2,132,199,0.2), transparent 60%)',
            }} />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-medical-slate mb-2">
                Ready to experience the difference?
              </h3>
              <p className="font-body text-medical-gray text-sm font-medium">
                Visit us at Nakoda Nagar, Udaipur or call us directly for any health queries.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <motion.a
                href="tel:8003088526"
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Directions
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
