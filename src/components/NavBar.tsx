'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#lineup', label: 'Lineup' },
    { href: '#venue', label: 'Venue' },
    { href: '#tickets', label: 'Tickets' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          background: scrolled 
            ? 'rgba(0, 0, 0, 0.95)' 
            : 'rgba(0, 0, 0, 0.0)',
        }}
        transition={{ 
          y: { duration: 1, delay: 3.5 },
          opacity: { duration: 1, delay: 3.5 },
          background: { duration: 0.3 }
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
            {/* Logo */}
            <motion.a
              href="https://myevent.com.ng/events/mc-casino-game-of-jokes-the-very-good-bad-guyz"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src="/logo.svg"
                alt="Game of Jokes"
                style={{ height: '48px', width: 'auto' }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div style={{ display: 'none', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ y: -2, color: '#FFD700' }}
                  style={{
                    color: '#fff',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.a
              href="#tickets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'none',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#000',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
              }}
              className="desktop-cta"
            >
              GET TICKETS
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'block',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                padding: '8px',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Backdrop Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(5px)',
                zIndex: 998,
              }}
            />
          )}
        </AnimatePresence>

        {/* Mobile Slide-In Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '70%',
                maxWidth: '300px',
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                gap: '1.5rem',
              }}
            >
              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
                >
                  <HiX size={30} />
                </button>
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#fff',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}


              <motion.a
                href="#tickets"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsOpen(false)}
                style={{
                  marginTop: 'auto',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#000',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                GET TICKETS
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;800&display=swap');
        
        @media (min-width: 768px) {
          .desktop-nav,
          .desktop-cta {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}