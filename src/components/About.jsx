import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const pointKeys = ['about_point_1', 'about_point_2', 'about_point_3', 'about_point_4']

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=600&auto=format&fit=crop"
            alt="Students in classroom"
            className="rounded-2xl object-cover w-full h-64 mt-8"
          />
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
            alt="School building"
            className="rounded-2xl object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
            alt="School library"
            className="rounded-2xl object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop"
            alt="Kids playing sports"
            className="rounded-2xl object-cover w-full h-64 mt-8"
          />
        </div>

        <div>
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_about_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-5 leading-tight">
            {t('section_about_title')}
          </h2>
          <p className="text-navy/70 leading-relaxed mb-8">
            {t('about_desc')}
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {pointKeys.map((k) => (
              <li key={k} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                <span className="text-navy/80 text-sm">{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
