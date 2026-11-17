import {useEffect, useState} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';
import {BUSINESS_INFO, NAV_LINKS, WHATSAPP_URLS} from '../data/brand';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAF4EC]/95 backdrop-blur-md border-b border-[#141413]/12'
          : 'bg-[#FAF4EC] border-b border-[#141413]/8'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Wordmark */}
        <a
          href="#home"
          className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D43E05]"
        >
          {BUSINESS_INFO.name}
        </a>

        {/* Zone 2: Clean single-line text navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#141413]/80 hover:text-[#D43E05] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#D43E05] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D43E05]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Harvest Vermilion Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] bg-[#D43E05] hover:bg-[#B83404] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413]"
          >
            <span>Order on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#141413] hover:text-[#D43E05] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D43E05]"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FAF4EC] border-t border-[#141413]/12 px-4 sm:px-6 pb-6 pt-4"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-[#141413] hover:text-[#D43E05] border-b border-[#141413]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5">
            <a
              href={WHATSAPP_URLS.general}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] bg-[#D43E05] hover:bg-[#B83404] rounded-sm transition-colors"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
