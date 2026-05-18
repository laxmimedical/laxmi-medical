import { motion } from 'framer-motion'
import { ShieldCheck, Award, BadgeIndianRupee, GraduationCap, Clock, HeartHandshake, MapPin, Phone } from 'lucide-react'
import { FEATURES } from '../data/index.js'

const ICON_MAP = { ShieldCheck, Award, BadgeIndianRupee, GraduationCap, Clock, HeartHandshake }

const FeatureCard = ({ feature, index }) => {
  const Icon = ICON_MAP[feature.icon] || ShieldCheck

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 text-emerald-600">
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
        {feature.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed font-medium">
        {feature.description}
      </p>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  return (
    <section id="choose-us" className="relative py-24 bg-slate-50/50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <ShieldCheck size={12} />
              Laxmi Medical Promise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15]">
              Healthcare you can <br />
              <span className="text-emerald-600">truly count on.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium lg:border-l lg:border-slate-200 lg:pl-10"
          >
            We don't just hand over boxes of medicine. We build relationships with our neighbors in Udaipur to ensure your family stays healthy and happy.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-emerald-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Need help with a prescription?
              </h3>
              <p className="text-slate-500 font-medium max-w-md">
                Visit us in Nakoda Nagar or give us a quick call. Our expert pharmacists are ready to help you.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 shrink-0">
              <motion.a
                href="tel:8003088526"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
              >
                <Phone size={18} />
                Call 8003088526
              </motion.a>
              
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 hover:bg-slate-100 transition-all"
              >
                <MapPin size={18} className="text-emerald-600" />
                Get Directions
              </motion.a>
            </div>
          </div>
          
          {/* Subtle decoration inside banner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16" />
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs