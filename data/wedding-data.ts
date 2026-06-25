import { WeddingConfig } from '@/types/wedding.types'

export const weddingData: WeddingConfig = {
  brideName: 'Simran',
  groomName: 'Raj',
  groomParents: 'Mr. Baldev Singh & Mrs. Lajjo Kaur',
  brideParents: 'Mr. Ajit Singh & Mrs. Harpreet Kaur',
  weddingDate: new Date('2026-12-25T10:00:00'),
  hashtag: '#RajWedsSiman',
  tagline: 'Balle Balle! Two hearts, one soul',
  invitationText:
    'With Waheguru\'s blessings and the love of our families, Simran and Raj joyfully invite you to celebrate the beginning of their journey together. Your presence will make our celebration truly unforgettable.',
  heroImage: '/assets/palace.png',

  events: [
    { id: 'roka', name: 'Roka', emoji: '🤝', date: 'December 20, 2026', time: '11:00 AM', venue: 'Gurudwara Sahib', venueAddress: 'Model Town, Ludhiana', image: '/assets/events/engagement.png', color: '#d4a017', description: 'The formal commitment of two families.' },
    { id: 'mehendi', name: 'Mehendi', emoji: '🌿', date: 'December 22, 2026', time: '4:00 PM', venue: 'Haveli Grounds', venueAddress: 'GT Road, Amritsar', image: '/assets/events/mehendi.png', color: '#2d7a4f', description: 'Henna, music and Giddha night.' },
    { id: 'sangeet', name: 'Sangeet', emoji: '🥁', date: 'December 23, 2026', time: '7:00 PM', venue: 'Royal Farmhouse', venueAddress: 'Jalandhar Highway, Ludhiana', image: '/assets/events/sangeet.png', color: '#c41e3a', description: 'Dhol, Bhangra and a night of celebration.' },
    { id: 'haldi', name: 'Haldi', emoji: '✨', date: 'December 24, 2026', time: '10:00 AM', venue: 'Family Home', venueAddress: 'Rajpura Road, Patiala', image: '/assets/events/haldi.png', color: '#ff6b35', description: 'Turmeric, laughter and golden blessings.' },
    { id: 'anand-karaj', name: 'Anand Karaj', emoji: '🙏', date: 'December 25, 2026', time: '9:00 AM', venue: 'Gurudwara Singh Sabha', venueAddress: 'Mall Road, Chandigarh', image: '/assets/events/wedding.png', color: '#d4a017', description: 'Four Lavaan, one eternal bond.' },
    { id: 'reception', name: 'Reception', emoji: '🥂', date: 'December 25, 2026', time: '7:00 PM', venue: 'The Grand Taj', venueAddress: 'Sector 17, Chandigarh', image: '/assets/events/reception.png', color: '#c41e3a', description: 'Feast, dance and celebration of love.' },
  ],

  galleryImages: [
    { src: '/assets/gallery/gallery-1.jpg', alt: 'Couple photo 1', span: 'wide' },
    { src: '/assets/gallery/gallery-2.jpg', alt: 'Couple photo 2', span: 'tall' },
    { src: '/assets/gallery/gallery-3.jpg', alt: 'Couple photo 3', span: 'normal' },
    { src: '/assets/gallery/gallery-4.jpg', alt: 'Couple photo 4', span: 'normal' },
    { src: '/assets/gallery/gallery-5.jpg', alt: 'Couple photo 5', span: 'wide' },
    { src: '/assets/gallery/gallery-6.jpg', alt: 'Couple photo 6', span: 'normal' },
  ],

  coupleStory: [
    { date: 'January 2020', title: 'Chance Meeting', description: 'A Lohri bonfire party in Chandigarh — she was dancing Giddha, he couldn\'t look away.', icon: '🔥', image: '/assets/story/story-1.jpg' },
    { date: 'June 2021', title: 'First Date', description: 'Lassi at a dhaba, long drive on GT Road, and a sunset at Sukhna Lake. The parathas were good, the company was better.', icon: '☕', image: '/assets/story/story-2.jpg' },
    { date: 'November 2024', title: 'The Proposal', description: 'At the Golden Temple under a full moon, he went down on one knee. She said yes before he could finish the question.', icon: '💍', image: '/assets/story/story-3.jpg' },
    { date: 'December 2026', title: 'Forever Begins', description: 'The biggest Punjabi wedding Punjab has ever seen. We can\'t wait to celebrate with everyone who\'s been part of this love story.', icon: '🎉', image: '/assets/story/story-4.jpg' },
  ],

  familyBride: [
    { name: 'Ajit Singh', relation: 'Father', photo: '/assets/family/bf.jpg', side: 'bride' },
    { name: 'Harpreet Kaur', relation: 'Mother', photo: '/assets/family/bm.jpg', side: 'bride' },
    { name: 'Gurpreet Singh', relation: 'Brother', photo: '/assets/family/bb.jpg', side: 'bride' },
  ],

  familyGroom: [
    { name: 'Baldev Singh', relation: 'Father', photo: '/assets/family/gf.jpg', side: 'groom' },
    { name: 'Lajjo Kaur', relation: 'Mother', photo: '/assets/family/gm.jpg', side: 'groom' },
    { name: 'Preeti Kaur', relation: 'Sister', photo: '/assets/family/gs.jpg', side: 'groom' },
  ],

  venue: {
    name: 'Gurudwara Singh Sabha',
    address: 'Mall Road, Sector 34, Chandigarh — 160034',
    mapUrl: 'https://maps.google.com',
  },

  rsvp: {
    whatsappNumber: '919876543210',
    message: 'Sat Sri Akal! I would like to RSVP for the wedding of Simran & Raj on 25th December 2026.',
    deadline: 'December 10, 2026',
  },

  socialLinks: { instagram: 'https://instagram.com' },
}
