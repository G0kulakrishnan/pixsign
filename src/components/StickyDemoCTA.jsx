import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function StickyDemoCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip bubble */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-xs animate-float">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-sm font-semibold text-gray-900 mb-1 pr-4">Want a free demo?</p>
        <p className="text-xs text-gray-500 mb-3">See how PixSign works for your industry in 30 minutes.</p>
        <a
          href="https://wa.me/919659001122?text=Hi%2C%20I%20want%20to%20book%20a%20free%20PixSign%20demo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors w-full justify-center"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Us Now
        </a>
      </div>
    </div>
  )
}
