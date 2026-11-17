import experienceDiningImg from '../assets/images/experience_family_dining_1794878012560.jpg';
import inspirationPepperSoupImg from '../assets/images/inspiration_pepper_soup_1794878012873.jpg';
import inspirationCatfishStewImg from '../assets/images/inspiration_catfish_stew_1794878013652.jpg';
import inspirationFamilyMealImg from '../assets/images/inspiration_family_meal_1794878013974.jpg';

export const BUSINESS_INFO = {
  name: 'Smile Fish Farm',
  tagline: 'Good Food. Good Mood.',
  supportingLine: 'Eat Well. Smile More.',
  locationShort: 'Badore, Ajah · Lagos',
  addressLines: [
    'Badore Cooperative,',
    'Badore, Ajah,',
    'Lagos State, Nigeria.',
  ],
  fullAddress: 'Badore Cooperative, Badore, Ajah, Lagos State, Nigeria.',
  phoneDisplay: '08032300422',
  phoneHref: 'tel:+2348032300422',
  whatsappNumber: '2348032300422',
  deliveryNote: 'Nationwide delivery available.',
} as const;

export const WHATSAPP_URLS = {
  base: `https://wa.me/${BUSINESS_INFO.whatsappNumber}`,
  general: `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Good%20day%2C%20Smile%20Fish%20Farm.%20I%27d%20like%20to%20enquire%20about%20your%20catfish.`,
  fresh: `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Good%20day%2C%20I%27d%20like%20to%20enquire%20about%20your%20fresh%20catfish.%20Kindly%20share%20the%20available%20sizes%20and%20prices.`,
  smoked: `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Good%20day%2C%20I%27d%20like%20to%20enquire%20about%20your%20smoked%20catfish.`,
} as const;

export function buildCustomWhatsAppUrl(params: {
  product: 'fresh' | 'smoked' | 'general';
  size?: string;
  location?: string;
}): string {
  const baseMessage =
    params.product === 'fresh'
      ? "Good day, Smile Fish Farm. I'd like to enquire about your fresh catfish. Kindly share the available sizes and prices."
      : params.product === 'smoked'
        ? "Good day, Smile Fish Farm. I'd like to enquire about your smoked catfish (available on request)."
        : "Good day, Smile Fish Farm. I'd like to enquire about your catfish.";

  const extras: string[] = [];
  if (params.product === 'fresh' && params.size && params.size !== 'Any available size') {
    extras.push(`Preferred size: ${params.size}`);
  }
  if (params.location && params.location.trim().length > 0) {
    extras.push(`Delivery location: ${params.location.trim()}`);
  }

  const fullMessage =
    extras.length > 0 ? `${baseMessage} (${extras.join(' | ')})` : baseMessage;

  return `${WHATSAPP_URLS.base}?text=${encodeURIComponent(fullMessage)}`;
}

export const NAV_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'Our Fish', href: '#our-fish'},
  {label: 'About Smile', href: '#about'},
  {label: 'Contact', href: '#contact'},
] as const;

export interface ProductGalleryPhoto {
  label: string;
  src: string;
  alt: string;
}

export interface ProductItem {
  id: 'fresh' | 'smoked';
  title: string;
  meta: string;
  description: string;
  ctaLabel: string;
  whatsappUrl: string;
  photos: ProductGalleryPhoto[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'fresh',
    title: 'Fresh Catfish',
    meta: '400g to 1.5kg · Enquire on WhatsApp',
    description:
      'Fresh catfish in different sizes, from 400g to 1.5kg, ready for the meals you love preparing.',
    ctaLabel: 'Enquire About Fresh Fish',
    whatsappUrl: WHATSAPP_URLS.fresh,
    photos: [
      {
        label: 'Whole Fresh',
        src: '/assets/aistudio/Fresh_Magur_straight_from_the_pond___rich_taste__high_protein__pure_desi_flavor_____ce6a622e.jpg',
        alt: 'Fresh whole Nigerian catfish arranged neatly in a tray from Smile Fish Farm',
      },
      {
        label: 'Fresh Catch',
        src: '/assets/aistudio/catfish_83c59533.jpg',
        alt: 'Close-up of glossy fresh Nigerian catfish ready for kitchen preparation',
      },
      {
        label: 'Pond Harvest',
        src: '/assets/aistudio/download__3__f0af8b4a.jpg',
        alt: 'Live fresh catfish harvested at Smile Fish Farm in Badore, Ajah',
      },
    ],
  },
  {
    id: 'smoked',
    title: 'Smoked Catfish',
    meta: 'Available on request · Enquire on WhatsApp',
    description:
      'A distinctive addition to your favourite soups and dishes. Available on request.',
    ctaLabel: 'Enquire About Smoked Fish',
    whatsappUrl: WHATSAPP_URLS.smoked,
    photos: [
      {
        label: 'Whole Smoked',
        src: '/assets/aistudio/Health_Benefits_and_Uses_of_Smoked_Catfish_d52888e0.jpg',
        alt: 'Whole traditionally smoked Nigerian catfish with golden-brown finish',
      },
      {
        label: 'Smoked Cuts',
        src: '/assets/aistudio/Cet_article_n_est_pas_disponible_-_Etsy_7c08db4a.jpg',
        alt: 'Richly smoked catfish pieces plated on a warm wooden dish',
      },
    ],
  },
];

export const HERO_IMAGE = {
  src: '/assets/aistudio/May_you_never_know_hunger_again_in_the_mighty_name_of_JESUS_CHRIST_____1cdd481d.jpg',
  alt: 'Grilled whole Nigerian catfish served on a wooden platter with pepper sauce, red onions, and golden fried sides',
};

export const EXPERIENCE_IMAGE = {
  src: experienceDiningImg,
  alt: 'A warm Nigerian family gathered around a wooden dining table sharing a steaming pot of catfish soup',
};

export const WHY_CHOOSE_ITEMS = [
  {
    index: '01',
    title: 'Different Sizes',
    description: 'Fresh catfish available in sizes ranging from 400g to 1.5kg.',
    icon: 'scale' as const,
  },
  {
    index: '02',
    title: 'Fresh & Smoked Options',
    description: 'Choose fresh catfish or enquire about smoked catfish.',
    icon: 'flame' as const,
  },
  {
    index: '03',
    title: 'Convenient Enquiries',
    description: 'Speak directly with Smile through WhatsApp.',
    icon: 'message' as const,
  },
  {
    index: '04',
    title: 'Nationwide Delivery',
    description: 'Delivery available across Nigeria.',
    icon: 'mapPin' as const,
  },
] as const;

export const INSPIRATION_ITEMS = [
  {
    id: 'pepper-soup',
    kicker: 'Evening Comfort',
    title: 'Nigerian Catfish Pepper Soup',
    caption:
      'Fragrant, spiced broth simmered with fresh herbs and tender catfish cuts for quiet evenings or welcoming guests.',
    src: inspirationPepperSoupImg,
    alt: 'Steaming bowl of Nigerian catfish pepper soup garnished with fresh scent leaves and sliced red pepper',
  },
  {
    id: 'catfish-stew',
    kicker: 'Kitchen Classic',
    title: 'Rich Catfish Stew',
    caption:
      'Slow-simmered tomato and pepper stew layered with firm catfish steaks—made to pair with rice, yam, or plantain.',
    src: inspirationCatfishStewImg,
    alt: 'Simmering cast-iron pot of rich Nigerian red tomato catfish stew with fresh herbs',
  },
  {
    id: 'family-meal',
    kicker: 'Sunday Table',
    title: 'A Warm Family Meal',
    caption:
      'Generous weekend spreads where freshly prepared catfish brings everyone back to the table for seconds.',
    src: inspirationFamilyMealImg,
    alt: 'Warm family dining spread featuring seasoned catfish, fried plantains, rice, and greens',
  },
] as const;
