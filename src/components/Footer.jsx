import { Phone, MessageCircle, Mail, ExternalLink, Smartphone } from 'lucide-react'

const links = {
  Product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
  ],
  'Use Cases': [
    { label: 'Automobile Dealers', href: '#industries' },
    { label: 'Insurance Agents', href: '#industries' },
    { label: 'Real Estate', href: '#industries' },
    { label: 'Franchise Businesses', href: '#industries' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#demo' },
    { label: 'Tech To Grow', href: 'https://techtogrow.in', external: true },
  ],
  Support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Login Portal', href: 'https://portal.pixsignpro.in', external: true },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="PixSign Pro" className="h-16 w-16 rounded-xl object-contain" />
              <span className="text-2xl font-bold text-white">Pix<span className="text-[#B4E82B]">Sign</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              India's leading marketing distribution platform. Upload once. Every dealer, agent, and salesperson gets their own branded creative automatically.
            </p>
            <div className="space-y-3">
              <a href="tel:+919659001122" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" /> +91 96590 01122
              </a>
              <a href="tel:+919840320932" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" /> +91 98403 20932
              </a>
              <a
                href="https://wa.me/919659001122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp Us
              </a>
              <a href="mailto:hello@pixsignpro.in" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" /> hello@pixsignpro.in
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.t2g.pixsignpro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Smartphone className="w-4 h-4 text-lime-400" /> Download Android App
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div className="text-white font-semibold text-sm mb-4">{section}</div>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-sm hover:text-white transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      {item.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} PixSign by{' '}
            <a href="https://techtogrow.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              Tech To Grow
            </a>
            . All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Marketing Distribution Platform · Auto Branding · Dealer Marketing Software · India
          </p>
        </div>
      </div>
    </footer>
  )
}
