'use client'
import { motion } from 'framer-motion'
import { useEditMode } from '@/context/EditModeContext'
import LotusDivider from '@/components/ui/LotusDivider'
import EditableText from '@/components/ui/EditableText'

export default function FooterSection() {
  const { data: weddingData } = useEditMode()

  return (
    <footer id="footer" className="pt-20 px-6 text-center relative overflow-hidden" style={{ background: 'var(--color-surface2)' }}>
      <div className="max-w-2xl mx-auto relative z-10">
        <LotusDivider className="mb-10" />

        <p className="shimmer-text font-display mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          <EditableText field="brideName">{weddingData.brideName}</EditableText> &amp; <EditableText field="groomName">{weddingData.groomName}</EditableText>
        </p>
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
          20 December 2026
        </p>

        <EditableText field="tagline" tag="p" className="font-serif italic text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
          {weddingData.tagline}
        </EditableText>

        <EditableText field="hashtag" tag="p" className="font-sans text-xs tracking-widest" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
          {weddingData.hashtag}
        </EditableText>

        <LotusDivider className="mt-10" />

        <p className="font-sans text-xs mt-8 mb-4 opacity-30" style={{ color: 'var(--color-muted)' }}>
          Made with ❤️ · Balle Balle!
        </p>
      </div>

      {/* Floating diyas at bottom */}
      <div className="relative w-full" style={{ height: 120 }}>
        <style>{`
          @keyframes footerDiyaFloat {
            0%, 100% { transform: translateY(0) rotate(-1deg); }
            50%       { transform: translateY(-4px) rotate(1deg); }
          }
        `}</style>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(26,14,30,0.6) 30%, rgba(26,14,30,0.85) 100%)',
        }} />
        {[
          { left: '5%',  size: 36, dur: 3.5 },
          { left: '18%', size: 28, dur: 4.0 },
          { left: '32%', size: 40, dur: 3.8 },
          { left: '48%', size: 32, dur: 4.2 },
          { left: '62%', size: 38, dur: 3.6 },
          { left: '76%', size: 30, dur: 4.0 },
          { left: '90%', size: 34, dur: 3.9 },
        ].map((d, i) => (
          <div key={i} style={{ position: 'absolute', left: d.left, top: '30%' }}>
            <div style={{ position: 'relative', width: d.size, animation: `footerDiyaFloat ${d.dur}s ease-in-out ${i * 0.3}s infinite` }}>
              <div style={{
                position: 'absolute', left: '50%', top: '30%', transform: 'translate(-50%, -50%)',
                width: d.size * 1.8, height: d.size * 1.8, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,180,50,0.35) 0%, rgba(232,168,32,0.12) 40%, transparent 70%)',
                filter: 'blur(6px)',
              }} />
              <img src="/assets/floatdiya.png" alt="" className="lantern-glow"
                style={{ position: 'relative', zIndex: 2, width: d.size, height: 'auto', filter: 'brightness(1.3)', opacity: 0.85 }} />
              <div style={{
                position: 'absolute', left: '50%', bottom: d.size * 0.08, transform: 'translateX(-50%)',
                width: d.size * 1.8, height: d.size * 0.25, borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 75%)',
                filter: 'blur(3px)',
              }} />
              <div style={{ position: 'absolute', left: '50%', bottom: d.size * 0.12, transform: 'translateX(-50%)', zIndex: 1 }}>
                <div style={{ width: d.size * 1.2, height: d.size * 0.2, borderRadius: '50%', border: '1px solid rgba(232,168,32,0.25)' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}
