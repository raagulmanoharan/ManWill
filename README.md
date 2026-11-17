# Manwill · A reason to return.

A branding and customer experience proposal by Raagul for Manwill Brew. The narrative connects recognition, an approachable first visit, returning guests and take-home beans. All identities, campaign photographs and packaging are illustrative explorations to discuss with the owners, not a final concept.

**Website:** https://raagulmanoharan.github.io/ManWill/

## Build and publish

```sh
bash scripts/build.sh
python3 tests/static-check.py
node --check script.js
```

Pushes to `main` publish `dist/` through the existing GitHub Pages workflow. The build copies the two current pages and their local assets, then adds content hashes to asset URLs. Old motion files, source references and temporary QA pages are not deployed.

## Current sources

- `index.html`, `styles.css`: owner-facing proposal, services, campaign overlays and editable brew card.
- `research.html`: strategic hypothesis, context, actual shop photographs and credits.
- `assets/editorial/coffee-lettering-white.webp`: still coffee hero on white. No transition, alternate logo, controls or caption strip.
- `assets/editorial/brewing-editorial.webp`: new close editorial brewing photograph replacing the window image.
- `assets/editorial/{macro,beans}.webp` and `assets/visuals/people-brewer.webp`: illustrative campaign, packaging and workwear images.
- `assets/brand/manwill-hand-lettered-v2.svg`: existing exploratory logotype, unchanged.
- `script.js` and `assets/vendor/`: locally vendored GSAP/ScrollTrigger for one-time heading and artwork reveals. The hero is excluded. Reduced-motion users get a still page.
- `production/editorial/PLAN.md`: current creative brief and asset provenance.
- `production/editorial/QA.md`: checks for the current revision.

Unused earlier artwork remains in the repository as history. The production build uses only the current assets, real shop photos on the notes page and the local font.

## Proposal limits

The business outcomes are goals to agree on and test with the owners. They are not research findings or sales forecasts. Generated photographs do not depict the actual team or premises. Packaging sizes, coffee details, materials and production artwork need a separate brief and approval.
