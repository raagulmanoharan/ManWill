# Coffee artwork — sans-serif revision

Two independent artwork canvases for the visible-making research wedge. The approved-direction photograph bases stay untouched. The pour carries a tight, bold red invitation over the dark apron; the counter uses cream Inter Tight over the open green tiles, with a small upper-right wordmark. Each entire headline has one font size, one weight and one line height across all its lines. The coffee and brewing apparatus remain visible.

## Integration

- Read `styles.css` and `section.html`; the wrapper class is `.coffee-art`.
- Replace `__FONT_DATA__` with the data URL for `assets/inter-tight-latin.woff2`. This is the only text font. Its face is declared for normal weights 400–700. The old file at that path was static Regular; it has now been replaced, with root authorization, by the verified Inter Tight variable file (details below).
- Replace `__POUR_DATA__` with `production/photos/craft-pour.webp` as a data URL.
- Replace `__COUNTER_DATA__` with `production/photos/craft-poster.webp` as a data URL.
- Replace both `__MARK_PATH__` tokens with the exact path data from `assets/brand/manwill-hand-lettered-v2.svg`. No redrawing or path modification.
- Export `[data-round-visual="craft-pour"]` and `[data-round-visual="craft-poster"]` individually at **1122 × 1402**. Keep the `.coffee-art` ancestor in the export document so the scoped styles apply. Override the pair to one column, or omit the pair and place the individual figure directly within `.coffee-art`, when exporting one canvas.
- Wait for `document.fonts.ready` and the photograph's `decode()` before capturing. Use the explicit 1122 × 1402 attributes; do not depend on the initial size of a lazy image.

## Copy and source status

- `craft-pour`: “A front-row / seat to your / coffee.” All three lines use the shared campaign style: **9cqw / 600 / 1**, letter spacing **−0.035em**, normal style, with one shared left alignment. No enlarged word or indentation.
- `craft-poster`: “WATCH YOUR COFFEE / BEING MADE.” Both lines use the identical **9cqw / 600 / 1 / −0.035em** campaign style. Slashes denote line breaks and are not printed.
- Exact supplied wordmark is separate editorial artwork, not a claim of physical printing in the scene.
- Both photographs are proposed generated scenes, not actual Manwill staff or premises. Their existing flash, blur and grain are preserved without filters, overlays or new image generation.

## Checks

- Rendered and visually inspected both canvases at 1122 px and 390 px wide using the actual variable font. Automated layout checks also passed at 320 px.
- At native size both canvases and photographs are exactly **1122 × 1402**. At smaller sizes the full native ratio is preserved.
- All lettering and wordmarks remain inside their canvas bounds; no page overflow or browser errors. The large pour headline clears the spout and filter, and the counter headline clears the brewing apparatus.
- Both SVG paths match the supplied source byte for byte after token replacement.
- Computed copy uses only normal Inter Tight, weight 600. Every line in both headlines inherits the same size, weight, line height and tracking from one shared rule; there are no child size overrides. There are no serif or italic declarations and no synthetic bold.
- QA previews: `/tmp/manwill-coffee-art-qa/craft-pour-1122.png`, `craft-poster-1122.png`, plus their `-390.png` and `-320.png` versions. Validation script: `/tmp/manwill-coffee-art-qa/check.cjs`.

## Shared font correction

Root explicitly authorized replacing `assets/inter-tight-latin.woff2` so the declared bold weights render correctly across the new sans-serif work.

- Source supplied by root: `https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsH8ag.woff2`
- Verified family: **Inter Tight**; `fvar` axis: `wght` minimum 100, default 400, maximum 900. These canvases use 600 for headline copy.
- Installed size: **44,872 bytes**.
- SHA-256: `77fefe8ca19b9f69b5284832c519e0493127c1f091f0a8936884be7721c4e618`.
- Previous static Regular file backed up to `/tmp/manwill-coffee-art-qa/inter-tight-original-static.woff2`. No project dependencies were changed.
