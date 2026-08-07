import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const show = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-navy/80 hover:text-gold transition-colors py-2"
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-navy/10 py-2 overflow-hidden">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-navy/80 hover:bg-cream hover:text-gold transition-colors"
              >
                <span className="font-medium">{item.label}</span>
                {item.desc && <span className="block text-xs text-navy/45 mt-0.5">{item.desc}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
