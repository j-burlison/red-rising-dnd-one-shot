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

## Repo structure — why two sites, one URL

The ask was two websites on the **same base URL** — a public player site
and a password-gated DM site — sharing HTML artifacts that don't need to
differ between them. This deploys as a **static site on GitHub Pages**
(see Deployment below), so the player site lives at the repo root and the
DM site lives in a `/dm` subfolder — GitHub Pages serves the repo root as
`/`, which puts both on the same domain without any server-side routing.

```
red-rising-dnd-one-shot/
├── index.html              # Player-facing nav/landing page (served at "/")
├── pages/                  # Act 2 & 3 battle maps, PLAYER version
│                            # (no objective markers, no DM-only labels)
├── shared/
│   ├── pages/               # Content safe for players AND the DM —
│   │                        # color cards, gear codex, the Act 1 map
│   │                        # (no hidden objectives on that one map)
│   └── dm-gate.js           # Client-side password gate, loaded by every
│                            # page under dm/ (see Deployment below)
├── dm/
│   ├── index.html          # DM-facing nav/landing page (served at "/dm")
│   └── pages/               # Act 2 & 3 battle maps, DM version
│                            # (objectives, Logbook location marked)
│                            # + storyboard.html, lore-mechanics.html,
│                            #   npc-and-monsters.html (styled from docs/),
│                            #   handout-logbook.html
└── docs/                   # Raw markdown source (project notes,
                             # reference image links, to-do list) — not
                             # linked from the site, kept for reference/history
```

`shared/pages/*.html` is linked from both the player and DM nav pages and
carries no gate. Every page under `dm/` loads `shared/dm-gate.js`, which
shows a password prompt and hides the page's content until it's entered
correctly — see **Deployment** for why this is a deterrent rather than
real security, and how to set the password.

## Content index

### Present and wired into the site
- Color cards (shared, playable/NPC dossiers): Gold, Gray, Obsidian,
  White, Blue, Society overview — the full six-card set from
  `docs/one-shot-materials.md` is now complete
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
- `dm/pages/handout-logbook.html` — the Act 2 discovery prop (7-entry
  Infernal ledger, House Ferrox entry flagged). Lives under `dm/`, not
  `shared/`, because the flagged entry is the Act 3 twist — it's meant to
  be revealed to players at the table when they find it in-fiction, not
  browsable ahead of time. Linked from `dm/index.html` and from the
  Logbook section of `dm/pages/lore-mechanics.html`.
- `docs/reference-image-links.md` — portrait/reference art links (ArtStation,
  hotlinked — see the note in that file about them going stale)

### Known gaps (flagged in the source to-do list or referenced but not received)
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
- **Self-contained HTML artifacts:** every page under `shared/pages/`,
  `pages/`, and `dm/pages/` embeds its own `<style>` block rather than
  linking a shared stylesheet. This matches how the original
  Claude-generated artifacts were built (single-file, portable, easy to
  hand someone as one file) and was kept intentionally when new pages
  (nav pages, markdown-to-HTML conversions) were added. `shared/dm-gate.js`
  is the one exception — it's shared infrastructure, not page content, so
  it lives in one place and every `dm/` page references it.
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
