'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Hero Component
function HeroSection() {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create('hop', '0.9, 0, 0.1, 1');
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: { ease: 'hop' },
    });

    const counts = document.querySelectorAll('.count');
    counts.forEach((count, index) => {
      const digits = count.querySelectorAll('.digit h1');
      tl.to(digits, { y: '0%', duration: 1, stagger: 0.075 }, index * 1);
      if (index < counts.length) {
        tl.to(
          digits,
          { y: '-100%', duration: 1, stagger: 0.075 },
          index * 1 + 1
        );
      }
    });

    tl.to('.spinner', { opacity: 0, duration: 0.3 });
    tl.to('.word h1', { y: '0%', duration: 1 }, '<');
    tl.to('.divider', {
      scaleY: '100%',
      duration: 1,
      onComplete: () => {
        gsap.to('.divider', { opacity: 0, duration: 0.3, delay: 0.3 });
      },
    });
    tl.to('#word-1 h1', { y: '100%', duration: 1, delay: 0.3 });
    tl.to('#word-2 h1', { y: '-100%', duration: 1 }, '<');
    tl.to(
      '.block',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
        onStart: () => {
          gsap.to('.hero-img', { scale: 1, duration: 2, ease: 'hop' });
        },
      },
      '<'
    );
    tl.to(
      ['.nav', '.hero-title', '.hero-details', '.hero-tagline'],
      { y: '0%', opacity: 1, duration: 1.5, stagger: 0.2 },
      '<'
    );
    tl.to(
      ['.cta', '.cta-icon'],
      { scale: 1, duration: 1.5, stagger: 0.75, delay: 0.75 },
      '<'
    );
    tl.to('.cta-label p', { y: '0%', duration: 1.5, delay: 0.5 }, '<');
  });

  return (
    <>
      <div className="loader">
        <div className="overlay">
          <div className="block"></div>
          <div className="block"></div>
        </div>
        <div className="intro-logo">
          <div className="word" id="word-1">
            <h1>
              <span>Game</span>
            </h1>
          </div>
          <div className="word" id="word-2">
            <h1>of Jokes</h1>
          </div>
        </div>
        <div className="divider"></div>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
        <div className="counter">
          <div className="count">
            <div className="digit">
              <h1>1</h1>
            </div>
            <div className="digit">
              <h1>st</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>JAN</h1>
            </div>
            <div className="digit">
              <h1>UARY</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>20</h1>
            </div>
            <div className="digit">
              <h1>26</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>MC-</h1>
            </div>
            <div className="digit">
              <h1>CASINO</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-img">
          <Image
            src="/hero-img.png"
            alt="Game of Jokes Hero"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        <motion.div
          className="floating-emoji emoji-1"
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          😂
        </motion.div>
        <motion.div
          className="floating-emoji emoji-2"
          animate={{ y: [0, -40, 0], rotate: [0, -15, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          🤣
        </motion.div>
        <motion.div
          className="floating-emoji emoji-3"
          animate={{ y: [0, -35, 0], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          🎭
        </motion.div>
        <motion.div
          className="floating-emoji emoji-4"
          animate={{ y: [0, -25, 0], rotate: [0, -10, 10, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          🎤
        </motion.div>
        <motion.div
          className="floating-emoji emoji-5"
          animate={{ y: [0, -30, 0], x: [0, 10, 0], rotate: [0, 15, -15, 0] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          🎉
        </motion.div>

        <div className="nav">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a href="#">Game of Jokes</a>
          </motion.div>
          <div className="nav-links">
            <motion.a
              href="#"
              whileHover={{ y: -3, color: '#FFD700' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              About
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, color: '#FFD700' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Lineup
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, color: '#FFD700' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Venue
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, color: '#FFD700' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Contact
            </motion.a>
          </div>
          <motion.div
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#">Menu</a>
          </motion.div>
        </div>

        <div className="header">
          <div className="hero-copy">
            <motion.div
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.h1
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,215,0,0.3)',
                    '0 0 40px rgba(255,215,0,0.5)',
                    '0 0 20px rgba(255,215,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                MC Casino&apos;s Game of Jokes 2026
              </motion.h1>
            </motion.div>
            <motion.div
              className="hero-details"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p>1st January • Benin City • Cathelea Convention Centre</p>
            </motion.div>
            <div className="hero-tagline">
              <p>
                The Premium Comedy Concert That Defines Every New Year in
                Nigeria
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="cta"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 40px rgba(255,215,0,0.4)',
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div className="cta-label">
            <p>Buy Your Ticket Now</p>
          </div>
          <motion.div
            className="cta-icon"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BsArrowRight size={20} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

// Lineup Section
function LineupSection() {
  const lineupRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const performers = [
    { name: 'Mr P (P-Square)', role: 'Legendary Performer', emoji: '🎵' },
    { name: 'Destalker', role: 'Stand-Up King', emoji: '👑' },
    { name: 'I Go Dye', role: 'Comedy Genius', emoji: '🎭' },
    { name: 'Kenny Blaq', role: 'Comedy Meets Music', emoji: '🎸' },
    { name: 'Klint da Drunk', role: 'Improv Master', emoji: '🍺' },
    { name: 'Mc Edopikin', role: "Benin's Pride", emoji: '🔥' },
    { name: 'Sarkin Dariya', role: 'Hausa Comedy Legend', emoji: '😄' },
    { name: 'MC Casino', role: 'Your Host', emoji: '⭐' },
  ];

  return (
    <section className="lineup-section" ref={lineupRef}>
      <motion.div
        className="lineup-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/lineup.svg" alt="The Lineup" />
        <p className="lineup-subtitle">The Very Good Bad Guyz Edition</p>
      </motion.div>

      <div className="lineup-grid">
        {performers.map((performer, index) => (
          <motion.div
            key={index}
            className="performer-card"
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="performer-emoji">{performer.emoji}</div>
            <h3>{performer.name}</h3>
            <p>{performer.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="lineup-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        This January 1st, prepare for a comedy and music explosion featuring
        Nigeria&apos;s finest acts. From side-splitting stand-up comedy to live
        music performances, this edition brings the perfect blend of
        entertainment, glamour, and premium vibes.
      </motion.p>
    </section>
  );
}

// MC Casino Section
function MCCasinoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="mccasino-section" ref={sectionRef}>
      <div className="mccasino-content">
        <motion.div
          className="mccasino-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/meettheman.svg"
            alt="Meet The Man"
            className="section-title-img"
          />
          <h2>MC Casino</h2>
          <p>
            Behind the laughter is Lawrence Osarenkhoe, better known as MC
            Casino — comedian, actor, brand influencer, and one of
            Nigeria&apos;s most versatile entertainers. From his humble
            beginnings in Benin City to touring stages across Europe, MC Casino
            has built a legacy of comedy that entertains, educates, and
            inspires.
          </p>
          <p className="highlight">
            His annual Game of Jokes is not just a show — it&apos;s a movement.
          </p>
        </motion.div>

        <motion.div
          className="mccasino-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="image-frame">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              🎭
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Tickets Section
function TicketsSection() {
  const tickets = [
    {
      type: 'Regular',
      price: '₦5,000',
      icon: '🎟',
      features: ['General Admission', 'Standing Area', 'Access to Main Event'],
    },
    {
      type: 'VIP',
      price: '₦20,000',
      icon: '✨',
      features: ['Premium Seating', 'VIP Section', 'Complimentary Drink'],
    },
    {
      type: 'Table Package',
      price: 'From ₦500,000',
      icon: '💎',
      features: [
        'Exclusive Seating',
        'Premium Drinks',
        'Table Service',
        'VIP Access',
      ],
    },
  ];

  return (
    <section className="tickets-section">
      <motion.div
        className="tickets-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/tickets.svg" alt="Tickets & Pricing" />
      </motion.div>

      <div className="tickets-grid">
        {tickets.map((ticket, index) => (
          <motion.div
            key={index}
            className="ticket-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 60px rgba(255,215,0,0.3)',
            }}
          >
            <div className="ticket-icon">{ticket.icon}</div>
            <h3>{ticket.type}</h3>
            <p className="ticket-price">{ticket.price}</p>
            <ul className="ticket-features">
              {ticket.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <motion.button
              className="ticket-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {ticket.type === 'Table Package' ? 'Reserve Table' : 'Get Ticket'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Why Attend Section
function WhyAttendSection() {
  const reasons = [
    {
      title: 'Premium Entertainment',
      description: 'A curated blend of comedy, music, and dance',
      icon: '🎬',
    },
    {
      title: 'Elite Line-Up',
      description: 'The very best of Nigerian comedy and music on one stage',
      icon: '🌟',
    },
    {
      title: 'Unforgettable Experience',
      description: 'Over 5,000 guests, one electrifying atmosphere',
      icon: '⚡',
    },
    {
      title: 'Tradition Meets Glamour',
      description: 'Ring in the New Year with class, culture, and laughter',
      icon: '🎊',
    },
  ];

  return (
    <section className="why-attend-section">
      <motion.div
        className="why-attend-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/whyattend.svg" alt="Why You Should Attend" />
        <p className="why-attend-tagline">
          This isn&apos;t just another show. It&apos;s a lifestyle.
        </p>
      </motion.div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="reason-card"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
          >
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Event Details Section
function EventDetailsSection() {
  const details = [
    {
      label: 'Venue',
      value: 'Cathelea Convention Centre, Benin City, Edo State',
      icon: '📍',
    },
    { label: 'Date', value: 'Thursday, 1st January 2026', icon: '🗓' },
    {
      label: 'Time',
      value: '6:00PM (Red Carpet) | 7:30PM (Main Event)',
      icon: '⏰',
    },
    { label: 'Capacity', value: '5,000+ guests', icon: '👥' },
  ];

  return (
    <section className="event-details-section">
      <motion.div
        className="details-header"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/eventdetails.svg" alt="Event Details" />
      </motion.div>

      <div className="details-grid">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            className="detail-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="detail-icon">{detail.icon}</span>
            <div className="detail-content">
              <h4>{detail.label}</h4>
              <p>{detail.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cta-final"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <button className="final-cta-btn">Get Your Ticket Now</button>
      </motion.div>
    </section>
  );
}

// Footer Section
function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Sponsorship & Partnerships</h3>
          <p>Align your brand with MC Casino&apos;s Game of Jokes</p>
          <a href="mailto:engracedconcepts01@gmail.com">
            📧 engracedconcepts01@gmail.com
          </a>
          <a href="tel:08188561636">📞 08188561636</a>
        </div>

        <div className="footer-column">
          <h3>Start Your Year with Laughter</h3>
          <p>
            Don&apos;t just hear about it — be part of it. Secure your seat
            today and join thousands in making history once again.
          </p>
          <motion.button
            className="footer-cta-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Ticket on MyEvent.com.ng
          </motion.button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Game of Jokes. All rights reserved.</p>
        <p>MC Casino&apos;s Annual Comedy Concert</p>
      </div>
    </footer>
  );
}

// Main Component
export default function GameOfJokesPage() {
  const servicesRef = useRef<HTMLElement>(null);
  const servicesHeadersRef = useRef<(HTMLDivElement | null)[]>([]);
  const animateTextsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    animateTextsRef.current.forEach((textElement) => {
      if (!textElement) return;
      ScrollTrigger.create({
        trigger: textElement,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100);
          textElement.style.setProperty('--clip-value', `${clipValue}%`);
        },
      });
    });

    ScrollTrigger.create({
      trigger: servicesRef.current,
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
      onUpdate: (self) => {
        const headers = servicesHeadersRef.current;
        if (headers[0])
          gsap.set(headers[0], { x: `${100 - self.progress * 100}%` });
        if (headers[1])
          gsap.set(headers[1], { x: `${-100 + self.progress * 100}%` });
        if (headers[2])
          gsap.set(headers[2], { x: `${100 - self.progress * 100}%` });
      },
    });

    ScrollTrigger.create({
      trigger: servicesRef.current,
      start: 'top top',
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 1,
      pinSpacing: false,
      onUpdate: (self) => {
        const headers = servicesHeadersRef.current;
        if (self.progress <= 0.5) {
          const yProgress = self.progress / 0.5;
          if (headers[0]) gsap.set(headers[0], { y: `${yProgress * 100}%` });
          if (headers[2]) gsap.set(headers[2], { y: `${yProgress * -100}%` });
        } else {
          if (headers[0]) gsap.set(headers[0], { y: '100%' });
          if (headers[2]) gsap.set(headers[2], { y: '-100%' });
          const scaleProgress = (self.progress - 0.5) / 0.5;
          const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
          const scale = 1 - scaleProgress * (1 - minScale);
          headers.forEach((header) => {
            if (header) gsap.set(header, { scale });
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Manrope', sans-serif;
          overflow-x: hidden;
          background: #000;
        }

        .hero-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        .hero-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          transform: scale(1.5);
          will-change: transform;
        }

        .hero-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 1;
        }

        .floating-emoji {
          position: absolute;
          font-size: 3rem;
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
        }

        .emoji-1 {
          top: 15%;
          left: 10%;
        }
        .emoji-2 {
          top: 25%;
          right: 15%;
        }
        .emoji-3 {
          bottom: 30%;
          left: 8%;
        }
        .emoji-4 {
          bottom: 20%;
          right: 12%;
        }
        .emoji-5 {
          top: 50%;
          right: 5%;
        }

        .nav {
          position: absolute;
          top: 0;
          width: 100vw;
          padding: 1.25em 1.5em;
          display: flex;
          align-items: center;
          gap: 1.5em;
          transform: translateY(-120%);
          z-index: 10;
        }

        .nav > div {
          flex: 1;
        }

        .logo a {
          text-transform: capitalize;
          font-size: 14px;
          font-weight: bolder;
          color: #fff;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 1.5em;
          justify-content: center;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .btn {
          display: flex;
          justify-content: flex-end;
        }

        .btn a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          padding: 12px 24px;
          color: #000;
          background-color: #fff;
          border-radius: 40px;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 600;
        }

        .header {
          width: 100%;
          height: 100%;
          padding-top: 30vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5em;
          position: relative;
          z-index: 2;
        }

        .hero-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 900px;
          padding: 0 2rem;
        }

        .hero-title,
        .hero-details,
        .hero-tagline {
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-title h1 {
          text-align: center;
          color: #fff;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin: 0;
        }

        .hero-details p,
        .hero-tagline p {
          text-align: center;
          color: #fff;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
        }

        .hero-details p {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .cta {
          position: absolute;
          left: 50%;
          bottom: 3em;
          transform: translateX(-50%) scale(0);
          width: 300px;
          height: 60px;
          padding: 0.5rem;
          display: flex;
          justify-content: flex-end;
          background-color: #fff;
          border-radius: 4rem;
          cursor: pointer;
          z-index: 10;
        }

        .cta-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .cta-label p {
          color: #000;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          transform: translateY(120%);
        }

        .cta-icon {
          position: relative;
          height: 100%;
          aspect-ratio: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          background-color: #303030;
          border-radius: 60px;
          transform: scale(0);
        }

        .loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 1000;
          pointer-events: none;
        }

        .overlay {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
        }

        .block {
          width: 100%;
          height: 100%;
          background: #303030;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .intro-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 0.25rem;
        }

        #word-1 {
          position: relative;
          left: -0.5rem;
          padding-right: 0.25rem;
        }

        .word {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .word h1 {
          font-size: 2.5rem;
          color: #fff;
          font-weight: 700;
          position: relative;
        }

        #word-1 h1 {
          transform: translateY(-120%);
        }

        #word-2 h1 {
          transform: translateY(120%);
        }

        .divider {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) scaleY(0%);
          transform-origin: center top;
          width: 1px;
          height: 100%;
          background-color: #fff;
        }

        .spinner-container {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 1.4px solid #fff;
          border-top-color: rgba(255, 255, 255, 0.125);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .counter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .count {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
        }

        .digit {
          flex: 1;
          padding-top: 0.5rem;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .count .digit h1 {
          font-size: 5rem;
          font-weight: 400;
          transform: translateY(120%);
        }

        .scroll-container {
          font-family: 'Manrope', sans-serif;
          background-color: #1a1a1a;
          background-image: url('/background.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .scroll-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 0;
          pointer-events: none;
        }

        .scroll-container > section {
          position: relative;
          z-index: 1;
        }

        .about,
        .services,
        .services-copy {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about h1,
        .services-copy h1 {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.1rem;
          line-height: 1.2;
          text-align: center;
          margin: 0;
          max-width: 1200px;
        }

        .animate-text {
          position: relative;
          width: 100%;
          margin: 0 auto;
          color: #4f4f4f;
          --clip-value: 100%;
        }

        .animate-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          clip-path: inset(0 0 var(--clip-value) 0);
        }

        .services {
          height: 100vh;
          flex-direction: column;
          overflow: hidden;
        }

        .services-header {
          position: relative;
          width: 100%;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          text-align: center;
        }

        .services-header:nth-child(1),
        .services-header:nth-child(3) {
          transform: translateX(100%) translateY(0%);
        }

        .services-header:nth-child(2) {
          transform: translateX(-100%) translateY(0%);
          z-index: 2;
        }

        .services-copy {
          margin-top: 155vh;
          padding: 2rem 2rem 25vh 2rem;
          text-align: center;
        }

        /* Lineup Section */
        .lineup-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 100%);
          position: relative;
          overflow: hidden;
        }

        .lineup-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .lineup-header img {
          max-width: 600px;
          width: 100%;
          height: auto;
          margin: 0 auto;
        }

        .lineup-subtitle {
          color: #ffd700;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1rem;
        }

        .lineup-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto 3rem;
        }

        .performer-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .performer-emoji {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .performer-card h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .performer-card p {
          color: #ffd700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .lineup-description {
          color: #fff;
          font-size: 1.2rem;
          line-height: 1.8;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* MC Casino Section */
        .mccasino-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mccasino-content {
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title-img {
          max-width: 400px;
          width: 100%;
          margin-bottom: 2rem;
        }

        .mccasino-text h2 {
          color: #ffd700;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .mccasino-text p {
          color: #fff;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          text-transform: none;
        }

        .mccasino-text .highlight {
          color: #ffd700;
          font-weight: 700;
          font-size: 1.3rem;
          font-style: italic;
        }

        .mccasino-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame {
          width: 400px;
          height: 400px;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.2),
            rgba(255, 215, 0, 0.05)
          );
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10rem;
          border: 3px solid rgba(255, 215, 0, 0.3);
        }

        /* Tickets Section */
        .tickets-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
        }

        .tickets-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .tickets-header img {
          max-width: 600px;
          width: 100%;
          height: auto;
          margin: 0 auto;
        }

        .tickets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ticket-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 215, 0, 0.2);
          border-radius: 30px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .ticket-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
        }

        .ticket-card h3 {
          color: #ffd700;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .ticket-price {
          color: #fff;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-transform: none;
        }

        .ticket-features {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .ticket-features li {
          color: #ccc;
          font-size: 1rem;
          margin-bottom: 0.8rem;
          text-transform: none;
        }

        .ticket-btn {
          background: linear-gradient(135deg, #ffd700, #ffa500);
          color: #000;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ticket-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
        }

        /* Why Attend Section */
        .why-attend-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          background: #0a0a0a;
        }

        .why-attend-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .why-attend-header img {
          max-width: 600px;
          width: 100%;
          height: auto;
          margin: 0 auto 2rem;
        }

        .why-attend-tagline {
          color: #ffd700;
          font-size: 1.8rem;
          font-weight: 700;
          font-style: italic;
          text-transform: none;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .reason-card {
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.1),
            rgba(255, 215, 0, 0.02)
          );
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 25px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .reason-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .reason-card h3 {
          color: #ffd700;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .reason-card p {
          color: #fff;
          font-size: 1rem;
          line-height: 1.6;
          text-transform: none;
        }

        /* Event Details Section */
        .event-details-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 100%);
        }

        .details-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .details-header img {
          max-width: 600px;
          width: 100%;
          height: auto;
          margin: 0 auto;
        }

        .details-grid {
          max-width: 900px;
          margin: 0 auto 4rem;
          display: grid;
          gap: 2rem;
        }

        .detail-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-left: 5px solid #ffd700;
          border-radius: 15px;
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .detail-icon {
          font-size: 3rem;
        }

        .detail-content h4 {
          color: #ffd700;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .detail-content p {
          color: #fff;
          font-size: 1.1rem;
          text-transform: none;
        }

        .cta-final {
          text-align: center;
        }

        .final-cta-btn {
          background: linear-gradient(135deg, #ffd700, #ffa500);
          color: #000;
          border: none;
          padding: 1.5rem 4rem;
          border-radius: 50px;
          font-size: 1.3rem;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
        }

        .final-cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 50px rgba(255, 215, 0, 0.5);
        }

        /* Footer Section */
        .footer-section {
          background: #000;
          padding: 4rem 2rem 2rem;
          border-top: 2px solid rgba(255, 215, 0, 0.3);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-column h3 {
          color: #ffd700;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .footer-column p {
          color: #ccc;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          text-transform: none;
        }

        .footer-column a {
          color: #fff;
          display: block;
          margin-bottom: 0.5rem;
          text-decoration: none;
          text-transform: none;
        }

        .footer-column a:hover {
          color: #ffd700;
        }

        .footer-cta-btn {
          background: linear-gradient(135deg, #ffd700, #ffa500);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 1rem;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 215, 0, 0.2);
        }

        .footer-bottom p {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          text-transform: none;
        }

        @media (max-width: 900px) {
          .hero-title h1 {
            font-size: 2rem;
          }

          .hero-details p,
          .hero-tagline p {
            font-size: 0.9rem;
          }

          .nav-links {
            display: none;
          }

          .cta {
            width: 90%;
          }

          .floating-emoji {
            font-size: 2rem;
          }

          .about h1,
          .services-copy h1 {
            font-size: 1.5rem;
            letter-spacing: -0.05rem;
            line-height: 1.4;
          }

          .services-header {
            font-size: 2rem;
          }

          .mccasino-content {
            grid-template-columns: 1fr;
          }

          .lineup-grid,
          .tickets-grid,
          .reasons-grid {
            grid-template-columns: 1fr;
          }

          .image-frame {
            width: 300px;
            height: 300px;
            font-size: 8rem;
          }
        }
      `}</style>

      <HeroSection />

      <div className="scroll-container">
        <section className="about">
          <h1
            className="animate-text"
            ref={(el) => {
              animateTextsRef.current[0] = el;
            }}
            data-text="On January 1st, thousands gather to laugh into the New Year with MC Casino and Africa's top entertainers. This is where music, madness, and premium comedy collide — the Game of Jokes you don't skip."
          >
            On January 1st, thousands gather to laugh into the New Year with MC
            Casino and Africa&apos;s top entertainers. This is where music,
            madness, and premium comedy collide — the Game of Jokes you don't
            skip.
          </h1>
        </section>

        <section className="services" ref={servicesRef}>
          <div
            className="services-header"
            ref={(el) => {
              servicesHeadersRef.current[0] = el;
            }}
          >
            <img src="/abouttheevent.svg" alt="About The Event" />
          </div>
          <div
            className="services-header"
            ref={(el) => {
              servicesHeadersRef.current[1] = el;
            }}
          >
            <img src="/abouttheevent.svg" alt="About The Event" />
          </div>
          <div
            className="services-header"
            ref={(el) => {
              servicesHeadersRef.current[2] = el;
            }}
          >
            <img src="/abouttheevent.svg" alt="About The Event" />
          </div>
        </section>

        <section className="services-copy">
          <h1
            className="animate-text"
            ref={(el) => {
              animateTextsRef.current[1] = el;
            }}
            data-text="For over a decade, Game of Jokes has been Nigeria's biggest New Year comedy show — a night of laughter, music, and energy. Created by MC Casino, the award-winning comedian, it has sold out venues from Benin to Europe. Every year, thousands kick off the year with unforgettable entertainment — and the 12th edition is set to be the biggest yet."
          >
            For over a decade, Game of Jokes has been Nigeria's biggest New Year
            comedy show — a night of laughter, music, and energy. Created by MC
            Casino, the award-winning comedian, it has sold out venues from
            Benin to Europe. Every year, thousands kick off the year with
            unforgettable entertainment — and the 12th edition is set to be the
            biggest yet.
          </h1>
        </section>
      </div>

      <LineupSection />
      <MCCasinoSection />
      <TicketsSection />
      <WhyAttendSection />
      <EventDetailsSection />
      <FooterSection />
    </>
  );
}
