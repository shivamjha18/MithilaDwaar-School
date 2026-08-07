import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Star } from 'lucide-react'
import Counter from './Counter'
import { useLanguage } from '../context/LanguageContext'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Students learning together on campus',
  },
  {
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    alt: 'School library',
  },
  {
    img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop',
    alt: 'Kids playing sports on the school field',
  },
  {
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    alt: 'Smart classroom with students',
  },
]

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.alt}
            className="w-full h-[420px] lg:h-[520px] object-cover shrink-0"
          />
        ))}
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy w-9 h-9 rounded-full flex items-center justify-center shadow"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy w-9 h-9 rounded-full flex items-center justify-center shadow"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.img}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-gold' : 'w-2 bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-cream">
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #0f2159 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 -left-24 w-72 h-72 bg-navy/10 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 xl:px-14 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 text-navy text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Star size={14} className="text-gold fill-gold" /> {t('hero_badge')}
          </div>
          <h1 className="font-heading font-bold text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            {t('hero_title_1')} <span className="text-gold">{t('hero_title_2')}</span> {t('hero_title_3')}
          </h1>
          <p className="text-navy/70 text-lg leading-relaxed mb-8 max-w-xl">
            {t('hero_desc')}
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              {t('hero_cta_enroll')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-navy font-semibold px-2 py-3.5"
            >
              <PlayCircle size={22} className="text-gold" /> {t('hero_cta_tour')}
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              [25, '+', 'hero_stat_years'],
              [3200, '+', 'hero_stat_students'],
              [98, '%', 'hero_stat_result'],
            ].map(([num, suffix, labelKey]) => (
              <div key={labelKey}>
                <p className="font-heading font-bold text-navy text-2xl sm:text-3xl">
                  <Counter value={num} suffix={suffix} />
                </p>
                <p className="text-navy/60 text-sm">{t(labelKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <HeroCarousel />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[220px] z-10">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200&auto=format&fit=crop"
              alt="Happy student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-navy font-semibold text-sm">{t('hero_trusted')}</p>
              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
