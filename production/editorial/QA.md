# Editorial revision checks

16 November 2026

- Built the site using the existing GitHub Pages build entry point.
- Checked rendered layouts at 320, 390, 768, 1024 and 1440 pixel frame widths. No horizontal page overflow, overflowing text or broken loaded images. Also inspected the desktop page in the browser at a 1363 pixel viewport.
- Visually inspected the opening photograph/vector transition, campaign poster, phone opening, phone bean packaging, tablet brew card and phone closing. Fixed missing arrow glyphs by using small native SVG icons. Fixed the companion page's mobile back navigation.
- Verified all local page, image, font and stylesheet targets and all internal anchors. All image elements have alt text.
- Verified the exact uploaded coffee image is copied without modification: SHA-256 `9758ee3fb222d95186fb0b8b53e403b697025aed2e752e310ecb7ae961974c47`.
- Original wordmark file, selected shirt and selected tray remain unchanged from the starting commit. Final hero uses the complete source SVG at a uniform scale. The liquid and vector outlines differ, so the transition is a closest optical alignment and dissolve, not a geometric morph.
- Automated motion checks cover autoplay, photo and wordmark endpoints, reverse playback after pause, hidden-tab suspension, offscreen suspension, and reduced-motion/manual behavior.
- No application JavaScript errors observed in the browser. Browser-extension metadata errors were unrelated to site code.
- The generated bag label was reviewed and an unnecessary slogan removed. It now contains only whole-bean identification and the proposed weight. Copy on the two campaign images invites a conversation rather than describing the image.
- Production build excludes source references, temporary QA harnesses and the stale artwork workbook. All imagery is local and lazy-loaded except the opening hero.

Run `node tests/hero-motion.cjs` and `python3 tests/static-check.py` after building. The photographic mockups remain concept work; production packaging information needs the actual business inputs.

## White canvas and motion update

- Verified computed page and final hero backgrounds are `rgb(255, 255, 255)`. Removed the overall paper/grain overlay and the red closing-section background.
- Visually reviewed the white-background hero derivative against the source. The uploaded original remains unchanged; the live edited derivative has a neutral background.
- Locally vendored GSAP/ScrollTrigger 3.15.1. Checked heading line clips and one-time artwork reveals; full artwork is restored after each entrance.
- Added CSS link-arrow, underline and hero-control feedback. Motion is scoped to `prefers-reduced-motion: no-preference`, with a readable no-JavaScript fallback.
