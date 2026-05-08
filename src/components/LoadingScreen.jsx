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
              style={{ background: 'radial-gradient(circle, #0284C7, transparent)' }} />
            <div className="blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.03]"
              style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'transparent', border: '1px solid rgba(2,132,199,0.2)' }}
                animate={{ scale: [1, 1.5, 1.8], opacity: [0.6, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'transparent', border: '1px solid rgba(2,132,199,0.1)' }}
                animate={{ scale: [1, 1.3, 1.6], opacity: [0.5, 0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />

              {/* Cross icon */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0284C7, #0369a1)', boxShadow: '0 20px 40px -10px rgba(2,132,199,0.4)' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="14" y="4" width="8" height="28" rx="2" fill="white" />
                  <rect x="4" y="14" width="28" height="8" rx="2" fill="white" />
                </svg>
              </div>
            </motion.div>

            {/* Store name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl font-semibold gradient-text mb-1">
                Laxmi Medical
              </h1>
              <p className="font-mono text-xs tracking-widest text-medical-blue uppercase font-bold">
                Healthcare Store · Udaipur
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '200px' }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-0.5 bg-medical-blue/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #0284C7, #7dd3fc)',
                    boxShadow: '0 0 8px rgba(2,132,199,0.3)',
                    width: `${Math.min(progress, 100)}%`,
                    transition: 'width 0.1s ease',
                  }}
                />
              </div>
              <p className="text-center font-mono text-xs text-medical-blue mt-2 font-bold">
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
