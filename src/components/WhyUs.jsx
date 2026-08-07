import { HeartHandshake, Shield, Sparkles, Users2 } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure Campus',
    desc: 'CCTV-monitored campus, GPS-enabled buses, and trained staff at every corner.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    desc: 'Art, music, sports and robotics clubs alongside a rigorous academic track.',
  },
  {
    icon: Users2,
    title: 'Experienced Faculty',
    desc: 'Passionate, trained educators with an average of 10+ years of experience.',
  },
  {
    icon: HeartHandshake,
    title: 'Parent Partnership',
    desc: 'Regular PTMs, a parent app, and transparent progress tracking year-round.',
  },
]

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section id="why-us" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_whyus_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">
            {t('section_whyus_title')}
          </h2>
        </div>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="text-center bg-cream rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="bg-navy text-gold w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-navy text-lg mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
