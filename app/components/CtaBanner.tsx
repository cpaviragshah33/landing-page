export default function CtaBanner() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Simplify Your Taxes?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Whether you&apos;re filing as an individual or running a business, get
          expert guidance tailored to your needs. Your first consultation is
          free.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:cpaviragshah33@gmail.com?subject=Consultation%20Request"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Schedule a Free Consultation
          </a>
          <span className="text-white/50">or</span>
          <a
            href="tel:+14086806943"
            className="text-base font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent"
          >
            Call (408) 680-6943
          </a>
        </div>
      </div>
    </section>
  );
}
