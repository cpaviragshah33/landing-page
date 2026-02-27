import {
  UserIcon,
  BuildingIcon,
  ChartIcon,
  ShieldCheckIcon,
  GlobeIcon,
} from "./icons";

const services = [
  {
    icon: UserIcon,
    title: "Individual Tax Returns",
    description:
      "Accurate and timely filing for W-2 employees, freelancers, and self-employed individuals. Maximize your deductions and minimize your liability.",
  },
  {
    icon: BuildingIcon,
    title: "Business Tax Returns",
    description:
      "Comprehensive tax preparation for LLCs, S-Corps, partnerships, and sole proprietorships. Stay compliant while optimizing your tax position.",
  },
  {
    icon: ChartIcon,
    title: "Tax Planning",
    description:
      "Proactive strategies to reduce your tax burden year-round. Retirement planning, estimated payments, and entity structuring advice.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Compliance & Advisory",
    description:
      "IRS correspondence handling, audit support, and ongoing compliance guidance to keep you in good standing with tax authorities.",
  },
  {
    icon: GlobeIcon,
    title: "FBAR & PFIC",
    description:
      "Specialized reporting for foreign bank accounts (FBAR/FinCEN 114) and Passive Foreign Investment Companies. Avoid costly penalties with expert guidance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal/70">
            Comprehensive tax and advisory solutions designed to protect your
            wealth and keep you compliant.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-full rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-charcoal/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
