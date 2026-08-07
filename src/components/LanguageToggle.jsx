import { Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { mode, setMode } = useLanguage()

  return (
    <div
      className={`inline-flex items-center gap-1 bg-navy/5 border border-navy/10 rounded-full p-1 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language mode"
    >
      <Languages size={13} className="text-navy/40 ml-1.5 shrink-0" />
      <button
        onClick={() => setMode('en')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          mode === 'en' ? 'bg-navy text-white' : 'text-navy/60 hover:text-navy'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setMode('bilingual')}
        className={`px-2.5 py-1 rounded-full transition-colors whitespace-nowrap ${
          mode === 'bilingual' ? 'bg-navy text-white' : 'text-navy/60 hover:text-navy'
        }`}
      >
        EN / हिं
      </button>
    </div>
  )
}
