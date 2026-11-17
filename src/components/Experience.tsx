import {ArrowUpRight} from 'lucide-react';
import {BUSINESS_INFO, EXPERIENCE_IMAGE, WHATSAPP_URLS} from '../data/brand';
import {ResilientImage} from './ResilientImage';

export function Experience() {
  return (
    <section
      id="about"
      className="bg-[#E84A0C] text-[#141413] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Warm Cream Editorial Card framed in Harvest Vermilion (inspired by reference design) */}
        <div className="bg-[#FAF4EC] rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#141413]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Lifestyle Dining Photography */}
            <div className="lg:col-span-7 flex items-stretch">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[440px] rounded-sm overflow-hidden border border-[#141413]/10 bg-[#141413]">
                <ResilientImage
                  src={EXPERIENCE_IMAGE.src}
                  alt={EXPERIENCE_IMAGE.alt}
                  fallbackTitle="The Smile Dining Experience"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Editorial Brand Story */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#D43E05]">
                <span className="w-8 h-[2px] bg-[#D43E05]" aria-hidden="true" />
                <span>The Smile Experience</span>
              </div>

              <h2 className="mt-4 font-serif text-[clamp(1.85rem,3.4vw,2.65rem)] font-semibold leading-[1.14] text-[#141413]">
                It’s more than a meal. It’s a reason to smile.
              </h2>

              <div className="mt-6 w-16 h-[2px] bg-[#D43E05]" aria-hidden="true" />

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#574D46] leading-relaxed">
                <p>
                  The familiar aroma of a pot of soup. A beautifully prepared
                  family meal. That first satisfying taste after a long day.
                </p>
                <p>Food has a way of bringing people together.</p>
                <p>
                  At {BUSINESS_INFO.name}, we believe good food deserves good
                  ingredients—and every memorable meal deserves a reason to
                  smile.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#141413]/12 flex flex-wrap items-center justify-between gap-4">
                <span className="font-serif italic text-base font-medium text-[#D43E05]">
                  {BUSINESS_INFO.supportingLine}
                </span>

                <a
                  href={WHATSAPP_URLS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#141413] hover:text-[#D43E05] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D43E05]"
                >
                  <span>Speak With Us</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D43E05]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
