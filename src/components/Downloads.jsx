import { Download, FileText } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const downloads = [
  { title: 'Fee Structure 2026-27', desc: 'Grade-wise annual and quarterly fee breakdown.', size: '240 KB' },
  { title: 'Academic Calendar', desc: 'Term dates, holidays, exams and PTM schedule.', size: '180 KB' },
  { title: 'Uniform List', desc: 'Approved uniform, PT kit and vendor details.', size: '95 KB' },
  { title: 'Book List by Grade', desc: 'Prescribed textbooks and stationery list.', size: '310 KB' },
  { title: 'Transport Route Map', desc: 'Bus routes, stops and fee slabs by zone.', size: '420 KB' },
  { title: 'Admission Brochure', desc: 'Full guide to programs, fees and admission process.', size: '1.1 MB' },
]

export default function Downloads() {
  const { t } = useLanguage()

  return (
    <section id="downloads" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_downloads_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_downloads_title')}</h2>
          <p className="text-navy/60">{t('section_downloads_desc')}</p>
        </div>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {downloads.map(({ title, desc, size }) => (
            <StaggerItem key={title}>
              <a
                href="#"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-navy/10 hover:border-gold/50 hover:shadow-lg transition-all group"
              >
                <div className="bg-navy/5 text-navy w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                  <FileText size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">{title}</h3>
                  <p className="text-navy/55 text-xs leading-relaxed mb-1">{desc}</p>
                  <span className="text-navy/40 text-[11px]">PDF · {size}</span>
                </div>
                <Download size={16} className="text-navy/30 group-hover:text-gold shrink-0 mt-1 transition-colors" />
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
