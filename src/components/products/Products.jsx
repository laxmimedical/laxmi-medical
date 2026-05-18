import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ChevronDown, Package, SlidersHorizontal } from 'lucide-react'

import { PRODUCTS, CATEGORIES } from './productData.js'
import CategoryTabs from './CategoryTabs.jsx'
import ProductCard, { ProductCardSkeleton } from './ProductCard.jsx'

const PAGE_SIZE = 12

/* ─── Section Header ──────────────────────────────────────────── */
const SectionHeader = () => (
  <div className="text-center mb-10 sm:mb-14">
   

    <motion.h2
      className="text-slate-900 font-bold leading-tight mb-4"
      style={{
        fontSize: 'clamp(26px, 4.5vw, 44px)',
        fontFamily: "'Lora', 'Georgia', serif",
        letterSpacing: '-0.02em',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Our Healthcare Product Range
    </motion.h2>

    <motion.p
      className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.18 }}
    >
      Genuine medicines, supplements, devices and wellness essentials —
      carefully sourced from trusted brands.
    </motion.p>
  </div>
)

/* ─── Empty State ─────────────────────────────────────────────── */
const EmptyState = ({ query, onClear }) => (
  <motion.div
    className="col-span-full flex flex-col items-center justify-center py-16 sm:py-20 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
      style={{ background: '#f1f5f9' }}
    >
      <Package size={26} className="text-slate-400" />
    </div>
    <h3 className="text-slate-700 font-bold text-lg mb-2" style={{ fontFamily: "'Lora', 'Georgia', serif" }}>
      No products found
    </h3>
    <p className="text-slate-400 text-sm mb-6 max-w-xs" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
      {query
        ? `No results for "${query}". Try a different search term.`
        : 'No products in this category yet. Check back soon.'}
    </p>
    <motion.button
      onClick={onClear}
      className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-bold"
      style={{
        background: 'linear-gradient(135deg, #10B981, #065F46)',
        fontFamily: "'DM Sans', 'Inter', sans-serif",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <X size={13} />
      Clear Filters
    </motion.button>
  </motion.div>
)

/* ─── MAIN PRODUCTS SECTION ───────────────────────────────────── */
const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery,    setSearchQuery]     = useState('')
  const [visibleCount,   setVisibleCount]    = useState(PAGE_SIZE)
  const [isLoading,      setIsLoading]       = useState(false)

  const categoryCounts = useMemo(() => {
    const counts = {}
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory
      const matchSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleLoadMore = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount((n) => n + PAGE_SIZE)
      setIsLoading(false)
    }, 500)
  }, [])

  const handleCategoryChange = useCallback((id) => {
    setActiveCategory(id)
    setVisibleCount(PAGE_SIZE)
  }, [])

  const handleSearch = useCallback((val) => {
    setSearchQuery(val)
    setVisibleCount(PAGE_SIZE)
  }, [])

  const clearAll = useCallback(() => {
    setActiveCategory('all')
    setSearchQuery('')
    setVisibleCount(PAGE_SIZE)
  }, [])

  return (
    <>
      <section
        id="products"
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ background: '#fafcfa' }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.18), transparent)' }}
        />

        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(16,185,129,0.04) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(5,150,105,0.04) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Header */}
          <SectionHeader />

          {/* Category Tabs */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            <CategoryTabs
              active={activeCategory}
              onChange={handleCategoryChange}
              counts={categoryCounts}
            />
          </motion.div>

          {/* Search + Filter row */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products, brands, conditions…"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white text-sm text-slate-700 placeholder-slate-400 outline-none"
                style={{
                  fontFamily: "'DM Sans', 'Inter', sans-serif",
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#6ee7b7'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
                }}
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#e2e8f0' }}
                    onClick={() => handleSearch('')}
                  >
                    <X size={9} className="text-slate-600" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Filter icon button */}
            {(activeCategory !== 'all' || searchQuery) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={clearAll}
                className="flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-semibold"
                style={{
                  background: '#fef2f2',
                  color: '#dc2626',
                  border: '1.5px solid #fecaca',
                  fontFamily: "'DM Sans', 'Inter', sans-serif",
                }}
              >
                <X size={12} />
                Clear
              </motion.button>
            )}
          </motion.div>

          {/* Results count */}
          <p
            className="text-xs text-slate-400 mb-5 font-medium flex items-center gap-2"
            style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
          >
            <SlidersHorizontal size={11} className="text-slate-300" />
            {filtered.length === 0 ? (
              'No products found'
            ) : (
              <>
                Showing{' '}
                <span className="text-emerald-600 font-bold">{Math.min(visibleCount, filtered.length)}</span>
                {' '}of{' '}
                <span className="text-slate-700 font-bold">{filtered.length}</span>{' '}
                product{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'all' && (
                  <> in <span className="text-slate-700 font-semibold">
                    {CATEGORIES.find(c => c.id === activeCategory)?.label}
                  </span></>
                )}
              </>
            )}
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            <AnimatePresence mode="wait">
              {visible.length > 0 ? (
                visible.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                  />
                ))
              ) : (
                <EmptyState query={searchQuery} onClear={clearAll} />
              )}
            </AnimatePresence>

            {isLoading && (
              Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={`skel-${i}`} />
              ))
            )}
          </div>

          {/* Load More */}
          {hasMore && !isLoading && (
            <div className="flex justify-center mt-10">
              <motion.button
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm"
                style={{
                  background: '#ffffff',
                  color: '#15803d',
                  border: '1.5px solid #d1fae5',
                  fontFamily: "'DM Sans', 'Inter', sans-serif",
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
                whileHover={{
                  background: '#f0fdf4',
                  borderColor: '#86efac',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <ChevronDown size={16} />
                Load More ({filtered.length - visibleCount} remaining)
              </motion.button>
            </div>
          )}

          {/* Bottom disclaimer */}
          <div
            className="text-center mt-12 pt-7"
            style={{ borderTop: '1px solid #eef2ee' }}
          >
            <p
              className="text-slate-400 text-xs sm:text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
            >
              All products are 100% genuine and sourced directly from authorised distributors.
              <br className="hidden sm:block" />
              Visit our store or call for current pricing and availability.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products