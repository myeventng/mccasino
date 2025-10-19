// ==================== FILE: components/MCCasinoSection.tsx ====================
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Copy from '@/components/Copy';

export default function MCCasinoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="mccasino-section" ref={sectionRef} id="mc-casino">
      <div className="mccasino-content">
        <motion.div
          className="mccasino-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          
          <Copy>
            <h2>MC Casino</h2>
          </Copy>
          <Copy delay={0.2}>
            <p>
              Behind the laughter is Lawrence Osarenkhoe, better known as MC
              Casino — comedian, actor, brand influencer, and one of
              Nigeria&apos;s most versatile entertainers. From his humble
              beginnings in Benin City to touring stages across Europe, MC Casino
              has built a legacy of comedy that entertains, educates, and
              inspires.
            </p>
          </Copy>
          <Copy delay={0.4}>
            <p className="highlight">
              His annual Game of Jokes is not just a show — it&apos;s a movement.
            </p>
          </Copy>
        </motion.div>

        <motion.div
          className="mccasino-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="image-frame">
            <motion.img
              src="/casino.png"
              alt="MC Casino"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}