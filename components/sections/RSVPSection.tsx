'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { MessageCircle } from 'lucide-react'
import { useWeddingData, useIsPreview } from '@/context/WeddingDataContext'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'
import RSVPModal from '@/components/ui/RSVPModal'
import PartyConfetti from '@/components/ui/PartyConfetti'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const isPreview = useIsPreview()

  const [modalOpen, setModalOpen] = useState(false)
  const [responded, setResponded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('rsvp-responded') === 'true') setResponded(true)
  }, [])

  const handleSend = (guestCount: number, fullMessage: string) => {
    const wa = `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`
    window.open(wa, '_blank')
    setModalOpen(false)
    setResponded(true)
    setShowConfetti(true)
    localStorage.setItem('rsvp-responded', 'true')
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <section id="rsvp" className="relative overflow-hidden py-28 px-6 on-saffron" style={{ background: 'var(--color-surface)' }}>
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
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 40px var(--color-glow), 0 20px 50px rgba(0,0,0,0.06)' }}
        >
          {showConfetti && <PartyConfetti />}
          {responded ? (
            <>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display shimmer-text mb-3" style={{ fontSize: '2rem', lineHeight: 1.4, padding: '0.1em 0' }}>
                Thank You!
              </h3>
              <p className="font-serif text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                Your RSVP has been sent. We can&apos;t wait to celebrate with you!
              </p>
            </>
          ) : (
            <>
              <p className="font-serif text-base leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>
                {weddingData.rsvpText || 'We joyfully request the honour of your presence at our wedding celebration.'}
              </p>
              <p className="font-sans text-sm mb-8" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Please RSVP by {weddingData.rsvpDeadline || weddingData.rsvp.deadline}
              </p>

              <div className="flex justify-center">
                <motion.button
                  onClick={() => isPreview ? setShowPurchaseAlert(true) : setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wider"
                  style={{ background: 'var(--color-accent)', color: '#fff', boxShadow: '0 0 24px var(--color-glow-strong)' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,160,23,0.6)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={16} /> RSVP via WhatsApp
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </div>

      <RSVPModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSend={handleSend}
        defaultMessage={weddingData.rsvp.message}
        brideName={weddingData.brideName}
        groomName={weddingData.groomName}
      />

      {showPurchaseAlert && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} onClick={() => setShowPurchaseAlert(false)}>
          <div className="rounded-2xl p-8 max-w-sm w-full text-center" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} onClick={e => e.stopPropagation()}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-display text-xl mb-3" style={{ color: 'var(--color-text)' }}>Purchase Required</h3>
            <p className="font-sans text-sm mb-6" style={{ color: 'var(--color-muted)' }}>You need to purchase this card to send RSVPs.</p>
            <button onClick={() => setShowPurchaseAlert(false)} className="px-6 py-2.5 rounded-full font-sans text-sm font-semibold" style={{ background: 'var(--color-accent)', color: '#080f1a' }}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
