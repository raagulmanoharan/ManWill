# Discovery artwork — sans-serif production module

Use `section.html` with `styles.css`. Wrapper: **`.discovery-art`**. Both figures use **`data-round-visual`**, retain the complete **1086 × 1448** portrait, and have `data-native-width` / `data-native-height` attributes. This module is independent of `round-two` and `final-art`; neither older module was edited.

| Figure ID | Photograph token | Treatment |
| --- | --- | --- |
| `discovery-menu` | `__MENU_DATA__` | New bold sans-serif printed menu cover; exact supplied SVG at 23% canvas width in the upper-left tabletop, outside the paper. |
| `handwritten-poster` | `__DISCOVERY_DETAIL_DATA__` | One consistent Inter Tight headline, burgundy/cream field, larger full portrait photo inset and a small butter-yellow wordmark. The ID is legacy only; there is no handwritten, italic or serif typesetting. |

The poster copy reads **“Tell us what you drink at home.”** This ties the invitation to familiar coffee preferences. The menu retains that same headline and **“We’ll help you choose.”** No new slogan, menu claim or price was added.

All four poster headline lines inherit identical values from their parent: **9cqw / weight 600 / line-height 1 / letter-spacing −0.035em / normal style**. There are no child font-size, weight or line-height overrides. The separate last-line colour band was removed. The full photo now occupies 59% of the canvas width in the lower-right, with the uniform headline above and a 23%-width supplied mark at lower-left. The menu photograph and its already uniform physical headline remain unchanged; its small support sentence is functional body copy.

## Integration tokens

- `__FONT_DATA__`: a font data URL for the **corrected Inter Tight variable 400–700 font**, verified at `/workspace/scratch/inter-tight-variable.woff2`. The root/craft agent is replacing `assets/inter-tight-latin.woff2` with that corrected file. Do not use the superseded static-400 version. The module's unique font family is `ManwillDiscoverySans`.
- `__MARK_PATH__`: the original `d` from `/workspace/ManWill/assets/brand/manwill-hand-lettered-v2.svg`, unchanged. Both SVGs retain `viewBox="-18 -18 1444 476"`, `fill-rule="evenodd"`, and the 1444:476 ratio. They use cream via `currentColor`; no path deformation, rotation or regenerated mark. The supplied logo is the only preserved non-font lettering.
- `__MENU_DATA__`: `/workspace/scratch/manwill-previews/final/discovery-menu-sans.webp` (1086 × 1448, 117,358 bytes).
- `__DISCOVERY_DETAIL_DATA__`: `/workspace/scratch/manwill-previews/final/discovery-detail.webp` (1086 × 1448, 228,304 bytes).

The full menu image uses `object-fit: contain`, and the inset's ratio matches its source, so neither image is cropped. All design elements scale with the canvas using percentages and container units. The SVG overlay on the menu is deliberately an editorial graphic, not simulated printing on the paper. Keep the photographs identified as proposed/generated images, as in their alt text and the note outside the canvases.

## New menu photograph

- PNG: `/workspace/scratch/manwill-previews/final/discovery-menu-sans.png` (2,030,604 bytes).
- WebP: `/workspace/scratch/manwill-previews/final/discovery-menu-sans.webp` (quality 92).
- Both: **1086 × 1448**, exact 3:4.
- Original: `/workspace/generated_images/exec-7dac118a-0dee-4910-8306-e32814307821.png`.
- Native surface check: `/workspace/scratch/manwill-previews/final/discovery-menu-sans-surface-crop.png`.
- Native hand check: `/workspace/scratch/manwill-previews/final/discovery-menu-sans-hand-crop.png`.

One fonts-only image edit converted the printed headline to bold neutral sans-serif. Exact wording, line breaks and small sans-serif sentence are correct. No logo was generated. The smooth matte tabletop has fine random noise without the old repeating squiggle pattern; visible fingers, glass and paper contact remain plausible. This is a generated edit, not a claim of pixel-identical surroundings. The previous fresh/menu versions and selected plain tray are unchanged.

## Verification

Rendered using headless Chromium with the corrected variable font, awaited font loading and decoded images. Checked both figures at native 1086 × 1448 and in a 390px viewport (each artwork 350 × 466.66px). Every text line, inset and SVG is within the canvas; the headline clears the photo. No horizontal page overflow. All four headline lines compute to exactly **97.74px, weight 600, line-height 97.74px, letter-spacing −3.4209px** at native size. All typesetting uses normal-style sans-serif only. The mobile proof was visually inspected after the shared-type revision.

- Menu native proof: `/workspace/scratch/manwill-previews/final/layout-discovery-menu-native.png`.
- Poster native proof: `/workspace/scratch/manwill-previews/final/layout-handwritten-poster-native.png`.
- Mobile proof: `/workspace/scratch/manwill-previews/final/layout-discovery-mobile.png`.
- Standalone editable review build: `/workspace/scratch/manwill-previews/discovery-art-review.html`.

No website integration, manifest approval, commit or publication was performed. Only this new production directory and scratch image/review files were written.
