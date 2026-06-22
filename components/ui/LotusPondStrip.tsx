'use client'
import { motion } from 'framer-motion'

interface StripItem { x: string; size: number; delay: number; opacity: number; type: 'lotus' | 'leaf' }

const STRIP_ITEMS: StripItem[] = [
  { x: '4%',  size: 64, delay: 0.1, opacity: 0.5,  type: 'lotus' },
  { x: '14%', size: 46, delay: 0.5, opacity: 0.38, type: 'leaf' },
  { x: '24%', size: 72, delay: 0.2, opacity: 0.52, type: 'lotus' },
  { x: '35%', size: 52, delay: 0.7, opacity: 0.40, type: 'leaf' },
  { x: '46%', size: 80, delay: 0.0, opacity: 0.55, type: 'lotus' },
  { x: '57%', size: 50, delay: 0.6, opacity: 0.40, type: 'leaf' },
  { x: '68%', size: 70, delay: 0.3, opacity: 0.50, type: 'lotus' },
  { x: '79%', size: 44, delay: 0.8, opacity: 0.38, type: 'leaf' },
  { x: '90%', size: 66, delay: 0.4, opacity: 0.50, type: 'lotus' },
]

interface Props {
  bgColor?: string
  lotusImage?: string
}

export default function LotusPondStrip({ bgColor = 'transparent' }: Props) {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ height: 130, background: bgColor }}
      aria-hidden
    >
      {/* Water shimmer lines */}
      {[40, 60, 80].map((pct, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${pct}%`, background: 'linear-gradient(to right, transparent, rgba(200,146,42,0.15), transparent)' }}
          animate={{ scaleX: [0.7, 1.05, 0.7], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
        />
      ))}

      {/* Alternating lotus (big) and leaf (small) */}
      {STRIP_ITEMS.map((l, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: l.x,
            bottom: `-${l.size * 0.1}px`,
            opacity: l.opacity,
          }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
        >
          <img
            src={l.type === 'lotus' ? '/assets/lotus.png' : '/assets/leaf.png'}
            alt=""
            style={{ width: l.size, height: 'auto', filter: 'brightness(1.3)' }}
          />
        </motion.div>
      ))}
    </div>
  )
}
