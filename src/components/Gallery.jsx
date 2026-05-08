import { motion } from 'framer-motion'
import { ZoomIn, Pill, Leaf, Baby, Scissors, Building, Users } from 'lucide-react'

const GALLERY_ITEMS = [
  { label: 'Medicine Aisle', icon: Pill, span: 'col-span-2 row-span-2', color: 'from-medical-blue/10 to-medical-blue/5', h: 'h-72' },
  { label: 'Supplements Section', icon: Leaf, span: 'col-span-1 row-span-1', color: 'from-medical-blue/5 to-medical-blue/10', h: 'h-36' },
  { label: 'Baby Care Corner', icon: Baby, span: 'col-span-1 row-span-1', color: 'from-medical-blue/10 to-medical-blue/5', h: 'h-36' },
  { label: 'Surgical Products', icon: Scissors, span: 'col-span-1 row-span-2', color: 'from-medical-blue/5 to-medical-blue/10', h: 'h-72' },
  { label: 'Store Exterior', icon: Building, span: 'col-span-2 row-span-1', color: 'from-medical-blue/10 to-medical-blue/5', h: 'h-36' },
  { label: 'Consultation Desk', icon: Users, span: 'col-span-1 row-span-1', color: 'from-medical-blue/5 to-medical-blue/10', h: 'h-36' },
]

const GalleryItem = ({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.h || 'h-40'}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(2,132,199,0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(2,132,199,0.1)' }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={28} className="text-medical-blue" />
        </motion.div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100"
        style={{ background: 'linear-gradient(0deg, rgba(248,250,252,0.9) 0%, transparent 60%)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 text-medical-blue">
          <ZoomIn size={14} />
          <span className="font-body text-sm font-semibold text-medical-slate">{item.label}</span>
        </div>
      </motion.div>

      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-0 transition-opacity"
        style={{ background: '#FFFFFF', border: '1px solid rgba(2,132,199,0.1)' }}>
        <span className="font-mono text-[10px] text-medical-slate">{item.label}</span>
      </div>

      {/* Always visible label */}
      <div className="absolute bottom-3 left-3">
        <span className="font-mono text-[10px] text-medical-gray/40 tracking-wide font-bold">{item.label}</span>
      </div>
    </motion.div>
  )
}

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag mb-4">Our Store</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-medical-slate mt-4 mb-4">
            A Glimpse of{' '}
            <span className="gradient-text">Laxmi Medical</span>
          </h2>
          <p className="font-body text-medical-gray text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Step inside our modern, well-organized pharmacy where every product is carefully stocked and every customer is warmly welcomed.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="col-span-2 md:col-span-2">
            <GalleryItem item={{ ...GALLERY_ITEMS[0], h: 'h-64 md:h-80' }} index={0} />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <GalleryItem item={{ ...GALLERY_ITEMS[1], h: 'h-[calc(50%-8px)]' }} index={1} />
            <GalleryItem item={{ ...GALLERY_ITEMS[2], h: 'h-[calc(50%-8px)]' }} index={2} />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <GalleryItem item={{ ...GALLERY_ITEMS[3], h: 'h-full min-h-40' }} index={3} />
          </div>

          {/* Row 2 */}
          <div className="col-span-2">
            <GalleryItem item={{ ...GALLERY_ITEMS[4], h: 'h-36' }} index={4} />
          </div>
          <div className="col-span-2">
            <GalleryItem item={{ ...GALLERY_ITEMS[5], h: 'h-36' }} index={5} />
          </div>
        </div>

        {/* Note */}
        <motion.p
          className="text-center font-mono text-xs text-medical-gray/40 mt-8 tracking-wide font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Visit us in person to experience the full Laxmi Medical Store
        </motion.p>
      </div>
    </section>
  )
}

export default Gallery
