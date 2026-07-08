import { Check, Zap, Crown, Building2 } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: 'Standard',
    tagline: 'For individual sales professionals',
    priceVal: '₹999',
    priceSub: '/ year / user',
    color: 'from-blue-500 to-cyan-500',
    highlight: false,
    badge: null,
    features: [
      { text: 'Single user', note: null },
      { text: 'Setup Fee: ₹3,000 (one-time)', note: null },
      { text: '50 Images / Month', note: null },
      { text: '30 Videos / Month', note: null },
      { text: 'Android App access', note: null },
      { text: 'Download & Share creatives', note: null },
      { text: 'WhatsApp, Instagram sharing', note: null },
    ],
    cta: 'Get Started',
    ctaNote: '₹3,000 setup + ₹999/year',
  },
  {
    icon: Crown,
    name: 'Business',
    tagline: 'For dealer networks & sales teams',
    priceVal: '₹999',
    priceSub: '/ year / user',
    color: 'from-purple-600 to-blue-600',
    highlight: true,
    badge: 'Popular',
    features: [
      { text: 'Minimum 10 users', note: 'Buy as many users as your team size' },
      { text: 'Free installation', note: null },
      { text: '100 Images / Month', note: null },
      { text: '50 Videos / Month', note: null },
      { text: 'Admin portal + user management', note: null },
      { text: 'Campaign management', note: null },
      { text: 'Analytics per creative', note: null },
      { text: 'WhatsApp, Instagram, Facebook sharing', note: null },
      { text: 'Bulk upload', note: null },
    ],
    cta: 'Book Free Demo',
    ctaNote: 'Min 10 users · ₹9,990/year',
  },
  {
    icon: Building2,
    name: 'Enterprise',
    tagline: 'For large networks & brands',
    priceVal: '₹799',
    priceSub: '/ year / user',
    color: 'from-gray-700 to-gray-900',
    highlight: false,
    badge: null,
    features: [
      { text: 'Minimum 100 users', note: 'Best rate for large networks' },
      { text: 'Free installation', note: null },
      { text: '500 Images / Month', note: null },
      { text: '100 Videos / Month', note: null },
      { text: 'All Business plan features', note: null },
      { text: 'Priority support', note: null },
      { text: 'Dedicated account manager', note: null },
    ],
    cta: 'Contact Sales',
    ctaNote: 'Min 100 users · ₹79,900/year',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title mb-4">
            Pricing Plans{' '}
            <span className="gradient-text">&amp; Packages</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Per-user, per-year pricing. Purchase the number of users your sales network needs. The more users, the better the rate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border card-hover ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-[#0e7490] to-[#0f1830] border-transparent shadow-2xl ring-2 ring-[#B4E82B]/40'
                    : 'bg-white border-gray-100 shadow-sm'
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-[#B4E82B]' : 'text-[#4d7c0f]'}`}>
                  {plan.tagline}
                </div>
                <div className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.priceVal}
                  </span>
                  <span className={`text-sm pb-1 ${plan.highlight ? 'text-cyan-200' : 'text-gray-400'}`}>
                    {plan.priceSub}
                  </span>
                </div>
                <div className={`text-xs mb-6 ${plan.highlight ? 'text-cyan-200' : 'text-gray-400'}`}>
                  {plan.ctaNote}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f.text}>
                      <div className={`flex items-start gap-3 text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-green-300' : 'text-green-500'}`} />
                        <span>
                          {f.text}
                          {f.note && (
                            <span className={`block text-xs mt-0.5 ${plan.highlight ? 'text-cyan-200' : 'text-gray-400'}`}>
                              {f.note}
                            </span>
                          )}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`block text-center font-semibold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? 'bg-[#B4E82B] text-[#0b1220] hover:bg-[#c4f23f] shadow-lg'
                      : 'bg-[#B4E82B] text-[#0b1220] hover:bg-[#c4f23f] shadow-md'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Pricing explainer */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center" data-aos="fade-up">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>How pricing works:</strong> You purchase a licence for each user (dealer / agent / sales exec) in your network.
            Example — 50 dealers on the Business plan = 50 × ₹999 = <strong>₹49,950/year</strong> with free installation and full admin portal included.
            Call us on <a href="tel:+919659001122" className="text-blue-600 font-semibold hover:underline">+91 96590 01122</a> for a custom quote.
          </p>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6" data-aos="fade-up">
          All plans include Android app access · Admin portal · WhatsApp & social sharing · HD download
        </p>
      </div>
    </section>
  )
}
