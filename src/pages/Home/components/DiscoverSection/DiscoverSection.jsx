import { useRef } from 'react';
import { BRAND_NAME } from '../../../../constants/brand'
import { motion, useInView } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

function DiscoverSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#151311] px-6 py-10 lg:px-12 lg:py-14" ref={ref}>

      {/* main container */}
      <motion.div
        className="mx-auto justify-between flex max-w-[1750px] overflow-hidden rounded-[34px] border border-white/[0.03] bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.45)] max-[980px]:flex-col"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 justify-center p-12">

          <motion.h2
            className="mb-6 font-light uppercase leading-[1.1] tracking-[2px]"
            style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}
            {...fadeUp(0.15)}
            animate={inView ? fadeUp(0.15).animate : {}}
          >
            <span className="text-[#f0ebe4]">Discover the</span>
            <br />
            <span className="text-[#d4873a]">
              {BRAND_NAME} Style
            </span>
          </motion.h2>

          <motion.p
            className="mb-10 max-w-[400px] text-[19px] font-light leading-[1.7] text-white"
            {...fadeUp(0.28)}
            animate={inView ? fadeUp(0.28).animate : {}}
          >
            We construct houses and design interiors in our signature style,
            thoughtfully tailored to your lifestyle scenarios
          </motion.p>

          <motion.div
            className="mb-10"
            {...fadeUp(0.4)}
            animate={inView ? fadeUp(0.4).animate : {}}
          >
            <span
              className="block font-light leading-none text-[#d4873a]"
              style={{ fontSize: 'clamp(48px, 2vw, 72px)' }}
            >
              98%
            </span>
            <span className="mt-2 block text-[19px] font-light text-white">
              of our customers recommend us
            </span>
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#d4873a] px-30 py-[15px] text-[12px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#e0974d]"
            {...fadeUp(0.52)}
            animate={inView ? fadeUp(0.52).animate : {}}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact a manager
          </motion.a>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex w-[60%] items-center justify-center max-[980px]:w-full p-10"
          {...fadeLeft}
          animate={inView ? fadeLeft.animate : {}}
        >
          <motion.div
            className="w-full overflow-hidden rounded-[32px] border border-white/[0.05] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.015, transition: { duration: 0.4, ease: 'easeOut' } }}
          >
            <img
              src={''}
              alt="Team"
              className="h-[520px] w-full object-cover grayscale max-[1400px]:h-[560px] max-[1100px]:h-[500px] max-[720px]:h-[360px]"
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default DiscoverSection;
