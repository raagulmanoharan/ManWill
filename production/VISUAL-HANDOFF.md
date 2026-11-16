# Manwill visual handoff

The user has authorized the full website, remaining image generation, review and publication on GitHub Pages. This supersedes earlier per-image approval gates. All twelve proposed artwork frames and two authentic shop photographs are part of that production brief.

## Latest design direction

The user's latest steering overrides the serif treatments described in earlier reference notes. Use sans-serif throughout the website and all authored image text. Active artwork uses Inter Tight variable, with every headline line at 9cqw, weight600, line-height1 and tracking−.035em. Do not enlarge individual words. Website headings also share one size at each breakpoint. The supplied organic wordmark remains original artwork; existing signage in real shop photographs remains unaltered.

The page must explain why the proposed direction follows the research: lead with the brewer–guest relationship; make discovery approachable through familiar preferences; use visible making to express the care in the experience. Explain the wordmark, colour, type and photography choices briefly, next to the work. Show Raagul’s analysis and offer, not an unexplained gallery.

## Identity and copy

Use only `assets/brand/manwill-hand-lettered-v2.svg`. Preserve its path and proportions. Earlier agent-designed marks under `assets/identity/` are superseded. The additional serif mark and coffee-lettering photograph were supplied inline without downloadable original files; neither has been redrawn.

The artwork follows three research directions:

1. Personal encounter: “Meet your brewer.” The shirt says “ASK ME ABOUT YOUR COFFEE.”
2. Discovery through familiar preferences: “Tell us what you drink at home.”
3. Visible making: “A front-row seat to your coffee.” / “WATCH YOUR COFFEE / BEING MADE.”

Do not restore “Make yourself a regular”, “Coffee, by hand”, generic slowness/wellness copy, or invented claims about Manwill's staff or services. The proposal is high-level, positive and professional. These are directions to discuss with the team, not a commissioned rebrand or final tagline.

## Photography and selections

Faces stay hidden, including reflections. Use the supplied editorial references: flash, high-key exposure, selective blur, grain and natural imperfections. Inspect hands, glasses, coffee equipment, print and fabric. Avoid plastic skin, repeating swirl texture or implausible construction.

The plain-card tray (`assets/visuals/discovery-tray.webp`) is the user-selected option 1 and remains unchanged. The shirt preserves the selected straight-on red-shirt photograph and large yellow lettering; the small line was changed to “ASK ME ABOUT YOUR COFFEE.” Its physical print is a generated mockup and is not vector-exact. Do not use the rejected angled shirt or earlier swirl-texture edits.

Generated scenes are concept photography, not documentary pictures of Manwill's premises or team. The page says so once, and image alt text describes them as proposed work. Two verified public shop photographs ground the current-brand analysis: the owner’s daytime tree-front image from Google Maps, and a clear counter still from the café’s public Instagram reel. Credits and durable source links are on the research page. See real-shop-provenance.json.

## What the references establish

The references are images attached in the conversation. The IDs below are descriptions for handoff, not downloaded file paths. Pass each agent only its relevant images and brief. If an agent cannot access the image, the parent should supply that specific reference rather than pretending a file exists. Do not paste the whole research history into each agent.

| ID | User reference | What matters |
| --- | --- | --- |
| A1 | Burgundy poster, huge pale handwriting, small building photo in the centre | Expressive lettering and a deliberate difference in scale between type and image; portrait 3:4. |
| A2 | BARI card on a polished steel tray and rust-coloured cloth | Printed material that feels physical; sculptural type and tactile paper; portrait 3:4. |
| A3 | Chez Willy red lettering over people sitting with a drink | Unposed human photograph, tight crop, lettering across the action; portrait 4:5. |
| A4 | Smiling chef with “Meet the people” over her apron | Expressive serif type belongs in the picture. The visible face is superseded by the user's later request to hide faces. |
| A5 | Sunday Loftas, burgundy field, serif headline and keyhole photograph | A complete graphic composition, not a photo with a website caption; landscape about 3:2. |
| A6 | The Lake House lettering over a tiled oven photograph | Warm large serif typography, dark photographic detail, restrained secondary type; portrait 4:5. |
| A7 | “Meet me at the place”, white script and lime serif over a cropped person | Bold type/photo interaction and contrasting letter styles; square. |
| A8 | Rear view of a red-shirted brewer tying a green apron | Face hidden; hands behind the lower back, natural workwear and a caught moment; square. Latest direction: large yellow supplied wordmark with subtle wear and a small brand-voice line below. |
| A9 | Actual Manwill storefront at night | Existing place and sign. Reference for truth to the site, not a generated image. |
| A10 | Actual daytime Manwill sign behind the large tree | Existing colours, compact premises and neighbourhood context. Use the actual photograph. |
| B1 | Coffee dropping into a glass server, “Small actions, big impact” in white | The photograph carries the composition. Two compact blocks of tightly set neutral sans-serif sit in the image. Warm close detail, dark reflections, short lines; portrait 4:5 reference, adapted to a photo-only web cover. |
| B2 | Lunet pour-over, red “Small Cup. Big Shift.” | Editorial high-contrast serif, deliberate regular/italic contrast, warm blur and a close brewing crop. Type is part of the photograph; portrait 4:5. |
| B3 | Grainy “April dump” image, cropped seated person, lime type | Casual analog character, compact sans with an expressive italic gesture. No need to copy checkerboards, stars or the camera-stock credit; portrait 3:4. |
| B4 | Dream State pistachio post: red bold sans, script “No.” over a candid photo | Dense, tightly set grotesk and a single expressive script gesture, with the person still visible. Do not copy the health claim, social icons or handle; portrait 4:5. |

The latest four references reinforce the image/type relationship. Do not reduce them to a colour palette. Avoid generic coffee stock, spotless studio scenes, automatically adding film borders, identical centred headlines, arbitrary decorative marks, or one font treatment repeated across every image. Actual wording should sound like Raagul, not like a wellness campaign. None of the reference slogans is approved Manwill copy.

## Files and build

- `production/photos/`: source photographs for editable poster compositions; not deployed.
- `production/hospitality-art/`: two independently authored people compositions.
- `production/discovery-art/`: menu and discovery poster compositions.
- `production/coffee-art/`: two independently authored brewing compositions.
- `production/round-two/`: archived earlier serif layouts; not included in the active build.
- `production/final-art/`: three additional sans-serif compositions.
- `production/motion/build-review.py`: embeds these sources in the standalone artwork workbook `production/review.html`.
- `scripts/export-artwork.cjs`: renders all nine artworks to full-size WebP files; set `PLAYWRIGHT_MODULE` and `CHROMIUM_PATH` if needed. Serve the rebuilt workbook over HTTP first and set `ARTWORK_URL` to its URL.
- `assets/visuals/`: twelve optimized concept artworks and two authentic shop photographs. Whole posters retain their original ratios on desktop and mobile.
- `production/visual-slots.json`: file, dimensions, alt text and authorization for every live frame.
- `scripts/build-motion.py`, `hero-motion.css`, `hero-motion.js`: coffee-to-wordmark animation. Both final SVG layers preserve the supplied path; reduced-motion users get the still mark and manual controls.
- `scripts/build.sh`: produces the public static website in `dist/`, including the separate review workbook.

The main proposal is the finished client-facing page; the review workbook shows the current artwork and selected applications. Public site: https://raagulmanoharan.github.io/ManWill/ .

Do not stage unrelated old assets. Do not send messages to the café. The reply control copies text for the existing conversation; it sends nothing.
