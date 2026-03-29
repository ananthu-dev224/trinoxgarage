'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Fleet from './components/Fleet'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}