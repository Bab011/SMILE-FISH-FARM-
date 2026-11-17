import {useState} from 'react';
import {Utensils} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'Smile Fish Farm',
  loading = 'lazy',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#141413] via-[#261E1A] to-[#141413] text-[#FAF4EC] p-6 text-center"
      >
        <div className="w-11 h-11 rounded-full border border-[#D43E05]/60 flex items-center justify-center mb-3">
          <Utensils className="w-5 h-5 text-[#E84A0C]" strokeWidth={1.5} />
        </div>
        <span className="font-serif text-base tracking-wide text-[#FAF4EC]">
          {fallbackTitle}
        </span>
        <span className="mt-1 text-xs text-[#FAF4EC]/70">
          Badore, Ajah · Lagos
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
