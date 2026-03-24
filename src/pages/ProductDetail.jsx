import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  
  const product = products.find(p => p.id === id);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  if (!product) {
    return <Navigate to="/shop" />;
  }

  return (
    <div className="min-h-[calc(100vh-80px)] section-pad py-12 md:py-20 flex flex-col md:flex-row gap-12 lg:gap-24">
      
      {/* Visuals Column */}
      <div className="w-full md:w-1/2">
        <div className="aspect-[3/4] w-full bg-surface-container-low overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info Column */}
      <div className="w-full md:w-1/2 flex flex-col pt-8 md:pt-16">
        <span className="label-tag mb-4">{product.category}</span>
        <h1 className="font-serif text-4xl lg:text-5xl mb-6 text-on-surface">{product.name}</h1>
        <span className="font-serif text-2xl text-primary mb-10">${product.price}</span>
        
        <p className="text-on-surface-variant leading-relaxed max-w-md mb-12">
          {product.description}
        </p>

        <div className="mt-auto">
          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4 text-sm uppercase tracking-widest font-medium">
              <span>Select Size</span>
              <button className="text-on-surface-variant hover:text-secondary underline underline-offset-4">Size Guide</button>
            </div>
            <div className="flex gap-4">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center font-medium transition-all ${
                    selectedSize === size 
                      ? 'bg-primary text-on-primary' 
                      : 'border border-outline-variant text-primary hover:border-secondary hover:text-secondary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={() => addToCart(product, selectedSize)}
            className="w-full btn-primary justify-center text-lg py-5"
          >
            Add To Cart
          </button>
          
          <div className="mt-8 pt-8 border-t border-surface-container-high grid grid-cols-2 gap-4 text-xs tracking-widest uppercase text-on-surface-variant">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-medium">Shipping</span>
              <span>Free standard delivery</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-primary font-medium">Returns</span>
              <span>14-day return window</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
