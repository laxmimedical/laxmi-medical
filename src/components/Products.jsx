import { motion } from 'framer-motion'
import { Star, Eye, ShoppingCart, Pill, Leaf, Baby, Shield } from 'lucide-react'
import { PRODUCTS } from '../data/index.js'

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={11}
        className={i <= rating ? 'text-amber-400 fill-amber-400' : 'text-medical-gray/20'}
      />
    ))}
  </div>
)

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative rounded-2xl overflow-hidden"
    style={{
      background: '#FFFFFF',
      border: '1px solid rgba(2,132,199,0.08)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    }}
    whileHover={{ y: -6 }}
  >
    {/* Product image placeholder */}
    <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(2,132,199,0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />

      {/* Product icon visual */}
      <motion.div
        className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Pill size={32} className="text-medical-blue" />
      </motion.div>

      {/* Badge */}
      <span className={`absolute top-3 left-3 ${product.badgeColor} text-white font-mono text-[10px] px-2.5 py-1 rounded-full tracking-wide`}>
        {product.badge}
      </span>

      {/* Quick view overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100"
        style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)' }}
        transition={{ duration: 0.2 }}
      >
        <motion.button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-medical-blue"
          style={{ background: 'rgba(2,132,199,0.1)', border: '1px solid rgba(2,132,199,0.2)' }}
          whileHover={{ scale: 1.1, background: 'rgba(2,132,199,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye size={16} />
        </motion.button>
        <motion.button
          className="px-4 py-2 rounded-xl text-white text-xs font-body flex items-center gap-2"
          style={{ background: '#0284C7' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={13} />
          Enquire
        </motion.button>
      </motion.div>
    </div>

    {/* Card body */}
    <div className="p-5">
      <p className="font-mono text-[10px] text-medical-blue tracking-widest uppercase mb-1 font-bold">
        {product.category}
      </p>
      <h3 className="font-display font-semibold text-medical-slate text-base mb-1.5 leading-tight">
        {product.name}
      </h3>
      <p className="font-body text-medical-gray text-xs leading-relaxed mb-3 font-medium">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="font-mono text-[10px] text-medical-gray/40">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display font-semibold text-medical-blue text-lg">{product.price}</span>
          <span className="font-body text-medical-gray/40 text-xs line-through">{product.originalPrice}</span>
        </div>
      </div>
    </div>
  </motion.div>
)

const Products = () => {
  const categories = ['All', 'Vitamins', 'Devices', 'Baby Care', 'Surgical']

  return (
    <section id="products" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)' }} />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(2,132,199,0.1), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag mb-4">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-medical-slate mt-4 mb-4">
            Featured{' '}
            <span className="gradient-text">Healthcare Products</span>
          </h2>
          <p className="font-body text-medical-gray text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Carefully curated selection of genuine medicines, health supplements, devices, and wellness products.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wide transition-all duration-300 ${
                i === 0
                  ? 'text-white'
                  : 'text-medical-gray hover:text-medical-blue'
              }`}
              style={i === 0 ? {
                background: '#0284C7',
              } : {
                background: '#FFFFFF',
                border: '1px solid rgba(2,132,199,0.1)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center font-body text-medical-gray/40 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Prices shown are indicative. Visit the store or call for current availability and pricing.
        </motion.p>
      </div>
    </section>
  )
}

export default Products
