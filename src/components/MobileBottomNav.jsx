import { useEffect, useState } from 'react'
import { Home, Info, BookOpenCheck, ClipboardList, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const items = [
  { hash: '#top', href: '/#top', key: 'nav_home', icon: Home },
  { hash: '#about', href: '/#about', key: 'nav_about', icon: Info },
  { hash: '#academics', href: '/#academics', key: 'nav_academics', icon: BookOpenCheck },
  { hash: '#contact', href: '/#contact', key: 'nav_contact', icon: Mail },
  { hash: '#admissions', href: '/#admissions', key: 'nav_admission_short', icon: ClipboardList },
]

export default function MobileBottomNav() {
  const { mode } = useLanguage()
  const [active, setActive] = useState('#top')

  useEffect(() => {
    if (window.location.pathname !== '/') return

    const sections = items
      .map((i) => document.querySelector(i.hash))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40">
      <a
        href="tel:+911234567890"
        aria-label="Call the school"
        className="absolute -top-14 right-4 bg-navy text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-4 border-white"
      >
        <Phone size={20} />
      </a>

      <nav
        className="bg-white border-t border-navy/10 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
        aria-label="Section navigation"
      >
        <ul className="grid grid-cols-5">
          {items.map(({ hash, href, key, icon: Icon }) => {
            const isActive = active === hash
            const entry = translations[key]
            return (
              <li key={hash}>
                <a
                  href={href}
                  className={`flex flex-col items-center gap-1 px-1 py-2.5 text-[10px] leading-tight font-medium transition-colors ${
                    isActive ? 'text-gold' : 'text-navy/60'
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.4 : 2} />
                  <span>{entry.en}</span>
                  {mode === 'bilingual' && <span className="text-[9px] opacity-80">{entry.hi}</span>}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
