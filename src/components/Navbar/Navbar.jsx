import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BRAND_NAME } from '../../constants/brand'

const NAV_ITEMS = [
  { label: 'About',     to: '/#about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contacts',  to: '/contacts' },
  { label: 'Services',  to: '/services' },
]

function Navbar() {
  const { pathname } = useLocation()
  const [secondaryVisible, setSecondaryVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const mouseNearTop = useRef(false)

  /* close the mobile menu whenever the route changes */
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY
      const delta = y - lastScrollY.current

      if (y <= 10) {
        setSecondaryVisible(true)
      } else if (delta > 4 && !mouseNearTop.current) {
        setSecondaryVisible(false)
      } else if (delta < -4) {
        setSecondaryVisible(true)
      }

      lastScrollY.current = y
    }

    function handleMouseMove(e) {
      const near = e.clientY < 130
      mouseNearTop.current = near
      if (near) setSecondaryVisible(true)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-t-[2px] border-t-[#8a4020] border-b border-b-white/20 bg-[rgba(129, 120, 117, 0.44)] text-white uppercase tracking-[1.8px] backdrop-blur-[14px]">

      {/* PRIMARY BAR */}
      <div className="relative grid min-h-[68px] grid-cols-[1fr_auto_1fr] items-center px-[50px] max-[800px]:grid-cols-[auto_1fr_auto] max-[800px]:gap-3 max-[800px]:px-[18px] max-[800px]:min-h-[62px]">
        <div className="flex items-center gap-[22px] max-[800px]:gap-3" aria-label="Language selector">
          <button type="button" className="text-[13px] leading-none text-white">
            ENG
          </button>
        </div>

        <Link
          to="/"
          className="whitespace-nowrap text-[28px] font-light leading-none tracking-[2.5px] text-white max-[800px]:justify-self-center max-[800px]:text-[20px] max-[800px]:tracking-[1.8px]"
          aria-label={`${BRAND_NAME} home`}
        >
          {BRAND_NAME}
        </Link>

        <div className="flex items-center justify-end gap-4">
          <Link
            to="/#contact"
            className="flex items-center gap-[22px] text-[13px] leading-none text-white/90 transition-colors duration-200 hover:text-[#f39726] max-[800px]:hidden"
          >
            <span>Contact us</span>
            <span className="relative inline-flex h-5 w-[15px] rotate-[-45deg] rounded-[999px_999px_999px_0] border-[1.6px] border-current" aria-hidden="true">
              <span className="absolute left-1 top-[5px] h-[5px] w-[5px] rounded-full border-[1.3px] border-current" />
            </span>
          </Link>

          {/* Hamburger — tablet / mobile only */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="hidden h-9 w-9 flex-col items-center justify-center gap-[5px] max-[800px]:flex"
          >
            <span
              className={`block h-[1.6px] w-6 bg-white transition-transform duration-300 ${
                menuOpen ? 'translate-y-[6.6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.6px] w-6 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.6px] w-6 bg-white transition-transform duration-300 ${
                menuOpen ? '-translate-y-[6.6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* SECONDARY BAR — desktop only; slide + fade on scroll */}
      <div
        className="max-[800px]:hidden"
        style={{
          maxHeight: secondaryVisible ? '60px' : '0px',
          opacity: secondaryVisible ? 1 : 0,
          transform: `translateY(${secondaryVisible ? '0px' : '-6px'})`,
          overflow: 'hidden',
          transition: [
            'max-height 0.38s cubic-bezier(0.22,1,0.36,1)',
            'opacity 0.3s ease',
            'transform 0.38s cubic-bezier(0.22,1,0.36,1)',
          ].join(', '),
        }}
      >
        <nav
          className="flex min-h-[37px] items-center justify-center bg-white/[0.04] max-[800px]:min-h-[42px] max-[800px]:justify-start max-[800px]:gap-7 max-[800px]:overflow-x-auto max-[800px]:px-[18px] max-[800px]:[scrollbar-width:none] max-[800px]:[&::-webkit-scrollbar]:hidden"
          style={{ gap: 'clamp(34px, 5vw, 78px)' }}
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map(({ label, to }) => {
            const isPageRoute = to.startsWith('/') && !to.startsWith('/#')
            const active = isPageRoute ? pathname === to : false

            return (
              <Link
                key={label}
                to={to}
                className={[
                  'text-[13px] leading-none transition-colors duration-200',
                  active
                    ? 'text-white border-b border-white pb-[2px]'
                    : 'text-white/90 hover:text-[#f39726]',
                ].join(' ')}
              >
                {label.toUpperCase()}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* MOBILE MENU — collapsible dropdown */}
      <div
        className={`hidden overflow-hidden bg-[#15110f]/95 backdrop-blur-[14px] transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-[800px]:block ${
          menuOpen ? 'max-h-[340px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-[18px]" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ label, to }) => {
            const isPageRoute = to.startsWith('/') && !to.startsWith('/#')
            const active = isPageRoute ? pathname === to : false
            return (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={[
                  'border-b border-white/10 py-4 text-[13px] leading-none transition-colors duration-200',
                  active ? 'text-white' : 'text-white/90 hover:text-[#f39726]',
                ].join(' ')}
              >
                {label.toUpperCase()}
              </Link>
            )
          })}
          <Link
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-[13px] leading-none text-[#f39726]"
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
