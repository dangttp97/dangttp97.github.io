# github-page

Personal site of Trần Thành Phương Đăng, served on GitHub Pages.

| Page     | Path                  | What it is                                                        |
| -------- | --------------------- | ----------------------------------------------------------------- |
| Home     | `/`                   | Intro, skills and project cards                                   |
| CV       | `/projects/cv/`       | Responsive resume, printable as A4                                |
| Aquarium | `/projects/aquarium/` | CSS-animated aquarium with four scenes (day, sunset, night, deep) |

## Stack

- **Vite 8** for dev server and build (multi-page: one HTML entry per page)
- **TypeScript** + **JSX** rendered by a small custom renderer in `renderer/`
- **CSS Modules** for component styles, plain CSS for global tokens
- No UI framework and no runtime dependencies

### The renderer

JSX is compiled to `h(type, props, ...children)` calls. `h` builds a tree of plain objects
(VirtualHTMLNodes) and `render` turns that tree into real DOM nodes. There is no state and no diffing:
pages render once, and interactive bits (theme switch, aquarium controls) update the DOM
directly through `data-*` attributes that CSS reacts to.

`h` and `Fragment` are injected into every `.tsx` file by a Vite plugin, so components never
import them.

## Getting started

Requires Node 22+ and Yarn 4 (`corepack enable`).

```bash
yarn install
yarn dev          # http://localhost:5173
```

| Script              | Does                             |
| ------------------- | -------------------------------- |
| `yarn dev`          | Start the dev server             |
| `yarn build`        | Build all pages into `dist/`     |
| `yarn preview`      | Serve the built `dist/` locally  |
| `yarn typecheck`    | Run the TypeScript compiler      |
| `yarn lint`         | Run ESLint                       |
| `yarn format`       | Format everything with Prettier  |
| `yarn format:check` | Check formatting without writing |

## Project structure

```
index.html                 entry for the home page
projects/<name>/index.html entry for each sub-project
renderer/                  JSX renderer (h, Fragment, render)
src/
  components/              components shared by several pages
  pages/<page>/            page entry (index.tsx), its styles and page-only components
  data/                    profile (CV) data and the project registry
  utils/                   small helpers (class names, routes, theme)
  styles/                  global CSS per page
public/                    static files copied as-is (aquarium sprites)
```

### Adding a project

1. Create `projects/<name>/index.html` pointing to `src/pages/<name>/index.tsx`.
2. Add the entry to `build.rollupOptions.input` in `vite.config.ts`.
3. Register it in `src/data/projects.ts` so it shows up on the home page.

## Deployment

Pushing to `main` runs `.github/workflows/deploy-to-github.yml`: install, typecheck, lint,
format check, build, then deploy `dist/` to GitHub Pages. Pull requests run the same checks
without deploying.
