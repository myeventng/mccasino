'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Copy from './Copy';

gsap.registerPlugin(ScrollTrigger);

export default function WhyAttendSection() {
  const container = useRef(null);

  const reasons = [
    {
      index: '01',
      title: 'Premium Entertainment',
      image: '/pic1.png',
      subtitle: '(The Experience)',
      description:
        'A curated blend of world-class comedy, electrifying music, and captivating dance performances that will keep you on the edge of your seat all night long.',
    },
    {
      index: '02',
      title: 'Elite Line-Up',
      image: '/pic2.png',
      subtitle: '(The Talent)',
      description:
        'The very best of Nigerian comedy and music legends assembled on one spectacular stage. This is the ultimate showcase of entertainment excellence.',
    },
    {
      index: '03',
      title: 'Unforgettable Experience',
      image: '/pic3.png',
      subtitle: '(The Atmosphere)',
      description:
        'Join over 5,000 guests in an electrifying atmosphere where every moment is designed to create memories that last a lifetime.',
    },
    {
      index: '04',
      title: 'Tradition Meets Glamour',
      image: '/pic4.png',
      subtitle: '(The Lifestyle)',
      description:
        'Ring in the New Year with class, culture, and laughter. This isn\'t just another show—it\'s a lifestyle statement.',
    },
  ];

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll('.sticky-card');

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: stickyCards[stickyCards.length - 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: 'top bottom',
            end: 'top top',
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                '--after-opacity': afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section className="why-attend-section" id="why-attend">
      <div className="why-attend-intro">
        <Copy>
          <p className="why-attend-tagline">
            This isn't just another show. It's a lifestyle.
          </p>
        </Copy>
      </div>

      <div className="sticky-cards-wrapper" ref={container}>
        {reasons.map((reason, index) => (
          <div className="sticky-card" key={index}>
            <div className="sticky-card-index">
              <h1>{reason.index}</h1>
            </div>
            <div className="sticky-card-content">
              <div className="sticky-card-content-wrapper">
                <h1 className="sticky-card-header">{reason.title}</h1>

                <div className="sticky-card-body">
                  <div className="sticky-card-img">
                    <img src={reason.image} alt={reason.title} />
                  </div>

                  <div className="sticky-card-copy">
                    <div className="sticky-card-copy-title">
                      <p>{reason.subtitle}</p>
                    </div>
                    <div className="sticky-card-copy-description">
                      <p>{reason.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}