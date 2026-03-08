import { CheckIcon } from "./icons";

const credentials = [
  "Licensed Certified Public Accountant",
  "Individual & Business Tax Specialist",
  "Bookkeeping & Business Advisory",
  "FBAR & International Tax Reporting",
  "Entity Formation & Structuring",
  "Year-Round Tax Planning & Advisory",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Your CPA
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            About Us
          </h2>
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-charcoal/80">
          <p>
            Virag Shah is a Licensed Certified Public Accountant (CPA) with
            experience spanning taxation and accounting across the United States.
            As the founder of an independent accounting practice in California,
            Virag Shah combines global financial expertise with a deeply
            personalized approach — delivering comprehensive tax preparation,
            bookkeeping, and business advisory services tailored to each
            client&apos;s unique needs.
          </p>
        </div>

        <ul className="mt-8 space-y-3">
          {credentials.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-base font-medium text-charcoal">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="mailto:cpaviragshah33@gmail.com?subject=Consultation%20Request"
            className="inline-block rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
