import { Bike, Shield, Building, Home } from 'lucide-react'

const examples = [
  {
    icon: Bike,
    industry: 'Automobile',
    title: 'New Motorcycle Launch',
    scenario: 'Head office uploads 20 launch posters.',
    outcome: '500 dealers download. Each poster automatically shows:',
    details: ['Dealer Name & Logo', 'Dealer Phone Number', 'Dealer Address', 'Showroom Location'],
    result: 'Zero manual editing. 500 personalized posters in 2 minutes.',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    tag: 'text-orange-700 bg-orange-100',
  },
  {
    icon: Shield,
    industry: 'Insurance',
    title: 'New Policy Launch',
    scenario: 'LIC uploads 1 campaign creative.',
    outcome: '1000+ agents share instantly. Each agent\'s version shows:',
    details: ['Agent\'s Own Photo', 'Agent Phone Number', 'Branch Name', 'Policy Details'],
    result: '1000 personalized creatives shared simultaneously.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tag: 'text-blue-700 bg-blue-100',
  },
  {
    icon: Building,
    industry: 'Healthcare',
    title: 'Diabetes Package Launch',
    scenario: 'Hospital group uploads 1 health package poster.',
    outcome: 'All branch managers share — each with their own branch:',
    details: ['Branch Name & Logo', 'Branch Phone', 'Branch Address', 'Doctor\'s Name'],
    result: 'City-wide local reach with zero design effort.',
    color: 'from-green-500 to-teal-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
    tag: 'text-green-700 bg-green-100',
  },
  {
    icon: Home,
    industry: 'Real Estate',
    title: 'New Apartment Launch',
    scenario: 'Builder uploads luxury apartment brochure.',
    outcome: 'Channel partners download. Every poster carries:',
    details: ['Partner Contact Number', 'Partner Agency Name', 'Partner Logo', 'RERA Details'],
    result: '100x local marketing reach with channel partner network.',
    color: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    tag: 'text-purple-700 bg-purple-100',
  },
]

export default function RealWorldExamples() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">Real World Examples</span>
          <h2 className="section-title mb-4">
            See PixSign in Action{' '}
            <span className="gradient-text">Across Industries</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From two-wheelers to insurance to hospitals — one platform, unlimited use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((ex, i) => {
            const Icon = ex.icon
            return (
              <div
                key={ex.title}
                className={`${ex.bg} rounded-2xl p-8 border ${ex.border} card-hover`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ex.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${ex.tag} uppercase tracking-wider`}>
                      {ex.industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{ex.title}</h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <p className="text-gray-700 font-medium">{ex.scenario}</p>
                  <p className="text-gray-600 text-sm">{ex.outcome}</p>
                  <ul className="grid grid-cols-2 gap-2 mt-3">
                    {ex.details.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/60">
                    <p className="text-sm font-semibold text-gray-900">✅ {ex.result}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
