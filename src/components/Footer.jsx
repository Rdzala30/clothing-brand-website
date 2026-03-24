import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container-high py-20 mt-20">
      <div className="section-pad grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
            Atelier
          </Link>
          <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
            The Digital Atelier. We reject cluttered utility for high-end editorial experiences.
            Born from the intersection of minimal architecture and premium craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-on-surface-variant mb-6">Explore</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/shop?category=Men" className="text-sm hover:text-secondary transition-colors">Men's Collection</Link></li>
            <li><Link to="/shop?category=Women" className="text-sm hover:text-secondary transition-colors">Women's Collection</Link></li>
            <li><Link to="/shop?category=Streetwear" className="text-sm hover:text-secondary transition-colors">Streetwear</Link></li>
            <li><Link to="/shop?category=New" className="text-sm hover:text-secondary transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-on-surface-variant mb-6">Connect</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-sm hover:text-secondary transition-colors">Instagram</a></li>
            <li><a href="#" className="text-sm hover:text-secondary transition-colors">Twitter</a></li>
            <li><a href="#" className="text-sm hover:text-secondary transition-colors">Journal</a></li>
            <li><a href="#" className="text-sm hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="section-pad mt-20 pt-8 border-t border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <p>&copy; {new Date().getFullYear()} ATELIER. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
