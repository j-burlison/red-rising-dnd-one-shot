# Benediction of Dis — Red Rising D&D One-Shot

A set of web pages containing all the information needed to run the Red
Rising DnD adaptation one-shot: **Benediction of Dis**.

Two sites on one server, one base URL:

- **Player site** (`/`) — color cards, gear codex, and player-safe battle
  maps. Public, no spoilers.
- **DM site** (`/dm`) — everything above plus the storyboard, full lore &
  mechanics reference, NPC/monster stat blocks, and battle maps with
  objectives marked. **Password protected** so players can't peek and
  cheat.

See `CLAUDE.md` for the full content index (what's included, what's still
missing) and the design conventions used across pages.

## Running it locally

```bash
npm install
cp .env.example .env   # then edit DM_PASSWORD in .env
npm start
```

- Player site: http://localhost:3000/
- DM site: http://localhost:3000/dm/ (prompts for the username/password
  from `.env`)

## Deploying

This is a small Node/Express app, which means the DM site's password
protection is enforced **server-side** (HTTP Basic Auth) — a player can't
bypass it just by guessing the `/dm/...` URL. That constrains hosting to
something that can run Node.

### DigitalOcean App Platform (recommended)

1. Push this repo to GitHub (see below).
2. In DigitalOcean, create a new App → GitHub → select this repo.
3. App Platform auto-detects the Node buildpack from `package.json`
   (`npm start` as the run command).
4. In the app's **Settings → App-Level Environment Variables**, add:
   - `DM_USERNAME` (defaults to `dm` if unset)
   - `DM_PASSWORD` — mark this one **encrypted**
5. Deploy. Your player site is at the app's URL; the DM site is at
   `<that URL>/dm`. Add a custom domain under Settings if you want one.

Costs roughly $5/mo on the cheapest instance size. Real password
protection, no extra services needed.

### GitHub Pages — not recommended for this use case

GitHub Pages only serves static files; it can't run the Express server or
check the DM password. Two options if you still want to use it:

- **Player site only** — host `player/` (plus `shared/`) on GitHub Pages,
  and don't host `dm/` there at all. Run the DM site locally with
  `npm start` during sessions instead, or host it separately with option
  above.
- **Cloudflare Access in front of Pages** — Cloudflare's free tier can
  gate a path (like `/dm`) behind a login (email OTP or a shared
  passcode) even when the origin is static GitHub Pages. This works but
  is more setup than the Node/Express route and ties you to Cloudflare.

Given the explicit ask for real DM-side password protection, **DigitalOcean
App Platform (or any other Node host — Render, Railway, Fly.io) is the
simpler path.**

### Pushing to GitHub

```bash
git remote add origin https://github.com/<you>/red-rising-dnd-one-shot.git
git push -u origin main
```

## Project structure

```
player/     player-facing site (served at "/")
dm/         DM-facing site (served at "/dm", password protected)
shared/     pages linked from both sites, served openly at "/shared"
docs/       raw markdown source notes (not served by the site)
server.js   the Express app tying it all together
```
