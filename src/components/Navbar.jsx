import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/logo.png"
              alt="PixSign Pro"
              className="h-12 w-12 lg:h-14 lg:w-14 rounded-xl object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#65a30d] ${scrolled ? 'text-gray-600' : 'text-white/80'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919659001122"
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-[#65a30d]' : 'text-white/80 hover:text-white'}`}
            >
              +91 96590 01122
            </a>
            <a
              href="https://portal.pixsignpro.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-6 !py-3 !text-sm"
            >
              Login
            </a>
            <a
              href="#demo"
              className="btn-primary !px-6 !py-3 !text-sm animate-cta-pulse"
            >
              Book Free Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 font-medium hover:bg-[#f2fbdf] hover:text-[#4d7c0f] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href="https://portal.pixsignpro.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-center"
              >
                Login
              </a>
              <a href="#demo" className="btn-primary w-full justify-center">
                Book Free Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
