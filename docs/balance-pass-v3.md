# Benediction of Dis — Combat Balance Pass: Site Update Instructions (v3)

**For:** a Claude Code session working in the `red-rising-dnd-one-shot` repo.
**From:** Josh (DM), after a simulated balance pass of all three combats and a round of rules rulings.
**Goal:** apply the approved combat changes and rulings below to the website and its source markdown, keeping every page consistent with the others.

---

## How to work

- Read `CLAUDE.md` first and follow its conventions. Every page is a self-contained HTML file with its own `<style>`, uses the existing visual system, and follows the player/DM split.
- Only change what this document lists. Don't restyle pages or rewrite unrelated copy.
- Each change lists every file it touches. The same facts appear in up to four places, and all of them must match:
  - the full reference pages under `dm/pages/`
  - the condensed DM Dashboard at `dm/index.html`
  - the shared/player pages (`index.html`, `shared/pages/`)
  - the raw source markdown under `docs/`
- Match the existing markup patterns on each page: `sb-ability` divs in stat blocks, `<li>` lists in the encounter cards, `<tr>` rows in dashboard tables, and `stat-line`/`trait` blocks on the codex and color cards.
- Save a copy of this file as `docs/balance-pass-v3.md` for history.
- Work on a branch, commit with a clear message, and open a PR (or follow whatever git workflow Josh asks for).

## Decisions already made (do not change)

- Servian and Ryn **fight alongside the party** in Act 1 and Act 2. On the Society path in Act 3, Servian fights with the party.
- **Pulse Grenades stay at 2 per player.**
- Stem Injector healing, Oathbound damage and DCs, and Ryn's stat block numbers are unchanged. Servian gets only the clarifications in Change 7.
- Difficulty is raised by **more monsters** plus the stat block tweaks below.

---

## Change 1 — Monster stat blocks

Apply to:
- `dm/pages/npc-and-monsters.html` (Monster Stat Blocks section)
- `dm/index.html` (Monster Quick Reference table)
- `docs/one-shot-materials.md` (Monster Stat Blocks section)

### Barbtail Skirmisher

Replace the Multiattack, Claw and Tail Spike entries with:

- **Multiattack.** The Skirmisher makes one claw attack and one tail spike attack.
- **Claw.** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1d6+2 slashing damage.
- **Tail Spike.** *Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/80 ft., one target. *Hit:* 2d4+2 piercing damage.

Dashboard row "Key Attack" cell: `Claw +4 (1d6+2) + Tail Spike +4 (2d4+2), melee or 20/80 ft.`

AC, HP, speed, CR and everything else stay the same.

### Ash-Bound Wretch

Add a new trait below the damage resistances and immunities (before Claw):

- **Ash Burst.** When the Wretch dies, it bursts into cinders. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 1d6 fire damage on a failed save or half as much on a successful one. *(Other devils are immune to fire, so the swarm can pile in safely.)*

Dashboard row "Key Attack" cell: `Claw +2, 1d4 slashing. Ash Burst on death: 5 ft., DC 11 Dex, 1d6 fire`

### Iron Ward Enforcer

Change the Multiattack line to:

- **Multiattack.** The Enforcer makes three glaive attacks.

Dashboard row: prefix the Key Attack cell with `3×` (`3× Glaive +5, 1d10+3 …`).

---

## Change 2 — Encounter compositions (with party-size scaling)

Apply to:
- `dm/pages/npc-and-monsters.html` (Encounters section: the three encounter cards)
- `dm/index.html` (Suggested Compositions table, plus the Act 1 and Act 3 storyboard bullets; see Change 5)
- `docs/one-shot-materials.md` (Act 1 / Act 2 / Act 3 composition sections)

Show the 5-PC numbers as the default composition and put the 3- and 4-PC variants in the note or a small scaling table under each card. On the dashboard, the Suggested Compositions table can gain a "Scaling" column or a small table beneath it.

### Act 1 — Ship-Boarding Party (Zero-G Corridor)

Servian (gravity boots) and Ryn (Pulse Blade) fight alongside the party. Two waves, both in by round 2:

| PCs | Round 1 | Round 2 | Total devils |
| --- | --- | --- | --- |
| 5 | 7 Skirmishers + 3 Wretches | 3 Enforcers + 3 Wretches | 16 |
| 4 | 6 Skirmishers + 3 Wretches | 3 Enforcers + 3 Wretches | 15 |
| 3 | 5 Skirmishers + 3 Wretches | 2 Enforcers + 3 Wretches | 13 |

Rule of thumb: Skirmishers = PCs + 2; Enforcers = 3 (2 at three PCs); Wretches = 6.

Replace the old "deploy in waves along the corridor" note with: *Skirmishers and the first Wretches pour through the breach in round 1; the Enforcers and the rest of the Wretches follow in round 2. The leechcraft tears free (vacuum round) when the first Enforcer dies, or at the start of round 4, whichever comes first.*

### Act 2 — Library Guards

Composition unchanged: 2 Skirmishers + 2 Wretches, no Enforcer, deliberately light. Servian and Ryn are present and fight. Keep the existing DM lever about having Servian spend resources here.

Add one optional line: *Optional: add the Devil Patrol Leader using the Iron Ward Enforcer stat block. The fight stays light.* The NPC section describes a patrol leader, but the encounter list never included him.

### Act 3 — Final Horde

| PCs | Horde |
| --- | --- |
| 5 | 4 Wretches + 6 Skirmishers + 1 Enforcer |
| 4 | 4 Wretches + 5 Skirmishers + 1 Enforcer |
| 3 | 3 Wretches + 2 Skirmishers + 1 Enforcer |

Rule of thumb (4+ PCs): 4 Wretches, Skirmishers = PCs + 1, 1 Enforcer.

Replace the existing Act 3 note with:

- **Society path (party sides with Servian):** Servian fights alongside the party against Ryn and the full horde. The devils follow Ryn.
- **Rising path (party turns on Servian):** the devils attack Servian and anyone in Society armor, but never Ryn. **In round 1, one Skirmisher turns on Servian** and fights with the party. The fight ends when Servian falls or is driven off. *(Removed in story-hooks-v1; the devils never side with the party.)*
- *Tested at 4–5 PCs, both paths land at about a 55% chance that at least one PC drops, and deaths are rare. "The choice is about loyalty, not safety" now holds.*

---

## Change 3 — Zero-G "Adrift" rule

Apply to:
- `dm/pages/lore-mechanics.html` (Zero-G Corridor section, in the rules list after **Recoil**)
- `dm/index.html` (Mechanics Quick Reference → Zero-G Corridor card)
- `docs/lore-mechanics.md` (Zero-G Corridor section, after the Recoil bullet)

New bullet:

- **Adrift:** A creature that isn't braced on an anchor becomes *Adrift* until the start of its next turn. This happens after a failed push-off, after recoil pushes it off an anchor, or after the vacuum pull. Melee attack rolls against an Adrift creature have advantage. Devils are never Adrift.

In the same section, update the vacuum-round trigger wherever it's described: *the leechcraft tears free when the first Enforcer dies, or at the start of round 4, whichever comes first (a countermeasure or a PC reaching the control panel can also trigger it earlier).*

For the dashboard card, a one-sentence condensed version is fine: `Adrift: unbraced after a failed push-off, recoil or the vacuum pull → melee attacks vs. you have advantage until your next turn. Devils are never Adrift.`

---

## Change 4 — The planar jump is a short rest

Apply to:
- `dm/pages/lore-mechanics.html` (Iron Rain / Drop Pod Mechanics section)
- `docs/lore-mechanics.md` (Iron Rain / Drop Pod Mechanics section)
- `dm/pages/storyboard.html` and `docs/one-shot-storyboard.md` (Act 1's closing beats, the "Ship jumps as pods launch" bullet)
- `dm/index.html` (Act 1 storyboard bullet about the ship jumping)

Add:

- **The planar jump is a short rest.** The party spends about an hour strapped into the drop pods during the jump to Dis. Treat it as a short rest: PCs may spend Hit Dice, short-rest features recharge, Stem Injectors refill to 3 charges, and Pulse Fists refill to 3 charges. The landing hazard (DC 13 Dex save or 2d6) happens after the rest, on arrival.

(Why this matters: in testing, skipping the rest raised the chance of a PC death on the Rising path from about 1% to 9–13% at 4–5 PCs.)

---

## Change 5 — Storyboard beat wording

Apply to:
- `dm/pages/storyboard.html`
- `docs/one-shot-storyboard.md`
- `dm/index.html` (Storyboard section)

- Act 1, the "Round 1" bullet becomes: **Round 1:** leechcraft carves through the hull; Barbtail Skirmishers and the first Ash-Bound Wretches pour in. **Round 2:** the Iron Ward Enforcers follow with the rest of the swarm.
- Act 1, the "Mid-fight escalation" bullet: add "(or at the start of round 4)" to the trigger list.
- Act 1: add a bullet: **Servian and Ryn fight alongside the party** in the corridor. Servian's gravity boots let him ignore zero-G until they fail.
- Act 3, the climax bullet: add "If the party turns on Servian, one Barbtail Skirmisher turns on him too in round 1." *(Removed in story-hooks-v1; the devils never side with the party.)*
- The dashboard line "Both leaders draw razors — Servian and Ryn are equally lethal, so the choice is about loyalty, not safety" stays. It's now accurate.

---

## Change 6 — DM table tips (dashboard)

Add to `dm/index.html`, as a short note under Suggested Compositions:

- *Act 1 fields up to 16 devils plus 7 allies and PCs. Roll initiative once per monster type (all Skirmishers act together, and so on) to keep rounds moving.*

Optional, ask Josh first: the pacing table's "Act 1 — Corridor combat + Zero-G" row (30–35 min) may need 35–45 min with the larger waves. The same row appears in `dm/index.html`, `dm/pages/lore-mechanics.html` and `docs/lore-mechanics.md`.

---

## Change 7 — Rules rulings (Josh's decisions)

### 7a. Oathbound: the second sigil breaks on the next defiant action

Apply to `dm/pages/lore-mechanics.html` (Oathbound Compulsion), `dm/index.html` (Oathbound card), `docs/lore-mechanics.md`.

Add after the break list: *The first defiant action breaks the right-hand sigil. The next defiant action, even against the same order, breaks the left-hand sigil. A new order isn't required.* The dashboard card can condense this to "the next defiant action breaks the 2nd sigil."

**Damage type: psychic.** In both break bullets, change "2d6 damage" to "2d6 psychic damage", on the full pages, the dashboard card and in `docs/lore-mechanics.md`.

### 7b. Color templates stack with race

Apply to `index.html` (player briefing, "Choose your Color" step), `dm/pages/lore-mechanics.html` (Caste Traits intro), `docs/lore-mechanics.md` (Caste Traits intro), and the trait lists on `shared/pages/color-card-gray.html` and `shared/pages/color-card-obsidian.html`.

Add: *Your Color's ability score increases and traits stack with your race's. You get both.* On the color cards, a single line under the Traits heading is enough.

### 7c. All Universal gear is standard issue

Apply to `index.html` ("Gear up" step), `shared/pages/gear-codex.html`, `dm/pages/lore-mechanics.html` and `docs/lore-mechanics.md` (wherever default gear is described).

Replace "Duro-Steel Armor and Stem Injectors are yours by default" with: *Every operative is issued all Universal gear: Duro-Steel Armor, Stem Injectors, a Pulse Blade, a Pulse Rifle, a Pulse Fist, and 2 Pulse Grenades.* In the codex, add a one-line note at the top of the Universal group saying it is standard issue for every operative. Also add to the Pulse Fist entry: *recharges on a short rest (including the planar jump).* Its 3 charges per short rest are already listed.

### 7d. Stem Injectors can be triggered by an ally

Apply to `shared/pages/gear-codex.html` (Stem Injectors), `dm/pages/lore-mechanics.html`, `dm/index.html` (Stem Injectors card), `docs/lore-mechanics.md`.

Add: *An ally within 5 ft. can trigger a downed or incapacitated creature's injector as an action (one charge from the wearer's armor).*

### 7e. Razor: treat the target as unarmored

Apply everywhere a razor's armor rule is described:
- `shared/pages/gear-codex.html` (Razor)
- `dm/pages/lore-mechanics.html` (Razor)
- `dm/index.html` (Razor card and both NPC summary cards: "ignores armor")
- `dm/pages/npc-and-monsters.html` (Servian's and Ryn's Razor attack lines)
- `docs/lore-mechanics.md` (Razor)
- `docs/one-shot-materials.md` (Servian's and Ryn's Razor attack lines)

Standard wording: *Against a razor, the target is treated as unarmored: its AC is what it would be without armor (10 + its Dexterity modifier, or its Unarmored Defense if it has that feature), plus any shield and magic bonuses. Worn armor and natural armor don't count.* The NPC blocks currently say "ignores the target's armor AC bonus" or "ignores the AC bonus granted by the target's worn armor". Replace those with "treats the target as unarmored (10 + Dex or Unarmored Defense, + shield/magic)".

### 7f. Servian: spell slots and Bred to Command's action

Apply to `dm/pages/npc-and-monsters.html` (Servian stat block), `dm/index.html` (Servian summary card), `docs/one-shot-materials.md` (Servian stat block).

- Change the trait name to **Bred to Command (3/Short Rest, Bonus Action).** The text is unchanged.
- Add a line to the stat block, near Divine Smite: **Spell Slots (Paladin 7).** 1st level (4), 2nd level (3). Divine Smite spends these slots.
- Dashboard card: add `Spell slots: 4 × 1st, 3 × 2nd` and change the Bred to Command line to `3/short rest, bonus action, ally advantage`.

### 7g. Pulse Shield vs. Aegis Shield (two different things)

Josh's ruling: the **Pulse Shield** is built into Pulse Armor and is what resists razors. The **Aegis Shield** is an arm-mounted shield that gives +2 AC and houses the Pulse Fist emitter.

Apply to:
- `dm/pages/npc-and-monsters.html` and `docs/one-shot-materials.md` (Servian's block):
  - AC line → `AC 20 (Pulse Armor + Aegis Shield)`
  - Damage Resistances → `slashing damage from razors (Pulse Shield, built into his Pulse Armor)`
  - Rename the "Pulse Shield. +2 AC" trait → **Aegis Shield.** An arm-mounted kinetic shield on Servian's off-hand, +2 AC (included above). It also houses his Pulse Fist emitter.
  - Pulse Fist text: "slams the Pulse Shield" → "slams the Aegis Shield"
- `shared/pages/gear-codex.html`, `dm/pages/lore-mechanics.html`, `docs/lore-mechanics.md` (Pulse Armor entry): rename the property **Pulse Field** → **Pulse Shield** (built-in): resistance to slashing damage from razors specifically.
- Leave the Aegis Shield codex entry as is; it already matches.

---

## Expected difficulty after these changes (reference only; don't publish unless Josh asks)

Simulated full sessions (Act 1 → short rest → Act 2 → Act 3, resources carrying over; all rulings above applied). Each cell is the chance at least one PC drops to 0 HP, with the chance of a PC death after the slash:

| PCs | Act 1 | Act 2 | Act 3 Society | Act 3 Rising |
| --- | --- | --- | --- | --- |
| 5 | 36% | 0% | 53% / 0.0% | 56% / 0.5% |
| 4 | 44% | 0% | 58% / 0.1% | 57% / 1.5% |
| 3 | 26% | 0% | 36% / 0.1% | 62% / 4.9% |

---

## Verification checklist

- [ ] `grep -rn "1d4+2" dm/ docs/` finds no remaining Barbtail Skirmisher Claw/Tail Spike entries at 1d4+2.
- [ ] `grep -rni "two glaive attacks" dm/ docs/` returns nothing.
- [ ] `grep -rn "Pulse Field" .` returns nothing (renamed to Pulse Shield).
- [ ] `grep -rn "Pulse Armor + Pulse Shield" .` returns nothing (now Aegis Shield).
- [ ] `grep -rn "yours by default" index.html` returns nothing.
- [ ] Encounter compositions match across `npc-and-monsters.html`, `dm/index.html` and `docs/one-shot-materials.md`.
- [ ] The Adrift rule and the round-4 vacuum trigger appear in `lore-mechanics.html`, `dm/index.html` and `docs/lore-mechanics.md`.
- [ ] The short-rest note appears in lore-mechanics (HTML and MD), the storyboard (HTML and MD) and the dashboard.
- [ ] Both Oathbound break bullets say "2d6 psychic damage" on every page that lists them.
- [ ] The razor wording is identical everywhere it appears (codex, lore-mechanics, dashboard, both NPC blocks, docs).
- [ ] Every edited page still loads (DM pages behind the gate) and renders in the existing style (open each one in a browser).
