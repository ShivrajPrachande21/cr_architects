import { motion } from 'motion/react'
import Navbar from '../../components/Navbar'
import { BRAND_NAME } from '../../constants/brand'
import Footer from '../../components/Footer/Footer'
import heroImage from '../../assets/home-hero.jpg'
import GlobalReachSection from './components/GlobalReachSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import LifelongPartnerSection from './components/LifelongPartnerSection'
import DiscoverSection from './components/DiscoverSection'
import WorldwideRecognitionSection from './components/WorldwideRecognitionSection'
import ClientsSection from './components/ClientsSection'
import HowItWorksSection from './components/HowItWorksSection'
import ContactSection from './components/ContactSection'
function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <section
        className="relative min-h-screen overflow-hidden isolate"
        aria-label={`${BRAND_NAME} landing page`}
      >
        <motion.img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center saturate-[0.82] contrast-[1.04] max-[900px]:object-[58%_center]"
          src={heroImage}
          alt="Premium interior space"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,9,7,0.78)_0%,rgba(12,9,7,0.32)_42%,rgba(12,9,7,0.66)_100%),linear-gradient(180deg,rgba(26,22,18,0.28)_0%,rgba(26,22,18,0.06)_28%,rgba(12,11,10,0.68)_100%)]" />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-[55%]"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #0f0f0f 100%)' }}
        />

        {/* clamp values moved to inline style — Tailwind v4 cannot parse comma-containing arbitrary classes */}
        <div
          className="pb-[108px] max-[460px]:pb-11"
          style={{
            marginLeft: 'clamp(24px, 2.6vw, 50px)',
            maxWidth: 'min(820px, calc(100% - 40px))',
            paddingTop: 'clamp(290px, 60vh, 560px)',
          }}
        >
          <motion.h1
            className="mb-4 font-light uppercase leading-none tracking-[2.6px] text-white"
            style={{ fontSize: 'clamp(32px, 3.15vw, 44px)' }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            {BRAND_NAME}
          </motion.h1>

          <motion.p
            className="mb-[38px] max-w-[920px] font-light uppercase leading-[1.16] tracking-[1.1px] text-white/80 max-[900px]:max-w-[620px] max-[900px]:leading-[1.2]"
            style={{ fontSize: 'clamp(20px, 2.18vw, 33px)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
          >
            <span className="text-[#d9892a]">Leading international bureau</span> for premium
            <br className="hidden min-[720px]:block" /> architectural and interior design
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#f39726] px-[30px] text-[15px] font-bold uppercase leading-none text-white transition duration-200 hover:-translate-y-px hover:bg-[#ffab3d] max-[460px]:w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss your project
          </motion.a>
        </div>
      </section>

      <GlobalReachSection />

      <PortfolioSection />

      <LifelongPartnerSection />

      <DiscoverSection />

      <WorldwideRecognitionSection />

      <ClientsSection />

      <HowItWorksSection />

      <ContactSection />

      <Footer />
    </main>
  )
}

export default Home
