'use client';

import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
          gsap.to('.hero-video-container', { scale: 1, duration: 2, ease: 'hop' });
          if (videoRef.current) {
            videoRef.current.play();
          }
        },
      },
      '<'
    );
    tl.to(
      '.hero-content-wrapper',
      { y: '0%', opacity: 1, duration: 1.5, stagger: 0.2 },
      '<'
    );
  });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Loader */}
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
            <div className="digit"><h1>1</h1></div>
            <div className="digit"><h1>st</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1>JAN</h1></div>
            <div className="digit"><h1>UARY</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1>20</h1></div>
            <div className="digit"><h1>26</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1>MC-</h1></div>
            <div className="digit"><h1>CASINO</h1></div>
          </div>
        </div>
      </div>

      {/* Hero Container */}
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
      }}>
        {/* Background Image - Fallback */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/hero-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }} />

        {/* Video Background */}
        <div className="hero-video-container" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'scale(1.2)',
          zIndex: 1,
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}>
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          }} />
        </div>

        {/* Gradient Overlay for Background Image (when video not loaded) */}
        {!videoLoaded && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            zIndex: 1,
          }} />
        )}

        {/* Mute/Unmute Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            top: '100px',
            right: '24px',
            zIndex: 999,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            padding: '12px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isMuted ? (
            <HiVolumeOff size={24} color="#fff" />
          ) : (
            <HiVolumeUp size={24} color="#FFD700" />
          )}
        </motion.button>

        {/* Hero Content - Bottom Aligned */}
        <div className="hero-content-wrapper" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          opacity: 0,
          transform: 'translateY(30px)',
          paddingBottom: 'clamp(3rem, 8vh, 6rem)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 'clamp(0.5rem, 3vh, 2.5rem)',
            }}>
              {/* Title */}
              <motion.h1
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,215,0,0.3)',
                    '0 0 30px rgba(255,215,0,0.5)',
                    '0 0 20px rgba(255,215,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  padding: '0 1rem',
                }}
              >
                MC Casino&apos;s<br />Game of Jokes 2026
              </motion.h1>

              {/* Event Details */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                }}
              >
                <p style={{
                  color: '#FFD700',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.5rem, 1vw, 0.6rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  margin: 0,
                }}>
                  1st January • Benin City • Cathelea Convention Centre
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#tickets"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(255,215,0,0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'transparent',
                  border: '2px solid #FFD700',
                  color: '#FFD700',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                  padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 5vw, 3rem)',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  marginTop: 'clamp(0.5rem, 1vh, 1rem)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFD700';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FFD700';
                }}
              >
                <span>Buy Your Ticket Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <BsArrowRight size={20} />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 3vh, 2rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '24px',
              height: '40px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '8px',
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '6px',
                height: '6px',
                background: '#FFD700',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;800&display=swap');
        
        .hero-video-container {
          will-change: transform;
        }

        /* Loader Styles */
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
          color: white !important;
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
          color: white !important;
          font-size: 5rem;
          font-weight: 400;
          transform: translateY(120%);
        }

        @media (max-width: 640px) {
          .word h1 {
            font-size: 1.8rem;
          }
          
          .count .digit h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
}