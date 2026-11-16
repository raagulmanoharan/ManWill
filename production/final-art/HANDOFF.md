# Three editorial compositions — consistent type

This module owns only `landscape-poster`, `compare-technical` and `compare-lifestyle`. Discovery artwork belongs to the print module. Only these three files were edited.

Insert `section.html` with `styles.css`. Everything is scoped to `.final-art`. The sole font token is `__FONT_DATA__`, used by `ManwillFinalSans` as normal-style InterTight. Embed the genuine variable font. Every headline across all three canvases shares one declaration: **9cqw / weight600 / line-height1 / letter-spacing−.035em / normal style**. All words and lines inherit those exact values; no child size or weight overrides remain. The small secondary coffee line was removed. Artwork contains one text treatment plus the original logo.

| `data-final-visual` | Native canvas | Photo token | Layout |
| --- | --- | --- | --- |
| `landscape-poster` | 1536×1024 | `__ENCOUNTER_DATA__` | “Meet your / brewer.” in an open paper field, above a wide rectangular crop of the exchange. Original mark at upper right, width18%. |
| `compare-technical` | 1122×1402 | `__COUNTER_DATA__` | “A front-row / seat.” directly over the quiet green tiles. Close counter photo and a narrow paper foot with the original mark, width20%. |
| `compare-lifestyle` | 1122×1402 | `__ENCOUNTER_DATA__` | “Meet your / brewer.” above the photograph, with the original mark quietly in the lower margin, width20%. |

Sources were inspected at `production/photos/counter-encounter.webp` and `production/photos/craft-poster.webp`. The landscape and hospitality crops preserve the central coffee glass and both hands. The landscape removes unused tile space above the exchange; its crop position is 50%/78%. Designed photo windows may crop; the complete artwork always keeps its native ratio and remains whole. No CSS filters, textures, decorative apertures or additional typefaces are used.

Replace all three `__MARK_PATH__` tokens with the original supplied SVG path unchanged. Every mark retains `viewBox="-18 -18 1444 476"`, `fill-rule="evenodd"` and 1444:476 proportions. All other lettering is accessible live text.

Copy remains an invitation grounded in the research: personal encounter leads, with visible making as a complementary experience. Both comparison compositions are positive proposals. The note outside the artwork identifies generated photography and proposed copy. Root owns integrated browser QA and full-canvas exports.
