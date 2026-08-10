import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'
import styles from './LegalPage.module.css'

export default function LegalPage({ title, tag, lastUpdated, children }) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/trinox_logo.png"
              alt="Trinox Garage"
              width={100}
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </header>

      <article className={styles.article}>
        <div className={styles.container}>
          <span className={styles.tag}>{tag}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Last updated: {lastUpdated}</p>

          <div className={styles.content}>{children}</div>

          <div className={styles.otherPolicies}>
            <p>Related policies</p>
            <div className={styles.policyLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

export function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
