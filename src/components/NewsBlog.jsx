import { ArrowRight, Calendar } from 'lucide-react'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const posts = [
  {
    date: 'August 2, 2026',
    tag: 'Academics',
    title: 'How We Prepare Students for Board Exams — Beyond Rote Learning',
    excerpt: 'A look at the study techniques and mentoring systems that helped us achieve a 98% pass rate this year.',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=700&auto=format&fit=crop',
  },
  {
    date: 'July 18, 2026',
    tag: 'Campus Life',
    title: 'Robotics Club Wins Big at the National Championship',
    excerpt: 'Our Grade 9-10 robotics team brought home the runner-up trophy at this year\'s national finals.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=700&auto=format&fit=crop',
  },
  {
    date: 'July 5, 2026',
    tag: 'Parenting',
    title: '5 Ways to Support Your Child During Exam Season',
    excerpt: 'Practical tips from our school counselor on helping children manage stress during exams.',
    img: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=700&auto=format&fit=crop',
  },
]

export default function NewsBlog() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_blog_eyebrow')}</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl">{t('section_blog_title')}</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-gold transition-colors">
            View all articles <ArrowRight size={16} />
          </a>
        </div>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {posts.map(({ date, tag, title, excerpt, img }) => (
            <StaggerItem key={title} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-navy/50 mb-2">
                <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
                <span className="bg-gold/15 text-gold font-semibold px-2 py-0.5 rounded-full">{tag}</span>
              </div>
              <h3 className="font-heading font-semibold text-navy leading-snug mb-2 group-hover:text-gold transition-colors">
                {title}
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed">{excerpt}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
