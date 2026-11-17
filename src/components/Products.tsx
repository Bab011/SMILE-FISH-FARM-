import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {PRODUCTS, type ProductItem} from '../data/brand';
import {ResilientImage} from './ResilientImage';

function ProductCard({product}: {product: ProductItem}) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const currentPhoto = product.photos[activePhotoIndex] ?? product.photos[0];

  return (
    <article className="group flex flex-col bg-[#FAF4EC] border border-[#141413]/12 rounded-sm overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl">
      {/* 4:3 Product Photography Stage */}
      <div className="relative aspect-[4/3] w-full bg-[#141413] overflow-hidden">
        <ResilientImage
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fallbackTitle={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Subtle Photo View Switcher */}
      {product.photos.length > 1 && (
        <div
          role="tablist"
          aria-label={`${product.title} photo views`}
          className="flex items-center gap-1.5 px-6 pt-4 pb-1 bg-[#FAF4EC]"
        >
          {product.photos.map((photo, index) => {
            const isSelected = index === activePhotoIndex;
            return (
              <button
                key={photo.label}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActivePhotoIndex(index)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D43E05] ${
                  isSelected
                    ? 'bg-[#141413] text-[#FAF4EC]'
                    : 'bg-[#F4DFCE] text-[#141413]/80 hover:bg-[#e9ceba] hover:text-[#141413]'
                }`}
              >
                {photo.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-8 pt-5">
        <p className="text-xs font-medium tracking-wide text-[#574D46] tabular-nums">
          {product.meta}
        </p>

        <h3 className="mt-2 font-serif text-2xl sm:text-[28px] font-semibold text-[#141413] leading-snug">
          {product.title}
        </h3>

        <div className="mt-3 w-12 h-[2px] bg-[#D43E05]" aria-hidden="true" />

        <p className="mt-4 text-sm sm:text-base text-[#574D46] leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="mt-7 pt-5 border-t border-[#141413]/10">
          <a
            href={product.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FFFFFF] bg-[#D43E05] hover:bg-[#B83404] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413]"
          >
            <span>{product.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section
      id="our-fish"
      className="bg-[#F4DFCE] text-[#141413] py-20 sm:py-24 lg:py-28 border-t border-[#141413]/10"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#D43E05]">
            <span className="w-8 h-[2px] bg-[#D43E05]" aria-hidden="true" />
            <span>Our Fish</span>
          </div>

          <h2 className="mt-4 font-serif text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.15] text-[#141413]">
            A little something for your kitchen
          </h2>

          <p className="mt-4 text-base text-[#574D46] leading-relaxed">
            Good meals begin with good ingredients. Discover the catfish options
            available from Smile.
          </p>
        </div>

        {/* Two Product Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
