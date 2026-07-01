import { Upload, Users, MousePointer, Sparkles, Share2, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Admin Uploads Creative',
    desc: 'Head office or marketing team uploads product images, festive posters, offer banners or campaign creatives to the PixSign admin portal.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    step: '02',
    title: 'Assign to Sales Teams',
    desc: 'Assign creatives to specific dealers, distributors, agents, branches or the entire team. Control who sees what.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MousePointer,
    step: '03',
    title: 'User Clicks Download',
    desc: 'Dealers, agents and sales executives open the PixSign app on their phone or browser and simply click Download or Share.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'PixSign Auto-Brands',
    desc: 'PixSign instantly prints the user\'s name, phone number, agency name, logo, location and custom fields onto the creative. Zero manual work.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Share2,
    step: '05',
    title: 'Share Everywhere',
    desc: 'The personalized creative is ready to share directly to WhatsApp, Instagram, Facebook, or set as WhatsApp Status — all in one tap.',
    color: 'from-teal-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    step: '06',
    title: 'Generate More Enquiries',
    desc: 'Consistent, personalized, local marketing across your entire network drives more brand recall, trust, and customer enquiries.',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">
            <Sparkles className="w-4 h-4" /> How It Works
          </span>
          <h2 className="section-title mb-4">
            From Upload to{' '}
            <span className="gradient-text">Personalized Promotion</span>
            {' '}in Seconds
          </h2>
          <p className="section-subtitle mx-auto">
            Six simple steps. Zero design skills needed. Every salesperson becomes a local marketing powerhouse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors leading-none">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>

                {/* Connector arrow (except last in each row) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    {(i + 1) % 3 !== 0 && (
                      <div className="w-8 h-8 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center">
                        <span className="text-blue-500 text-xs font-bold">→</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
