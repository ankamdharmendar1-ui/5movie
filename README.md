# Portfolio Site

A single-page portfolio. Plain HTML/CSS/JS — no build step, no dependencies,
loads instantly.

## Files

- `index.html` — content and structure
- `style.css` — all styling
- `script.js` — footer year + status bar rotation

## Before you push

Edit `index.html`:
- Replace "Your Name", role, bio, and `[Your City]`
- Update the three project entries and their links
- Update email / GitHub / LinkedIn links
- Update the "About" paragraph

## Push to GitHub

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Host it free with GitHub Pages

1. Push the repo (steps above).
2. On GitHub: Settings → Pages → Source → select the `main` branch, `/ (root)` folder → Save.
3. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a minute or two.

## Preview locally

Just open `index.html` in a browser — no server needed. Or, for a local dev
server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
