import { useState } from 'react'
import { AlertCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { submitForm } from '../lib/submitForm'
import { useLanguage } from '../context/LanguageContext'

const cards = [
  { icon: MapPin, titleKey: 'contact_visit_title', lineKeys: ['contact_visit_line1', 'contact_visit_line2'] },
  { icon: Phone, titleKey: 'contact_call_title', lines: ['+91 12345 67890', '+91 98765 43210'] },
  { icon: Mail, titleKey: 'contact_email_title', lines: ['admissions@mithiladwaar.edu', 'info@mithiladwaar.edu'] },
  { icon: Clock, titleKey: 'contact_hours_title', lineKeys: ['contact_hours_line1', 'contact_hours_line2'] },
]

export default function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      await submitForm({
        subject: 'New Contact Form Message — MithilaDwaar School',
        ...data,
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_contact_eyebrow')}</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">{t('section_contact_title')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {cards.map(({ icon: Icon, titleKey, lines, lineKeys }) => (
            <div key={titleKey} className="bg-cream rounded-2xl p-6 text-center">
              <div className="bg-navy text-gold w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-heading font-semibold text-navy mb-2">{t(titleKey)}</h3>
              {(lineKeys ? lineKeys.map(t) : lines).map((l) => (
                <p key={l} className="text-navy/60 text-sm">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-cream rounded-3xl p-7 sm:p-9">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="bg-gold/20 text-gold w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <Send size={26} />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-2">{t('form_message_sent')}</h3>
                <p className="text-navy/60">{t('form_contact_success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-navy mb-1">{t('form_contact_heading')}</h3>
                <p className="text-navy/50 text-sm mb-5">{t('form_contact_sub')}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder={t('form_your_name')} className="border border-navy/15 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  <input name="phone" required type="tel" placeholder={t('form_phone')} className="border border-navy/15 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                </div>
                <input name="email" required type="email" placeholder={t('form_email')} className="w-full border border-navy/15 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <textarea name="message" required placeholder={t('form_your_message')} rows={4} className="w-full border border-navy/15 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none" />

                {status === 'error' && (
                  <p className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle size={15} /> {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-navy hover:bg-navy-light disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? t('form_sending') : t('form_send_message')}
                  {status !== 'loading' && <Send size={16} />}
                </button>
              </form>
            )}
          </div>

          <div className="rounded-3xl overflow-hidden border border-navy/10">
            <iframe
              title="School location map"
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              src="https://www.google.com/maps?q=New+Delhi&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
