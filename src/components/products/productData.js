/* ─────────────────────────────────────────────────────────────────
   productData.js  —  Showcase products for Laxmi Medical
   No pricing — this is a display/showcase site only.
───────────────────────────────────────────────────────────────── */

export const CATEGORIES = [
  { id: 'all',         label: 'All Products',       emoji: '🏥' },
  { id: 'baby',        label: 'Baby Care',           emoji: '👶' },
  { id: 'vitamins',    label: 'Vitamins & Suppl.',   emoji: '💊' },
  { id: 'diabetes',    label: 'Diabetes Care',       emoji: '🩸' },
  { id: 'personal',    label: 'Personal Care',       emoji: '🧴' },
  { id: 'skin',        label: 'Skin Care',           emoji: '✨' },
  { id: 'hair',        label: 'Hair Care',           emoji: '💆' },
  { id: 'immunity',    label: 'Immunity Boosters',   emoji: '🛡️' },
  { id: 'ayurvedic',   label: 'Ayurvedic',           emoji: '🌿' },
  { id: 'pain',        label: 'Pain Relief',         emoji: '💪' },
  { id: 'devices',     label: 'Medical Devices',     emoji: '🔬' },
  { id: 'women',       label: "Women's Health",      emoji: '🌸' },
  { id: 'elderly',     label: 'Elderly Care',        emoji: '❤️' },
];

export const PRODUCTS = [
  /* ── BABY CARE ──────────────────────────────────────────────── */
  {
    id: 'b1', category: 'baby', categoryLabel: 'Baby Care',
    brand: "Johnson's Baby",
    name: "Johnson's Baby Shampoo",
    description: 'Gentle no-tears formula, clinically proven mild on baby eyes. Dermatologist tested for daily use.',
    image: '/products/JohnsonBabyShampoo.webp',
  },
  {
    id: 'b2', category: 'baby', categoryLabel: 'Baby Care',
    brand: 'Himalaya',
    name: 'Himalaya Baby Powder',
    description: 'Soft talc-free baby powder with Khus Khus & Aloe Vera to keep baby dry and rash-free all day.',
    image: '/products/HimalayaBabyPowder.webp',
  },
  {
    id: 'b3', category: 'baby', categoryLabel: 'Baby Care',
    brand: 'Pampers',
    name: 'Pampers Premium Diapers',
    description: 'Up to 12 hrs of dryness with air channels for breathability. Wetness indicator included.',
    image: '/products/PampersDiaper.webp',
  },
  {
    id: 'b4', category: 'baby', categoryLabel: 'Baby Care',
    brand: 'Mamaearth',
    name: 'Mamaearth Baby Face Cream',
    description: 'Made with Shea Butter & Calendula. Free from toxins, parabens and artificial fragrances.',
    image: '/products/MamaearthFaceCream.webp',
  },

  /* ── VITAMINS & SUPPLEMENTS ─────────────────────────────────── */
  {
    id: 'v1', category: 'vitamins', categoryLabel: 'Vitamins & Suppl.',
    brand: 'Revital H',
    name: 'Revital H Daily Multivitamin',
    description: 'Complete multivitamin with 10 vitamins, 9 minerals & Ginseng for energy and vitality.',
    image: '/products/Revital.webp',
  },
  {
    id: 'v2', category: 'vitamins', categoryLabel: 'Vitamins & Suppl.',
    brand: 'HealthKart',
    name: 'Omega-3 Fish Oil 1000mg',
    description: 'Cold-pressed omega-3 with high EPA+DHA for heart health, brain function & joint care.',
    image: '/products/omega3fishoil1000mg.webp',
  },
  {
    id: 'v3', category: 'vitamins', categoryLabel: 'Vitamins & Suppl.',
    brand: 'Limcee',
    name: 'Vitamin C 500mg Chewable',
    description: 'Chewable Vitamin C tablets with orange flavour. Supports immunity and collagen synthesis.',
    image: '/products/VitaminC.webp',
  },
  {
    id: 'v4', category: 'vitamins', categoryLabel: 'Vitamins & Suppl.',
    brand: 'Now Foods',
    name: 'Vitamin D3 + K2 2000 IU',
    description: 'Synergistic D3+K2 formula for superior calcium absorption, bone density & immune health.',
    image: '/products/Vitamind3.webp',
  },

  /* ── DIABETES CARE ──────────────────────────────────────────── */
  {
    id: 'd1', category: 'diabetes', categoryLabel: 'Diabetes Care',
    brand: 'Accu-Chek',
    name: 'Accu-Chek Active Glucometer',
    description: 'Accurate blood glucose monitoring in 5 seconds. No-coding technology with memory for 500 results.',
    image: '/products/Accu-ChekActiveGlucometer.webp',
  },
  {
    id: 'd2', category: 'diabetes', categoryLabel: 'Diabetes Care',
    brand: 'Accu-Chek',
    name: 'Accu-Chek Active Test Strips (50)',
    description: 'Compatible with Accu-Chek Active and Performa meters. Individually foil-wrapped for hygiene.',
    image: '/products/Accu-ChekActiveTestStrips(50).webp',
  },
  {
    id: 'd3', category: 'diabetes', categoryLabel: 'Diabetes Care',
    brand: 'Himalaya',
    name: 'Himalaya Diabecon Tablets',
    description: 'Herbal antidiabetic formulation. Helps maintain healthy blood glucose levels naturally.',
    image: '/products/HimalayaDiabeconTablets.webp',
  },

  /* ── PERSONAL CARE ──────────────────────────────────────────── */
  {
    id: 'p1', category: 'personal', categoryLabel: 'Personal Care',
    brand: 'Dettol',
    name: 'Dettol Antiseptic Liquid 250ml',
    description: 'Kills 100 types of germs including bacteria and viruses. Used for wounds, hygiene & household.',
    image: '/products/Dettol.webp',
  },
  {
    id: 'p2', category: 'personal', categoryLabel: 'Personal Care',
    brand: 'Colgate',
    name: 'Colgate Total Charcoal Toothpaste',
    description: 'Activated charcoal formula for deep cleaning, whitening and 12-hour antibacterial protection.',
    image: '/products/ColgatTotal.webp',
  },
  {
    id: 'p3', category: 'personal', categoryLabel: 'Personal Care',
    brand: 'Sensodyne',
    name: 'Sensodyne Rapid Relief Toothpaste',
    description: 'Clinically proven to relieve sensitivity in 60 seconds. Daily protection formula.',
    image: '/products/Sensodyne.webp',
  },

  /* ── SKIN CARE ──────────────────────────────────────────────── */
  {
    id: 's1', category: 'skin', categoryLabel: 'Skin Care',
    brand: 'Cetaphil',
    name: 'Cetaphil Gentle Skin Cleanser',
    description: 'Dermatologist recommended. Non-irritating, soap-free formula for sensitive and dry skin.',
    image: '/products/Cetaphile.webp',
  },
  {
    id: 's2', category: 'skin', categoryLabel: 'Skin Care',
    brand: 'Mamaearth',
    name: 'Mamaearth Ubtan Sunscreen SPF 50',
    description: 'Turmeric + Saffron SPF 50 PA+++ sunscreen. Protects, brightens and evens skin tone.',
    image: '/products/MamearthSunscreen50+.webp',
  },
  {
    id: 's3', category: 'skin', categoryLabel: 'Skin Care',
    brand: 'Nivea',
    name: 'Nivea Soft Light Moisturiser',
    description: 'Enriched with Jojoba Oil and Vitamin E. Non-greasy daily moisturiser for face and body.',
    image: '/products/NiveaSoftCream.webp',
  },

  /* ── HAIR CARE ──────────────────────────────────────────────── */
  {
    id: 'h1', category: 'hair', categoryLabel: 'Hair Care',
    brand: 'Himalaya',
    name: 'Himalaya Anti-Hairfall Shampoo',
    description: 'Bhringaraaja + Palasha blend to reduce hairfall, strengthen roots and nourish the scalp.',
    image: '/products/HimalayaShampo.webp',
  },
  {
    id: 'h2', category: 'hair', categoryLabel: 'Hair Care',
    brand: 'Mamaearth',
    name: 'Mamaearth Onion Hair Oil',
    description: 'Onion seed oil + Redensyl clinically proven to reduce hairfall by 50% in 4 weeks.',
    image: '/products/MamaearthOnion.webp',
  },

  /* ── IMMUNITY BOOSTERS ──────────────────────────────────────── */
  {
    id: 'i1', category: 'immunity', categoryLabel: 'Immunity Boosters',
    brand: 'Dabur',
    name: 'Dabur Chyawanprash 1kg',
    description: 'Ancient Ayurvedic formula with 40+ herbs. Builds immunity, strength and stamina in all ages.',
    image: '/products/DaburChyawanprash.webp',
  },
  {
    id: 'i2', category: 'immunity', categoryLabel: 'Immunity Boosters',
    brand: 'Himalaya',
    name: 'Himalaya Septilin Tablets',
    description: 'Powerful immune stimulant with Guduchi and Licorice. Reduces incidence of infections.',
    image: '/products/HimalayaSeptilin.webp',
  },
  {
    id: 'i3', category: 'immunity', categoryLabel: 'Immunity Boosters',
    brand: 'Wellbeing Nutrition',
    name: 'Elderberry + Zinc + Vitamin C Gummies',
    description: 'Triple-action immunity gummies. Tasty mixed berry flavour with no artificial colours.',
    image: '/products/ZANDElderberry.webp',
  },

  /* ── AYURVEDIC ──────────────────────────────────────────────── */
  {
    id: 'a1', category: 'ayurvedic', categoryLabel: 'Ayurvedic',
    brand: 'Himalaya',
    name: 'Himalaya Triphala Tablets',
    description: 'Classic Ayurvedic tridoshic formulation. Gentle detoxification, digestive wellness & colon health.',
    image: '/products/HimalayaTriphala.webp',
  },
  {
    id: 'a2', category: 'ayurvedic', categoryLabel: 'Ayurvedic',
    brand: 'Zandu',
    name: 'Zandu Balm 25ml',
    description: 'Cooling Ayurvedic balm with Eucalyptus & Menthol for headache, cold and body ache relief.',
    image: '/products/ZanduBalm.webp',
  },
  {
    id: 'a3', category: 'ayurvedic', categoryLabel: 'Ayurvedic',
    brand: 'Patanjali',
    name: 'Patanjali Amla Juice 500ml',
    description: 'Fresh cold-pressed Amla (Indian Gooseberry) juice — natural Vitamin C, antioxidant powerhouse.',
    image: '/products/PatanjaliGiloyAmla.webp',
  },

  /* ── PAIN RELIEF ────────────────────────────────────────────── */
  {
    id: 'pr1', category: 'pain', categoryLabel: 'Pain Relief',
    brand: 'Volini',
    name: 'Volini Maxx Pain Relief Spray',
    description: 'Fast-acting NSAID spray with Diclofenac + Methyl Salicylate for muscle and joint pain.',
    image: '/products/VoliniMaxx.webp',
  },
  {
    id: 'pr2', category: 'pain', categoryLabel: 'Pain Relief',
    brand: 'Moov',
    name: 'Moov Advanced Back Relief Cream',
    description: 'Warm therapy cream with Wintergreen Oil for back, muscle and arthritis pain relief.',
    image: '/products/MoveCream.webp',
  },

  /* ── MEDICAL DEVICES ────────────────────────────────────────── */
  {
    id: 'md1', category: 'devices', categoryLabel: 'Medical Devices',
    brand: 'Omron',
    name: 'Omron HEM-7120 BP Monitor',
    description: 'Clinically validated upper-arm BP monitor with IntelliSense technology. 60-reading memory.',
    image: '/products/Omronhem7120.webp',
  },
  {
    id: 'md2', category: 'devices', categoryLabel: 'Medical Devices',
    brand: 'Beurer',
    name: 'Beurer Pulse Oximeter PO30',
    description: 'Measures SpO2 and pulse rate in 10 seconds. OLED display with perfusion index.',
    image: '/products/Beurer.webp',
  },
  {
    id: 'md3', category: 'devices', categoryLabel: 'Medical Devices',
    brand: 'Littmann',
    name: '3M Littmann Classic III Stethoscope',
    description: 'Dual-sided chestpiece for adult and pediatric use. Superior acoustic performance.',
    image: '/products/MonitoringStethoscope.webp',
  },

  /* ── WOMEN'S HEALTH ─────────────────────────────────────────── */
  {
    id: 'w1', category: 'women', categoryLabel: "Women's Health",
    brand: 'Pregnacare',
    name: 'Pregnacare Original Prenatal Vitamins',
    description: 'Comprehensive prenatal supplement with Folic Acid, Iron, Iodine and D3 for healthy pregnancy.',
    image: '/products/PregnancySupplementsMultiVitamin.webp',
  },
  {
    id: 'w2', category: 'women', categoryLabel: "Women's Health",
    brand: 'Himalaya',
    name: 'Himalaya Evecare Syrup',
    description: 'Regulates menstrual cycle, relieves pre-menstrual symptoms and dysmenorrhea naturally.',
    image: '/products/HimalayaEveCare.webp',
  },

  /* ── ELDERLY CARE ───────────────────────────────────────────── */
  {
    id: 'e1', category: 'elderly', categoryLabel: 'Elderly Care',
    brand: 'Protinex',
    name: 'Protinex Tasty Chocolate Protein',
    description: 'High protein nutrition supplement for seniors. Supports muscle maintenance and bone health.',
    image: '/products/Protenix.webp',
  },
  {
    id: 'e2', category: 'elderly', categoryLabel: 'Elderly Care',
    brand: 'Cipla',
    name: 'Cipla Health Calcium + D3 Chewables',
    description: 'Effervescent Calcium + Vitamin D3 for bone density and prevention of osteoporosis.',
    image: '/products/Calcium.webp',
  },
  {
    id: 'e3', category: 'elderly', categoryLabel: 'Elderly Care',
    brand: 'Tynor',
    name: 'Tynor Knee Brace (OA Care)',
    description: 'Adjustable medial-lateral knee support for Osteoarthritis, ligament instability and post-op care.',
    image: '/products/tynor.webp',
  },
];