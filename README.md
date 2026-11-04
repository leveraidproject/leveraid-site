# LeverAid Solutions Website

Static website for LeverAid Solutions, a virtual assistance agency. Plain HTML, CSS, and JavaScript, so it needs no build step.

## Structure

```
index.html      Single-page site
style.css       All styles
main.js         Mobile menu and footer year
```

## Before you publish

Replace these placeholders in `index.html`:

1. `YOUR-EMAIL@example.com` (appears in Careers and Contact): your business email.
2. `https://formspree.io/f/YOUR_FORM_ID`: your form endpoint. Create a free form at [formspree.io](https://formspree.io) and paste its URL.
3. Logo: the header uses an SVG mark. To use your own logo, add it to an `assets/` folder and swap the `<svg class="brand-mark">` block for an `<img>` tag.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy on GitHub Pages

1. Create a new repository on GitHub (for example `leveraid-site`).
2. Upload these files, or push them:

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/leveraid-site.git
git push -u origin main
```

3. In the repository, go to **Settings > Pages**, set **Source** to `Deploy from a branch`, choose `main` and `/ (root)`, then save.
4. Your site goes live at `https://YOUR-USERNAME.github.io/leveraid-site/`.

### Use your own domain (leveraidsolutions.com)

1. In **Settings > Pages**, enter `leveraidsolutions.com` under **Custom domain**.
2. At your domain registrar, add the DNS records GitHub lists (A records for the apex domain, plus a CNAME for `www`).
3. Turn on **Enforce HTTPS** once the certificate is ready.

Only do this when you are ready to move the domain off your current site builder, since it will replace the live site.

## Notes

- Fonts (Bricolage Grotesque, DM Sans) load from Google Fonts, with system fallbacks.
- The Blog link points to the existing blog at `https://leveraidsolutions.com/home-521727`.
- Business name, phone, address, and social links are carried over from the current site.
