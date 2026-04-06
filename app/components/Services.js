'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Car, Navigation, CheckCircle2, ArrowRight, Clock, MapPin, Shield, Zap } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    id: 'rental',
    icon: Car,
    tag: '01 — Car Rental',
    title: 'Self-Drive\nCar Rental',
    description:
      'Choose from our premium fleet and enjoy complete freedom on the road. Perfect for personal use, trips, or long-term needs with flexible rental options.',
    features: [
      'Sedans, SUVs & premium vehicles',
      'Flexible daily, weekly & monthly plans',
      'Fully serviced & insured cars',
      'Doorstep delivery available',
    ],
    cta: 'Rent a Car',
    accent: true,
    stats: [
      { value: '30+', label: 'Vehicles' },
      { value: '₹999', label: 'Starting / Day' },
    ],
    decorIcon: Car,
  },
  {
    id: 'taxi-rental',
    icon: Navigation,
    tag: '02 — Taxi Rental',
    title: 'Drive & Earn\nTaxi Cars',
    description:
      'Rent taxi-ready vehicles and start earning with ride-hailing platforms. Ideal for drivers looking to generate daily income without owning a car.',
    features: [
      'Taxi-approved vehicles ready for registration',
      'Affordable weekly & monthly rental plans',
      'Perfect for Uber, Ola & other platforms',
      'Well-maintained & fuel-efficient cars',
    ],
    cta: 'Start Earning',
    accent: false,
    stats: [
      { value: 'Low Cost', label: 'Entry' },
      { value: 'High', label: 'Earning Potential' },
    ],
    decorIcon: Navigation,
  },
];

const featureIcons = [CheckCircle2, CheckCircle2, CheckCircle2, CheckCircle2]

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      {/* Background detail */}
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-subtitle">
            Two powerful services built around one goal — getting you where you
            need to be, in comfort and style.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className={styles.cards}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          className={styles.bottomStrip}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { icon: Shield, text: 'Fully insured vehicles' },
            { icon: Clock, text: '24/7 booking & support' },
            { icon: MapPin, text: 'Covering all of Kerala' },
            { icon: Zap, text: 'Instant confirmation' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className={styles.stripItem}>
              <Icon size={16} color="var(--yellow)" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isInView }) {
  const { icon: Icon, tag, title, description, features, cta, accent, stats, decorIcon: DecorIcon } = service

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className={`${styles.card} ${accent ? styles.cardAccent : styles.cardDark}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative large icon */}
      <div className={styles.decorIcon}>
        <DecorIcon size={160} strokeWidth={0.4} />
      </div>

      {/* Top row */}
      <div className={styles.cardTop}>
        <div className={`${styles.iconWrap} ${accent ? styles.iconWrapAccent : styles.iconWrapDark}`}>
          <Icon size={22} />
        </div>
        <span className={styles.cardTag}>{tag}</span>
      </div>

      {/* Title */}
      <h3 className={styles.cardTitle}>
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h3>

      {/* Description */}
      <p className={styles.cardDesc}>{description}</p>

      {/* Divider */}
      <div className={`${styles.divider} ${accent ? styles.dividerAccent : styles.dividerDark}`} />

      {/* Features */}
      <ul className={styles.features}>
        {features.map((f, i) => (
          <motion.li
            key={i}
            className={styles.featureItem}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.15 + i * 0.07 }}
          >
            <CheckCircle2
              size={14}
              className={styles.checkIcon}
              color={accent ? 'var(--black)' : 'var(--yellow)'}
            />
            <span>{f}</span>
          </motion.li>
        ))}
      </ul>

      {/* Stats row */}
      <div className={styles.statsRow}>
        {stats.map((s, i) => (
          <div key={i} className={`${styles.statBox} ${accent ? styles.statBoxAccent : styles.statBoxDark}`}>
            <span className={styles.statVal}>{s.value}</span>
            <span className={styles.statLbl}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className={`${styles.cardCta} ${accent ? styles.ctaDark : styles.ctaYellow}`}
        onClick={handleClick}
      >
        {cta}
        <ArrowRight size={16} />
      </button>
    </motion.div>
  )
}