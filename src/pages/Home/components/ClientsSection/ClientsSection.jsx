import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const clients = [
  'River Park',
  'MR Group',
  'Hilton Hotels & Resorts',
  'Jacob & Co',
  'Engeo',
  'Damac',
  'Mandarin Oriental',
  'Евострой',
  'Marriott',
];

function ClientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-[#111110] text-white px-10 py-16 lg:px-20 lg:py-20" ref={ref}>

      <motion.h2
        className="mb-12 font-light uppercase leading-[1.3] tracking-[1.5px] text-[#f0ebe4] text-center"
        style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        We are chosen by those{' '}
        <span className="text-[#d4873a]">who strive for excellence</span>
        {' '}— among our clients:
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {clients.map((name, i) => (
          <motion.span
            key={name}
            className="text-[13px] font-light uppercase tracking-[1.5px] text-white/40 transition-colors duration-200 hover:text-white/80 whitespace-nowrap"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.06 }}
          >
            {name}
          </motion.span>
        ))}
      </div>

    </section>
  );
}

export default ClientsSection;
