import { Mail } from 'lucide-react'
import { Linkedin } from './SocialIcons'
import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const faculty = [
  { name: 'Dr. Meera Kapoor', role: 'Principal', subject: 'School Leadership', img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mr. Rajeev Malhotra', role: 'Vice Principal', subject: 'Mathematics', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ms. Ananya Iyer', role: 'HOD Science', subject: 'Physics & Chemistry', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mr. Sameer Khan', role: 'HOD Commerce', subject: 'Accountancy & Economics', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ms. Kavita Rao', role: 'HOD English', subject: 'English Literature', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mr. Arjun Verma', role: 'Sports Head', subject: 'Physical Education', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ms. Priya Desai', role: 'HOD Computer Science', subject: 'Informatics Practices', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mr. Vikram Nair', role: 'HOD Social Science', subject: 'History & Political Science', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop' },
]

export default function Faculty() {
  const { t } = useLanguage()

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_faculty_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_faculty_title')}</h2>
          <p className="text-navy/60">{t('section_faculty_desc')}</p>
        </div>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {faculty.map(({ name, role, subject, img }) => (
            <StaggerItem key={name} className="group relative rounded-2xl overflow-hidden shadow-md">
              <img
                src={img}
                alt={name}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4">
                <p className="text-gold text-[11px] sm:text-xs font-semibold mb-0.5">{role}</p>
                <h3 className="text-white font-heading font-semibold text-sm sm:text-base leading-tight">{name}</h3>
                <p className="text-white/70 text-[11px] sm:text-xs mt-0.5">{subject}</p>
                <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/15 hover:bg-white/25 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                    <Mail size={13} />
                  </span>
                  <span className="bg-white/15 hover:bg-white/25 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                    <Linkedin width={13} height={13} />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
