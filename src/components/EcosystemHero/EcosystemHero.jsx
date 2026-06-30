import { motion } from 'motion/react';

/* ─────────────────────────────────────────────────────────────
   Data — easy to edit / extend
   ───────────────────────────────────────────────────────────── */
const NAV_ITEMS = ['О НАС', 'ПОРТФОЛИО', 'КОНТАКТЫ', 'УСЛУГИ'];

// Concentric ring radii, outermost → innermost.
// Each ring is filled with the same shared gradient so their
// stacked rims form a top-lit dome.
const RINGS = [295, 272, 248, 222, 195, 166, 134, 98, 56];

// y-offset (from ring center) for each right-side dashed connector.
// The dot is placed where a horizontal line at this y intersects
// the chosen ring's right edge.
const CONNECTORS = [
  { ring: 195, dy: -110 },
  { ring: 222, dy:  -55 },
  { ring: 248, dy:    5 },
  { ring: 272, dy:   65 },
  { ring: 272, dy:  125 },
  { ring: 272, dy:  185 },
  { ring: 295, dy:  240 },
];

/* ─────────────────────────────────────────────────────────────
   Inline 3D-styled "people" glyph for the Personal expert badge
   ───────────────────────────────────────────────────────────── */
function PeopleGlyph({ size = 44 }) {
  return (
    <svg viewBox="0 0 48 36" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="peopleBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#5a5a5e" />
          <stop offset="55%" stopColor="#2a2a2c" />
          <stop offset="100%" stopColor="#0e0e10" />
        </linearGradient>
        <linearGradient id="peopleEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f4a23d" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f4a23d" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* back-left figure */}
      <g fill="url(#peopleBody)">
        <circle cx="13" cy="9" r="5.4" />
        <path d="M3 33c0-5.5 4.5-9.5 10-9.5s10 4 10 9.5v3H3v-3z" />
      </g>
      {/* center figure (largest) */}
      <g fill="url(#peopleBody)">
        <circle cx="24" cy="7.5" r="6.2" />
        <path d="M12 34c0-6.3 5.2-11 12-11s12 4.7 12 11v2H12v-2z" />
      </g>
      {/* back-right figure */}
      <g fill="url(#peopleBody)" opacity="0.92">
        <circle cx="35" cy="9.5" r="5" />
        <path d="M26 33.5c0-5 4.2-9 9-9s9 4 9 9v2.5H26v-2.5z" />
      </g>
      {/* warm rim-light along the tops */}
      <path
        d="M7 8 a6 6 0 0 1 12 0 M18 7 a6.5 6.5 0 0 1 13 0 M30 8 a5.2 5.2 0 0 1 10 0"
        stroke="url(#peopleEdge)"
        strokeWidth="0.9"
        fill="none"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */
const halfChord = (r, dy) => Math.sqrt(Math.max(0, r * r - dy * dy));

/* ─────────────────────────────────────────────────────────────
   Main component
   ───────────────────────────────────────────────────────────── */
export default function EcosystemHero() {
  // SVG viewBox geometry — everything below is expressed in these units,
  // so the whole diagram scales as one piece on any screen.
  const W = 720;
  const H = 760;
  const CX = W / 2;          // ring center x
  const CY = 380;            // ring center y
  const OUTER_R = RINGS[0];  // 295

  // Personal-expert badge sits at the top, partly overlapping the sphere
  const PEX = CX;
  const PEY = CY - 270;
  const PER = 78;

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, #1a1714 0%, #0e0c0a 55%, #060504 100%)',
      }}
    >
      {/* ── Top navigation ─────────────────────────────────── */}
      <nav className="relative z-10 flex justify-center pt-7 sm:pt-9">
        <ul className="flex items-center gap-6 sm:gap-12 text-[11px] sm:text-[12px] tracking-[2.5px] font-light text-white/75">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="relative py-2 transition-colors duration-300 hover:text-[#f4a23d] focus:outline-none focus-visible:text-[#f4a23d]"
              >
                {item}
                <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[#f4a23d] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Diagram ────────────────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-[760px] px-4 pt-2 pb-10 sm:pb-16">
        <motion.svg
          viewBox={`0 0 ${W} ${H}`}
          className="block w-full h-auto"
          style={{ overflow: 'visible' }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <defs>
            {/* Top-lit dome gradient applied to every ring */}
            <linearGradient
              id="ringDome"
              gradientUnits="userSpaceOnUse"
              x1={CX} y1={CY - OUTER_R}
              x2={CX} y2={CY + OUTER_R}
            >
              <stop offset="0%"   stopColor="#f4a23d" />
              <stop offset="16%"  stopColor="#e89234" />
              <stop offset="36%"  stopColor="#c4762a" />
              <stop offset="58%"  stopColor="#8a4f17" />
              <stop offset="80%"  stopColor="#3d1f06" />
              <stop offset="100%" stopColor="#120902" />
            </linearGradient>

            {/* Personal-expert badge gradients + glow */}
            <radialGradient id="badgeFill" cx="50%" cy="40%" r="65%">
              <stop offset="0%"   stopColor="#1a1714" />
              <stop offset="70%"  stopColor="#0e0c0a" />
              <stop offset="100%" stopColor="#060504" />
            </radialGradient>
            <radialGradient id="badgeGlow" cx="50%" cy="60%" r="65%">
              <stop offset="0%"   stopColor="#f4a23d" stopOpacity="0.55" />
              <stop offset="60%"  stopColor="#f4a23d" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#f4a23d" stopOpacity="0" />
            </radialGradient>

            {/* Soft inner shadow on each ring to add depth */}
            <filter id="ringShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="2" result="off" />
              <feComposite
                in="off"
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1" k3="1"
                result="inset"
              />
              <feColorMatrix
                in="inset"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0.55 0"
              />
            </filter>
          </defs>

          {/* ─ Concentric rings ─ */}
          {RINGS.map((r) => (
            <motion.circle
              key={r}
              cx={CX} cy={CY} r={r}
              fill="url(#ringDome)"
              filter="url(#ringShadow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (OUTER_R - r) * 0.004 }}
            />
          ))}

          {/* ─ Right-side dashed connectors with pulsing nodes ─ */}
          {CONNECTORS.map(({ ring, dy }, i) => {
            const dotX = CX + halfChord(ring, dy);
            const dotY = CY + dy;
            return (
              <g key={`${ring}-${dy}-${i}`}>
                <motion.line
                  x1={dotX} y1={dotY} x2={W + 60} y2={dotY}
                  stroke="rgba(255,255,255,0.32)"
                  strokeWidth="1"
                  strokeDasharray="5 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.08 }}
                />
                <motion.circle
                  cx={dotX} cy={dotY} r={6}
                  fill="rgba(255,255,255,0.92)"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1.15, 1],
                    opacity: [0, 1, 0.9],
                  }}
                  transition={{ duration: 1.2, delay: 0.55 + i * 0.08 }}
                />
                <circle
                  cx={dotX} cy={dotY} r={3}
                  fill="rgba(244,162,61,0.85)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2.6s"
                    repeatCount="indefinite"
                    begin={`${i * 0.25}s`}
                  />
                </circle>
              </g>
            );
          })}

          {/* ─ Personal-expert badge ─ */}
          {/* outer warm glow */}
          <circle cx={PEX} cy={PEY + 8} r={PER + 22} fill="url(#badgeGlow)" />
          {/* dark disc */}
          <circle
            cx={PEX} cy={PEY} r={PER}
            fill="url(#badgeFill)"
            stroke="rgba(244,162,61,0.18)"
            strokeWidth="1"
          />
          {/* subtle top highlight */}
          <ellipse
            cx={PEX} cy={PEY - PER * 0.55}
            rx={PER * 0.7} ry={PER * 0.18}
            fill="rgba(255,255,255,0.06)"
          />

          {/* icon */}
          <foreignObject
            x={PEX - 26} y={PEY - 36}
            width={52} height={42}
          >
            <div className="flex h-full w-full items-center justify-center">
              <PeopleGlyph size={48} />
            </div>
          </foreignObject>

          {/* label */}
          <text
            x={PEX} y={PEY + 28}
            textAnchor="middle"
            fill="rgba(255,255,255,0.92)"
            fontSize="15"
            fontWeight="300"
            letterSpacing="0.3"
            style={{ fontFamily: 'inherit' }}
          >
            Personal expert
          </text>
        </motion.svg>
      </div>
    </section>
  );
}
