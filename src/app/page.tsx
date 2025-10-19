'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import LineupSection from '@/components/LineUpSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import AboutSection from '@/components/AboutSection';
import MCCasinoSection from '@/components/MCCasinoSection';
import WhyAttendSection from '@/components/WhyAttendSection';
import TicketsSection from '@/components/TicketsSection';
import FooterSection from '@/components/FooterSection';
import Navbar from '@/components/NavBar';

export default function GameOfJokesPage() {
  const servicesRef = useRef<HTMLElement>(null);
  const servicesHeadersRef = useRef<(HTMLDivElement | null)[]>([]);
  const animateTextsRef = useRef<(HTMLHeadingElement | null)[]>([]);

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
    <>
       <Navbar />
      <HeroSection />
      <LineupSection />
      <EventDetailsSection />
      <AboutSection
        animateTextsRef={animateTextsRef}
        servicesRef={servicesRef}
        servicesHeadersRef={servicesHeadersRef}
      />
      <MCCasinoSection />
      <WhyAttendSection />
      <TicketsSection />
      <FooterSection />
    </>
  );
}