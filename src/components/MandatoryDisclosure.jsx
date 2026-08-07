import { FileCheck2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const generalInfo = [
  ['CBSE Affiliation Number', '1234567'],
  ['School Code', '54321'],
  ['Year of Establishment', '2001'],
  ['Managed By', 'MithilaDwaar Educational Trust (Reg. No. TR/2000/00456)'],
  ['Address', '123, Education Lane, Sector 21, New Delhi, 110021'],
  ['Principal', 'Dr. Meera Kapoor'],
  ['Affiliation Status', 'Permanent'],
  ['Land Area', '4.2 Acres'],
]

const infra = [
  ['Total Classrooms', '48'],
  ['Science Laboratories', '3 (Physics, Chemistry, Biology)'],
  ['Computer Labs', '4'],
  ['Library Area', '2,400 sq. ft. — 20,000+ books'],
  ['Indoor Sports Facility', 'Yes'],
  ['Playground Area', '1.1 Acres'],
  ['Fire & Safety Certificate', 'Valid till 2027'],
  ['Health & Sanitation Certificate', 'Valid'],
]

const staff = [
  ['Total Teaching Staff', '186'],
  ['Teachers with Postgraduate Degrees', '142'],
  ['Teachers with B.Ed. / Equivalent', '186'],
  ['Average Teaching Experience', '10.2 years'],
  ['Student–Teacher Ratio', '18:1'],
]

const results = [
  ['2025-26 (Class X)', '99% Pass', '3.4 Average CGPA'],
  ['2025-26 (Class XII)', '98% Pass', '88.6% Average'],
  ['2024-25 (Class X)', '98% Pass', '3.3 Average CGPA'],
  ['2024-25 (Class XII)', '97% Pass', '87.1% Average'],
]

function Table({ rows, cols }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-navy/10">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/60'}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${
                    j === 0 ? 'font-medium text-navy w-1/2 sm:w-2/5' : 'text-navy/70'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function MandatoryDisclosure() {
  const { t } = useLanguage()

  return (
    <section id="disclosure" className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 text-navy text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <FileCheck2 size={15} className="text-gold" /> {t('section_disclosure_eyebrow')}
          </div>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_disclosure_title')}</h2>
          <p className="text-navy/60">{t('section_disclosure_desc')}</p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-heading font-semibold text-navy text-lg mb-3">General Information</h3>
            <Table rows={generalInfo} />
          </div>

          <div>
            <h3 className="font-heading font-semibold text-navy text-lg mb-3">Infrastructure</h3>
            <Table rows={infra} />
          </div>

          <div>
            <h3 className="font-heading font-semibold text-navy text-lg mb-3">Staff (as of Academic Session 2026-27)</h3>
            <Table rows={staff} />
          </div>

          <div>
            <h3 className="font-heading font-semibold text-navy text-lg mb-3">Result of Board Examinations</h3>
            <div className="overflow-x-auto rounded-xl border border-navy/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white text-left">
                    <th className="px-4 py-3 font-medium">Session</th>
                    <th className="px-4 py-3 font-medium">Pass Percentage</th>
                    <th className="px-4 py-3 font-medium">Average Score</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/60'}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-navy/70">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-navy/40 text-xs text-center pt-4">
            Disclosure last updated for Academic Session 2026-27. For the complete disclosure document, contact the school administration office.
          </p>
        </div>
      </div>
    </section>
  )
}
