import { StarIcon } from "./icons";

const reasons = [
  "We are dedicated to serve you.",
  "Where you can expect — and get — personalized service.",
  "We pay attention to details and your individual needs.",
  "Our goal is your success.",
  "We maintain the highest standard of professionalism and integrity in our relationship with you.",
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            The Difference
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Why Choose Virag Shah CPA
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg bg-navy-50 p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="text-base leading-relaxed text-charcoal/80">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
