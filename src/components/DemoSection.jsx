import { Phone, MessageCircle, Calendar, Smartphone } from 'lucide-react'

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 mb-6">
            <Calendar className="w-4 h-4" />
            Free Demo — No Credit Card Required
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Ready to Turn Every Salesperson into a{' '}
            <span className="text-yellow-300">Local Marketing Channel?</span>
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute demo. We'll show you exactly how PixSign can work for your business, your industry, and your team size.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://wa.me/919659001122?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20PixSign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+919659001122"
              className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:bg-gray-50 hover:-translate-y-0.5 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call +91 96590 01122
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm mb-10">
            {[
              '✓ Free 14-day trial',
              '✓ No credit card',
              '✓ Setup in 24 hours',
              '✓ Dedicated onboarding',
            ].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {/* Play Store CTA */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm mb-4">Already have an account? Download the app</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.pixsign4.world"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Smartphone className="w-5 h-5 text-lime-400" />
              Pixsign Pro on Google Play Store
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
