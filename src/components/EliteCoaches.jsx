import { useState } from 'react';

const coaches = [
  { id: 1, name: 'MARCUS V.', specialty: 'Strength & Conditioning', bio: 'Former Olympic weightlifter with a decade of coaching elite athletes.', img: '/coach_marcus.png' },
  { id: 2, name: 'SARAH J.', specialty: 'CrossFit / Mobility', bio: 'Regional champion focusing on functional movement and injury prevention.', img: '/coach_sarah.png' },
  { id: 3, name: 'DAVID K.', specialty: 'Bodybuilding', bio: 'IFBB Pro dedicated to structural symmetry and targeted hypertrophy.', img: '/coach_david.png' },
  { id: 4, name: 'ELENA R.', specialty: 'Cardio / Endurance', bio: 'Ironman finisher, specializes in pushing metabolic limits.', img: '/coach_elena.png' }
];

function CoachCard({ coach }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
      {/* Hanging Rope/Strap */}
      <div style={{
        width: '12px',
        height: '60px',
        background: 'linear-gradient(to right, #111, #333, #111)',
        borderLeft: '1px solid rgba(255,255,255,0.1)',
        borderRight: '1px solid rgba(255,255,255,0.1)',
        boxShadow: 'inset 0 0 5px rgba(0,0,0,0.8)',
        zIndex: 1,
        transition: 'height 0.3s ease',
        transformOrigin: 'top center',
      }} />

      {/* Card Body */}
      <div 
        className="glass-card coach-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          marginTop: '-10px',
          cursor: 'pointer',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          animation: isHovered ? 'none' : `sway ${3 + (coach.id * 0.5)}s ease-in-out infinite alternate`,
          transformOrigin: 'top center',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: `url(${coach.img}) center/cover no-repeat`,
          margin: '0 auto 1.5rem',
          border: '2px solid var(--accent-grey)',
          transition: 'border-color 0.3s ease',
          borderColor: isHovered ? 'var(--accent-red)' : 'var(--accent-grey)'
        }} />
        
        <h3 style={{ color: 'var(--text-light)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{coach.name}</h3>
        <p style={{ color: 'var(--accent-red)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{coach.specialty}</p>
        
        <div style={{
          maxHeight: isHovered ? '150px' : '0',
          opacity: isHovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          marginTop: isHovered ? '1.5rem' : '0'
        }}>
          <p style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', lineHeight: 1.5 }}>
            {coach.bio}
          </p>
          <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', fontSize: '0.875rem' }}>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default function EliteCoaches() {
  return (
    <section id="coaches" style={{ padding: '7.2rem 0', backgroundColor: 'var(--bg-darker)', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--text-light)' }}>
          ELITE <span style={{ color: 'var(--accent-red)' }}>COACHES</span>
        </h2>
      </div>

      <div style={{ position: 'relative', paddingTop: '40px' }}>
        {/* Steel Pull-up Bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-5%',
          width: '110%',
          height: '30px',
          background: 'linear-gradient(to bottom, #ddd, #888, #444, #222)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.5)',
          borderRadius: '15px',
          zIndex: 3
        }} />

        {/* Coaches Hanging from the bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(2rem, 5vw, 4rem)',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {coaches.map(coach => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sway {
          0% { transform: rotate(-2deg) translateY(0px); }
          100% { transform: rotate(2deg) translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
