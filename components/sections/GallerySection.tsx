'use client'
import { useState } from 'react'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEditMode } from '@/context/EditModeContext'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'

function imgWidth(span: string | undefined) {
  if (span === 'wide') return 400
  if (span === 'tall') return 210
  return 280
}

export default function GallerySection() {
  const { data: weddingData } = useEditMode()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative overflow-hidden py-28 overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      <FlowerOverlay />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse"
            style={{ color: 'var(--color-accent)', opacity: 0.7 }}>✦ &nbsp; Moments &nbsp; ✦</motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Our <em>Gallery</em>
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>
      </div>

      {/* Horizontal filmstrip -- auto-scrolling */}
      <style>{`
        @keyframes galleryScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="overflow-hidden pb-4">
        <div
          className="flex gap-4"
          style={{ width: 'max-content', animation: 'galleryScroll 30s linear infinite' }}
        >
          {[...weddingData.galleryImages, ...weddingData.galleryImages].map((img, i) => (
            <div
              key={i}
              data-cursor-glow
              className="relative overflow-hidden rounded-xl cursor-pointer group flex-shrink-0"
              style={{
                height: 280,
                width: imgWidth(img.span),
                border: '1px solid var(--color-border)',
              }}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: 'brightness(0.75) saturate(0.9)' }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(200,146,42,0.1), transparent)' }} />
              <div className="absolute top-2 bottom-2 left-2 pointer-events-none opacity-0 group-hover:opacity-35 transition-opacity"
                style={{ width: 1, background: 'var(--color-accent)' }} />
              <div className="absolute top-2 bottom-2 right-2 pointer-events-none opacity-0 group-hover:opacity-35 transition-opacity"
                style={{ width: 1, background: 'var(--color-accent)' }} />
            </div>
          ))}
        </div>
      </div>


      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(8,15,26,0.95)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt=""
              className="max-w-full max-h-full rounded-xl object-contain"
              style={{ border: '1px solid var(--color-border-strong)', boxShadow: '0 0 60px rgba(200,146,42,0.2)' }}
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
