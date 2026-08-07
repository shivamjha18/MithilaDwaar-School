import { useLanguage } from '../context/LanguageContext'

const news = [
  { label: 'NEW', text: 'Results: DELF April 2026' },
  { label: 'NEW', text: 'JEE Advanced Results — 2025-26' },
  { label: 'NEW', text: 'CBSE Result 2025-26 (XII) — Highlights' },
  { label: 'NEW', text: 'CBSE Result 2025-26 (X) — Highlights' },
  { text: 'Junior Bus Routes w.e.f. 01.07.2026' },
  { text: 'Senior Bus Routes w.e.f. 01.07.2026' },
  { text: 'CBSE Result — XII 2024-25' },
  { text: 'CBSE Result — X 2024-25' },
  { text: 'Annual Sports Day — Schedule & Guidelines' },
  { text: 'Admission Notice for Academic Session 2026-27' },
  { text: 'PTM Calendar for Grades 6-12' },
]

export default function NewsAnnouncements() {
  const { t } = useLanguage()

  return (
    <div className="bg-cream rounded-3xl border border-navy/10 shadow-sm overflow-hidden flex flex-col">
      <div className="bg-[#6fa8dc] text-navy font-heading font-bold text-center py-4 px-4 leading-snug">
        {t('news_heading')}
      </div>
      <div className="news-scroll bg-[#fdf6d8] max-h-96 overflow-y-auto px-5 py-4 space-y-4">
        {news.map(({ label, text }, i) => (
          <a
            key={i}
            href="#"
            className="flex items-start gap-2 text-sm text-navy/80 hover:text-gold transition-colors"
          >
            {label && (
              <span className="shrink-0 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">
                {label}
              </span>
            )}
            <span className="leading-snug">{text}</span>
          </a>
        ))}
      </div>
      <style>{`
        .news-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(15, 33, 89, 0.25) transparent;
        }
        .news-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .news-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .news-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(15, 33, 89, 0.25);
          border-radius: 999px;
        }
      `}</style>
    </div>
  )
}
