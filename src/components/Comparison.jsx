import { X, Check } from 'lucide-react'

const withoutItems = [
  'Designer edits every single creative manually',
  'Hours of work per campaign',
  'Wrong phone numbers & outdated branding',
  'Old logos and stale information',
  'Dealers complain about delays',
  'Low sharing — low reach',
  'No visibility into who shared what',
  'Designers become a bottleneck',
  'Campaigns delayed for weeks',
  'Inconsistent brand across network',
]

const withItems = [
  'Upload once — everyone gets their version',
  'Entire network ready in under 2 minutes',
  '100% correct details, always up to date',
  'Latest branding applied automatically',
  'Dealers get creatives instantly',
  'Higher sharing — 3x more enquiries',
  'Full analytics and download tracking',
  'Zero dependency on design team',
  'Campaigns live on launch day',
  'Perfectly consistent brand everywhere',
]

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">Why PixSign</span>
          <h2 className="section-title mb-4">
            The Old Way vs.{' '}
            <span className="gradient-text">The PixSign Way</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Stop wasting hours on manual editing. Let PixSign do the heavy lifting for your entire sales network.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          {/* Without PixSign */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-red-400 font-semibold uppercase tracking-wider">Without PixSign</div>
                <div className="text-lg font-bold text-gray-900">The Painful Way</div>
              </div>
            </div>
            <ul className="space-y-3">
              {withoutItems.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With PixSign */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">With PixSign</div>
                <div className="text-lg font-bold text-white">The Smart Way</div>
              </div>
            </div>
            <ul className="space-y-3">
              {withItems.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
