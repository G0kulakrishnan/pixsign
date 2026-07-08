import { ArrowRight, CheckCircle, Smartphone } from 'lucide-react'

const stats = [
  { value: '100+', label: 'Businesses Trust Us' },
  { value: '1000+', label: 'Sales Professionals' },
  { value: '10L+', label: 'Creatives Shared' },
]

const badges = [
  'No Photoshop needed',
  'No Canva editing',
  'Works on WhatsApp',
]

// Simulated image cards matching real Manage Images UI
const mockCards = [
  { label: 'New Bike Launch', color: 'from-orange-500 to-red-600', date: '2026-07-01 03:09 AM' },
  { label: 'Dental Package', color: 'from-blue-500 to-indigo-600', date: '2026-06-29 07:34 AM' },
  { label: 'WhatsApp Marketing', color: 'from-green-600 to-teal-700', date: '2026-06-29 03:09 AM' },
  { label: 'EV Showroom Offer', color: 'from-purple-500 to-violet-700', date: '2026-06-26 06:27 AM' },
  { label: 'Water Business', color: 'from-cyan-500 to-blue-600', date: '2026-06-25 03:40 AM' },
  { label: 'Interior Design', color: 'from-emerald-500 to-green-700', date: '2026-06-24 04:18 AM' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B4E82B]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#29C7D6]/20 rounded-full blur-3xl animate-float2" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left – copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20 mb-5" data-aos="fade-down">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Trusted by 100+ Businesses Across India
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" data-aos="fade-up" data-aos-delay="100">
              One Marketing Creative.{' '}
              <span className="bg-gradient-to-r from-[#B4E82B] to-[#29C7D6] bg-clip-text text-transparent">
                Unlimited Personalized
              </span>{' '}
              Promotions.
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-5 max-w-xl" data-aos="fade-up" data-aos-delay="200">
              Upload your creatives once. Every dealer, distributor, franchise and sales exec instantly gets a branded version with their name, phone, agency and location <strong className="text-white">automatically added</strong>.
            </p>

            <div className="flex flex-wrap gap-3 mb-5" data-aos="fade-up" data-aos-delay="250">
              {badges.map(b => (
                <span key={b} className="flex items-center gap-1.5 text-base text-white/80">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="300">
              <a
                href="https://play.google.com/store/apps/details?id=com.t2g.pixsignpro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3.5 !px-7 text-base"
              >
                <Smartphone className="w-5 h-5" />
                Download App
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo" className="btn-secondary !py-3.5 !px-7 text-base">
                Book Free Demo
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10" data-aos="fade-up" data-aos-delay="400">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs text-white/55 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Pixsign Pro admin dashboard mockup (desktop only) */}
          <div className="relative hidden lg:block" data-aos="fade-left" data-aos-delay="200">
            <AdminDashboardMockup />
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function AdminDashboardMockup() {
  return (
    <div className="relative animate-float">
      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#1a1a2e' }}>

        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3 bg-white/10 rounded-full px-3 py-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-white/50 text-[10px]">pixsignpro.in/pro/manage-images.php</span>
          </div>
        </div>

        {/* App layout */}
        <div className="flex" style={{ minHeight: 340 }}>

          {/* Sidebar – matches real Pixsign Pro dark sidebar */}
          <div className="w-32 flex-shrink-0 flex flex-col py-3 px-2" style={{ background: '#111827' }}>
            {/* Logo */}
            <div className="px-2 mb-4">
              <div className="text-xs font-extrabold" style={{ color: '#c8f135' }}>PIXSIGN</div>
              <div className="text-[8px] text-gray-500">Enhanced Status App</div>
            </div>

            {[
              { label: 'Dashboard', active: false },
              { label: 'Visit Website', active: false },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-1.5 px-2 py-1.5 rounded mb-0.5 text-gray-400 text-[9px]">
                {item.label}
              </div>
            ))}

            <div className="text-[7px] text-gray-600 uppercase tracking-wider px-2 mt-2 mb-1">Upload</div>
            {['Upload Image', 'Upload Bulk', 'Upload Video'].map(item => (
              <div key={item} className="flex items-center gap-1.5 px-2 py-1.5 rounded mb-0.5 text-gray-500 text-[9px]">
                {item}
              </div>
            ))}

            <div className="text-[7px] text-gray-600 uppercase tracking-wider px-2 mt-2 mb-1">Media</div>
            {[
              { label: 'Manage All Images', active: true },
              { label: 'Manage Videos', active: false },
              { label: 'Analytics', active: false },
            ].map(item => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded mb-0.5 text-[9px] ${item.active ? 'text-white font-semibold' : 'text-gray-500'}`}
                style={item.active ? { background: 'rgba(200,241,53,0.15)', color: '#c8f135' } : {}}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-3 overflow-hidden" style={{ background: '#f3f4f6' }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs font-bold text-gray-900">Manage Images</div>
                <div className="text-[9px] text-gray-400">Dashboard / Manage Images</div>
              </div>
              <div className="bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded">Delete All</div>
            </div>

            {/* Image grid — 3 cols × 2 rows */}
            <div className="grid grid-cols-3 gap-2">
              {mockCards.map((card) => (
                <div key={card.label} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  {/* Image area */}
                  <div className={`h-14 bg-gradient-to-br ${card.color} flex items-end p-1.5 relative`}>
                    <span className="text-white text-[8px] font-bold leading-tight drop-shadow">{card.label}</span>
                    <div className="absolute top-1 right-1 w-3.5 h-3.5 border border-white/40 rounded-sm bg-white/10" />
                  </div>
                  {/* Status */}
                  <div className="px-1.5 py-1 text-center">
                    <div className="text-[7px] font-bold" style={{ color: '#16a34a' }}>Published</div>
                    <div className="text-[6px] text-gray-400">{card.date}</div>
                  </div>
                  {/* Buttons */}
                  <div className="px-1 pb-1.5 space-y-1">
                    <div className="w-full bg-gray-900 text-white text-[7px] font-semibold py-1 rounded text-center">Analytics</div>
                    <div className="flex gap-1">
                      <div className="flex-1 bg-gray-800 text-white text-[7px] font-semibold py-1 rounded text-center">Download</div>
                      <div className="bg-white border border-red-400 text-red-500 text-[7px] font-semibold py-1 px-1.5 rounded">Del</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — auto branding */}
      <div className="absolute -top-5 -right-5 glass rounded-xl p-3 shadow-xl animate-float-delay">
        <div className="text-white text-xs font-semibold">✓ Auto-branded for</div>
        <div className="text-white/60 text-[10px]">every dealer instantly</div>
      </div>

      {/* Floating badge — impressions */}
      <div className="absolute -bottom-5 -left-5 glass rounded-xl p-3 shadow-xl animate-float2">
        <div className="text-green-400 text-xs font-semibold">1,50,000+ impressions</div>
        <div className="text-white/60 text-[10px]">from 1 upload · ₹0 ad spend</div>
      </div>
    </div>
  )
}
