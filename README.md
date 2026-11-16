# Branding ideas for Manwill

A visual branding proposal by Raagul, with twelve full-size artworks, two verified photographs of the actual shop, a coffee-to-wordmark transition and a linked research page. The content connects the proposed wordmark and art direction to the three research wedges and Raagul’s offer.

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
- `production/hospitality-art/`, `production/discovery-art/`, `production/coffee-art/`, `production/final-art/`: independently authored artwork layouts with sans-serif headlines whose words share one size within each artwork.
- `production/photos/`: source concept photography and the credited actual doorway photograph.

Read [the visual handoff](production/VISUAL-HANDOFF.md) before changing artwork. Rebuild the self-contained review workbook with `python3 production/motion/build-review.py`. Serve it locally and run `scripts/export-artwork.cjs` with Playwright and Chromium available to export the nine designed compositions. The shirt, selected tray and cover are direct photograph exports.

Campaign photographs are generated proposals, except for the credited actual doorway used in the landscape poster. The two current-brand photographs are also authentic and credited on the research page. Physical shirt/card logos are illustrative mockups; graphic overlays and animation use the supplied vector unchanged. The reply button copies text and never sends a message.

Typography uses the verified Inter Tight variable font. Within each campaign headline, all words use the same size and weight; no serif display fonts are deployed. The supplied wordmark and existing shop signage are preserved. See production/FONT-SOURCE.md.

## Current hero dependency

The user requested their coffee-written Manwill photograph dissolving to the original SVG. That photograph is visible inline in the conversation but has not been supplied as an accessible file. The existing macro-to-wordmark hero is an earlier implementation and does **not** fulfil this correction. Exact-source requirements and the implementation plan are in `production/motion/COFFEE-LETTERING-HANDOFF.md`.

Read `production/REFERENCE-DIRECTION.md` for the recovered references, latest constraints and distinct photo allocation.
