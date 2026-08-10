'use client'

import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Fleet from './Fleet'
import HowItWorks from './HowItWorks'
import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

export default function HomePage() {
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
