import {ArrowDown, ArrowUpRight, MapPin} from 'lucide-react';
import {BUSINESS_INFO, HERO_IMAGE, WHATSAPP_URLS} from '../data/brand';
import {ResilientImage} from './ResilientImage';

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#FAF4EC] text-[#141413] overflow-hidden"
    >
      {/* Subtle warm blush ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(244,223,206,0.85),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#D43E05] mb-6">
              <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{BUSINESS_INFO.locationShort}</span>
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.06] font-semibold tracking-tight text-[#141413] max-w-xl">
              Good Food.
              <br />
              Good Mood.
            </h1>

            <div className="mt-6 w-20 h-[2px] bg-[#D43E05]" aria-hidden="true" />

            <p className="mt-6 text-base sm:text-lg font-medium text-[#141413] max-w-xl leading-relaxed">
              Fresh catfish for the meals worth remembering.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#574D46] max-w-xl leading-relaxed">
              From everyday family favourites to special Sunday gatherings, bring
              a little more flavour to your table with Smile Fish Farm.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#our-fish"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FFFFFF] bg-[#D43E05] hover:bg-[#B83404] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413]"
              >
                <span>Explore Our Fish</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={WHATSAPP_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#141413] bg-[#F4DFCE]/70 hover:bg-[#F4DFCE] border border-[#141413]/20 hover:border-[#141413]/40 rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D43E05]"
              >
                <span>Order on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#D43E05]" aria-hidden="true" />
              </a>
            </div>

            {/* Quiet brand footer strip */}
            <div className="mt-12 pt-6 border-t border-[#141413]/12 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#574D46]">
              <span className="font-serif italic text-sm font-medium text-[#D43E05]">
                {BUSINESS_INFO.supportingLine}
              </span>
              <span aria-hidden="true">·</span>
              <span>Fresh Catfish (400g – 1.5kg)</span>
              <span aria-hidden="true">·</span>
              <span>Smoked Catfish on Request</span>
            </div>
          </div>

          {/* Dominant Catfish Food Photography Column */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:min-h-[520px] rounded-sm overflow-hidden border border-[#141413]/12 bg-[#141413] shadow-xl">
              <ResilientImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
                fallbackTitle="Smile Fish Farm — Fresh Catfish"
                className="w-full h-full object-cover object-center"
              />
              {/* Measured gradient scrim at bottom for readable caption contrast */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141413]/85 via-[#141413]/35 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-[#FAF4EC]">
                <span className="tracking-wide font-medium">Nigerian Catfish</span>
                <span className="text-[#F4DFCE] font-medium">Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
