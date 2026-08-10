import LegalPage, { Section } from '../components/LegalPage'

export const metadata = {
  title: 'Privacy Policy — Trinox Garage',
  description:
    'Learn how Trinox Garage collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      tag="Legal"
      title="PRIVACY POLICY"
      lastUpdated="10 August 2026"
    >
      <Section title="1. Introduction">
        <p>
          Trinox Garage (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates vehicle rental,
          tourism, travel package, and drive-to-earn taxi services from
          Thalakottukara, Thrissur, Kerala. This Privacy Policy explains how we
          collect, use, store, and protect your personal information when you
          use our website, contact us, or book our services.
        </p>
        <p>
          By using our website or services, you agree to the practices described
          in this policy. If you do not agree, please do not submit personal
          information or use our booking forms.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We may collect the following information when you interact with us:</p>
        <ul>
          <li>Full name, phone number, and email address</li>
          <li>Preferred booking dates, service type, and trip details</li>
          <li>Pickup / drop locations and travel requirements</li>
          <li>Driving licence and identity documents required for vehicle handover</li>
          <li>Payment-related references (we do not store full card details on our website)</li>
          <li>Messages you send via our website form, WhatsApp, call, or email</li>
          <li>Basic technical data such as browser type and device information (if analytics are enabled)</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>Your information is used to:</p>
        <ul>
          <li>Process bookings and confirm vehicle availability</li>
          <li>Communicate with you about rentals, tourism trips, airport transfers, and taxi rentals</li>
          <li>Verify identity and eligibility for self-drive rentals</li>
          <li>Provide customer support and respond to enquiries</li>
          <li>Improve our fleet, services, and website experience</li>
          <li>Comply with legal, insurance, and safety obligations</li>
        </ul>
      </Section>

      <Section title="4. WhatsApp & Communication">
        <p>
          When you submit a booking request through our website, your details may
          be shared with us via WhatsApp so our team can confirm your booking.
          Standard WhatsApp / Meta privacy practices apply to messages sent
          through that platform.
        </p>
        <p>
          We may contact you by phone, WhatsApp, or email regarding your booking,
          payment, pickup, or service updates.
        </p>
      </Section>

      <Section title="5. Sharing of Information">
        <p>
          We do not sell your personal information. We may share limited data
          with:
        </p>
        <ul>
          <li>Our staff and authorised partners involved in fulfilling your booking</li>
          <li>Insurance providers or authorities when required for claims, accidents, or legal compliance</li>
          <li>Payment or communication platforms you choose to use (such as WhatsApp)</li>
        </ul>
      </Section>

      <Section title="6. Data Retention & Security">
        <p>
          We retain booking and contact records only as long as needed for
          service delivery, dispute resolution, insurance, and legal requirements.
          We take reasonable steps to protect your information from unauthorised
          access, loss, or misuse. No method of transmission over the internet
          is fully secure, so please share sensitive documents only through
          trusted channels we request.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>You may request to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccurate details</li>
          <li>Withdraw consent for marketing communications (where applicable)</li>
          <li>Ask us to delete information that is no longer required for legal or operational reasons</li>
        </ul>
        <p>
          To make a request, contact us using the details below.
        </p>
      </Section>

      <Section title="8. Cookies & Website Data">
        <p>
          Our website may use essential cookies or similar technologies to
          ensure basic functionality. If we introduce analytics or advertising
          tools in future, we will update this policy accordingly.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          Our services are intended for adults who can legally enter into a
          rental or travel agreement. We do not knowingly collect personal
          information from children under 18.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date at the top of this page will reflect the latest
          revision. Continued use of our services after changes means you accept
          the updated policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          For privacy-related questions or requests, contact Trinox Garage:
        </p>
        <ul>
          <li>Phone / WhatsApp: <a href="tel:+918330053689">+91 83300 53689</a> · <a href="tel:+919526952719">+91 95269 52719</a></li>
          <li>Email: <a href="mailto:hello.trinoxgarage@gmail.com">hello.trinoxgarage@gmail.com</a></li>
          <li>Address: Thalakottukara, Thrissur, Kerala, India — 680501</li>
        </ul>
      </Section>
    </LegalPage>
  )
}
