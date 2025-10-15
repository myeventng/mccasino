'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lenis smooth scroll alternative using native smooth scroll
const useSmoothScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
};

export default function ScrollAnimationSection() {
  const heroImgRef = useRef(null);
  const outroImgRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesHeadersRef = useRef([]);
  const animateTextsRef = useRef([]);

  useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate text reveal effect
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

    // Services section - horizontal slide in
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

    // Services section - pin and scale animation
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
    <div className="scroll-container">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

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
          background-color: rgba(0, 0, 0, 0.88);
          z-index: 0;
          pointer-events: none;
        }

        .scroll-container > section {
          position: relative;
          z-index: 1;
        }

        .scroll-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .scroll-container h1 {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.1rem;
          line-height: 1.2;
          text-align: center;
          margin: 0;
        }

        .hero,
        .outro,
        .about {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .hero-img,
        .outro-img {
          width: 300px;
          aspect-ratio: 5/7;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
        }

        .services {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .services-header {
          position: relative;
          width: 100%;
          padding: 0 2rem;
          will-change: transform;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .services-header svg,
        .services-header img {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: contain;
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
          position: relative;
          width: 100%;
          height: auto;
          min-height: 100vh;
          margin-top: 200vh;
          padding: 2rem 2rem 25vh 2rem;
          text-align: center;
        }

        .animate-text {
          position: relative;
          width: 75%;
          max-width: 1000px;
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
          will-change: clip-path;
        }

        @media (max-width: 1000px) {
          .scroll-container h1 {
            font-size: 1.5rem;
            letter-spacing: -0.05rem;
            line-height: 1.4;
          }

          .animate-text {
            width: 90%;
          }

          .services-header {
            padding: 0 1rem;
          }

          .services-header svg,
          .services-header img {
            max-width: 90vw;
          }

          .hero,
          .outro,
          .about {
            min-height: 400px;
            padding: 1.5rem;
          }

          .services-copy {
            margin-top: 150vh;
            padding: 1.5rem 1.5rem 15vh 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .scroll-container h1 {
            font-size: 1.25rem;
          }

          .services-copy {
            margin-top: 130vh;
            padding: 2rem 1.5rem 15vh 1.5rem;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-img" ref={heroImgRef}>
          {/* Replace with your image */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          />
        </div>
      </section>

      <section className="about">
        <h1
          className="animate-text"
          ref={(el) => (animateTextsRef.current[0] = el)}
          data-text="On January 1st, thousands gather to laugh into the New Year with MC Casino and Africa's top entertainers. This is where music, madness, and premium comedy collide — the Game of Jokes you don't skip."
        >
          On January 1st, thousands gather to laugh into the New Year with MC
          Casino and Africa's top entertainers. This is where music, madness,
          and premium comedy collide — the Game of Jokes you don't skip.
        </h1>
      </section>

      <section className="services" ref={servicesRef}>
        <div
          className="services-header"
          ref={(el) => (servicesHeadersRef.current[0] = el)}
        >
          <img src="/abouttheevent.svg" alt="About The Event" />
        </div>
        <div
          className="services-header"
          ref={(el) => (servicesHeadersRef.current[1] = el)}
        >
          <img src="/abouttheevent.svg" alt="About The Event" />
        </div>
        <div
          className="services-header"
          ref={(el) => (servicesHeadersRef.current[2] = el)}
        >
          <img src="/abouttheevent.svg" alt="About The Event" />
        </div>
      </section>

      <section className="services-copy">
        <h1
          className="animate-text"
          ref={(el) => (animateTextsRef.current[1] = el)}
          data-text="For over a decade, Game of Jokes has been Nigeria's biggest New Year comedy show — a night of laughter, music, and energy. Created by MC Casino, the award-winning comedian, it has sold out venues from Benin to Europe. Every year, thousands kick off the year with unforgettable entertainment — and the 12th edition is set to be the biggest yet."
        >
          For over a decade, Game of Jokes has been Nigeria's biggest New Year
          comedy show — a night of laughter, music, and energy. Created by MC
          Casino, the award-winning comedian, it has sold out venues from Benin
          to Europe. Every year, thousands kick off the year with unforgettable
          entertainment — and the 12th edition is set to be the biggest yet.
        </h1>
      </section>

      <section className="outro">
        <div className="outro-img" ref={outroImgRef}>
          {/* Replace with your image */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            }}
          />
        </div>
      </section>
    </div>
  );
}
