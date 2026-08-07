import { useState } from 'react'
import { AlertCircle, CalendarCheck, ClipboardList, PhoneCall, Send } from 'lucide-react'
import { submitForm } from '../lib/submitForm'
import { useLanguage } from '../context/LanguageContext'

const steps = [
  { icon: ClipboardList, titleKey: 'form_step1_title', descKey: 'form_step1_desc' },
  { icon: PhoneCall, titleKey: 'form_step2_title', descKey: 'form_step2_desc' },
  { icon: CalendarCheck, titleKey: 'form_step3_title', descKey: 'form_step3_desc' },
]

export default function Admissions() {
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
        subject: 'New Admission Enquiry — MithilaDwaar School',
        from_name: data.parentName,
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
    <section id="admissions" className="py-20 lg:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">{t('section_admissions_eyebrow')}</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-5">{t('section_admissions_title')}</h2>
          <p className="text-white/70 leading-relaxed mb-10 max-w-lg">{t('section_admissions_desc')}</p>

          <div className="space-y-6">
            {steps.map(({ icon: Icon, titleKey, descKey }, i) => (
              <div key={titleKey} className="flex items-start gap-4">
                <div className="bg-gold text-navy w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-semibold flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-gold" /> {t(titleKey)}
                  </h3>
                  <p className="text-white/60 text-sm">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-7 sm:p-9 text-navy">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="bg-gold/20 text-gold w-16 h-16 rounded-full flex items-center justify-center mb-5">
                <Send size={26} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{t('form_thank_you')}</h3>
              <p className="text-navy/60">{t('form_admissions_success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-heading font-bold text-xl mb-1">{t('form_admissions_heading')}</h3>
              <p className="text-navy/50 text-sm mb-5">{t('form_admissions_sub')}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <input name="parentName" required placeholder={t('form_parent_name')} className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <input name="childName" required placeholder={t('form_child_name')} className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" required type="tel" placeholder={t('form_phone')} className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <select name="grade" required defaultValue="" className="border border-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-navy/70">
                  <option value="" disabled>{t('form_grade')}</option>
                  <option>Pre-Primary</option>
                  <option>Grade 1 - 5</option>
                  <option>Grade 6 - 10</option>
                  <option>Grade 11 - 12</option>
                </select>
              </div>
              <input name="email" type="email" placeholder={t('form_email')} className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              <textarea name="message" placeholder={t('form_message_optional')} rows={3} className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none" />

              {status === 'error' && (
                <p className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle size={15} /> {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-navy font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {status === 'loading' ? t('form_submitting') : t('form_submit_enquiry')}
                {status !== 'loading' && <Send size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
