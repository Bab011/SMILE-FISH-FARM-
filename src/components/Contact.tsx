import {useState} from 'react';
import {ArrowUpRight, MapPin, Phone, Truck} from 'lucide-react';
import {
  BUSINESS_INFO,
  WHATSAPP_URLS,
  buildCustomWhatsAppUrl,
} from '../data/brand';

const SIZE_OPTIONS = [
  'Any available size',
  '400g – 600g',
  '700g – 1kg',
  '1.1kg – 1.5kg',
] as const;

export function Contact() {
  const [selectedProduct, setSelectedProduct] = useState<'fresh' | 'smoked'>(
    'fresh',
  );
  const [selectedSize, setSelectedSize] = useState<string>('Any available size');
  const [deliveryCity, setDeliveryCity] = useState<string>('');

  const customWhatsAppHref = buildCustomWhatsAppUrl({
    product: selectedProduct,
    size: selectedSize,
    location: deliveryCity,
  });

  return (
    <section
      id="contact"
      className="bg-[#141413] text-[#FAF4EC] py-20 sm:py-24 lg:py-28 border-t border-[#141413]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Contact & Location Details */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#E84A0C]">
              <span className="w-8 h-[2px] bg-[#E84A0C]" aria-hidden="true" />
              <span>Contact &amp; Ordering</span>
            </div>

            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.12] text-[#FAF4EC]">
              Let’s get you smiling.
            </h2>

            <p className="mt-5 text-base text-[#FAF4EC]/80 leading-relaxed max-w-lg">
              Whether you’re planning a family meal, preparing for the weekend
              or simply looking for fresh catfish, we’d be happy to hear from
              you.
            </p>

            <div className="mt-9 space-y-6 border-t border-[#FAF4EC]/15 pt-8">
              <div className="flex items-start gap-4">
                <MapPin
                  className="w-5 h-5 text-[#E84A0C] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#FAF4EC]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <address className="not-italic mt-1 text-sm text-[#FAF4EC]/75 leading-relaxed">
                    {BUSINESS_INFO.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="w-5 h-5 text-[#E84A0C] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#F4DFCE]">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="mt-1 inline-block text-base font-medium text-[#FAF4EC] hover:text-[#E84A0C] transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Truck
                  className="w-5 h-5 text-[#E84A0C] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#F4DFCE]">
                    Delivery
                  </span>
                  <p className="mt-1 text-sm text-[#FAF4EC]/80">
                    {BUSINESS_INFO.deliveryNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <a
                href={WHATSAPP_URLS.base}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-[#FFFFFF] bg-[#D43E05] hover:bg-[#B83404] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF4EC]"
              >
                <span>Chat With Us on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Interactive Direct WhatsApp Enquiry Helper */}
          <div className="lg:col-span-6">
            <div className="bg-[#1F1D1B] border border-[#FAF4EC]/12 rounded-sm p-6 sm:p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-semibold text-[#FAF4EC]">
                Quick WhatsApp Enquiry
              </h3>
              <p className="mt-2 text-sm text-[#FAF4EC]/75 leading-relaxed">
                Select what you would like to enquire about and open WhatsApp
                with your message ready.
              </p>

              <div className="mt-7 space-y-6">
                {/* Product Type Selector */}
                <div>
                  <span className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#F4DFCE] mb-2.5">
                    Fish Option
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct('fresh')}
                      className={`px-4 py-3 text-left rounded-sm border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E84A0C] ${
                        selectedProduct === 'fresh'
                          ? 'bg-[#FAF4EC] text-[#141413] border-[#FAF4EC]'
                          : 'bg-[#141413]/70 text-[#FAF4EC] border-[#FAF4EC]/20 hover:border-[#E84A0C]/70'
                      }`}
                    >
                      <span className="block text-sm font-semibold">
                        Fresh Catfish
                      </span>
                      <span
                        className={`block mt-0.5 text-xs ${
                          selectedProduct === 'fresh'
                            ? 'text-[#574D46]'
                            : 'text-[#FAF4EC]/65'
                        }`}
                      >
                        400g – 1.5kg sizes
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct('smoked')}
                      className={`px-4 py-3 text-left rounded-sm border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E84A0C] ${
                        selectedProduct === 'smoked'
                          ? 'bg-[#FAF4EC] text-[#141413] border-[#FAF4EC]'
                          : 'bg-[#141413]/70 text-[#FAF4EC] border-[#FAF4EC]/20 hover:border-[#E84A0C]/70'
                      }`}
                    >
                      <span className="block text-sm font-semibold">
                        Smoked Catfish
                      </span>
                      <span
                        className={`block mt-0.5 text-xs ${
                          selectedProduct === 'smoked'
                            ? 'text-[#574D46]'
                            : 'text-[#FAF4EC]/65'
                        }`}
                      >
                        Available on request
                      </span>
                    </button>
                  </div>
                </div>

                {/* Preferred Size Selector (Fresh Catfish only) */}
                {selectedProduct === 'fresh' && (
                  <div>
                    <label
                      htmlFor="size-select"
                      className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#F4DFCE] mb-2.5"
                    >
                      Preferred Size Range
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {SIZE_OPTIONS.map((size) => {
                        const active = selectedSize === size;
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-2.5 text-xs font-medium rounded-sm border transition-colors duration-150 tabular-nums whitespace-nowrap truncate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E84A0C] ${
                              active
                                ? 'bg-[#D43E05] text-[#FFFFFF] border-[#D43E05] font-semibold'
                                : 'bg-[#141413]/60 text-[#FAF4EC]/85 border-[#FAF4EC]/20 hover:border-[#E84A0C]/70'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Delivery Area Input */}
                <div>
                  <label
                    htmlFor="delivery-location"
                    className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#F4DFCE] mb-2.5"
                  >
                    Your Delivery Area (Optional)
                  </label>
                  <input
                    id="delivery-location"
                    type="text"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    placeholder="e.g. Ajah, Lekki, Ikeja, Abuja..."
                    className="w-full px-4 py-3 text-sm bg-[#141413] text-[#FAF4EC] placeholder:text-[#FAF4EC]/40 border border-[#FAF4EC]/20 rounded-sm focus:outline-none focus:border-[#E84A0C] transition-colors"
                  />
                </div>

                {/* Send Action */}
                <div className="pt-2">
                  <a
                    href={customWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FFFFFF] bg-[#D43E05] hover:bg-[#B83404] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF4EC]"
                  >
                    <span>Send Enquiry on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-xs text-[#FAF4EC]/60 text-center">
                    Opens WhatsApp directly with Smile Fish Farm ({BUSINESS_INFO.phoneDisplay})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
