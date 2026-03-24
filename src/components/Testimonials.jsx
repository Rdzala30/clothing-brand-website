export default function Testimonials() {
  const testimonials = [
    {
      quote: "A masterclass in modern tailoring. The weight and drape of the trench coat feel bespoke.",
      author: "HYPEBEAST"
    },
    {
      quote: "Atelier continues to prove that minimalism doesn't have to mean lacking in detail.",
      author: "VOGUE RUNWAY"
    },
    {
      quote: "The perfect intersection of technical fabrics and architectural silhouettes.",
      author: "GQ STYLE"
    }
  ];

  return (
    <section className="py-24 section-pad bg-surface-container-high border-y border-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
        {testimonials.map((t, i) => (
          <div key={i} className="pt-8 md:pt-0 px-4">
            <p className="font-serif text-lg md:text-xl italic text-primary mb-8 leading-relaxed">"{t.quote}"</p>
            <span className="label-tag">{t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
