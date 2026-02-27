import { PhoneIcon, EnvelopeIcon } from "./icons";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-navy-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold text-white">
              Virag Shah, CPA
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Trusted tax preparation and advisory services for individuals and
              businesses.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+14086806943"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4" />
                  (408) 680-6943
                </a>
              </li>
              <li>
                <a
                  href="mailto:cpaviragshah33@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  cpaviragshah33@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Virag Shah, CPA. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
