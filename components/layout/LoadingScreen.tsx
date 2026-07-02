'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    let frame: number
    const start = performance.now()
    const duration = 2500
    const tick = (now: number) => {
      const elapsed = now - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setPct(next)
      if (next < 100) { frame = requestAnimationFrame(tick) }
      else { onComplete() }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Spinning Khanda mandala */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        {/* Outer ring CW */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 160 160" width="160" height="160" aria-hidden>
            <circle cx="80" cy="80" r="72" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.25" strokeDasharray="4 6" />
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <rect key={i} x="78" y="6" width="4" height="4"
                fill={i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent3)'}
                opacity="0.6"
                transform={`rotate(${deg} 80 80)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Middle ring CCW */}
        <motion.div
          className="absolute"
          style={{ width: 110, height: 110 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 110 110" width="110" height="110" aria-hidden>
            <circle cx="55" cy="55" r="48" fill="none" stroke="var(--color-accent2)" strokeWidth="0.6" opacity="0.2" strokeDasharray="6 4" />
            {[0,36,72,108,144,180,216,252,288,324].map((deg, i) => (
              <rect key={i} x="53" y="5" width="4" height="4"
                fill={i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent2)'}
                opacity="0.5"
                transform={`rotate(${deg} 55 55)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Center — Ik Onkar */}
        <motion.div
          className="relative z-10 font-display"
          style={{ fontSize: '3.5rem', color: 'var(--color-accent)', filter: 'drop-shadow(0 0 20px var(--color-glow-strong))' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ੴ
        </motion.div>
      </div>

      {/* Line draw animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-px mb-6"
        style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }}
      />

      <motion.p
        className="font-display text-xl tracking-widest"
        style={{ color: 'var(--color-accent)', opacity: 0.7 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ☬
      </motion.p>
  
      {/* Percentage */}
      <motion.p
        className="font-sans text-xs tracking-[0.3em] mt-4"
        style={{ color: 'var(--color-accent)', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.3 }}
      >
        {pct}%
      </motion.p>
  </motion.div>
  )
}
