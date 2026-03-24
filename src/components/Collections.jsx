import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Collections() {
  return (
    <section className="py-24 section-pad bg-background">
      <div className="mb-16 flex justify-between items-end">
        <h2 className="font-serif text-3xl md:text-4xl text-on-surface">Collections</h2>
        <Link to="/shop" className="text-sm border-b border-on-surface pb-1 hover:text-secondary hover:border-secondary transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/shop?category=${cat.name === 'New Arrivals' ? 'New' : cat.name}`}
            className="group block"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="font-sans text-sm tracking-widest uppercase text-primary group-hover:text-secondary transition-colors">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
