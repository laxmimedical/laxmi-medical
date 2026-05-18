import { useState } from 'react'
import { motion } from 'framer-motion'

/* ─── Skeleton Card ───────────────────────────────────────────── */
export const ProductCardSkeleton = () => (
  <div className="rounded-2xl overflow-hidden bg-white border border-slate-100 animate-pulse">
    <div className="h-48 sm:h-52 bg-slate-100" />
    <div className="p-4 space-y-3">
      <div className="h-2 bg-slate-100 rounded-full w-1/4" />
      <div className="h-4 bg-slate-100 rounded-full w-3/4" />
      <div className="h-3 bg-slate-100 rounded-full w-full" />
      <div className="h-3 bg-slate-100 rounded-full w-2/3" />
    </div>
  </div>
)

/* ─── Product Card ────────────────────────────────────────────── */
const ProductCard = ({ product, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError]   = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{
        border: '1px solid #eaeeea',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 16px 40px rgba(0,0,0,0.09), 0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      {/* ── Image area ── */}
      <div className="relative h-48 sm:h-52 overflow-hidden" style={{ background: '#f8f9f8' }}>
        {/* Shimmer */}
        {!imgLoaded && !imgError && (
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(100deg, #f0f2f0 30%, #f8faf8 50%, #f0f2f0 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.4s infinite',
            }}
          />
        )}

        {/* Product image */}
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{
              objectFit: 'contain',
              padding: '10px',
              opacity: imgLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease, transform 0.5s ease',
            }}
          />
        ) : (
          /* Fallback */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: 'linear-gradient(145deg, #f0fdf4, #e6f9f0)' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(16,185,129,0.12)' }}
            >
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                <rect x="12" y="3" width="6" height="24" rx="3" fill="#10B981" opacity="0.7" />
                <rect x="3" y="12" width="24" height="6" rx="3" fill="#10B981" opacity="0.7" />
              </svg>
            </div>
            <span className="text-[10px] text-emerald-600/80 font-bold uppercase tracking-widest">
              {product.brand}
            </span>
          </div>
        )}

        {/* Category pill — top-left */}
        <span
          className="absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.92)',
            color: '#059669',
            border: '1px solid #d1fae5',
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            letterSpacing: '0.03em',
            backdropFilter: 'blur(6px)',
          }}
        >
          {product.categoryLabel}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-4">
        {/* Brand */}
        <span
          className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1"
          style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
          {product.brand}
        </span>

        {/* Product name */}
        <h3
          className="text-slate-800 font-semibold text-sm leading-snug mb-2 line-clamp-2"
          style={{ fontFamily: "'Lora', 'Georgia', serif" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="text-slate-500 text-xs leading-relaxed line-clamp-3"
          style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
          {product.description}
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0 }
          100% { background-position:  200% 0 }
        }
      `}</style>
    </motion.article>
  )
}

export default ProductCard