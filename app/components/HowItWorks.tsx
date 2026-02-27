import { CalendarIcon, DocumentIcon, CheckCircleIcon } from "./icons";

const steps = [
  {
    number: 1,
    icon: CalendarIcon,
    title: "Schedule a Consultation",
    description:
      "Reach out via email or phone to book a free initial consultation. We'll discuss your tax situation and how we can help.",
  },
  {
    number: 2,
    icon: DocumentIcon,
    title: "Share Your Documents",
    description:
      "Securely send your tax documents — W-2s, 1099s, prior returns, and any relevant financial records. We handle the rest.",
  },
  {
    number: 3,
    icon: CheckCircleIcon,
    title: "Relax & Get Results",
    description:
      "We prepare and review your returns with meticulous care, then walk you through everything before filing. No surprises.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-navy-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Simple Process
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
            Getting started is easy. Three simple steps to stress-free tax
            filing.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                {step.number}
              </div>
              <div className="mx-auto mt-5 flex h-12 w-12 items-center justify-center text-navy-900">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-charcoal/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
