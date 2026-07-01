import { Car, Shield, Building2, Home, ShoppingBag, GraduationCap, Utensils, Gem, Pill, Network, Tv, Landmark, Leaf, Briefcase, Globe } from 'lucide-react'

const industries = [
  { icon: Car, label: 'Automobile Dealers', desc: 'Bike, car & EV showrooms' },
  { icon: Shield, label: 'Insurance & LIC', desc: 'Agents & advisors' },
  { icon: Landmark, label: 'Banks & Finance', desc: 'NBFCs & loan agents' },
  { icon: Building2, label: 'Hospitals & Clinics', desc: 'Multi-branch healthcare' },
  { icon: Home, label: 'Real Estate', desc: 'Builders & channel partners' },
  { icon: GraduationCap, label: 'Education', desc: 'Schools, colleges & coaching' },
  { icon: Utensils, label: 'Restaurants & Hotels', desc: 'F&B chains & franchises' },
  { icon: Gem, label: 'Jewellery & Textiles', desc: 'Retail showrooms' },
  { icon: Pill, label: 'Pharma & Medical', desc: 'MRs & distributors' },
  { icon: Network, label: 'Network Marketing', desc: 'MLM & direct sales' },
  { icon: ShoppingBag, label: 'FMCG & Retail', desc: 'Chains & franchises' },
  { icon: Tv, label: 'Electronics & Mobile', desc: 'Dealer & service networks' },
  { icon: Leaf, label: 'Agriculture', desc: 'Input dealers & co-ops' },
  { icon: Briefcase, label: 'Corporate Sales', desc: 'B2B & enterprise teams' },
  { icon: Globe, label: 'Travel & Tourism', desc: 'Agencies & tour operators' },
]

const colors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-green-500 to-emerald-500',
  'from-teal-500 to-blue-500',
  'from-indigo-500 to-purple-500',
  'from-rose-500 to-pink-500',
  'from-amber-500 to-orange-500',
  'from-cyan-500 to-blue-500',
  'from-violet-500 to-purple-500',
  'from-lime-500 to-green-500',
  'from-sky-500 to-blue-500',
  'from-yellow-500 to-amber-500',
  'from-slate-500 to-gray-600',
  'from-blue-600 to-indigo-600',
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">Industries</span>
          <h2 className="section-title mb-4">
            Works for{' '}
            <span className="gradient-text">Every Business</span>{' '}
            with a Sales Network
          </h2>
          <p className="section-subtitle mx-auto">
            From automobile manufacturers to insurance companies, from pharma distributors to franchise restaurants — if you have dealers, agents, or a distributed team, PixSign is built for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover text-center group cursor-default"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 40, 400)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-900 text-sm leading-tight mb-1">{ind.label}</div>
                <div className="text-gray-500 text-xs">{ind.desc}</div>
              </div>
            )
          })}
        </div>

        {/* All businesses CTA */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-500 text-sm">
            And many more — <span className="font-semibold text-gray-700">NGOs, political campaigns, religious organizations, startups, marketing agencies</span> — any business that distributes marketing materials.
          </p>
        </div>
      </div>
    </section>
  )
}
