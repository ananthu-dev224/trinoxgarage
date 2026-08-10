'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'
import styles from './Hero.module.css'

const badges = [
  { icon: Shield, label: 'Fully Insured' },
  { icon: Clock, label: '24/7 Available' },
  { icon: Star, label: 'Top Rated' },
]

export default function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const handleBookClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleServicesClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      {/* Banner background */}
      <motion.div className={styles.bgWrap} style={{ y: yBg }}>
        <Image
          src="/images/banner.jpg"
          alt="Trinox Garage fleet"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>

      {/* Dark overlays for text readability */}
      <div className={styles.overlay} />
      <div className={styles.gradientLeft} />
      <div className={styles.gradientBottom} />

      {/* Main content */}
      <motion.div className={styles.content} style={{ y: yText, opacity }}>
        <motion.div
          className={styles.tagRow}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.tagDot} />
          <span className={styles.tagText}>
            Kerala&apos;s Premium Vehicle Service
          </span>
        </motion.div>

        <div className={styles.headlineWrap}>
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            DRIVE IN
          </motion.h1>

          <motion.div
            className={styles.headlineRow2}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.headlineOutline}>STYLE,</span>
            <span className={styles.headlineAccent}> ARRIVE</span>
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            IN COMFORT.
          </motion.h1>
        </div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          Trinox Garage provides premium car rentals, tourism & travel packages,
          and drive-to-earn taxi vehicles. From airport transfers to holiday
          trips — we power every journey.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="btn-primary" onClick={handleBookClick}>
            Book a Vehicle
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={handleServicesClick}>
            Our Services
          </button>
        </motion.div>

        <motion.div
          className={styles.badges}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <Icon size={14} color="var(--yellow)" />
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
