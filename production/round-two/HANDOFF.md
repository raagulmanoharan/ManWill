> Archived layout set. Superseded by the sans-serif modules in hospitality-art, discovery-art, coffee-art and final-art. This directory is not used by the current build. See ../VISUAL-HANDOFF.md.

# Round two editorial compositions

Insert `section.html` into the review page's `<main>` and append `styles.css` after the existing review CSS. Everything is scoped to `.round-two`; no scripts, controls, CSS blur, or CSS grain are added. The four spreads remain a 960px candid portrait, paired pour/counter portraits, a 1040px social square, and an 880px menu portrait. Pairs stack below 761px. Images retain their full native compositions with `width:100%; height:auto`.

Replace the five image tokens with the latest editorial camera-style WebPs. Candid uses `people-candid-editorial-fresh.webp`; the other four use their `*-editorial.webp` revisions. Current native dimensions are 1122×1402 for candid/pour/counter, 1254×1254 for social, and 1086×1448 for menu. The menu expects the cover reading “Tell us / what you like.” and “We’ll help you choose.” The exact wordmark remains a separate graphic over the linen, not printed on the booklet.

Replace `__SERIF_REGULAR_DATA__` and `__SERIF_ITALIC_DATA__` with the existing Instrument Serif font data URLs. `InterTight` is reused from the review template. Each `__MARK_PATH__` must be the unchanged `d` from `assets/brand/manwill-hand-lettered-v2.svg`. All five marks keep the supplied `viewBox="-18 -18 1444 476"`, `fill-rule="evenodd"`, and 1444:476 aspect ratio. The two rotated placements rotate the whole SVG rigidly; the path is never reshaped, cropped, or redrawn.

The revised layouts deliberately interact with the photographs:

- **Candid:** red wordmark across the arm/coffee/legs at y33%, width94%, left3%, rigid −4° rotation. The fresh navy-shirt photograph has been inspected and this placement retained: its full rotated bounding box is x2.03–97.97% and y30.41–60.39%, crossing the arm and glass as an intentional graphic. Existing small footer is retained.
- **Pour:** large red Instrument Serif “Coffee,” at 30cqw, x18.5%/y3.8%; “by hand.” is 29cqw italic, offset back to x4.5%/y22%. A small red exact mark sits on the bright blurred foreground at bottom-left. All lettering stays separate from the photograph.
- **Counter:** cream exact mark is lower and left-biased (x4%/y21%, width84%), with “BREWED / BY HAND” inset at the upper right. Upright graphic geometry contrasts with the tilted tile photograph.
- **Social:** right-aligned lines expand across the frame: “Make” at 19cqw, “yourself” at 20.5cqw, then “a” at 11cqw with “regular.” at 24.8cqw italic. Warm white sans and butter italic cross the shoulder/wall intentionally. The small exact mark is separate at bottom-right, width21%.
- **Menu:** butter exact mark at x5%/y6.5%, width53%, rigid −11° rotation, on clear upper linen; its complete rotated bounding box stays inside the frame. No duplicate external headline or added claims.

Every figure retains its `data-round-visual` QA identifier. Type uses `cqw` and placements use percentages so each poster scales coherently. The only note outside the artwork remains “Generated photography. Artwork and copy proposed for review.” Parent integration owns the final desktop/mobile screenshots and photo/type contrast review. User direction overrides the taste skill's default page templates and restrictions on text over photographs.
