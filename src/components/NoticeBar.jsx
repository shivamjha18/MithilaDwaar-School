import { Megaphone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const noticeKeys = ['notice_1', 'notice_2', 'notice_3', 'notice_4', 'notice_5']

export default function NoticeBar() {
  const { mode, t } = useLanguage()
  const notices = noticeKeys.map(t)
  const loop = [...notices, ...notices]

  return (
    <div className="bg-navy text-white text-sm overflow-hidden">
      <div className="max-w-[1680px] mx-auto flex items-center">
        <div className="hidden sm:flex items-center gap-2 bg-gold text-navy font-semibold px-4 py-2 shrink-0">
          <Megaphone size={16} /> {t('notice_bar_label')}
        </div>
        <div className="flex-1 overflow-hidden py-2 px-4 sm:px-0">
          <div
            className="flex gap-16 whitespace-nowrap hover:[animation-play-state:paused]"
            style={{
              animation: `marquee ${mode === 'bilingual' ? 42 : 28}s linear infinite`,
            }}
          >
            {loop.map((n, i) => (
              <span key={i} className="text-white/90">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
