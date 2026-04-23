import Sidebar from './components/Sidebar.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-60 p-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-xl">✦</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Minimal Template</h1>
              <p className="text-sm text-neutral-400">React + Tailwind + Vite</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 mb-4">
            <h2 className="text-lg font-semibold mb-2">Willkommen</h2>
            <p className="text-neutral-400 text-sm">
              Das ist ein minimales React-Template mit Tailwind CSS. Bearbeite die Dateien in <code className="text-accent bg-bg px-1.5 py-0.5 rounded">src/</code> um dein Projekt zu starten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold mb-1">Enthalten</h3>
              <ul className="text-xs text-neutral-400 space-y-1">
                <li>✓ React 18</li>
                <li>✓ Tailwind CSS 3</li>
                <li>✓ Vite 6</li>
                <li>✓ Docker Compose (Prod + Dev)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold mb-1">Entwicklung</h3>
              <code className="block text-xs text-accent bg-bg px-2 py-1 rounded mb-2">npm install</code>
              <code className="block text-xs text-accent bg-bg px-2 py-1 rounded">npm run dev</code>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
