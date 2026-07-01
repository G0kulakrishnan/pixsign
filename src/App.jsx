import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Comparison from './components/Comparison'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import DemoSection from './components/DemoSection'
import Footer from './components/Footer'
import StickyDemoCTA from './components/StickyDemoCTA'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Comparison />
        <Industries />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DemoSection />
      </main>
      <Footer />
      <StickyDemoCTA />
    </div>
  )
}
