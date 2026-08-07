import { Briefcase, Mail } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const openings = [
  { role: 'PGT Physics', dept: 'Senior Secondary', type: 'Full-time' },
  { role: 'TGT Mathematics', dept: 'Middle School', type: 'Full-time' },
  { role: 'Primary School Teacher', dept: 'Primary Wing', type: 'Full-time' },
  { role: 'Physical Education Teacher', dept: 'Sports Department', type: 'Full-time' },
  { role: 'School Counselor', dept: 'Student Wellbeing', type: 'Part-time' },
  { role: 'Front Office Executive', dept: 'Administration', type: 'Full-time' },
]

export default function Careers() {
  const { t } = useLanguage()

  return (
    <section id="careers" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_careers_eyebrow')}</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">{t('section_careers_title')}</h2>
          <p className="text-white/70">{t('section_careers_desc')}</p>
        </div>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {openings.map(({ role, dept, type }) => (
            <StaggerItem
              key={role}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="bg-gold/20 text-gold w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <Briefcase size={18} />
              </div>
              <div>
                <h3 className="text-white font-heading font-semibold text-sm mb-0.5">{role}</h3>
                <p className="text-white/50 text-xs">{dept}</p>
                <span className="inline-block mt-1.5 bg-white/10 text-white/70 text-[10px] font-medium px-2 py-0.5 rounded-full">
                  {type}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="text-center">
          <a
            href="mailto:careers@mithiladwaar.edu"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            <Mail size={18} /> Send Your Resume
          </a>
        </div>
      </div>
    </section>
  )
}
