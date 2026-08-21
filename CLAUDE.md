# Benediction of Dis — Red Rising D&D One-Shot

This repo is a two-site monorepo built to run a homebrew Red Rising 5e
one-shot at the table. It was assembled from artifacts and notes produced
in a Claude.ai Project ("Red Rising DnD" → chat "One Shot"). This file is
the project context for anyone (human or Claude) picking the repo back up.

## What this one-shot is

**Premise:** Obsidian and Gray operators under a Peerless Scarred Gold
(Servian au Ferrox) are sent to Dis, capital of Dispater, ostensibly to
extract troop-movement intel — actually to retrieve the **Chimera Codex**,
a spellbook enabling cross-color breeding. Dis has been a long-standing
*ally* of the Society, not conquered territory, which is what makes the
Iron Rain in Act 1 a betrayal rather than an occupation follow-up.

Three acts: **Act 1** — the Benediction ceremony aboard The Concordat, a
leechcraft breach, and a Zero-G Corridor escape fight. **Act 2** — Iron
Rain landing on Dis, the Dis Arcane Library, and the discovery of The
Logbook (evidence of a cross-color soul-trading pipeline, tied to
Servian's own cousin's House). **Act 3** — Ryn Gray (the Gray Troupe
Leader) reveals she's a Rising agent and turns against the Society;
Servian orders the party to kill her; every PC is Oathbound and must
actively break a compulsion sigil to defy that order. Three possible
endings: Society wins, Rising wins, or the PCs flee with the book.

Full detail lives in `docs/one-shot-storyboard.md`,
`docs/lore-mechanics.md`, and `docs/one-shot-materials.md` (raw source
markdown), and in styled form for table use at `dm/pages/storyboard.html`,
`dm/pages/lore-mechanics.html`, and `dm/pages/npc-and-monsters.html`.

## Repo structure — why two sites, one server

The ask was two websites on the **same base URL** — a public player site
and a password-protected DM site — sharing HTML artifacts that don't
need to differ between them.

```
red-rising-dnd-one-shot/
├── server.js              # Express: serves player/ at "/", dm/ at "/dm"
│                           # (HTTP Basic Auth), shared/ at "/shared" (open)
├── package.json
├── .env.example            # DM_USERNAME / DM_PASSWORD / PORT
├── shared/pages/           # Content safe for players AND the DM —
│                           # color cards, gear codex, the Act 1 map
│                           # (no hidden objectives on that one map)
├── player/
│   ├── index.html          # Player-facing nav/landing page
│   └── pages/               # Act 2 & 3 battle maps, PLAYER version
│                            # (no objective markers, no DM-only labels)
├── dm/
│   ├── index.html          # DM-facing nav/landing page
│   └── pages/               # Act 2 & 3 battle maps, DM version
│                            # (objectives, Logbook location marked)
│                            # + storyboard.html, lore-mechanics.html,
│                            #   npc-and-monsters.html (styled from docs/)
└── docs/                   # Raw markdown source (project notes,
                             # reference image links, to-do list) — not
                             # served by the site, kept for reference/history
```

`shared/pages/*.html` is mounted at `/shared` by the server and is **not**
behind auth — it's linked from both the player and DM nav pages. Only
`/dm/*` requires the DM password. This is enforced server-side (Express +
`express-basic-auth`), not by hiding links, so it holds up even if a
player guesses or is given a `/dm/...` URL directly.

## Content index

### Present and wired into the site
- Color cards (shared, playable/NPC dossiers): Gold, Gray, Obsidian,
  White, Society overview
- Gear Codex (shared): Razor, Pulse Blade/Fist/Grenade/Armor, Duro-Steel
  Armor, Stem Injectors, Gravity Boots, Aegis Shield
- Battle maps: Act 1 Zero-G Corridor (shared, no DM/player split — no
  hidden info on this one), Act 2 Dis Arcane Library (player + DM
  versions), Act 3 Extraction Plaza (player + DM versions — these two are
  visually identical; the plaza map has no objective markers to hide)
- DM reference pages, converted from the source markdown into the site's
  visual style: Storyboard, Lore & Mechanics, NPCs & Monsters (full NPC
  stat blocks for Servian and Ryn, three devil stat blocks, and
  per-act encounter compositions)
- `docs/reference-image-links.md` — portrait/reference art links (ArtStation,
  hotlinked — see the note in that file about them going stale)

### Known gaps (flagged in the source to-do list or referenced but not received)
- **`color-card-blue.html`** — `docs/one-shot-materials.md` lists Blue
  alongside Gold/Gray/Obsidian/White/Society as one of the six color card
  files, but it was never provided. A reference image link for Blue
  exists in `docs/reference-image-links.md` ("Space Pilot" by Lazar
  Kacarevic) if/when this card gets built — follow the same template as
  `shared/pages/color-card-white.html`.
- **The Logbook handout** — described in detail in the storyboard/lore
  docs (a 7-entry Infernal ledger, one entry flags House Ferrox) and
  marked complete in the original to-do list, but no HTML artifact for it
  was ever supplied to this repo. It's currently only prose in
  `dm/pages/storyboard.html` and `dm/pages/lore-mechanics.html`. Needs a
  standalone handout page, most naturally in `dm/pages/` (or `shared/` if
  it's meant to be handed to players in-fiction as a discovered prop).
- **Pre-gen character sheets** — explicitly unchecked in the original
  to-do (`docs/one-shot-todo.md`), Obsidian + Gray options per the
  caste-to-class mapping in `docs/lore-mechanics.md`. Not started.
- Reference portrait images are all hotlinked from ArtStation CDN URLs
  (see `docs/reference-image-links.md`) rather than stored locally — fine
  for now, but they could go stale; download local copies under an
  `shared/assets/` folder if that happens.

If you're picking this up from a second batch of pasted artifacts, check
this list first — it's the delta between what the "One Shot" chat produced
and what made it into this repo.

## Conventions

- **Visual system:** dark ink background (`#0B0C0F`), Cinzel for display
  headings, JetBrains Mono for labels/stat callouts, Inter for body text.
  Gold (`#D4AF37`) is the primary accent everywhere. Player-only tags use
  blue (`#5FB3D9`); DM-only tags use red/orange (`#C1502E`) — this matches
  the "PLAYER VERSION" / "DM VERSION" tags already baked into the original
  battle map artifacts.
- **Self-contained HTML artifacts:** every page under `shared/`, `player/pages/`,
  and `dm/pages/` embeds its own `<style>` block rather than linking a
  shared stylesheet. This matches how the original Claude-generated
  artifacts were built (single-file, portable, easy to hand someone as
  one file) and was kept intentionally when new pages (nav pages,
  markdown-to-HTML conversions) were added.
- **Player vs. DM split:** a page goes in `shared/` only if a player
  seeing it wouldn't spoil or unbalance anything. Anything with hidden
  objectives, NPC stat blocks, the storyboard twist, or DM-only notes goes
  in `dm/`.

## Deployment

See `README.md` for the full walkthrough. Short version: this is a small
Node/Express app (`npm install && npm start`), which means real
server-side password protection on `/dm` works out of the box on any
Node host — DigitalOcean App Platform, Render, Railway, Fly.io, etc.
GitHub Pages is static-only and **cannot** enforce the DM password
server-side, so it's not a good fit unless paired with something like
Cloudflare Access in front of it.
