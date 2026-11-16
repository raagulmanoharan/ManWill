# Read this before resuming image work

Image generation is paused. Raagul will supply the wordmarks. Use those files only. The old studies under `assets/identity/`, including the misleadingly named `manwill-primary`, must not be used. They were superseded by the user.

Get agreement on one specific pilot before generating it. Show that pilot and get approval before the full set. This document and the empty frames do not authorize generation. Do not infer approval from elapsed time or from a request to change the website.

The website is a personal proposal to the café, not its finished customer-facing website. The images should demonstrate the work Raagul could do. Generated staff or interiors must be described as proposed images, not documentary photographs. Once a generated image is approved for use, include that distinction naturally in its alt text or an accompanying note.

## What the references establish

The references are images attached in the conversation. The IDs below are descriptions for handoff, not downloaded file paths. Pass each agent only its relevant images and brief. If an agent cannot access the image, the parent should supply that specific reference rather than pretending a file exists. Do not paste the whole research history into each agent.

| ID | User reference | What matters |
| --- | --- | --- |
| A1 | Burgundy poster, huge pale handwriting, small building photo in the centre | Expressive lettering and a deliberate difference in scale between type and image; portrait 3:4. |
| A2 | BARI card on a polished steel tray and rust-coloured cloth | Printed material that feels physical; sculptural type and tactile paper; portrait 3:4. |
| A3 | Chez Willy red lettering over people sitting with a drink | Unposed human photograph, tight crop, lettering across the action; portrait 4:5. |
| A4 | Smiling chef with “Meet the people” over her apron | A person is the subject, expressive serif type belongs in the picture; portrait. |
| A5 | Sunday Loftas, burgundy field, serif headline and keyhole photograph | A complete graphic composition, not a photo with a website caption; landscape about 3:2. |
| A6 | The Lake House lettering over a tiled oven photograph | Warm large serif typography, dark photographic detail, restrained secondary type; portrait 4:5. |
| A7 | “Meet me at the place”, white script and lime serif over a cropped person | Bold type/photo interaction and contrasting letter styles; square. |
| A8 | Red-shirted brewer tying a green apron | Workwear, hands and a caught moment; honest detail rather than a staged lifestyle pose; square. |
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
- A separate comparison agent, after approval: the two comparison frames.
- Parent: the actual shopfront photos, approved asset insertion, testing and publishing.

No wordmark agent is needed. Supplied logo paths will be recorded here when Raagul sends them. At present there are none.

## How the page handles the images

Twelve frames are on the main page, with two actual-photo frames in the research notes. These are large image spreads, not thumbnail galleries. Portraits, square images and landscape compositions keep their complete dimensions on desktop and mobile.

Every frame has a stable `data-visual` ID. The build reads `production/visual-slots.json`. Once the user approves an asset, the parent sets its `src`, `approved: true`, actual `width`, actual `height` and a factual `alt` description. Save public image exports under `assets/visuals/`. Keep originals, working files, unapproved output and wordmark studies elsewhere.

The build publishes only approved image paths listed in the manifest, removes their placeholder labels, and writes normal static `<img>` elements. There is no client-side image loader. A missing approved file stops the build. Pending files remain placeholders and are not copied to the public site.

All artwork with lettering is shown in full at its intrinsic aspect ratio. Do not use `object-fit: cover` on a poster, tray card, menu or square social composition. Do not put more HTML text over a finished poster.

The cover is the single exception: it is a photo without baked-in type, cropped responsively behind two small HTML text blocks. Keep the coffee action near the centre and darker areas behind those blocks. Review its 1440px and 390px crops after insertion. The HTML cover text should not be repeated inside the photo.

Suggested delivery sizes are in the manifest, not mandatory source dimensions. Record the real dimensions. Return an optimized WebP or JPEG for photographs, PNG/WebP for graphic work where needed, and preserve the original separately. Avoid tiny text and keep lettering comfortably inside the edges. The parent should review readability on a phone before publishing.

## Copy voice

Use the user's messages as the writing sample. He is direct and interested in the specific place: “I liked the place”, “I thought I’d put something together”, “I think we can look at…”. Keep the contractions and first-person point of view, without copying typing mistakes or speech fillers.

Avoid little slogan triplets, “the pour, the pause, the attention”, “distinctly yours”, “a look makes a promise”, “unmistakably”, “territories”, “expressive layers”, or framing every point as a grand transformation. Say what the design could do and what Raagul still wants to ask the owners. Do not turn a reference's poster headline into a new Manwill claim without review.
