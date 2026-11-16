# Three distinct compositions

This module owns `landscape-poster`, `compare-technical` and `compare-lifestyle`. Insert `section.html` with `styles.css`; all styling is scoped to `.final-art`. Root owns integration and exports.

| Artwork | Native canvas | Photo token | Final composition |
| --- | --- | --- | --- |
| `landscape-poster` | 1536×1024 | `__APERTURE_DATA__` | Burgundy field, two equal-size centred cream lines (“Tell us what you / drink at home.”), a centred doorway opening partially overlapped by the lower headline, and a small original mark at bottom left. |
| `compare-technical` | 1122×1402 | `__COUNTER_DATA__` | Complete dark counter still life, compact cream “A front-row / seat.” and mark above the equipment. No footer or added photo crop. |
| `compare-lifestyle` | 1122×1402 | `__ENCOUNTER_DATA__` | Photograph only: close hand/glass exchange, without a title, logo, band or secondary invitation. |

## Authentic doorway source

Embed `__APERTURE_DATA__` from **`production/photos/manwill-doorway.jpg`**, 1200×2132. This is a proportional downsample of the complete source photograph; no retouching, reconstruction or image generation. Only the HTML aperture crops it.

- Original: `/workspace/scratch/manwill-research-real/manwill-google-finished-corner.jpg`, **3516×6248**.
- Credit: **MANWILL BREW / Google Maps**, contributor photograph dated June 2026.
- Source page: <https://maps.app.goo.gl/FEayydussrVww4b97>.
- Provenance: `/workspace/scratch/manwill-research-real/high-resolution-provenance.json`.
- The CSS crop shows approximately source x10–57.5%, y38–80%; it excludes the person visible in the right-hand interior. The opening follows the shallow curved top of the actual tall door glazing, with a square lower edge. It is centred at 28% canvas width, from y27% to y93%. It is one continuous opening, with no keyhole head or added door illustration. Root adds the source credit outside the artwork.

## Type, identity and photo treatment

Use `__FONT_DATA__` for genuine variable InterTight. All text is normal-style sans serif. Within each artwork, every headline word has the same size, weight and line height; no child overrides. Landscape uses 7.8cqw, weight600, line-height0.95, centred within an 88%-wide text field. Both lines inherit identical values. Its 14%-wide original mark sits separately at bottom left. The counter composition deliberately uses a compact 4.4cqw, weight500, line-height1.06. The former global 9cqw restriction is not retained: the user requested equal sizes within a composition, not identical scale across all compositions.

Replace the **two** `__MARK_PATH__` tokens with the unchanged supplied path. Both marks retain `viewBox="-18 -18 1444 476"`, `fill-rule="evenodd"` and intrinsic proportions. The photo-only lifestyle frame intentionally contains no SVG. No CSS grain, blur, color filter or texture has been added.

The old counter photograph is used only in the technical composition. The old exchange photograph is used only in the lifestyle composition. The lifestyle photo crop magnifies the core gesture and retains the complete glass, the server's thumb and the guest's reaching fingers. Complete output canvases retain their native ratios.

## Verification

Standalone Chromium proofs were rendered at the exact native sizes to `/workspace/scratch/manwill-previews/final-art-revision/`. All three were visually inspected. The doorway crop contains no face or identifiable reflection; the counter photograph retains its source bounds; the lifestyle frame has no visible graphic additions. Browser-computed headline sizes and weights match across every word within each composition. The revised centred landscape proof is `landscape-poster-centered.png` in that directory; it is 1536×1024 and both lines compute to 119.808px / weight600. Technical and lifestyle remain as previously approved. Root performs integrated responsive QA and final exports.
