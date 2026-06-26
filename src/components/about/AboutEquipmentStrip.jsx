import { motion } from 'framer-motion';

const getSvg = (name) => {
  const props = { width: "48", height: "48", viewBox: "0 0 64 64", fill: "none", stroke: "var(--accent-red)", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" };
  const glowProps = { ...props, strokeWidth: "3", stroke: "rgba(229,9,20,0.2)", filter: "blur(2px)" };

  switch(name) {
    case 'BENCH PRESS':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <rect x="16" y="44" width="32" height="4" rx="1" />
            <path d="M20 44V30 M44 44V30 M10 26h44 M12 20v12 M48 20v12" />
          </svg>
          <svg {...props}>
            <rect x="16" y="44" width="32" height="4" rx="1" fill="rgba(229,9,20,0.1)" />
            <path d="M20 44V30 M44 44V30" />
            <path d="M10 26h44" />
            <rect x="12" y="20" width="4" height="12" rx="1" fill="rgba(229,9,20,0.2)" />
            <rect x="48" y="20" width="4" height="12" rx="1" fill="rgba(229,9,20,0.2)" />
            <circle cx="32" cy="44" r="2" fill="var(--accent-red)"/>
          </svg>
        </div>
      );
    case 'DEADLIFT':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <path d="M8 50h48 M14 44h36 M14 28v20 M10 32v12 M46 28v20 M50 32v12" />
          </svg>
          <svg {...props}>
            <path d="M8 50h48" />
            <path d="M14 44h36" />
            <rect x="14" y="28" width="4" height="20" rx="1" fill="rgba(229,9,20,0.2)" />
            <rect x="10" y="32" width="4" height="12" rx="1" />
            <rect x="46" y="28" width="4" height="20" rx="1" fill="rgba(229,9,20,0.2)" />
            <rect x="50" y="32" width="4" height="12" rx="1" />
            <circle cx="32" cy="44" r="2" fill="var(--accent-red)"/>
          </svg>
        </div>
      );
    case 'SQUAT RACK':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <path d="M12 50h40 M20 50V14 M44 50V14 M20 18h24 M18 28h4 M42 28h4 M8 26h48 M10 20v12 M50 20v12" />
          </svg>
          <svg {...props}>
            <path d="M12 50h40 M20 50V14 M44 50V14 M20 18h24" />
            <path d="M18 28h4 M42 28h4" />
            <path d="M8 26h48" />
            <rect x="10" y="20" width="4" height="12" rx="1" fill="rgba(229,9,20,0.2)" />
            <rect x="50" y="20" width="4" height="12" rx="1" fill="rgba(229,9,20,0.2)" />
          </svg>
        </div>
      );
    case 'POWER CAGE':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <path d="M10 50h44 M18 50V14 M30 50V14 M34 50V14 M46 50V14 M18 14h12 M34 14h12 M18 20h12 M34 20h12 M18 34h12 M34 34h12" />
          </svg>
          <svg {...props}>
            <path d="M10 50h44" />
            <path d="M18 50V14 M30 50V14 M34 50V14 M46 50V14" />
            <path d="M18 14h12 M34 14h12 M18 20h12 M34 20h12" />
            <path d="M18 34h12 M34 34h12" />
          </svg>
        </div>
      );
    case 'OLYMPIC BARS':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(45deg)' }} {...glowProps}>
            <path d="M10 32h44 M12 28v8 M46 28v8 M18 30v4 M46 30v4" />
          </svg>
          <svg {...props} style={{ transform: 'rotate(45deg)' }}>
            <path d="M10 32h44" />
            <rect x="12" y="28" width="6" height="8" rx="1" fill="rgba(229,9,20,0.2)" />
            <rect x="46" y="28" width="6" height="8" rx="1" fill="rgba(229,9,20,0.2)" />
            <path d="M18 30v4 M46 30v4" />
          </svg>
        </div>
      );
    case 'CABLE MACHINE':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <path d="M10 50h44 M32 50V14 M22 14h20 M32 14v10 M28 24h8 M24 50V28 M40 50V28" />
          </svg>
          <svg {...props}>
            <path d="M10 50h44 M32 50V14 M22 14h20 M32 14v10 M28 24h8 M24 50V28 M40 50V28" />
            <circle cx="32" cy="16" r="2" />
          </svg>
        </div>
      );
    case 'DUMBBELLS':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <path d="M22 32h20 M16 20v24 M10 24v16 M42 20v24 M48 24v16" />
          </svg>
          <svg {...props}>
            <path d="M22 32h20" />
            <rect x="16" y="20" width="6" height="24" rx="2" fill="rgba(229,9,20,0.2)" />
            <rect x="10" y="24" width="6" height="16" rx="2" />
            <rect x="42" y="20" width="6" height="24" rx="2" fill="rgba(229,9,20,0.2)" />
            <rect x="48" y="24" width="6" height="16" rx="2" />
          </svg>
        </div>
      );
    case 'LEG PRESS':
      return (
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0 }} {...glowProps}>
            <path d="M16 48l24-24 M20 48l24-24 M10 50h44 M16 50v-6 M40 50v-14 M12 40h12l4-12 M38 20l8 8" />
          </svg>
          <svg {...props}>
            <path d="M16 48l24-24 M20 48l24-24" />
            <path d="M10 50h44 M16 50v-6 M40 50v-14" />
            <path d="M12 40h12l4-12" />
            <path d="M38 20l8 8" />
          </svg>
        </div>
      );
    default:
      return <svg {...props}><circle cx="32" cy="32" r="16"/></svg>;
  }
};

const equipment = [
  { name: 'BENCH PRESS' },
  { name: 'DEADLIFT' },
  { name: 'SQUAT RACK' },
  { name: 'POWER CAGE' },
  { name: 'OLYMPIC BARS' },
  { name: 'CABLE MACHINE' },
  { name: 'DUMBBELLS' },
  { name: 'LEG PRESS' }
];

export default function AboutEquipmentStrip() {
  const items = [...equipment, ...equipment, ...equipment];

  return (
    <div style={{ width: '100%', padding: '2rem 0', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
      
      {/* Central Red Radiant Glow (matches reference gradient) */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(229,9,20,0.15) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

      {/* Top Gradient Border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(229,9,20,0.5) 15%, rgba(229,9,20,0.5) 85%, transparent 100%)', zIndex: 5 }} />
      
      {/* Bottom Gradient Border */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(229,9,20,0.5) 15%, rgba(229,9,20,0.5) 85%, transparent 100%)', zIndex: 5 }} />
      
      {/* Decorative Infinity & Arrow SVG at Left End */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 10, color: 'var(--accent-red)', padding: '0 4rem 0 2rem', background: 'linear-gradient(to right, rgba(10,10,10,1) 70%, transparent 100%)' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </div>

      {/* Decorative Arrow & Infinity SVG at Right End */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 10, color: 'var(--accent-red)', padding: '0 2rem 0 4rem', background: 'linear-gradient(to left, rgba(10,10,10,1) 70%, transparent 100%)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/></svg>
      </div>

      <div className="marquee-container" style={{ padding: '0 8rem', position: 'relative', zIndex: 2 }}>
        <div className="marquee-content">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', minWidth: '160px', cursor: 'pointer' }}
              whileHover={{ scale: 1.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getSvg(item.name)}
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', color: 'white' }}>
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
