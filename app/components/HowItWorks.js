'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, CalendarCheck, Car, MapPin, ArrowRight } from 'lucide-react'
import styles from './HowItWorks.module.css'

const rentalSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse & Choose',
    description:
      'Explore our full fleet online or call us. Pick the vehicle that suits your trip — sedan, SUV, or premium.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Book & Confirm',
    description:
      'Select your dates, share your details, and confirm your booking instantly. No hidden charges.',
  },
  {
    number: '03',
    icon: Car,
    title: 'Pick Up or Delivery',
    description:
      'Collect your car from our garage or opt for doorstep delivery — clean, fuelled, and ready to go.',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Drive & Enjoy',
    description:
      'Hit the road with full insurance coverage. Return the vehicle at your agreed time and location.',
  },
]

const taxiSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Request a Ride',
    description:
      'Call us, WhatsApp, or book via Uber. Tell us your pickup location and destination.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Get Matched',
    description:
      'We assign you a verified Trinox driver nearby. Receive driver details and ETA instantly.',
  },
  {
    number: '03',
    icon: Car,
    title: 'Driver Arrives',
    description:
      'Your professional driver arrives on time in a clean, air-conditioned vehicle.',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Reach & Pay',
    description:
      'Arrive safely at your destination. Pay via cash, UPI, or card — simple and transparent.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const rentalRef = useRef(null)
  const taxiRef = useRef(null)
  const rentalInView = useInView(rentalRef, { once: true, margin: '-60px' })
  const taxiInView = useInView(taxiRef, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>

      {/* Decorative vertical line */}
      <div className={styles.vertLine} />

      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">The Process</span>
          <h2 className="section-title">HOW IT WORKS</h2>
          <p className="section-subtitle">
            Simple, fast, and transparent. Getting your vehicle has never been easier.
          </p>
        </motion.div>

        {/* ── Rental Flow ── */}
        <div ref={rentalRef} className={styles.flowBlock}>
          <motion.div
            className={styles.flowHeader}
            initial={{ opacity: 0, x: -30 }}
            animate={rentalInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.flowTag}>
              <span className={styles.flowTagDot} />
              Car Rental Process
            </div>
          </motion.div>

          <div className={styles.stepsRow}>
            {rentalSteps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                isInView={rentalInView}
                isLast={i === rentalSteps.length - 1}
                variant="rental"
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* ── Taxi Flow ── */}
        <div ref={taxiRef} className={styles.flowBlock}>
          <motion.div
            className={styles.flowHeader}
            initial={{ opacity: 0, x: -30 }}
            animate={taxiInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.flowTag}>
              <span className={styles.flowTagDot} style={{ background: 'var(--white)' }} />
              Uber Taxi Process
            </div>
          </motion.div>

          <div className={styles.stepsRow}>
            {taxiSteps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                isInView={taxiInView}
                isLast={i === taxiSteps.length - 1}
                variant="taxi"
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaTitle}>READY TO RIDE?</h3>
              <p className={styles.ctaDesc}>
                Booking takes less than 2 minutes. Our team is available 24/7 to assist you.
              </p>
            </div>
            <div className={styles.ctaBtns}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now <ArrowRight size={15} />
              </button>
              <a href="tel:+1234567890" className="btn-outline">
                Call Us
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function StepCard({ step, index, isInView, isLast, variant }) {
  const { number, icon: Icon, title, description } = step
  const isRental = variant === 'rental'

  return (
    <motion.div
      className={styles.stepWrap}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`${styles.stepCard} ${isRental ? styles.stepCardRental : styles.stepCardTaxi}`}>

        {/* Number */}
        <div className={styles.stepNumWrap}>
          <span className={`${styles.stepNum} ${isRental ? styles.stepNumRental : styles.stepNumTaxi}`}>
            {number}
          </span>
        </div>

        {/* Icon circle */}
        <motion.div
          className={`${styles.iconCircle} ${isRental ? styles.iconCircleRental : styles.iconCircleTaxi}`}
          whileHover={{ scale: 1.08, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon size={22} />
        </motion.div>

        {/* Content */}
        <div className={styles.stepContent}>
          <h4 className={styles.stepTitle}>{title}</h4>
          <p className={styles.stepDesc}>{description}</p>
        </div>

        {/* Step indicator dot */}
        <div className={`${styles.stepDot} ${isRental ? styles.stepDotRental : styles.stepDotTaxi}`} />
      </div>

      {/* Connector arrow */}
      {!isLast && (
        <div className={styles.connector}>
          <motion.div
            className={`${styles.connectorLine} ${isRental ? styles.connectorRental : styles.connectorTaxi}`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
          />
          <ArrowRight
            size={14}
            className={`${styles.connectorArrow} ${isRental ? styles.arrowRental : styles.arrowTaxi}`}
          />
        </div>
      )}
    </motion.div>
  )
}