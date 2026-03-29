'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Users, Fuel, Settings, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Fleet.module.css'

const categories = ['All', 'Sedan', 'SUV', 'Premium', 'Taxi']

const vehicles = [
  {
    id: 1,
    name: 'Toyota Innova',
    category: 'SUV',
    type: 'Rental',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: 4.9,
    price: '₹1,800',
    per: 'day',
    badge: 'Most Popular',
    badgeColor: 'yellow',
    emoji: '🚙',
  },
  {
    id: 2,
    name: 'Maruti Swift Dzire',
    category: 'Sedan',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.7,
    price: '₹999',
    per: 'day',
    badge: 'Best Value',
    badgeColor: 'white',
    emoji: '🚗',
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    category: 'SUV',
    type: 'Rental',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Automatic',
    rating: 5.0,
    price: '₹3,500',
    per: 'day',
    badge: 'Premium',
    badgeColor: 'yellow',
    emoji: '🏎️',
  },
  {
    id: 4,
    name: 'Honda City',
    category: 'Sedan',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 4.8,
    price: '₹1,400',
    per: 'day',
    badge: null,
    badgeColor: null,
    emoji: '🚗',
  },
  {
    id: 5,
    name: 'Toyota Etios',
    category: 'Taxi',
    type: 'Taxi',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.8,
    price: '₹14',
    per: 'km',
    badge: 'Uber Ready',
    badgeColor: 'white',
    emoji: '🚕',
  },
  {
    id: 6,
    name: 'BMW 5 Series',
    category: 'Premium',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 5.0,
    price: '₹6,000',
    per: 'day',
    badge: 'Luxury',
    badgeColor: 'yellow',
    emoji: '🏎️',
  },
  {
    id: 7,
    name: 'Maruti Ertiga',
    category: 'Taxi',
    type: 'Taxi',
    seats: 7,
    fuel: 'CNG',
    transmission: 'Manual',
    rating: 4.6,
    price: '₹12',
    per: 'km',
    badge: 'Uber Ready',
    badgeColor: 'white',
    emoji: '🚕',
  },
  {
    id: 8,
    name: 'Kia Seltos',
    category: 'SUV',
    type: 'Rental',
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Automatic',
    rating: 4.9,
    price: '₹2,200',
    per: 'day',
    badge: 'New',
    badgeColor: 'yellow',
    emoji: '🚙',
  },
]

export default function Fleet() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory)

  return (
    <section id="fleet" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.headerRow}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="section-tag">Our Fleet</span>
            <h2 className="section-title">CHOOSE YOUR<br />RIDE</h2>
            <p className="section-subtitle">
              From budget-friendly sedans to luxury SUVs — browse our
              maintained, insured fleet and find your perfect match.
            </p>
          </div>

          {/* Filter tabs */}
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((vehicle, i) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                index={i}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className={styles.bottomText}>
            Don't see what you're looking for?
          </p>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us for Custom Requests
            <ArrowRight size={15} />
          </button>
        </motion.div>

      </div>
    </section>
  )
}

function VehicleCard({ vehicle, index, isInView }) {
  const [hovered, setHovered] = useState(false)

  const handleBook = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className={styles.card}
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Vehicle visual area */}
      <div className={styles.visual}>
        {/* Badge */}
        {vehicle.badge && (
          <span className={`${styles.badge} ${vehicle.badgeColor === 'yellow' ? styles.badgeYellow : styles.badgeWhite}`}>
            {vehicle.badge}
          </span>
        )}

        {/* Type pill */}
        <span className={styles.typePill}>{vehicle.type}</span>

        {/* Car emoji / illustration */}
        <div className={styles.carEmoji}>
          <span>{vehicle.emoji}</span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className={styles.hoverOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <button className={styles.bookBtn} onClick={handleBook}>
            Book Now <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{vehicle.name}</h3>
          <div className={styles.ratingWrap}>
            <Star size={12} fill="var(--yellow)" color="var(--yellow)" />
            <span className={styles.rating}>{vehicle.rating}</span>
          </div>
        </div>

        {/* Specs */}
        <div className={styles.specs}>
          <div className={styles.spec}>
            <Users size={13} color="var(--gray)" />
            <span>{vehicle.seats} seats</span>
          </div>
          <div className={styles.spec}>
            <Fuel size={13} color="var(--gray)" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className={styles.spec}>
            <Settings size={13} color="var(--gray)" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        {/* Price row */}
        <div className={styles.priceRow}>
          <div className={styles.price}>
            <span className={styles.priceVal}>{vehicle.price}</span>
            <span className={styles.pricePer}>/{vehicle.per}</span>
          </div>
          <button className={styles.arrowBtn} onClick={handleBook}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}