import { getFeaturedProducts } from '../data/products';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function FeaturedProducts() {
  const products = getFeaturedProducts();
  const { addToCart } = useCart();

  return (
    <section className="py-24 section-pad bg-surface-container-low overflow-hidden">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="label-tag mb-4 block">Essential Pieces</span>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface">Daily Essentials</h2>
        </div>
        <Link to="/shop" className="btn-ghost">
          Discover More
        </Link>
      </div>

      {/* Horizontal Scroller */}
      <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll">
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] md:min-w-[340px] snap-start group relative">
            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-surface-container overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Quick Add Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, 'M'); // Default size M for quick add
                  }}
                  className="w-full py-3 bg-surface-container-highest/90 backdrop-blur-md text-on-surface text-sm tracking-widest uppercase font-medium hover:bg-secondary hover:text-on-secondary transition-colors"
                >
                  Quick Add
                </button>
              </div>
            </Link>
            
            <div className="flex justify-between items-start gap-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-medium text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
                <p className="text-sm tracking-widest uppercase text-on-surface-variant mt-1">{product.category}</p>
              </Link>
              <span className="font-serif text-lg">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
