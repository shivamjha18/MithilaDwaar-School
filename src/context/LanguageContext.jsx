import { createContext, useContext, useEffect, useState } from 'react'
import translations from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('lang-mode') || 'en')

  useEffect(() => {
    localStorage.setItem('lang-mode', mode)
  }, [mode])

  function t(key) {
    const entry = translations[key]
    if (!entry) return key
    if (mode === 'bilingual') return `${entry.en} / ${entry.hi}`
    return entry.en
  }

  function toggleMode() {
    setMode((m) => (m === 'en' ? 'bilingual' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ mode, setMode, toggleMode, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
