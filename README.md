# Manwill · At the bar. Beyond the bar.

An editorial brand proposal by Raagul for Manwill Brew. The current revision includes a white-background edit of the supplied coffee-lettering photograph dissolving into the original wordmark, two campaign compositions, a close brewing photograph, a new whole-bean packaging concept, a take-home brew card, and the selected shirt and tray applications.

**Website:** https://raagulmanoharan.github.io/ManWill/

## Build and publish

```sh
bash scripts/build.sh
node tests/hero-motion.cjs
python3 tests/static-check.py
```

Pushes to `main` publish `dist/` through the existing GitHub Pages workflow. The build copies only the two current pages and their local assets, then adds content hashes to asset URLs. It does not publish the older artwork review workbook or source references.

For a conventional local preview, serve `dist/` with your preferred static server. The managed Cloud environment uses `sites-preview` with an ignored local preview configuration.

## Current sources

- `index.html`, `styles.css`: the proposal, campaign overlays and editable brew card.
- `research.html`: context, actual shop photographs, credits and production notes.
- `hero-motion.js`, `hero-motion.css`: single-play dissolve and accessible manual controls. Pausing preserves the playback direction; hidden tabs and offscreen heroes suspend animation; reduced motion uses instant endpoints.
- `assets/editorial/coffee-lettering-original.jpg`: unchanged uploaded source, retained in the repository.
- `assets/editorial/coffee-lettering-white.webp`: background-neutralized hero edit requested in the latest feedback. The website canvas is pure white.
- `script.js` and `assets/vendor/`: locally vendored GSAP/ScrollTrigger 3.15.1 for one-time heading and artwork reveals. CSS supplies small hover transitions; reduced-motion users get a still page.
- `assets/brand/manwill-hand-lettered-v2.svg`: unchanged original logotype. Native applications use the entire SVG, without path replacement or distortion.
- `assets/editorial/{counter,pour,macro,beans}.webp`: the four new optimized generated photographs.
- `assets/visuals/people-brewer.webp` and `discovery-tray.webp`: previously selected applications, preserved unchanged.
- `production/editorial/PLAN.md`: current creative brief, asset prompts, source distinctions and implementation decisions.
- `production/editorial/QA.md`: checks for this revision.

The current brief supersedes the older instruction to preserve the copy and twelve-image architecture. `production/visual-slots.json`, the old artwork compositions and older motion builders remain historical source material and are no longer used by the site build.

## Production limits

The main page presents proposed work. Generated people and environments are not documentary photographs of Manwill. Actual shop photographs and credits are on the notes page. The 250 g bags illustrate the packaging system; final coffee names, origin, roast details, pack sizes/materials and required label information need confirmation. Physical mockups are illustrative; final print artwork should use the supplied vector master.
