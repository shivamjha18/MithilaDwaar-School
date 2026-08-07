import { StaggerGroup, StaggerItem } from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const toppers = [
  { rank: 5052, name: 'Pratulya Trivedi', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop' },
  { rank: 5753, name: 'Himank Balani', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop' },
  { rank: 8972, name: 'Parth Hooda', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop' },
  { rank: 11758, name: 'Shraisht Sharma', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300&auto=format&fit=crop' },
  { rank: 15668, name: 'Arnav Garg', img: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=300&auto=format&fit=crop' },
  { rank: 16587, name: 'Vansh Kashyap', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop' },
  { rank: 17414, name: 'Srijan Srivastava', img: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=300&auto=format&fit=crop' },
  { rank: 18039, name: 'Yuvan Kalra', img: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?q=80&w=300&auto=format&fit=crop' },
  { rank: 20412, name: 'Mridul Goyal', img: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=300&auto=format&fit=crop' },
  { rank: 23118, name: 'Shaurya Agarwal', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300&auto=format&fit=crop' },
]

export default function Toppers() {
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-to-b from-white to-cream rounded-3xl border border-navy/10 shadow-sm p-6 sm:p-8">
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl mb-1">
          {t('toppers_title_1')} <span className="text-gold">{t('toppers_title_2')}</span>
        </h2>
        <p className="text-navy/60 font-medium text-sm sm:text-base">{t('toppers_sub')}</p>
      </div>

      <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5" stagger={0.05}>
        {toppers.map(({ rank, name, img }) => (
          <StaggerItem key={rank} className="text-center group">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={name}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-0 left-0 bg-gold text-navy text-[10px] sm:text-xs font-bold px-2 py-1 rounded-br-lg">
                AIR {rank}
              </span>
            </div>
            <p className="mt-2 bg-navy text-white text-[11px] sm:text-xs font-semibold rounded-md py-1.5 px-1 truncate">
              {name}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  )
}
