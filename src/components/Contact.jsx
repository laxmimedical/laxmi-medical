import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Instagram, Send, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { STORE } from '../data/index.js'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Encode for WhatsApp
    const text = encodeURIComponent(
      `Hello Laxmi Medical Store!\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/${STORE.whatsapp}?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 60%, #FFFFFF 100%)' }} />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.1), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
      
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-theme-dark mt-4 mb-4">
            We're Here to{' '}
            <span className="gradient-text">Help You</span>
          </h2>
          <p className="font-body text-theme-gray text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Have a query, need a medicine, or want to know more? Reach out to us any time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: MapPin,
                label: 'Visit Us',
                value: STORE.address.full,
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.address.full)}`,
                accent: '#10B981',
              },
              {
                icon: Phone,
                label: 'Call Us',
                value: STORE.phones.join('\n'),
                href: `tel:${STORE.phones[0]}`,
                accent: '#34D399',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: STORE.email,
                href: `mailto:${STORE.email}`,
                accent: '#059669',
              },
              {
                icon: Clock,
                label: 'Store Hours',
                value: 'Open 24 hours · 7 days a week',
                href: null,
                accent: '#10B981',
              },
            ].map(({ icon: Icon, label, value, href, accent }) => (
              <motion.div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl group"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(16,185,129,0.08)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                }}
                whileHover={{ borderColor: `${accent}40`, background: `${accent}05` }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}>
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-widest uppercase mb-1"
                    style={{ color: accent }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer"
                      className="font-body text-theme-gray hover:text-theme-emerald text-sm whitespace-pre-line block transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-theme-gray text-sm whitespace-pre-line font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social quick links */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body"
                style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)', color: '#25d366' }}
                whileHover={{ scale: 1.05, background: 'rgba(37,211,102,0.18)' }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </motion.a>
              <motion.a
                href={STORE.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body"
                style={{ background: 'rgba(225,48,108,0.08)', border: '1px solid rgba(225,48,108,0.2)', color: '#e1306c' }}
                whileHover={{ scale: 1.05, background: 'rgba(225,48,108,0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Instagram size={15} />
                Instagram
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Contact form */}
            <div className="glass-card rounded-3xl p-8" style={{ background: '#FFFFFF', border: '1px solid rgba(16,185,129,0.1)' }}>
              <h3 className="font-display font-semibold text-theme-dark text-xl mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-theme-emerald uppercase block mb-2 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-theme-dark placeholder-theme-gray/30 outline-none focus:border-theme-emerald/50 transition-all font-medium"
                    style={{
                      background: '#F0FDF4',
                      border: '1px solid rgba(16,185,129,0.1)',
                    }}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-theme-emerald uppercase block mb-2 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-theme-dark placeholder-theme-gray/30 outline-none transition-all font-medium"
                    style={{
                      background: '#F0FDF4',
                      border: '1px solid rgba(16,185,129,0.1)',
                    }}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-theme-emerald uppercase block mb-2 font-bold">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-theme-dark placeholder-theme-gray/30 outline-none transition-all resize-none font-medium"
                    style={{
                      background: '#F0FDF4',
                      border: '1px solid rgba(16,185,129,0.1)',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 20px -10px rgba(245,158,11,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    {sent ? (
                      <>Message Sent via WhatsApp ✓</>
                    ) : (
                      <>
                        <Send size={15} />
                        Send via WhatsApp
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>

            {/* Map placeholder */}
            <motion.a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.address.full)}`}
              target="_blank"
              rel="noreferrer"
              className="map-placeholder rounded-3xl overflow-hidden block group relative"
              style={{ height: '160px', background: '#F0FDF4', border: '1px solid rgba(16,185,129,0.1)' }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <MapPin size={22} className="text-theme-emerald" />
                </div>
                <div className="text-center">
                  <p className="font-body text-theme-dark text-sm font-semibold">Nakoda Nagar, Udaipur</p>
                  <p className="font-mono text-xs text-theme-emerald mt-1 font-bold">Click to open in Google Maps</p>
                </div>
                <div className="flex items-center gap-1 text-theme-emerald text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  <span>Get Directions</span>
                  <ArrowRight size={12} />
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
