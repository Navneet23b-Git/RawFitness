import { useEffect, useState } from 'react';
import { MessageCircle, Play } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0.5)',
      backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      height: '80px',
    }}>
      {/* Left side: Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        cursor: 'pointer'
      }}>
        {/* Abstract Red Logo Icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--accent-red)" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-15deg)' }}>
          <path d="M4 4h6l4 8-4 8H4l4-8-4-8z" />
          <path d="M12 4h6l4 8-4 8h-6l4-8-4-8z" opacity="0.6" />
        </svg>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.75rem',
          fontWeight: 700,
          letterSpacing: '1px',
          color: 'var(--text-light)',
          lineHeight: 1
        }}>
          RAW <span style={{ color: 'var(--accent-red)' }}>FITNESS</span>
        </div>
      </div>

      {/* Center: Links */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
      }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: '0 2.5rem',
          padding: 0
        }}>
          {['HOME', 'ABOUT', 'FEATURES', 'SERVICE', 'EXERCISE', 'COACHES'].map((item) => (
            <li key={item} style={{ position: 'relative' }}>
              <a href={`#${item.toLowerCase()}`} className="nav-link" style={{
                color: 'var(--text-light)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                letterSpacing: '1px',
                transition: 'color 0.3s ease',
                display: 'block',
                paddingBottom: '0.25rem'
              }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      {/* Right side: Buttons */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem' 
      }}>
        {/* Start Training Button */}
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--accent-red)',
          color: 'var(--text-light)',
          border: 'none',
          borderRadius: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 0 15px rgba(214,40,40,0.4)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(214,40,40,0.6)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(214,40,40,0.4)'}
        >
          START TRAINING <Play size={14} fill="currentColor" />
        </button>

        {/* Get In Touch Button */}
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'transparent',
          color: 'var(--text-light)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          GET IN TOUCH <MessageCircle size={14} />
        </button>
      </div>

      {/* CSS for nav-link hover effect */}
      <style>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent-red);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link:hover {
          color: var(--accent-red) !important;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </nav>
  );
}
