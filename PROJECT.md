# PROJECT.md

This file provides guidance to AI agents when working with code in this repository.

# Project Overview

**Holden Morris - Personal Portfolio Website**

A modern, visually striking personal portfolio for Holden Morris — a software developer with 42+ years of coding experience (started at age 12). The site serves as a professional showcase combining a concise CV/bio with rich project demos (screenshots, videos, live previews).

**Target audience:** potential employers, collaborators, and clients looking to see Holden's work and background at a glance.

**Design direction:** Clean, modern, minimalist layout with bold typography and smooth animations. Dark-mode first. The vibe should say "seasoned developer who ships" — not a generic template.

## About Holden

- **Current role:** Software Developer at Synaq (Gauteng, South Africa)
- **Side venture:** Co-Founder & Technical Director at Abantu Digital
- **Experience:** 42+ years coding (started age 12, now 54)
- **Focus areas:** Full-stack development, backend architecture, intuitive UX
- **Notable skills:** Node.js, web front-end, backend database integration, REST APIs, CMS (Drupal), software architecture, team leadership
- **GitHub:** github.com/HoldenMorris
- **LinkedIn:** linkedin.com/in/morrisholden

## Site Sections (Planned)

1. **Hero / Landing** — Name, title, one-liner tagline, subtle animated background
2. **About Me** — Short bio (not a wall of text), key stats (42+ years, companies, etc.)
3. **Skills & Tech** — Visual grid or tag cloud of technologies
4. **Project Showcase** — Cards with screenshots, video embeds, descriptions, and links
5. **Experience Timeline** — Minimal CV-style timeline (Synaq, Abantu Digital, earlier roles)
6. **Contact / Links** — GitHub, LinkedIn, email — simple and clean
7. **Footer** — Minimal, maybe a fun "coding since 1984" note

## Project Tracking

**Always keep these files up to date**

`PROJECT.MD` Track any changes to the scope of the project or changes to the tech stack.

`docs/TODO.md` tracks bugs, open items, and planned work.
When completing a task, fixing a bug, or discovering new work, update `docs/TODO.md` **Before AND After doing work** to reflect the current state.

`docs/plans/{FEATURE NAME}.md` Once a PLAN is devised added to the TODO file Features section and save the plan in the folder.

## Tech Stack

- **Vite** - dev server + build
- **Lit 3.x** - Web Components framework
- **@lit/context** - state management via context protocol
- **Shoelace 2.x** - UI component library (icons, buttons, dialogs, etc.)
- **CSS Custom Properties** - theming (dark-mode first)
- **Scroll-driven animations** - modern CSS animations for section reveals

## MCP Servers

- **Context7** - provides up-to-date library documentation. Use `use context7` in prompts for latest Shoelace/Lit docs.

## Plugins

- **ui-designer** - UI/UX design agent for crafting components, layouts, and visual systems

## Git Workflow

- **Remote Access**: Uses SSH for repository access
  (`git@github.com:HoldenMorris/HoldenMorris.github.io`)
- **Deployment**: GitHub Pages serves from the `main` branch directly
- **Commits**: Follow conventional commits
  (e.g., `feat:`, `fix:`, `refactor:`, `docs:`)
- **Pushing**: Ensure SSH keys are configured before pushing changes

## Commands

- `npm run dev` - start dev server (port 5173)
- `npm run build` - production build to `dist/`
- `npm run preview` - preview production build
- `npm test` - run tests once (vitest)
- `npm run test:watch` - run tests in watch mode

## Architecture

- **Single Page App** — all sections scroll on one page with smooth navigation
- **State flows downward** via `@lit/context` providers in the app shell
- **Web Components** — each section is an isolated, reusable Lit component
- All component files are in `src/components/`, assets in `src/assets/` (images, videos)

## Development Practices

- **TDD where possible** — write or update tests before implementing changes
- **Vitest + happy-dom** — test framework lives in `src/**/__tests__/**/*.test.js`
- **Mobile-first** — design for mobile, enhance for desktop
- **Accessibility** — WCAG AA compliance, semantic HTML, keyboard navigation

## Key Patterns

- Each page section is a standalone Lit web component (`<portfolio-hero>`, `<portfolio-about>`, etc.)
- Theme variables defined in `:root` CSS custom properties
- Project data (screenshots, videos, descriptions) stored as static JSON or JS module for easy updates
- Scroll-based reveal animations using Intersection Observer or CSS scroll-driven animations

## Data Models

- **Project** — `{ id, title, description, tags[], screenshots[], videoUrl?, liveUrl?, repoUrl?, featured }`
- **Experience** — `{ id, company, role, period, description, highlights[] }`
- **Skill** — `{ name, category, proficiency? }`

## Content to Gather

- [ ] Professional headshot or avatar
- [ ] Screenshots of notable projects (WebBeacon, Node-Rest-Auth, Hydra, Synaq work, Abantu Digital)
- [ ] Short video demos of projects (screen recordings)
- [ ] Brief write-ups for each showcase project
- [ ] Any testimonials or notable achievements
