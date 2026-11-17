import {Flame, MapPin, MessageCircle, Scale} from 'lucide-react';
import {WHY_CHOOSE_ITEMS} from '../data/brand';

function FeatureIcon({
  name,
}: {
  name: (typeof WHY_CHOOSE_ITEMS)[number]['icon'];
}) {
  const iconProps = {
    className: 'w-4 h-4 text-[#FFFFFF]',
    strokeWidth: 1.75,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'scale':
      return <Scale {...iconProps} />;
    case 'flame':
      return <Flame {...iconProps} />;
    case 'message':
      return <MessageCircle {...iconProps} />;
    case 'mapPin':
      return <MapPin {...iconProps} />;
  }
}

export function WhyChooseSmile() {
  return (
    <section
      aria-labelledby="why-smile-heading"
      className="bg-[#FAF4EC] text-[#141413] py-20 sm:py-24 border-b border-[#141413]/10"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-[#141413]/12">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#D43E05]">
              <span className="w-8 h-[2px] bg-[#D43E05]" aria-hidden="true" />
              <span>Why Choose Smile</span>
            </div>
            <h2
              id="why-smile-heading"
              className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.4rem)] font-semibold leading-tight text-[#141413]"
            >
              Thoughtful sourcing, direct from Badore
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#574D46] max-w-md">
            Simple ordering, clear size options, and direct WhatsApp care from
            our cooperative farm to your kitchen.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.index}
              className="flex flex-col pt-2 lg:pr-4"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#141413]/10">
                <span className="font-serif text-lg font-semibold text-[#D43E05] tabular-nums">
                  {item.index}.
                </span>
                <div className="w-9 h-9 rounded-full bg-[#D43E05] flex items-center justify-center">
                  <FeatureIcon name={item.icon} />
                </div>
              </div>

              <h3 className="mt-5 font-serif text-xl font-semibold text-[#141413]">
                {item.title}
              </h3>

              <p className="mt-2.5 text-sm text-[#574D46] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
