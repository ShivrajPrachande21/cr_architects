import { useState, useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import { BRAND_NAME } from '../../constants/brand'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'
import FloatingContact from '../../components/FloatingContact/FloatingContact'
import FilterBar from '../../components/FilterBar'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85'


const PROJECTS = [
  {
    id: 1,
    title: 'LUXURY INTERIOR DESIGN PROJECT OF A RESIDENCE',
    location: 'IN REPINO',
    area: '750 M²',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80',
    section: 'Interiors',
    country: 'Russia',
  },
  {
    id: 2,
    title: 'PREMIUM ARCHITECTURAL PROJECT OF A RESIDENCE',
    location: 'IN REPINO',
    area: '750 M²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    section: 'Residence',
    country: 'Russia',
  },
  {
    id: 3,
    title: 'CONTEMPORARY VILLA WITH PANORAMIC VIEWS',
    location: 'IN DUBAI',
    area: '1 200 M²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
    section: 'Architects',
    country: 'UAE',
  },
  {
    id: 4,
    title: 'BESPOKE PENTHOUSE INTERIOR DESIGN',
    location: 'IN MONACO',
    area: '520 M²',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
    section: 'Interiors',
    country: 'Monaco',
  },
  {
    id: 5,
    title: 'PRIVATE ESTATE WITH LANDSCAPE DESIGN',
    location: 'IN LONDON',
    area: '2 100 M²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    section: 'Residence',
    country: 'UK',
  },
  {
    id: 6,
    title: 'MINIMALIST APARTMENT INTERIOR',
    location: 'IN PARIS',
    area: '320 M²',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=80',
    section: 'Architects',
    country: 'France',
  },
]

/* ── icons ─────────────────────────────────────────────── */
function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function SlidesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="15" rx="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}



/* ── project card ───────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className="group flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.1 }}
    >
      {/* Image wrapper */}
      <div
        className="relative overflow-hidden rounded-[40px] bg-[#1a1816]"
        style={{ aspectRatio: '5/3' }}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('img').style.transform = 'scale(1.09)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('img').style.transform = 'scale(1)'
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          style={{
            transform: 'scale(1)',
            transition: 'transform 5000ms cubic-bezier(0.22, 1, 0.36, 1) 60ms',
          }}
          loading="lazy"
        />

        {/* Area badge — top right */}
        <div className="absolute right-3 top-3 rounded-full bg-[rgba(20,18,16,0.78)] px-3 py-[6px] text-[12px] font-light tracking-wide text-white backdrop-blur-sm">
          {project.area}
        </div>

        {/* Share button — bottom right */}
        <button
          type="button"
          className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[rgba(20,18,16,0.70)] text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110"
          aria-label="Share project"
        >
          <ShareIcon />
        </button>
      </div>

      {/* Title row */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <p className="text-[13px] font-light uppercase leading-[1.45] tracking-[0.8px] text-white">
          {project.title}{' '}
          <span className="text-[#d4873a]">{project.location}</span>
        </p>
        <button
          type="button"
          className="mt-[2px] shrink-0 text-white/40 transition-colors hover:text-white"
          aria-label="View slides"
        >
          <SlidesIcon />
        </button>
      </div>
    </motion.article>
  )
}

/* ── page ───────────────────────────────────────────────── */
// section values that map to a valid filter tab (must match FilterBar tabs)
const FILTERABLE_SECTIONS = ['Architects', 'Interiors', 'Residence']

function PortfolioPage() {
  const [searchParams] = useSearchParams()
  const initialTab = FILTERABLE_SECTIONS.includes(searchParams.get('filter'))
    ? searchParams.get('filter')
    : null
  const [activeTab, setActiveTab] = useState(initialTab)
  const [search, setSearch] = useState('')

  // keep the active tab in sync when arriving via a ?filter= link
  useEffect(() => {
    const f = searchParams.get('filter')
    setActiveTab(FILTERABLE_SECTIONS.includes(f) ? f : null)
  }, [searchParams])
  // mirrors Navbar's secondaryVisible so button stops exactly below the navbar
  const [navbarFull, setNavbarFull] = useState(true)
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const mouseNearTop = useRef(false)

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY
      const delta = y - lastScrollY.current

      if (y <= 10) {
        setNavbarFull(true)
      } else if (delta > 4 && !mouseNearTop.current) {
        setNavbarFull(false)
      } else if (delta < -4) {
        setNavbarFull(true)
      }

      lastScrollY.current = y
    }

    function handleMouseMove(e) {
      const near = e.clientY < 130
      mouseNearTop.current = near
      if (near) setNavbarFull(true)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const filtered = PROJECTS.filter((p) => {
    if (activeTab && p.section !== activeTab) return false
    if (search && !p.country.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      {/* ── HERO + FILTER wrapper — no overflow-hidden so dropdowns aren't clipped ── */}
      <div className="relative">

        {/* Hero image section — overflow-hidden scoped only to the image */}
        <section className="relative" style={{ minHeight: '100vh' }} aria-label="Portfolio hero">
          {/* image in its own clipping box */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              className="h-full w-full object-cover object-center"
              src={HERO_IMAGE}
              alt="Premium architectural project"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* colour tint */}
          <div className="absolute inset-0 bg-[rgba(8,7,6,0.28)] pointer-events-none" />

          {/* left-side vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, rgba(12,9,7,0.72) 0%, rgba(12,9,7,0.18) 45%, rgba(12,9,7,0.55) 100%)' }}
          />

          {/* bottom blend — fully merges image into page background */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: '78%',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(15,15,15,0.6) 45%, #0f0f0f 100%)',
            }}
          />

          {/* Back button — fixed, stops just below navbar (never overlaps it) */}
          <motion.div
            className="fixed z-[9998]"
            style={{ left: 'clamp(18px, 2.6vw, 50px)' }}
            initial={{ opacity: 0, x: -16, top: '119px' }}
            animate={{
              opacity: 1,
              x: 0,
              top: navbarFull ? '119px' : '82px',
            }}
            transition={{
              opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
              x:       { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
              top:     { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-light leading-none text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </Link>
          </motion.div>

          {/* Bottom text — pushed up to leave room for the filter bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: 'clamp(24px, 2.6vw, 50px)',
              maxWidth: 'min(860px, calc(100% - 40px))',
              paddingBottom: 'clamp(100px, 12vw, 160px)',
            }}
          >
            <motion.h1
              className="mb-4 font-light uppercase leading-none tracking-[3px] text-[#d4873a]"
              style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              PORTFOLIO
            </motion.h1>

            <motion.p
              className="max-w-[680px] font-light leading-[1.55] tracking-[0.4px] text-white/80"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              Today, we have the most extensive portfolio and project scope in the premium segment.
              Over 650 projects in 32 countries, with an average area starting from 1200 m².{' '}
              <Link to="/#contact" className="text-white underline-offset-2 hover:text-[#f39726] transition-colors">
                Contact us
              </Link>{' '}
              to discuss your project
            </motion.p>
          </div>
        </section>

        {/* Filter bar — absolute at hero's bottom, sits on the dark gradient zone */}
        <div
          className="absolute inset-x-0 bottom-0 z-20"
          style={{ padding: '0 clamp(18px,3vw,50px) 28px' }}
        >
          <FilterBar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            search={search}
            searchPlaceholder="Country, City"
            onSearchChange={setSearch}
          />
        </div>
      </div>

      {/* ── GRID ─────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] px-[clamp(18px,3vw,50px)] pb-16 pt-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <p className="py-24 text-center text-[14px] text-white/30 tracking-wide">
            No projects match the selected filters.
          </p>
        )}
      </section>
      <FloatingContact />
    </main>
  )
}

export default PortfolioPage
