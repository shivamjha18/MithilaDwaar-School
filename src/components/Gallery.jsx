import { useLanguage } from '../context/LanguageContext'

const images = [
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
]

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_gallery_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_gallery_title')}</h2>
          <p className="text-navy/60">{t('section_gallery_desc')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={src}
                alt="School campus life"
                className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                  i === 0 ? 'h-full min-h-[300px]' : 'h-40 md:h-48'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
