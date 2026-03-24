import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    if (categoryFilter === 'All') return products;
    if (categoryFilter === 'New') return products.filter(p => p.isNew);
    return products.filter(p => p.category === categoryFilter);
  }, [categoryFilter]);

  const categories = ['All', 'Women', 'Men', 'Streetwear', 'New'];

  return (
    <div className="section-pad py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-surface-container-high pb-8">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The Archive</h1>
          <p className="text-on-surface-variant max-w-md">
            Explore the full collection. Precision tailoring meets technical brutalism.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex gap-6 mt-8 md:mt-0 overflow-x-auto w-full md:w-auto hide-scroll">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={`label-tag whitespace-nowrap transition-colors ${
                categoryFilter === cat 
                  ? 'text-secondary border-b border-secondary pb-1' 
                  : 'text-outline-variant hover:text-primary'
              }`}
            >
              {cat === 'New' ? 'New Arrivals' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-surface-container-low overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Quick Add Tray */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, 'M'); 
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
      
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center text-on-surface-variant">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
