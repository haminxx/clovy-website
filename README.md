# Clovy website

Clovy, build by Christian, Julian, Youna

Marketing site for Clovy, built from the Figma artboard
[Landing Page `656:21978`](https://www.figma.com/design/YiRVwZYPfcWCpAuC88p307/Clovy-%EA%B0%9C%EB%B0%9C?node-id=656-21978)
(1440 × 3065) in the `Clovy 개발` file.

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

The artboard is 1440 wide. Type interpolates between the 390 phone sizes and the
1440 sizes (`clamp` with a slope that hits both ends), and stops growing above
1440. Page background is `#FBF9F5`, muted copy `#676767`, actions `#4CAF6A`.

The header stays pinned to the top. Hero, the two soft bands, and the three step
cards stack to a single column below 800px. Authored line breaks drop below 768px.

Type is `-apple-system` first, so Apple platforms render the SF Pro the design was
drawn in, then Segoe UI. Sizes follow a quieter marketing scale (header 22/15,
hero up to 48, body 15–18) rather than the artboard’s 64px headlines.

## Language

The site is English only for now. Korean strings remain in `src/copy.ts`, but the
header language switch is gone and the page always renders the English copy.

## Content and links

- Every Download / App Store call to action points at
  <https://apps.apple.com/us/app/clovy/id6777359516>.
- The hero and closing calls to action are the green pill from the artboard
  (Apple logo + “Download on the App Store”), not Apple’s badge artwork.
- Phone screens inside the red boxes on the artboard are empty slots
  (`mock-save`, `mock-write`, `mock-discover`, `mock-save-step`) with their
  aspect ratios locked. Artwork for those slots is filled in later.
- `About` in the nav jumps to the `#features` section (the 01–03 cards).
- `Privacy Policy` opens the Notion policy in a new tab, and `Contact` opens a
  pre-addressed mail draft. The old `/privacy` and `/contact` routes redirect to
  the same destinations.

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
