'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import styles from './Navbar.module.css'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          <div className={styles.logoMark}>
            <Image
              src="/images/trinox_logo.png"
              alt="Trinox Logo"
              width={120}
              height={60}
              className={styles.logoImage}
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href.replace("#", "") ? styles.active : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
                <span className={styles.navLinkLine} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.navRight}>
          <a href="tel:+918330053689" className={styles.phoneBtn}>
            <Phone size={14} />
            <span>Book Now</span>
          </a>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={`${styles.mobileLink} ${activeSection === link.href.replace("#", "") ? styles.mobileActive : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span className={styles.mobileLinkNum}>0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className={styles.mobileFooter}>
              <a href="tel:+918330053689" className="btn-primary">
                <Phone size={14} />
                Call to Book
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}