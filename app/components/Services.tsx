import {
  UserIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartIcon,
  ClipboardDocumentListIcon,
} from "./icons";

const services = [
  {
    icon: BriefcaseIcon,
    title: "Entity Formation",
    description:
      "Forming a new entity begins with using business objectives to determine the entity type that will best suit your needs. We provide consultation on entity structure analysis to explain the tax implications of your choice of entity and jurisdiction. Our services make it easy to form new entities in all 50 U.S. states.",
    items: [],
  },
  {
    icon: BookOpenIcon,
    title: "Bookkeeping Services",
    description:
      "Accurate bookkeeping is important to sustaining and expanding a business. We provide detailed, analytical financial reports that enable business owners to understand and address each component of their company.",
    items: [
      "Transaction and related data entry",
      "Monitoring Accounts Receivable and Accounts Payable",
      "Performing Bank Reconciliations",
      "Analyzing outstanding checks/deposits",
      "Recording monthly adjusting journal entries",
      "Creating monthly financial reports (P&L, Balance Sheet & Cash Flows)",
    ],
  },
  {
    icon: UserIcon,
    title: "Tax Services",
    description:
      "Tax services for individuals and a wide range of businesses including LLCs, Partnerships, S-Corporations, and C-Corporations. Our goal is to help you stay in compliance with the law while paying the minimum amount of tax possible.",
    items: [
      "Individual Tax Return Preparation (1040)",
      "Business Tax Return Preparation (1065, 1120, 1120S)",
      "Multi-State & Out-of-State Tax Return Preparation",
      "Report of Foreign Bank and Financial Accounts (FBAR)",
      "Tax Compliance & Planning",
      "Annual Franchise Tax Returns",
    ],
  },
  {
    icon: ChartIcon,
    title: "Tax Planning",
    description:
      "The tax planning helps you to successfully and legally reduce your tax liability. Tax planning can be a significant challenge, if you are not an expert in such a field. This is why hiring a tax specialist is a great idea. Hiring an expert gives you an assurance that your tax issues will be handled with accuracy and you will enjoy the peace of mind that comes with knowing that you did the best you could to reduce your tax liability legitimately.",
    items: [],
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "IRS Forms 8938, 5471 & 5472",
    description:
      "Specialized filing for Statement of Specified Foreign Financial Assets (Form 8938), Information Return of U.S. Persons with respect to certain foreign corporations (Form 5471), and Information Return of a 25% Foreign-Owned U.S. Corporation (Form 5472). Avoid costly penalties with expert guidance.",
    items: [],
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
            Comprehensive tax, bookkeeping, and advisory solutions designed to
            protect your wealth and keep you compliant.
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
              {service.items.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-charcoal/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
