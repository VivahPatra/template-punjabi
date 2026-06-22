'use client'
import { motion } from 'framer-motion'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden z-[6]" style={{ background: 'var(--color-bg)' }}>
      <FlowerOverlay />

      {/* Sky rockets — launch from bottom, burst at top */}
      <style>{`
        @keyframes rocketLaunch {
          0%   { transform: translateY(0); opacity: 1; }
          70%  { transform: translateY(-350px); opacity: 1; }
          71%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes rocketTrail {
          0%   { height: 0; opacity: 0; }
          10%  { opacity: 0.6; }
          70%  { height: 80px; opacity: 0.3; }
          71%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes burstSpark {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          70%  { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          75%  { opacity: 1; transform: translate(-50%, -50%) scale(0.5); }
          90%  { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3); }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[
          { x: '15%', burstY: '38%', dur: 3.0, delay: 0, color: '#ffd740' },
          { x: '35%', burstY: '35%', dur: 3.5, delay: 0.8, color: '#ff6b35' },
          { x: '55%', burstY: '40%', dur: 2.8, delay: 1.6, color: '#e8a820' },
          { x: '75%', burstY: '36%', dur: 3.2, delay: 2.4, color: '#c41e3a' },
          { x: '90%', burstY: '42%', dur: 3.0, delay: 3.2, color: '#ffd740' },
          { x: '25%', burstY: '44%', dur: 3.4, delay: 4.0, color: '#f0c850' },
        ].map((r, ri) => (
          <div key={ri}>
            {/* Rocket dot rising */}
            <div style={{
              position: 'absolute', left: r.x, bottom: '10%',
              width: 3, height: 3, borderRadius: '50%',
              background: r.color,
              boxShadow: `0 0 6px ${r.color}`,
              animation: `rocketLaunch ${r.dur}s ease-in ${r.delay}s infinite`,
            }} />
            {/* Trail behind rocket */}
            <div style={{
              position: 'absolute', left: r.x, bottom: '10%',
              width: 1,
              background: `linear-gradient(to top, transparent, ${r.color})`,
              animation: `rocketTrail ${r.dur}s ease-in ${r.delay}s infinite`,
            }} />
            {/* Burst sparks at top */}
            {[...Array(10)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: `calc(${r.x} + ${Math.cos(i * Math.PI / 5) * 50}px)`,
                top: `calc(${r.burstY} + ${Math.sin(i * Math.PI / 5) * 50}px)`,
                width: 4, height: 4, borderRadius: '50%',
                background: i % 3 === 0 ? r.color : i % 3 === 1 ? '#ffd740' : '#ff6b35',
                boxShadow: `0 0 8px ${r.color}`,
                animation: `burstSpark ${r.dur}s ease-out ${r.delay}s infinite`,
              }} />
            ))}
            {/* Center flash */}
            <div style={{
              position: 'absolute', left: r.x, top: r.burstY,
              width: 30, height: 30, borderRadius: '50%',
              background: `radial-gradient(circle, ${r.color}80 0%, transparent 70%)`,
              filter: 'blur(4px)',
              animation: `burstSpark ${r.dur}s ease-out ${r.delay}s infinite`,
            }} />
          </div>
        ))}
      </div>

      <div className="relative w-full" style={{ minHeight: 520 }}>

        {/* Top trapezoid */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(0 0, 100% 0, 65% 18%, 35% 18%)',
          background: 'linear-gradient(to bottom, rgba(15,8,18,1) 0%, rgba(35,18,42,0.8) 100%)',
        }} />

        {/* Bottom trapezoid */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(35% 82%, 65% 82%, 100% 100%, 0 100%)',
          background: 'linear-gradient(to top, rgba(15,8,18,1) 0%, rgba(35,18,42,0.8) 100%)',
        }} />

        {/* Left trapezoid — wider, with shading */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(0 0, 35% 18%, 35% 82%, 0 100%)',
          background: 'linear-gradient(135deg, rgba(10,5,14,1) 0%, rgba(25,12,32,0.95) 30%, rgba(40,22,48,0.7) 70%, rgba(50,28,58,0.5) 100%)',
        }} />
        {/* Left wall inner shadow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          clipPath: 'polygon(0 0, 35% 18%, 35% 82%, 0 100%)',
          background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 60%)',
        }} />

        {/* Right trapezoid — wider, with shading */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(65% 18%, 100% 0, 100% 100%, 65% 82%)',
          background: 'linear-gradient(225deg, rgba(10,5,14,1) 0%, rgba(25,12,32,0.95) 30%, rgba(40,22,48,0.7) 70%, rgba(50,28,58,0.5) 100%)',
        }} />
        {/* Right wall inner shadow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          clipPath: 'polygon(65% 18%, 100% 0, 100% 100%, 65% 82%)',
          background: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 60%)',
        }} />


        {/* Image at bottom of section */}
        <motion.div
          className="absolute z-10 left-0 right-0 flex justify-center" style={{ bottom: -30 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="relative">
            <style>{`
              @keyframes diyaFlicker {
                0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
                30%       { opacity: 0.9; transform: translate(-50%, -50%) scale(1.2); }
                60%       { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
              }
            `}</style>
            <img
              src="/assets/3d.png"
              alt="Anand Karaj Ceremony"
              className="max-w-[160px] sm:max-w-[180px] md:max-w-[220px] block"
              style={{ height: 'auto', filter: 'brightness(1.05) saturate(1.1)' }}
            />
            {/* Hanging light glow */}
            <div style={{ position: 'absolute', left: '50%', top: '28%', width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,220,100,0.8) 0%, rgba(255,180,50,0.3) 40%, transparent 70%)', filter: 'blur(6px)', animation: 'diyaFlicker 2s ease-in-out infinite', pointerEvents: 'none' }} />
            {/* Left back diya */}
            <div style={{ position: 'absolute', left: '22%', top: '52%', width: 24, height: 24, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,200,80,0.7) 0%, rgba(255,160,40,0.2) 50%, transparent 75%)', filter: 'blur(4px)', animation: 'diyaFlicker 2.2s ease-in-out 0.3s infinite', pointerEvents: 'none' }} />
            {/* Right back diya */}
            <div style={{ position: 'absolute', left: '78%', top: '52%', width: 24, height: 24, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,200,80,0.7) 0%, rgba(255,160,40,0.2) 50%, transparent 75%)', filter: 'blur(4px)', animation: 'diyaFlicker 2.4s ease-in-out 0.5s infinite', pointerEvents: 'none' }} />
            {/* Left front diya */}
            <div style={{ position: 'absolute', left: '18%', top: '65%', width: 28, height: 28, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,200,80,0.75) 0%, rgba(255,160,40,0.25) 50%, transparent 75%)', filter: 'blur(5px)', animation: 'diyaFlicker 2.1s ease-in-out 0.7s infinite', pointerEvents: 'none' }} />
            {/* Right front diya */}
            <div style={{ position: 'absolute', left: '82%', top: '65%', width: 28, height: 28, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,200,80,0.75) 0%, rgba(255,160,40,0.25) 50%, transparent 75%)', filter: 'blur(5px)', animation: 'diyaFlicker 2.3s ease-in-out 0.2s infinite', pointerEvents: 'none' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
