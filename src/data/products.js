export const products = [
  {
    id: 'w1',
    name: 'Asymmetric Wool Trench',
    price: 890,
    category: 'Women',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1520974735194-5c3c3d0b8c13?auto=format&fit=crop&w=800&q=80',
    description: 'Deconstructed wool blend with raw edges and an oversized silhouette. The architecture of modern outerwear.'
  },
  {
    id: 'm1',
    name: 'Structured Canvas Jacket',
    price: 450,
    category: 'Men',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80',
    description: 'Heavyweight washed canvas. Dropped shoulders. Industrial hardware.'
  },
  {
    id: 's1',
    name: 'Oversized Logo Hoodie',
    price: 290,
    category: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    description: 'French terry cotton. Subtle tonal embroidery. Boxy, cropped fit.'
  },
  {
    id: 'w2',
    name: 'Silk Bias Slip Dress',
    price: 520,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    description: '100% heavy silk charmeuse. Bias cut for a fluid drape. Adjustable micro straps.'
  },
  {
    id: 'm2',
    name: 'Pleated Wide Leg Trousers',
    price: 340,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    description: 'Italian wool blend. Double front pleats. Floor pooling length.'
  },
  {
    id: 's2',
    name: 'Technical Cargo Pants',
    price: 410,
    category: 'Streetwear',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    description: 'Water-repellent nylon. Articulated knees. Overlapping dimensional pockets.'
  },
  {
    id: 'w3',
    name: 'Sculptural Knit Top',
    price: 210,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    description: 'Engineered rib knit. Asymmetrical neckline. Form-fitting architecture.'
  },
  {
    id: 'm3',
    name: 'Distressed Selvedge Denim',
    price: 380,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    description: '14oz Japanese selvedge. Hand-distressed finish. Straight leg.'
  }
];

export const getFeaturedProducts = () => products.slice(0, 4);
export const getNewArrivals = () => products.filter(p => p.isNew);
