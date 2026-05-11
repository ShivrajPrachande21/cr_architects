import { useRef } from 'react';
import { BRAND_NAME } from '../../../../constants/brand'
import { motion, useInView } from 'motion/react';
import globeImage from '../../../../assets/glob.png';
import homeImage from '../../../../assets/home_home.png';
import cupImage from '../../../../assets/cup.png';
import chairImage from '../../../../assets/chair_home.png';
import starImage from '../../../../assets/star.png';

const statCards = [
  { value: '1 200 m²', description: 'average project area', image: homeImage, imageAlt: 'House icon' },
  { value: '98%', description: 'of customers recommend* us', note: '*We continuously measure client loyalty index (NPS)', image: cupImage, imageAlt: 'Cup icon' },
  { value: '2 000 m²', description: 'in-house manufacturing facility in Saint-Petersburg', image: chairImage, imageAlt: 'Chair icon' },
  { value: '10+ years', description: 'of expertise in architecture, design, and construction', image: starImage, imageAlt: 'Star icon' },
];

function GlobalReachSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-x-clip bg-[#0f0f0f] text-white" ref={ref}>

      {/* GLOBE */}
      <motion.div
        className="pointer-events-none select-none absolute right-[-10px] top-[-180px] w-[60%] max-[1180px]:w-[58%] max-[900px]:w-[70%] max-[720px]:hidden"
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <img src={globeImage} alt="" className="block w-full" />
        <div
          className="absolute bottom-0 left-0 w-full h-[25%]"
          style={{ background: 'linear-gradient(to top, #0f0f0f 0%, #0f0f0f 10%, transparent 100%)' }}
        />
        {/* <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #0f0f0f 0%, transparent 35%)' }}
        /> */}
      </motion.div>

      {/* TEXT BLOCK */}
      <div className="relative z-10 px-10 pt-12 pb-20 lg:px-20 lg:pt-16 lg:pb-24">
        <div className="max-w-[520px]">
          <motion.h2
            className="mb-6 font-light leading-[1.15] tracking-[-0.5px] text-[#f0ebe4] text-[44px] max-[900px]:text-[28px] max-[720px]:text-[22px]"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Completed projects in 32 countries
          </motion.h2>

          <motion.p
            className="mb-10 max-w-[520px] text-[20px] font-light leading-[1.65] text-[#f0ebe4]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            We have showcasing projects in the distinctive {BRAND_NAME}{' '}
            style around the world{' '}
            <span className="text-[#d4873a]">the most extensive portfolio</span>
          </motion.p>

          <motion.a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#d4873a] px-7 py-[13px] text-[12px] font-medium uppercase tracking-[2px] text-[#d4873a] transition-all duration-300 hover:bg-[#d4873a] hover:text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover portfolio
          </motion.a>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="relative z-10 grid grid-cols-4 gap-6 max-[1180px]:grid-cols-2 max-[720px]:grid-cols-1 px-10 pb-10 lg:px-20 lg:pb-16">
        {statCards.map((card, i) => (
          <motion.div
            key={card.value}
            className="group flex min-h-[250px] flex-col justify-between rounded-[20px] p-7"
            style={{
              background: 'rgba(24, 22, 21, 0.8)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 48px rgba(0,0,0,0.7)',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div>
              <h3
                className="font-light leading-none text-[#f0ebe4]"
                style={{ fontSize: 'clamp(32px, 2.8vw, 40px)' }}
              >
                {card.value}
              </h3>
              <p className="mt-3 text-[13px] font-light leading-[1.5] text-white/55">
                {card.description}
              </p>
              {card.note && (
                <small className="mt-2 block text-[10px] font-light leading-snug text-white/40">
                  {card.note}
                </small>
              )}
            </div>

            <div className="flex justify-end items-end">
              <img src={card.image} alt={card.imageAlt} className="w-[100px] opacity-90 drop-shadow-lg" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default GlobalReachSection;
