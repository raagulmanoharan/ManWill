# Current revision checks

- Built the production bundle and checked both pages for local file references, internal anchors, duplicate IDs, alt text and CSS asset paths.
- Confirmed the hero contains one still coffee photograph, no buttons, no text strip, no alternate logo and no motion script. Its white background and original image proportions remain intact.
- Visually inspected the new editorial photograph and native logo overlay, desktop introduction and services, mobile introduction, mobile services and the editorial frame at the narrowest size.
- Checked responsive frame widths 320, 390, 768 and 1024 px, plus the full desktop viewport. No horizontal document overflow, clipped copy or broken loaded images was observed.
- Confirmed the business rationale, expanded services, first-phase approach and illustrative status are present in the rendered accessibility tree.
- Reviewed the notes page, including the distinction between strategic hypotheses and research findings, and between generated explorations and actual shop photographs.
- The production build excludes the temporary responsive-review page, old hero motion files, the window photograph, the duplicate pour photograph and the redundant tray application.
- Existing reduced-motion and no-animation-library fallbacks remain in the GSAP setup. The hero is outside all animation targets.

Commands: `bash scripts/build.sh`, `python3 tests/static-check.py`, `node --check script.js`, `git diff --check`.
