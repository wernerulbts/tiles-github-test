# Minimal React Template

React 18 + Tailwind CSS 3 + Vite 6 + Docker Compose mit Traefik.

## Struktur

```
├── src/
│   ├── App.jsx              # Main-Komponente
│   ├── main.jsx             # Entry-Point
│   ├── index.css            # Tailwind imports
│   └── components/
│       └── Sidebar.jsx      # Beispiel-Sidebar
├── Dockerfile               # Production build (nginx)
├── Dockerfile.dev           # Development (Vite dev server)
├── docker-compose.yml       # Production config
├── docker-compose.dev.yml   # Development overlay
└── nginx.conf               # nginx config für production
```

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Läuft auf http://localhost:5173

## Deployment

Das Template nutzt die ENV-Variablen `PRODUCTION_URL` und `DEVELOPMENT_URL` für Traefik:

- **Production:** `docker compose up -d --build` — baut nginx-Image mit der App
- **Development:** `docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d` — Vite mit Hot-Reload

Die URLs werden automatisch beim Projekt-Erstellen in den n8n-tiles Settings gesetzt.
