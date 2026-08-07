import { BadgeCheck, ShieldCheck, Globe2, Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const badges = [
  { icon: ShieldCheck, label: 'CBSE Affiliated', sub: 'Affiliation No. 1234567' },
  { icon: BadgeCheck, label: 'ISO 21001:2018', sub: 'Certified Institution' },
  { icon: Globe2, label: 'Member, NPSC', sub: 'National Progressive Schools' },
  { icon: Award, label: 'A+ Accredited', sub: 'State Education Board' },
]

export default function Affiliations() {
  const { t } = useLanguage()

  return (
    <section className="py-14 border-y border-navy/10 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <p className="text-center text-navy/50 text-xs font-semibold tracking-widest uppercase mb-8">
          {t('section_affiliations_eyebrow')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="bg-white text-navy w-11 h-11 rounded-full flex items-center justify-center shadow-sm shrink-0">
                <Icon size={20} />
              </div>
              <div className="text-left">
                <p className="text-navy font-semibold text-sm leading-tight">{label}</p>
                <p className="text-navy/50 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
