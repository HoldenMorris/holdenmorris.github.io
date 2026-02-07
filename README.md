# Holden Morris — Portfolio

Personal portfolio website. 42+ years of building software, starting at age 12 in 1984.

**Live:** [holdenmorris.github.io](https://holdenmorris.github.io)

## Tech Stack

- [Lit 3](https://lit.dev) — Web Components
- [Shoelace 2](https://shoelace.style) — UI components
- [Vite](https://vite.dev) — Build tooling

## Development

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build to docs/
```

## Deployment

Built output lives in `docs/`. GitHub Pages serves from the `/docs` folder on `main`.

```bash
npm run build
git add docs/
git commit -m "build: update production build"
git push
```
