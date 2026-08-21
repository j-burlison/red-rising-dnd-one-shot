require('dotenv').config();
const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const DM_USERNAME = process.env.DM_USERNAME || 'dm';
const DM_PASSWORD = process.env.DM_PASSWORD;

if (!DM_PASSWORD) {
  console.warn(
    'WARNING: DM_PASSWORD is not set. Set it in your environment (see .env.example) before deploying — ' +
    'without it the DM site has no real password protection.'
  );
}

// Shared pages (color cards, gear codex, the Act 1 corridor map) are safe for
// both players and the DM, so they are served openly at /shared.
app.use('/shared', express.static(path.join(__dirname, 'shared')));

// Everything under /dm requires HTTP Basic Auth so players can't read
// DM-only content (stat blocks, the storyboard twist, marked-up maps).
app.use(
  '/dm',
  basicAuth({
    users: { [DM_USERNAME]: DM_PASSWORD || 'change-me-before-deploying' },
    challenge: true,
    realm: 'Benediction of Dis - DM Materials',
  }),
  express.static(path.join(__dirname, 'dm'))
);

// Player site is served at the root of the same domain.
app.use('/', express.static(path.join(__dirname, 'player')));

app.listen(PORT, () => {
  console.log(`Benediction of Dis site running on port ${PORT}`);
  console.log(`  Player site: http://localhost:${PORT}/`);
  console.log(`  DM site:     http://localhost:${PORT}/dm/  (password protected)`);
});
