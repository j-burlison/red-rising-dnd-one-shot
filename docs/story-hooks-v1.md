# Benediction of Dis — Story & Character Hooks: Site Update Instructions

**For:** the Claude Code session working in the `red-rising-dnd-one-shot` repo.
**From:** Josh (DM). These are the story decisions made after the scene-by-scene dashboard rework (commits through `fb6d644`).
**Goal:** weave the three known PCs' backstories into the plot, rework the Act 1 opening, move the Act 3 trigger to the Extraction Plaza, and remove one leftover balance beat. Keep every page consistent.

---

## How to work

- Read `CLAUDE.md` first and follow its conventions: self-contained HTML pages, the existing visual system, and the player/DM split.
- **Spoiler rule:** nothing here goes on the player site. Do **not** edit `index.html` or anything under `shared/`. All changes are under `dm/` and `docs/`.
- The dashboard (`dm/index.html`) is now a scene-by-scene run sheet. Put each change in the scene where it happens (`#s1-1` … `#s3-3`), using the existing patterns: `ul.beats` bullets with a bold lead-in, `span.chk` DC chips (add `class="chk new"` for any proposed DC), `rules-box`, and encounter boxes.
- The same facts also live in the full reference pages and their markdown sources. Keep these pairs in sync:
  - `dm/pages/storyboard.html` ↔ `docs/one-shot-storyboard.md`
  - `dm/pages/npc-and-monsters.html` ↔ `docs/one-shot-materials.md`
  - `dm/pages/lore-mechanics.html` ↔ `docs/lore-mechanics.md`
- Only change what's listed. Keep the existing scene time budgets; the session still totals 5:00.
- The Gray leader is spelled **Ryn** everywhere.
- Save a copy of this file as `docs/story-hooks-v1.md` for history.
- Work on a branch, commit with a clear message, and open a PR (or follow Josh's usual workflow).

---

## Reference: the three player characters

Use these when writing the hook text. Items marked *(optional)* are DM options, not facts; label them that way on the site.

**Maartog, son of Slate** (Obsidian Fighter, player: Topher). Disgraced son of Slate, a revered Obsidian war chief sworn to House Ferrox. When Maartog was a boy, House Ferrox declared Slate an oathbreaker, "purged" the tribe, and struck the chief's name. The boy was taken as House property and raised by lower-Color household slaves of House Ferrox (Browns). Now he serves the Golds he calls false gods, and the other Obsidians shun him. His "piece of a banner" is his father's war standard. **The truth:** Ferrox sold the tribe's souls through the Chimera Codex and framed the chief. *(Optional: the slaves who raised him are among Lucan's "6 slave souls (mixed stock)" from a year ago.)*

**"Irina Gray"** (Rising agent; warlock). A false identity. She was born a Copper administrator, sold a fragment of her soul to a Dis devil for power, and joined the Rising, which Carved her into a Gray. She knows the true objective. Her written Rising orders, sent to her player before the session, make **the Logbook her primary objective** and the Codex secondary. She does **not** know Ryn is Rising; her orders say only that another asset is aboard, known by the call sign **"Break the chains."**

**Smack "Eldorf" Gray** (Gray Rogue, Arcane Trickster). Ryn's right hand and closest friend for a decade. They have run special-ops missions together for years, and he's usually the squad's infiltrator (disguise, illusions). "Eldorf" is a nickname the Grays gave him for the shows he puts on in camp; his surname is Gray. He does **not** know Ryn is Rising. Before the mission (shared with the player ahead of time, not played at the table) Ryn told him: "This one's dicey. If it goes wrong, I need to know you've got my back. If I say anything about breaking something, that's your cue."

**Knowledge split (already on the site, now name the PCs):** Irina is the Rising-agent PC. Smack is the PC with a hint. **Servian tells no one.** Maartog and everyone else think it's intel extraction until the Logbook.

---

## 1. DM Dashboard — `dm/index.html`

### Overview (`#overview`)

- In **Who knows**, name the pre-game PCs: Irina is the Rising agent, and Smack has the hint (Ryn's "have my back" ask and the "breaking something" cue).
- Add a compact **PC Hooks** box under Who knows (a `rules-box` or a small table), one row per PC. Each row gets a one-line hook and the scenes where it pays off:
  - **Maartog, son of Slate:** disgraced son of a framed Obsidian war chief; the proof is a loose page in the Logbook. Pays off in 1.1 (turned backs), 2.2 (the Slate page), 3.1 (Servian's offer).
  - **"Irina Gray":** a Copper Rising agent Carved into a Gray, with a sold soul fragment. Logbook first, Codex second. Pays off in 2.1 (patron scream), 2.2 (the archivist), 3.1 (the Logbook demand and the call sign).
  - **Smack "Eldorf" Gray:** Ryn's right hand for ten years; doesn't know she's Rising; has promised to have her back. Pays off in 3.1 ("Break the chains" is his cue) and 3.1 (the Codex hand-off).
  - Add one line: *Two seats are still open. If possible, give one of them a hook loyal to Servian, since the table leans toward the Rising.*

### Scene 1.1 — The Benediction Ceremony (`#s1-1`)

Restructure the beats into this order. Keep the 50-minute budget and the existing "Show players" links. Keep the skill-scene checks, but reword where noted.

1. **The Grays' overlook room (~25 min).** The session opens with the Gray squad in a room overlooking the ceremony hall. **Ryn briefs the Grays** here: the cover story, troop-movement intel from the Dis Arcane Library. Keep the existing description: Holiday-style bluntness, talks to people as people, quietly probing 1–2 PCs' loyalties. Banter follows, and the **Gray players introduce their characters** in character (name, Color, class, hook).
2. **Cut to the floor (~25 min).** The Obsidians kneel on one knee beside a standing Servian while the **Whites perform the Benediction**. The **Obsidian players introduce their characters** here, as narration or inner voice, since Obsidians can't speak out of turn. Keep these existing beats: "The Obsidians get no brief," "Servian gives no brief" (he knows the true objective and shares it with no one), "Caste roleplay," and the "too quiet" unease.
3. **The turned backs.** When the Whites name "Maartog, son of Slate," the kneeling Obsidian NPCs turn their backs on him in a ritual shunning. Maartog kneels, but he never bows his head to a Gold.
4. **Servian's brothers.** As the ceremony ends, Servian's brothers approach him: **Karnas au Ferrox**, absolutely massive and a brute, and **Cagney au Ferrox**, skinny, lithe and a trickster. They impress on him how much the mission matters. It has to be him, because no one will suspect him. The Sovereign herself is depending on him, and so is the honor of their family. *(Optional: Maartog, kneeling nearby, overhears. It's a hint, not the objective.)*
5. Keep **Show the oath working**.
6. **Pre-game knowledge:** reword to name Irina (Rising agent) and Smack (hint), and keep "give them room to act on what they know without forcing it."

Skill scene: keep the three checks. The Ryn Insight checks now happen in the overlook room. The Persuasion/Deception check against Servian applies to anyone who presses him on the floor or after the ceremony; an Obsidian doing so is still speaking out of turn.

### Scene 2.1 — Planar Jump & Iron Rain (`#s2-1`)

- Add a beat after the landing hazard (or as the pods drop): **The warlock beat.** As the pods fall into Dis, every warlock's patron screams in their head, shocked to find them suddenly in the realm of Hell. This covers Irina and any other warlock at the table.

### Scene 2.2 — The Arcane Library & the Logbook (`#s2-2`)

- Above "Three ways to the Logbook," add one line: **The approach is the players' choice.** They can sneak in, talk their way in, or go in by force; force just starts Scene 2.3 early. The devils know a Society attack is coming, but not that this group is after the Codex and the Logbook. Smack's infiltration skills are one option if the table wants a quiet route; nothing depends on them.
- In **B · The cagey archivist**, add: **The archivist is Irina's devil broker.** He can see the fragment of soul she already sold. In front of the squad he calls her "Administrator" unless she shuts him down (keep the existing DC 14 CHA (Deception) chip, or add `DC 14 CHA (Deception)` for her). Privately he tells her the term is now due, and offers to forgive the remainder if the Codex stays in Dis.
- Leave **C · A petitioner** as it is.
- In **The Logbook** beat, add: **A loose older page** (about 20 years old) is tucked in the back. It records House Ferrox selling Slate's tribe, 40 Obsidian souls, and branding the chief an oathbreaker. It proves Maartog's father was framed.
- In **Servian's crack**, add: he finds the Slate page at the same moment as his cousin's entries, so he learns his House has been doing this for a generation.
- Add a beat: **Irina carries the Logbook** out of the vault. She may be the one who finds it. Ryn or Servian can order her to carry it; that's the DM's call at the table.

### Scene 2.3 — Library Guards (`#s2-3`)

- In **Securing the Codex**, add one sentence: **Ryn takes the Codex** once the ward is down. She needs it in hand for Scene 3.1. Keep the ward-alarm line; it's still why the horde comes.

### Scene 3.1 — The Reveal & the Order (`#s3-1`)

Replace the beats above the Oathbound rules box with this sequence. The rules box is unchanged.

1. **The Logbook demand.** On the way to the shuttle, at the Extraction Plaza, Servian stops: **"Give me the Logbook. I'm going to burn it."** It incriminates his family.
2. **Refusing is defiance.** Irina is carrying it. Refusing to hand it over is a defiant act, so she breaks her first sigil, and may blow her cover before anyone else moves.
3. **Maartog's stake.** The proof of his father's innocence is in that book. Servian can offer to spare that one page, and to restore Slate's name before the Sovereign, if Maartog stands with him.
4. **"Break the chains."** Ryn answers with the call sign. Irina recognizes it at once. Smack recognizes his cue ("breaking something") but not what it means, until he realizes his closest friend has lied to him for ten years and is calling in his promise.
5. **Ryn turns.** Keep the existing text: she reveals the full truth, sides against the Society, draws her Razor, and asks the party to choose. Add: **she throws Smack the Codex**, "Get this to the Rising, whatever happens to me." That puts the escape ending in a player's hands.
6. **The horde.** Change "arrives as the party secures the book" to: Dis's devils, drawn by the alarm and the attack, **pour into the plaza** at Ryn's reveal. Keep "chaotic, alarmed, and hostile to the Society specifically," and add "never Ryn."
7. **Servian's order.** Keep as is: kill Ryn and the devils.
8. **Choices at the table:** Irina chooses whether to unmask as Rising or stay covered and walk out with the Logbook. Ryn says to Maartog, "Your father's people were sold with that book. Your gods sold them." Maartog also has a Worf-style option: let the page burn and serve anyway. If he breaks his oath, he wraps the banner scrap over the burning sigil.
9. Keep **The stakes**.

### Scene 3.2 — Climax at the Extraction Plaza (`#s3-2`)

- In **Who fights whom → Rising path**, delete the sentence **"In round 1, one Skirmisher turns on Servian and fights with the party."** It was a leftover balance lever and makes no sense for devils. Keep "The devils attack Servian and anyone in Society armor, but never Ryn" and the ending condition.
- Replace the tested-difficulty line with: *Tested at 4–5 PCs: about a 55% chance that at least one PC drops on the Society path and about 65% on the Rising path. Deaths are rare on both.*
- Ryn's leader card: she no longer has the Codex in hand if she threw it to Smack. Add "(the Codex is with Smack)" or similar.

---

## 2. Storyboard — `dm/pages/storyboard.html` + `docs/one-shot-storyboard.md`

Mirror the dashboard changes at outline level:

- **Act 1:** replace the cold-open bullets with the five-step sequence (Gray overlook room with Ryn's brief and Gray intros → cut to the floor with Obsidian intros → turned backs → Karnas & Cagney → oath). Keep "Servian gives no brief at all."
- **Knowledge split callout:** name Irina (Rising agent) and Smack (hint).
- **Iron Rain:** add the warlock beat.
- **Act 2:**
  - the approach is open
  - the archivist is Irina's broker
  - the loose Slate page
  - Irina carries the Logbook
  - Ryn takes the Codex
- **Act 3:**
  - replace "A horde of devils arrives as the party secures the book" with the Logbook demand at the plaza → "Break the chains" → Ryn turns and throws Smack the Codex → the horde pours in → Servian's order
  - delete the sentence "If the party turns on Servian, one Barbtail Skirmisher turns on him too in round 1."
  - The three endings are unchanged.

---

## 3. NPCs & Monsters — `dm/pages/npc-and-monsters.html` + `docs/one-shot-materials.md`

- **Servian au Ferrox:**
  - Personal stake: add that he means to burn the Logbook to protect his family, and demands it at the Extraction Plaza.
  - The cousin twist: add the Slate page.
  - Note that he shares the objective with no one.
- **Ryn Gray, Rising Agent:**
  - In Act 3: she reveals herself when Servian demands the Logbook, answering with the Rising call sign "Break the chains," and throws Smack the Codex.
  - Add a relationships line. Smack is her right hand of ten years and doesn't know she's Rising; before the mission she asked him to have her back and gave him the "breaking something" cue. She does not know Irina is Rising either.
- **New NPC entry: The Archivist (devil broker).** Act 2. Cagey, denies everything. He sold Irina her power for a soul fragment, can see it on her, calls her "Administrator," and offers to forgive the remainder if the Codex stays in Dis. Name TBD.
- **New NPC entry: Karnas & Cagney au Ferrox.** Act 1 only, flavor, no stat blocks. Servian's brothers: Karnas massive and a brute, Cagney skinny, lithe and a trickster. They press him on the Sovereign's trust and the family's honor.
- **Encounter Compositions → Act 3:** delete the Skirmisher-turns-on-Servian sentence from the Rising-path note.
- Leave Key Petitioners and the Devil Patrol Leader as they are.

---

## 4. Logbook handout — `dm/pages/handout-logbook.html`

This prop is shown to players at the table, so keep it in-fiction.

- **Copper entry** (the "Administrator, Copper — 1 fragment, own soul" row): this is Irina. Josh hasn't picked her real Copper name yet. Leave the visible text as is and add an HTML comment `<!-- TODO: Irina's real Copper name goes here -->` inside that row.
- **Add a loose older page** after the `.torn` line ("remaining pages show thousands…"). Style it as a separate, older, stained sheet tucked into the back, distinct from the main table but in the same visual system. Contents:
  - Header: *Loose page — filed out of order*
  - Date: *20 yrs. ago*
  - Requester: *House Ferrox (Gold)*
  - Soul-cost: *War-chief "Slate" and tribe — Obsidian stock — 40 souls, full*
  - Notes: *"Chief declared oathbreaker. Record sealed."*
- Don't flag it with the existing `flagged` style; the cousin entry stays the flagged one.

---

## 5. Lore & Mechanics — `dm/pages/lore-mechanics.html` + `docs/lore-mechanics.md`

- In the Iron Rain / Drop Pod section, add the **warlock beat** (patrons scream in their warlocks' heads as the pods drop into Dis).

---

## 6. History and housekeeping

- `docs/balance-pass-v3.md`: next to the Rising-path line that adds the turning Skirmisher, add *(Removed in story-hooks-v1; the devils never side with the party.)* Leave the rest as history.
- `CLAUDE.md`: in the content index, add one line noting that PC hooks live in the dashboard Overview's PC Hooks box and in `docs/story-hooks-v1.md`.

---

## Still open (don't invent these; leave TODO comments or placeholders)

- Irina's real Copper name (for the Logbook).
- The archivist's name.
- Whether Karnas or Cagney know about Lucan's soul trades.
- Hooks for the two remaining players.

---

## Verification checklist

- [ ] `git diff --stat` shows no changes to `index.html` or `shared/`.
- [ ] `grep -rni "turns on servian\|turns on him too" dm/ docs/` finds nothing except the history note in `docs/balance-pass-v3.md`.
- [ ] `grep -rn "as the party secures the book" dm/ docs/` returns nothing.
- [ ] "Break the chains" appears in dashboard Scene 3.1, the storyboard (HTML and MD), and Ryn's NPC notes (HTML and MD).
- [ ] "Karnas" and "Cagney" appear in dashboard Scene 1.1, the storyboard (HTML and MD), and the NPC page (HTML and MD).
- [ ] The dashboard Overview names Irina and Smack in Who knows and has the PC Hooks box.
- [ ] Scene time budgets are unchanged, and the "Session at a Glance" total is still 5:00.
- [ ] The Logbook handout shows the loose Slate page and keeps the cousin entry flagged.
- [ ] Every edited page still loads behind the DM gate and renders in the existing style (open each one in a browser).

---

## Decisions after v1

These came from Josh after the v1 handoff and supersede the text above where they conflict.

- **Karnas and Cagney** both know about Lucan's soul trades. Servian doesn't.
- **The Chimera Codex** also lets someone change their own Color, not just make cross-Color unions.
- **Irina's change to Gray came from the Codex**, not from Rising Carving. One deal, brokered by the archivist: for a fragment of her soul, the Codex changed her from Copper to Gray, and the same bargain gave her warlock power. Her Logbook row (the "Administrator, Copper" entry) now reads "Color change, Copper to Gray."
