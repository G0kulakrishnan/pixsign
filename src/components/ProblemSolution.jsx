import { TrendingDown, Zap, Eye, Users, BarChart3, AlertCircle, CheckCircle2, ArrowRight, IndianRupee, Megaphone, Share2, MapPin } from 'lucide-react'

const problems = [
  {
    icon: IndianRupee,
    title: 'Crores spent on ads, low ROI',
    desc: 'TV commercials, newspaper ads, hoardings, Google ads, Meta campaigns — companies spend ₹10–50 lakhs per product launch just to reach a city.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: Megaphone,
    title: 'Marketing doesn\'t reach local buyers',
    desc: 'National ads miss local trust. A customer in Virudhachalam trusts their local dealer more than a TV ad. But that dealer has no branded content to share.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Users,
    title: 'Sales team is an untapped channel',
    desc: 'Every dealer, agent, distributor has 200–500 WhatsApp contacts who are local, relevant, and trust them. But they share nothing — because creating personalized content takes time.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: AlertCircle,
    title: 'No visibility — who shared? Who didn\'t?',
    desc: 'After spending on a campaign, companies have no idea which dealers promoted it, which markets were reached, and where they need to push harder.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
]

const steps = [
  {
    num: '01',
    icon: '📤',
    title: 'Company launches product, service or offer',
    sub: 'New bike model, insurance policy, hospital package, loan offer — head office uploads 1 branded creative to PixSign.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Every dealer & agent gets it instantly',
    sub: 'Each person in the network opens the app — their name, number & logo already on the poster. Zero editing needed.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    num: '03',
    icon: '💬',
    title: 'Every person sets WhatsApp Status',
    sub: 'Their 300+ local contacts — neighbours, friends, existing customers — see the launch for 24 hours, for free.',
    color: 'from-green-500 to-teal-600',
  },
  {
    num: '04',
    icon: '📣',
    title: 'Share on Instagram & Facebook too',
    sub: 'Same personalized creative goes to Instagram Stories, Facebook Feed, WhatsApp groups — all in one tap.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    num: '05',
    icon: '📊',
    title: 'Analytics shows who reached whom',
    sub: 'See who shared, who downloaded, and who DIDN\'T open it — per creative, per city, per person.',
    color: 'from-orange-500 to-amber-600',
  },
  {
    num: '06',
    icon: '🎯',
    title: 'Activate the markets you missed',
    sub: '"Non Opened Users" list = your untapped markets. Download CSV, call them, push harder where it\'s needed.',
    color: 'from-cyan-500 to-blue-600',
  },
]

const mathRows = [
  { label: 'Dealers in network', value: '500', highlight: false },
  { label: 'Avg WhatsApp contacts per dealer', value: '× 300', highlight: false },
  { label: 'Total local impressions', value: '= 1,50,000', highlight: true },
  { label: 'Cost per impression', value: '₹0', highlight: true },
  { label: 'Time to reach all 500 dealers', value: '< 2 minutes', highlight: true },
]

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">
            <TrendingDown className="w-4 h-4 text-red-500" /> The Biggest Problem in Business Marketing
          </span>
          <h2 className="section-title mb-4">
            You're Sitting on a{' '}
            <span className="gradient-text">₹0 Marketing Channel</span>{' '}
            and Not Using It
          </h2>
          <p className="section-subtitle mx-auto">
            Companies spend lakhs on ads to reach customers — while their own dealers, agents and sales reps sit idle with 300+ local WhatsApp contacts each. PixSign activates them.
          </p>
        </div>

        {/* 4 Problems */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className={`${p.bg} border ${p.border} rounded-2xl p-6 card-hover`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{p.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* The real example: traditional vs PixSign */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-10">
            <span className="section-tag">Real Example</span>
            <h3 className="text-3xl font-bold text-gray-900">
              Product Launch: The Old Way vs. The PixSign Way
            </h3>
          </div>

            {/* Business type tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              { icon: '🏍️', label: 'New Bike Model', tag: 'Automobile' },
              { icon: '🏥', label: 'Health Package', tag: 'Hospital' },
              { icon: '📋', label: 'Insurance Policy', tag: 'Insurance' },
              { icon: '🏠', label: 'Apartment Launch', tag: 'Real Estate' },
            ].map((t, i) => (
              <div key={t.label} className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium ${i === 0 ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
                <span className="text-xl">{t.icon}</span>
                <div>
                  <div className="font-semibold text-xs">{t.tag}</div>
                  <div>{t.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mb-8">The same story plays out for every product, service, package and campaign launch.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Old way */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-red-400 font-bold uppercase tracking-wider">Without PixSign</div>
                  <div className="font-bold text-gray-900 text-lg">Traditional Marketing</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { step: '1', text: 'Company launches a new product / service / offer / package', icon: '📦' },
                  { step: '2', text: 'Spends ₹10–50 lakhs on TV / newspaper / hoardings / Google Ads', icon: '💸' },
                  { step: '3', text: 'Reach is scattered — national ads miss local trust near each dealer', icon: '📡' },
                  { step: '4', text: 'Dealers & agents share nothing — no personalized content to post', icon: '😶' },
                  { step: '5', text: 'Zero visibility on which city, which agent, which market was reached', icon: '❓' },
                  { step: '6', text: 'Low enquiries. High cost. Designer bottleneck every campaign.', icon: '📉' },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div className="flex items-start gap-2">
                      <span>{item.icon}</span>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-red-200 flex items-center justify-between">
                <span className="text-sm text-red-600 font-semibold">Cost: ₹10–50 Lakhs</span>
                <span className="text-sm text-red-600 font-semibold">Local reach: Low</span>
              </div>
            </div>

            {/* PixSign way */}
            <div className="bg-gradient-to-br from-[#0e7490] to-[#0f1830] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#B4E82B]/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#B4E82B]" />
                </div>
                <div>
                  <div className="text-xs text-cyan-200 font-bold uppercase tracking-wider">With PixSign</div>
                  <div className="font-bold text-white text-lg">Dealer Network Marketing</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { step: '1', text: 'Company launches a new product / service / offer / package', icon: '📦' },
                  { step: '2', text: 'Uploads 1 creative to PixSign — works for any industry, any campaign', icon: '📤' },
                  { step: '3', text: '500 dealers & agents download — each poster has their own name + phone', icon: '📱' },
                  { step: '4', text: 'Every person sets it as WhatsApp Status → 1,50,000 local impressions', icon: '💬' },
                  { step: '5', text: 'Also shared on Instagram, Facebook, WhatsApp groups — one tap', icon: '📣' },
                  { step: '6', text: 'Analytics shows exactly who shared, downloaded, and who DIDN\'T open it', icon: '📊' },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div className="flex items-start gap-2">
                      <span>{item.icon}</span>
                      <span className="text-sm text-white/90">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-sm text-green-300 font-semibold">Extra Cost: ₹0</span>
                <span className="text-sm text-green-300 font-semibold">Local reach: 1,50,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* The math */}
        <div className="mb-20" data-aos="fade-up">
          <div className="bg-gray-950 rounded-2xl p-6 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="text-[#B4E82B] text-sm font-bold uppercase tracking-wider mb-3">The Math is Simple</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your Dealer Network is a <span className="text-yellow-400">Free Media Channel</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Every person in your sales network has local contacts who trust them. When your dealer shares a WhatsApp Status, their entire contact list — neighbours, friends, local customers — sees your product for 24 hours. No ad spend. Pure local trust.
                </p>
              </div>
              <div className="space-y-3">
                {mathRows.map(row => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between px-5 py-3 rounded-xl ${
                      row.highlight ? 'bg-[#0e7490] text-white' : 'bg-white/5 text-gray-300'
                    }`}
                  >
                    <span className="text-sm">{row.label}</span>
                    <span className={`font-bold text-lg ${row.highlight ? 'text-yellow-300' : ''}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6-step visual flow */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-10">
            <span className="section-tag">Step by Step</span>
            <h3 className="text-3xl font-bold text-gray-900">
              How One Upload Becomes a{' '}
              <span className="gradient-text">City-Wide Campaign</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-hover group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="absolute top-4 right-4 text-5xl font-black text-gray-100 leading-none group-hover:text-blue-50 transition-colors">
                  {step.num}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 pr-8">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics advantage — the game changer */}
        <div data-aos="fade-up">
          <div className="bg-gradient-to-br from-[#0a1222] via-[#0f1830] to-[#0e2a33] rounded-2xl p-6 lg:p-14 relative overflow-hidden">
            {/* BG glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4E82B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-sm font-bold px-4 py-2 rounded-full border border-yellow-400/30 mb-5">
                  <BarChart3 className="w-4 h-4" /> The Analytics Advantage
                </div>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
                  Know Exactly <span className="text-yellow-300">Which Markets</span> You Haven't Reached Yet
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  After every campaign, PixSign shows you which dealers shared, which downloaded, and — most powerfully — <strong className="text-white">which dealers didn't even open it</strong>. Those are your inactive markets. Call them, activate them, grow your reach where it's weakest.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: <CheckCircle2 className="w-5 h-5 text-green-400" />, text: 'See every dealer who shared your creative' },
                    { icon: <CheckCircle2 className="w-5 h-5 text-green-400" />, text: 'See every dealer who downloaded but didn\'t share' },
                    { icon: <Eye className="w-5 h-5 text-yellow-400" />, text: 'See the "Non Opened Users" list — your untapped markets' },
                    { icon: <MapPin className="w-5 h-5 text-red-400" />, text: 'Filter by city to find geographic gaps in your campaign' },
                    { icon: <Share2 className="w-5 h-5 text-[#B4E82B]" />, text: 'Download CSV to build a follow-up calling list instantly' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/85 text-sm">
                      {item.icon}
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Analytics mockup — hidden on mobile, shows on lg+ */}
              <div className="hidden lg:block bg-white/5 backdrop-blur rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-white/10 px-5 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold">Campaign Analytics — Product Launch</span>
                  <span className="text-white/40 text-xs">2026-07-01</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-0 border-b border-white/10">
                  {[
                    { val: '847', label: 'Unique Downloads' },
                    { val: '503', label: 'Total Shares' },
                    { val: '1,350', label: 'Total Interactions' },
                  ].map(s => (
                    <div key={s.label} className="p-4 text-center border-r border-white/10 last:border-0">
                      <div className="text-2xl font-extrabold text-white">{s.val}</div>
                      <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Shared users */}
                <div className="p-4 border-b border-white/10">
                  <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Shared — 3 users
                  </div>
                  {[
                    { name: 'KARTHIK RAJA', mob: '98XXX XXXXX', city: 'COIMBATORE', shared: 3, dl: 3 },
                    { name: 'PRIYA MOTORS', mob: '87XXX XXXXX', city: 'MADURAI', shared: 2, dl: 2 },
                    { name: 'SURESH AUTO', mob: '94XXX XXXXX', city: 'TRICHY', shared: 0, dl: 4 },
                  ].map(u => (
                    <div key={u.name} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                      <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xs font-bold flex-shrink-0">
                        {u.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-semibold truncate">{u.name}</div>
                        <div className="text-white/40 text-[10px]">{u.mob} · {u.city}</div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0 text-[10px]">
                        <span className="bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">↑{u.shared}</span>
                        <span className="bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">↓{u.dl}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Non opened users */}
                <div className="p-4">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5" /> Non Opened Users — 147 dealers
                    <span className="ml-auto text-[9px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full border border-yellow-400/30">
                      ← Activate these markets!
                    </span>
                  </div>
                  {[
                    { name: 'Ramesh Showroom', city: 'Salem', mob: '96XXX XXXXX' },
                    { name: 'Vijay Auto Works', city: 'Tirunelveli', mob: '73XXX XXXXX' },
                    { name: 'Sri Murugan Bikes', city: 'Virudhunagar', mob: '81XXX XXXXX' },
                  ].map(u => (
                    <div key={u.name} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                      <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold flex-shrink-0">
                        {u.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white/70 text-xs truncate">{u.name}</div>
                        <div className="text-white/30 text-[10px]">{u.mob} · {u.city}</div>
                      </div>
                      <span className="text-red-400/70 text-[10px] flex-shrink-0">Not opened</span>
                    </div>
                  ))}
                  <div className="mt-3 text-center">
                    <div className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-[10px] font-semibold px-3 py-1.5 rounded-lg">
                      📥 Download CSV → Build follow-up call list
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
