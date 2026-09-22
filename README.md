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

The three split sections (hero, "Save your moments", "Grow with Clovy") stack
text first and artwork second below 1024px, because their two-line paragraphs run
out of room before the rest of the page does. Below 768px the authored line
breaks are dropped and the 01/02/03 cards become a single column; below 560px the
header puts its nav on a second row.

Frame sizes come from the artboard's outer, stroked rectangles, so the phone
mockups carry their `aspect-ratio` on the bordered box rather than on the screen
inside it — otherwise each mock renders about 5px short.

The phone mockups are the raw App Store screenshots cropped by CSS in exactly the
way the Figma masks crop them — the offsets in `src/styles/landing.css` are
percentages of each mock's width, so the crops survive scaling. `01 Write` splices
two crops of the same screenshot, which is what the artboard does.

Type is `-apple-system` first, so Apple platforms render the SF Pro the design was
drawn in. Inter is self-hosted as the fallback everywhere else and runs noticeably
wider — the widest body line needs 823px in Inter against 712px in SF Pro — so
body copy carries a little negative tracking (`--track-body`) and "Grow with
Clovy" takes its copy column out to the site gutter. Both keep the artboard's
two-line paragraphs intact in either face.

## Language

`KR | EN` in the header swaps every visible string. Copy lives in `src/copy.ts`
as one entry per artboard line; the plumbing (context, `localStorage`,
`documentElement.lang`) is in `src/lang.ts` and `src/components/LangProvider.tsx`.
English is the default. The privacy link is labelled as English-only in Korean,
because the Notion page is not translated.

## Content and links

- Every Download / App Store call to action points at
  <https://apps.apple.com/us/app/clovy/id6777359516>.
- The hero and closing calls to action use Apple's own badge artwork, downloaded
  unmodified from the [App Store marketing
  guidelines](https://developer.apple.com/app-store/marketing/guidelines/) and
  swapped between the English and Korean versions Apple publishes. Only the
  rendered height is set; it stays above Apple's 40px onscreen minimum at every
  breakpoint and keeps a quarter of its height clear on all sides.
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
