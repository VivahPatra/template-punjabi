'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { weddingData as defaultData } from '@/data/wedding-data'
import type { WeddingConfig } from '@/types/wedding.types'

const WeddingDataContext = createContext<WeddingConfig>(defaultData)

/** Editor form data shape sent via postMessage from the showcase editor */
interface EditorFormData {
  groomFirst?: boolean
  groomName?: string
  brideName?: string
  groomParents?: string
  brideParents?: string
  weddingDate?: string
  hashtag?: string
  tagline?: string
  heroSubtitle?: string
  invitationHeading?: string
  invitationSubtitle?: string
  invitationBlessing?: string
  invitationText?: string
  rsvpHeading?: string
  rsvpText?: string
  heroImage?: string
  backgroundMusic?: string
  galleryImages?: Array<{ src: string; alt?: string; span?: string }>
  events?: Array<{
    id: string
    name: string
    emoji?: string
    image?: string
    date: string
    time: string
    venue: string
    venueAddress: string
    description?: string
    color?: string
    hidden?: boolean
  }>
  coupleStory?: Array<{
    date: string
    title: string
    description: string
    icon?: string
    image?: string
  }>
  familyBride?: Array<{ name: string; relation: string; photo?: string; side?: string }>
  familyGroom?: Array<{ name: string; relation: string; photo?: string; side?: string }>
  venueName?: string
  venueAddress?: string
  venueMapUrl?: string
  rsvpPhone?: string
  rsvpMessage?: string
  rsvpDeadline?: string
  instagram?: string
  infoCards?: Array<{ icon?: string; title?: string; description?: string }>
  sections?: Record<string, unknown>
}

/** Only override a string field when the incoming value is non-empty */
function str<T>(incoming: string | undefined, fallback: T): T | string {
  return incoming && incoming.trim() !== '' ? incoming : fallback
}

function mapEditorToConfig(editor: EditorFormData, base: WeddingConfig): WeddingConfig {
  const merged: WeddingConfig = { ...base }

  // Simple string fields
  merged.groomName = str(editor.groomName, base.groomName) as string
  merged.brideName = str(editor.brideName, base.brideName) as string
  merged.groomParents = str(editor.groomParents, base.groomParents) as string | undefined
  merged.brideParents = str(editor.brideParents, base.brideParents) as string | undefined
  merged.hashtag = str(editor.hashtag, base.hashtag) as string
  merged.tagline = str(editor.tagline, base.tagline) as string | undefined
  merged.heroSubtitle = str(editor.heroSubtitle, base.heroSubtitle) as string | undefined
  merged.invitationHeading = str(editor.invitationHeading, base.invitationHeading) as string | undefined
  merged.invitationSubtitle = str(editor.invitationSubtitle, base.invitationSubtitle) as string | undefined
  merged.invitationBlessing = str(editor.invitationBlessing, base.invitationBlessing) as string | undefined
  merged.invitationText = str(editor.invitationText, base.invitationText) as string | undefined
  merged.rsvpHeading = str(editor.rsvpHeading, base.rsvpHeading) as string | undefined
  merged.rsvpText = str(editor.rsvpText, base.rsvpText) as string | undefined
  merged.rsvpDeadline = str(editor.rsvpDeadline, base.rsvpDeadline) as string | undefined

  // Media fields
  merged.heroImage = str(editor.heroImage, base.heroImage) as string
  merged.backgroundMusic = str(editor.backgroundMusic, base.backgroundMusic) as string | undefined

  // Wedding date: convert string to Date
  if (editor.weddingDate && editor.weddingDate.trim() !== '') {
    const parsed = new Date(editor.weddingDate)
    if (!isNaN(parsed.getTime())) {
      merged.weddingDate = parsed
    }
  }

  // Gallery images
  if (editor.galleryImages && editor.galleryImages.length > 0) {
    merged.galleryImages = editor.galleryImages
      .filter((img) => img.src && img.src.trim() !== '')
      .map((img) => ({
        src: img.src,
        alt: img.alt || '',
        span: (img.span === 'wide' || img.span === 'tall') ? img.span : 'normal' as 'normal' | 'wide' | 'tall',
      }))
  }

  // Events
  if (editor.events && editor.events.length > 0) {
    merged.events = editor.events.map((editorEvent, i) => {
      const baseEvent = base.events[i]
      return {
        id: editorEvent.id || baseEvent?.id || `event-${i}`,
        name: str(editorEvent.name, baseEvent?.name || '') as string,
        emoji: str(editorEvent.emoji, baseEvent?.emoji || '') as string,
        date: str(editorEvent.date, baseEvent?.date || '') as string,
        time: str(editorEvent.time, baseEvent?.time || '') as string,
        venue: str(editorEvent.venue, baseEvent?.venue || '') as string,
        venueAddress: str(editorEvent.venueAddress, baseEvent?.venueAddress || '') as string,
        image: str(editorEvent.image, baseEvent?.image || '') as string,
        color: str(editorEvent.color, baseEvent?.color) as string,
        description: str(editorEvent.description, baseEvent?.description) as string | undefined,
        hidden: editorEvent.hidden,
      }
    })
  }

  // Couple story
  if (editor.coupleStory && editor.coupleStory.length > 0) {
    merged.coupleStory = editor.coupleStory.map((editorItem, i) => {
      const baseItem = base.coupleStory[i]
      return {
        date: str(editorItem.date, baseItem?.date || '') as string,
        title: str(editorItem.title, baseItem?.title || '') as string,
        description: str(editorItem.description, baseItem?.description || '') as string,
        icon: str(editorItem.icon, baseItem?.icon || '') as string,
        image: str(editorItem.image, baseItem?.image) as string | undefined,
      }
    })
  }

  // Family
  if (editor.familyBride && editor.familyBride.length > 0) {
    merged.familyBride = editor.familyBride.map((member, i) => {
      const baseMember = base.familyBride[i]
      return {
        name: str(member.name, baseMember?.name || '') as string,
        relation: str(member.relation, baseMember?.relation || '') as string,
        photo: str(member.photo, baseMember?.photo || '') as string,
        side: 'bride' as const,
      }
    })
  }

  if (editor.familyGroom && editor.familyGroom.length > 0) {
    merged.familyGroom = editor.familyGroom.map((member, i) => {
      const baseMember = base.familyGroom[i]
      return {
        name: str(member.name, baseMember?.name || '') as string,
        relation: str(member.relation, baseMember?.relation || '') as string,
        photo: str(member.photo, baseMember?.photo || '') as string,
        side: 'groom' as const,
      }
    })
  }

  // Venue
  if (editor.venueName || editor.venueAddress || editor.venueMapUrl) {
    merged.venue = {
      name: str(editor.venueName, base.venue.name) as string,
      address: str(editor.venueAddress, base.venue.address) as string,
      mapUrl: str(editor.venueMapUrl, base.venue.mapUrl) as string,
    }
  }

  // RSVP
  if (editor.rsvpPhone || editor.rsvpMessage) {
    merged.rsvp = {
      ...base.rsvp,
      whatsappNumber: str(editor.rsvpPhone, base.rsvp.whatsappNumber) as string,
      message: str(editor.rsvpMessage, base.rsvp.message) as string,
      deadline: str(editor.rsvpDeadline, base.rsvp.deadline) as string,
    }
  }

  // Social links
  if (editor.instagram) {
    merged.socialLinks = {
      ...base.socialLinks,
      instagram: str(editor.instagram, base.socialLinks?.instagram) as string | undefined,
    }
  }

  if (editor.sections) {
    merged.sections = editor.sections as Record<string, boolean>
  }

  // Name order swap
  if (editor.groomFirst === false) {
    merged.groomFirst = false
    const tmpName = merged.groomName; merged.groomName = merged.brideName; merged.brideName = tmpName
    const tmpParents = merged.groomParents; merged.groomParents = merged.brideParents; merged.brideParents = tmpParents
    if ("groomSubtitle" in merged && "brideSubtitle" in merged) { const tmpSub = merged.groomSubtitle; merged.groomSubtitle = merged.brideSubtitle; merged.brideSubtitle = tmpSub }
  }
  return merged
}

const PreviewContext = React.createContext(false)

export function useIsPreview(): boolean {
  return React.useContext(PreviewContext)
}

export function WeddingDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WeddingConfig>(defaultData)
  const [ready, setReady] = useState(true)
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    const inIframe = window.parent !== window
    if (inIframe) setReady(false)

    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'VIVAHPATRA_UPDATE' && event.data.data) {
        const editorData = event.data.data as EditorFormData
        setData((prev) => mapEditorToConfig(editorData, prev))
        setReady(true)
      }
      if (event.data?.type === 'VIVAHPATRA_PREVIEW_MODE') {
        setIsPreview(true)
      }
    }

    window.addEventListener('message', handleMessage)

    if (inIframe) {
      window.parent.postMessage({ type: 'VIVAHPATRA_READY' }, '*')
      setTimeout(() => setReady(true), 4000)
    }

    return () => window.removeEventListener('message', handleMessage)
  }, [])

  if (!ready) return null

  return (
    <WeddingDataContext.Provider value={data}>
      <PreviewContext.Provider value={isPreview}>
        {children}
      </PreviewContext.Provider>
    </WeddingDataContext.Provider>
  )
}

export function useWeddingData() {
  return useContext(WeddingDataContext)
}
