import { Link } from 'react-router-dom';
import { getNewArrivals } from '../data/products';

export default function NewArrivals() {
  const products = getNewArrivals().slice(0, 3);

  return (
    <section className="py-24 section-pad bg-background">
      <div className="flex flex-col lg:flex-row gap-16 item-start">
        
        {/* Left Editorial Column */}
        <div className="lg:w-1/3 pt-12">
          <span className="label-tag mb-4 block">Seasonal Drop</span>
          <h2 className="font-serif text-5xl md:text-6xl text-on-surface mb-8 leading-tight">
            The<br />New<br />Volume.
          </h2>
          <p className="text-on-surface-variant leading-relaxed max-w-sm mb-12">
            This season explores the tension between brutalist architecture and organic materials.
            Oversized silhouettes grounded by precise tailoring.
          </p>
          <Link to="/shop?category=New" className="btn-ghost">
            View Collection
          </Link>
        </div>

        {/* Right Asymmetrical Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className={`group block ${i === 1 ? 'md:mt-24' : ''} ${i === 2 ? 'md:col-span-2 aspect-[21/9] h-80' : 'aspect-[3/4]'}`}
            >
              <div className="w-full h-full relative overflow-hidden bg-surface-container-low mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-secondary font-medium font-sans uppercase tracking-widest text-sm">{product.name}</h3>
                <span className="font-serif">${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
