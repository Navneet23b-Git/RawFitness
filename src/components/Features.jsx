import { useState, useEffect } from 'react';
import { 
  Dumbbell, ShowerHead, HeartPulse, Users, BatteryCharging, 
  Coffee, User, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  ShieldCheck, Sparkles, Maximize, Zap, Square, AlignJustify, SprayCan, Music, Wifi, ParkingCircle
} from 'lucide-react';

const facilities = [
  {
    id: '01',
    name: 'Functional Training Area',
    icon: Dumbbell,
    images: ['/strength_training_card.png', '/offer_group.png', '/muscle_building_card.png', '/offer_pt.png'],
    desc: 'Versatile space for dynamic movements, plyometrics, and functional workouts to build real-world strength.',
    checks: ['Custom turf area for sled pushes', 'Kettlebells, med balls & plyo boxes', 'Full functional rig system'],
    bottomDesc: 'Our functional training area mimics real-life movements, helping you build agility, balance, and explosive power for any physical challenge.'
  },
  {
    id: '02',
    name: 'Locker Rooms & Showers',
    icon: ShowerHead,
    images: ['/offer_locker.png', '/offer_recovery.png', '/offer_nutrition.png', '/offer_cardio.png'],
    desc: 'Premium, secure, and impeccably clean facilities designed to refresh and recover after your workout.',
    checks: ['Digital secure lockers', 'Private rainfall showers', 'Premium grooming products'],
    bottomDesc: 'Step into a spa-like experience. Our locker rooms are stocked with high-end amenities, ensuring you leave the gym feeling as good as your workout.'
  },
  {
    id: '03',
    name: 'Cardio Zone',
    icon: HeartPulse,
    images: ['/offer_cardio.png', '/offer_group.png', '/offer_pt.png', '/yoga_mobility_card.png'],
    desc: 'State-of-the-art cardiovascular equipment overlooking the city skyline to keep you moving.',
    checks: ['Treadmills with immersive screens', 'Stair climbers & ellipticals', 'Concept2 rowers & bikes'],
    bottomDesc: 'Elevate your heart rate in our premium cardio deck featuring the latest tech, heart rate sync, and inspiring panoramic views.'
  },
  {
    id: '04',
    name: 'Free Weight Area',
    icon: Dumbbell,
    images: ['/offer_freeweights.png', '/offer_premium_equip.png', '/muscle_building_card.png', '/strength_training_card.png'],
    desc: 'A wide range of dumbbells, barbells, squat racks, and benches to support all levels of strength training.',
    checks: ['Premium plate-loaded equipment', 'Olympic lifting platforms', 'Spacious and well-ventilated space'],
    bottomDesc: 'Our spacious free weight area is designed for strength, power, and progress. Whether you\'re lifting heavy or dialing in your form, you\'ll have everything you need to reach your next level.'
  },
  {
    id: '05',
    name: 'Group Class Studio',
    icon: Users,
    images: ['/offer_group.png', '/yoga_mobility_card.png', '/offer_cardio.png', '/offer_pt.png'],
    desc: 'High-energy studio space for our signature classes, from HIIT to yoga and mobility.',
    checks: ['Sprung floors for joint protection', 'Club-quality sound system', 'Dynamic lighting setups'],
    bottomDesc: 'Join the community in our dedicated studio. Led by elite coaches, our classes are designed to push your limits in a supportive, high-energy environment.'
  },
  {
    id: '06',
    name: 'Recovery Zone',
    icon: BatteryCharging,
    images: ['/offer_recovery.png', '/offer_locker.png', '/yoga_mobility_card.png', '/offer_nutrition.png'],
    desc: 'Advanced recovery tools to heal muscles faster and get you ready for the next session.',
    checks: ['Cold plunge & infrared sauna', 'Percussion therapy devices', 'Compression boot stations'],
    bottomDesc: 'Recovery is just as important as training. Take advantage of our elite recovery tools to reduce inflammation, improve circulation, and bounce back faster.'
  },
  {
    id: '07',
    name: 'Nutrition Bar',
    icon: Coffee,
    images: ['/offer_nutrition.png', '/offer_locker.png', '/offer_recovery.png', '/offer_pt.png'],
    desc: 'Fuel your body with premium supplements, protein shakes, and healthy meal preps right in-house.',
    checks: ['Post-workout protein shakes', 'Pre-workout & energy drinks', 'Fresh, macro-balanced meals'],
    bottomDesc: 'Convenience meets performance. Our nutrition bar is stocked with trusted brands to ensure you hit your macros without leaving the building.'
  },
  {
    id: '08',
    name: 'Personal Training Suites',
    icon: User,
    images: ['/offer_pt.png', '/strength_training_card.png', '/muscle_building_card.png', '/offer_premium_equip.png'],
    desc: 'Dedicated private spaces for 1-on-1 coaching without distractions.',
    checks: ['Fully equipped private pods', 'Undivided coach attention', 'Customized programming'],
    bottomDesc: 'Experience fitness on a personal level. Our private suites ensure you and your coach can focus entirely on your form, output, and progress.'
  }
];

export default function Features() {
  const [selectedFacility, setSelectedFacility] = useState(3); // Default to Free Weight Area
  const [hoveredFacility, setHoveredFacility] = useState(null);
  const [isStatic, setIsStatic] = useState(true); // Default to static so carousel works immediately
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayIndex = isStatic ? selectedFacility : (hoveredFacility !== null ? hoveredFacility : selectedFacility);
  const activeFacilityData = facilities[displayIndex];

  // Reset image index when facility changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [displayIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeFacilityData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activeFacilityData.images.length) % activeFacilityData.images.length);
  };

  const handleFacilityClick = (index) => {
    setSelectedFacility(index);
    setIsStatic(true);
  };

  const handleFacilityHover = (index) => {
    if (!isStatic) {
      setHoveredFacility(index);
    }
  };

  const handleMouseLeaveList = () => {
    if (!isStatic) {
      setHoveredFacility(null);
    }
  };

  return (
    <section id="features" style={{ backgroundColor: '#0a0a0a', padding: '5.5rem 2rem', color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* --- TOP LAYOUT: Left List & Right Image --- */}
        <div style={{ display: 'flex', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Left Column */}
          <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--accent-red)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>OUR SERVICES</span>
              <div style={{ width: '30px', height: '1px', background: 'var(--accent-red)' }} />
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem' }}>
              Premium facilities.
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, color: 'var(--accent-red)', marginBottom: '1.5rem' }}>
              Limitless potential.
            </h2>
            
            <p style={{ color: 'var(--accent-grey)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '2rem' }}>
              Every space. Every rep. Every detail is built to help you perform at your best.
            </p>

            <div 
              style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '2rem' }}
              onMouseLeave={handleMouseLeaveList}
            >
              {facilities.map((fac, i) => {
                const isActive = displayIndex === i;
                return (
                  <div 
                    key={fac.id}
                    onClick={() => handleFacilityClick(i)}
                    onMouseEnter={() => handleFacilityHover(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderLeft: isActive ? '3px solid var(--accent-red)' : '3px solid transparent',
                      paddingLeft: isActive ? '1rem' : '0',
                      background: isActive ? 'linear-gradient(90deg, rgba(214,40,40,0.1) 0%, transparent 100%)' : 'transparent'
                    }}
                  >
                    <fac.icon size={20} color={isActive ? 'var(--accent-red)' : 'var(--accent-grey)'} style={{ marginRight: '1rem' }} />
                    <span style={{ flex: 1, color: isActive ? 'white' : 'var(--accent-grey)', fontWeight: isActive ? 600 : 400, fontSize: '0.95rem' }}>
                      {fac.name}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                      {fac.id}
                    </span>
                  </div>
                );
              })}
            </div>

            <button style={{
              alignSelf: 'flex-start',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'transparent',
              color: 'var(--accent-red)',
              border: '1px solid var(--accent-red)',
              padding: '0.75rem 1.5rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderRadius: '2px'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-red)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--accent-red)';
            }}
            onClick={() => setIsStatic(false)}
            >
              VIEW ALL FACILITIES <ArrowRight size={16} />
            </button>
            {!isStatic && (
              <p style={{ color: 'var(--accent-grey)', fontSize: '0.75rem', marginTop: '1rem', fontStyle: 'italic' }}>
                Hovering enabled. Click any facility to lock it and view more images.
              </p>
            )}
          </div>

          {/* Right Column: Image Container */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{
              flex: 1,
              borderRadius: '1.5rem',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#111',
              minHeight: '600px'
            }}>
              {/* Background Image */}
              <img 
                src={activeFacilityData.images[currentImageIndex]} 
                alt={activeFacilityData.name} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0, left: 0,
                  transition: 'opacity 0.4s ease'
                }}
              />
              
              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 40%, transparent 100%)'
              }} />

              {/* Content Box */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                padding: '4rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '60px', height: '60px', 
                  border: '1px solid rgba(214,40,40,0.3)', 
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  <activeFacilityData.icon size={30} color="var(--accent-red)" />
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                  {activeFacilityData.name}
                </h3>
                
                <p style={{ color: 'var(--accent-grey)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '500px', marginBottom: '2.5rem' }}>
                  {activeFacilityData.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {activeFacilityData.checks.map((check, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <CheckCircle2 size={20} color="var(--accent-red)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{check}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation Controls */}
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {/* Dots */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {activeFacilityData.images.map((_, idx) => (
                      <div 
                        key={idx}
                        onClick={() => isStatic && setCurrentImageIndex(idx)}
                        style={{
                          width: currentImageIndex === idx ? '24px' : '12px',
                          height: '4px',
                          backgroundColor: currentImageIndex === idx ? 'var(--accent-red)' : 'rgba(255,255,255,0.2)',
                          transition: 'all 0.3s ease',
                          cursor: isStatic ? 'pointer' : 'default'
                        }}
                      />
                    ))}
                  </div>

                  {/* Arrows */}
                  {isStatic && activeFacilityData.images.length > 1 && (
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button onClick={prevImage} style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', cursor: 'pointer', transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                        <ChevronLeft size={20} />
                      </button>
                      <button onClick={nextImage} style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.8)', border: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'black', cursor: 'pointer', transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'white'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.8)'}>
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Banner of Right Column */}
            <div style={{ display: 'flex', marginTop: '2rem', gap: '3rem', alignItems: 'center' }}>
              <p style={{ flex: '1', color: 'var(--accent-grey)', fontSize: '0.85rem', lineHeight: 1.5, m: 0 }}>
                {activeFacilityData.bottomDesc}
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                {[
                  { title: 'Top-Tier\\nEquipment', Icon: ShieldCheck },
                  { title: 'Clean &\\nHygienic', Icon: Sparkles },
                  { title: 'Spacious\\nLayout', Icon: Maximize },
                  { title: 'Built for\\nPerformance', Icon: Zap }
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <feat.Icon size={24} color="var(--accent-red)" />
                    <span style={{ color: 'white', fontSize: '0.75rem', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{feat.title.replace('\\n', '\n')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW: 6 Stat Cards --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem' }}>
          {[
            { icon: Square, top: '25,000+', mid: 'Sq. Ft. Training Space', bot: 'Spacious, open, and built for performance.' },
            { icon: Dumbbell, top: '200+', mid: 'Premium Machines', bot: 'Industry-leading equipment for every goal.' },
            { icon: SprayCan, top: 'Daily', mid: 'Deep Cleaning', bot: 'We maintain the highest standards of hygiene.' },
            { icon: Music, top: 'Curated', mid: 'Workout Vibes', bot: 'High-energy music to keep you in the zone.' },
            { icon: Wifi, top: 'High-Speed', mid: 'Wi-Fi', bot: 'Stay connected, stream, or get work done.' },
            { icon: ParkingCircle, top: 'Ample', mid: 'Parking', bot: 'Hassle-free parking, right at your doorstep.' }
          ].map((card, idx) => (
            <div key={idx} style={{
              background: '#111',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid rgba(214,40,40,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <card.icon size={20} color="var(--accent-red)" />
              </div>
              <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{card.top}</h4>
              <h5 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1rem' }}>{card.mid}</h5>
              <p style={{ color: 'var(--accent-grey)', fontSize: '0.75rem', lineHeight: 1.4, marginTop: 'auto' }}>{card.bot}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
