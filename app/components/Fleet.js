'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Users, Fuel, Settings, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Fleet.module.css'

const categories = ['All', 'SUV', 'Sedan', 'Hatchback', 'Taxi']

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
    price: 1800,
    originalPrice: 2000,
    per: 'day',
    badge: 'Most Popular',
    badgeColor: 'yellow',
    images: ['/images/innova.jpg'],
  },
  {
    id: 2,
    name: 'Toyota Fortuner',
    category: 'SUV',
    type: 'Rental',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: 5.0,
    price: 5000,
    originalPrice: 6000,
    per: 'day',
    badge: 'Premium',
    badgeColor: 'yellow',
    images: [],
  },
  {
    id: 3,
    name: 'Innova Crysta',
    category: 'SUV',
    type: 'Rental',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: 4.9,
    price: 3500,
    originalPrice: 4000,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: [],
  },
  {
    id: 4,
    name: 'Maruti Ciaz',
    category: 'Sedan',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.7,
    price: 1200,
    originalPrice: 1500,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: [],
  },
  {
    id: 5,
    name: 'Maruti Dzire',
    category: 'Sedan',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol / CNG',
    transmission: 'Manual',
    rating: 4.8,
    price: 1300,
    originalPrice: 1500,
    per: 'day',
    badge: 'Best Value',
    badgeColor: 'white',
    images: [],
  },
  {
    id: 6,
    name: 'Hyundai Verna',
    category: 'Sedan',
    type: 'Rental',
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: 4.7,
    price: 1300,
    originalPrice: 1500,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: [],
  },
  {
    id: 7,
    name: 'VW Vento',
    category: 'Sedan',
    type: 'Rental',
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: 4.6,
    price: 1500,
    originalPrice: 1800,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: [],
  },
  {
    id: 8,
    name: 'Maruti Swift',
    category: 'Hatchback',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual / Auto',
    rating: 4.8,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: ['/images/swift.jpg'],
    variants: [
      { label: 'Manual', price: 1200, originalPrice: 1400 },
      { label: 'Auto', price: 1300, originalPrice: 1600 },
    ],
  },
  {
    id: 9,
    name: 'Maruti Baleno',
    category: 'Hatchback',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol / Diesel',
    transmission: 'Manual / Auto',
    rating: 4.8,
    per: 'day',
    badge: 'New',
    badgeColor: 'yellow',
    images: ['/images/baleno-front.jpg', '/images/baleno-back.jpg'],
    variants: [
      { label: 'Manual', price: 1300, originalPrice: 1500 },
      { label: 'Auto', price: 1500, originalPrice: 1800 },
    ],
  },
  {
    id: 10,
    name: 'Honda Jazz',
    category: 'Hatchback',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 4.6,
    price: 1300,
    originalPrice: 1500,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: ['/images/honda-jazz.jpg'],
  },
  {
    id: 11,
    name: 'Maruti WagonR',
    category: 'Hatchback',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.5,
    price: 1100,
    originalPrice: 1300,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: [],
  },
  {
    id: 12,
    name: 'Hyundai i20',
    category: 'Hatchback',
    type: 'Rental',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.7,
    price: 1300,
    originalPrice: 1500,
    per: 'day',
    badge: null,
    badgeColor: null,
    images: [],
  },
  {
    id: 13,
    name: 'WagonR Taxi',
    category: 'Taxi',
    type: 'Taxi',
    seats: 5,
    fuel: 'CNG / Petrol',
    transmission: 'Manual',
    rating: 4.7,
    price: 1100,
    per: 'day',
    badge: 'Drive & Earn',
    badgeColor: 'white',
    images: ['/images/wagonr-taxi.jpg', '/images/wagonr-taxi-back.jpg'],
  },
  {
    id: 14,
    name: 'Dzire Taxi',
    category: 'Taxi',
    type: 'Taxi',
    seats: 5,
    fuel: 'CNG / Petrol',
    transmission: 'Manual',
    rating: 4.8,
    price: 1300,
    per: 'day',
    badge: 'Drive & Earn',
    badgeColor: 'white',
    images: [],
  },
  {
    id: 15,
    name: 'Ertiga Taxi',
    category: 'Taxi',
    type: 'Taxi',
    seats: 7,
    fuel: 'CNG / Petrol',
    transmission: 'Manual',
    rating: 4.8,
    price: 1800,
    per: 'day',
    badge: 'Drive & Earn',
    badgeColor: 'white',
    images: [],
  },
]

function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

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
              From budget-friendly hatchbacks to spacious SUVs — browse our
              maintained, insured fleet and find your perfect match.
            </p>
          </div>

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

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((vehicle, i) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className={styles.bottomText}>
            Don&apos;t see what you&apos;re looking for?
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

function VehicleCard({ vehicle, index }) {
  const [hovered, setHovered] = useState(false)
  const [variantIndex, setVariantIndex] = useState(0)
  const hasVariants = Boolean(vehicle.variants?.length)
  const activeVariant = hasVariants ? vehicle.variants[variantIndex] : null
  const price = activeVariant ? activeVariant.price : vehicle.price
  const originalPrice = activeVariant ? activeVariant.originalPrice : vehicle.originalPrice

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
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.visual}>
        {vehicle.badge && (
          <span className={`${styles.badge} ${vehicle.badgeColor === 'yellow' ? styles.badgeYellow : styles.badgeWhite}`}>
            {vehicle.badge}
          </span>
        )}

        <span className={styles.typePill}>{vehicle.type}</span>

        <CarImageSlider images={vehicle.images} name={vehicle.name} />

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

      <div className={styles.info}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{vehicle.name}</h3>
          <div className={styles.ratingWrap}>
            <Star size={12} fill="var(--yellow)" color="var(--yellow)" />
            <span className={styles.rating}>{vehicle.rating}</span>
          </div>
        </div>

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

        {hasVariants && (
          <div className={styles.variantTabs}>
            {vehicle.variants.map((variant, i) => (
              <button
                key={variant.label}
                type="button"
                className={`${styles.variantBtn} ${variantIndex === i ? styles.variantActive : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setVariantIndex(i)
                }}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}

        <div className={styles.priceRow}>
          <div className={styles.price}>
            {originalPrice ? (
              <span className={styles.priceOriginal}>{formatPrice(originalPrice)}</span>
            ) : null}
            <span className={styles.priceVal}>{formatPrice(price)}</span>
            <span className={styles.pricePer}>/{vehicle.per}</span>
          </div>
          <button className={styles.arrowBtn} onClick={handleBook} aria-label={`Book ${vehicle.name}`}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function CarImageSlider({ images, name }) {
  const [current, setCurrent] = useState(0)
  const hasImages = images?.length > 0
  const hasMultiple = images?.length > 1

  const goPrev = useCallback((e) => {
    e?.stopPropagation()
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }, [images])

  const goNext = useCallback((e) => {
    e?.stopPropagation()
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }, [images])

  useEffect(() => {
    if (!hasMultiple) return undefined
    const timer = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
    }, 3500)
    return () => clearInterval(timer)
  }, [hasMultiple, images])

  if (!hasImages) {
    return (
      <div className={styles.placeholder}>
        <span className={styles.placeholderIcon}>🚗</span>
        <span className={styles.placeholderText}>{name}</span>
      </div>
    )
  }

  return (
    <div className={styles.slider}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={images[current]}
          className={styles.slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={images[current]}
            alt={`${name} photo ${current + 1}`}
            fill
            sizes="(max-width: 500px) 100vw, (max-width: 1100px) 50vw, 25vw"
            className={styles.carImage}
            priority={false}
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            type="button"
            className={`${styles.sliderNav} ${styles.sliderPrev}`}
            onClick={goPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            className={`${styles.sliderNav} ${styles.sliderNext}`}
            onClick={goNext}
            aria-label="Next photo"
          >
            <ChevronRight size={16} />
          </button>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${current === i ? styles.dotActive : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrent(i)
                }}
                aria-label={`Show photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
