import { WeddingConfig } from '@/types/wedding.types'

export const weddingData: WeddingConfig = {
  brideName: 'Radha',
  groomName: 'Krishna',
  groomParents: 'Mr. Nanda & Mrs. Yashoda',
  brideParents: 'Mr. Vrishabhanu & Mrs. Kirtida',
  weddingDate: new Date('2026-12-20T10:00:00'),
  hashtag: '#RadhaKrishnaForever',
  tagline: 'Two souls, one divine love story',
  invitationText:
    'With the blessings of the divine and the love of our families, Radha and Krishna joyfully invite you to witness the beginning of their forever. Your presence will illuminate our celebration.',
  heroImage: '/assets/palace.png',

  events: [
    { id: 'engagement', name: 'Engagement', emoji: '💍', date: 'December 16, 2026', time: '6:00 PM', venue: 'The Garden Terrace', venueAddress: '12 Rosewood Lane, Delhi', image: '/assets/events/engagement.png', color: '#c8922a', description: 'Rings, promises and the beginning of forever.' },
    { id: 'mehendi', name: 'Mehendi', emoji: '🌿', date: 'December 17, 2026', time: '4:00 PM', venue: 'The Garden Terrace', venueAddress: '12 Rosewood Lane, Delhi', image: '/assets/events/mehendi.png', color: '#1a6b44', description: 'Henna, laughter and the fragrance of mogra.' },
    { id: 'haldi',   name: 'Haldi',   emoji: '✨', date: 'December 18, 2026', time: '10:00 AM', venue: 'Family Courtyard', venueAddress: '45 Sunset Marg, Delhi', image: '/assets/events/haldi.png', color: '#c8922a', description: 'Turmeric, blessings and golden memories.' },
    { id: 'sangeet', name: 'Sangeet', emoji: '🎶', date: 'December 18, 2026', time: '7:00 PM', venue: 'The Grand Ballroom', venueAddress: 'Hotel Imperial, Delhi', image: '/assets/events/sangeet.png', color: '#7b5ea7', description: 'Dance, music and a night full of stars.' },
    { id: 'wedding', name: 'Wedding', emoji: '💍', date: 'December 20, 2026', time: '10:00 AM', venue: 'Shri Sai Mandir Banquet', venueAddress: 'Temple Road, Connaught Place, Delhi', image: '/assets/events/wedding.png', color: '#c8922a', description: 'Seven vows, one forever.' },
    { id: 'reception', name: 'Reception', emoji: '🥂', date: 'December 20, 2026', time: '7:00 PM', venue: 'The Grand Ballroom', venueAddress: 'Hotel Imperial, Delhi', image: '/assets/events/reception.png', color: '#8b1a1a', description: 'Dinner, dancing and a night to remember.' },
  ],

  galleryImages: [
    { src: '/assets/gallery/g1.jpg', alt: 'Couple photo 1', span: 'wide' },
    { src: '/assets/gallery/g2.jpg', alt: 'Couple photo 2', span: 'tall' },
    { src: '/assets/gallery/g3.jpg', alt: 'Couple photo 3', span: 'normal' },
    { src: '/assets/gallery/g4.jpg', alt: 'Couple photo 4', span: 'normal' },
    { src: '/assets/gallery/g5.jpg', alt: 'Couple photo 5', span: 'wide' },
    { src: '/assets/gallery/g6.jpg', alt: 'Couple photo 6', span: 'normal' },
  ],

  coupleStory: [
    { date: 'March 2019', title: 'First Meeting', description: 'Like the divine meeting at Vrindavan, their eyes met across a room full of strangers and everything else faded away.', icon: '🌸', image: '/assets/story/s1.jpg' },
    { date: 'August 2020', title: 'First Date', description: 'A rooftop at sunset, marigold garlands and three hours of conversation that felt like a lifetime.', icon: '🪔', image: '/assets/story/s2.jpg' },
    { date: 'February 2023', title: 'The Proposal', description: 'Beneath a canopy of jasmine in Jaipur, a ring and a promise — this love, like the divine, eternal and boundless.', icon: '💍', image: '/assets/story/s3.jpg' },
    { date: 'December 2026', title: 'Forever Begins', description: 'The greatest story ever written. We cannot wait to celebrate with every soul who has journeyed with us.', icon: '🏵️', image: '/assets/story/s4.jpg' },
  ],

  familyBride: [
    { name: 'Harjit Singh', relation: 'Father', photo: '/assets/family/bf.jpg', side: 'bride' },
    { name: 'Parminder Kaur', relation: 'Mother', photo: '/assets/family/bm.jpg', side: 'bride' },
    { name: 'Manpreet Singh', relation: 'Brother', photo: '/assets/family/bb.jpg', side: 'bride' },
  ],

  familyGroom: [
    { name: 'Vikram Malhotra', relation: 'Father', photo: '/assets/family/gf.jpg', side: 'groom' },
    { name: 'Sunita Malhotra', relation: 'Mother', photo: '/assets/family/gm.jpg', side: 'groom' },
    { name: 'Neha Malhotra', relation: 'Sister', photo: '/assets/family/gs.jpg', side: 'groom' },
  ],

  venue: {
    name: 'Shri Sai Mandir Banquet',
    address: 'Temple Road, Connaught Place, New Delhi — 110001',
    mapUrl: 'https://maps.google.com',
  },

  rsvp: {
    whatsappNumber: '919876543210',
    message: 'Hi! I would like to RSVP for the wedding of Radha & Krishna on 20th December 2026.',
    deadline: 'December 5, 2026',
  },

  socialLinks: { instagram: 'https://instagram.com' },
}
