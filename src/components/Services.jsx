import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Activity, Target, Dumbbell, Users, Utensils, BarChart, ShoppingBag, Car, Waves, ArrowRight, Heart, Crosshair } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const styles = `
  .chamfer-card {
    background: #111;
    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
    display: flex;
    flex-direction: column;
    position: relative;
    transition: background 0.3s ease;
  }
  .chamfer-card:hover {
    background: #151515;
  }
  .chamfer-img-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .chamfer-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .chamfer-card:hover .chamfer-img-wrapper img {
    transform: scale(1.05);
  }
  .arrow-btn {
    transition: transform 0.3s ease;
  }
  .chamfer-card:hover .arrow-btn {
    transform: translateX(5px);
  }
  .small-arrow-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justifyContent: center;
    transition: all 0.3s ease;
  }
  .chamfer-card:hover .small-arrow-circle {
    background: var(--accent-red);
    border-color: var(--accent-red);
    box-shadow: 0 0 15px rgba(229,9,20,0.6);
  }
`;

const topCards = [
  {
    title: 'STRENGTH TRAINING',
    desc: 'Build real strength with proven programming.',
    img: '/strength_training_card.png',
    Icon: Dumbbell
  },
  {
    title: 'YOGA & MOBILITY',
    desc: 'Improve flexibility, mobility, and mental clarity.',
    img: '/yoga_mobility_card.png',
    Icon: Heart
  },
  {
    title: 'MUSCLE BUILDING',
    desc: 'Targeted programs to help you build and tone.',
    img: '/muscle_building_card.png',
    Icon: Crosshair
  }
];

const bottomCards = [
  { title: 'PREMIUM EQUIPMENT', desc: 'Commercial-grade racks, plates, and machines maintained to competition standard.', img: '/offer_premium_equip.png', Icon: Dumbbell },
  { title: 'RECOVERY ZONE', desc: 'Cold plunge, sauna, and percussion therapy to keep you training, not healing.', img: '/offer_recovery.png', Icon: Heart },
  { title: 'LOCKER ROOMS', desc: 'Private, secure, and stocked — because the details matter as much as the deadlift.', img: '/offer_locker.png', Icon: Users },
  { title: 'CARDIO DECK', desc: 'Floor-to-ceiling glass overlooking the city. Miles feel shorter with a view.', img: '/offer_cardio.png', Icon: Activity },
  { title: 'FREE WEIGHTS AREA', desc: 'Dumbbells from 2.5 to 80kg. No waiting, no apologizing for chalk.', img: '/offer_freeweights.png', Icon: Activity },
  { title: 'PERSONAL TRAINING STUDIO', desc: 'A dedicated space for 1-on-1 work — no distractions, just output.', img: '/offer_pt.png', Icon: Target },
  { title: 'GROUP CLASSES', desc: 'High-energy classes that push your limits and build community.', img: '/offer_group.png', Icon: Users },
  { title: 'NUTRITION GUIDANCE', desc: 'Get expert advice and meal plans that fuel your goals.', img: '/offer_nutrition.png', Icon: Utensils },
  { title: 'PROGRESS TRACKING', desc: 'Track your lifts, body metrics, and milestones in one place.', img: '/strength_training_card.png', Icon: BarChart },
  { title: 'SUPPLEMENT SHOP', desc: 'Premium supplements from trusted brands, right in-house.', img: '/muscle_building_card.png', Icon: ShoppingBag },
  { title: 'PARKING FACILITY', desc: 'Hassle-free parking so you can focus on your workout.', img: '/offer_locker.png', Icon: Car },
  { title: 'TOWELS & AMENITIES', desc: 'Clean towels, filtered water, showers, and all the essentials.', img: '/offer_recovery.png', Icon: Waves }
];

const TiltCard = ({ card }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.15, zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}
      className="chamfer-card gsap-slide-up"
      style={{
        height: '320px',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        position: 'relative'
      }}
    >
      <div className="chamfer-img-wrapper" style={{ height: '45%', transform: 'translateZ(30px)' }}>
        <img src={card.img} alt={card.title} />
        {/* Dynamic Glow Overlay following mouse */}
        <motion.div 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at center, rgba(229,9,20,0.4) 0%, transparent 60%)',
            opacity: useTransform(x, [-0.5, 0.5], [0.8, 0]),
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
        />
      </div>
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', transform: 'translateZ(40px)' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <card.Icon size={18} color="var(--accent-red)" />
        </div>
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.2 }}>{card.title}</h4>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.7rem', lineHeight: 1.4, flex: 1 }}>{card.desc}</p>
        <div style={{ alignSelf: 'flex-end', marginTop: 'auto', transform: 'translateZ(20px)' }}>
          <div className="small-arrow-circle">
            <ArrowRight size={10} color="white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AppleHoverCard = ({ card }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.03, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="chamfer-card gsap-slide-up"
      style={{
        height: '320px',
        position: 'relative',
        background: '#111', // base solid dark color
        overflow: 'hidden'
      }}
    >
      {/* Apple-style internal spotlight glow */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(229,9,20,0.3), transparent 80%)`,
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="chamfer-img-wrapper" style={{ height: '45%', position: 'relative', zIndex: 1 }}>
        <img src={card.img} alt={card.title} style={{ filter: 'grayscale(30%)' }} />
      </div>
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <card.Icon size={18} color="var(--accent-red)" />
        </div>
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.2 }}>{card.title}</h4>
        <p style={{ color: 'var(--accent-grey)', fontSize: '0.7rem', lineHeight: 1.4, flex: 1 }}>{card.desc}</p>
        <div style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>
          <div className="small-arrow-circle">
            <ArrowRight size={10} color="white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.gsap-slide-up');
    elements.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="services" ref={containerRef} style={{
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '7.2rem 2rem 5.5rem',
      overflow: 'hidden'
    }}>
      <style>{styles}</style>
      
      {/* --- TOP SECTION --- */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '4rem',
        marginBottom: '3rem'
      }}>
        
        {/* Left Info Box */}
        <div className="gsap-slide-up" style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '2px', background: 'var(--accent-red)' }} />
            <span style={{ color: 'var(--accent-grey)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>What We Offer</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-1px' }}>
            Built for serious<br />training.
          </h2>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', fontWeight: 800, lineHeight: 1, color: 'var(--accent-red)', marginBottom: '2rem', letterSpacing: '-1px' }}>
            Designed for results.
          </h2>
          
          <p style={{ color: 'var(--accent-grey)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '80%' }}>
            Everything you need to train hard, recover smart, and stay consistent. No fluff. Just real tools for real progress.
          </p>

          <button style={{
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'transparent',
            color: 'var(--accent-red)',
            border: '1px solid var(--accent-red)',
            padding: '0.75rem 2rem',
            fontSize: '0.875rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent-red)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent-red)';
          }}
          >
            JOIN THE MOVEMENT <ArrowRight size={16} />
          </button>
        </div>

        {/* Right 3 Large Cards */}
        <div style={{ flex: '1.5', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', perspective: '1000px' }}>
          {topCards.map((card, i) => (
            <motion.div 
              key={i} 
              className="chamfer-card gsap-slide-up" 
              style={{ height: '450px' }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="chamfer-img-wrapper" style={{ height: '60%' }}>
                <img src={card.img} alt={card.title} />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <card.Icon size={20} color="var(--accent-red)" />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, m: 0 }}>{card.title}</h4>
                </div>
                <p style={{ color: 'var(--accent-grey)', fontSize: '0.8rem', lineHeight: 1.5, flex: 1 }}>{card.desc}</p>
                <div style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>
                  <ArrowRight size={18} color="var(--accent-red)" className="arrow-btn" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM SECTION (12 Cards Grid) --- */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '1rem',
        perspective: '1200px'
      }}>
        {bottomCards.map((card, i) => (
          <TiltCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
}
