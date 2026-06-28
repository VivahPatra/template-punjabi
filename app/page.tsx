'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { WeddingDataProvider } from '@/context/WeddingDataContext'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import FloralPetals from '@/components/ui/FloralPetals'
import ShowerDivider from '@/components/ui/ShowerDivider'
import HeroSection from '@/components/sections/HeroSection'
import InvitationSection from '@/components/sections/InvitationSection'
import EventsSection from '@/components/sections/EventsSection'
import CoupleStory from '@/components/sections/CoupleStory'
import GallerySection from '@/components/sections/GallerySection'
import VenueSection from '@/components/sections/VenueSection'
import RSVPSection from '@/components/sections/RSVPSection'
import CountdownSection from '@/components/sections/CountdownSection'
import ShowcaseSection from '@/components/sections/ShowcaseSection'
import FooterSection from '@/components/sections/FooterSection'
import SectionGate from '@/components/ui/SectionGate'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <WeddingDataProvider>
      <CustomCursor />
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <FloralPetals count={10} />
          <FloatingFABs />
          <div className="relative overflow-x-hidden">
            <main>
              <SectionGate name="hero">
                <HeroSection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="invitation">
                <InvitationSection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="events">
                <EventsSection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="coupleStory">
                <CoupleStory />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="gallery">
                <GallerySection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="venue">
                <VenueSection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="rsvp">
                <RSVPSection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="countdown">
                <CountdownSection />
              </SectionGate>
              <ShowerDivider />

              <SectionGate name="showcase">
                <ShowcaseSection />
              </SectionGate>

              <SectionGate name="footer">
                <FooterSection />
              </SectionGate>
            </main>
          </div>
        </>
      )}
    </WeddingDataProvider>
  )
}
