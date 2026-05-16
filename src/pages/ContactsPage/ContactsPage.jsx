import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, useInView } from 'motion/react';
import Navbar from '../../components/Navbar/Navbar';
import FloatingContact from '../../components/FloatingContact/FloatingContact';
import WorldMap from './WorldMap';
import { submitContactRequest } from './contactsSaga';
import { componentKey } from './contactsSlice';
import { BRAND_NAME } from '../../constants/brand';
import teamPhoto from '../../assets/teamPhoto.png';

/* ── small icon helpers ───────────────────────────────── */
function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div
      className="flex items-center gap-4 rounded-xl px-5 py-4"
      style={{
        background: 'rgba(32,30,28,0.92)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {icon && (
        <div
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white/50"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {icon}
        </div>
      )}
      <div>
        <p className="text-[#d4873a] text-[10px] font-medium tracking-[2px] uppercase mb-1">
          {title}
        </p>
        <p className="text-white/70 text-[12px] font-light leading-[1.5]">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ── page ─────────────────────────────────────────────── */
export default function ContactsPage() {
  const dispatch = useDispatch();
  const submitLoadingState = useSelector(
    (state) =>
      state[componentKey]?.submitLoadingState ?? { state: 'idle', message: '' },
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitContactRequest({
        name,
        phone,
        countryCode: 'AE (+971)',
        onSuccess: () => {
          setName('');
          setPhone('');
        },
      }),
    );
  };

  const isSubmitting = submitLoadingState.state === 'loading';
  const isSubmitted = submitLoadingState.state === 'success';

  return (
    <div className="min-h-screen bg-[#111110] text-white">
      <Navbar />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — Contact form  (form 40% | image 60%)
      ══════════════════════════════════════════════════ */}
      <section
        ref={ref}
        className="bg-[#111110] overflow-hidden"
        style={{ paddingTop: '105px' }}
      >
        <div
          className="grid max-[900px]:grid-cols-1"
          style={{ gridTemplateColumns: '40% 60%' }}
        >
          {/* ── LEFT: form (40%) ─────────────────────── */}
          <div className="flex flex-col px-10 py-10 lg:px-20 lg:py-14">
            {/* ← Home */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-[2px] uppercase font-light mb-10 transition-colors hover:text-white/70"
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
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="mb-5 font-light uppercase leading-[1.2] tracking-[1px] text-[#f0ebe4]"
              style={{ fontSize: 'clamp(20px, 2vw, 30px)' }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
            >
              Leave a request — we will contact you, discuss the objectives of
              your project and{' '}
              <span className="text-[#d4873a]">
                propose an individual scenario
              </span>{' '}
              for its realisation
            </motion.h2>

            {/* Sub-description */}
            <motion.p
              className="mb-8 max-w-[400px] text-[13px] font-light leading-[1.7] text-white/45"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.18,
              }}
            >
              Leave your contact details and our manager will reach out to you
              to discuss your project. We look forward to beginning this
              inspiring journey with you.
            </motion.p>

            {/* Instruction */}
            <motion.p
              className="mb-5 text-[13px] font-light text-white/60"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.26,
              }}
            >
              Fill out the form and our manager will contact you
            </motion.p>

            {/* Form */}
            <motion.form
              className="flex flex-col gap-5 max-w-[440px]"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.34,
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent border-b border-white/20 pb-3 text-[14px] font-light text-white placeholder:text-white/30 outline-none focus:border-[#d4873a] transition-colors duration-200"
              />

              <div className="flex items-end gap-3 border-b border-white/20 pb-3 focus-within:border-[#d4873a] transition-colors duration-200">
                <span className="shrink-0 flex items-center gap-1 text-[13px] font-light text-white/50 whitespace-nowrap">
                  AE (+971)
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                    <path d="M0 0l4 5 4-5z" fill="#d4873a" opacity="0.7" />
                  </svg>
                </span>
                <input
                  type="tel"
                  placeholder="50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="flex-1 bg-transparent text-[14px] font-light text-white placeholder:text-white/30 outline-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-full bg-[#d4873a] py-4 text-[12px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#e0974d] disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting
                  ? 'Sending…'
                  : isSubmitted
                    ? 'Request Sent!'
                    : "Request a manager's consultation"}
              </motion.button>
            </motion.form>

            {/* Privacy */}
            <motion.p
              className="mt-5 max-w-[400px] text-[11px] font-light leading-[1.6] text-white/25"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              I accept the Privacy Policy terms{' '}
              <a
                href="#"
                className="underline text-white/40 hover:text-white/60 transition-colors"
              >
                privacy policy
              </a>
            </motion.p>
          </div>

          {/* ── RIGHT: image (60%) ───────────────────── */}
          <motion.div
            className="relative max-[900px]:hidden py-4 pr-6 pb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.05,
            }}
          >
            <div
              className="relative w-full h-[70vh] mt-20 overflow-hidden"
              style={{ borderRadius: '20px' }}
            >
              <img
                src={teamPhoto}
                alt="CR Architects team"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ALL WORLD + Social row ── */}
      <div className="px-10 lg:px-20 py-10 flex items-center justify-between gap-8 max-[768px]:flex-col max-[768px]:items-start">
        {/* Left: All World card */}
        <div
          className="flex items-center gap-5 rounded-2xl px-6 py-5 flex-shrink-0"
          style={{
            background: 'rgba(28,26,24,0.9)',
            border: '1px solid rgba(255,255,255,0.06)',
            minWidth: '340px',
          }}
        >
          {/* Globe icon */}
          <div
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          <div className="flex-1">
            <p className="text-[#d4873a] text-[13px] font-medium tracking-[1.5px] uppercase mb-0.5">
              All World
            </p>
            <p className="text-white/50 text-[12px] font-light">
              We work all over the world
            </p>
          </div>

          <button className="shrink-0 rounded-full border border-[#d4873a] text-[#d4873a] text-[11px] font-medium uppercase tracking-[1.5px] px-5 py-2.5 transition-all duration-300 hover:bg-[#d4873a] hover:text-black">
            Write us
          </button>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-6 max-[480px]:gap-4">
          {[
            {
              label: 'Pinterest',
              href: '#',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              ),
            },
            {
              label: 'Instagram*',
              href: '#',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              ),
            },
            {
              label: 'YouTube*',
              href: '#',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              ),
            },
            {
              label: 'VK',
              href: '#',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.202 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z" />
                </svg>
              ),
            },
            {
              label: 'Facebook*',
              href: '#',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              ),
            },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white/60 transition-all duration-300 group-hover:text-white group-hover:border-white/30"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {icon}
              </div>
              <span className="text-[10px] font-light text-white/40 tracking-[0.5px] group-hover:text-white/70 transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* ══════════════════════════════════════════════════
          SECTION 2 — World map  (text 40% | map 60%)
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#111110] overflow-hidden">
        <div
          className="grid max-[900px]:grid-cols-1"
          style={{ gridTemplateColumns: '40% 60%' }}
        >
          {/* Left: text */}
          <div className="flex flex-col justify-between px-10 py-16 lg:px-20 lg:py-24">
            <div>
              <motion.h2
                className="mb-8 font-light uppercase leading-[1.2] tracking-[1px] text-[#f0ebe4]"
                style={{ fontSize: 'clamp(18px, 2vw, 10px)' }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                Our team works all over the world and realises{' '}
                <span className="text-[#d4873a]">
                  large-scale projects of any complexity
                </span>
              </motion.h2>

              <motion.button
                className="rounded-full bg-[#d4873a] px-8 py-4 text-[12px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#e0974d]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.18,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Read about the services
              </motion.button>
            </div>

            <p className="text-white/35 text-[13px] font-light italic leading-[1.7]">
              «&nbsp;We aim to inspire and reimagine spaces around the
              world&nbsp;»
            </p>
          </div>

          {/* Right: world map — flex so image sizes naturally without clipping */}
          <div className="flex items-center max-[900px]:hidden">
            <WorldMap />
          </div>
        </div>

        {/* Info cards */}
        {/* Info Cards Section */}
        <div className="px-10 lg:px-24 pb-20 pt-6 mt-20 mx-auto max-w-7xl">
          <div className="flex  gap-6 max-[900px]:grid-cols-1">
            {/* Address Card */}
            <div className="flex items-center gap-5 rounded-[34px] bg-[#1d1d1f] px-7 py-7 min-h-[110px] shadow-[0_0_30px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-center text-[#8d8d8d]">
                <LocationIcon className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-[#d9891d] text-[15px] tracking-[1.8px] uppercase font-light mb-2">
                  Address
                </h3>

                <p className="text-[#d4d4d4] text-[15px] leading-[24px] font-light tracking-[0.4px]">
                  CR Architects, 4, Kalyani Nagar Rd, above Sanjivani Medical,
                  Corner, Pune, Maharashtra 411006
                </p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="flex items-center  w-[300px] gap-5 rounded-[34px] bg-[#1d1d1f] px-7 py-7 min-h-[110px] shadow-[0_0_30px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-center text-[#8d8d8d]">
                <CalendarIcon className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-[#d9891d] text-[15px] tracking-[1.8px] uppercase font-light mb-2">
                  Opening Hours
                </h3>

                <p className="text-[#d4d4d4] text-[15px] leading-[24px] font-light tracking-[0.4px]">
                  MON-FRI: 10:00–19:00
                </p>
              </div>
            </div>

            {/* Non Working Days Card */}
            <div className="flex items-center w-[300px] rounded-[34px] bg-[#1d1d1f] px-8 py-7 min-h-[110px] shadow-[0_0_30px_rgba(0,0,0,0.25)]">
              <div>
                <h3 className="text-[#d9891d] text-[15px] tracking-[1.8px] uppercase font-light mb-2">
                  Non-Working Days
                </h3>

                <p className="text-[#d4d4d4] text-[15px] leading-[24px] font-light tracking-[0.4px]">
                  SAT-SUN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}
