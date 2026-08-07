import { Quote } from 'lucide-react'

export default function PrincipalMessage() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[380px_1fr] gap-12 items-center">
        <div className="relative mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white w-72 h-80 lg:w-full lg:h-96">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop"
              alt="Principal of MithilaDwaar School"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-navy text-white rounded-xl px-5 py-3 shadow-lg text-center lg:text-left whitespace-nowrap">
            <p className="font-heading font-semibold text-sm">Dr. Meera Kapoor</p>
            <p className="text-gold text-xs">Principal</p>
          </div>
        </div>

        <div>
          <Quote className="text-gold mb-4" size={40} />
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">Principal's Message</p>
          <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl leading-snug mb-5">
            "Every child who walks through our gates carries a story worth nurturing."
          </h2>
          <p className="text-navy/70 leading-relaxed mb-4">
            At MithilaDwaar, we believe education goes far beyond textbooks and
            examinations. Our mission is to build confident, compassionate
            individuals who are ready to lead with integrity in a changing world.
          </p>
          <p className="text-navy/70 leading-relaxed">
            With a dedicated faculty, modern infrastructure, and a curriculum that
            balances academics with life skills, we are committed to giving every
            student the foundation they need to thrive — in school, and well beyond it.
          </p>
        </div>
      </div>
    </section>
  )
}
