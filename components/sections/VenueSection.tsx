'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'

export default function VenueSection() {
  const weddingData = useWeddingData()

  return (
    <section id="venue" className="relative overflow-hidden py-28 px-6" style={{ background: 'var(--color-surface2)' }}>
      <FlowerOverlay />
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Find Us &nbsp; ✦
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Venue
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>

        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px rgba(200,146,42,0.08), 0 20px 50px rgba(0,0,0,0.06)' }}
        >

          {/* Header */}
          <div className="py-12 px-8 text-center" style={{ background: 'linear-gradient(135deg, var(--color-surface2), var(--color-surface))' }}>
            <div className="text-5xl mb-4 float-slow">🏛️</div>
            <h3 className="font-display text-3xl glow-text mb-2" style={{ color: 'var(--color-accent)' }}>{weddingData.venue.name}</h3>
            <p className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>{weddingData.venue.address}</p>
          </div>

          <div className="px-8 py-8 text-center">
            <motion.a
              href={weddingData.venue.mapUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-sans text-sm font-semibold tracking-wider uppercase"
              style={{ background: 'var(--color-accent)', color: '#fff', boxShadow: '0 0 24px rgba(200,146,42,0.4)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(200,146,42,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              📍 Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
