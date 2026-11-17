import {INSPIRATION_ITEMS} from '../data/brand';
import {ResilientImage} from './ResilientImage';

export function FoodInspiration() {
  return (
    <section
      id="inspiration"
      className="bg-[#FFFFFF] text-[#141413] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#D43E05]">
              <span className="w-8 h-[2px] bg-[#D43E05]" aria-hidden="true" />
              <span>Food Inspiration</span>
            </div>

            <h2 className="mt-4 font-serif text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.15] text-[#141413]">
              What’s Cooking?
            </h2>
          </div>

          <p className="text-base text-[#574D46] max-w-md leading-relaxed">
            Every kitchen has a story. What delicious meal are you planning
            next?
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSPIRATION_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-[#F4DFCE]/45 border border-[#141413]/10 rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full bg-[#141413] overflow-hidden">
                <ResilientImage
                  src={item.src}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#D43E05]">
                  {item.kicker}
                </span>

                <h3 className="mt-2 font-serif text-xl font-semibold text-[#141413]">
                  {item.title}
                </h3>

                <div
                  className="mt-3 w-10 h-[2px] bg-[#D43E05]"
                  aria-hidden="true"
                />

                <p className="mt-3 text-sm text-[#574D46] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#574D46]">
          Kitchen meal inspiration featuring Nigerian catfish dishes · Smile
          Fish Farm supplies fresh catfish and smoked catfish on request.
        </p>
      </div>
    </section>
  );
}
