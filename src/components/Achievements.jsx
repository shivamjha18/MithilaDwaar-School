import { Award, Medal, Rocket, Trophy } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const achievements = [
  {
    icon: Trophy,
    title: 'State Topper 2026',
    desc: 'Aarav Sharma (Grade 12) secured Rank 1 in the state CBSE board exams.',
  },
  {
    icon: Medal,
    title: 'National Science Olympiad',
    desc: '12 students won Gold & Silver medals at the National Science Olympiad 2026.',
  },
  {
    icon: Rocket,
    title: 'Robotics Nationals',
    desc: 'Our Robotics Club represented the state at the National Robotics Championship.',
  },
  {
    icon: Award,
    title: 'Best CBSE School Award',
    desc: 'Recognized as one of the Top 10 CBSE Schools in the region, 2025.',
  },
]

export default function Achievements() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_achievements_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_achievements_title')}</h2>
          <p className="text-navy/60">{t('section_achievements_desc')}</p>
        </div>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="border border-navy/10 rounded-2xl p-6 hover:border-gold/50 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="bg-gold/15 text-gold w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
