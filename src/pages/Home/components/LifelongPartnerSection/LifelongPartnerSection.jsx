import { useRef } from 'react';
import { BRAND_NAME } from '../../../../constants/brand'
import { motion, useInView } from 'motion/react';

const serviceCards = [
  {
    title: 'Customary Premium Service',
    description: 'Enjoy your usual lifestyle while we bring your vision to life',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <polygon points="32,6 58,22 58,42 32,58 6,42 6,22" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <polygon points="32,14 50,24 50,40 32,50 14,40 14,24" stroke="#d4873a" strokeWidth="1" fill="rgba(212,135,58,0.08)" opacity="0.5"/>
        <line x1="6" y1="22" x2="32" y2="32" stroke="#d4873a" strokeWidth="1" opacity="0.4"/>
        <line x1="58" y1="22" x2="32" y2="32" stroke="#d4873a" strokeWidth="1" opacity="0.4"/>
        <line x1="32" y1="58" x2="32" y2="32" stroke="#d4873a" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Personal Architecture & Design Expert',
    description: `Your trusted advisor within ${BRAND_NAME}`,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="20" r="10" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.08)" opacity="0.8"/>
        <path d="M12 54c0-11 8.954-20 20-20s20 8.954 20 20" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <polygon points="32,6 34,13 41,13 35.5,17.5 37.5,24.5 32,20 26.5,24.5 28.5,17.5 23,13 30,13" stroke="#d4873a" strokeWidth="1" fill="rgba(212,135,58,0.2)" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Dedicated Approach',
    description: 'Enhanced service for key clients',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <polygon points="32,4 37,19 53,19 40,29 45,44 32,34 19,44 24,29 11,19 27,19" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.08)" opacity="0.8"/>
        <polygon points="18,30 21,39 13,39" stroke="#d4873a" strokeWidth="1" fill="rgba(212,135,58,0.1)" opacity="0.5"/>
        <polygon points="46,30 49,39 41,39" stroke="#d4873a" strokeWidth="1" fill="rgba(212,135,58,0.1)" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Bespoke Design',
    description: 'The project will be designed exclusively for you based on individual sketches',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="18" y="28" width="28" height="28" rx="3" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.08)" opacity="0.8"/>
        <path d="M22 28v-8a10 10 0 0 1 20 0v8" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <circle cx="32" cy="42" r="3" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.3)" opacity="0.8"/>
        <line x1="32" y1="45" x2="32" y2="50" stroke="#d4873a" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Tariffication',
    description: 'We will offer you the most favorable terms for your project',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="32" cy="20" rx="18" ry="6" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.1)" opacity="0.8"/>
        <path d="M14 20v8c0 3.314 8.059 6 18 6s18-2.686 18-6v-8" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <path d="M14 28v8c0 3.314 8.059 6 18 6s18-2.686 18-6v-8" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M14 36v8c0 3.314 8.059 6 18 6s18-2.686 18-6v-8" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Roadmap',
    description: 'A precise project management system with clear approval milestones',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M32 8c-8.837 0-16 7.163-16 16 0 10 16 32 16 32S48 34 48 24c0-8.837-7.163-16-16-16z" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.08)" opacity="0.8"/>
        <circle cx="32" cy="24" r="5" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.25)" opacity="0.9"/>
      </svg>
    ),
  },
  {
    title: 'Reporting System',
    description: 'You can monitor the construction process online',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="8" y="18" width="48" height="32" rx="4" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.08)" opacity="0.8"/>
        <circle cx="32" cy="34" r="8" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.1)" opacity="0.7"/>
        <circle cx="32" cy="34" r="3" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.3)" opacity="0.8"/>
        <rect x="26" y="14" width="12" height="4" rx="2" stroke="#d4873a" strokeWidth="1" fill="rgba(212,135,58,0.15)" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description: 'Detailed timelines for your project',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="8" y="44" width="10" height="14" rx="2" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.15)" opacity="0.8"/>
        <rect x="22" y="32" width="10" height="26" rx="2" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.15)" opacity="0.8"/>
        <rect x="36" y="20" width="10" height="38" rx="2" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.15)" opacity="0.8"/>
        <rect x="50" y="8" width="6" height="50" rx="2" stroke="#d4873a" strokeWidth="1.5" fill="rgba(212,135,58,0.15)" opacity="0.8"/>
        <polyline points="8,40 27,28 41,16 56,6" stroke="#d4873a" strokeWidth="1.5" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
];

const cardStyle = {
  background: 'rgba(26, 23, 22, 0.8)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(12px)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 48px rgba(0,0,0,0.7)',
};

function LifelongPartnerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-[#0f0f0f] text-white px-10 py-16 lg:px-20 lg:py-24" ref={ref}>

      <div className="mb-12 text-center">
        <motion.h2
          className="mb-4 font-light uppercase leading-none tracking-[2px] text-[#f0ebe4]"
          style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#d4873a]">{BRAND_NAME}</span>
          {' '}— Your Life-Long Partner
        </motion.h2>

        <motion.p
          className="mx-auto max-w-[500px] text-[15px] font-light leading-[1.6] text-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          An exceptional service experience tailored to discerning clients
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
        {serviceCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="group flex items-center justify-between gap-6 rounded-[20px] py-16 px-8 min-h-[140px]"
            style={cardStyle}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="flex-1">
              <h3 className="mb-3 text-[20px] font-medium uppercase tracking-[1.8px] text-[#d4873a]">
                {card.title}
              </h3>
              <p className="text-[16px] font-light leading-[1.6] text-[#e8e8e8]">
                {card.description}
              </p>
            </div>

            <div className="shrink-0 w-[80px] h-[80px] opacity-80">
              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default LifelongPartnerSection;
