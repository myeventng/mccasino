// ==================== FILE: components/TicketsSection.tsx ====================
'use client';

import { motion } from 'framer-motion';
import Copy from '@/components/Copy';
import Link from 'next/link';

interface Ticket {
  type: string;
  price: string;
  priceDetail: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export default function TicketsSection() {
  const tickets: Ticket[] = [
    {
      type: 'Regular',
      price: '₦5,000',
      priceDetail: 'per person',
      image: '/ticket-regular.jpg',
      features: ['General Admission', 'Standing Area', 'Access to Main Event'],
    },
    {
      type: 'VIP',
      price: '₦20,000',
      priceDetail: 'per person',
      image: '/ticket-vip.jpg',
      features: ['Premium Seating', 'VIP Section', 'Complimentary Drink'],
      popular: true,
    },
    {
      type: 'Table Package',
      price: '₦500,000',
      priceDetail: 'starting from',
      image: '/ticket-table.jpg',
      features: [
        'Exclusive Seating',
        'Premium Drinks',
        'Table Service',
        'VIP Access',
      ],
    },
  ];

  return (
    <section className="tickets-section-redesign" id="tickets">
      <div className="tickets-header-redesign">
        <Copy>
          <span className="tickets-eyebrow">Investment in Joy</span>
        </Copy>
        <Copy delay={0.2}>
          <h2 className="tickets-title">Tickets & Pricing</h2>
        </Copy>
        <Copy delay={0.4}>
          <p className="tickets-subtitle">
            Choose your experience. Every seat brings laughter.
          </p>
        </Copy>
      </div>

      <div className="tickets-grid-redesign">
        {tickets.map((ticket, index) => (
          <motion.div
            key={index}
            className={`ticket-card-redesign ${ticket.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {ticket.popular && (
              <div className="popular-badge">
                <Copy delay={0.6}>
                  <span>Most Popular</span>
                </Copy>
              </div>
            )}
            
            {/* <div className="ticket-image-wrapper">
              <img src={ticket.image} alt={ticket.type} />
              <div className="ticket-image-overlay"></div>
            </div> */}

            <div className="ticket-content-redesign">
              <Copy delay={0.3 + index * 0.1}>
                <h3 className="ticket-type">{ticket.type}</h3>
              </Copy>

              <div className="ticket-pricing">
                <Copy delay={0.4 + index * 0.1}>
                  <p className="ticket-price-detail">{ticket.priceDetail}</p>
                </Copy>
                <Copy delay={0.5 + index * 0.1}>
                  <h4 className="ticket-price">{ticket.price}</h4>
                </Copy>
              </div>

              {/* <div className="ticket-features-redesign">
                {ticket.features.map((feature, i) => (
                  <Copy key={i} delay={0.6 + index * 0.1 + i * 0.05}>
                    <div className="feature-item">
                      <span className="feature-bullet"></span>
                      <p>{feature}</p>
                    </div>
                  </Copy>
                ))}
              </div> */}

              <motion.button
                className="ticket-btn-redesign"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}  onClick={() => {
    window.location.href = 'https://myevent.com.ng/events/mc-casino-game-of-jokes-the-very-good-bad-guyz';
  }}
              >
                {ticket.type === 'Table Package' ? 'Reserve Table' : 'Get Ticket'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}