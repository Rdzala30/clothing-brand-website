import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image layer with overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-pad flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-primary mb-4 block">
            The Archive of Silence
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8">
            Architectural<br />Simplicity.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="max-w-md text-primary font-light text-sm md:text-base leading-relaxed mb-10 mx-auto">
            Curated wearables for the modern eye. Born from the intersection of art and utility.
          </p>

          <Link to="/shop" className="btn-primary" style={{
            background: 'linear-gradient(135deg, #c6c6c8, #454749)',
            color: '#0e0e0e',
            fontWeight: 600
          }}>
            Explore Collections
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">Scroll</span>
        <div className="w-[1px] h-12 bg-outline-variant relative overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full h-1/2 bg-primary"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
