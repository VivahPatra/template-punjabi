'use client'
import { useRef } from 'react'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { formatShortDate } from '@/lib/utils'

export default function HeroSection() {
  const weddingData = useWeddingData()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imgScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.18])
  const imgY     = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
  const goldenScale = useTransform(scrollYProgress, [0, 0.5], [1, 3.5])
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FlowerOverlay />

      {/* Parallax background */}
      <div className="absolute inset-0">
        <motion.img
          src="/assets/palace.png" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
          alt=""
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'center bottom',
            filter: 'brightness(0.35) saturate(0.9)',
            translateX: '-50%',
            scale: imgScale,
            y: imgY,
          }}
        />
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,120,48,0.12) 0%, transparent 60%), linear-gradient(180deg, var(--color-bg) 0%, transparent 30%, transparent 65%, var(--color-bg) 100%)',
          }} />
      </div>

      {/* Phulkari pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-accent) 1px, transparent 1px), radial-gradient(circle, var(--color-accent2) 1px, transparent 1px)',
          backgroundSize: '30px 30px, 45px 45px',
          backgroundPosition: '0 0, 15px 15px',
        }} />

      {/* Glow orbs — turmeric & plum */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute w-96 h-96 rounded-full blur-[140px] float-slow"
          style={{ background: 'rgba(232,168,32,0.12)', top: '10%', left: '5%' }} />
        <div className="absolute w-80 h-80 rounded-full blur-[120px] float-med"
          style={{ background: 'rgba(154,48,112,0.1)', bottom: '15%', right: '5%' }} />
        <div className="absolute w-72 h-72 rounded-full blur-[100px]"
          style={{ background: 'rgba(240,200,80,0.07)', top: '40%', left: '50%' }} />
      </div>

      {/* Decorative border */}
      <div className="absolute inset-3 md:inset-6 pointer-events-none z-20" aria-hidden>
        <div className="absolute inset-0" style={{ border: '2px solid rgba(212,160,23,0.35)' }} />
        <div className="absolute inset-2" style={{ border: '1px solid rgba(212,160,23,0.12)' }} />
      </div>

      {/* Text content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: textY, opacity, scale: textScale }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="font-sans text-xs tracking-[0.4em] uppercase mt-20 mb-8 glow-pulse"
          style={{ color: 'var(--color-accent)', opacity: 0.7 }}
        >
          {weddingData.heroSubtitle || '✦   Sat Sri Akal   ✦'}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-6">
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}>
            {weddingData.groomName}
          </h1>
          <span
            className="block my-3 float-slow font-display"
            style={{ color: 'var(--color-accent2)', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
          >
            &amp;
          </span>
          <h1 className="font-display leading-none shimmer-text" style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}>
            {weddingData.brideName}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
          <span className="font-sans text-sm tracking-[0.25em] uppercase" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
            {formatShortDate(weddingData.weddingDate)}
          </span>
          <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-sans text-base opacity-60 tracking-widest"
          style={{ color: 'var(--color-text)' }}
        >
          {weddingData.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col items-center mt-6" style={{ scale: goldenScale }}>
          <img src="/assets/golden.png" alt="" style={{ width: 200, height: 'auto', opacity: 0.85, filter: 'brightness(1.2)' }} />
          {/* Water reflection */}
          <div style={{ position: 'relative', overflow: 'hidden', height: 160, marginTop: -2 }}>
            <style>{`
              @keyframes reflectionWave {
                0%   { transform: scaleY(-1) translateY(0) skewX(0deg); }
                25%  { transform: scaleY(-1) translateY(-2px) skewX(1.5deg); }
                50%  { transform: scaleY(-1) translateY(0) skewX(0deg); }
                75%  { transform: scaleY(-1) translateY(2px) skewX(-1.5deg); }
                100% { transform: scaleY(-1) translateY(0) skewX(0deg); }
              }
            `}</style>
            <img src="/assets/golden.png" alt="" style={{
              width: 200,
              height: 'auto',
              animation: 'reflectionWave 3s ease-in-out infinite',
              opacity: 0.4,
              filter: 'brightness(0.7) blur(1.5px) contrast(0.8)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
            }} />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-2"
          style={{ opacity: 0.4 }}
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)' }}>Scroll</span>
          <motion.div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Water body — bottom of hero, matching golden reflection style */}
      <div className="absolute bottom-10 left-3 right-3 md:bottom-16 md:left-6 md:right-6 pointer-events-none overflow-hidden" style={{ height: '35%' }} aria-hidden>
        <style>{`
          @keyframes diyaFloat {
            0%, 100% { transform: translateY(0) rotate(-1deg); }
            50%       { transform: translateY(-4px) rotate(1deg); }
          }
          @keyframes diyaDrift {
            0%   { transform: translateX(0); }
            100% { transform: translateX(30px); }
          }
          @keyframes diyaGlow {
            0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
            50%       { opacity: 0.9; transform: translate(-50%, -50%) scale(1.15); }
          }
        `}</style>
        {/* Water gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(232,120,48,0.3) 15%, rgba(232,120,48,0.55) 40%, rgba(232,120,48,0.8) 70%, var(--color-bg) 100%)',
        }} />
        {/* Floating diyas — scale inward as golden grows */}
        {[
          { left: 'calc(10% + 35px)', top: '20%', size: 18, dur: 3.5, delay: 0, mobile: true },
          { left: '60%', top: '25%', size: 22, dur: 4.0, delay: 0.7, mobile: true },
          { left: '38%', top: '30%', size: 24, dur: 3.8, delay: 1.0, mobile: true },
          { left: '75%', top: '38%', size: 30, dur: 3.6, delay: 0.3, mobile: false },
          { left: '8%',  top: '45%', size: 34, dur: 4.2, delay: 0.9, mobile: true },
          { left: '48%', top: '50%', size: 38, dur: 3.4, delay: 0.5, mobile: true },
          { left: '25%', top: '58%', size: 42, dur: 4.0, delay: 1.2, mobile: false },
          { left: '68%', top: '62%', size: 44, dur: 3.7, delay: 0.2, mobile: true },
          { left: '14%', top: '70%', size: 50, dur: 4.3, delay: 0.6, mobile: true },
          { left: '55%', top: '72%', size: 52, dur: 3.9, delay: 1.1, mobile: false },
          { left: '80%', top: '75%', size: 48, dur: 4.1, delay: 0.4, mobile: false },
          { left: 'calc(35% + 50px)', top: '80%', size: 56, dur: 3.5, delay: 0.8, mobile: true },
        ].map((d, i) => (
          <div key={i} className={d.mobile ? '' : 'hidden sm:block'} style={{ position: 'absolute', left: d.left, top: d.top, animation: `diyaDrift ${20 + i * 3}s linear infinite alternate` }}>
            <div style={{ position: 'relative', width: d.size, animation: `diyaFloat ${d.dur}s ease-in-out ${d.delay}s infinite` }}>
              {/* Glow backdrop */}
              <div style={{
                position: 'absolute', left: '50%', top: '30%', transform: 'translate(-50%, -50%)',
                width: d.size * 1.8, height: d.size * 1.8, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,180,50,0.35) 0%, rgba(232,168,32,0.12) 40%, transparent 70%)',
                filter: 'blur(6px)',
                animation: `diyaGlow ${d.dur}s ease-in-out ${d.delay}s infinite`,
              }} />
              {/* Diya image */}
              <img
                src="/assets/floatdiya.png"
                alt=""
                className="lantern-glow"
                style={{
                  position: 'relative', zIndex: 2,
                  width: d.size,
                  height: 'auto',
                  filter: 'brightness(1.3)',
                  opacity: 0.85,
                }}
              />
              {/* Dark shadow below diya */}
              <div style={{
                position: 'absolute', left: '50%', bottom: d.size * 0.08, transform: 'translateX(-50%)',
                width: d.size * 1.8, height: d.size * 0.25, borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 50%, transparent 75%)',
                filter: 'blur(3px)',
              }} />
              {/* Fixed ripple rings — tighter */}
              <div style={{ position: 'absolute', left: '50%', bottom: d.size * 0.12, transform: 'translateX(-50%)', zIndex: 1 }}>
                <div style={{ width: d.size * 1.2, height: d.size * 0.2, borderRadius: '50%', border: '1px solid rgba(232,168,32,0.25)' }} />
                <div style={{ position: 'absolute', top: -2, left: -5, right: -5, bottom: -2, borderRadius: '50%', border: '0.5px solid rgba(232,168,32,0.12)' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
