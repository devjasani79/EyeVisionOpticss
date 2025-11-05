# EYEVISIONOPTICS 

A small marketing site for Eye Vision Optics (Pune) built with React, Vite, Tailwind and Framer Motion.

Overview
- Hero with parallax video background and particle effects
- Services, About, Testimonials, Stats and Contact sections
- Contact form wired to Formspree
- Google Maps embed for store location
- Reusable UI primitives in `src/components/ui`

Quick start
1. Install

```powershell
npm install
```

2. Development

```powershell
npm run dev
```

3. Build

```powershell
npm run build
npm run preview
```

Project layout

- `src/pages/Index.tsx` — main page orchestrator (imports section components)
- `src/pages/sections/` — modular sections (Hero, About, Services, Testimonials, Contact, Footer)
- `src/components/` — shared components: `Navbar`, `WhatsAppButton`, `FloatingParticles`, and `ui/` primitives

Notes on cleaning unused files
- I recommend running `depcheck` locally to detect unused files. Install and run:

```powershell
npm i -D depcheck
npx depcheck --json > depcheck.json
```

Inspect `depcheck.json` and manually remove assets/components flagged as unused. Deleting assets blindly can break imports — review each removal.

Suggested next steps
- Consolidate repeated UI fragments into small components (e.g., `StatCard`, `TestimonialCard`).
- Add a few unit tests (React Testing Library) for the contact form.
- Run `prettier` and `eslint` after refactor.

Contact

- Address: Shop No 3, Samadhan Building, 759/35, Bhandarkar Rd, Deccan Gymkhana, Pune - 411004
- Phone: +91 93722 24060

---

If you want, I can run the depcheck and produce a safe deletion list next (I can't run depcheck from here, but I will provide the exact commands and a suggested safe-list after you run it locally).
