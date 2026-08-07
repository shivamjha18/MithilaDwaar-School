import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function VideoTour() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #f5a623 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center relative">
        <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_video_eyebrow')}</p>
        <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">{t('section_video_title')}</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-10">{t('section_video_desc')}</p>

        <button
          onClick={() => setOpen(true)}
          className="group relative block w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400&auto=format&fit=crop"
            alt="MithilaDwaar School campus aerial view"
            className="w-full h-64 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors flex items-center justify-center">
            <span className="bg-gold text-navy w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play size={28} className="ml-1" fill="currentColor" />
            </span>
          </div>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-5"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-11 right-0 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>
            <div className="w-full h-full rounded-xl bg-navy border border-white/10 flex flex-col items-center justify-center text-center px-6">
              <p className="text-white font-heading font-semibold text-lg mb-2">Video Tour Placeholder</p>
              <p className="text-white/60 text-sm max-w-sm">
                Drop your school's real YouTube/Vimeo campus tour embed link here to replace this placeholder.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
