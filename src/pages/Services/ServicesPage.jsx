import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import Navbar from '../../components/Navbar/Navbar';
import FloatingContact from '../../components/FloatingContact/FloatingContact';
import { BRAND_NAME } from '../../constants/brand';

const HERO_BG =
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=85';

/* ── SVG icons ───────────────────────────────────────────── */
const Ico = ({ d, ...rest }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    width={18} height={18} {...rest}>
    {d}
  </svg>
);

const ICONS = {
  people:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  sofa:     <Ico d={<><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7H2v-7z"/><path d="M4 18v2M20 18v2"/></>}/>,
  hardhat:  <Ico d={<><path d="M12 2v5"/><path d="M5.45 9A7 7 0 0 1 19 9"/><path d="M3 18a9 9 0 0 1 18 0"/><path d="M2 18h20"/></>}/>,
  factory:  <Ico d={<><path d="M2 20h20"/><path d="M8 20V8l-5 3V8"/><path d="M14 20V4l8 4v12"/></>}/>,
  compass:  <Ico d={<><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>}/>,
  layers:   <Ico d={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>}/>,
  crane:    <Ico d={<><path d="M2 20h20"/><path d="M7 20V8"/><path d="M17 20V8"/><path d="M7 8h10"/><path d="M4 8l8-4 8 4"/><circle cx="12" cy="14" r="1.5"/></>}/>,
  box:      <Ico d={<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>}/>,
};

/* ── Ecosystem diagram ───────────────────────────────────── */
// Concentric rings: outermost → innermost
const RINGS = [
  { r: 295, color: '#c4832e' },
  { r: 272, color: '#b0712a' },
  { r: 248, color: '#9a5f1e' },
  { r: 222, color: '#814d16' },
  { r: 195, color: '#6a3c10' },
  { r: 166, color: '#562c0c' },
  { r: 134, color: '#401e08' },
  { r: 98,  color: '#2c1205' },
  { r: 56,  color: '#111110' },  // center dark
];

const LEFT_ITEMS = [
  { label: 'Interiors',             icon: ICONS.sofa,    r: 195, dy: -72  },
  { label: 'Design supervision',    icon: ICONS.hardhat, r: 222, dy:  32  },
  { label: 'Manufacturing 2000 m²', icon: ICONS.factory, r: 248, dy: 130  },
];

const RIGHT_ITEMS = [
  { label: 'Architecture',            icon: ICONS.compass, r: 134, dy: -112, active: true },
  { label: 'BIM engineering',         icon: ICONS.layers,  r: 166, dy:  -22 },
  { label: 'Construction management', icon: ICONS.crane,   r: 195, dy:   78 },
  { label: 'FF&E Procurement',        icon: ICONS.box,     r: 222, dy:  168 },
];

function dot(r, dy) {
  return Math.sqrt(Math.max(0, r * r - dy * dy));
}

function EcosystemDiagram() {
  const CX = 440, CY = 308, W = 920, H = 618;
  const PILL_H = 44, PILL_W_L = 210, PILL_W_R = 240;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      style={{ maxHeight: 640, overflow: 'visible' }}
    >
      {/* ── Rings outermost → innermost ── */}
      {RINGS.map((ring) => (
        <circle key={ring.r} cx={CX} cy={CY} r={ring.r} fill={ring.color} />
      ))}

      {/* ── Center dark circle + icon ── */}
      <circle cx={CX} cy={CY} r={50} fill="#111110" />
      <foreignObject x={CX - 12} y={CY - 22} width={24} height={24}>
        <div className="text-white/75 flex items-center justify-center">
          {ICONS.people}
        </div>
      </foreignObject>
      <text x={CX} y={CY + 20} textAnchor="middle"
        fill="rgba(255,255,255,0.75)" fontSize="10.5" fontWeight="300" letterSpacing="0.4">
        Personal
      </text>
      <text x={CX} y={CY + 33} textAnchor="middle"
        fill="rgba(255,255,255,0.75)" fontSize="10.5" fontWeight="300" letterSpacing="0.4">
        expert
      </text>

      {/* ── LEFT items: text → icon → •----circle ── */}
      {LEFT_ITEMS.map((item) => {
        const dx   = dot(item.r, item.dy);
        const dotX = CX - dx;
        const dotY = CY + item.dy;
        const pillRight = dotX - 14;          // pill right edge
        const pillLeft  = pillRight - PILL_W_L;
        const pillTop   = dotY - PILL_H / 2;

        return (
          <g key={item.label}>
            {/* Dashed line: pill right edge → dot */}
            <line
              x1={pillRight} y1={dotY} x2={dotX} y2={dotY}
              stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="4 5"
            />
            {/* Dot on ring edge */}
            <circle cx={dotX} cy={dotY} r={4} fill="white" opacity="0.75" />

            {/* Pill: [text][icon] */}
            <foreignObject x={pillLeft} y={pillTop} width={PILL_W_L} height={PILL_H}>
              <div
                className="flex items-center justify-end gap-2.5 h-full pr-2 pl-3 rounded-xl"
                style={{ background: 'rgba(30,26,22,0.92)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-white/70 text-[12px] font-light whitespace-nowrap">
                  {item.label}
                </span>
                <div
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-white/65"
                  style={{ background: 'rgba(55,45,35,0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {item.icon}
                </div>
              </div>
            </foreignObject>
          </g>
        );
      })}

      {/* ── RIGHT items: circle----• → [icon][text] ── */}
      {RIGHT_ITEMS.map((item) => {
        const dx   = dot(item.r, item.dy);
        const dotX = CX + dx;
        const dotY = CY + item.dy;
        const pillLeft = dotX + 14;
        const pillTop  = dotY - PILL_H / 2;
        const isActive = item.active;

        return (
          <g key={item.label}>
            {/* Dashed line */}
            <line
              x1={dotX} y1={dotY} x2={pillLeft} y2={dotY}
              stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="4 5"
            />
            {/* Dot */}
            <circle cx={dotX} cy={dotY} r={4} fill="white" opacity="0.75" />

            {/* Pill: [icon][text] */}
            <foreignObject x={pillLeft} y={pillTop} width={PILL_W_R} height={PILL_H}>
              <div
                className="flex items-center gap-2.5 h-full pl-2 pr-4 rounded-xl"
                style={{
                  background: isActive
                    ? 'rgba(30,26,22,0.95)'
                    : 'rgba(26,22,18,0.88)',
                  border: isActive
                    ? '1px solid rgba(196,131,46,0.55)'
                    : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg,#d4873a,#9a5010)'
                      : 'rgba(55,45,35,0.9)',
                    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.65)',
                    boxShadow: isActive ? '0 0 14px rgba(196,131,46,0.3)' : 'none',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-[12px] font-light whitespace-nowrap leading-none"
                  style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.65)' }}
                >
                  {item.label}
                </span>
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function ServicesPage() {
  const ecosRef = useRef(null);
  const ecosInView = useInView(ecosRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#111110] text-white">
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden isolate">
        <img
          src={HERO_BG}
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,4,0.85)_0%,rgba(8,6,4,0.28)_55%,rgba(8,6,4,0.52)_100%)]" />
        <div
          className="absolute inset-x-0 bottom-0 h-[42%]"
          style={{ background: 'linear-gradient(to bottom,transparent,#111110)' }}
        />

        {/* Breadcrumb */}
        <div className="relative z-10 px-10 lg:px-20 pt-[130px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-[2px] uppercase font-light transition-colors hover:text-white/70">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M11 4H1M1 4L4 1M1 4L4 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </Link>
        </div>

        {/* Bottom-left copy */}
        <div className="absolute bottom-0 left-0 px-10 lg:px-20 pb-16 max-w-[680px] z-10">
          <motion.h1
            className="mb-5 font-light uppercase leading-[1.15] tracking-[1px] text-[#f0ebe4]"
            style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Architectural design and interior design services by{' '}
            <span className="text-[#d4873a]">{BRAND_NAME}</span>
          </motion.h1>

          <motion.p
            className="text-[13px] font-light leading-[1.8] text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          >
            We are an international architectural studio creating{' '}
            <span className="text-[#d4873a]">
              complex premium projects in the signature {BRAND_NAME} style
            </span>
            .<br />
            We unite architecture, interior design, manufacturing, and project
            management into a single turnkey ecosystem
          </motion.p>
        </div>
      </section>

      {/* ══ ECOSYSTEM ═════════════════════════════════════ */}
      <section ref={ecosRef} className="bg-[#111110] px-10 lg:px-16 py-16">

        {/* Breadcrumb */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-[2px] uppercase font-light mb-12 transition-colors hover:text-white/70">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M11 4H1M1 4L4 1M1 4L4 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Home
        </Link>

        {/* Heading */}
        <motion.h2
          className="text-center mb-12 font-light uppercase leading-[1.2] tracking-[1px] text-[#f0ebe4]"
          style={{ fontSize: 'clamp(18px, 2vw, 30px)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={ecosInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Your{' '}
          <span className="text-[#d4873a]">project's success,</span>{' '}
          built on our complete ecosystem
        </motion.h2>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={ecosInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="max-w-[960px] mx-auto"
        >
          <EcosystemDiagram />
        </motion.div>
      </section>

      <FloatingContact />
    </div>
  );
}
