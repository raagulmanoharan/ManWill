# People compositions — sans-only production handoff

Integrate `section.html` and `styles.css` together. The two figures retain `data-round-visual="people-candid"` and `data-round-visual="people-social"`. All styles are scoped under `.hospitality-art`, with a unique font-family name to avoid collisions. Retain that wrapper when extracting either figure.

## Current typography specification

Every headline word and line uses **Inter Tight, 9cqw, weight 600, line-height 1, letter-spacing −.035em, normal style**. Child spans inherit these values without font-size or weight overrides. There is no serif, italic treatment, or separate small copy block. Layout differences come from alignment, line breaks and colour only, following the latest shared campaign specification.

- **Candid:** “Meet your / brewer.” in two equal-sized lines on the navy shirt area. Cream and red connect the invitation to the existing palette. The coffee, hands and complete seated photograph remain visible.
- **Social:** “Ask me / about your / coffee.” in three equal-sized, left-aligned lines on the green wall. The redundant “Meet your brewer” intro was removed. The stable and moving coffee gestures stay clear.

The supplied organic mark remains quiet: 18.4% of canvas width on candid and 18.5% on social. Its path, viewBox and fill rule are preserved; it is not a generated or retyped logo. Both are editorial graphic overlays, not claims of physical shirt printing. The separately selected physical-shirt photograph was not edited in this task.

## Tokens and sources

| Token | Replacement |
| --- | --- |
| `__CANDID_DATA__` | Full data URL for `production/photos/people-candid.webp` |
| `__SOCIAL_DATA__` | Full data URL for `production/photos/people-social.webp` |
| `__MARK_PATH__` | Exact, unchanged `d` from `assets/brand/manwill-hand-lettered-v2.svg` |
| `__FONT_DATA__` | Full data URL for the corrected variable Inter Tight WOFF2 |

The font-face declares the real 400–700 range. Initial QA used `/workspace/scratch/inter-tight-variable.woff2`, the corrected variable file supplied by the parent. The repository's `assets/inter-tight-latin.woff2` now has the identical SHA-256 hash, so the reusable helper uses that corrected repository asset. Do not restore the earlier static regular font.

## Full canvas sizes

| ID | Export size | Ratio |
| --- | --- | --- |
| `people-candid` | 1122 × 1402 | Native portrait ratio |
| `people-social` | 1254 × 1254 | 1:1 |

Each figure is its own inline-size container, so the `cqw` typography scales with the artwork rather than the browser viewport. CSS aspect ratios match the complete source images. Photos use `object-fit: contain` with no filters, transforms, retouching, regenerated detail or cropping. Original flash, highlights, motion softness and grain remain unchanged.

For native exports, render the figure at the table width and set its `max-width: none`; keep its full computed height. The helper below does this without changing the production CSS. Do not export a screenshot of a cropped viewport.

## Independent verification

Run `node production/hospitality-art/verify.mjs` in the workspace. It substitutes the four tokens locally and uses Chromium. The helper and its outputs are confined to this directory.

Checked at native export dimensions and at **390 px artwork width**:

- Correct complete aspect ratios and no headline overflow.
- Every headline line has the same 9cqw size, 600 weight, 1 line-height and −.035em tracking; computed style is normal.
- Corrected variable Inter Tight loads; no serif or italic font is requested.
- Exact supplied SVG path is preserved in each rendered figure.
- Source photos retain their native dimensions, `contain` fit and `filter: none`.
- No browser page errors.
- Full-size and phone-size screenshots visually reviewed; hands and coffee remain unobscured, and both marks remain readable.

Artifacts:

- `checks/people-candid-1122.png` and `checks/people-social-1254.png` — native composition renders.
- `checks/people-candid-390.png` and `checks/people-social-390.png` — phone-width checks.
- `checks/preview.html` — self-contained local preview.
- `checks/layout-report.json` — machine-readable results.

Only files within `production/hospitality-art/` were created or edited. No site, existing artwork directory, source photograph, final shirt, manifest, commit or publication changes were made. Root owns integration and the final set of nine exports.
