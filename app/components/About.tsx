import { CheckIcon } from "./icons";

const credentials = [
  "Licensed Certified Public Accountant",
  "Individual & Business Tax Specialist",
  "FBAR & PFIC Compliance Expert",
  "IRS Audit Representation",
  "Year-Round Tax Planning & Advisory",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Your CPA
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            About Virag Shah
          </h2>
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-charcoal/80">
          <p>
            Virag Shah is a licensed CPA dedicated to providing clear,
            reliable, and personalized tax services. With experience serving
            over 100 clients — from salaried professionals to small business
            owners — Virag brings a detail-oriented approach to every
            engagement.
          </p>
          <p>
            What sets Virag apart is deep expertise in international tax
            compliance, including FBAR filings and PFIC reporting — areas
            where many CPAs lack specialized knowledge. If you hold foreign
            bank accounts or investments in overseas funds, you need a CPA who
            understands the nuances and can help you stay penalty-free.
          </p>
          <p>
            Whether you need a straightforward individual return or complex
            multi-entity planning, Virag works closely with each client to
            develop a tax strategy that fits their goals and protects their
            financial future.
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
