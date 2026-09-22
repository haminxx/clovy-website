# Clovy website

Clovy, build by Christian, Julian, Youna

Marketing site for Clovy, built from the Figma artboard
[Landing Page `637:6325`](https://www.figma.com/design/YiRVwZYPfcWCpAuC88p307/Clovy-%EA%B0%9C%EB%B0%9C?node-id=637-6325)
(1440 × 2896) in the `Clovy 개발` file.

## Stack

Vite + React + TypeScript with plain CSS. No UI framework and no CSS framework.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Layout notes

The artboard is 1440 wide, so sizes are written as
`clamp(min, design ÷ 14.4 vw, design px)`. The page therefore renders 1:1 at 1440,
scales down proportionally below that, and stops growing above it.

Below 768px every split section (hero, "Save your moments", "Grow with Clovy")
stacks text first and artwork second, and the 01/02/03 cards become a single
column.

The phone mockups are the raw App Store screenshots cropped by CSS in exactly the
way the Figma masks crop them — the offsets in `src/styles/landing.css` are
percentages of each mock's width, so the crops survive scaling. `01 Write` splices
two crops of the same screenshot, which is what the artboard does.

Type is `-apple-system` first, so Apple platforms render the SF Pro the design was
drawn in. Inter is self-hosted as the fallback everywhere else; it is slightly
wider than SF Pro, so a couple of paragraphs wrap one line earlier off Apple
platforms.

## Content and links

- Every Download / App Store call to action points at
  <https://apps.apple.com/us/app/clovy/id6777359516>.
- `About` in the nav jumps to the `#features` section (the 01–03 cards).
- `Privacy Policy` and `Contact` are real routes, `/privacy` and `/contact`.

## Deploying to Firebase Hosting

Live at <https://clovy-website.web.app>.

`firebase.json` and `.firebaserc` are committed and point at the `clovy-website`
project, serve `dist`, and rewrite everything to `index.html` so the client routes
resolve on a hard refresh.

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting --project clovy-website
```

`firebase deploy` runs `npm run build` first via the `predeploy` hook, so there is
no need to build by hand. Run it from the repository root — the hook inherits the
CLI's working directory. (It must not use `$RESOURCE_DIR`, which a hosting hook
resolves to the `public` directory, `dist/`.)

To preview a change before it goes live:

```bash
firebase hosting:channel:deploy preview --project clovy-website
```
