import { useState } from 'react';
import { motion } from 'framer-motion';

const values = [
  { title: 'STRENGTH', description: 'We build physical strength to overcome every challenge.', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { title: 'DISCIPLINE', description: 'Discipline is the bridge between goals and growth.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { title: 'CONSISTENCY', description: 'Small actions, repeated daily, create massive results.', icon: 'M22 12A10 10 0 1 1 12 2v10z' },
  { title: 'TRANSFORMATION', description: "We don't just change bodies, we transform lives.", icon: 'M2 12h4l3-9 5 18 3-9h5' },
];

const ValueCard = ({ v, index, isContainerHovered, activeCard, setActiveCard }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isHighlighted = activeCard === index;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setActiveCard(isHighlighted ? null : index);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '220px',
        height: '240px',
        animation: `orbit-${index} 20s linear infinite`,
        animationPlayState: isContainerHovered ? 'paused' : 'running',
        zIndex: isHighlighted ? 10 : (isHovered ? 5 : 2),
        cursor: 'pointer'
      }}
    >
      <motion.div 
        className="glass-card"
        style={{
          width: '100%',
          height: '100%',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          background: isHighlighted ? 'rgba(20, 5, 5, 0.9)' : 'rgba(10, 10, 10, 0.6)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid'
        }}
        animate={{ 
          scale: isHighlighted ? 1.15 : (isHovered ? 1.05 : 1),
          borderColor: isHighlighted ? 'rgba(229,9,20,1)' : (isHovered ? 'rgba(229,9,20,0.8)' : 'rgba(255,255,255,0.05)'),
          boxShadow: isHighlighted ? '0 0 60px rgba(229,9,20,0.6)' : (isHovered ? '0 10px 40px rgba(229,9,20,0.4)' : '0 4px 10px rgba(0,0,0,0.5)')
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Rotating Background Texture */}
        <motion.div 
          style={{
            position: 'absolute',
            top: '-50%', left: '-50%', width: '200%', height: '200%',
            background: 'radial-gradient(circle, rgba(229,9,20,0.15) 0%, transparent 60%)',
            zIndex: 0,
            opacity: (isHovered || isHighlighted) ? 1 : 0
          }}
          animate={{ rotate: (isHovered || isHighlighted) ? 180 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* 4 Independently Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '3px', height: '3px',
              backgroundColor: 'var(--accent-red)',
              borderRadius: '50%',
              boxShadow: '0 0 6px var(--accent-red)',
              zIndex: 1,
              left: `${10 + (i * 20)}%`,
              top: `${10 + ((i * 37) % 80)}%`
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 30 : -30), (i % 3 === 0 ? -20 : 20), 0],
              y: [0, (i % 2 !== 0 ? 30 : -30), (i % 3 !== 0 ? -20 : 20), 0],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
          />
        ))}

        {/* Content Layer */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div 
            style={{ width: '50px', height: '50px', borderRadius: '50%', border: `1px solid ${isHighlighted ? 'var(--accent-red)' : 'rgba(229,9,20,0.5)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', background: isHighlighted ? 'rgba(229,9,20,0.2)' : 'rgba(229,9,20,0.1)' }}
            animate={{ rotate: (isHovered || isHighlighted) ? 360 : 0 }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={v.icon} />
            </svg>
          </motion.div>
          
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'white' }}>{v.title}</h4>
          <p style={{ fontSize: '0.75rem', color: isHighlighted ? '#fff' : '#999', lineHeight: 1.5, margin: 0, transition: 'color 0.3s' }}>{v.description}</p>
          
          <motion.div 
            style={{ width: '4px', height: '4px', background: 'var(--accent-red)', borderRadius: '50%', marginTop: '1rem', boxShadow: '0 0 5px var(--accent-red)' }} 
            animate={{ scale: (isHovered || isHighlighted) ? 1.5 : 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function AboutValues() {
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4rem 0' }} onClick={() => setActiveCard(null)}>
      
      <style>
        {`
          @keyframes orbit-0 {
            0%   { transform: translate(290px, 0px); }
            25%  { transform: translate(580px, 280px); }
            50%  { transform: translate(290px, 560px); }
            75%  { transform: translate(0px, 280px); }
            100% { transform: translate(290px, 0px); }
          }
          @keyframes orbit-1 {
            0%   { transform: translate(580px, 280px); }
            25%  { transform: translate(290px, 560px); }
            50%  { transform: translate(0px, 280px); }
            75%  { transform: translate(290px, 0px); }
            100% { transform: translate(580px, 280px); }
          }
          @keyframes orbit-2 {
            0%   { transform: translate(290px, 560px); }
            25%  { transform: translate(0px, 280px); }
            50%  { transform: translate(290px, 0px); }
            75%  { transform: translate(580px, 280px); }
            100% { transform: translate(290px, 560px); }
          }
          @keyframes orbit-3 {
            0%   { transform: translate(0px, 280px); }
            25%  { transform: translate(290px, 0px); }
            50%  { transform: translate(580px, 280px); }
            75%  { transform: translate(290px, 560px); }
            100% { transform: translate(0px, 280px); }
          }
        `}
      </style>

      <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-red)', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}>
        - OUR CORE VALUES -
      </h2>

      <div 
        style={{ position: 'relative', width: '800px', height: '800px' }}
        onMouseEnter={() => setIsContainerHovered(true)}
        onMouseLeave={() => setIsContainerHovered(false)}
      >
        
        {/* Animated Background Lines (Diamond shape) */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <motion.path 
            d="M400 120 L690 400 L400 680 L110 400 Z" 
            fill="none" 
            stroke="rgba(229,9,20,0.3)" 
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: 100 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner connecting lines */}
          <motion.line x1="400" y1="120" x2="400" y2="680" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <motion.line x1="110" y1="400" x2="690" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </svg>

        {values.map((v, i) => (
          <ValueCard 
            key={i} 
            v={v} 
            index={i} 
            isContainerHovered={isContainerHovered} 
            activeCard={activeCard} 
            setActiveCard={setActiveCard} 
          />
        ))}

        {/* Center glowing orb */}
        <motion.div 
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,9,20,0.6) 0%, transparent 70%)', filter: 'blur(8px)', zIndex: 1, pointerEvents: 'none' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

    </div>
  );
}
