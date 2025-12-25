
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'satemade-classic-500',
    name: 'Satemade Classic',
    tagline: 'The Original Crystal Clear',
    price: 35.00,
    description: 'Our flagship 500ml bottle. Crafted from medical-grade borosilicate glass, encased in a minimalist protective layer.',
    category: 'Daily',
    material: 'Borosilicate Glass',
    capacity: '500ml',
    color: 'Clear',
    image: 'https://picsum.photos/seed/bottle1/800/800',
    rating: 4.8,
    reviews: 128,
    isFeatured: true
  },
  {
    id: 'satemade-aqua-750',
    name: 'Satemade Aqua',
    tagline: 'Hydration for the Long Run',
    price: 45.00,
    description: 'Perfect for active lifestyles. Features an easy-grip surface and a spill-proof cap designed for one-handed use.',
    category: 'Sport',
    material: 'BPA-Free Tritan',
    capacity: '750ml',
    color: 'Ocean Blue',
    image: 'https://picsum.photos/seed/bottle2/800/800',
    rating: 4.9,
    reviews: 85,
    isFeatured: true
  },
  {
    id: 'satemade-luxe-1000',
    name: 'Satemade Luxe',
    tagline: 'The Statement Piece',
    price: 60.00,
    description: 'Elegance meets volume. A full 1L of pure, clear water in a stunning aesthetic frame. Guaranteed to stand out.',
    category: 'Office',
    material: 'Premium Glass',
    capacity: '1000ml',
    color: 'Pure Clear',
    image: 'https://picsum.photos/seed/bottle3/800/800',
    rating: 5.0,
    reviews: 42,
    isFeatured: true
  },
  {
    id: 'satemade-mini-350',
    name: 'Satemade Mini',
    tagline: 'Perfectly Portable',
    price: 28.00,
    description: 'Designed for the modern nomad. Fits perfectly in small bags and bike holders without sacrificing style.',
    category: 'Travel',
    material: 'Borosilicate Glass',
    capacity: '350ml',
    color: 'Frosted White',
    image: 'https://picsum.photos/seed/bottle4/800/800',
    rating: 4.7,
    reviews: 210
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop All', path: '/products' },
  { name: 'Our Story', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export const FEATURES = [
  {
    title: '100% BPA-Free',
    description: 'Food-grade materials only. No toxins, no plastic taste.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Temp Retention',
    description: 'Double-walled insulation keeps water cold for 12 hours.',
    icon: 'Thermometer'
  },
  {
    title: 'Eco-Friendly',
    description: 'One Satemade bottle replaces 1,500 plastic bottles per year.',
    icon: 'Leaf'
  },
  {
    title: 'Leak-Proof',
    description: 'Precision engineering ensures not a single drop is lost.',
    icon: 'Droplet'
  }
];
