'use client'
import { motion } from 'framer-motion'

interface Props {
  size?: number
  delay?: number
  className?: string
  style?: React.CSSProperties
  bloom?: boolean
  /** Drop your lotus image at /assets/lotus.webp — replaces SVG petals, keeps all animations */
  imageSrc?: string
}

export default function AnimatedLotus({ size = 120, delay = 0, className = '', style, bloom = true, imageSrc }: Props) {
  const c = size / 2
  const r = size / 2
  const clipId = `lotus-clip-${size}-${Math.round(delay * 10)}`

  const outerPetals = Array.from({ length: 16 }, (_, i) => i * (360 / 16))
  const innerPetals = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5)

  return (
    <motion.svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden
      initial={bloom ? { scale: 0.3, opacity: 0 } : undefined}
      animate={bloom ? { scale: 1, opacity: 1 } : undefined}
      transition={bloom ? { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] } : undefined}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx={c} cy={c} r={r * 0.42} />
        </clipPath>
      </defs>

      {/* Water ripple rings — always present regardless of image/svg mode */}
      {[1.6, 1.9, 2.2].map((rMult, i) => (
        <motion.circle
          key={`ripple-${i}`}
          cx={c} cy={c}
          r={r * rMult * 0.35}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.4"
          opacity={0}
          animate={{ opacity: [0, 0.18, 0], r: [r * 0.35, r * rMult * 0.42, r * rMult * 0.5] }}
          transition={{ duration: 3.5, delay: delay + i * 0.7, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {imageSrc ? (
        /* ── Image mode: your lotus.webp fills the bloom area ── */
        <>
          {/* Green sepals peeking behind */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.ellipse
              key={`sepal-${i}`}
              cx={c} cy={c}
              rx={r * 0.07} ry={r * 0.22}
              fill="var(--color-accent3)"
              opacity={0.5}
              transform={`rotate(${deg} ${c} ${c}) translate(0 ${-r * 0.18})`}
              initial={bloom ? { scaleY: 0 } : undefined}
              animate={bloom ? { scaleY: 1 } : undefined}
              transition={{ duration: 0.8, delay: delay + 0.2 + i * 0.05 }}
            />
          ))}

          {/* Lotus image — clipped to circle, bloom reveals it */}
          <motion.image
            href={imageSrc}
            x={c - r * 0.44}
            y={c - r * 0.44}
            width={r * 0.88}
            height={r * 0.88}
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
            initial={bloom ? { opacity: 0, scale: 0.4 } : undefined}
            animate={bloom ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 1.0, delay: delay + 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Gold ring around image */}
          <motion.circle
            cx={c} cy={c} r={r * 0.43}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.8"
            opacity={0.45}
            initial={bloom ? { scale: 0, opacity: 0 } : undefined}
            animate={bloom ? { scale: 1, opacity: 0.45 } : undefined}
            transition={{ duration: 0.6, delay: delay + 1.0 }}
          />
        </>
      ) : (
        /* ── SVG mode: hand-drawn Pichwai lotus ── */
        <>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.ellipse key={`sepal-${i}`} cx={c} cy={c} rx={r * 0.07} ry={r * 0.22}
              fill="var(--color-accent3)" opacity={0.55}
              transform={`rotate(${deg} ${c} ${c}) translate(0 ${-r * 0.18})`}
              initial={bloom ? { scaleY: 0 } : undefined}
              animate={bloom ? { scaleY: 1 } : undefined}
              transition={{ duration: 0.8, delay: delay + 0.2 + i * 0.05 }}
            />
          ))}

          {outerPetals.map((deg, i) => (
            <motion.ellipse key={`outer-${i}`} cx={c} cy={c} rx={r * 0.09} ry={r * 0.34}
              fill={i % 2 === 0 ? 'var(--color-accent2)' : '#b5304a'} opacity={0.72}
              transform={`rotate(${deg} ${c} ${c}) translate(0 ${-r * 0.26})`}
              initial={bloom ? { scaleY: 0, opacity: 0 } : undefined}
              animate={bloom ? { scaleY: 1, opacity: 0.72 } : undefined}
              transition={{ duration: 0.9, delay: delay + 0.4 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          {outerPetals.map((deg, i) => (
            <motion.ellipse key={`outer-stroke-${i}`} cx={c} cy={c} rx={r * 0.09} ry={r * 0.34}
              fill="none" stroke="var(--color-accent)" strokeWidth="0.5" opacity={0.3}
              transform={`rotate(${deg} ${c} ${c}) translate(0 ${-r * 0.26})`}
              initial={bloom ? { scaleY: 0 } : undefined}
              animate={bloom ? { scaleY: 1 } : undefined}
              transition={{ duration: 0.9, delay: delay + 0.4 + i * 0.03 }}
            />
          ))}

          {innerPetals.map((deg, i) => (
            <motion.ellipse key={`inner-${i}`} cx={c} cy={c} rx={r * 0.1} ry={r * 0.22}
              fill="#e8b860" opacity={0.8}
              transform={`rotate(${deg} ${c} ${c}) translate(0 ${-r * 0.13})`}
              initial={bloom ? { scaleY: 0, opacity: 0 } : undefined}
              animate={bloom ? { scaleY: 1, opacity: 0.8 } : undefined}
              transition={{ duration: 0.7, delay: delay + 0.7 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          <motion.circle cx={c} cy={c} r={r * 0.18} fill="var(--color-accent)" opacity={0.9}
            initial={bloom ? { scale: 0 } : undefined}
            animate={bloom ? { scale: 1 } : undefined}
            transition={{ duration: 0.5, delay: delay + 1.1 }}
          />

          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2
            return (
              <motion.circle key={`stamen-${i}`}
                cx={c + Math.cos(a) * r * 0.1}
                cy={c + Math.sin(a) * r * 0.1}
                r={r * 0.025} fill="#f0d080" opacity={0.9}
                initial={bloom ? { scale: 0 } : undefined}
                animate={bloom ? { scale: 1 } : undefined}
                transition={{ duration: 0.3, delay: delay + 1.2 + i * 0.02 }}
              />
            )
          })}

          <circle cx={c} cy={c} r={r * 0.06} fill="#f5e8b0" opacity={0.95} />
        </>
      )}
    </motion.svg>
  )
}
