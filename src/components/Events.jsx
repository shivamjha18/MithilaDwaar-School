import { useLanguage } from '../context/LanguageContext'

const events = [
  {
    title: 'International Yoga Day Celebrated with Great Enthusiasm',
    images: [
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=700&auto=format&fit=crop',
    ],
  },
  {
    title: 'Annual Sports Day — Students Shine on the Field',
    images: [
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=700&auto=format&fit=crop',
    ],
  },
  {
    title: 'Independence Day — A Celebration of Patriotism',
    images: [
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=700&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=700&auto=format&fit=crop',
    ],
  },
]

export default function Events() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_events_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_events_title')}</h2>
          <p className="text-navy/60">{t('section_events_desc')}</p>
        </div>

        <div className="space-y-16">
          {events.map(({ title, images }) => (
            <div key={title}>
              <h3 className="text-center font-heading font-bold text-navy text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
                {title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {images.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt={title}
                    className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
