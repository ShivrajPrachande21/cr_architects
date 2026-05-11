import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const portfolioCards = [
  {
    label: 'Residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Interiors',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Architecture',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80',
  },
];

function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-[#0f0f0f] text-white" ref={ref}>

      {/* HEADING */}
      <div className="px-10 pt-16 pb-12 lg:px-20 lg:pt-24 lg:pb-16">
        <motion.h2
          className="text-center text-4xl font-light tracking-wide lg:text-5xl"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          MORE THAN <span className="text-[#d4873a]">650</span> COMPLETED PROJECTS
        </motion.h2>
      </div>

      {/* PORTFOLIO CARDS */}
      <div className="px-10 pb-16 lg:px-20 lg:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {portfolioCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="group relative overflow-hidden rounded-3xl bg-gray-950 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
            >
              <img
                src={card.image}
                alt={card.label}
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-light tracking-wider text-[#d4873a]">
                  {card.label.toUpperCase()}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default PortfolioSection;
