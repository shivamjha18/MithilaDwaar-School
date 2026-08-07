import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const facilities = [
  {
    title: 'Smart Classrooms',
    desc: 'Interactive smart boards with multimedia resources in every classroom from Nursery to Grade XII.',
    color: 'bg-[#8a4a2c]',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Library',
    desc: 'A well-stocked library with over 20,000 books, journals, periodicals and digital media.',
    color: 'bg-[#1c3f7c]',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Playground',
    desc: 'Spacious, dedicated grounds for children to take part in a variety of sports activities.',
    color: 'bg-[#b0392b]',
    img: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Open Air Theatre',
    desc: 'An artistically designed amphitheatre that adds aesthetic value with elegant landscaping.',
    color: 'bg-[#c9a2e0]',
    img: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Conference Room',
    desc: 'A dedicated space for interaction between the Principal, faculty and visiting parents.',
    color: 'bg-[#c99a2e]',
    img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Multi-Purpose Hall',
    desc: 'A centrally air-conditioned hall with audio-visual systems for assemblies and events.',
    color: 'bg-[#3d8c7d]',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Computer Lab',
    desc: 'Multiple computer labs equipped with the latest systems for hands-on tech learning.',
    color: 'bg-[#2f8f7a]',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Science Lab',
    desc: 'Fully equipped Physics, Chemistry and Biology labs for practical, experiential learning.',
    color: 'bg-[#d9a8e0]',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Transport',
    desc: 'A large fleet of GPS-enabled, air-conditioned buses covering all major routes in the city.',
    color: 'bg-[#8c1f3f]',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Language Lab',
    desc: 'A dedicated lab fitted with LCDs, audio systems and interactive tools for language learning.',
    color: 'bg-[#2a4f9c]',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'AV Room',
    desc: 'An audio-visual hall with state-of-the-art sound and multimedia facilities for screenings.',
    color: 'bg-[#c0432c]',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Medical Room',
    desc: 'An on-campus infirmary with a trained nurse on duty throughout the school day.',
    color: 'bg-[#3f6b8c]',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500&auto=format&fit=crop',
  },
]

export default function Facilities() {
  const { t } = useLanguage()

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_facilities_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_facilities_title')}</h2>
          <p className="text-navy/60">{t('section_facilities_desc')}</p>
        </div>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {facilities.map(({ title, desc, color, img }) => (
            <StaggerItem
              key={title}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`${color} text-white p-4 h-40 sm:h-36`}>
                <h3 className="font-heading font-bold text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-white/85 text-xs leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
