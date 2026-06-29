'use client'
import { useEffect, useState } from 'react'

interface Petal {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  rotation: number
}

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

export default function FloralPetals({ count = 20 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: seededRand(i * 7) * 100,
        size: 8 + seededRand(i * 3) * 14,
        delay: -(seededRand(i * 5) * 10),
        duration: 8 + seededRand(i * 11) * 9,
        rotation: seededRand(i * 13) * 360,
      }))
    )
  }, [count])

  if (!petals.length) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden>
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.x}%`,
            animation: `petalDrop ${p.duration}s ${p.delay}s ease-in infinite`,
          }}
        >
          <img src="/assets/leaf.webp" alt="" style={{ width: p.size * 2, height: 'auto', opacity: 0.65, transform: `rotate(${p.rotation}deg)`, filter: 'brightness(1.3) hue-rotate(-10deg) saturate(1.4)' }} />
        </div>
      ))}
    </div>
  )
}
