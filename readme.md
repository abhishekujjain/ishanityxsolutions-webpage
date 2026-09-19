# Ishanityx Solution Pvt Limited — Company Website

Vibrant HTML5 marketing site for **Ishanityx Solution Pvt Limited**.

## Open locally

```bash
cd /workspace
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080) and open `index.html`.

## Files

- `index.html` — semantic HTML5 structure (hero, about, services, process, contact)
- `styles.css` — vibrant responsive theme
- `script.js` — mobile navigation and contact form demo handler

## Services highlighted

- Webpage & web app development
- Backend services
- Mobile app development
- AI solutions

Update contact email and phone in `index.html` with your real business details.

## GitHub Pages

The site is static HTML at the repo root. A [GitHub Actions workflow](.github/workflows/pages.yml) copies `index.html`, `styles.css`, `script.js`, and `.nojekyll` to the **`gh-pages`** branch on every push to **`main`**.

### One-time setup (required)

1. Open **[Repository Settings → Pages](https://github.com/abhishekujjain/ishanityxsolutions-webpage/settings/pages)**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **`gh-pages`**, folder **`/ (root)`**, then **Save**.

After the workflow runs and Pages is enabled, the site is available at:

**https://abhishekujjain.github.io/ishanityxsolutions-webpage/**

Each push to `main` updates `gh-pages` automatically (allow 1–2 minutes for GitHub to refresh).
