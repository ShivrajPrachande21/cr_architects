import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const steps = [
  {
    number: '1',
    title: 'Fill out the form',
    description: 'Provide your name and current phone number',
  },
  {
    number: '2',
    title: 'We will contact you',
    description: "Our personal expert will discuss your project's requirements and introduce you to our approach",
  },
  {
    number: '3',
    title: 'Receive a tailored offer',
    description: 'After a detailed review of your wishes, we will prepare a personalized project plan',
  },
];

const cardStyle = {
  background: 'rgba(24, 22, 21, 0.8)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.07)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 48px rgba(0,0,0,0.7)',
};

function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-[#0f0f0f] text-white px-10 py-16 lg:px-20 lg:py-24" ref={ref}>

      <motion.h2
        className="mb-16 text-center font-light uppercase leading-[1.25] tracking-[1.5px] text-[#f0ebe4]"
        style={{ fontSize: 'clamp(18px, 1.9vw, 28px)' }}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Learn more about{' '}
        <span className="text-[#d4873a]">creating your dream project</span>
        <br />
        from your personal expert
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
          >
            {/* Number circle */}
            <motion.div
              className="mb-5 flex justify-center"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-full text-[#d4873a] text-[14px] font-light"
                style={{
                  border: '1px solid rgba(212,135,58,0.4)',
                  background: 'rgba(212,135,58,0.06)',
                }}
              >
                {step.number}
              </div>
            </motion.div>

            {/* Card */}
            <motion.div
              className="flex-1 rounded-[20px] p-8 text-center"
              style={cardStyle}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[2px] text-[#d4873a]">
                {step.title}
              </h3>
              <p className="text-[14px] font-light leading-[1.7] text-white/55">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default HowItWorksSection;
