import { Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const items = [
  {
    name: 'Anjali Mehra',
    role: 'Parent, Grade 4',
    text: 'The teachers genuinely care about every child. My daughter looks forward to school every single day — that says everything.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Rohit Sharma',
    role: 'Parent, Grade 9',
    text: 'Excellent balance of academics and extracurriculars. The transparency through the parent app is something we truly value.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Priya Nair',
    role: 'Parent, Grade 1',
    text: 'From admission to daily updates, everything has been smooth. The campus is safe, warm, and full of joyful learning.',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_testimonials_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_testimonials_title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="bg-cream rounded-2xl p-7">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-navy/80 leading-relaxed mb-6">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <img src={item.img} alt={item.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-navy text-sm">{item.name}</p>
                  <p className="text-navy/50 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
