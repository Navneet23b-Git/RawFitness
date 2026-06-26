import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const VisionCard = ({ number, title, description, bgImage }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '30%',
        minWidth: '240px',
        height: '480px',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px rgba(229,9,20,0.2)' }}
    >
      {/* Background Image always visible */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          opacity: 0.6
        }}
        animate={{
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Radial Mouse Light (VisionOS Effect) */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(229,9,20,0.15), transparent 80%)`,
          zIndex: 1,
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Dark overlay base */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)', zIndex: 1 }} />

      {/* Static Red Border */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          borderRadius: '24px',
          border: '1px solid rgba(229,9,20,0.3)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
          <span style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800 }}>{number}</span>
          <h3 
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', margin: 0, color: 'white' }}
          >
            {title}
          </h3>
        </div>
        
        <p 
          style={{ color: 'var(--accent-grey)', fontSize: '0.8rem', lineHeight: 1.5, opacity: 1, margin: 0 }}
        >
          {description}
        </p>

        <div style={{ marginTop: '2rem' }}>
          <button style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutVision() {
  return (
    <div style={{ padding: '2rem 4rem 8rem', marginTop: '-4rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
      <VisionCard 
        number="01" 
        title="OUR MISSION" 
        description="To transform lives through fitness by providing the tools, environment, and support you need to become your strongest self." 
        bgImage="/mission_gym.png" 
      />
      <VisionCard 
        number="02" 
        title="OUR PHILOSOPHY" 
        description="We believe in consistency over motivation, discipline over excitement, and progress over perfection." 
        bgImage="/philosophy_gym.png" 
      />
      <VisionCard 
        number="03" 
        title="OUR COMMUNITY" 
        description="A tribe of driven individuals who push, support, and elevate each other every single day." 
        bgImage="/community_gym.png" 
      />
    </div>
  );
}
