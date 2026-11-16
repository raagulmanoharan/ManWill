# People artwork — selective reference-led revision

Integrate the current `section.html` and `styles.css` together. Retain the `.hospitality-art` wrapper and existing `data-round-visual` IDs. Root owns website integration and final exports; no shared build, manifest, website, production review or export files were changed here.

## people-candid: new photograph and lower diagonal copy

The exact recovered Chez Willy reference was inspected visually at `/workspace/scratch/manwill-reference-recovery/chez-willy-exact.jpg` and supplied through `referenced_image_paths` in the image-generation call. Its tight limb/stool crop, suspended drink, flash, grain and cool ambient shadows informed a new original scene. Its lettering, logo, beer and shoe branding were not reproduced.

The new photograph shows a small black coffee being handed to a seated guest. A navy-shorts knee fills the near foreground; the receiving hand, brewer's hand, worn wooden stool, rust trousers and grey tiled floor provide the composition. There is no broad shirt or green-counter tableau. Heads and faces are entirely outside the frame. The coffee tumbler and two hand anatomies were inspected at native resolution; no material extra-digit, grip or glass defect was found. The crop is closer and the gesture more active than the preceding portrait. Flash and fine grain remain part of the photograph, with no generated text or logo.

- **Active source:** `production/photos/people-candid.webp`
- **Native size:** **1122 × 1402** — unchanged from the preceding source.
- **WebP size:** **233,814 bytes**, quality 88, no post-generation crop or retouching.
- **Generated PNG retained:** `/workspace/generated_images/exec-96db9c8c-9b5e-4bb4-a911-06304c43cb8d.png`
- **Previous source preserved:** `/workspace/scratch/manwill-previews/round-two/people-candid-editorial-fresh.webp`. Its SHA-256 matched the old active source before replacement.
- **Generation count:** one new photograph, no retry or additional image.

The existing copy is now one red line, **“Meet your brewer.”**, crossing the lower lap/stool/floor diagonal at −8 degrees. It remains clear of the hands and glass and is not positioned on a shirt. It uses the shared sans specification unchanged: **Inter Tight 9cqw / 600 / line-height 1 / letter-spacing −.035em / normal style**. The sentence has no mixed word sizes or weights. The exact supplied SVG is a quiet 18%-width cream mark at the upper edge; its path, viewBox and fill rule are preserved.

## people-social: photo only

The existing `production/photos/people-social.webp` is preserved byte-for-byte. The headline and SVG overlay have both been removed from this figure. Keep it photo-only when integrating or exporting: the bright window exposure, grain and moving coffee gesture now provide a visual pause beside the more graphic candid composition.

- **Native size:** **1254 × 1254** — unchanged.
- **DOM overlays:** zero text blocks and zero SVG marks.
- **Photo:** no crop, filter, transform, retouching or regeneration.

## Tokens and full ratios

| Token | Replacement |
| --- | --- |
| `__CANDID_DATA__` | Full data URL for the new `production/photos/people-candid.webp` |
| `__SOCIAL_DATA__` | Full data URL for the unchanged `production/photos/people-social.webp` |
| `__MARK_PATH__` | Exact `d` from `assets/brand/manwill-hand-lettered-v2.svg`; candid only |
| `__FONT_DATA__` | Full data URL for the corrected variable `assets/inter-tight-latin.woff2` |

Each figure remains an inline-size container. Native aspect ratios and `object-fit: contain` preserve the complete photographs at every width. Styles are isolated under `.hospitality-art`; no new font, logo or copy has been introduced. The physical large-yellow-wordmark shirt and plain tray were not edited.

## Checks for this revision

An isolated in-memory Chromium render was checked at both native dimensions and at 390 px artwork width, without invoking or editing the shared review/export pipeline. Checks passed for full ratio, no text overflow, uniform 9cqw headline metrics, exact candid SVG path, no CSS photo filters/crops, no browser page errors, and zero social overlays. The transformed candid text stays below 59% of frame height; the handoff remains unobscured above it. Source hashing confirms the social photo is unchanged.

Current QA artifacts are outside production exports:

- `/workspace/scratch/manwill-previews/hospitality/people-candid-chez-check-1122.png`
- `/workspace/scratch/manwill-previews/hospitality/people-candid-chez-check-390.png`
- `/workspace/scratch/manwill-previews/hospitality/people-social-chez-check-1254.png`
- `/workspace/scratch/manwill-previews/hospitality/people-social-chez-check-390.png`
- `/workspace/scratch/manwill-previews/hospitality/candid-handoff-native-check.png`
- `/workspace/scratch/manwill-previews/hospitality/chez-layout-check.json`

The older `checks/` captures and `verify.mjs` describe the preceding two-overlaid-image version; that helper assumes a mark on every figure and is not the current acceptance check. They were not modified in this narrowly scoped revision. Use the current QA artifacts above and root's final export checks.
