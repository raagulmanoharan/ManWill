# Branding ideas for Manwill

A complete visual branding proposal by Raagul, with twelve full-size artworks, two verified photographs of the actual shop, a coffee-to-wordmark transition and a linked research page. The content connects the proposed wordmark and art direction to the three research wedges and Raagul’s offer.

**Website:** https://raagulmanoharan.github.io/ManWill/

## Preview and publish

```sh
bash scripts/build.sh
python3 -m http.server 8000 --bind 0.0.0.0 --directory dist
```

Pushes to `main` deploy `dist/` through `.github/workflows/pages.yml`. HTML, CSS, JavaScript, fonts and artwork are local assets. Raw research and production photographs are excluded from the deployment.

## Editing

- `index.html`, `research.html`, `styles.css`, `script.js`: proposal, research and reply-copy interaction.
- `production/visual-slots.json`: fourteen included images, actual dimensions and alt text.
- `assets/brand/manwill-hand-lettered-v2.svg`: the supplied original wordmark. Earlier generated identity studies are superseded.
- `hero-motion.css`, `hero-motion.js`, `scripts/build-motion.py`: accessible image-to-wordmark motion using the exact SVG path.
- `production/hospitality-art/`, `production/discovery-art/`, `production/coffee-art/`, `production/final-art/`: independently authored artwork layouts with one shared sans-serif specification.
- `production/photos/`: source concept photography.

Read [the visual handoff](production/VISUAL-HANDOFF.md) before changing artwork. Rebuild the self-contained review workbook with `python3 production/motion/build-review.py`. Serve it locally and run `scripts/export-artwork.cjs` with Playwright and Chromium available to export the nine designed compositions. The shirt, selected tray and cover are direct photograph exports.

Campaign photographs are generated proposals, not actual Manwill staff or premises. The two current-brand photographs are authentic and credited on the research page. Physical shirt/card logos are illustrative mockups; graphic overlays and animation use the supplied vector unchanged. The reply button copies text and never sends a message.

Typography uses the verified Inter Tight variable font. All campaign headline lines use the same size and weight; no serif display fonts are deployed. The supplied wordmark and existing shop signage are preserved. See production/FONT-SOURCE.md.
