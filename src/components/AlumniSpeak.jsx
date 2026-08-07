import { Quote } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const alumni = [
  {
    name: 'Ishaan Mehta',
    batch: 'Batch of 2015',
    now: 'Software Engineer, Google',
    quote: 'MithilaDwaar gave me the confidence to dream big. The teachers pushed me far beyond the classroom.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Riya Kapoor',
    batch: 'Batch of 2012',
    now: 'Doctor, AIIMS Delhi',
    quote: 'The values I learnt at MithilaDwaar still guide how I treat every patient I meet today.',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Arjun Malhotra',
    batch: 'Batch of 2018',
    now: 'Founder, Startup',
    quote: 'From debate club to my first business plan — MithilaDwaar is where it all began.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
  },
]

export default function AlumniSpeak() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_alumni_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_alumni_title')}</h2>
          <p className="text-navy/60">{t('section_alumni_desc')}</p>
        </div>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {alumni.map(({ name, batch, now, quote, img }) => (
            <StaggerItem key={name} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
              <Quote className="text-gold mb-4" size={28} />
              <p className="text-navy/80 leading-relaxed mb-6 text-sm">"{quote}"</p>
              <div className="flex items-center gap-3">
                <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-navy text-sm">{name}</p>
                  <p className="text-navy/50 text-xs">{batch}</p>
                  <p className="text-gold text-xs font-medium mt-0.5">{now}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
