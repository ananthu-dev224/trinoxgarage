'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'
import styles from './Hero.module.css'

const badges = [
  { icon: Shield, label: 'Fully Insured' },
  { icon: Clock, label: '24/7 Available' },
  { icon: Star, label: 'Top Rated' },
]

export default function Hero() {
  const canvasRef = useRef(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Animated grid canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const cols = 20
      const rows = 14
      const cellW = w / cols
      const cellH = h / rows

      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const x = c * cellW
          const y = r * cellH
          const dist = Math.sqrt(Math.pow(c - cols / 2, 2) + Math.pow(r - rows / 2, 2))
          const wave = Math.sin(dist * 0.5 - time * 0.8) * 0.5 + 0.5
          const alpha = wave * 0.12

          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 214, 0, ${alpha})`
          ctx.fill()
        }
      }

      // Diagonal accent line
      ctx.beginPath()
      ctx.moveTo(w * 0.55, 0)
      ctx.lineTo(w * 0.75, h)
      ctx.strokeStyle = 'rgba(255, 214, 0, 0.04)'
      ctx.lineWidth = 80
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(w * 0.65, 0)
      ctx.lineTo(w * 0.85, h)
      ctx.strokeStyle = 'rgba(255, 214, 0, 0.025)'
      ctx.lineWidth = 40
      ctx.stroke()

      time += 0.015
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleBookClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleServicesClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Dark gradient overlays */}
      <div className={styles.gradientLeft} />
      <div className={styles.gradientBottom} />

      {/* Decorative side text */}
      <div className={styles.sideText}>
        <span>TRINOX GARAGE © 2025</span>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>SCROLL</span>
      </div>

      {/* Main content */}
      <motion.div className={styles.content} style={{ y: yText, opacity }}>

        {/* Tag line */}
        <motion.div
          className={styles.tagRow}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.tagDot} />
          <span className={styles.tagText}>Kerala's Premium Vehicle Service</span>
        </motion.div>

        {/* Headline */}
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

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          Trinox Garage offers premium car rentals and professional Uber taxi services.
          Whether you're exploring the city or need a reliable ride — we've got you covered.
        </motion.p>

        {/* CTAs */}
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

        {/* Trust Badges */}
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

      {/* Stats strip */}
      <motion.div
        className={styles.statsStrip}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {[
          { value: '500+', label: 'Happy Clients' },
          { value: '50+', label: 'Vehicles' },
          { value: '5★', label: 'Avg Rating' },
          { value: '24/7', label: 'Support' },
        ].map((stat, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}