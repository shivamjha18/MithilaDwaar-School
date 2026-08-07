import { AlertCircle, Camera, ShieldCheck, UserCheck } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const points = [
  {
    icon: ShieldCheck,
    title: 'Child Protection Policy',
    desc: 'A dedicated Child Protection Committee oversees student safety in line with POCSO guidelines. All staff undergo background verification and mandatory child-safety training.',
  },
  {
    icon: Camera,
    title: 'CCTV & Campus Monitoring',
    desc: 'CCTV coverage across classrooms, corridors, playgrounds and entry/exit points, monitored throughout school hours by trained security staff.',
  },
  {
    icon: UserCheck,
    title: 'Visitor & Pickup Verification',
    desc: 'Every visitor is logged and verified at the gate. Students are released only to parents or guardians listed on an authorized pickup list, checked via ID card.',
  },
  {
    icon: AlertCircle,
    title: 'Anti-Bullying & Grievance Redressal',
    desc: 'A zero-tolerance anti-bullying policy is enforced by trained counselors. Parents and students can raise concerns through our formal grievance redressal cell.',
  },
]

export default function TrustSafety() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_trustsafety_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_trustsafety_title')}</h2>
          <p className="text-navy/60">{t('section_trustsafety_desc')}</p>
        </div>

        <StaggerGroup className="grid sm:grid-cols-2 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="flex gap-4 bg-cream rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="bg-navy text-gold w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-navy mb-1.5">{title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center bg-navy/5 border border-navy/10 rounded-2xl p-6">
          <p className="text-navy/70 text-sm">
            To report a concern confidentially, contact our Grievance Officer:{' '}
            <span className="font-semibold text-navy">Ms. Anita Sharma</span> —{' '}
            <a href="mailto:grievance@mithiladwaar.edu" className="text-gold font-medium hover:underline">
              grievance@mithiladwaar.edu
            </a>{' '}
            · <a href="tel:+911234567891" className="text-gold font-medium hover:underline">+91 12345 67891</a>
          </p>
        </div>
      </div>
    </section>
  )
}
