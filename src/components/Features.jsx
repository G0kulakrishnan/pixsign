import { Zap } from 'lucide-react'

const categories = [
  {
    title: 'Auto Branding',
    color: 'from-blue-500 to-indigo-600',
    emoji: '✨',
    features: [
      'Dealer name, phone & logo auto-printed',
      'Agency name & city auto-added',
      'Drag & drop branding position',
      'Multiple custom text fields',
      'Profile photo on creative',
    ],
  },
  {
    title: 'Content Distribution',
    color: 'from-purple-500 to-pink-600',
    emoji: '📤',
    features: [
      'Centralized marketing library',
      'Campaign & category management',
      'Bulk image & video upload',
      'User & role-based access',
      'Assign creatives to specific teams',
    ],
  },
  {
    title: 'Sharing & Download',
    color: 'from-green-500 to-teal-600',
    emoji: '📣',
    features: [
      'WhatsApp Status (one tap)',
      'WhatsApp chat & groups',
      'Instagram & Facebook share',
      'HD image download',
      'Video with branding overlay',
    ],
  },
  {
    title: 'Analytics & Control',
    color: 'from-orange-500 to-red-600',
    emoji: '📊',
    features: [
      'Per-creative download & share stats',
      'Non Opened Users list',
      'City & user-wise tracking',
      'CSV export for follow-up',
      'Admin dashboard + mobile app',
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="section-tag">
            <Zap className="w-4 h-4" /> Features
          </span>
          <h2 className="section-title mb-3">
            Everything Your Network Needs to{' '}
            <span className="gradient-text">Market Better</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Four pillars that power your entire dealer marketing — from upload to analytics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${cat.color} p-5`}>
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <div className="text-white font-bold text-base">{cat.title}</div>
              </div>

              {/* Feature list */}
              <ul className="p-4 space-y-2.5">
                {cat.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
