import LegalPage, { Section } from '../components/LegalPage'

export const metadata = {
  title: 'Terms of Service — Trinox Garage',
  description:
    'Terms and conditions for car rental, tourism, travel packages, and taxi services from Trinox Garage.',
}

export default function TermsOfServicePage() {
  return (
    <LegalPage
      tag="Legal"
      title="TERMS OF SERVICE"
      lastUpdated="10 August 2026"
    >
      <Section title="1. Agreement to Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the Trinox
          Garage website and our services, including self-drive car rental,
          tourism and travel packages, airport transfers, outstation trips, and
          drive-to-earn taxi vehicle rentals.
        </p>
        <p>
          By browsing our website, submitting a booking request, or using our
          services, you agree to these Terms. If you do not agree, please do not
          use our services.
        </p>
      </Section>

      <Section title="2. About Trinox Garage">
        <p>
          Trinox Garage is based in Thalakottukara, Thrissur, Kerala. We provide
          vehicle-related mobility services subject to availability, eligibility,
          and confirmation by our team.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>To rent a self-drive vehicle, you must generally:</p>
        <ul>
          <li>Be at least 18 years old (or the minimum age required by applicable law / insurer)</li>
          <li>Hold a valid driving licence for the vehicle category booked</li>
          <li>Provide valid government-issued identity proof when requested</li>
          <li>Be fit to drive and not under the influence of alcohol or drugs</li>
        </ul>
        <p>
          For chauffeur-driven tourism, airport, or package travel, age and
          licence requirements apply to our drivers, not to passengers, unless
          otherwise stated.
        </p>
      </Section>

      <Section title="4. Bookings & Confirmation">
        <p>
          Submitting a form or WhatsApp message is a booking <strong>request</strong>,
          not a confirmed reservation. A booking is confirmed only after our team
          verifies availability, pricing, documents (if required), and any advance
          payment terms.
        </p>
        <p>
          Prices shown on the website are indicative and may vary based on
          season, duration, fuel policy, driver charges, night halt, tolls, parking,
          or special requirements. Final quotes will be shared during confirmation.
        </p>
      </Section>

      <Section title="5. Self-Drive Rentals">
        <ul>
          <li>Vehicles must be returned in the same condition as received, subject to normal wear</li>
          <li>Fuel policy, kilometre limits (if any), and security deposit terms will be explained at booking</li>
          <li>You are responsible for traffic fines, tolls, parking charges, and violations during the rental period</li>
          <li>Smoking, illegal activity, racing, or off-road misuse of vehicles is prohibited</li>
          <li>Any accident, damage, theft, or breakdown must be reported to us immediately</li>
        </ul>
      </Section>

      <Section title="6. Tourism, Airport & Travel Packages">
        <p>
          Itineraries, pickup times, and vehicle allotments are planned based on
          the information you provide. Delays due to traffic, weather, road
          closures, or circumstances beyond our control may occur. We will make
          reasonable efforts to adjust plans where possible.
        </p>
        <p>
          Package inclusions/exclusions (vehicle, driver, waiting time, night
          halt, sightseeing stops, etc.) will be confirmed in writing or via
          WhatsApp/call before travel.
        </p>
      </Section>

      <Section title="7. Drive & Earn Taxi Rentals">
        <p>
          Taxi-ready vehicles are rented for lawful commercial use on approved
          platforms where permitted. You are responsible for:
        </p>
        <ul>
          <li>Platform registration, compliance, and account requirements</li>
          <li>Valid commercial permits / documents as applicable</li>
          <li>Timely rental payments as agreed</li>
          <li>Proper care of the vehicle during the rental period</li>
        </ul>
      </Section>

      <Section title="8. Payments">
        <p>
          Payment methods, advance amounts, and balance due dates will be
          communicated at confirmation. Failure to pay as agreed may result in
          cancellation or withholding of the vehicle/service.
        </p>
      </Section>

      <Section title="9. Cancellations & Refunds">
        <p>
          Cancellation and refund rules are described in our{' '}
          <a href="/refund-policy">Refund Policy</a>. By booking with us, you
          also agree to that policy.
        </p>
      </Section>

      <Section title="10. Liability">
        <p>
          While we maintain our fleet with care, Trinox Garage is not liable for
          indirect losses such as missed flights, hotel bookings, business loss,
          or consequential damages arising from delays, breakdowns, or events
          outside our reasonable control.
        </p>
        <p>
          For self-drive rentals, the renter remains responsible for safe
          operation of the vehicle and for damage caused by negligence or misuse,
          subject to any insurance terms applicable to the booking.
        </p>
      </Section>

      <Section title="11. Website Use">
        <p>
          Content on this website (text, branding, photos, and layout) is owned
          by or licensed to Trinox Garage. You may not copy, scrape, or misuse
          our content for commercial purposes without permission.
        </p>
      </Section>

      <Section title="12. Changes to Terms">
        <p>
          We may revise these Terms periodically. Updates will be posted on this
          page with a revised &quot;Last updated&quot; date. Continued use of our
          services after changes constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="13. Governing Law">
        <p>
          These Terms are governed by the laws of India. Disputes shall be
          subject to the jurisdiction of the courts in Thrissur, Kerala, unless
          otherwise required by applicable law.
        </p>
      </Section>

      <Section title="14. Contact">
        <p>Questions about these Terms? Reach us at:</p>
        <ul>
          <li>Phone / WhatsApp: <a href="tel:+918330053689">+91 83300 53689</a> · <a href="tel:+919526952719">+91 95269 52719</a></li>
          <li>Email: <a href="mailto:hello.trinoxgarage@gmail.com">hello.trinoxgarage@gmail.com</a></li>
          <li>Address: Thalakottukara, Thrissur, Kerala, India — 680501</li>
        </ul>
      </Section>
    </LegalPage>
  )
}
