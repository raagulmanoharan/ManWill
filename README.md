# Some thoughts for Manwill

Raagul’s personal branding proposal for Manwill Brew. The writing follows his outreach: what he liked, what he looked at, and what he would like to discuss with the owners. Built with static HTML, CSS and JavaScript.

## Preview

```sh
bash scripts/build.sh
python -m http.server 8000 --bind 0.0.0.0 --directory dist
```

Open http://localhost:8000. Fonts and other assets are local.

## Visual work

Image generation is paused for review. Use only wordmarks supplied by Raagul. The old generated wordmark studies are superseded and are not published.

Read [the visual handoff](production/VISUAL-HANDOFF.md) before resuming. [The slot manifest](production/visual-slots.json) maps every reference, frame, format and agent assignment. There are twelve main-page frames and two slots for actual storefront photographs in the research notes.

Only images marked `approved: true` in the manifest are inserted during the build. They need a file under `assets/visuals/`, actual dimensions and descriptive alt text. Unapproved files are not copied. Posters and printed pieces retain their complete composition at every viewport size. The cover alone crops a photo behind editable HTML text.

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
