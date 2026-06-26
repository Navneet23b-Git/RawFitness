import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050505', padding: '5.5rem 4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        
        {/* Brand Info */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '2px',
            color: 'var(--text-light)',
            marginBottom: '1.5rem'
          }}>
            RAW<span style={{ color: 'var(--accent-red)' }}>FITNESS</span>
          </div>
          <p style={{ color: 'var(--accent-grey)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Uncompromising standards for those who demand elite performance. Join the ranks of the relentless.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--accent-grey)', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = 'var(--text-light)'} onMouseLeave={e => e.target.style.color = 'var(--accent-grey)'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" style={{ color: 'var(--accent-grey)', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = 'var(--text-light)'} onMouseLeave={e => e.target.style.color = 'var(--accent-grey)'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" style={{ color: 'var(--accent-grey)', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = 'var(--text-light)'} onMouseLeave={e => e.target.style.color = 'var(--accent-grey)'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Home', 'About', 'Facilities', 'Methodology', 'Programmes', 'Coaches'].map(link => (
              <li key={link}>
                <a href="#" style={{ color: 'var(--accent-grey)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-red)'} onMouseLeave={e => e.target.style.color = 'var(--accent-grey)'}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h4 style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Stay Forged</h4>
          <p style={{ color: 'var(--accent-grey)', marginBottom: '1.5rem' }}>Subscribe for training protocols and exclusive drops.</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-light)',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '1px',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent-red)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Subscribe <Mail size={16} style={{ marginLeft: '0.5rem' }} />
            </button>
          </form>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', margin: 0 }}>
          &copy; {new Date().getFullYear()} RAW FITNESS. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--accent-grey)', fontSize: '0.875rem', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
