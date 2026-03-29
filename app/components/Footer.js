"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, Car, Navigation } from "lucide-react";
import Image from "next/image";

// lucide-react does not ship brand/social icons — inline SVG fallbacks
/** @type {React.FC<{size?: number}>} */
const Instagram = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/** @type {React.FC<{size?: number}>} */
const Facebook = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/** @type {React.FC<{size?: number}>} */
const Youtube = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

/** @type {React.FC<{size?: number}>} */
const Twitter = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l16 16M4 20 20 4" />
    <path d="M4 4h4l12 16h-4Z" />
  </svg>
);
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { label: "Self-Drive Car Rental", href: "#services" },
  { label: "Uber Taxi Service", href: "#services" },
  { label: "Airport Transfers", href: "#contact" },
  { label: "Outstation Trips", href: "#contact" },
  { label: "Wedding Car Hire", href: "#contact" },
  { label: "Corporate Rentals", href: "#contact" },
  { label: "Long-Term Rentals", href: "#contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
];

const fleetHighlights = [
  { icon: Car, label: "Sedan Cars", sub: "From ₹999/day" },
  { icon: Car, label: "SUV & MUV", sub: "From ₹1,800/day" },
  { icon: Car, label: "Premium Cars", sub: "From ₹3,500/day" },
  { icon: Navigation, label: "Uber Taxi", sub: "From ₹12/km" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-60px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className={styles.footer}>
      {/* Top CTA Banner */}
      <motion.div
        className={styles.ctaBanner}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.ctaBannerInner}>
          <div className={styles.ctaBannerLeft}>
            <span className={styles.ctaBannerTag}>Ready to Roll?</span>
            <h3 className={styles.ctaBannerTitle}>
              YOUR NEXT JOURNEY STARTS HERE.
            </h3>
          </div>
          <div className={styles.ctaBannerRight}>
            <a href="tel:+919876543210" className={styles.ctaCallBtn}>
              <Phone size={16} />
              Call Now — 24/7
            </a>
            {/* FIX 1: Was missing the opening `<` on this anchor tag */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaWaBtn}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main footer body */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Col 1 — Brand */}
            <motion.div
              className={styles.brandCol}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Logo */}
              <div className={styles.logo}>
                <div className={styles.logoMark}>
                  <Image
                    src="/images/trinox_logo.png"
                    alt="Trinox Logo"
                    fill
                    className={styles.logoImage}
                    priority
                  />
                </div>
              </div>

              <p className={styles.brandDesc}>
                Trinox Garage is Kerala's trusted vehicle rental and taxi
                service, based in Tirur, Malappuram. Premium cars, verified
                drivers, and round-the-clock availability — all in one place.
              </p>

              {/* Socials */}
              <div className={styles.socials}>
                {/* FIX 2: Each social <a> tag was missing its opening `<` */}
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialBtn}
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* Contact quick */}
              <div className={styles.quickContact}>
                <a href="tel:+919876543210" className={styles.contactLine}>
                  <Phone size={13} color="var(--yellow)" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:hello@trinoxgarage.com"
                  className={styles.contactLine}
                >
                  <Mail size={13} color="var(--yellow)" />
                  <span>hello@trinoxgarage.com</span>
                </a>
                <div className={styles.contactLine}>
                  <MapPin size={13} color="var(--yellow)" />
                  <span>Tirur, Malappuram, Kerala — 676101</span>
                </div>
              </div>
            </motion.div>

            {/* Col 2 — Quick Links */}
            <motion.div
              className={styles.linksCol}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {/* FIX 3: Each quickLinks <a> tag was missing its opening `<` */}
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      <span className={styles.linkArrow}>›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 3 — Services */}
            <motion.div
              className={styles.linksCol}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h4 className={styles.colTitle}>Our Services</h4>
              <ul className={styles.linkList}>
                {services.map((link) => (
                  <li key={link.label}>
                    {/* FIX 4: Each services <a> tag was missing its opening `<` */}
                    <a
                      href={link.href}
                      className={styles.footerLink}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      <span className={styles.linkArrow}>›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 4 — Fleet & Hours */}
            <motion.div
              className={styles.lastCol}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h4 className={styles.colTitle}>Fleet Highlights</h4>
              <div className={styles.fleetList}>
                {fleetHighlights.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className={styles.fleetItem}>
                    <div className={styles.fleetIcon}>
                      <Icon size={14} />
                    </div>
                    <div className={styles.fleetInfo}>
                      <span className={styles.fleetLabel}>{label}</span>
                      <span className={styles.fleetSub}>{sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours mini */}
              <div className={styles.hoursBox}>
                <h4
                  className={styles.colTitle}
                  style={{ marginBottom: "12px" }}
                >
                  Hours
                </h4>
                {[
                  { d: "Mon – Fri", t: "7AM – 10PM" },
                  { d: "Saturday", t: "7AM – 11PM" },
                  { d: "Sunday", t: "8AM – 9PM" },
                  { d: "Taxi", t: "24 / 7" },
                ].map((h) => (
                  <div key={h.d} className={styles.hoursRow}>
                    <span className={styles.hoursDay}>{h.d}</span>
                    <span
                      className={`${styles.hoursTime} ${h.d === "Taxi" ? styles.hoursAccent : ""}`}
                    >
                      {h.t}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Trinox Garage. All rights reserved.
            Built with ❤️ in Kerala, India.
          </p>

          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <span className={styles.bottomDot} />
            <a href="#" className={styles.bottomLink}>
              Terms of Service
            </a>
            <span className={styles.bottomDot} />
            <a href="#" className={styles.bottomLink}>
              Refund Policy
            </a>
          </div>

          {/* Back to top */}
          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
