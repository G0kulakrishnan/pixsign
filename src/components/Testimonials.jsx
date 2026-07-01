import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Arjun Kumar',
    role: 'Bike Showroom Owner',
    location: 'Chennai',
    avatar: 'AK',
    color: 'from-orange-500 to-red-600',
    rating: 5,
    text: 'Earlier we had to call our designer every time a new offer came. Now our 12 sales executives get the posters on their phones automatically with their own names on it. Customers trust us more because they see familiar names.',
  },
  {
    name: 'Priya Krishnamurthy',
    role: 'Insurance Agent',
    location: 'Coimbatore',
    avatar: 'PK',
    color: 'from-blue-500 to-indigo-600',
    rating: 5,
    text: 'I used to ask my son to edit posters for me. Now I just open PixSign and share. My photo and number are already on the policy creative. My clients recognize me and my business has grown by 40%.',
  },
  {
    name: 'Vikram Nair',
    role: 'Multi-Branch Clinic Owner',
    location: 'Bangalore',
    avatar: 'VN',
    color: 'from-green-500 to-teal-600',
    rating: 5,
    text: 'We have 15 branches. Before PixSign, standardizing marketing was a nightmare. Now every branch manager shares the right creative with the right branch details. Our brand consistency improved dramatically.',
  },
  {
    name: 'Sunita Agarwal',
    role: 'Real Estate Agent',
    location: 'Hyderabad',
    avatar: 'SA',
    color: 'from-purple-500 to-pink-600',
    rating: 5,
    text: 'When the new apartment launched, I had my own branded poster ready to share on WhatsApp in seconds. Three clients called me that weekend. PixSign is now essential to my business.',
  },
  {
    name: 'Ramesh Chandrasekaran',
    role: 'Finance Distributor',
    location: 'Coimbatore',
    avatar: 'RC',
    color: 'from-amber-500 to-orange-600',
    rating: 5,
    text: 'With 500 agents in our network, keeping everyone aligned on branding was impossible. PixSign solved that completely. We push one creative and 500 people share it with their own details within the hour.',
  },
  {
    name: 'Kavitha Rajan',
    role: 'Food Franchise Owner',
    location: 'Madurai',
    avatar: 'KR',
    color: 'from-rose-500 to-pink-600',
    rating: 5,
    text: 'Our franchise partners always used to share the wrong offers or old posters. With PixSign admin control, they only see current campaigns and every poster has their outlet address. Food orders from WhatsApp have doubled.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title mb-4">
            Loved by{' '}
            <span className="gradient-text">Sales Professionals</span>{' '}
            Across India
          </h2>
          <p className="section-subtitle mx-auto">
            Real results from real businesses who transformed their local marketing with PixSign.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 card-hover relative"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gray-200" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
