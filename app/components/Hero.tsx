export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-cream pt-20">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-navy-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Licensed CPA &middot; Tax &amp; Advisory
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
          Expert Tax Solutions for Individuals &amp; Businesses
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          Personalized tax preparation, strategic planning, and compliance
          services tailored to your unique financial situation. Navigate tax
          season with confidence.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:cpaviragshah33@gmail.com?subject=Consultation%20Request"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
          >
            Schedule a Free Consultation
          </a>
          <a
            href="#services"
            className="rounded-lg border-2 border-navy-900 px-8 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
