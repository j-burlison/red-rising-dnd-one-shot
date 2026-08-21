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
markdown), in styled full-reference form at `dm/pages/storyboard.html`,
`dm/pages/lore-mechanics.html`, and `dm/pages/npc-and-monsters.html`, and
condensed into a single scrolling command center at `dm/index.html` (the
DM Dashboard) with jump-links to Storyboard/Mechanics/NPCs/Monsters/Pacing
sections and a directory of every file in the site.

## Repo structure — why two sites, one URL

The ask was two websites on the **same base URL** — a public player site
and a password-gated DM site — sharing HTML artifacts that don't need to
differ between them. This deploys as a **static site on GitHub Pages**
(see Deployment below), so the player site lives at the repo root and the
DM site lives in a `/dm` subfolder — GitHub Pages serves the repo root as
`/`, which puts both on the same domain without any server-side routing.

```
red-rising-dnd-one-shot/
├── index.html              # Player Briefing — full onboarding page
│                            # (served at "/"): world primer, step-by-step
│                            # character build, links to color cards/gear
├── shared/
│   ├── pages/               # Content safe for players AND the DM —
│   │                        # color cards, gear codex, the Act 1 map
│   │                        # (no hidden objectives on that one map)
│   └── dm-gate.js           # Client-side password gate, loaded by every
│                            # page under dm/ (see Deployment below)
├── dm/
│   ├── index.html          # DM Dashboard (served at "/dm") — single-page
│   │                        # command center: condensed storyboard beats,
│   │                        # mechanics quick reference, NPC/monster
│   │                        # summaries, pacing table, and a directory
│   │                        # linking every file in the site
│   └── pages/               # storyboard.html, lore-mechanics.html,
│                            #   npc-and-monsters.html — full-detail
│                            #   versions of the dashboard's sections
│                            # + handout-logbook.html
│                            # + Act 2 & 3 battle maps, BOTH the DM
│                            #   version (objectives/Logbook marked) and
│                            #   the PLAYER version (unmarked) — both
│                            #   versions live here so the DM can pull up
│                            #   either one at the table; players don't
│                            #   browse this site directly
└── docs/                   # Raw markdown source (project notes,
                             # reference image links, to-do list) — not
                             # linked from the site, kept for reference/history
```

`shared/pages/*.html` is linked from both the player and DM pages and
carries no gate. Every page under `dm/` loads `shared/dm-gate.js`, which
shows a password prompt and hides the page's content until it's entered
correctly — see **Deployment** for why this is a deterrent rather than
real security, and how to set the password.

Note that the player-version Act 2/3 battle maps (no objective markers)
live under `dm/pages/`, not at the site root — the player site doesn't
link to battle maps at all. The DM pulls up the unmarked map from the
dashboard and screen-shares/prints it during the session, keeping the
marked version for their own reference.

## Content index

### Present and wired into the site
- `index.html` — the Player Briefing: deployment-orders framing, a world
  primer, a 6-step "build your operative" walkthrough (choose Color,
  choose class, gear up, know your Oath, name yourself, bring a hook),
  and links out to the color cards + gear codex. This *is* the player
  site now, not just a links page — content and copy came from a
  dedicated "player-briefing" artifact.
- `dm/index.html` — the DM Dashboard: a single scrolling command center
  (sticky jump-nav to Storyboard/Mechanics/NPCs/Monsters/Pacing/All
  Files) with condensed versions of every reference — act-by-act beats,
  a mechanics quick-reference, NPC summary cards for Servian and Ryn, a
  monster quick-reference table, suggested encounter compositions, the
  pacing table, and a linked directory of every file in the repo.
  Content came from a dedicated "dm-dashboard" artifact. Each condensed
  section links out to its full-detail page under `dm/pages/`.
- Color cards (shared, playable/NPC dossiers): Gold, Gray, Obsidian,
  White, Blue, Society overview — the full six-card set from
  `docs/one-shot-materials.md` is complete
- Gear Codex (shared): Razor, Pulse Blade/Fist/Grenade/Armor, Duro-Steel
  Armor, Stem Injectors, Gravity Boots, Aegis Shield
- Battle maps: Act 1 Zero-G Corridor (shared, no DM/player split — no
  hidden info on this one), Act 2 Dis Arcane Library (player + DM
  versions, both under `dm/pages/`), Act 3 Extraction Plaza (player + DM
  versions — these two are visually identical; the plaza map has no
  objective markers to hide)
- DM full-reference pages, converted from the source markdown into the
  site's visual style: Storyboard, Lore & Mechanics, NPCs & Monsters
  (full NPC stat blocks for Servian and Ryn, three devil stat blocks, and
  per-act encounter compositions) — these are what the dashboard's
  condensed sections link out to
- `dm/pages/handout-logbook.html` — the Act 2 discovery prop (7-entry
  Infernal ledger, House Ferrox entry flagged). Lives under `dm/`, not
  `shared/`, because the flagged entry is the Act 3 twist — it's meant to
  be revealed to players at the table when they find it in-fiction, not
  browsable ahead of time.
- `docs/reference-image-links.md` — portrait/reference art links (ArtStation,
  hotlinked — see the note in that file about them going stale)

### Known gaps (flagged in the source to-do list or referenced but not received)
- **`color-card-red.html`** — referenced by both the Player Briefing and
  DM Dashboard artifacts (Red is the lowest Color, the foundation the
  rest of the hierarchy stands on) but the file itself was never
  supplied. Both `index.html` and `dm/index.html` currently omit the Red
  link rather than point at a page that doesn't exist — add it to both
  "Curious About Other Colors?" / "Color Cards" sections once received,
  following the template of the other NPC-only cards (White, Blue).
- **Pre-gen character sheets** — explicitly unchecked in the original
  to-do (`docs/one-shot-todo.md`), Obsidian + Gray options per the
  caste-to-class mapping in `docs/lore-mechanics.md`. Not started; next
  batch of artifacts.
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
- **Self-contained HTML artifacts:** every page under `shared/pages/` and
  `dm/pages/`, plus `index.html` and `dm/index.html` themselves, embeds
  its own `<style>` block rather than linking a shared stylesheet. This
  matches how the original Claude-generated artifacts were built
  (single-file, portable, easy to hand someone as one file) and was kept
  intentionally as new pages were added. `shared/dm-gate.js` is the one
  exception — it's shared infrastructure, not page content, so it lives
  in one place and every `dm/` page references it.
- **Player vs. DM split:** a page goes in `shared/` only if a player
  seeing it wouldn't spoil or unbalance anything. Anything with hidden
  objectives, NPC stat blocks, the storyboard twist, or DM-only notes goes
  in `dm/`.

## Deployment

Static site on **GitHub Pages**, served from the repo root (see
`README.md` for the exact settings). No build step, no server, no
dependencies — plain HTML/CSS/JS.

**The DM gate is deliberately not real security.** GitHub Pages can't run
server-side auth, so `/dm` is protected by `shared/dm-gate.js`: a small
script every `dm/` page loads that prompts for a password and hides the
page's content (via `visibility:hidden` on `<html>` until unlocked) until
it's entered correctly, then remembers that in `localStorage` so it
doesn't ask again on that device. Anyone who reads the page source or the
script itself can get past it — that tradeoff was an explicit choice for
a one-shot where the threat model is "a player casually browsing," not a
motivated adversary. **Change `PASSWORD` in `shared/dm-gate.js` before
publishing** — the placeholder value ships in the repo and is not a
secret.
