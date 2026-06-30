import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import Navbar from '../../components/Navbar/Navbar';
import FloatingContact from '../../components/FloatingContact/FloatingContact';
import ContactSection from '../Home/components/ContactSection';
import { BRAND_NAME } from '../../constants/brand';
import teamPhoto from '../../assets/teamPhoto.png';

const HERO_BG =
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=85';

/* full-bleed luxury interior used in the stats showcase */
const SHOWCASE_BG =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85';

const SHOWCASE_STATS = [
  {
    value: 'NPS 9.8/10',
    label: 'Trusted by premium brands and discerning clients',
  },
  { value: '2000 m²', label: 'Of our own manufacturing facility' },
];

/* ── Benefit card data ────────────────────────────────────── */
const BENEFITS = [
  {
    title: 'Predictable outcome',
    body: 'BIM models, visualizations, detailed documentation, transparent stages, construction management',
    icon: 'star',
  },
  {
    title: 'Saving your time',
    body: '98% on-time delivery, detailed schedules, quality control & independent supervision',
    icon: 'hourglass',
  },
  {
    title: 'Awe-inspiring homes and spaces',
    body: `The signature ${BRAND_NAME} aesthetic, realized through our own manufacturing of bespoke components`,
    icon: 'pillar',
  },
  {
    title: 'Absolute confidentiality',
    body: 'Confidential project processes, NDAs, access control, and personal oversight',
    icon: 'shield',
  },
  {
    title: 'Increase in property value',
    body: `The strength of the ${BRAND_NAME} brand enhances your property's worth and its appeal to investors`,
    icon: 'coin',
  },
  {
    title: 'We handle complex challenges',
    body: 'Our team of 200+ specialists, combined with in-house design and production departments, a stable process, and clear role definitions, enables us to solve the most intricate problems',
    icon: 'badge',
  },
];

/* ── Benefit card icons ───────────────────────────────────── */
function BenefitIcon({ type }) {
  const s = {
    stroke: '#d4873a',
    fill: 'none',
    strokeWidth: '1.4',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  switch (type) {
    case 'star':
      return (
        <svg viewBox="0 0 48 48" width={54} height={54}>
          <path
            {...s}
            d="M24 6l4.9 9.9 10.9 1.6-7.9 7.7 1.9 10.9-9.8-5.2-9.8 5.2 1.9-10.9-7.9-7.7 10.9-1.6Z"
          />
          <path
            {...s}
            strokeOpacity="0.35"
            fill="rgba(212,135,58,0.1)"
            d="M24 13l3 6 6.7 1-4.8 4.7 1.2 6.6-6.1-3.2-6.1 3.2 1.2-6.6-4.8-4.7 6.7-1Z"
          />
        </svg>
      );
    case 'hourglass':
      return (
        <svg viewBox="0 0 48 48" width={54} height={54}>
          <path {...s} d="M9 7h30M9 41h30" />
          <path {...s} d="M13 7c0 0 6 10 11 17C19 31 13 41 13 41" />
          <path {...s} d="M35 7c0 0-6 10-11 17 5 7 11 17 11 17" />
          <path {...s} strokeOpacity="0.45" d="M19 33h10" />
        </svg>
      );
    case 'pillar':
      return (
        <svg viewBox="0 0 48 48" width={54} height={54}>
          <rect {...s} x="5" y="5" width="38" height="6" rx="1.5" />
          <rect {...s} x="5" y="37" width="38" height="6" rx="1.5" />
          <rect {...s} x="11" y="11" width="5" height="26" rx="1" />
          <rect {...s} x="21.5" y="11" width="5" height="26" rx="1" />
          <rect {...s} x="32" y="11" width="5" height="26" rx="1" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 48 48" width={54} height={54}>
          <path
            {...s}
            d="M24 4l18 7v13c0 10.5-8 19.6-18 22-10-2.4-18-11.5-18-22V11Z"
          />
          <polyline {...s} strokeWidth="1.8" points="15,24 22,31 33,18" />
        </svg>
      );
    case 'coin':
      return (
        <svg viewBox="0 0 48 48" width={54} height={54}>
          <circle {...s} cx="24" cy="24" r="18" />
          <circle {...s} cx="24" cy="24" r="12" />
          <path
            {...s}
            d="M24 16v2M24 30v2M21 21.5c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 2.5-3 2.5-3 1.3-3 3 1.3 3 3 3 3-1.3 3-3"
          />
        </svg>
      );
    case 'badge':
      return (
        <svg viewBox="0 0 48 48" width={54} height={54}>
          <path
            {...s}
            d="M24 4l4 8 9 1.3-6.5 6.3 1.5 9-8-4.2-8 4.2 1.5-9L11 13.3 20 12Z"
          />
          <circle {...s} cx="24" cy="35" r="9" />
          <line {...s} x1="19.5" y1="41.5" x2="24" y2="46" />
          <line {...s} x1="28.5" y1="41.5" x2="24" y2="46" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Service diagram icons ────────────────────────────────── */
function IconArchitecture({ cx, cy }) {
  return (
    <g
      stroke="#d4873a"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={cx} cy={cy} r={11} />
      <line x1={cx} y1={cy - 11} x2={cx} y2={cy - 6} />
      <line x1={cx} y1={cy + 6} x2={cx} y2={cy + 11} />
      <line x1={cx - 11} y1={cy} x2={cx - 6} y2={cy} />
      <line x1={cx + 6} y1={cy} x2={cx + 11} y2={cy} />
      <circle cx={cx} cy={cy} r={3} fill="#d4873a" />
    </g>
  );
}

function IconBIM({ cx, cy }) {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {[
        { dy: -6, op: 0.9 },
        { dy: 0, op: 0.65 },
        { dy: 6, op: 0.4 },
      ].map((l, i) => (
        <path
          key={i}
          d={`M${cx - 11} ${cy + l.dy} L${cx} ${cy + l.dy - 4} L${cx + 11} ${cy + l.dy} L${cx} ${cy + l.dy + 4} Z`}
          fill={`rgba(212,135,58,${l.op * 0.22})`}
          stroke="#d4873a"
          strokeOpacity={l.op}
          strokeWidth="1.3"
        />
      ))}
    </g>
  );
}

function IconConstruction({ cx, cy }) {
  return (
    <g
      stroke="#d4873a"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1={cx} y1={cy - 13} x2={cx} y2={cy + 13} />
      <line x1={cx - 9} y1={cy - 13} x2={cx + 12} y2={cy - 13} />
      <line x1={cx} y1={cy - 13} x2={cx - 9} y2={cy - 2} />
      <line x1={cx + 12} y1={cy - 13} x2={cx + 12} y2={cy - 6} />
      <circle cx={cx + 12} cy={cy - 5} r={2} fill="#d4873a" />
    </g>
  );
}

function IconProcurement({ cx, cy }) {
  return (
    <g
      stroke="#d4873a"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={`M${cx - 11} ${cy + 7} L${cx - 11} ${cy - 1} L${cx} ${cy - 12} L${cx + 11} ${cy - 1} L${cx + 11} ${cy + 7} Z`}
      />
      <rect x={cx - 5} y={cy - 1} width={10} height={8} rx={1} />
    </g>
  );
}

function IconInteriors({ cx, cy }) {
  return (
    <g
      stroke="#d4873a"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={`M${cx - 10} ${cy - 4} Q${cx - 10} ${cy - 12} ${cx} ${cy - 12} Q${cx + 10} ${cy - 12} ${cx + 10} ${cy - 4}`}
      />
      <rect x={cx - 10} y={cy - 4} width={20} height={6} rx={2} />
      <line x1={cx - 7} y1={cy + 2} x2={cx - 7} y2={cy + 11} />
      <line x1={cx + 7} y1={cy + 2} x2={cx + 7} y2={cy + 11} />
    </g>
  );
}

function IconSupervision({ cx, cy }) {
  return (
    <g
      stroke="#d4873a"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={cx} cy={cy - 7} r={5} />
      <path
        d={`M${cx - 9} ${cy + 11} Q${cx - 9} ${cy + 2} ${cx} ${cy + 2} Q${cx + 9} ${cy + 2} ${cx + 9} ${cy + 11}`}
      />
      <line x1={cx - 4} y1={cy - 3} x2={cx + 4} y2={cy - 3} />
    </g>
  );
}

function IconManufacturing({ cx, cy }) {
  return (
    <g
      stroke="#d4873a"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={cx - 11} y={cy - 3} width={22} height={13} rx={1} />
      <path
        d={`M${cx - 11} ${cy - 3} L${cx - 11} ${cy - 9} L${cx - 3} ${cy - 3}`}
      />
      <path
        d={`M${cx - 3} ${cy - 3} L${cx - 3} ${cy - 9} L${cx + 5} ${cy - 3}`}
      />
      <line x1={cx - 11} y1={cy + 3} x2={cx + 11} y2={cy + 3} />
    </g>
  );
}

const ICON_MAP = {
  architecture: IconArchitecture,
  bim: IconBIM,
  construction: IconConstruction,
  procurement: IconProcurement,
  interiors: IconInteriors,
  supervision: IconSupervision,
  manufacturing: IconManufacturing,
};

/* ── Reveal primitives — play once, smoothly, when scrolled into view ── */
const EASE = [0.22, 1, 0.36, 1];

function RevealCircle({ inView, delay = 0, duration = 0.6, fromScale = 0.82, ...rest }) {
  return (
    <motion.circle
      {...rest}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      initial={{ opacity: 0, scale: fromScale }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, ease: EASE, delay }}
    />
  );
}

function RevealLine({ inView, delay = 0, duration = 0.5, ...rest }) {
  return (
    <motion.line
      {...rest}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration, ease: 'easeInOut', delay }}
    />
  );
}

function RevealGroup({
  inView, delay = 0, duration = 0.55,
  fromScale = 1, fromX = 0, spring = false,
  originX, originY, filter, children,
}) {
  const useExplicit = originX != null;
  return (
    <motion.g
      filter={filter}
      style={{
        transformBox: useExplicit ? 'view-box' : 'fill-box',
        transformOrigin: useExplicit ? `${originX}px ${originY}px` : 'center',
      }}
      initial={{ opacity: 0, scale: fromScale, x: fromX }}
      animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
      transition={
        spring
          ? { type: 'spring', stiffness: 220, damping: 18, delay }
          : { duration, ease: EASE, delay }
      }
    >
      {children}
    </motion.g>
  );
}

/* ── Ecosystem SVG diagram ────────────────────────────────── */
function EcosystemDiagram() {
  /*
   * Reference layout: the "Personal expert" sits at the TOP of the orb and
   * every service flows out from below it. The orb is lit like a torch —
   * bright orange near the top (around the expert) fading to near-black at
   * the bottom & outer edges. Each ring carries its own top→bottom gradient.
   */
  const CX = 550;
  const PE_CY = 205;
  const PE_R = 76;
  const SP_CY = 345; /* orb (rings) centre — used by the torch bloom */
  const W = 1100;
  const H = 720;

  /* outermost → innermost; each a vertical gradient: bright top edge →
     orange body → dark base. Inner rings are brighter, giving the layered,
     lit-from-above "stacked bowls" look. */
  const rings = [
    {
      r: 290,
      cy: 415,
      top: '#4d3825',
      mid: '#3d2a1c',
      bot: '#22170f',
    },
    {
      r: 255,
      cy: 385, // ↑ 7px
      top: '#72502a',
      mid: '#65431f',
      bot: '#352315',
    },
    {
      r: 220,
      cy: 350, // ↑ 19px
      top: '#956125',
      mid: '#87561d',
      bot: '#4d3317',
    },
    {
      r: 185,
      cy: 315, // ↑ 29px
      top: '#b7772a',
      mid: '#a6691d',
      bot: '#603e19',
    },
    {
      r: 150,
      cy: 280, // ↑ 35px
      top: '#cf8527',
      mid: '#bd741b',
      bot: '#73481a',
    },
    {
      r: 115,
      cy: 245, // ↑ 33px
      top: '#e38e26',
      mid: '#d5801c',
      bot: '#89551c',
    },
    {
      r: 82,
      cy: 210, // ↑ 25px
      top: '#ef9928',
      mid: '#e58d1d',
      bot: '#a16320',
    },
  ];

  const CARD_H = 54;
  const CARD_W = 248;
  const ICON_R = 24;
  const L_X = 14;
  const R_X = W - 14 - CARD_W; /* 838 */
  const leftIconCX = L_X + CARD_W - ICON_R - 4; /* 234 */
  const rightIconCX = R_X + ICON_R + 4; /* 866 */

  /* 7 evenly-spaced nodes down the central axis, all BELOW the expert */
  const D0 = 320,
    DG = 60;
  const right = [
    { label: 'Architecture', y: D0 + DG * 0, icon: 'architecture' },
    { label: 'BIM engineering', y: D0 + DG * 2, icon: 'bim' },
    { label: 'Construction management', y: D0 + DG * 4, icon: 'construction' },
    { label: 'Procurement', y: D0 + DG * 6, icon: 'procurement' },
  ];
  const left = [
    { label: 'Interiors', y: D0 + DG * 1, icon: 'interiors' },
    { label: 'Design supervision', y: D0 + DG * 3, icon: 'supervision' },
    { label: 'Manufacturing 2000 m²', y: D0 + DG * 5, icon: 'manufacturing' },
  ];
  const dots = [...right, ...left].map((n) => n.y).sort((a, b) => a - b);

  /* play the whole sequence once, smoothly, when the diagram enters view */
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* per-ring vertical gradient → bright top edge fading to a dark base */}
        {rings.map((r, i) => (
          <linearGradient key={i} id={`ring${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={r.top} />
            <stop offset="52%" stopColor={r.mid} />
            <stop offset="100%" stopColor={r.bot} />
          </linearGradient>
        ))}

        {/* faint warm bloom just beneath the expert (subtle, not a hotspot) */}
        <radialGradient id="torch" cx="50%" cy="18%" r="26%">
          <stop offset="0%" stopColor="rgba(255,186,92,0.16)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        <filter id="cardShadow" x="-20%" y="-60%" width="140%" height="220%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="8"
            floodColor="#000"
            floodOpacity="0.55"
          />
        </filter>
        <filter id="ringShadow" x="-12%" y="-12%" width="124%" height="124%">
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="24"
            floodColor="#000"
            floodOpacity="0.5"
          />
        </filter>
        <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="peGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width={W} height={H} fill="#111110" />

      {/* concentric, torch-lit rings — grow in, outer → inner */}
      {rings.map((ring, i) => (
        <RevealCircle
          key={i}
          inView={inView}
          delay={i * 0.08}
          duration={0.6}
          fromScale={0.82}
          cx={CX}
          cy={ring.cy}
          r={ring.r}
          fill={`url(#ring${i})`}
          filter="url(#ringShadow)"
        />
      ))}
      <RevealCircle
        inView={inView}
        delay={0.5}
        duration={0.7}
        fromScale={1}
        cx={CX}
        cy={SP_CY}
        r={285}
        fill="url(#torch)"
      />

      {/* dashed connectors — draw outward from the central axis */}
      {left.map((n, i) => (
        <RevealLine
          key={`ll${i}`}
          inView={inView}
          delay={0.7 + i * 0.07}
          x1={CX}
          y1={n.y}
          x2={L_X + CARD_W}
          y2={n.y}
          stroke="rgba(255,255,255,0.32)"
          strokeDasharray="9 9"
          strokeWidth="1.3"
        />
      ))}
      {right.map((n, i) => (
        <RevealLine
          key={`rl${i}`}
          inView={inView}
          delay={0.7 + i * 0.07}
          x1={CX}
          y1={n.y}
          x2={R_X}
          y2={n.y}
          stroke="rgba(255,255,255,0.32)"
          strokeDasharray="9 9"
          strokeWidth="1.3"
        />
      ))}

      {/* central dots — pop in along the axis */}
      {dots.map((y, i) => (
        <RevealGroup
          key={`dot${i}`}
          inView={inView}
          delay={0.6 + i * 0.06}
          spring
          fromScale={0}
          filter="url(#dotGlow)"
        >
          <circle cx={CX} cy={y} r={11} fill="rgba(255,255,255,0.12)" />
          <circle cx={CX} cy={y} r={4.5} fill="rgba(255,255,255,0.95)" />
        </RevealGroup>
      ))}

      {/* left cards (text left · icon right) — slide in from the left */}
      {left.map((n, i) => {
        const Icon = ICON_MAP[n.icon];
        return (
          <RevealGroup
            key={`lc${i}`}
            inView={inView}
            delay={0.85 + i * 0.08}
            fromX={-40}
            filter="url(#cardShadow)"
          >
            <rect
              x={L_X}
              y={n.y - CARD_H / 2}
              width={CARD_W}
              height={CARD_H}
              rx={CARD_H / 2}
              fill="#181818"
              stroke="rgba(212,135,58,0.22)"
              strokeWidth="1"
            />
            <text
              x={L_X + 22}
              y={n.y}
              dominantBaseline="middle"
              fill="white"
              fontSize="13"
              fontWeight="300"
              letterSpacing="0.3"
            >
              {n.label}
            </text>
            <circle cx={leftIconCX} cy={n.y} r={ICON_R} fill="#242424" />
            {Icon && <Icon cx={leftIconCX} cy={n.y} />}
          </RevealGroup>
        );
      })}

      {/* right cards (icon left · text right) — slide in from the right */}
      {right.map((n, i) => {
        const Icon = ICON_MAP[n.icon];
        return (
          <RevealGroup
            key={`rc${i}`}
            inView={inView}
            delay={0.85 + i * 0.08}
            fromX={40}
            filter="url(#cardShadow)"
          >
            <rect
              x={R_X}
              y={n.y - CARD_H / 2}
              width={CARD_W}
              height={CARD_H}
              rx={CARD_H / 2}
              fill="#181818"
              stroke="rgba(212,135,58,0.22)"
              strokeWidth="1"
            />
            <circle cx={rightIconCX} cy={n.y} r={ICON_R} fill="#242424" />
            {Icon && <Icon cx={rightIconCX} cy={n.y} />}
            <text
              x={rightIconCX + ICON_R + 14}
              y={n.y}
              dominantBaseline="middle"
              fill="white"
              fontSize="13"
              fontWeight="300"
              letterSpacing="0.3"
            >
              {n.label}
            </text>
          </RevealGroup>
        );
      })}

      {/* personal-expert circle at the top of the orb — pops in */}
      <RevealGroup
        inView={inView}
        delay={0.4}
        spring
        fromScale={0.4}
        originX={CX}
        originY={PE_CY}
      >
        <g filter="url(#peGlow)">
          <circle
            cx={CX}
            cy={PE_CY}
            r={PE_R + 4}
            fill="none"
            stroke="#d58a32"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <circle
            cx={CX}
            cy={PE_CY}
            r={PE_R}
            fill="#0d0d0d"
            filter="url(#cardShadow)"
          />
        </g>
        <g
          transform={`translate(${CX}, ${PE_CY - 6}) scale(1.4) translate(-12,-14)`}
          stroke="#d4873a"
          fill="none"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </g>
        <text
          x={CX}
          y={PE_CY + 42}
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="300"
          letterSpacing="0.5"
        >
          Personal expert
        </text>
      </RevealGroup>
    </svg>
  );
}

/* ── Benefit cards section ────────────────────────────────── */
function BenefitCards({ inView }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
      {BENEFITS.map((b, i) => (
        <motion.div
          key={i}
          className="relative flex items-start justify-between p-7 lg:p-8 rounded-2xl
                     border border-[#251806] bg-[#161310]"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.07 * i,
          }}
        >
          <div className="flex-1 pr-6">
            <p className="text-[10px] tracking-[2.5px] uppercase text-[#d4873a] mb-3 font-light">
              {b.title}
            </p>
            <p className="text-[13px] leading-[1.82] text-white/50 font-light">
              {b.body}
            </p>
          </div>
          <div className="flex-shrink-0 mt-1 opacity-90">
            <BenefitIcon type={b.icon} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Showcase image + stats (image 1) ────────────────────── */
function ShowcaseStatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#111110] px-6 lg:px-12 py-10 lg:py-14" ref={ref}>
      <motion.div
        className="relative mx-auto max-w-[1750px] min-h-[560px] lg:min-h-[640px] overflow-hidden rounded-[34px]"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={SHOWCASE_BG}
          alt={`${BRAND_NAME} interior`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* readability gradient — darker toward bottom-right */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,6,4,0.35)_0%,rgba(8,6,4,0.12)_45%,rgba(8,6,4,0.72)_100%)]" />

        {/* brand monogram — top left */}
        <div className="absolute top-8 left-8 lg:top-10 lg:left-12 z-10 flex items-end gap-1 select-none">
          <span
            className="font-light text-white leading-none"
            style={{ fontSize: 'clamp(34px,4vw,56px)' }}
          >
            {BRAND_NAME.charAt(0)}
          </span>
          <span className="text-[13px] font-light text-white/70 mb-1">
            {BRAND_NAME.split(' ')[1] ?? ''}
          </span>
        </div>

        {/* stats — bottom right */}
        <div className="absolute bottom-10 right-8 lg:bottom-14 lg:right-16 z-10 flex flex-col gap-7 items-start">
          {SHOWCASE_STATS.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.15,
              }}
            >
              <p
                className="font-light leading-none text-white tracking-[1px]"
                style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}
              >
                {s.value}
              </p>
              <p className="mt-2 max-w-[280px] text-[12px] font-light uppercase tracking-[1.5px] leading-[1.5] text-white/55">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ── Partnership / retention (image 2) ───────────────────── */
function PartnershipSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#111110] px-6 lg:px-12 py-10 lg:py-14" ref={ref}>
      <div className="mx-auto max-w-[1750px] overflow-hidden rounded-[34px] border border-white/[0.04] bg-[#161412]">
        <div className="grid grid-cols-1 items-center gap-8 p-7 sm:p-10 lg:gap-10 lg:p-14 lg:grid-cols-[46%_54%]">
          {/* LEFT — copy */}
          <div className="flex flex-col">
            <motion.h2
              className="mb-5 font-light uppercase leading-[1.25] tracking-[1px] text-[#f0ebe4]"
              style={{ fontSize: 'clamp(18px, 1.9vw, 28px)' }}
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              Partnering with{' '}
              <span className="text-[#d4873a]">{BRAND_NAME}</span> is an
              investment in a lasting collaboration and enduring confidence
            </motion.h2>

            <motion.p
              className="mb-8 max-w-[420px] text-[13px] font-light leading-[1.7] text-white/45"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.12,
              }}
            >
              Our team guarantees support after project completion — we stay
              with our customers and continue our partnership
            </motion.p>

            <motion.p
              className="mb-1 font-light leading-none text-[#d4873a] tracking-[1px]"
              style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              8 out of 10
            </motion.p>
            <motion.p
              className="mb-9 text-[13px] font-light leading-[1.6] text-white/50"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.28,
              }}
            >
              customers return to us for their second and third projects
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#d4873a] px-8 py-4 text-[12px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#e0974d]"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.36,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact a manager
            </motion.a>
          </div>

          {/* RIGHT — team photo */}
          <motion.div
            className="relative h-full min-h-[300px] lg:min-h-[420px] overflow-hidden rounded-[24px]"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={teamPhoto}
              alt={`${BRAND_NAME} team`}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile / tablet ecosystem (stacked, readable) ───────── */
const MOBILE_SERVICES = [
  { label: 'Architecture',            icon: 'architecture' },
  { label: 'Interiors',               icon: 'interiors'    },
  { label: 'BIM engineering',         icon: 'bim'          },
  { label: 'Design supervision',      icon: 'supervision'  },
  { label: 'Construction management', icon: 'construction' },
  { label: 'Manufacturing 2000 m²',   icon: 'manufacturing'},
  { label: 'Procurement',             icon: 'procurement'  },
];

function MobileEcosystem({ inView }) {
  return (
    <div className="lg:hidden">
      {/* gradient orb with the personal expert on top */}
      <motion.div
        className="relative mx-auto mb-10 h-[240px] w-[240px] max-[380px]:h-[200px] max-[380px]:w-[200px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 34%, #f0a038 0%, #c9781f 28%, #8a5018 48%, #4a2a12 72%, #160b04 100%)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.55)',
          }}
        />
        <div
          className="absolute left-1/2 top-3 flex h-[92px] w-[92px] -translate-x-1/2 flex-col items-center justify-center rounded-full border border-[#d58a32]/50 bg-[#0d0d0d] max-[380px]:h-[78px] max-[380px]:w-[78px]"
          style={{ boxShadow: '0 0 26px rgba(213,138,50,0.3)' }}
        >
          <svg
            width="26" height="26" viewBox="0 0 24 24"
            stroke="#d4873a" fill="none" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="mt-1 text-[9.5px] font-light tracking-[0.5px] text-white">
            Personal expert
          </span>
        </div>
      </motion.div>

      {/* services — 1 column on phones, 2 on larger phones / tablets */}
      <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
        {MOBILE_SERVICES.map((s, i) => {
          const Icon = ICON_MAP[s.icon];
          return (
            <motion.div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl border border-[#d4873a]/15 bg-[#181818] px-4 py-3.5"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#242424]">
                <svg width="44" height="44" viewBox="0 0 48 48">
                  {Icon && <Icon cx={24} cy={24} />}
                </svg>
              </span>
              <span className="text-[14px] font-light text-white">{s.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ServicesPage() {
  const ecosRef = useRef(null);
  const ecosInView = useInView(ecosRef, { once: true, margin: '-80px' });
  const benefitsRef = useRef(null);
  const benefInView = useInView(benefitsRef, { once: true, margin: '-60px' });

  return (
    <div className="bg-[#111110] text-white">
      <Navbar />

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden isolate">
        <img
          src={HERO_BG}
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,4,0.85)_0%,rgba(8,6,4,0.28)_55%,rgba(8,6,4,0.52)_100%)]" />
        <div
          className="absolute inset-x-0 bottom-0 h-[42%]"
          style={{
            background: 'linear-gradient(to bottom,transparent,#111110)',
          }}
        />

        <div className="relative z-10 px-10 lg:px-20 pt-[130px]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-[2px] uppercase font-light transition-colors hover:text-white/70"
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M11 4H1M1 4L4 1M1 4L4 7"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Home
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 px-10 lg:px-20 pb-16 max-w-[680px] z-10">
          <motion.h1
            className="mb-5 font-light uppercase leading-[1.15] tracking-[1px] text-[#f0ebe4]"
            style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            Architectural design and interior design services by{' '}
            <span className="text-[#d4873a]">{BRAND_NAME}</span>
          </motion.h1>
          <motion.p
            className="text-[13px] font-light leading-[1.8] text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.38,
            }}
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

      {/* ══ ECOSYSTEM ═══════════════════════════════════════ */}
      <section
        ref={ecosRef}
        className="bg-[#111110] px-6 lg:px-16 pt-16 pb-8 overflow-hidden"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-[2px] uppercase font-light mb-12 transition-colors hover:text-white/70"
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M11 4H1M1 4L4 1M1 4L4 7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Home
        </Link>

        <motion.h2
          className="text-center mb-4 font-light uppercase leading-[1.2] tracking-[1px] text-[#f0ebe4]"
          style={{ fontSize: 'clamp(18px, 2vw, 30px)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={ecosInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Your <span className="text-[#d4873a]">project's success,</span> built
          on our complete ecosystem
        </motion.h2>

        {/* Diagram — full SVG on desktop, stacked cards on tablet/mobile */}
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={ecosInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="hidden lg:block"
          >
            <EcosystemDiagram />
          </motion.div>

          <MobileEcosystem inView={ecosInView} />
        </div>
      </section>

      {/* ══ BENEFITS ════════════════════════════════════════ */}
      <section
        ref={benefitsRef}
        className="bg-[#111110] px-6 lg:px-16 py-16 lg:py-20"
      >
        <div className="max-w-[1100px] mx-auto">
          <BenefitCards inView={benefInView} />
        </div>
      </section>

      {/* ══ SHOWCASE STATS (image 1) ════════════════════════ */}
      <ShowcaseStatsSection />

      {/* ══ PARTNERSHIP (image 2) ═══════════════════════════ */}
      <PartnershipSection />

      {/* ══ CONTACT FORM (image 3 — reused component) ═══════ */}
      <ContactSection />

      <FloatingContact />
    </div>
  );
}
