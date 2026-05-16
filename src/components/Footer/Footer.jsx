import { Link } from 'react-router-dom'
import { BRAND_NAME, BRAND_COPYRIGHT } from '../../constants/brand'

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white mt-10">

      {/* MAIN FOOTER GRID */}
      <div className="px-10 pt-16 pb-10 lg:px-20 lg:pt-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">

          {/* COL 1 — Navigation */}
          <div className="flex flex-col gap-4">
            <a href="/#about"    className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">About us</a>
            <a href="/#contacts" className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Contacts</a>
            <a href="/#services" className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Services</a>
            <a href="/#career"   className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Career</a>
            <a href="/#blog"     className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Blog</a>
            <Link to="/portfolio" className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Portfolio</Link>
            <a href="/#commercials" className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Commercials</a>
          </div>

          {/* COL 2 — Services */}
          <div className="flex flex-col gap-4">
            <a href="/#arch"      className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Architectural Design</a>
            <a href="/#interiors" className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Residential Interiors</a>
            <a href="/#furniture" className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Furniture Brand Fiftyfourms</a>
            <a href="/#sitemap"   className="text-[12px] font-medium uppercase tracking-[1.8px] text-white/80 transition-colors hover:text-[#d4873a]">Site Map</a>
          </div>

          {/* COL 3 — Contact */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[1.8px] text-white">Russia</p>
              <p className="text-[12px] font-light leading-[1.7] text-white/55">
                +7 (931) 270 54 54<br />
                welcome@studia-54.com
              </p>
            </div>
            <div>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[1.8px] text-white">Dubai</p>
              <p className="text-[12px] font-light leading-[1.7] text-white/55">
                +971 (58) 562-45-54<br />
                Platinum Tower, Jumeirah Lake Towers,<br />
                Star Business Centre DMCC, Unit<br />
                Number 808-04 (international office)
              </p>
            </div>
          </div>

          {/* COL 4 — Office */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[1.8px] text-white leading-[1.4]">
                We work all over the world, office
              </p>
              <p className="text-[12px] font-light leading-[1.7] text-white/55">
                191014, St. Petersburg, Novgorodskaya<br />
                23A, office 340 (pre-registration)
              </p>
            </div>
            <div>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[1.8px] text-white">Cooperation</p>
              <p className="text-[12px] font-light text-white/55">partners@studia-54.com</p>
            </div>
          </div>

          {/* COL 5 — Brand & Social */}
          <div className="flex flex-col gap-5">
            <div>
              <Link to="/" className="text-[28px] font-light uppercase tracking-[2px] text-white leading-none hover:text-[#d4873a] transition-colors">
                {BRAND_NAME}
              </Link>
              <p className="mt-2 text-[10px] font-light leading-[1.6] text-white/40">
                {BRAND_COPYRIGHT}
              </p>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1.8px] text-white">We're on social media</p>
              <div className="flex flex-col gap-2">
                <a href="#instagram" className="text-[12px] font-light text-[#d4873a] transition-colors hover:text-white">Instagram*</a>
                <a href="#pinterest" className="text-[12px] font-light text-white/70 transition-colors hover:text-white">Pinterest</a>
                <a href="#vk"        className="text-[12px] font-light text-white/70 transition-colors hover:text-white">VKontakte</a>
                <a href="#youtube"   className="text-[12px] font-light text-white/70 transition-colors hover:text-white">YouTube</a>
              </div>
              <p className="mt-3 text-[10px] font-light leading-[1.6] text-white/30">
                *The Meta company is recognized as an extremist organization and is banned in the Russian Federation.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="flex items-center justify-between px-10 py-4 lg:px-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-5">
          <button type="button" className="text-[12px] font-light text-white transition-colors hover:text-[#d4873a]">En</button>
          <a href="/#privacy" className="text-[12px] font-light text-white/50 transition-colors hover:text-white">Privacy Policy</a>
        </div>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/60 text-[12px] tracking-wide transition-colors hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span>Contact us</span>
        </a>
      </div>

    </footer>
  )
}

export default Footer
