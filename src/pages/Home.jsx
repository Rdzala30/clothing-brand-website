import Hero from '../components/Hero';
import Collections from '../components/Collections';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrivals from '../components/NewArrivals';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col w-full -mt-20"> {/* Negative margin to push hero under transparent nav */}
      <Hero />
      <Collections />
      <FeaturedProducts />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
