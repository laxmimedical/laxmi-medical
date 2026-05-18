import { motion } from 'framer-motion'
import { ZoomIn, MapPin, ExternalLink } from 'lucide-react'

const GALLERY_IMAGES = [
  { 
    src: '/front.webp.webp', 
    label: 'Store Exterior', 
    span: 'md:col-span-2 md:row-span-2',
    desc: 'Conveniently located in Nakoda Nagar, Udaipur.' 
  },
  { 
    src: '/stock.webp.webp', 
    label: 'Medicine Inventory', 
    span: 'md:col-span-2 md:row-span-1',
    desc: 'Widest range of genuine medicines in the city.' 
  },
  { 
    src: '/2.webp.webp', 
    label: 'Wellness Corner', 
    span: 'md:col-span-1 md:row-span-1',
    desc: 'Premium vitamins and supplements.' 
  },
  { 
    src: '/3.webp.webp', 
    label: 'Baby & Mother Care', 
    span: 'md:col-span-1 md:row-span-1',
    desc: 'Trusted brands for your family.' 
  },
  { 
    src: '/4.webp.webp', 
    label: 'Diagnostic Tools', 
    span: 'md:col-span-2 md:row-span-1',
    desc: 'BP monitors, nebulizers, and more.' 
  },
]

const GalleryItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
      className={`relative overflow-hidden rounded-[2rem] group cursor-pointer border border-slate-100 bg-slate-50 ${item.span}`}
    >
      {/* Dynamic Image Container */}
      <div className="w-full h-full overflow-hidden">
        <motion.img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <ZoomIn size={18} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Quick View</span>
          </div>
          <h3 className="text-white text-2xl font-bold tracking-tight">{item.label}</h3>
          <p className="text-emerald-50/70 text-sm mt-2 max-w-[280px] leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Floating Tag (Hides on Hover) */}
      <div className="absolute top-5 left-5 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
        <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold text-slate-800 uppercase tracking-wider border border-white/50 shadow-sm">
          {item.label}
        </span>
      </div>
    </motion.div>
  )
}

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 items-end gap-8 mb-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <MapPin size={14} />
              Our Location
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Inside Udaipur's <br />
              <span className="text-emerald-600 italic">Favorite Pharmacy.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed lg:border-l lg:border-slate-200 lg:pl-12">
            We take pride in our organization. A clean store means a safe healthcare experience for your family.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {GALLERY_IMAGES.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery