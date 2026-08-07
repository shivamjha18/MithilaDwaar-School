import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 bg-navy hover:bg-navy-light text-white w-11 h-11 rounded-full shadow-lg items-center justify-center transition-all hover:-translate-y-1"
    >
      <ArrowUp size={18} />
    </button>
  )
}
