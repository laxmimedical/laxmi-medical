import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Tag, ShieldCheck, Truck, RotateCcw, Phone, Heart, Star, ChevronRight } from 'lucide-react'

/* ─── Trust Badge ─────────────────────────────────────────────── */
const TrustBadge = ({ icon: Icon, label, sub }) => (
  <div
    className="flex items-start gap-3 p-3 rounded-xl"
    style={{ background: '#f8fdf9', border: '1px solid #e8f5e9' }}
  >
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
      style={{ background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' }}
    >
      <Icon size={14} className="text-emerald-700" />
    </div>
    <div>
      <p
        className="text-xs font-bold text-slate-700"
        style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      >{label}</p>
      <p className="text-[10px] text-slate-400 mt-0.5" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>{sub}</p>
    </div>
  </div>
)

/* ─── Star Rating ─────────────────────────────────────────────── */
const StarRow = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <div
      className="flex items-center gap-1 px-2 py-1 rounded-lg"
      style={{ background: '#fffbeb', border: '1px solid #fef3c7' }}
    >
      <Star size={12} fill="#f59e0b" stroke="#f59e0b" />
      <span className="text-xs font-bold text-amber-700" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
        {rating}
      </span>
    </div>
    <span className="text-xs text-slate-400" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
      {reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews} verified reviews
    </span>
  </div>
)

/* ─── MODAL ───────────────────────────────────────────────────── */
const ProductModal = ({ product, onClose }) => {
  const [wishlist, setWishlist] = useState(false)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!product) return null

  const discount = product.mrp && product.price && product.mrp > product.price
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal panel */}
        <motion.div
          className="relative bg-white w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[94vh] overflow-y-auto"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        >
          {/* Drag handle (mobile) */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-slate-200" />
          </div>

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={15} className="text-slate-600" />
          </motion.button>

          {/* Product image */}
          <div
            className="relative overflow-hidden"
            style={{
              height: '260px',
              background: 'linear-gradient(145deg, #f0fdf4 0%, #f8fdf9 50%, #e8f5f0 100%)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full"
              style={{ objectFit: 'contain', padding: '16px' }}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: 'linear-gradient(to top, white, transparent)' }}
            />

            {/* Top left badge */}
            <span
              className="absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md"
              style={{
                background: product.badgeColor,
                fontFamily: "'DM Sans', 'Inter', sans-serif",
                letterSpacing: '0.03em',
              }}
            >
              {product.badge}
            </span>

            {/* Discount badge */}
            {discount && (
              <span
                className="absolute top-4 right-14 text-white text-[10px] font-extrabold px-2 py-1 rounded-lg"
                style={{ background: '#ef4444' }}
              >
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Content */}
          <div className="px-5 sm:px-7 pb-7 pt-3 relative z-10">
            {/* Brand + Category row */}
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
              >
                {product.brand}
              </span>
              <span className="flex items-center gap-1 text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                <Tag size={8} />
                {product.categoryLabel}
              </span>
            </div>

            {/* Name */}
            <h2
              className="text-slate-900 font-bold text-xl sm:text-2xl leading-snug mb-3"
              style={{ fontFamily: "'Lora', 'Georgia', serif" }}
            >
              {product.name}
            </h2>

            {/* Rating row */}
            {product.rating && (
              <div className="mb-4">
                <StarRow rating={product.rating} reviews={product.reviews} />
              </div>
            )}

            {/* Price block */}
            {product.price && (
              <div
                className="flex items-center gap-3 p-4 rounded-2xl mb-4"
                style={{ background: '#f8fdf9', border: '1px solid #d1fae5' }}
              >
                <span
                  className="text-2xl font-black text-slate-900"
                  style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
                >
                  ₹{product.price}
                </span>
                {product.mrp && product.mrp > product.price && (
                  <>
                    <span className="text-base text-slate-400 line-through font-medium">₹{product.mrp}</span>
                    <span
                      className="text-xs font-extrabold px-2 py-0.5 rounded-lg"
                      style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}
                    >
                      Save ₹{product.mrp - product.price}
                    </span>
                  </>
                )}
              </div>
            )}

            {/* Description */}
            <p
              className="text-slate-600 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
            >
              {product.description}
            </p>

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1"
                    style={{
                      background: '#f0fdf4',
                      color: '#15803d',
                      border: '1px solid #bbf7d0',
                    }}
                  >
                    <ChevronRight size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <TrustBadge icon={ShieldCheck} label="100% Genuine"  sub="Certified authentic" />
              <TrustBadge icon={Truck}       label="Free Delivery" sub="Orders above ₹499" />
              <TrustBadge icon={RotateCcw}   label="Easy Returns"  sub="7-day hassle-free" />
              <TrustBadge icon={Phone}       label="Expert Advice" sub="Talk to pharmacist" />
            </div>

            {/* Price note */}
            {!product.price && (
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{ background: '#fffbeb', border: '1px solid #fef3c7' }}
              >
                <p
                  className="text-xs text-amber-800 font-semibold"
                  style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
                >
                  💡 <strong>Price on Request</strong> — Call or visit our store for current pricing and availability.
                </p>
              </div>
            )}

            {/* CTA row */}
            <div className="flex gap-3">
              <motion.a
                href="tel:+91"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #10B981, #047857)',
                  boxShadow: '0 4px 15px rgba(16,185,129,0.3)',
                  fontFamily: "'DM Sans', 'Inter', sans-serif",
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(16,185,129,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={15} />
                Call to Order
              </motion.a>
              <motion.button
                onClick={() => setWishlist(!wishlist)}
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  border: wishlist ? '1.5px solid #fda4af' : '1.5px solid #e2e8f0',
                  background: wishlist ? '#fff1f2' : '#f8fafc',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart
                  size={16}
                  fill={wishlist ? '#f43f5e' : 'none'}
                  stroke={wishlist ? '#f43f5e' : '#94a3b8'}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductModal