import { useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Dumbbell3DScene from './Dumbbell3D';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const particles = useMemo(() => {
    return [...Array(15)].map((_, i) => (
      <div key={i} style={{
        position: 'absolute',
        width: '4px', height: '4px',
        backgroundColor: 'var(--accent-red)',
        borderRadius: '50%',
        boxShadow: '0 0 10px var(--accent-red)',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `floatParticles ${3 + Math.random() * 4}s infinite ease-in-out`,
        animationDelay: `${Math.random() * 2}s`,
        pointerEvents: 'none'
      }} />
    ));
  }, []);

  useEffect(() => {
    // Scroll trigger for the outline text filling with red
    gsap.to(titleRef.current, {
      backgroundPosition: 'bottom',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });

    // Reveal animation for left/right columns
    gsap.fromTo('.hero-left-col > *', 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );
    gsap.fromTo('.hero-right-col > *', 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
    );
  }, []);

  const headlineText = "TRAIN WITH PURPOSE. BUILD WITHOUT LIMITS.";
  const headlineWords = headlineText.split(' ');

  const ringData = [
    { value: '120+', label: 'MACHINES' },
    { value: '15', label: 'ELITE COACHES' },
    { value: '40K+', label: 'MEMBERS' },
    { value: '12', label: 'YEARS' }
  ];

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', minHeight: '100vh', padding: '6rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <h1 
        style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'clamp(5rem, 15vw, 12rem)', 
          fontWeight: 800, 
          textAlign: 'center',
          lineHeight: 0.9,
          margin: '0 0 4rem 0',
          position: 'relative',
          zIndex: 2,
          textTransform: 'uppercase'
        }}
      >
        <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>THE RAW</span><br />
        <span ref={titleRef} className="outline-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>STANDARD</span>
      </h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1600px', position: 'relative', zIndex: 2 }}>
        
        {/* LEFT COLUMN */}
        <div className="hero-left-col" style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, color: 'var(--text-light)', letterSpacing: '-1px', margin: 0 }}>
            TRAIN WITH <br />
            <span style={{ color: 'var(--accent-red)' }}>PURPOSE.</span><br />
            BUILD WITHOUT <br />
            <span style={{ color: 'var(--accent-red)' }}>LIMITS.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Bar 1 */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', border: 'none', borderRadius: '12px', padding: '1.25rem', background: 'linear-gradient(90deg, rgba(40,10,10,0.8) 0%, #111 40%, #0a0a0a 100%)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }}>
              <div style={{ width: '40px', height: '40px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(229,9,20,0.5)', borderRadius: '8px', background: 'rgba(229,9,20,0.1)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                We're not just a gym. We're a movement built on passion, performance, and purpose.
              </p>
            </div>
            
            {/* Bar 2 */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', border: 'none', borderRadius: '12px', padding: '1.25rem', background: 'linear-gradient(90deg, rgba(40,10,10,0.8) 0%, #111 40%, #0a0a0a 100%)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }}>
              <div style={{ width: '40px', height: '40px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(229,9,20,0.5)', borderRadius: '8px', background: 'rgba(229,9,20,0.1)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                State-of-the-art facility, elite coaches, and world-class equipment — all under one roof.
              </p>
            </div>

            {/* Bar 3 */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', border: 'none', borderRadius: '12px', padding: '1.25rem', background: 'linear-gradient(90deg, rgba(40,10,10,0.8) 0%, #111 40%, #0a0a0a 100%)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }}>
              <div style={{ width: '40px', height: '40px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(229,9,20,0.5)', borderRadius: '8px', background: 'rgba(229,9,20,0.1)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                From beginners to champions, we empower every individual to unlock their raw potential.
              </p>
            </div>
          </div>

          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(229,9,20,0.6)' }}
            style={{ alignSelf: 'flex-start', marginTop: '1rem', background: 'var(--accent-red)' }}
          >
            EXPLORE RAW →
          </motion.button>
        </div>

        {/* CENTER COLUMN (3D DUMBBELL) */}
        <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          
          {/* Particles */}
          {particles}

          {/* Glowing aura behind dumbbell */}
          <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(229,9,20,0.2) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />
          
          {/* Interactive 3D Dumbbell */}
          <div style={{ zIndex: 1, position: 'relative', width: '100%' }}>
            <Dumbbell3DScene />
          </div>

          {/* Glowing Pedestal */}
          <div style={{ width: '80%', height: '40px', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(229,9,20,0.4) 0%, transparent 70%)', filter: 'blur(10px)', marginTop: '0' }} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right-col" style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', paddingTop: '2rem' }}>
          {ringData.map((data, i) => (
            <div key={i} style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Outer Dashed Ring */}
              <motion.div 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.2)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20 + i*5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Solid Red Ring */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px', borderRadius: '50%', border: '1px solid rgba(229,9,20,0.5)' }} />
              
              {/* Rotating Dot Container */}
              <motion.div 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 10 + i*2, repeat: Infinity, ease: "linear" }}
              >
                <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', background: 'var(--accent-red)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent-red)' }} />
              </motion.div>

              {/* Text content */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.2rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{data.value}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 700, color: 'var(--accent-red)', letterSpacing: '1px', marginTop: '6px' }}>{data.label}</span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
