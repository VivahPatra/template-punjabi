'use client'
import { motion } from 'framer-motion'

interface PondLotus {
  x: string
  y: string
  size: number
  delay: number
  opacity: number
}

const LOTUSES: PondLotus[] = [
  { x: '2%',  y: '60%', size: 70,  delay: 0.1, opacity: 0.50 },
  { x: '8%',  y: '75%', size: 90,  delay: 0.2, opacity: 0.55 },
  { x: '15%', y: '85%', size: 60,  delay: 0.8, opacity: 0.40 },
  { x: '25%', y: '70%', size: 80,  delay: 0.4, opacity: 0.48 },
  { x: '35%', y: '82%', size: 110, delay: 0.5, opacity: 0.50 },
  { x: '45%', y: '75%', size: 75,  delay: 1.0, opacity: 0.45 },
  { x: '55%', y: '85%', size: 65,  delay: 0.7, opacity: 0.42 },
  { x: '65%', y: '72%', size: 95,  delay: 0.3, opacity: 0.55 },
  { x: '75%', y: '82%', size: 55,  delay: 0.9, opacity: 0.40 },
  { x: '85%', y: '68%', size: 85,  delay: 0.6, opacity: 0.50 },
  { x: '93%', y: '80%', size: 70,  delay: 1.1, opacity: 0.45 },
  { x: '98%', y: '90%', size: 50,  delay: 1.3, opacity: 0.35 },
]

const PADS = [
  { x: '3%',  y: '82%', r: 24, delay: 0.0, flip: false },
  { x: '12%', y: '78%', r: 28, delay: 0.1, flip: false },
  { x: '22%', y: '88%', r: 20, delay: 0.6, flip: true },
  { x: '35%', y: '86%', r: 22, delay: 0.4, flip: true },
  { x: '48%', y: '92%', r: 26, delay: 0.2, flip: false },
  { x: '58%', y: '84%', r: 32, delay: 0.7, flip: false },
  { x: '70%', y: '90%', r: 22, delay: 0.5, flip: true },
  { x: '82%', y: '82%', r: 26, delay: 0.3, flip: true },
  { x: '92%', y: '88%', r: 20, delay: 0.9, flip: false },
  { x: '97%', y: '78%', r: 24, delay: 1.0, flip: false },
]

export default function LotusPond({ className = '' }: { className?: string; lotusImage?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '40%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(10,30,50,0.6) 40%, rgba(8,20,38,0.85) 100%)',
        }}
      />

      {[62, 70, 78, 86, 94].map((pct, i) => (
        <motion.div
          key={`water-line-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${pct}%`, background: 'linear-gradient(to right, transparent, rgba(200,146,42,0.12), transparent)' }}
          animate={{ scaleX: [0.8, 1.05, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        />
      ))}

      {/* Pond elements scaled per breakpoint: 45% mobile, 65% tablet, 100% desktop */}
      <div className="absolute inset-0">
        {PADS.map((pad, i) => (
          <motion.div
            key={`pad-${i}`}
            className="absolute"
            style={{ left: pad.x, top: pad.y, transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1, delay: pad.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/assets/leaf.png" alt=""
              style={{ width: pad.r * 2, height: 'auto', filter: 'brightness(1)', transform: pad.flip ? 'scaleX(-1)' : undefined }} />
          </motion.div>
        ))}

        {LOTUSES.map((l, i) => (
          <motion.div
            key={`lotus-${i}`}
            className="absolute"
            style={{
              left: l.x,
              top: l.y,
              transform: 'translate(-50%, -50%)',
              opacity: l.opacity,
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          >
            <img
              src={i % 2 === 0 ? '/assets/lotus1.png' : '/assets/lotus3.png'}
              alt=""
              style={{ width: l.size, height: 'auto', filter: 'brightness(1)' }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
