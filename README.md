# Voltara Materials — 3D Site

Next.js + Three.js landing page for an electrochemical materials company, built following the Claude Code playbook: a detailed spec prompt scaffolding a React Three Fiber scene instead of a vague "make it futuristic" request.

## Stack

- Next.js (App Router) + TypeScript
- Three.js via React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- `@react-three/postprocessing` for the bloom pass on the hero crystal
- Tailwind CSS v4

## Spec

**Visual concept:** an icosahedral crystal lattice (representing molecular/ionic structure) suspended in a dark studio void, camera orbits slowly, cyan ion particles drift upward around it.

**Color system:** background `#05070a`, accent gradient `#38f2ff → #3b82f6`, text `#f5f7fa` / muted `#94a3b8`.

**Camera/interaction:** OrbitControls with damping `0.05`, autorotate speed `0.3`, zoom clamped to `5.5–10` units, pointer parallax on the scene content.

**Preloader:** progress ramps and holds at 90% until the WebGL scene is created, minimum visible time `1200ms`, fade-out over `600ms`.

**Sections:** hero, about, materials/products grid, contact.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint   # ESLint (includes React Compiler purity rules)
npm run build  # production build
```

## Deploy

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo in the Vercel dashboard.
