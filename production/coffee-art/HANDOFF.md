# Coffee artwork — distinct preparation view

The close pour photograph stays unchanged: its bright foreground obstruction, moving kettle and clear water stream are the strongest existing match to the B2 close-process direction. Its copy now forms one continuous horizontal red line above the filter. The paired-block treatment remains unique to the preparation image.

The `craft-poster` canvas now shows a new overhead paper-filter preparation photograph. Pale steel, cropped hands and the filter's opening replace the repeated green-tile counter scene. Two compact, equal-size blocks use the quiet layout relationship described in B1. Root described the original references; they were not available as local reference files for this generation.

## Integration

- Read `styles.css` and `section.html`; the wrapper class is `.coffee-art`.
- Replace `__FONT_DATA__` with the data URL for `assets/inter-tight-latin.woff2`. This is the only text font. Its face is declared for normal weights 400–700. The old file at that path was static Regular; it has now been replaced, with root authorization, by the verified Inter Tight variable file (details below).
- Replace `__POUR_DATA__` with `production/photos/craft-pour.webp` as a data URL.
- Replace **`__PREPARATION_DATA__`** with the new `production/photos/craft-preparation.webp` as a data URL. This replaces `__COUNTER_DATA__` in the coffee artwork.
- Replace both `__MARK_PATH__` tokens with the exact path data from `assets/brand/manwill-hand-lettered-v2.svg`. No redrawing or path modification.
- Export `[data-round-visual="craft-pour"]` and `[data-round-visual="craft-poster"]` individually at **1122 × 1402**. Keep the `.coffee-art` ancestor in the export document so the scoped styles apply. Override the pair to one column, or omit the pair and place the individual figure directly within `.coffee-art`, when exporting one canvas.
- Wait for `document.fonts.ready` and the photograph's `decode()` before capturing. Use the explicit 1122 × 1402 attributes; do not depend on the initial size of a lazy image.
- `production/photos/craft-poster.webp` is preserved unchanged for the separate technical comparison image. No manifest, builder, final export or website files were edited in this task.

## Copy and source status

- `craft-pour`: “A front-row seat to your coffee.” on one uninterrupted horizontal line at x6%, y38%. Every word uses **6.3cqw / 600 / 1**, tracking **−0.035em**, normal Inter Tight, red. The line stays within the available 88% width. Exact SVG stays at the lower left, reduced to 16% width.
- `craft-poster`: “WATCH YOUR / COFFEE” at x7%, y9%; “BEING / MADE.” at x66%, y9%. Every word uses **4.4cqw / 600 / 1 / −0.035em**, normal Inter Tight, dark green ink. Exact SVG at x7%, y22.5%, 18% width, above the paper and hands. Slashes denote line breaks and are not printed.
- Font sizes do not vary between words within either image. The image-specific compact scale supersedes the earlier shared 9cqw layout.
- Exact supplied wordmark is separate editorial artwork, not a claim of physical printing in the scene.
- Both photographs are proposed generated scenes, not actual Manwill staff or premises. The pour photograph is unchanged; the preparation photograph is one new generation, without any generated words or logo. No hero image was generated or replaced.

## New photo

- File: `production/photos/craft-preparation.webp`, **1122 × 1402**, **220,328 bytes**.
- Preserved original: `/workspace/generated_images/exec-793749ae-ea01-4006-8009-5634951a54f5.png`.
- One fresh candidate generated. Inspected paper seam, holding fingers, wrists, contact shadows, cropped kettle and glass; no material defect identified. Faces and reflected faces are absent.

## Checks

- Rendered and visually inspected both canvases at 1122 px and 390 px wide using the actual variable font. Automated layout checks also passed at 320 px.
- At native size both canvases and photographs are exactly **1122 × 1402**. At smaller sizes the full native ratio is preserved.
- All lettering and wordmarks remain inside their canvas bounds; no page overflow or browser errors. Preparation text clears the hands and paper. The pour line crosses the brewing photograph above the filter while keeping the main water stream and coffee bed visible.
- Both SVG paths match the supplied source byte for byte after token replacement.
- Computed copy uses only normal Inter Tight, weight 600. Every word within an image has identical computed size, weight and line height. There are no child size overrides, serif or italic declarations, or synthetic bold.
- Local QA previews: `/tmp/manwill-coffee-art-qa/craft-pour-1122.png`, `craft-poster-1122.png`, plus their `-390.png` and `-320.png` versions. Validation script: `/tmp/manwill-coffee-art-qa/check.cjs`. These are not website exports.

## Shared font correction

Root previously authorized replacing `assets/inter-tight-latin.woff2` so the declared bold weights render correctly. The font file was not changed in this round.

- Source supplied by root: `https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsH8ag.woff2`
- Verified family: **Inter Tight**; `fvar` axis: `wght` minimum 100, default 400, maximum 900. These canvases use 600 for headline copy.
- Installed size: **44,872 bytes**.
- SHA-256: `77fefe8ca19b9f69b5284832c519e0493127c1f091f0a8936884be7721c4e618`.
- Previous static Regular file backed up to `/tmp/manwill-coffee-art-qa/inter-tight-original-static.woff2`. No project dependencies were changed.
