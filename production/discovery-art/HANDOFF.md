# Discovery artwork — print and graphic poster

Integrate `section.html` with `styles.css`. Wrapper: **`.discovery-art`**. Both figures use **`data-round-visual`** and retain their complete **1086 × 1448** canvases. This revision changes only the three files in this module. The selected tray, selected shirt, current menu photograph, other art modules, shared build, manifest and website are untouched.

| Figure ID | Photograph token | Current treatment |
| --- | --- | --- |
| `discovery-menu` | `__MENU_DATA__` | Retained full photograph. The physical printed cover carries the message; the floating editorial SVG has been removed. There is no new overlay. |
| `handwritten-poster` | `__DISCOVERY_DETAIL_DATA__` | Burgundy graphic field with a broadly distributed equal-size cream invitation, a much smaller 28%-width cup-detail photograph near the centre, and a quiet 18%-width exact supplied SVG. The ID is legacy only; all typesetting is sans-serif. |

## Reference and composition

The actual provided BARI reference at `/workspace/scratch/manwill-reference-recovery/bari-tray-exact.jpg` was inspected. Its physical paper and steel framing support keeping the existing printed menu as a complete material application without another floating identity layer. The selected tray itself remains fixed.

The poster follows A1's described relationship of a burgundy field, large pale invitation and a small central photograph. It uses original sans-serif typesetting rather than copying the reference lettering. The phrase is distributed across the canvas: “Tell us”, an indented “what you”, “drink” meeting the inset, and “at home.” below it. The last letters of “drink” deliberately cross the dark upper-left area of the small photograph; the cream cup sits below this crossing. The image remains full-ratio and uncropped. The wordmark sits quietly to its right, with no deformation.

All headline spans inherit **20cqw / weight 600 / line-height 1 / letter-spacing −0.035em / normal style** from one parent. Child rules change position only, never font size, weight or line-height. There is no last-line colour band or smaller heading fragment. Wording remains exactly **“Tell us what you drink at home.”** The retained menu's smaller **“We’ll help you choose.”** remains functional body copy. No new phrases, prices or claims were added.

## Tokens

- `__FONT_DATA__`: corrected Inter Tight variable 400–700 font data URL. The verified variable source is `/workspace/scratch/inter-tight-variable.woff2`; use the corrected `assets/inter-tight-latin.woff2`, not the superseded static-400 file. Local family: `ManwillDiscoverySans`.
- `__MARK_PATH__`: original unchanged `d` from `/workspace/ManWill/assets/brand/manwill-hand-lettered-v2.svg`. Only the poster now contains this token. Preserve `viewBox="-18 -18 1444 476"`, `fill-rule="evenodd"`, and the 1444:476 ratio. Colour is cream via `currentColor`.
- `__MENU_DATA__`: `/workspace/scratch/manwill-previews/final/discovery-menu-sans.webp` — 1086 × 1448, 117,358 bytes. Unchanged in this revision.
- `__DISCOVERY_DETAIL_DATA__`: `/workspace/scratch/manwill-previews/final/discovery-detail.webp` — 1086 × 1448, 228,304 bytes. Unchanged.

Both images use `object-fit: contain`; preserve the complete canvas when exporting or displaying the artwork. Alt text and the external note identify the photographs as proposed/generated work.

## Review ownership

In-memory Chromium checks with the corrected variable font passed at a 1086 × 1448 native canvas and a 390px viewport with a 350 × 466.66px canvas. All headline spans compute identically: 217.2px / 600 / 217.2px line-height at native size, and 70px / 600 / 70px on mobile. Text, inset and wordmark stay within bounds; there is no horizontal overflow, the menu contains zero SVG overlays, and the poster's rendered path string exactly matches the supplied original. These checks wrote no build or image exports. Root should visually review the intentional text/photo crossing in the integrated render.

Root owns the new integrated render and final visual review. Earlier screenshots in `scratch/manwill-previews/final/layout-*` and the standalone `discovery-art-review.html` predate this redesign and are superseded; they were not rewritten. No image generation, shared build, manifest, export or website edits were performed for this revision.
