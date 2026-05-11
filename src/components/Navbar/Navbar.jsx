import { BRAND_NAME } from '../../constants/brand'

const navItems = ['About', 'Portfolio', 'Contacts', 'Services']

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-t-[2px] border-t-[#8a4020] border-b border-b-white/20 bg-[rgba(102, 95, 92, 0.66)] text-white uppercase tracking-[1.8px] backdrop-blur-[14px] z-[9999]">
      <div className="relative grid min-h-[68px] grid-cols-[1fr_auto_1fr] items-center px-[50px] max-[800px]:grid-cols-[auto_1fr_auto] max-[800px]:gap-3 max-[800px]:px-[18px] max-[800px]:min-h-[62px]">
        <div className="flex items-center gap-[22px] max-[800px]:gap-3" aria-label="Language selector">
  
          <button type="button" className="text-[13px] leading-none text-white">
            Eng
          </button>
        </div>

        <a
          className="whitespace-nowrap text-[28px] font-light leading-none tracking-[2.5px] text-white max-[800px]:justify-self-center max-[800px]:text-[20px] max-[800px]:tracking-[1.8px]"
          href="/"
          aria-label={`${BRAND_NAME} home`}
        >
          {BRAND_NAME}
        </a>

        <a
          className="flex items-center justify-end gap-[22px] text-[13px] leading-none text-white/90 transition-colors duration-200 hover:text-[#f39726] max-[800px]:gap-0 max-[800px]:text-[0]"
          href="#contact"
        >
          <span className="max-[800px]:hidden">Contact us</span>
          <span className="relative inline-flex h-5 w-[15px] rotate-[-45deg] rounded-[999px_999px_999px_0] border-[1.6px] border-current" aria-hidden="true">
            <span className="absolute left-1 top-[5px] h-[5px] w-[5px] rounded-full border-[1.3px] border-current" />
          </span>
        </a>
      </div>

      <nav
        className="flex min-h-[37px] items-center justify-center bg-white/[0.04] max-[800px]:min-h-[42px] max-[800px]:justify-start max-[800px]:gap-7 max-[800px]:overflow-x-auto max-[800px]:px-[18px] max-[800px]:[scrollbar-width:none] max-[800px]:[&::-webkit-scrollbar]:hidden"
        style={{ gap: 'clamp(34px, 5vw, 78px)' }}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] leading-none text-white/90 transition-colors duration-200 hover:text-[#f39726]"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
