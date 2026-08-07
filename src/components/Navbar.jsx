import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, GraduationCap, ChevronDown } from 'lucide-react'
import NoticeBar from './NoticeBar'
import NavDropdown from './NavDropdown'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

const navItems = [
  {
    labelKey: 'nav_about',
    items: [
      { href: '/#about', labelKey: 'nav_about_us', descKey: 'nav_about_desc' },
      { href: '/#why-us', labelKey: 'nav_why_us', descKey: 'nav_why_us_desc' },
      { href: '/#faculty', labelKey: 'nav_faculty', descKey: 'nav_faculty_desc' },
      { href: '/#disclosure', labelKey: 'nav_disclosure', descKey: 'nav_disclosure_desc' },
    ],
  },
  {
    labelKey: 'nav_academics',
    items: [
      { href: '/#academics', labelKey: 'nav_academic_programs', descKey: 'nav_academic_programs_desc' },
      { href: '/#facilities', labelKey: 'nav_facilities', descKey: 'nav_facilities_desc' },
    ],
  },
  {
    labelKey: 'nav_admissions',
    items: [
      { href: '/#admissions', labelKey: 'nav_admission_process', descKey: 'nav_admission_process_desc' },
      { href: '/#downloads', labelKey: 'nav_downloads', descKey: 'nav_downloads_desc' },
      { href: '/#faq', labelKey: 'nav_faq', descKey: 'nav_faq_desc' },
    ],
  },
  {
    labelKey: 'nav_life',
    items: [
      { href: '/#gallery', labelKey: 'nav_gallery', descKey: 'nav_gallery_desc' },
      { href: '/#testimonials', labelKey: 'nav_testimonials', descKey: 'nav_testimonials_desc' },
      { href: '/#careers', labelKey: 'nav_careers', descKey: 'nav_careers_desc' },
    ],
  },
  { href: '/#contact', labelKey: 'nav_contact' },
]

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileGroup, setMobileGroup] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {!scrolled && <NoticeBar />}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-white py-4'
        }`}
      >
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 xl:px-14 flex items-center justify-between">
        <Link to="/#top" className="flex items-center gap-2 font-heading font-bold text-navy shrink-0">
          <span className="bg-navy text-white rounded-lg p-2">
            <GraduationCap size={22} />
          </span>
          <span className="text-lg sm:text-xl leading-tight">
            Mithila<span className="text-gold">Dwaar</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) =>
            item.items ? (
              <NavDropdown
                key={item.labelKey}
                label={t(item.labelKey)}
                items={item.items.map((sub) => ({ href: sub.href, label: t(sub.labelKey), desc: t(sub.descKey) }))}
              />
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy/80 hover:text-gold transition-colors px-2 py-2"
              >
                {t(item.labelKey)}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <a href="tel:+911234567890" className="flex items-center gap-2 text-sm font-medium text-navy/80">
            <Phone size={16} className="text-gold" /> +91 12345 67890
          </a>
          <a
            href="#"
            className="bg-navy hover:bg-navy-light text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors whitespace-nowrap"
          >
            {t('nav_pay_fees')}
          </a>
          <a
            href="/#admissions"
            className="bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors whitespace-nowrap"
          >
            {t('nav_apply_now')}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <button
            className="text-navy p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy/10 mt-2 max-h-[75vh] overflow-y-auto">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) =>
              item.items ? (
                <div key={item.labelKey} className="border-b border-navy/5">
                  <button
                    onClick={() => setMobileGroup((g) => (g === item.labelKey ? null : item.labelKey))}
                    className="w-full flex items-center justify-between py-3 text-navy font-medium"
                  >
                    {t(item.labelKey)}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileGroup === item.labelKey ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileGroup === item.labelKey && (
                    <div className="pb-2 pl-3 flex flex-col gap-1">
                      {item.items.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-navy/70 text-sm"
                        >
                          {t(sub.labelKey)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-navy font-medium border-b border-navy/5 last:border-0"
                >
                  {t(item.labelKey)}
                </a>
              )
            )}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="mt-4 bg-navy text-white font-semibold text-center px-5 py-3 rounded-full"
            >
              {t('nav_pay_fees')}
            </a>
            <a
              href="/#admissions"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gold text-navy font-semibold text-center px-5 py-3 rounded-full"
            >
              {t('nav_apply_now')}
            </a>
          </nav>
        </div>
      )}
      </div>
    </header>
  )
}
