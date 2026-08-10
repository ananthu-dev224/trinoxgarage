import LegalPage, { Section } from '../components/LegalPage'

export const metadata = {
  title: 'Refund Policy',
  description:
    'Cancellation and refund policy for Trinox Garage car rentals, tourism packages, and taxi services in Thrissur, Kerala.',
  alternates: {
    canonical: '/refund-policy',
  },
}

export default function RefundPolicyPage() {
  return (
    <LegalPage
      tag="Legal"
      title="REFUND POLICY"
      lastUpdated="10 August 2026"
    >
      <Section title="1. Overview">
        <p>
          This Refund Policy explains how cancellations, rescheduling, and
          refunds work for Trinox Garage services — including self-drive car
          rentals, tourism and travel packages, airport transfers, outstation
          trips, and drive-to-earn taxi vehicle rentals.
        </p>
        <p>
          Because vehicle allotment, driver scheduling, and preparation involve
          advance planning, cancellation charges may apply depending on when you
          cancel and the type of booking.
        </p>
      </Section>

      <Section title="2. Booking Requests vs Confirmed Bookings">
        <p>
          A form or WhatsApp enquiry is not a paid booking until our team
          confirms availability and you complete any required advance payment.
          If no payment has been made and the booking was never confirmed, there
          is nothing to refund.
        </p>
      </Section>

      <Section title="3. Self-Drive Car Rentals">
        <p>Unless a special written agreement says otherwise:</p>
        <ul>
          <li><strong>Cancel 48+ hours before pickup:</strong> Full refund of advance paid, minus any non-refundable third-party charges if applicable</li>
          <li><strong>Cancel 24—48 hours before pickup:</strong> 50% of the advance may be retained as a cancellation fee</li>
          <li><strong>Cancel within 24 hours of pickup / no-show:</strong> Advance payment is generally non-refundable</li>
          <li><strong>Early return:</strong> Unused rental days are not automatically refundable once the rental has started</li>
        </ul>
        <p>
          Security deposits (if collected) are returned after vehicle inspection,
          subject to deductions for damage, excess cleaning, missing accessories,
          fuel shortfall, fines, or other agreed charges.
        </p>
      </Section>

      <Section title="4. Airport Transfers & Point-to-Point Trips">
        <ul>
          <li><strong>Cancel 12+ hours before pickup:</strong> Full refund of advance, where paid</li>
          <li><strong>Cancel within 12 hours / driver already dispatched:</strong> Advance may be non-refundable; waiting or dead-mileage charges may apply</li>
          <li>Flight delays should be informed as early as possible so we can adjust pickup timing</li>
        </ul>
      </Section>

      <Section title="5. Tourism & Travel Packages">
        <p>
          Package cancellations depend on trip length, custom itinerary costs,
          and whether hotels or third-party services were booked on your behalf.
        </p>
        <ul>
          <li><strong>Cancel 7+ days before start:</strong> Refund of advance minus any non-recoverable third-party costs already incurred</li>
          <li><strong>Cancel 3—7 days before start:</strong> Up to 50% of trip value / advance may be retained</li>
          <li><strong>Cancel within 3 days / after trip start:</strong> Generally non-refundable</li>
        </ul>
        <p>
          If a package is partially completed, refunds for unused portions are
          assessed case by case and are not guaranteed.
        </p>
      </Section>

      <Section title="6. Drive & Earn Taxi Rentals">
        <p>
          Monthly or long-term taxi rentals follow the payment schedule agreed at
          confirmation. Prepaid rental amounts for a started rental period are
          typically non-refundable. Early termination may require notice as
          agreed in your rental arrangement and may involve adjustment charges.
        </p>
      </Section>

      <Section title="7. Rescheduling">
        <p>
          We will try to accommodate date or time changes subject to vehicle and
          driver availability. Rescheduling requests made too close to the
          original slot may be treated as a cancellation under the timelines
          above.
        </p>
      </Section>

      <Section title="8. Cancellations by Trinox Garage">
        <p>
          If we cancel your confirmed booking due to vehicle unavailability,
          operational issues, or circumstances within our control, you will
          receive a full refund of amounts paid to us for that booking, or an
          alternate vehicle/service if you prefer and one is available.
        </p>
        <p>
          We are not responsible for additional costs such as alternate transport
          arranged independently, hotel fees, or flight change charges, except
          where required by law.
        </p>
      </Section>

      <Section title="9. How Refunds Are Processed">
        <ul>
          <li>Approved refunds are processed to the original payment method where possible</li>
          <li>Bank / UPI refunds typically take 5—10 business days after approval</li>
          <li>Cash payments, if any, will be refunded as mutually arranged</li>
        </ul>
      </Section>

      <Section title="10. Non-Refundable Situations">
        <p>Refunds are generally not provided when:</p>
        <ul>
          <li>You provided incorrect documents or failed eligibility checks</li>
          <li>The vehicle was refused at pickup due to unsafe or unfit driving condition of the hirer</li>
          <li>Damage, fines, or policy violations occurred during the rental</li>
          <li>Services were fully delivered as confirmed</li>
        </ul>
      </Section>

      <Section title="11. How to Request a Cancellation or Refund">
        <p>
          Contact us as soon as possible with your booking name, phone number,
          and travel date:
        </p>
        <ul>
          <li>Phone / WhatsApp: <a href="tel:+918330053689">+91 83300 53689</a> · <a href="tel:+919526952719">+91 95269 52719</a></li>
          <li>Email: <a href="mailto:hello.trinoxgarage@gmail.com">hello.trinoxgarage@gmail.com</a></li>
        </ul>
        <p>
          Faster notice helps us reassign vehicles and improves your chance of a
          favourable refund outcome under this policy.
        </p>
      </Section>

      <Section title="12. Policy Updates">
        <p>
          We may update this Refund Policy from time to time. The latest version
          will always be available on this page. Bookings are governed by the
          policy in effect at the time of confirmation, unless a written
          exception was agreed for your booking.
        </p>
      </Section>
    </LegalPage>
  )
}
