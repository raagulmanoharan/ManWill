# Read this before resuming image work

Raagul has supplied the hand-lettered SVG at `assets/brand/manwill-hand-lettered-v2.svg` and asked the agents to resume. Three first-round pilots are complete. The user selected the plain-card tray and restored the previous straight-on yellow T-shirt. He explicitly authorized the next set of work. The chunky serif wordmark and coffee-lettering image are visible inline in chat but their original files are still needed. Use supplied files only. The old studies under `assets/identity/`, including the misleadingly named `manwill-primary`, must not be used. They were superseded by the user.

The user explicitly authorized the next set of work after selecting the first applications. Proceed with five new pieces: people-candid, people-social, discovery-menu, craft-pour and craft-poster. No further permission is needed to produce this set and show it on the review page. Keep other future concepts pending. Do not alter the two selected application images.

The website is a personal proposal to the café, not its finished customer-facing website. The images should demonstrate the work Raagul could do. Generated staff or interiors must be described as proposed images, not documentary photographs. Once a generated image is approved for use, include that distinction naturally in its alt text or an accompanying note.

## Latest photography direction

Keep the tray and card branding discreet. The user liked the smaller card preview and requested a second variant closer to A2. The T-shirt has a specific exception: a large warm-yellow supplied wordmark across the back, with lightly worn ink and a small supporting line in the brand’s own voice. Leave room for the person and setting. Poster headlines may also use the large scale shown in the references.

Hide faces throughout the proposed people photography. Prefer a rear view, a crop below the head, or hands at work. Check mirrors and reflections too. A8 is now the framing reference for the brewer; A4 does not authorize a frontal face. Never distort garments or poses just to make a logo visible. From behind a normal apron, only its waistband and ties are visible; its body stays in front.

Latest user direction is more expressive and closer to the references: editorial flash photography, high-key exposure, selective motion or foreground blur, visible film grain and noise. These are now requested camera qualities. Vary them by composition; do not give every frame the same soft daylight treatment. Keep physical detail believable and faces hidden. Avoid repeating embossed/swirl texture, waxy skin, glossy product-render lighting and fake decorative distress. Check hands, garment construction, contact shadows, reflected objects and coffee equipment. Do not promise generated imagery is indistinguishable from photography.

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

## Keep the tasks separate

`visual-slots.json` assigns each frame and gives its individual brief:

- Hospitality agent: `people-candid`, `people-brewer`, `people-social` only.
- Print agent: `discovery-tray`, `discovery-menu` only.
- Craft agent: `cover-coffee`, `craft-pour`, `craft-poster` only.
- A separate poster agent, after approval: `handwritten-poster`, `landscape-poster`.
- A separate comparison agent, after approval: the two positive reference directions (coffee knowledge and sense of place). These no longer represent directions to avoid.
- Parent: the actual shopfront photos, approved asset insertion, testing and publishing.

No wordmark agent is needed. The supplied hand-lettered SVG is available; its faithful PNG render for image-generation reference is `/workspace/scratch/manwill-previews/identity/manwill-hand-lettered-v2.png`. Do not redraw the serif mark from memory. The current motion proof preserves the supplied SVG path exactly and uses the new macro coffee pilot as a temporary photo source.

## How the page handles the images

Twelve frames are on the main page, with two actual-photo frames in the research notes. These are large image spreads, not thumbnail galleries. Portraits, square images and landscape compositions keep their complete dimensions on desktop and mobile.

Every frame has a stable `data-visual` ID. The build reads `production/visual-slots.json`. Once the user approves an asset, the parent sets its `src`, `approved: true`, actual `width`, actual `height` and a factual `alt` description. Save public image exports under `assets/visuals/`. Keep originals, working files, unapproved output and wordmark studies elsewhere.

The build publishes only approved image paths listed in the manifest, removes their placeholder labels, and writes normal static `<img>` elements. There is no client-side image loader. A missing approved file stops the build. Pending files remain placeholders and are not copied to the public site.

All artwork with lettering is shown in full at its intrinsic aspect ratio. Do not use `object-fit: cover` on a poster, tray card, menu or square social composition. Do not put more HTML text over a finished poster.

The cover is the single exception: it is a photo without baked-in type, cropped responsively behind two small HTML text blocks. Keep the coffee action near the centre and darker areas behind those blocks. Review its 1440px and 390px crops after insertion. The HTML cover text should not be repeated inside the photo.

Suggested delivery sizes are in the manifest, not mandatory source dimensions. Record the real dimensions. Return an optimized WebP or JPEG for photographs, PNG/WebP for graphic work where needed, and preserve the original separately. Avoid tiny text and keep lettering comfortably inside the edges. The parent should review readability on a phone before publishing.

## Copy voice

Latest user direction: professional, high-level and positive overall. Focus on what Manwill can build on. Keep detailed diagnostics, execution choices and questions out of the public page. The two comparison frames now explore a positive balance of coffee knowledge and sense of place, not mistakes to avoid. Offer broad proposals for how Manwill can improve its branding. Do not lead with “I visited your place, so I made this”, the cold outreach story, or a personal account of doing the research. Explain what the references suggest, what Manwill could do, and what needs to be understood with the team.

Keep Raagul’s direct language and contractions. Name practical outcomes: helping a first-time visitor choose a coffee, giving the brewer a presence in the photography, or making the business recognisable online. Keep paragraphs short and avoid jargon. “A proposal for how Manwill could build a stronger identity around the way it makes and serves coffee” is the intended register.

Avoid little slogan triplets, “the pour, the pause, the attention”, “distinctly yours”, “a look makes a promise”, “unmistakably”, “territories”, “expressive layers”, or claims of transformation. None of the reference slogans is approved Manwill copy. The user has authorized the current five-piece set, including proposed copy for review. Do not treat its copy as a final brand tagline.


## Application revisions

`review.html` is an explicit preview page for Raagul, with generated application previews and an interactive photo-to-wordmark transition. Tray option 1 (the plain card and coffee glass) is selected and approved for the main proposal. The selected previous T-shirt is also approved and inserted. Other slots remain placeholders pending review. The review page is public on the requested GitHub Pages host and is not linked from the client-facing proposal. It is not a private or secret page.

Source: `production/motion/review-template.html`, `transition.js`, and `build-review.py`. The builder embeds assets into `production/review.html`, which is copied to `dist/review.html`. The standalone copy is `/workspace/scratch/manwill-previews/manwill-review.html`. This review-only export does not change the main-page approval requirement.

The printed and embroidered marks in generated mockups closely follow the supplied reference but are not vector-exact. The review page states that limitation. Do not call them final production logo artwork. The animation uses the original vector path unchanged.

The user explicitly selected tray option 1: plain card with coffee glass, source discovery-tray-pilot-v2.png. Preserve it unchanged and use it for the main discovery-tray slot. Keep the scalloped card as an unselected review alternative. The shirt copy must speak from Manwill, not from the wearer. “MANUAL COFFEE / PONDICHERRY” and “I’LL HAVE MY USUAL.” were rejected for the shirt. Do not reuse either in the shirt artwork. Category and location remain appropriate factual secondary information on the card.

The latest shirt preview proposes “MAKE YOURSELF A REGULAR.” as an invitation from Manwill. It is a copy option for review, not an approved final tagline. Large yellow lettering and worn-in print were explicitly requested; the small-card direction does not apply to this shirt.

The shirt selection is now fixed. Earlier print-realism feedback led to experiments, but the user restored the previous published image because the new wordmark looked modified. Do not continue those experiments.

Do not use people-brewer-printed-preview.png or people-brewer-printed-v2-preview.png as source images: iterative edits introduced coarse artificial swirl texture into the cloth. They failed internal review. The fresh angled image people-brewer-fresh-printed-preview.png was rejected by the user for changing the wordmark. It is not a current candidate.

## Current selection and next set

The latest user instruction overrides the shirt realism experiments: restore `people-brewer-brand-preview.png` unchanged. The fresh angled image was rejected because the wordmark looked modified. Do not repair or regenerate the selected shirt. Tray option 1 remains selected. Both selected exports are copied byte-for-byte under `assets/visuals/`.

The next five pieces are photo-led editorial compositions. Generate photographs without logos or lettering. Add the original supplied SVG directly as a deliberate graphic element in the HTML artwork; preserve its exact path and aspect ratio. This is poster typography, not a simulated print onto a shirt or paper. Typography uses Inter Tight and Instrument Serif, with distinct arrangements informed by the supplied references. This prevents further generator changes to the wordmark. New copy and compositions are for review.

Five new pieces are available in the review page’s `#next-set` section. Source markup and scoped styles are in `production/round-two/`. Generated photo sources and full-size browser-rendered artwork exports are in `/workspace/scratch/manwill-previews/round-two/`; exports preserve the original supplied SVG shapes. These five images await selection for the main proposal. The menu-cover copy is generated as print on paper; its Manwill mark remains an exact SVG graphic outside the paper.

Latest review direction for the five-piece set: typography should be expressive in scale, alignment and its relationship to the photograph, close to the provided Chez Willy, Lunet, April and Dream State examples. Avoid safe small captions parked in a corner for every frame. Keep the exact SVG mark, even when scale, colour or rigid rotation changes. Camera blur/grain is authored into the photographs via image generation, not added as a CSS overlay.
