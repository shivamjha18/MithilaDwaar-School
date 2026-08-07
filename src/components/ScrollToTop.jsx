import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHash(hash) {
  if (!hash) return false
  const el = document.querySelector(hash)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth' })
  return true
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (scrollToHash(hash)) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return null
}
