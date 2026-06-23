'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { weddingData as defaultData } from '@/data/wedding-data'
import type { WeddingConfig } from '@/types/wedding.types'

const WeddingDataContext = createContext<WeddingConfig>(defaultData)

export function WeddingDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WeddingConfig>(defaultData)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type !== 'VIVAHPATRA_UPDATE') return
      const d = e.data.data
      if (!d) return

      setData((prev) => ({
        ...prev,
        groomName: d.groomName ?? prev.groomName,
        brideName: d.brideName ?? prev.brideName,
        groomParents: d.groomParents ?? prev.groomParents,
        brideParents: d.brideParents ?? prev.brideParents,
        weddingDate: d.weddingDate ? new Date(d.weddingDate) : prev.weddingDate,
        hashtag: d.hashtag ?? prev.hashtag,
        tagline: d.tagline ?? prev.tagline,
        invitationText: d.invitationText ?? prev.invitationText,
        heroImage: d.heroImage ?? prev.heroImage,
        galleryImages: Array.isArray(d.galleryImages) ? d.galleryImages : prev.galleryImages,
        events: Array.isArray(d.events) ? d.events : prev.events,
        coupleStory: Array.isArray(d.coupleStory) ? d.coupleStory : prev.coupleStory,
        familyBride: Array.isArray(d.familyBride) ? d.familyBride : prev.familyBride,
        familyGroom: Array.isArray(d.familyGroom) ? d.familyGroom : prev.familyGroom,
        venue: {
          name: d.venueName ?? prev.venue.name,
          address: d.venueAddress ?? prev.venue.address,
          mapUrl: d.venueMapUrl ?? prev.venue.mapUrl,
        },
        rsvp: {
          whatsappNumber: d.rsvpPhone ?? prev.rsvp.whatsappNumber,
          message: d.rsvpMessage ?? prev.rsvp.message,
          deadline: d.rsvpDeadline ?? prev.rsvp.deadline,
        },
        socialLinks: {
          instagram: d.instagram ?? prev.socialLinks?.instagram,
        },
      }))
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <WeddingDataContext.Provider value={data}>
      {children}
    </WeddingDataContext.Provider>
  )
}

export function useWeddingData() {
  return useContext(WeddingDataContext)
}
