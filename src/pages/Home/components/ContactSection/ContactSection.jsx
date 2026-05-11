import { useRef, useState } from 'react';
import { BRAND_NAME } from '../../../../constants/brand'
import { motion, useInView } from 'motion/react';

function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="bg-[#111110] text-white mx-auto max-w-[1750px] overflow-hidden min-h-[700px] rounded-[34px]"
      ref={ref}
    >
      <div className="grid grid-cols-2 min-h-[620px] max-[900px]:grid-cols-1">

        {/* LEFT — photo */}
        <motion.div
          className="relative overflow-hidden max-[900px]:min-h-[380px]"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="font-light text-white/[0.04] leading-none"
              style={{ fontSize: 'clamp(260px, 28vw, 420px)' }}
            >
              S
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1a18] to-[#0e0d0c] flex items-end">
            <div className="p-8">
              <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#d4873a]">
                Olga Ivanova and Stanislav Kluev —
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#d4873a]">
                CEO {BRAND_NAME}
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-20 lg:py-24">

          <motion.h2
            className="mb-5 font-light uppercase leading-[1.2] tracking-[1px] text-[#f0ebe4]"
            style={{ fontSize: 'clamp(20px, 2vw, 30px)' }}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Turn your dreams of the perfect home into reality{' '}
            <span className="text-[#d4873a]">
              with {BRAND_NAME}
            </span>
          </motion.h2>

          <motion.p
            className="mb-8 max-w-[400px] text-[13px] font-light leading-[1.7] text-white/45"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            Leave your contact details, and our manager will reach out to you to
            discuss your project. We look forward to beginning this inspiring
            journey with you.
          </motion.p>

          <motion.p
            className="mb-5 text-[13px] font-light text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
          >
            Fill out the form and our manager will contact you
          </motion.p>

          <motion.form
            className="flex flex-col gap-5 max-w-[480px]"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b border-white/20 pb-3 text-[14px] font-light text-white placeholder:text-white/30 outline-none focus:border-[#d4873a] transition-colors duration-200"
            />

            <div className="flex items-end gap-3 border-b border-white/20 pb-3 focus-within:border-[#d4873a] transition-colors duration-200">
              <span className="shrink-0 text-[13px] font-light text-white/50 whitespace-nowrap">
                AE (+971)
              </span>
              <input
                type="tel"
                placeholder="50 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent text-[14px] font-light text-white placeholder:text-white/30 outline-none"
              />
            </div>

            <motion.button
              type="submit"
              className="mt-2 w-full rounded-full bg-[#d4873a] py-4 text-[12px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#e0974d]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Request a manager's consultation
            </motion.button>
          </motion.form>

          <motion.p
            className="mt-5 max-w-[400px] text-[11px] font-light leading-[1.6] text-white/25"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            By clicking the "Send" button, I accept the Privacy Policy terms{' '}
            <a href="#" className="underline text-white/40 hover:text-white/60 transition-colors">
              privacy policy
            </a>
          </motion.p>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
