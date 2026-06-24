'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { MessageCircle } from 'lucide-react'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const whatsapp = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(weddingData.rsvp.message)}`

  return (
    <section id="rsvp" className="relative overflow-hidden py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <FlowerOverlay />
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            {weddingData.rsvpHeading || '☬   Your Presence   ☬'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            RSVP
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>

        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl p-10 text-center"
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px var(--color-glow), 0 20px 50px rgba(0,0,0,0.4)' }}
        >
          <p className="font-serif text-base leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>
            {weddingData.rsvpText || 'We joyfully request the honour of your presence at our wedding celebration.'}
          </p>
          <p className="font-sans text-sm mb-8" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            Please RSVP by {weddingData.rsvpDeadline || weddingData.rsvp.deadline}
          </p>

          <div className="flex justify-center">
            <motion.a
              href={whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wider"
              style={{ background: 'var(--color-accent)', color: '#0e1208', boxShadow: '0 0 24px var(--color-glow-strong)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,160,23,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={16} /> RSVP via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
