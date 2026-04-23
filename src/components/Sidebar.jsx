export default function Sidebar() {
  const items = [
    { icon: '✦', label: 'Minimal Template', active: true },
    { icon: '◎', label: 'Dashboard' },
    { icon: '◉', label: 'Einstellungen' }
  ]

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-card border-r border-border flex flex-col">
      <div className="h-16 px-5 flex items-center border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-xs">MT</span>
          </div>
          <span className="text-sm font-semibold">Minimal</span>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {items.map((item, i) => (
          <button key={i}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              item.active
                ? 'bg-accent/10 text-accent'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-3 border-t border-border">
        <p className="text-[10px] text-neutral-500 px-3">v1.0.0</p>
      </div>
    </aside>
  )
}
