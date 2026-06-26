import { Users, Calendar, Trophy, Star, Dumbbell, HeartPulse, Target, Flame, Heart, User, BatteryCharging, Coffee, ArrowRight, ClipboardList, TrendingUp } from 'lucide-react';

const programs = [
  {
    id: '01',
    title: 'STRENGTH TRAINING',
    desc: 'Build raw power, increase strength & dominate.',
    weeks: '8-12 WEEKS',
    levels: 'ALL LEVELS',
    img: '/strength_training_card.png',
    Icon: Dumbbell
  },
  {
    id: '02',
    title: 'CARDIO CONDITIONING',
    desc: 'Boost stamina, burn fat & improve heart health.',
    weeks: '6-10 WEEKS',
    levels: 'ALL LEVELS',
    img: '/offer_cardio.png',
    Icon: HeartPulse
  },
  {
    id: '03',
    title: 'CROSSFIT / FUNCTIONAL',
    desc: 'Unleash your inner athlete with functional training.',
    weeks: '8-12 WEEKS',
    levels: 'ALL LEVELS',
    img: '/offer_premium_equip.png',
    Icon: Target
  },
  {
    id: '04',
    title: 'BODYBUILDING',
    desc: 'Sculpt your physique & build lean muscle.',
    weeks: '10-16 WEEKS',
    levels: 'INTERMEDIATE TO ADVANCED',
    img: '/muscle_building_card.png',
    Icon: Flame
  },
  {
    id: '05',
    title: 'RECOVERY & YOGA',
    desc: 'Restore balance, improve flexibility & reduce stress.',
    weeks: '4-8 WEEKS',
    levels: 'ALL LEVELS',
    img: '/yoga_mobility_card.png',
    Icon: Heart
  },
  {
    id: '06',
    title: 'PERSONAL TRAINING',
    desc: '1-on-1 coaching tailored to your unique goals.',
    weeks: 'ONGOING',
    levels: 'ALL LEVELS',
    img: '/offer_pt.png',
    Icon: User
  },
  {
    id: '07',
    title: 'RECOVERY PROGRAM',
    desc: 'Speed up recovery & perform at your best.',
    weeks: '2-6 WEEKS',
    levels: 'ALL LEVELS',
    img: '/offer_recovery.png',
    Icon: BatteryCharging
  },
  {
    id: '08',
    title: 'NUTRITION COACHING',
    desc: 'Fuel your body with the right nutrition & meal plans.',
    weeks: 'ONGOING',
    levels: 'ALL LEVELS',
    img: '/offer_nutrition.png',
    Icon: Coffee
  }
];

export default function TrainingProgrammes() {
  return (
    <section id="programmes" style={{ backgroundColor: '#0a0a0a', color: 'white', overflow: 'hidden' }}>
      
      {/* --- TOP HEADER BLOCK --- */}
      <div style={{
        position: 'relative',
        padding: '7.2rem 2rem 5.5rem',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Background Image & Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/offer_freeweights.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, #0a0a0a 20%, transparent 100%), linear-gradient(to bottom, transparent 50%, #0a0a0a 100%)',
          zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          {/* Watermark */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: '12rem',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.02)',
            lineHeight: 0.8,
            textAlign: 'right',
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
            RAW<br/>FITNESS
          </div>

          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent-red)' }} />
              <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Training Programs</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '5.5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '0' }}>
              PICK YOUR
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '5.5rem', fontWeight: 900, lineHeight: 0.9, color: 'var(--accent-red)', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              DISCIPLINE
            </h2>
            
            <h3 style={{ fontSize: '1.25rem', letterSpacing: '3px', fontWeight: 600, color: 'var(--text-light)', marginBottom: '2rem' }}>
              COMMIT TO THE PROCESS. TRANSFORM YOUR LIFE.
            </h3>

            <p style={{ color: 'var(--accent-grey)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '4rem', maxWidth: '500px' }}>
              Programs designed by experts. Built for results.<br/>Choose your path and we'll guide the way.
            </p>

            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
              {[
                { count: '8.4K+', label: 'Members Transformed', Icon: Users },
                { count: '12+', label: 'Programs Available', Icon: Calendar },
                { count: '97%', label: 'Goal Achievement Rate', Icon: Trophy },
                { count: '4.9/5', label: 'Average Member Rating', Icon: Star }
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <stat.Icon size={32} color="var(--accent-red)" strokeWidth={1.5} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>{stat.count}</span>
                    <span style={{ color: 'var(--accent-grey)', fontSize: '0.75rem', maxWidth: '80px', lineHeight: 1.2 }}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PROGRAMS GRID BLOCK --- */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3.6rem 2rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '20px', height: '2px', background: 'var(--accent-red)' }} />
            <span style={{ color: 'var(--accent-red)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>EXPLORE PROGRAMS</span>
            <div style={{ width: '20px', height: '2px', background: 'var(--accent-red)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800 }}>
            FIND THE RIGHT PATH FOR YOU
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }}>
          {programs.map((prog, i) => {
            const isFirst = i === 0;
            return (
              <div key={i} style={{
                background: '#111',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                border: isFirst ? '1px solid var(--accent-red)' : '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem', left: '1rem',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.75rem',
                  padding: '2px 6px',
                  borderRadius: '2px',
                  zIndex: 2,
                  fontFamily: 'monospace'
                }}>
                  {prog.id}
                </div>

                {/* Image */}
                <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                  <img src={prog.img} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 50%, #111 100%)' }} />
                  
                  {/* Circle Icon */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '1.5rem',
                    width: '40px', height: '40px',
                    borderRadius: '50%',
                    background: '#111',
                    border: '1px solid var(--accent-red)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 3
                  }}>
                    <prog.Icon size={20} color="var(--accent-red)" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    {prog.title}
                  </h4>
                  <p style={{ color: 'var(--accent-grey)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem', flex: 1 }}>
                    {prog.desc}
                  </p>
                  
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1rem' }} />
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-grey)', fontSize: '0.65rem', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                    <span>{prog.weeks}</span>
                    <span style={{ color: 'var(--accent-red)' }}>|</span>
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{prog.levels}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--accent-red)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px' }}>
                    <span>VIEW PROGRAM</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* --- HOW IT WORKS BANNER --- */}
      <div style={{ maxWidth: '1400px', margin: '0 auto 6rem', padding: '0 2rem' }}>
        <div style={{
          border: '1px solid rgba(214,40,40,0.5)',
          borderRadius: '1rem',
          background: '#111',
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'center'
        }}>
          {/* Left Image */}
          <div style={{ flex: '0 0 250px', height: '100%', position: 'relative', minHeight: '180px' }}>
            <img src="/strength_training_card.png" alt="Athlete" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, transparent 0%, #111 100%)' }} />
          </div>

          {/* Banner Title */}
          <div style={{ padding: '2rem', flex: '0 0 250px' }}>
            <div style={{ color: 'var(--accent-grey)', fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>HOW IT WORKS</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.1 }}>
              SIMPLE STEPS.<br/>REAL RESULTS.
            </h3>
          </div>

          {/* Steps */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '2rem 2rem 2rem 0' }}>
            {[
              { id: '01', title: 'CHOOSE YOUR GOAL', desc: 'Tell us what you want to achieve.', Icon: Target },
              { id: '02', title: 'GET YOUR PLAN', desc: 'We create a personalized training roadmap.', Icon: ClipboardList },
              { id: '03', title: 'TRAIN & PROGRESS', desc: 'Follow the plan. Track your progress.', Icon: Dumbbell },
              { id: '04', title: 'TRANSFORM', desc: 'Stay consistent. Become unstoppable.', Icon: TrendingUp }
            ].map((step, idx, arr) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <step.Icon size={24} color="var(--accent-red)" strokeWidth={1.5} />
                    <span style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>{step.id}</span>
                  </div>
                  <h5 style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>{step.title}</h5>
                  <p style={{ color: 'var(--accent-grey)', fontSize: '0.65rem', lineHeight: 1.4, maxWidth: '120px' }}>{step.desc}</p>
                </div>
                {idx !== arr.length - 1 && (
                  <ArrowRight size={16} color="var(--accent-grey)" style={{ margin: '0 1rem', opacity: 0.3 }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
