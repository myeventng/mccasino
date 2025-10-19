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
          // Play video with sound when animation completes
          if (videoRef.current) {
            videoRef.current.play();
          }
        },
      },
      '<'
    );
    tl.to(
      ['.hero-content-wrapper'],
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
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <div className="hero-video-container absolute inset-0 w-full h-full scale-125">
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Mute/Unmute Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          onClick={toggleMute}
          className="fixed top-24 right-6 z-50 bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-black/70 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? (
            <HiVolumeOff size={24} className="text-white" />
          ) : (
            <HiVolumeUp size={24} className="text-yellow-400" />
          )}
        </motion.button>

        {/* Hero Content - Bottom Aligned */}
        <div className="hero-content-wrapper absolute bottom-0 left-0 right-0 z-10 opacity-0 translate-y-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
                style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MC Casino&apos;s<br />Game of Jokes 2026
              </motion.h1>

              {/* Event Details */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30"
              >
                <p className="text-yellow-400 font-bold text-sm sm:text-base tracking-wider uppercase"
                   style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
                className="inline-flex items-center gap-3 bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Buy Your Ticket Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BsArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;800&display=swap');
        
        .hero-video-container {
          transform: scale(1.2);
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