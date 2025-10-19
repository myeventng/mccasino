'use client';

interface AboutSectionProps {
  animateTextsRef: React.MutableRefObject<(HTMLHeadingElement | null)[]>;
  servicesRef: React.RefObject<HTMLElement | null>;
  servicesHeadersRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export default function AboutSection({
  animateTextsRef,
  servicesRef,
  servicesHeadersRef,
}: AboutSectionProps) {
  return (
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
          For over a decade, Game of Jokes has been Nigeria&apos;s biggest New
          Year comedy show — a night of laughter, music, and energy. Created by
          MC Casino, the award-winning comedian, it has sold out venues from
          Benin to Europe. Every year, thousands kick off the year with
          unforgettable entertainment — and the 12th edition is set to be the
          biggest yet.
        </h1>
      </section>
    </div>
  );
}