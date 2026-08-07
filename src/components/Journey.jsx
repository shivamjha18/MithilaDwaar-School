import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const milestones = [
  { year: '2001', title: 'Foundation Laid', desc: 'MithilaDwaar School opens its doors with 120 students and 8 teachers.' },
  { year: '2007', title: 'CBSE Affiliation', desc: 'Granted full CBSE affiliation, marking a major step in academic credibility.' },
  { year: '2012', title: 'New Senior Campus', desc: 'A dedicated senior secondary block with science and computer labs was inaugurated.' },
  { year: '2016', title: 'Smart Classrooms', desc: 'Every classroom upgraded with interactive smart boards and digital learning tools.' },
  { year: '2021', title: '20 Years of Excellence', desc: 'Celebrated two decades with over 10,000 alumni across the world.' },
  { year: '2026', title: '3200+ Students Strong', desc: 'Today, MithilaDwaar stands as one of the region\'s most trusted CBSE institutions.' },
]

export default function Journey() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_journey_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_journey_title')}</h2>
          <p className="text-navy/60">{t('section_journey_desc')}</p>
        </div>

        <StaggerGroup className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-navy/10 sm:-translate-x-1/2" />
          <div className="space-y-10 sm:space-y-0">
            {milestones.map((m, i) => (
              <StaggerItem key={m.year} className="relative sm:grid sm:grid-cols-2 sm:gap-10 sm:mb-14 last:sm:mb-0">
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}>
                  <span className="inline-block text-gold font-heading font-bold text-2xl mb-1">{m.year}</span>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-1">{m.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{m.desc}</p>
                </div>
                <span className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-white shadow" />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  )
}
