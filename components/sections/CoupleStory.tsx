'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '@/lib/animations'
import LotusDivider from '@/components/ui/LotusDivider'

export default function CoupleStory() {
  const weddingData = useWeddingData()

  return (
    <section id="story" className="relative overflow-hidden py-28 px-6" style={{ background: 'var(--color-surface)' }}>
      <FlowerOverlay />
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            ✦ &nbsp; Their Journey &nbsp; ✦
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display shimmer-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Our <em>Story</em>
          </motion.h2>
          <LotusDivider className="mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)', opacity: 0.3 }} />

          <div className="space-y-16">
            {weddingData.coupleStory.map((milestone, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                  variants={isLeft ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Desktop: alternate layout */}
                  <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    {/* Image */}
                    {milestone.image && (
                      <motion.div
                        data-cursor-glow
                        className="relative mb-5 rounded-xl overflow-hidden"
                        style={{ height: 220, border: '1px solid var(--color-border)' }}
                        whileHover={{ boxShadow: '0 0 40px rgba(200,146,42,0.3)' }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={milestone.image} alt={milestone.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.75) saturate(0.85)' }} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, var(--color-surface) 100%)' }} />
                      </motion.div>
                    )}
                    {/* Text */}
                    <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-accent)', opacity: 0.65 }}>{milestone.date}</p>
                    <h3 className="font-display text-2xl mb-2 glow-text" style={{ color: 'var(--color-accent)' }}>{milestone.title}</h3>
                    <p className="font-serif text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{milestone.description}</p>
                  </div>

                  {/* Timeline node */}
                  <div className={`hidden md:flex items-center justify-center ${isLeft ? 'order-2' : 'order-1'}`}>
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        className="absolute rounded-full"
                        style={{ width: 60, height: 60, border: '1px solid var(--color-accent)', opacity: 0.25 }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
                        transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                      />
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: 'var(--color-surface2)', border: '1px solid var(--color-border-strong)' }}>
                        {milestone.icon}
                      </div>
                    </div>
                  </div>

                  {/* Mobile: icon visible */}
                  <div className="md:hidden flex items-center gap-3 -mt-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'var(--color-surface2)', border: '1px solid var(--color-border-strong)' }}>
                      {milestone.icon}
                    </div>
                    <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
