import {BUSINESS_INFO, NAV_LINKS, WHATSAPP_URLS} from '../data/brand';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141413] text-[#FAF4EC] border-t border-[#FAF4EC]/12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-semibold tracking-wide text-[#FAF4EC] uppercase">
              {BUSINESS_INFO.name}
            </p>
            <p className="mt-2 font-serif italic text-base text-[#E84A0C]">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="mt-3 text-xs text-[#FAF4EC]/65 max-w-xs leading-relaxed">
              {BUSINESS_INFO.supportingLine} Fresh catfish (400g to 1.5kg) and
              smoked catfish on request.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F4DFCE]">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF4EC]/80 hover:text-[#E84A0C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & WhatsApp Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F4DFCE]">
              Visit &amp; Enquire
            </h3>
            <address className="not-italic mt-4 text-sm text-[#FAF4EC]/80 leading-relaxed">
              {BUSINESS_INFO.fullAddress}
            </address>
            <div className="mt-3 flex flex-col gap-1.5 text-sm">
              <a
                href={WHATSAPP_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E84A0C] hover:text-[#FAF4EC] transition-colors font-medium tabular-nums"
              >
                WhatsApp: {BUSINESS_INFO.phoneDisplay}
              </a>
              <span className="text-xs text-[#FAF4EC]/65">
                {BUSINESS_INFO.deliveryNote}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#FAF4EC]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF4EC]/60">
          <p className="tabular-nums">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>Badore, Ajah, Lagos State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
