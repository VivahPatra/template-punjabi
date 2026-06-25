'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { useWeddingData } from '@/context/WeddingDataContext'
import { formatShortDate } from '@/lib/utils'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'

export default function InvitationSection() {
  const weddingData = useWeddingData()

  return (
    <section id="invitation" className="relative overflow-hidden py-28 px-6 on-saffron" style={{ background: 'var(--color-surface)' }}>
      <FlowerOverlay />
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            {weddingData.invitationSubtitle || '✦   Shubh Vivah   ✦'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {weddingData.invitationHeading || 'The Invitation'}
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>

        {/* Invitation card */}
        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          data-cursor-glow
          className="relative rounded-2xl overflow-hidden"
          style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-strong)', boxShadow: '0 0 60px rgba(200,146,42,0.12), 0 20px 60px rgba(0,0,0,0.08)' }}
          whileHover={{ boxShadow: '0 0 80px rgba(200,146,42,0.3), 0 0 40px rgba(200,146,42,0.2), 0 20px 60px rgba(0,0,0,0.08)' }}
          transition={{ duration: 0.4 }}
        >

          {/* Inner gold border */}
          <div className="absolute inset-4 rounded-xl pointer-events-none" style={{ border: '0.5px solid rgba(200,146,42,0.2)' }} />

          {/* Card header */}
          <div className="py-12 px-8 text-center" style={{ background: 'linear-gradient(160deg, #c85a18 0%, #e87830 50%, #d06828 100%)' }}>
            {/* Ik Onkar */}
            <div className="flex flex-col items-center mb-4">
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="ganesha-backdrop" style={{ position: 'absolute', inset: -8, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.7) 0%, rgba(212,160,23,0.3) 50%, transparent 75%)', filter: 'blur(12px)' }} />
                <span className="font-display" style={{ fontSize: '3.5rem', position: 'relative', zIndex: 1, lineHeight: 1.4, paddingTop: '0.2em', color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>ੴ</span>
              </div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase mt-3" style={{ color: '#fdf0d5' }}>
                {weddingData.invitationBlessing || 'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ'}
              </p>
            </div>

            {/* Gold kasavu-style rule */}
            <svg viewBox="0 0 280 12" width="280" className="mx-auto mb-6" aria-hidden>
              <line x1="0" y1="6" x2="120" y2="6" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
              <rect x="123" y="2.5" width="7" height="7" fill="var(--color-accent)" opacity="0.65" transform="rotate(45 126.5 6)" />
              <rect x="133" y="3" width="8" height="8" fill="var(--color-accent2)" opacity="0.5" transform="rotate(45 137 7)" />
              <rect x="143" y="2.5" width="7" height="7" fill="var(--color-accent)" opacity="0.65" transform="rotate(45 146.5 6)" />
              <line x1="154" y1="6" x2="280" y2="6" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
              <line x1="0" y1="9.5" x2="280" y2="9.5" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.18" />
            </svg>

            <h3 className="font-display" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              {weddingData.brideName}
            </h3>
            {weddingData.brideParents && (
              <p className="font-sans text-xs tracking-wide mt-1 mb-2" style={{ color: '#fdf0d5' }}>
                Daughter of {weddingData.brideParents}
              </p>
            )}
            <p className="font-serif italic text-xl mt-2 mb-2" style={{ color: '#fde8a0', opacity: 0.8 }}>&amp;</p>
            <h3 className="font-display" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              {weddingData.groomName}
            </h3>
            {weddingData.groomParents && (
              <p className="font-sans text-xs tracking-wide mt-1" style={{ color: '#fdf0d5' }}>
                Son of {weddingData.groomParents}
              </p>
            )}

            {/* Bottom rule */}
            <svg viewBox="0 0 280 12" width="280" className="mx-auto mt-6 mb-1" aria-hidden>
              <line x1="0" y1="6" x2="120" y2="6" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
              <rect x="123" y="2.5" width="7" height="7" fill="var(--color-accent)" opacity="0.65" transform="rotate(45 126.5 6)" />
              <rect x="133" y="3" width="8" height="8" fill="var(--color-accent2)" opacity="0.5" transform="rotate(45 137 7)" />
              <rect x="143" y="2.5" width="7" height="7" fill="var(--color-accent)" opacity="0.65" transform="rotate(45 146.5 6)" />
              <line x1="154" y1="6" x2="280" y2="6" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
              <line x1="0" y1="9.5" x2="280" y2="9.5" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.18" />
            </svg>
          </div>

          {/* Invitation text */}
          <div className="px-10 py-10 text-center">
            <p className="font-serif text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {weddingData.invitationText}
            </p>
            <LotusDivider className="my-8" />
            <p className="font-sans text-sm tracking-widest uppercase" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
              {formatShortDate(weddingData.weddingDate)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
