import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { Facebook, Instagram, Linkedin, Youtube } from './SocialIcons'
import { useLanguage } from '../context/LanguageContext'

const columns = [
  {
    titleKey: 'footer_quick_links',
    links: [
      { labelKey: 'footer_about_us', href: '/#about' },
      { labelKey: 'footer_academics', href: '/#academics' },
      { labelKey: 'footer_admissions', href: '/#admissions' },
      { labelKey: 'footer_gallery', href: '/#gallery' },
      { labelKey: 'footer_contact', href: '/#contact' },
    ],
  },
  {
    titleKey: 'footer_resources',
    links: [
      { labelKey: 'footer_downloads', href: '/#downloads' },
      { labelKey: 'footer_disclosure', href: '/#disclosure' },
      { labelKey: 'footer_careers', href: '/#careers' },
      { labelKey: 'footer_faqs', href: '/#faq' },
    ],
  },
  {
    titleKey: 'footer_legal',
    links: [
      { labelKey: 'footer_privacy', to: '/privacy-policy' },
      { labelKey: 'footer_terms', to: '/terms-of-use' },
    ],
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0a1a45] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-heading font-bold mb-4">
            <span className="bg-gold text-navy rounded-lg p-2">
              <GraduationCap size={20} />
            </span>
            <span className="text-lg">MithilaDwaar</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">{t('footer_tagline')}</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white/10 hover:bg-gold hover:text-navy w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.titleKey}>
            <h4 className="font-heading font-semibold mb-4">{t(col.titleKey)}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.labelKey}>
                  {l.to ? (
                    <Link to={l.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                      {t(l.labelKey)}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                      {t(l.labelKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="border-t border-white/10 pt-6 pb-6 grid sm:grid-cols-2 gap-4 text-white/50 text-xs leading-relaxed">
          <p>
            Managed by <span className="text-white/70 font-medium">MithilaDwaar Educational Trust</span> (Reg. No.
            TR/2000/00456) · CBSE Affiliation No. 1234567
          </p>
          <p className="sm:text-right">
            Grievance Officer: <span className="text-white/70 font-medium">Ms. Anita Sharma</span> ·{' '}
            <a href="mailto:grievance@mithiladwaar.edu" className="hover:text-gold transition-colors">
              grievance@mithiladwaar.edu
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <p className="text-center text-white/40 text-xs px-5">
          © {new Date().getFullYear()} MithilaDwaar School. {t('footer_rights')}
        </p>
      </div>
    </footer>
  )
}
