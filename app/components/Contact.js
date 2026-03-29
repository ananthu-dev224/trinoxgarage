'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, Send,
  MessageCircle, CheckCircle2, AlertCircle,
} from 'lucide-react'
import styles from './Contact.module.css'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 98765 43210',
    sub: 'Available 24/7',
    href: 'tel:+919876543210',
    action: 'Call Now',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    sub: 'Chat with us instantly',
    href: 'https://wa.me/919876543210',
    action: 'WhatsApp Us',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@trinoxgarage.com',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@trinoxgarage.com',
    action: 'Send Email',
  },
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'Tirur, Malappuram',
    sub: 'Kerala, India — 676101',
    href: 'https://maps.google.com',
    action: 'Get Directions',
  },
]

const services = ['Car Rental', 'Uber Taxi', 'Airport Transfer', 'Outstation Trip', 'Wedding Car', 'Other']

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', date: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [selectedService, setSelectedService] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleServiceSelect = (s) => {
    setSelectedService(s)
    setForm(prev => ({ ...prev, service: s }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setStatus('sending')
    // Simulate submission — replace with your API call
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' })
      setSelectedService('')
    }, 4000)
  }

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>

      {/* Background */}
      <div className={styles.bgStripe} />

      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">CONTACT US</h2>
          <p className="section-subtitle">
            Ready to book or have a question? Reach out and our team will
            get back to you in minutes.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className={styles.mainGrid}>

          {/* Left — Contact info + map */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Info cards */}
            <div className={styles.infoCards}>
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={styles.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -3 }}
                >
                  <div className={styles.infoIconWrap}>
                    <info.icon size={18} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                    <span className={styles.infoSub}>{info.sub}</span>
                  </div>
                  <span className={styles.infoAction}>{info.action} →</span>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              className={styles.hoursCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
            >
              <div className={styles.hoursHeader}>
                <Clock size={16} color="var(--yellow)" />
                <span className={styles.hoursTitle}>Business Hours</span>
              </div>
              <div className={styles.hoursGrid}>
                {[
                  { day: 'Monday — Friday', time: '7:00 AM – 10:00 PM' },
                  { day: 'Saturday', time: '7:00 AM – 11:00 PM' },
                  { day: 'Sunday', time: '8:00 AM – 9:00 PM' },
                  { day: 'Emergency / Taxi', time: '24 Hours / 7 Days' },
                ].map((h, i) => (
                  <div key={i} className={styles.hoursRow}>
                    <span className={styles.hoursDay}>{h.day}</span>
                    <span className={`${styles.hoursTime} ${i === 3 ? styles.hoursTimeAccent : ''}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              className={styles.mapBox}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
            >
              <iframe
                title="Trinox Garage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31470.123456789!2d75.9206!3d10.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d1234567890%3A0xabcdef1234567890!2sTirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className={styles.mapOverlay}>
                <MapPin size={20} color="var(--yellow)" />
                <span>Tirur, Malappuram, Kerala</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Booking form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>BOOK A VEHICLE</h3>
                <p className={styles.formSubtitle}>
                  Fill in your details and we'll confirm your booking within minutes.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  className={styles.successMsg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={48} color="var(--yellow)" />
                  <h4 className={styles.successTitle}>BOOKING RECEIVED!</h4>
                  <p className={styles.successText}>
                    Thank you! Our team will contact you within minutes to confirm your booking.
                  </p>
                </motion.div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>

                  {/* Row 1 */}
                  <div className={styles.formRow}>
                    <div className={styles.fieldWrap}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.fieldWrap}>
                      <label className={styles.label}>Phone Number *</label>
                      <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className={styles.formRow}>
                    <div className={styles.fieldWrap}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.fieldWrap}>
                      <label className={styles.label}>Preferred Date</label>
                      <input
                        className={styles.input}
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className={styles.fieldWrap}>
                    <label className={styles.label}>Service Required</label>
                    <div className={styles.serviceGrid}>
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`${styles.serviceChip} ${selectedService === s ? styles.serviceChipActive : ''}`}
                          onClick={() => handleServiceSelect(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.fieldWrap}>
                    <label className={styles.label}>Additional Details</label>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      placeholder="Tell us about your trip, pickup location, number of passengers, or any special requirements..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className={styles.spinner} />
                        Sending Booking...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Booking Request
                      </>
                    )}
                  </button>

                  <p className={styles.formNote}>
                    * We'll confirm your booking via call or WhatsApp within minutes.
                    No payment required to submit.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}