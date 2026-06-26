'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import LotusDivider from '@/components/ui/LotusDivider'
import { useWeddingData } from '@/context/WeddingDataContext'
import type { WeddingEvent } from '@/types/wedding.types'
import { fadeUp, staggerContainer } from '@/lib/animations'

function EventNode({
  event,
  isHero = false,
  delay = 0,
}: {
  event: WeddingEvent
  isHero?: boolean
  delay?: number
}) {
  const color = event.color || 'var(--color-accent)'
  const circleSize = isHero ? 200 : 160
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(event.venue + ', ' + event.venueAddress)}`

  return (
    <motion.article
      data-cursor-glow
      className="flex flex-col items-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative" style={{ width: circleSize, height: circleSize }}>
        {/* Base glow halo */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{ boxShadow: `0 0 20px 6px ${color}33` }}
        />
        {/* Hover glow intensifier */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ boxShadow: `0 0 60px 22px ${color}55` }}
        />

        {/* Dashed ring — spins on hover */}
        <div
          className="absolute rounded-full group-hover:[animation:spin_6s_linear_infinite]"
          style={{ inset: -3, border: `1.5px dashed ${color}`, opacity: 0.5 }}
        />

        {/* Solid border */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${color}`, opacity: 0.6 }}
        />

        {/* Image or emoji */}
        {event.image ? (
          <img
            src={event.image}
            alt={event.name}
            className="absolute inset-0 rounded-full object-cover"
            style={{ width: '100%', height: '100%', filter: 'brightness(1) saturate(1)' }}
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${color}22 0%, ${color}08 100%)`,
              fontSize: isHero ? 44 : 34,
            }}
          >
            {event.emoji}
          </div>
        )}

        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, transparent 50%, ${color}18 100%)` }}
        />
      </div>

      {/* Name + date */}
      <div className="text-center mt-3">
        <p
          className="font-display tracking-wide glow-text"
          style={{ color: 'var(--color-text)', fontSize: isHero ? '1.25rem' : '1rem' }}
        >
          {event.name}
        </p>
        <p
          className="font-sans text-xs tracking-widest mt-0.5"
          style={{ color, opacity: 0.7 }}
        >
          {event.date.split(',')[0]} · {event.time}
        </p>
      </div>

      {/* Detail panel — always visible */}
      <div
        className="text-center mt-3 rounded-xl px-4 py-4"
        style={{
          maxWidth: 180,
          background: 'var(--color-bg)',
          border: `1.5px solid ${color}44`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px ${color}15`,
        }}
      >
        <p className="font-serif text-sm" style={{ color: 'var(--color-text)', opacity: 0.85 }}>
          {event.venue}
        </p>
        <p className="font-sans text-xs mt-1" style={{ color: 'var(--color-muted)', opacity: 0.7 }}>
          {event.venueAddress.split(',')[0]}
        </p>
        {event.description && (
          <p className="font-serif text-xs italic mt-1.5" style={{ color: 'var(--color-muted)', opacity: 0.65 }}>
            {event.description}
          </p>
        )}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 px-4 py-2 rounded-full font-sans text-xs font-semibold whitespace-nowrap tracking-wider transition-all hover:opacity-90"
          style={{ background: 'var(--color-surface)', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          📍 Get Directions
        </a>
      </div>
    </motion.article>
  )
}

export default function EventsSection() {
  const weddingData = useWeddingData()
  const events = weddingData.events
  const half = Math.ceil(events.length / 2)
  const row1 = events.slice(0, half)
  const row2 = events.slice(half)

  return (
    <section id="events" className="relative overflow-hidden py-28 px-6 relative overflow-hidden" style={{ background: 'var(--color-surface2)' }}>
      <FlowerOverlay />
      <img src="/assets/gurud.png" alt="" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} className="w-[120px] sm:w-[170px] md:w-[220px]" style={{ position: 'absolute', bottom: 24, right: 0, height: 'auto', opacity: 0.65, filter: 'brightness(1.2)', pointerEvents: 'none' }} />
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs tracking-[0.4em] uppercase mb-4 glow-pulse"
            style={{ color: 'var(--color-accent)', opacity: 0.7 }}
          >
            ✦ &nbsp; The Celebrations &nbsp; ✦
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display shimmer-text"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Our <em>Events</em>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <LotusDivider className="mt-6" />
          </motion.div>
        </motion.div>

        {/* Event grid */}
        <div className="relative">
          {/* Decorative connecting path */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 900 200">
              <path
                d="M 150 60 Q 450 140 750 60"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.8"
                opacity="0.18"
                strokeDasharray="4 6"
              />
            </svg>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 md:relative md:z-10">
            {row1.map((ev, i) => (
              <EventNode key={ev.id} event={ev} delay={i * 0.1} />
            ))}
          </div>

          {/* Row 2 — centered on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-10 md:gap-20 mt-8 md:mt-10 md:relative md:z-10">
            {row2.map((ev, i) => (
              <EventNode
                key={ev.id}
                event={ev}
                isHero={ev.id === 'wedding'}
                delay={0.15 + i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="flex justify-center mt-14" aria-hidden>
          <svg viewBox="0 0 600 24" width="400" height="24">
            <path d="M0,12 Q150,0 300,12 Q450,24 600,12" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.18"/>
            <path d="M0,16 Q150,4 300,16 Q450,28 600,16" fill="none" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.12"/>
            <circle cx="300" cy="12" r="3" fill="var(--color-accent)" opacity="0.35"/>
            <circle cx="150" cy="6" r="2" fill="var(--color-accent)" opacity="0.2"/>
            <circle cx="450" cy="18" r="2" fill="var(--color-accent)" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
