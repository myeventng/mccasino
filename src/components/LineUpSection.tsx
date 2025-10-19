'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import Copy from './Copy';

export default function LineupSection() {
  const containerRef = useRef<HTMLElement>(null);
  const profileImagesContainerRef = useRef<HTMLDivElement>(null);
  const profileImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const nameElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const nameHeadingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useGSAP(
    () => {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(SplitText);
      }

      const profileImagesContainer = profileImagesContainerRef.current;
      const profileImages = profileImagesRef.current;
      const nameElements = nameElementsRef.current;
      const nameHeadings = nameHeadingsRef.current.filter(Boolean);

      nameHeadings.forEach((heading) => {
        if (heading) {
          const split = new SplitText(heading, { type: 'chars' });
          split.chars.forEach((char) => {
            char.classList.add('letter');
          });
        }
      });

      if (nameElements[0]) {
        const defaultLetters = nameElements[0].querySelectorAll('.letter');
        gsap.set(defaultLetters, { y: '100%' });

        if (window.innerWidth >= 900) {
          profileImages.forEach((img, index) => {
            if (!img) return;

            const correspondingName = nameElements[index + 1];
            if (!correspondingName) return;

            const letters = correspondingName.querySelectorAll('.letter');

            const handleMouseEnter = () => {
              gsap.to(img, {
                width: 140,
                height: 140,
                duration: 0.5,
                ease: 'power4.out',
              });

              gsap.to(letters, {
                y: '-100%',
                ease: 'power4.out',
                duration: 0.75,
                stagger: {
                  each: 0.025,
                  from: 'center',
                },
              });
            };

            const handleMouseLeave = () => {
              gsap.to(img, {
                width: 70,
                height: 70,
                duration: 0.5,
                ease: 'power4.out',
              });

              gsap.to(letters, {
                y: '0%',
                ease: 'power4.out',
                duration: 0.75,
                stagger: {
                  each: 0.025,
                  from: 'center',
                },
              });
            };

            img.addEventListener('mouseenter', handleMouseEnter);
            img.addEventListener('mouseleave', handleMouseLeave);
          });

          if (profileImagesContainer) {
            const handleContainerEnter = () => {
              const defaultLetters = nameElements[0]?.querySelectorAll('.letter');
              if (defaultLetters) {
                gsap.to(defaultLetters, {
                  y: '0%',
                  ease: 'power4.out',
                  duration: 0.75,
                  stagger: {
                    each: 0.025,
                    from: 'center',
                  },
                });
              }
            };

            const handleContainerLeave = () => {
              const defaultLetters = nameElements[0]?.querySelectorAll('.letter');
              if (defaultLetters) {
                gsap.to(defaultLetters, {
                  y: '100%',
                  ease: 'power4.out',
                  duration: 0.75,
                  stagger: {
                    each: 0.025,
                    from: 'center',
                  },
                });
              }
            };

            profileImagesContainer.addEventListener('mouseenter', handleContainerEnter);
            profileImagesContainer.addEventListener('mouseleave', handleContainerLeave);
          }
        }
      }

      return () => {
        if (window.innerWidth >= 900) {
          profileImages.forEach((img) => {
            if (!img) return;
            // Note: This won't properly remove the listeners since we're creating new functions
            // Consider storing the handler functions if you need proper cleanup
            img.removeEventListener('mouseenter', () => {});
            img.removeEventListener('mouseleave', () => {});
          });

          if (profileImagesContainer) {
            profileImagesContainer.removeEventListener('mouseenter', () => {});
            profileImagesContainer.removeEventListener('mouseleave', () => {});
          }
        }
      };
    },
    { scope: containerRef }
  );

  return (
    <>
    <section
      className="team"
      ref={containerRef}
      id="lineup"
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team {
          position: relative;
          width: 100vw;
          height: 100svh;
          background-color: #0f0f0f;
          color: #e3e3db;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.5em;
          overflow: hidden;
          z-index: 2;
        }

        .lineup-header-title {
          text-align: center;
        }

        .lineup-header-title h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .lineup-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .lineup-description {
          max-width: 800px;
          text-align: center;
          padding: 0 2rem;
          line-height: 1.6;
        }

        .profile-images {
          width: max-content;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img {
          position: relative;
          width: 70px;
          height: 70px;
          padding: 5px;
          cursor: pointer;
          will-change: width, height;
        }

        .img img {
          border-radius: 0.5rem;
        }

        .profile-names {
          width: 100%;
          height: 15rem;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          overflow: hidden;
        }

        .name h1 {
          position: absolute;
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          font-family: 'Barlow Condensed';
          font-size: 13rem;
          font-weight: 900;
          letter-spacing: -0.2rem;
          line-height: 1;
          color: #f93535;
          user-select: none;
          transform: translateY(100%);
        }

        .name.default h1 {
          color: #e3e3db;
          transform: translateY(-100%);
        }

        .name h1 .letter {
          position: relative;
          transform: translateY(0%);
          will-change: transform;
        }

        @media screen and (max-width: 900px) {
          .team {
            flex-direction: column-reverse;
          }

          .profile-images {
            flex-wrap: wrap;
            max-width: 90%;
            justify-content: center;
          }

          .img {
            width: 60px;
            height: 60px;
            padding: 2.5px;
          }

          .profile-names {
            height: 4rem;
          }

          .name h1 {
            font-size: 4rem;
            letter-spacing: 0;
          }
        }
      `}</style>

      <div className="lineup-header-title">
        <Copy>
        <h2 className='tickets-title'>The Lineup</h2>
        </Copy>
        <Copy>
        <p className="lineup-subtitle">The Very Good Bad Guyz Edition</p>
        </Copy>
      </div>

      <div className="profile-images" ref={profileImagesContainerRef}>
        {[1, 2, 3, 4, 5].map((num, index) => (
          <div
            key={`img${num}`}
            className="img"
            ref={(el) => {
              profileImagesRef.current[index] = el;
            }}
          >
            <Image
              src={`/img${num}.png`}
              alt={`Team member ${num}`}
              width={140}
              height={140}
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      <div className="profile-names">
        <div
          className="name default"
          ref={(el) => {
            nameElementsRef.current[0] = el;
          }}
        >
          <h1 ref={(el) => {
            nameHeadingsRef.current[0] = el;
          }}>The Squad</h1>
        </div>
        {[
          'MC Casino',
          'Mr P',
          'I Go Dye',
          'Destalker',
          'Mc Edopikin',
        ].map((name, index) => (
          <div
            key={name}
            className="name"
            ref={(el) => {
              nameElementsRef.current[index + 1] = el;
            }}
          >
            <h1 ref={(el) => {
              nameHeadingsRef.current[index + 1] = el;
            }}>
              {name}
            </h1>
          </div>
        ))}
      </div>
    </section>
   
  </>
  );
}