export default function Newsletter() {
  return (
    <section className="py-32 section-pad bg-background text-center">
      <div className="max-w-2xl mx-auto">
        <span className="label-tag mb-4 block">Join The Circle</span>
        <h2 className="font-serif text-3xl md:text-5xl mb-6">Gain Access to the Archive.</h2>
        <p className="text-on-surface-variant mb-12">
          Subscribe to receive exclusive access to limited drops, archival pieces, and private events.
        </p>
        
        <form className="flex flex-col md:flex-row justify-center items-end gap-6 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full flex-1">
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-outline-variant py-3 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors placeholder:text-outline-variant"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
