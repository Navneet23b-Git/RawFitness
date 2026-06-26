import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    year: '2012',
    title: 'THE BEGINNING',
    description: 'RAW Fitness was born with a simple dream — to build more than just a gym.',
    image: '/chalk_hands.png' // Reusing existing image for now
  },
  {
    year: '2015',
    title: 'EXPANSION',
    description: 'More members, more strength, more purpose. We outgrew our space and leveled up.',
    image: '/group_training.png'
  },
  {
    year: '2019',
    title: 'TRANSFORMATION',
    description: 'Upgraded facilities, elite coaching team, and a stronger community than ever before.',
    image: '/member_grid.png'
  },
  {
    year: '2026',
    title: 'THE FUTURE',
    description: 'Continuing to evolve, innovate, and lead the fitness industry for generations to come.',
    image: '/resilience_lifting.png'
  }
];

export default function AboutJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate timeline nodes as they enter view
    const nodes = document.querySelectorAll('.journey-node');
    nodes.forEach((node, i) => {
      gsap.fromTo(node, 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Grow the vertical line as we scroll down
    gsap.fromTo('.journey-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', padding: '2rem 0' }}>
      
      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-red)', fontSize: '1rem', letterSpacing: '2px', marginBottom: '1rem' }}>OUR JOURNEY</h2>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '4rem' }}>
        BUILT ON PASSION.<br />DRIVEN BY EVOLUTION.
      </h3>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '3rem', paddingLeft: '2rem' }}>
        
        {/* Background dark line */}
        <div style={{ position: 'absolute', top: 0, left: '2rem', width: '2px', height: '100%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
        
        {/* Glowing animated line */}
        <div className="journey-line" style={{ position: 'absolute', top: 0, left: '2rem', width: '2px', height: '100%', background: 'var(--accent-red)', zIndex: 1, boxShadow: '0 0 10px var(--accent-red)' }} />

        {journeyData.map((item, index) => (
          <div key={index} className="journey-node" style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 2 }}>
            
            {/* Glowing Dot */}
            <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--bg-darker)', border: '2px solid var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-red)', boxShadow: '0 0 10px var(--accent-red)' }} />
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginLeft: '1rem' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.year}</h4>
                <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h5>
                <p style={{ color: 'var(--accent-grey)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.description}</p>
              </div>
              <motion.div 
                className="glass-card"
                whileHover={{ scale: 1.05, borderColor: 'var(--accent-red)', boxShadow: '0 0 20px rgba(229,9,20,0.3)' }}
                style={{ width: '250px', height: '120px', overflow: 'hidden', cursor: 'pointer' }}
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)' }} />
              </motion.div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
