# CLAUDE.md — Luxury Real Estate Website (Halden)

## Project notes (current state)

- Stack: Next.js (App Router) + TypeScript + CSS Modules + CSS custom-property tokens (`app/globals.css`), GSAP ScrollTrigger + Lenis for motion.
- Visual reference screenshots live in `_reference/` (from `../modisch-inspiration`). Not shipped.
- Project media lives in `public/assets/images` and `public/assets/video` (sourced from `../modisch-gallery`; watermarks cropped, files renamed). The gallery's copy of the reference screenshot is intentionally not used.
- Signature motif: concave "cusp" shapes (`components/ui/Cusp.tsx`) where sections meet on a grid line.
- Content lives in `lib/data/*` — components are data-driven.
- Motion: `data-reveal`, `data-reveal-image`, `data-parallax` attributes are animated by `components/motion/MotionController.tsx`. Without JS or with reduced motion everything is visible.

---

## 1. Project Objective

Build a premium, editorial-style real estate/property management website inspired by the reference images provided in the project.

The reference images are the visual direction, not assets to copy directly. Recreate the same overall feeling, composition, spacing, typography hierarchy, image treatment, rounded/organic shapes, navigation behavior, and immersive scrolling experience while creating an original implementation.

The website should feel like a high-end architecture/property-management brand: minimal, elegant, editorial, warm, architectural, premium, calm, image-driven, sophisticated rather than corporate.

Do NOT make it look like a generic real-estate template.

## 2. Reference Images & Assets

- Inspect the asset directory before implementing UI; use supplied assets wherever appropriate.
- Do not replace provided assets with random stock images or unnecessary placeholders.
- Use `next/image` where appropriate and optimize loading.
- Reference screenshots guide layout, color, typography, image cropping, composition, rounded shapes, navigation, spacing, scroll behavior and rhythm.

## 3. Core Design Direction

Direction A — Dark architectural section: very dark blue-green background, off-white type, warm-gray secondary text, large architectural photography, large organic corners, thin dividers, minimal navigation, strong editorial type, generous negative space.

```
--color-dark: #071C1A;  --color-dark-soft: #0D2724;  --color-cream: #F3F0E5;
--color-off-white: #F7F5EC;  --color-muted: #A7AAA0;
--color-line: rgba(243, 240, 229, 0.16);  --color-accent: #B7C96A;
```

Direction B — Light luxury section: warm ivory background, deep green-black type, natural greens, organic shapes, thin dark borders, editorial serif display type.

```
--color-light: #F1EFE4;  --color-paper: #F6F4EA;  --color-ink: #17221F;
--color-forest: #1D332C;  --color-muted: #747970;
--color-line-dark: rgba(23, 34, 31, 0.16);  --color-green: #7C9B55;
```

No neon, gradients, glassmorphism, excessive shadows or generic SaaS styling.

## 4. Typography

Refined editorial serif for hero headlines, section headings, property titles, large statements. Clean modern sans for navigation, body, labels, metadata, buttons, property info. Max 2 families.

## 5. Type Scale (use exactly)

```
--text-hero: clamp(4.5rem, 17vw, 17rem);      line-height 0.82
--text-script: clamp(3rem, 9vw, 9rem);        line-height 0.9
--text-display: clamp(2.75rem, 6vw, 5.5rem);  line-height 0.94
--text-h2: clamp(1.75rem, 3vw, 2.75rem);      line-height 1.12
--text-h3: clamp(1.25rem, 1.6vw, 1.5rem);     line-height 1.25
--text-lead: clamp(1.125rem, 1.4vw, 1.375rem); line-height 1.5
--text-body: 1rem;                            line-height 1.6
--text-meta: 0.8125rem;                       line-height 1.4
--text-stat: clamp(3rem, 5vw, 4.5rem);        line-height 1
```

## 6. Spacing System (strict 4px base)

`4 8 12 16 24 32 48 64 96 128 160 224` → `--spacing-1` … `--spacing-12`. No arbitrary values without a strong layout reason.

## 7. Homepage Structure

Announcement/top bar · transparent hero nav · full-screen hero · intro/brand statement · story/about · featured properties · services · editorial image + text · statistics · large architectural image · CTA · large footer. A continuous visual story.

## 8–10. Hero, Navigation, Story

- Hero: full viewport, cinematic image/video, overlaid minimal nav, large editorial headline, supporting text, scroll indicator, subtle motion, organic treatment. Original copy.
- Nav: transparent over hero, logo left, links centered/right, inquiry link right, thin separators, small uppercase metadata type; background adapts to current section; clean mobile nav; never heavy.
- Story: eyebrow, large serif statement, supporting paragraph, small asymmetric image, separate secondary info, large whitespace. Asymmetric editorial grid.

## 11–13. Properties, Services, Organic Shapes

- Properties: large image, name, location, type, optional status, metadata, CTA. Editorial layouts, varied organic masks, hover movement — no Bootstrap cards.
- Services: clean list / large numbered rows; subtle hover (text shift, image change, arrow move).
- Organic shapes: varied radii, pills, circles/ovals, curved section boundaries. Intentional, not decorative.

## 14–16. Scroll, Storytelling, Image Treatment

- GSAP + ScrollTrigger + Lenis. Fade/translate reveals, image scale-in, horizontal property movement, sticky storytelling, parallax, navbar transition, count-up stats, hover transforms. Subtle, slow, expensive. No bounce, rotations, particles, neon, constant movement.
- At least one pinned storytelling section (sticky image + changing steps + progress), simplified on mobile.
- Photography warm, natural, cinematic; object-fit cover, careful focal points, gentle overlays under text.

## 17–18. Layout & Responsive

12-col desktop / 8-col tablet / 4-col mobile. Designed mobile layouts. Must work 320 → 2560px and 32" displays: no horizontal overflow, clipped text or runaway type.

## 19–20. Performance & Accessibility

next/image, lazy loading, transforms/opacity only, `prefers-reduced-motion`. Semantic HTML, heading hierarchy, keyboard nav, visible focus, alt text, contrast.

## 21–22. Architecture & Code Quality

`components/layout`, `components/home`, `components/property`, `components/ui`. TypeScript, typed data arrays, small focused components, tokens, no unnecessary dependencies, no `any`.

## 23–26. Content, Footer, Visual Rules, Anti-patterns

Copy: confident, calm, concise, human ("Thoughtful care for properties that matter."). Footer: logo, statement, nav, contact, location, social, legal, copyright; large final CTA before it. Must look premium with animations disabled. No generic cards, SaaS heroes, gradients, glow, glass, blobs, icon overload, 3D.

## 27–30. Workflow, Detail Pages, Fidelity, Quality Bar

Inspect → tokens → layout/type → hero → sections → motion → responsive → run & inspect → fix → then detail pages (`/about`, `/services`, `/services/[slug]`, `/properties`, `/properties/[slug]`, `/insights`, `/contact`), each short: hero, intro, imagery, key info, CTA, footer. Compare browser output to the references; never copy the reference brand, logo or text.

Final principle: photography + typography + whitespace + architecture + subtle motion do most of the work.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
