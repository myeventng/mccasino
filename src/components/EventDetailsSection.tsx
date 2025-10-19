// ==================== FILE: components/EventDetailsSection.tsx ====================
'use client';

import { motion } from 'framer-motion';
import Copy from '@/components/Copy';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

interface Detail {
  label: string;
  value: string;
  sublabel?: string;
  icon: React.ElementType;
}

export default function EventDetailsSection() {
  const details: Detail[] = [
    {
      label: 'Venue',
      value: 'Cathelea Convention Centre',
      sublabel: 'Benin City, Edo State',
      icon: MapPin,
    },
    {
      label: 'Date',
      value: 'Thursday, 1st January 2026',
      sublabel: 'New Year\'s Day',
      icon: Calendar,
    },
    {
      label: 'Time',
      value: '6:00PM — 11:00PM',
      sublabel: 'Red Carpet at 6:00PM | Main Event at 7:30PM',
      icon: Clock,
    },
    {
      label: 'Capacity',
      value: '5,000+ Guests',
      sublabel: 'Limited seating available',
      icon: Users,
    },
  ];

  return (
    <section className="event-details-section-redesign" id="venue">
      <div className="details-container">
        <div className="details-header-redesign">
          <Copy>
            <span className="details-eyebrow">Essential Information</span>
          </Copy>
          <Copy delay={0.2}>
            <h2 className="details-title">Event Details</h2>
          </Copy>
          <Copy delay={0.4}>
            <p className="details-subtitle">
              Everything you need to know about Game of Jokes 2026
            </p>
          </Copy>
        </div>

        <div className="details-grid-redesign">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={index}
                className="detail-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="detail-card-inner">
                  <div className="detail-icon-wrapper">
                    <IconComponent className="detail-icon-react" size={32} strokeWidth={2} />
                  </div>

                  <div className="detail-text">
                    <Copy delay={0.3 + index * 0.1}>
                      <h4 className="detail-label">{detail.label}</h4>
                    </Copy>
                    <Copy delay={0.4 + index * 0.1}>
                      <h3 className="detail-value">{detail.value}</h3>
                    </Copy>
                    {detail.sublabel && (
                      <Copy delay={0.5 + index * 0.1}>
                        <p className="detail-sublabel">{detail.sublabel}</p>
                      </Copy>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="cta-final-redesign"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Copy delay={0.8}>
            <p className="cta-pre-text">Ready to experience the magic?</p>
          </Copy>
          <motion.button
            className="final-cta-btn-redesign"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
    window.location.href = 'https://myevent.com.ng/events/mc-casino-game-of-jokes-the-very-good-bad-guyz';
  }}
          >
            <span className="cta-btn-text">Get Your Ticket Now</span>
            <span className="cta-btn-arrow">→</span>
          </motion.button>
          <Copy delay={1}>
            <p className="cta-post-text">
              Tickets selling fast • Limited availability
            </p>
          </Copy>
        </motion.div>
      </div>
    </section>
  );
}