import { Baby, BookOpenCheck, FlaskConical, Trophy } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const programs = [
  { icon: Baby, titleKey: 'prog_preprimary_title', rangeKey: 'prog_preprimary_range', descKey: 'prog_preprimary_desc' },
  { icon: BookOpenCheck, titleKey: 'prog_primary_title', rangeKey: 'prog_primary_range', descKey: 'prog_primary_desc' },
  { icon: FlaskConical, titleKey: 'prog_middle_title', rangeKey: 'prog_middle_range', descKey: 'prog_middle_desc' },
  { icon: Trophy, titleKey: 'prog_senior_title', rangeKey: 'prog_senior_range', descKey: 'prog_senior_desc' },
]

export default function Academics() {
  const { t } = useLanguage()

  return (
    <section id="academics" className="py-20 lg:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_academics_eyebrow')}</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">{t('section_academics_title')}</h2>
          <p className="text-white/70">{t('section_academics_desc')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, titleKey, rangeKey, descKey }) => (
            <div
              key={titleKey}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <div className="bg-gold text-navy w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{t(titleKey)}</h3>
              <p className="text-gold text-xs font-medium mb-3">{t(rangeKey)}</p>
              <p className="text-white/70 text-sm leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
