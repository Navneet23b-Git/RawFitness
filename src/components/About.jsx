import { useEffect, useState } from 'react';
import AboutHero from './about/AboutHero';
import AboutVision from './about/AboutVision';
import AboutEquipmentStrip from './about/AboutEquipmentStrip';
import AboutJourney from './about/AboutJourney';
import AboutValues from './about/AboutValues';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" style={{
      backgroundColor: '#0a0a0a',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '10rem'
    }}>


      {/* Hero Section */}
      <AboutHero />

      {/* Vision Cards */}
      <AboutVision />

      {/* Infinite Equipment Strip */}
      <AboutEquipmentStrip />

      {/* Bottom Layout: Journey + Values */}
      <div style={{ display: 'flex', width: '100%', maxWidth: '1600px', margin: '6rem auto 0', padding: '0 4rem', gap: '4rem' }}>
        <div style={{ flex: 1 }}>
          <AboutJourney />
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AboutValues />
        </div>
      </div>

    </section>
  );
}
