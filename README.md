# A closer look at Manwill

A personal brand study by Raagul, built with HTML, CSS and JavaScript. The site presents the coffee landscape, three possibilities for Manwill, and an invitation to discuss them. Full-width visual placeholders are waiting for the supplied wordmarks and approved imagery.

## Preview

```sh
bash scripts/build.sh
python -m http.server 8000 --bind 0.0.0.0 --directory dist
```

Open http://localhost:8000. Fonts, styles and scripts are hosted locally.

## Files

- `index.html`: presentation with interactive People, Discovery and Craft sections.
- `research.html`: evidence, references and questions.
- `styles.css`, `script.js`: responsive layout and interaction.
- `assets/`: locally hosted Instrument Serif and DM Sans with their licenses.
- `scripts/build.sh`: copies only public site files to `dist/`.

The conversation button copies a suggested reply for the existing Instagram conversation. It does not send a message. A selectable text fallback works when clipboard access is unavailable.

## Publishing

GitHub Pages: https://raagulmanoharan.github.io/ManWill/

The workflow in `.github/workflows/pages.yml` builds and deploys on pushes to `main`. Raw research documents, internal plans, unused design assets and unapproved wordmark studies are excluded from the build.

## Research

Sources and the limits of the research are described on the research page. The study does not claim a customer survey, validated market sizing or an agreed branding commission.
