const items = [
  { label: "Licensed CPA" },
  { label: "100+ Clients Served" },
  { label: "Individual & Business" },
  { label: "IRS Compliant" },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-900 py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-sm font-semibold tracking-wide text-white/90">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
