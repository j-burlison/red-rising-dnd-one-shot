# Benediction of Dis — Red Rising D&D One-Shot

A set of web pages containing all the information needed to run the Red
Rising DnD adaptation one-shot: **Benediction of Dis**.

Two sites, one base URL, deployed as a static site on **GitHub Pages**:

- **Player site** (`/`) — color cards, gear codex, and player-safe battle
  maps. Public, no spoilers.
- **DM site** (`/dm`) — everything above plus the storyboard, full lore &
  mechanics reference, NPC/monster stat blocks, the Logbook handout, and
  battle maps with objectives marked. Gated behind a **password prompt**
  so a player can't casually browse it and cheat.

See `CLAUDE.md` for the full content index (what's included, what's still
missing) and the design conventions used across pages.

## Running it locally

No build step, no dependencies — it's plain HTML/CSS/JS. Any static file
server works:

```bash
python3 -m http.server 8080
# or: npx serve
```

Then open:
- Player site: http://localhost:8080/
- DM site: http://localhost:8080/dm/ (prompts for the password set in
  `shared/dm-gate.js`)

You can also just open `index.html` directly in a browser (`file://`),
though a local server is closer to how GitHub Pages will actually serve
it.

## Deploying to GitHub Pages

1. Push this repo to GitHub (see below)
2. On the repo's GitHub page: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch."
4. Set **Branch** to `main` (or whichever branch you deploy from) and the
   folder to `/ (root)`.
5. Save. GitHub gives you a URL like
   `https://<username>.github.io/red-rising-dnd-one-shot/` — that's your
   player site. The DM site is at
   `https://<username>.github.io/red-rising-dnd-one-shot/dm/`.

Every internal link in this repo uses relative paths, so this works the
same whether it's served from a GitHub Pages project subpath (as above)
or from a custom domain root — no path rewriting needed either way.

### Pushing to GitHub

```bash
git remote add origin https://github.com/<you>/red-rising-dnd-one-shot.git
git push -u origin main
```

## Project structure

```
index.html      player-facing landing page (served at "/")
pages/          player-only battle maps
dm/             DM-facing site (served at "/dm", gated by shared/dm-gate.js)
shared/         pages + the dm-gate.js script, linked from both sites
docs/           raw markdown source notes (not linked from the site)
```
