'use client';

import { motion } from 'framer-motion';
import Copy from '@/components/Copy';

export default function FooterSection() {
  return (
    <footer className="footer-section-redesign" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Copy>
            <h2 className="footer-logo">Game of Jokes</h2>
          </Copy>
          <Copy delay={0.2}>
            <p className="footer-tagline">
              Where laughter becomes legacy. Every year, every moment.
            </p>
          </Copy>
        </div>

        <div className="footer-columns">
          <div className="footer-column-redesign">
            <Copy delay={0.3}>
              <h3>Sponsorship & Partnerships</h3>
            </Copy>
            <Copy delay={0.4}>
              <p className="footer-description">
                Align your brand with MC Casino&apos;s Game of Jokes and reach
                thousands of engaged audiences.
              </p>
            </Copy>
            <div className="footer-contact">
              <Copy delay={0.5}>
                <a href="mailto:engracedconcepts01@gmail.com" className="contact-link">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">engracedconcepts01@gmail.com</span>
                </a>
              </Copy>
              <Copy delay={0.6}>
                <a href="tel:08188561636" className="contact-link">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">08188561636</span>
                </a>
              </Copy>
            </div>
          </div>

          <div className="footer-column-redesign">
            <Copy delay={0.5}>
              <h3>Start Your Year with Laughter</h3>
            </Copy>
            <Copy delay={0.6}>
              <p className="footer-description">
                Don&apos;t just hear about it — be part of it. Secure your seat
                today and join thousands in making history once again.
              </p>
            </Copy>
            <motion.button
              className="footer-cta-btn-redesign"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
    window.location.href = 'https://myevent.com.ng/events/mc-casino-game-of-jokes-the-very-good-bad-guyz';
  }}
            >
              Buy Ticket on MyEvent.com.ng
            </motion.button>
          </div>
        </div>
      </div>

      <div className="footer-bottom-redesign">
        <Copy delay={0.7}>
          <div className="footer-legal">
            <p>© 2026 Game of Jokes. All rights reserved.</p>
            <span className="footer-divider">|</span>
            <p>MC Casino&apos;s Annual Comedy Concert</p>
          </div>
        </Copy>
      </div>
    </footer>
  );
}
