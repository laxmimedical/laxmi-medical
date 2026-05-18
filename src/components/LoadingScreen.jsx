import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + Math.random() * 12 + 4
      })
    }, 80)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#FFFFFF' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.05]"
              style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} />
            <div className="blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.03]"
              style={{ background: 'radial-gradient(circle, #34D399, transparent)' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center gap-6"
            >
              <div className="relative">
                {/* Pulsing rings */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
                  style={{ background: 'transparent', border: '1px solid rgba(16,185,129,0.2)' }}
                  animate={{ scale: [1, 1.5, 1.8], opacity: [0.6, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-2 border-emerald-500/10 bg-white p-3 shadow-2xl relative z-10">
                  <img 
                    src="/icon.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h1 className="font-display text-4xl font-bold tracking-tight text-slate-800 mb-1">
                  Laxmi <span className="text-emerald-500">Medical</span>
                </h1>
                <p className="font-mono text-xs tracking-[0.4em] text-theme-emerald uppercase font-black">
                  Udaipur · Trusted Healthcare
                </p>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '200px' }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-0.5 bg-theme-emerald/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #10B981, #6EE7B7)',
                    boxShadow: '0 0 8px rgba(16,185,129,0.3)',
                    width: `${Math.min(progress, 100)}%`,
                    transition: 'width 0.1s ease',
                  }}
                />
              </div>
              <p className="text-center font-mono text-xs text-theme-emerald mt-2 font-bold">
                {Math.min(Math.round(progress), 100)}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
