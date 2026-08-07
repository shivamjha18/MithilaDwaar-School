import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const faqs = [
  {
    q: 'What is the admission process for MithilaDwaar School?',
    a: 'Admissions begin with an online enquiry form, followed by a counseling call, campus visit, and a simple interaction with the student (for Grade 1 and above). Seats are confirmed on a first-come, first-served basis subject to availability.',
  },
  {
    q: 'What is the age criteria for Nursery admission?',
    a: 'A child must complete 3 years of age by 31st March of the academic year they are seeking admission to Nursery. Age criteria for other grades follow CBSE and state government norms.',
  },
  {
    q: 'Does the school provide transportation?',
    a: 'Yes, we operate a fleet of GPS-enabled, air-conditioned buses covering all major routes across the city. Route details are shared with parents before the academic session begins.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Fee structure varies by grade and is shared in detail during the admission counseling process. Fees can be paid online, in quarterly or annual installments, through our secure payment portal.',
  },
  {
    q: 'Does the school offer scholarships?',
    a: 'Yes, merit-based and need-based scholarships are available for eligible students, including special consideration for siblings, staff wards, and outstanding achievers in sports or academics.',
  },
  {
    q: 'What extracurricular activities are available?',
    a: 'Students can choose from a wide range of activities including robotics, debate, music, dance, art, various sports, and language clubs (French, German, Spanish) beyond regular academics.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-navy/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading font-semibold text-navy text-sm sm:text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-navy/60 text-sm leading-relaxed pb-5 pr-8">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_faq_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_faq_title')}</h2>
          <p className="text-navy/60">{t('section_faq_desc')}</p>
        </div>

        <div className="bg-white rounded-2xl px-6 sm:px-8 shadow-sm">
          {faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
