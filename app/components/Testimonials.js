'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Menon',
    location: 'Kozhikode, Kerala',
    avatar: 'AM',
    rating: 5,
    service: 'Car Rental',
    text: 'Rented an Innova from Trinox Garage for a family trip to Wayanad. The car was spotless, AC was perfect, and the delivery to our doorstep saved so much time. Will definitely book again!',
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Priya Nair',
    location: 'Tirur, Kerala',
    avatar: 'PN',
    rating: 5,
    service: 'Uber Taxi',
    text: 'Booked a taxi for my airport transfer at 4am. The driver was punctual, polite, and the car was clean. Trinox Garage is my go-to for all rides now. Highly recommend their service!',
    date: 'February 2025',
  },
  {
    id: 3,
    name: 'Rahul Krishnan',
    location: 'Malappuram, Kerala',
    avatar: 'RK',
    rating: 5,
    service: 'Car Rental',
    text: 'Got a Fortuner for our wedding convoy — absolutely premium experience. The team was professional, pricing was transparent, and the vehicle was in immaculate condition. Outstanding!',
    date: 'January 2025',
  },
  {
    id: 4,
    name: 'Sneha Pillai',
    location: 'Thrissur, Kerala',
    avatar: 'SP',
    rating: 5,
    service: 'Uber Taxi',
    text: 'I use Trinox taxis almost every week for office commutes. Always on time, always comfortable. The drivers are very professional and courteous. Best taxi service in the region.',
    date: 'March 2025',
  },
  {
    id: 5,
    name: 'Mohammed Ashiq',
    location: 'Calicut, Kerala',
    avatar: 'MA',
    rating: 5,
    service: 'Car Rental',
    text: 'Rented a Swift Dzire for a week — best value for money I\'ve seen. The car was well-maintained, fuel-efficient, and the team was super responsive on WhatsApp. Zero hidden charges.',
    date: 'December 2024',
  },
  {
    id: 6,
    name: 'Lakshmi Varma',
    location: 'Palakkad, Kerala',
    avatar: 'LV',
    rating: 5,
    service: 'Uber Taxi',
    text: 'Trinox arranged a cab for my elderly mother\'s hospital visit. The driver was so kind and patient. It felt less like a taxi and more like a trusted family service. Thank you Trinox!',
    date: 'February 2025',
  },
]

const avatarColors = [
  { bg: 'rgba(255,214,0,0.15)', text: '#FFD600' },
  { bg: 'rgba(255,255,255,0.08)', text: '#FFFFFF' },
  { bg: 'rgba(255,214,0,0.12)', text: '#FFD600' },
  { bg: 'rgba(255,255,255,0.08)', text: '#FFFFFF' },
  { bg: 'rgba(255,214,0,0.15)', text: '#FFD600' },
  { bg: 'rgba(255,255,255,0.08)', text: '#FFFFFF' },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay
  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setDirection(1)
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
    setAutoplay(false)
  }

  const prev = () => {
    setDirection(-1)
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const next = () => {
    setDirection(1)
    setActive(prev => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const current = testimonials[active]

  return (
    <section id="testimonials" ref={sectionRef} className={styles.section}>

      {/* Decorative quote mark */}
      <div className={styles.bgQuote}>"</div>

      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
          <p className="section-subtitle">
            Real stories from real customers across Kerala who trust
            Trinox Garage for their travel needs.
          </p>
        </motion.div>

        {/* Main testimonial area */}
        <motion.div
          className={styles.mainArea}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Featured testimonial */}
          <div className={styles.featured}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d) => ({ opacity: 0, x: d * 60 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d) => ({ opacity: 0, x: d * -60 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={styles.testimonialCard}
              >
                {/* Quote icon */}
                <div className={styles.quoteIcon}>
                  <Quote size={28} fill="var(--yellow)" color="var(--yellow)" />
                </div>

                {/* Service badge */}
                <span className={styles.serviceBadge}>{current.service}</span>

                {/* Stars */}
                <div className={styles.stars}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--yellow)" color="var(--yellow)" />
                  ))}
                </div>

                {/* Text */}
                <p className={styles.testimonialText}>"{current.text}"</p>

                {/* Author */}
                <div className={styles.author}>
                  <div
                    className={styles.avatar}
                    style={{
                      background: avatarColors[active].bg,
                      color: avatarColors[active].text,
                    }}
                  >
                    {current.avatar}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{current.name}</span>
                    <span className={styles.authorLocation}>{current.location} · {current.date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className={styles.navRow}>
              <button className={styles.navBtn} onClick={prev} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button className={styles.navBtn} onClick={next} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Side list */}
          <div className={styles.sideList}>
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                className={`${styles.sideItem} ${i === active ? styles.sideItemActive : ''}`}
                onClick={() => goTo(i)}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <div
                  className={styles.sideAvatar}
                  style={{
                    background: i === active ? avatarColors[i].bg : 'rgba(255,255,255,0.05)',
                    color: i === active ? avatarColors[i].text : 'rgba(255,255,255,0.3)',
                    borderColor: i === active ? avatarColors[i].text : 'transparent',
                  }}
                >
                  {t.avatar}
                </div>
                <div className={styles.sideInfo}>
                  <span className={styles.sideName}>{t.name}</span>
                  <span className={styles.sideService}>{t.service} · {t.location}</span>
                </div>
                <div className={styles.sideStars}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={10} fill={i === active ? 'var(--yellow)' : 'rgba(255,255,255,0.2)'} color="transparent" />
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bottom rating summary */}
        <motion.div
          className={styles.ratingSummary}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.overallRating}>
            <span className={styles.ratingNumber}>4.9</span>
            <div className={styles.ratingRight}>
              <div className={styles.ratingStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="var(--yellow)" color="var(--yellow)" />
                ))}
              </div>
              <span className={styles.ratingLabel}>Overall Rating · Based on 500+ reviews</span>
            </div>
          </div>

          <div className={styles.ratingBars}>
            {[
              { label: 'Vehicle Quality', pct: 98 },
              { label: 'Punctuality', pct: 96 },
              { label: 'Driver Behaviour', pct: 97 },
              { label: 'Value for Money', pct: 95 },
            ].map((bar, i) => (
              <div key={i} className={styles.barRow}>
                <span className={styles.barLabel}>{bar.label}</span>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${bar.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                  />
                </div>
                <span className={styles.barPct}>{bar.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}