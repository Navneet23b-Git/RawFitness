import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 145; // Increased to 145 to include the full plate stacking, but cuts off before static hold
const getFramePath = (i) => `/frames/frame-${String(i + 1).padStart(4, '0')}.jpg`;

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const images = [];
    const imageSeq = { frame: 0 };
    let loadedCount = 0;

    // Preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) render(); // Render first frame immediately
      };
      images.push(img);
    }

    function render() {
      if (images[imageSeq.frame] && images[imageSeq.frame].complete) {
        const img = images[imageSeq.frame];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        } else {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // GSAP Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%', // 4 scrolls
        scrub: 1, // Smooth scrubbing
        pin: true,
      }
    });

    // 1. Animate video frames across the ENTIRE timeline (duration 100)
    tl.to(imageSeq, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      duration: 100,
      onUpdate: render,
    }, 0);

    // 2. Animate text fading out during the first 35% of the video (duration 35)
    tl.to('.hero-text', {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      duration: 35,
    }, 0);

    // 3. Animate stat cards appearing perfectly synced during the video
    // Cards appear at 18%, 38%, 60%, 80% of the timeline
    const cards = document.querySelectorAll('.hero-stat-card');
    const thresholds = [18, 38, 60, 80];
    
    cards.forEach((card, index) => {
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 10,
      }, thresholds[index]);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="home" style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--bg-dark)' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      
      {/* Overlay Gradient */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.9) 100%)', pointerEvents: 'none' }} />

      {/* Hero Text */}
      <div className="hero-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', zIndex: 10 }}>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 1, margin: 0 }}>
          <span style={{ color: 'var(--text-light)' }}>RAW</span>
          <span style={{ color: 'var(--accent-red)' }}>FITNESS</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--accent-grey)', fontSize: '1.25rem', marginTop: '1rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Unleash Your Potential
        </p>
      </div>

      {/* Floating Stat Cards (Initially hidden, animated by GSAP) */}
      <div className="hero-stat-card glass-card" style={{ position: 'absolute', top: '25%', left: '10%', padding: '1.5rem', width: '200px', opacity: 0, transform: 'translateY(20px)' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-red)', margin: 0 }}>10+</h3>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', margin: 0 }}>Years of Experience</p>
      </div>

      <div className="hero-stat-card glass-card" style={{ position: 'absolute', top: '20%', right: '10%', padding: '1.5rem', width: '200px', opacity: 0, transform: 'translateY(20px)' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-red)', margin: 0 }}>5K+</h3>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', margin: 0 }}>Members Trained</p>
      </div>

      <div className="hero-stat-card glass-card" style={{ position: 'absolute', bottom: '25%', left: '15%', padding: '1.5rem', width: '200px', opacity: 0, transform: 'translateY(20px)' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-red)', margin: 0 }}>24</h3>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', margin: 0 }}>Programs</p>
      </div>

      <div className="hero-stat-card glass-card" style={{ position: 'absolute', bottom: '20%', right: '15%', padding: '1.5rem', width: '200px', opacity: 0, transform: 'translateY(20px)' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-red)', margin: 0 }}>98%</h3>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', margin: 0 }}>Success Rate</p>
      </div>

      {/* Scroll Progress Indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
        <span style={{ writingMode: 'vertical-rl', fontSize: '0.75rem', letterSpacing: '4px', color: 'var(--text-light)' }}>SCROLL TO EXPLORE</span>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--accent-red), transparent)' }} />
      </div>
    </section>
  );
}
