# Branding ideas for Manwill

A branding proposal for Manwill Brew by Raagul: high-level research and positive directions to discuss with the team. Built with static HTML, CSS and JavaScript.

## Preview

```sh
bash scripts/build.sh
python -m http.server 8000 --bind 0.0.0.0 --directory dist
```

Open http://localhost:8000. Fonts and other assets are local.

## Visual work

A revised yellow T-shirt, two tray options and a motion proof are ready for review at https://raagulmanoharan.github.io/ManWill/review.html . Tray option 1 and the previous straight-on yellow T-shirt are selected and appear in the proposal. The next five editorial pieces are ready at [Next set](https://raagulmanoharan.github.io/ManWill/review.html#next-set), with the original SVG wordmark used directly in their layouts. The supplied hand-lettered SVG is in `assets/brand/`; the serif wordmark and coffee-lettering image still need original files. Previous agent-designed wordmark studies remain superseded.

Read [the visual handoff](production/VISUAL-HANDOFF.md) before resuming. [The slot manifest](production/visual-slots.json) maps every reference, frame, format and agent assignment. There are twelve main-page frames and two slots for actual storefront photographs in the research notes.

Only images marked `approved: true` in the manifest are inserted into the main proposal during the build. The separate review page is explicitly for previewing candidates and is not linked from the proposal. They need a file under `assets/visuals/`, actual dimensions and descriptive alt text. Unapproved files are not copied. Posters and printed pieces retain their complete composition at every viewport size. The cover alone crops a photo behind editable HTML text.

## Files

- `index.html`: the proposal and large image spreads.
- `research.html`: source links, notes and questions for the owners.
- `styles.css`: Inter Tight, Instrument Serif and responsive image layouts.
- `script.js`: the copy-reply button and manual-copy fallback.
- `production/`: reference descriptions and image handoff; excluded from the deployed website.
- `scripts/build.sh`, `scripts/build-visuals.py`: build the public static files in `dist/`.

The reply button only copies text. It does not send an Instagram message.

## Publishing

https://raagulmanoharan.github.io/ManWill/

Pushes to `main` run `.github/workflows/pages.yml`. Raw research documents, unapproved visuals, old wordmark studies and production notes are excluded from the deployment.

The motion proof is authored in `production/motion/`. Rebuild its standalone HTML with `python3 production/motion/build-review.py` while the local preview assets are available. Its final SVG path is identical to the supplied file; reduced-motion preferences show a still wordmark.
