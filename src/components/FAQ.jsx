import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is PixSign?',
    a: 'PixSign is a marketing distribution platform built for businesses with dealer networks, franchise chains, and distributed sales teams. Businesses upload marketing creatives once. Every dealer, agent, distributor, or branch can instantly download a version with their own name, phone, logo, and address automatically printed — without any manual editing.',
  },
  {
    q: 'Who should use PixSign?',
    a: 'Any business with a sales network benefits from PixSign. This includes automobile manufacturers, insurance companies, banks, real estate builders, hospitals, pharmaceutical companies, FMCG brands, restaurant franchises, jewellery chains, education institutions, network marketing companies, and any business that distributes marketing materials to a network.',
  },
  {
    q: 'Do my dealers need design skills to use PixSign?',
    a: 'No. That is the core benefit of PixSign. Dealers, agents, and sales executives simply open the app, select a creative, and click Download or Share. PixSign automatically adds all their details. Zero design skills required.',
  },
  {
    q: 'Can users reposition their branding on the creative?',
    a: 'Yes. While the admin defines default positioning, users can fine-tune the placement of their name, phone number, and logo using the drag-and-drop tool available in the app and web portal.',
  },
  {
    q: 'Which social platforms can users share to?',
    a: 'Users can share directly to WhatsApp (personal chat and Status), Instagram (Feed and Stories), and Facebook (Page and Profile). They can also download the HD image or video to share anywhere else.',
  },
  {
    q: 'Does PixSign support videos?',
    a: 'Yes. Admins can upload promotional videos. PixSign overlays the user\'s branding details on the video, and users can share to WhatsApp Status, Instagram Reels, and other platforms.',
  },
  {
    q: 'How does the Admin Portal work?',
    a: 'The Admin Portal is a powerful dashboard where the business head office can upload creatives, organize them into campaigns, assign them to specific users or groups, manage user accounts, set branding positions, and view analytics on downloads and shares.',
  },
  {
    q: 'Can I control which dealers see which creatives?',
    a: 'Yes. With Role-Based Access Control, admins can assign specific creatives or campaigns to specific users, branches, or teams. A dealer in Chennai will only see creatives assigned to them, not creatives meant for other regions.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'Yes. PixSign has dedicated apps for Android and iPhone. Sales executives and dealers can use the app on their smartphones to access, download, and share creatives on the go.',
  },
  {
    q: 'How many users can I add?',
    a: 'Starter plans support up to 25 users. Professional plans support up to 200 users. Enterprise plans support unlimited users. All plans can be customized — contact our sales team for exact requirements.',
  },
  {
    q: 'Is my data secure on PixSign?',
    a: 'Yes. All data and marketing assets are stored on secure cloud infrastructure with encryption. Access is controlled through your admin credentials. Each business\'s data is fully isolated from other companies.',
  },
  {
    q: 'Can I try PixSign before paying?',
    a: 'Yes. We offer a free 14-day trial and a free demo session with our team. Book a demo to see PixSign in action with your own business use case.',
  },
  {
    q: 'How long does it take to set up PixSign for my business?',
    a: 'Typically 24–48 hours. Our onboarding team helps you configure your branding fields, upload initial creatives, and add your team members. For larger enterprise setups, we offer dedicated onboarding support.',
  },
  {
    q: 'Does PixSign work for regional languages?',
    a: 'Yes. Branding fields like name, phone, and address support all Indian languages including Tamil, Hindi, Telugu, Kannada, Malayalam, Marathi, Bengali, and more. Creatives can also be designed in regional languages.',
  },
  {
    q: 'Who is behind PixSign?',
    a: 'PixSign is a product of Tech To Grow (techtogrow.in), a technology company based in India, specializing in digital marketing automation tools for Indian businesses. You can reach us at +91 96590 01122 or +91 98403 20932.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">
            <HelpCircle className="w-4 h-4" /> FAQ
          </span>
          <h2 className="section-title mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about PixSign. Still have questions? Call us on +91 96590 01122.
          </p>
        </div>

        <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
