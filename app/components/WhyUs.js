'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ShieldCheck, Clock, ThumbsUp, MapPin,
  Banknote, HeartHandshake, Wrench, Award,
} from 'lucide-react'
import styles from './WhyUs.module.css'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    description:
      'Every vehicle in our fleet is comprehensively insured. Drive with complete peace of mind.',
    stat: '100%',
    statLabel: 'Coverage',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Round-the-clock support and booking. We\'re always here whenever you need us, day or night.',
    stat: '24/7',
    statLabel: 'Support',
  },
  {
    icon: ThumbsUp,
    title: 'Verified Drivers',
    description:
      'All our taxi drivers are background-checked, trained, and rated by real customers.',
    stat: '4.9★',
    statLabel: 'Avg Rating',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    description:
      'No hidden fees, no surprises. What you see is what you pay — always fair and upfront.',
    stat: '0',
    statLabel: 'Hidden Fees',
  },
  {
    icon: MapPin,
    title: 'Doorstep Delivery',
    description:
      'We bring your rental car right to your location. No need to travel to pick it up.',
    stat: '30km',
    statLabel: 'Delivery Radius',
  },
  {
    icon: Wrench,
    title: 'Well Maintained',
    description:
      'Every car is serviced, cleaned, and safety-checked before each rental. Always road-ready.',
    stat: '100%',
    statLabel: 'Serviced',
  },
  {
    icon: HeartHandshake,
    title: 'Local Expertise',
    description:
      'We know Kerala\'s roads, routes, and destinations better than anyone. Local knowledge, better journeys.',
    stat: '5+',
    statLabel: 'Years Local',
  },
  {
    icon: Award,
    title: 'Top Rated Service',
    description:
      'Consistently rated as one of the best vehicle rental services across Tirur and surrounding areas.',
    stat: '500+',
    statLabel: 'Happy Clients',
  },
]

export default function WhyUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="why-us" ref={sectionRef} className={styles.section}>

      {/* Background accent */}
      <div className={styles.bgAccent} />
      <div className={styles.bgDots} />

      <div className={styles.container}>

        {/* Header row */}
        <div className={styles.headerRow}>
          <motion.div
            className={styles.headerLeft}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Why Trinox</span>
            <h2 className="section-title">WHY CHOOSE<br />US?</h2>
            <p className="section-subtitle">
              We don't just rent cars — we deliver an experience built on
              trust, comfort, and local expertise.
            </p>
          </motion.div>

          {/* Big stat highlight */}
          <motion.div
            className={styles.bigStat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.bigStatInner}>
              <span className={styles.bigStatValue}>500+</span>
              <span className={styles.bigStatLabel}>Happy Customers<br />& Counting</span>
              <div className={styles.bigStatDivider} />
              <div className={styles.bigStatRow}>
                <div className={styles.bigStatMini}>
                  <span className={styles.miniVal}>50+</span>
                  <span className={styles.miniLabel}>Vehicles</span>
                </div>
                <div className={styles.bigStatMiniDivider} />
                <div className={styles.bigStatMini}>
                  <span className={styles.miniVal}>5yrs</span>
                  <span className={styles.miniLabel}>Experience</span>
                </div>
                <div className={styles.bigStatMiniDivider} />
                <div className={styles.bigStatMini}>
                  <span className={styles.miniVal}>4.9★</span>
                  <span className={styles.miniLabel}>Rating</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reasons grid */}
        <div className={styles.grid}>
          {reasons.map((reason, i) => (
            <ReasonCard
              key={i}
              reason={reason}
              index={i}
              isInView={isInView}
              isHovered={hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function ReasonCard({ reason, index, isInView, isHovered, onHover, onLeave }) {
  const { icon: Icon, title, description, stat, statLabel } = reason

  return (
    <motion.div
      className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Top row: icon + stat */}
      <div className={styles.cardTop}>
        <motion.div
          className={`${styles.iconWrap} ${isHovered ? styles.iconWrapHovered : ''}`}
          animate={{ rotate: isHovered ? 8 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon size={20} />
        </motion.div>

        <div className={styles.statChip}>
          <span className={styles.statVal}>{stat}</span>
          <span className={styles.statLbl}>{statLabel}</span>
        </div>
      </div>

      {/* Content */}
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDesc}>{description}</p>

      {/* Bottom accent bar */}
      <motion.div
        className={styles.accentBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  )
}