/* ─────────────────────────────────────────
   SEARCH ICON
───────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

/* ─────────────────────────────────────────
   FILTER BAR
───────────────────────────────────────── */
export default function FilterBar({
  activeTab = null,
  tabs = ['All', 'Architects', 'Interiors', 'Residence'],
  onTabChange,
  search = '',
  searchPlaceholder = 'Country, City',
  onSearchChange,
}) {
  return (
    <div className="relative z-[9999] flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-[black]/95 p-2 backdrop-blur-xl">

      {/* TABS */}
      <div className="flex overflow-visible rounded-full border border-white/10 bg-[#171615] p-1">
        {tabs.map((tab) => {
          const active = tab === 'All' ? activeTab === null : activeTab === tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab === 'All' ? null : tab)}
              className={`rounded-full px-6 py-[10px] text-[11px] tracking-[1.4px] uppercase transition-all duration-200
                ${active
                  ? 'bg-[#d4873a] text-white shadow-[0_2px_12px_rgba(212,135,58,0.35)]'
                  : 'text-white/45 hover:text-white/80'
                }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* SEARCH */}
      <div className="flex min-w-[260px] items-center gap-3 rounded-full border border-white/10 bg-[#171615] px-5 py-3">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full bg-transparent text-[12px] text-white/80 placeholder:text-white/30 outline-none"
        />
        <span className="text-white/60">
          <SearchIcon />
        </span>
      </div>
    </div>
  )
}
