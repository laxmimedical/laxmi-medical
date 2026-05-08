// ─── Store Details ────────────────────────────────────────────────────────────
export const STORE = {
  name: 'Laxmi Medical Store',
  tagline: 'Your Trusted Healthcare Partner',
  subTagline: '24/7 Trusted Medical Store in Udaipur',
  address: {
    line1: 'Rakampura Road, Dhauji Ki Bavdi',
    line2: 'Nakoda Nagar, Udaipur',
    full: 'Rakampura Road, Dhauji Ki Bavdi, Nakoda Nagar, Udaipur, Rajasthan',
  },
  phones: ['8003088526', '8949589385'],
  email: 'laxmimedical823@gmail.com',
  instagram: 'https://www.instagram.com/laxmi_medical_1',
  whatsapp: '918003088526',
  mapCoords: { lat: 24.5854, lng: 73.7125 },
}

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

// ─── Stats ─────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 10, suffix: '+', label: 'Years of Trust' },
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 3000, suffix: '+', label: 'Medicines Available' },
  { value: 24, suffix: '/7', label: 'Service Hours' },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    icon: 'Pill',
    title: 'Prescription Medicines',
    description: 'All branded and generic prescription medicines sourced from verified pharmaceutical manufacturers with authentic quality.',
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: '#0284C7',
  },
  {
    id: 2,
    icon: 'ShoppingBag',
    title: 'OTC Medicines',
    description: 'Wide range of over-the-counter medicines for everyday health needs — pain relief, cold, digestion, and more.',
    color: 'from-cyan-500/20 to-emerald-500/20',
    accent: '#0ea5e9',
  },
  {
    id: 3,
    icon: 'Scissors',
    title: 'Surgical Products',
    description: 'Premium surgical instruments, dressings, gloves, syringes, and clinical tools for home and professional use.',
    color: 'from-green-500/20 to-cyan-500/20',
    accent: '#0369a1',
  },
  {
    id: 4,
    icon: 'Leaf',
    title: 'Health Supplements',
    description: 'Vitamins, minerals, protein powders, immunity boosters, and herbal supplements from top health brands.',
    color: 'from-teal-500/20 to-green-500/20',
    accent: '#0284C7',
  },
  {
    id: 5,
    icon: 'Baby',
    title: 'Baby Care',
    description: 'Gentle, dermatologist-tested baby care products — lotions, diapers, powders, oils, and nutritional supplements.',
    color: 'from-emerald-400/20 to-mint-500/20',
    accent: '#7dd3fc',
  },
  {
    id: 6,
    icon: 'Sparkles',
    title: 'Personal Care',
    description: 'Skincare, haircare, hygiene products, and wellness essentials from trusted derma and personal care brands.',
    color: 'from-green-400/20 to-emerald-600/20',
    accent: '#0ea5e9',
  },
  {
    id: 7,
    icon: 'Stethoscope',
    title: 'Healthcare Consultation',
    description: 'Expert guidance from experienced pharmacists on medicine usage, dosage, interactions, and health queries.',
    color: 'from-teal-600/20 to-cyan-400/20',
    accent: '#0369a1',
  },
  {
    id: 8,
    icon: 'Zap',
    title: 'Fast Availability',
    description: 'Urgent medicine needs fulfilled quickly. We stock rare and specialty medicines with minimal wait times.',
    color: 'from-yellow-500/10 to-emerald-500/20',
    accent: '#f59e0b',
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: 'ShieldCheck',
    title: 'Genuine Medicines',
    description: '100% authentic medicines sourced directly from licensed distributors and verified manufacturers.',
  },
  {
    icon: 'Award',
    title: 'Trusted Pharmacy',
    description: 'Licensed and certified pharmacy with 10+ years of serving Udaipur\'s community with integrity.',
  },
  {
    icon: 'BadgeIndianRupee',
    title: 'Affordable Prices',
    description: 'Competitive pricing without compromising quality. We offer regular discounts on essential medicines.',
  },
  {
    icon: 'GraduationCap',
    title: 'Expert Guidance',
    description: 'Qualified pharmacists available to assist with prescriptions, dosage queries, and health advice.',
  },
  {
    icon: 'Clock',
    title: 'Fast Service',
    description: 'Efficient dispensing process to minimize waiting time. Emergency medicine availability on priority.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Customer Support',
    description: 'Friendly, patient-first approach. We take time to understand your health needs and provide solutions.',
  },
]

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: 1,
    name: 'Vitamin D3 + K2 Supplement',
    category: 'Vitamins & Supplements',
    price: '₹349',
    originalPrice: '₹450',
    rating: 5,
    reviews: 128,
    badge: 'Best Seller',
    badgeColor: 'bg-medical-blue',
    description: 'Premium Vitamin D3 2000IU with K2 MK-7 for bone health, immunity & heart support.',
    gradient: 'from-medical-blue/5 to-medical-blue/10',
  },
  {
    id: 2,
    name: 'Omega-3 Fish Oil Capsules',
    category: 'Health Supplements',
    price: '₹299',
    originalPrice: '₹399',
    rating: 5,
    reviews: 96,
    badge: 'Popular',
    badgeColor: 'bg-medical-blue/80',
    description: 'Triple-strength Omega-3 fatty acids for heart, brain, and joint health.',
    gradient: 'from-medical-blue/5 to-medical-blue/10',
  },
  {
    id: 3,
    name: 'Digital Thermometer Pro',
    category: 'Healthcare Devices',
    price: '₹199',
    originalPrice: '₹280',
    rating: 4,
    reviews: 74,
    badge: 'New Arrival',
    badgeColor: 'bg-medical-blue/60',
    description: 'Fast 10-second reading, medical grade accuracy, fever alert system.',
    gradient: 'from-medical-blue/5 to-medical-blue/10',
  },
  {
    id: 4,
    name: 'Antiseptic Wound Care Kit',
    category: 'Surgical Products',
    price: '₹149',
    originalPrice: '₹199',
    rating: 5,
    reviews: 52,
    badge: 'Essential',
    badgeColor: 'bg-medical-blue/90',
    description: 'Complete first-aid kit with antiseptic, bandages, gauze, and wound care essentials.',
    gradient: 'from-medical-blue/5 to-medical-blue/10',
  },
  {
    id: 5,
    name: "Johnson's Baby Skincare Bundle",
    category: 'Baby Care',
    price: '₹599',
    originalPrice: '₹750',
    rating: 5,
    reviews: 183,
    badge: 'Top Rated',
    badgeColor: 'bg-amber-500',
    description: 'Gentle baby lotion, oil, powder & wash set — clinically tested for sensitive baby skin.',
    gradient: 'from-medical-blue/5 to-medical-blue/10',
  },
  {
    id: 6,
    name: 'BP Monitor Digital',
    category: 'Healthcare Devices',
    price: '₹1,299',
    originalPrice: '₹1,800',
    rating: 4,
    reviews: 67,
    badge: 'Save 28%',
    badgeColor: 'bg-red-500',
    description: 'Automatic upper arm blood pressure monitor with irregular heartbeat detection.',
    gradient: 'from-medical-blue/5 to-medical-blue/10',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Regular Customer',
    initials: 'PS',
    rating: 5,
    text: 'Laxmi Medical has been my family\'s go-to pharmacy for over 5 years. The staff is incredibly knowledgeable, medicines are always genuine, and the service is unmatched. Highly recommend!',
    color: 'from-medical-blue to-medical-blue/80',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Healthcare Professional',
    initials: 'RM',
    rating: 5,
    text: 'As a doctor, I always refer my patients to Laxmi Medical. Their authentic medicines, proper storage conditions, and expert pharmacists give me full confidence in recommending them.',
    color: 'from-medical-blue/10 to-medical-blue/5',
  },
  {
    id: 3,
    name: 'Sunita Jain',
    role: 'Mother of Two',
    initials: 'SJ',
    rating: 5,
    text: 'The baby care section is fantastic! They helped me choose the right products for my newborn. The staff was so patient and gave excellent guidance. A store that truly cares!',
    color: 'from-medical-blue/10 to-medical-blue/5',
  },
  {
    id: 4,
    name: 'Deepak Agarwal',
    role: 'Senior Citizen',
    initials: 'DA',
    rating: 5,
    text: 'I\'ve been buying my diabetes medicines here for years. They always have them in stock and often remind me about my refills. The personal touch makes all the difference.',
    color: 'from-medical-blue/10 to-medical-blue/5',
  },
  {
    id: 5,
    name: 'Kavita Rathore',
    role: 'Working Professional',
    initials: 'KR',
    rating: 5,
    text: 'Quick service, genuine products, and amazing discounts! I always find everything I need here — from supplements to surgical products. Best medical store in Udaipur!',
    color: 'from-medical-blue/10 to-medical-blue/5',
  },
]

// ─── Gallery Labels ───────────────────────────────────────────────────────────
export const GALLERY = [
  { label: 'Medicine Aisle', size: 'large', color: 'from-emerald-900/60 to-teal-900/60' },
  { label: 'Supplement Section', size: 'small', color: 'from-teal-900/60 to-cyan-900/60' },
  { label: 'Baby Care Corner', size: 'small', color: 'from-cyan-900/60 to-emerald-900/60' },
  { label: 'Surgical Products', size: 'medium', color: 'from-green-900/60 to-emerald-900/60' },
  { label: 'Store Exterior', size: 'medium', color: 'from-emerald-800/60 to-green-900/60' },
  { label: 'Consultation Desk', size: 'large', color: 'from-teal-800/60 to-emerald-900/60' },
]
