import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import residenceImage from '../../../../assets/homeImages/1000433486.jpeg';
import interiorsImage from '../../../../assets/homeImages/1000433487.jpeg';
import architectureImage from '../../../../assets/homeImages/1000433491.jpeg';

const portfolioCards = [
  {
    label: 'Residence',
    image: residenceImage,
    // matches the Portfolio filter tab / project.section value
    filter: 'Residence',
  },
  {
    label: 'Interiors',
    image: interiorsImage,
    filter: 'Interiors',
  },
  {
    label: 'Architecture',
    image: architectureImage,
    filter: 'Architects',
  },
];

function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const navigate = useNavigate();

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
              onClick={() => navigate(`/portfolio?filter=${card.filter}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/portfolio?filter=${card.filter}`);
                }
              }}
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
