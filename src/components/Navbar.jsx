import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container-high transition-all duration-300">
      <div className="section-pad h-20 flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="hidden lg:flex gap-8">
          <Link to="/shop?category=Men" className="text-sm font-medium hover:text-secondary transition-colors">Men</Link>
          <Link to="/shop?category=Women" className="text-sm font-medium hover:text-secondary transition-colors">Women</Link>
          <Link to="/shop?category=Streetwear" className="text-sm font-medium hover:text-secondary transition-colors">Streetwear</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-primary hover:text-secondary">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-widest uppercase">
          Atelier
        </Link>

        {/* Right Nav */}
        <nav className="flex gap-6 items-center">
          <Link to="/shop?category=New" className="hidden lg:block text-sm font-medium hover:text-secondary transition-colors">New Arrivals</Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-primary hover:text-secondary transition-colors"
          >
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-secondary text-on-secondary rounded-full text-[10px] flex items-center justify-center font-medium">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
