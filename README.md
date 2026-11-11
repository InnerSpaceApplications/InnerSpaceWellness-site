# innerspacewellness.app

The Inner Space Wellness website, rebuilt from the Figma Sites design as a plain static site (HTML, CSS, a little JavaScript). No build step is needed.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/subscribe-form/` | `subscribe-form/index.html` (Mailchimp signup) |
| `/terms-of-service/` | `terms-of-service/index.html` |
| `/privacy-policy/` | `privacy-policy/index.html` |
| `/support/` | `support/index.html` |

Styles are in `assets/css/site.css`, images in `assets/img/`, fonts in `assets/fonts/`.

## Publishing on GitHub Pages

1. Create a new **public** repository on GitHub (for example `innerspace-site`).
2. Upload **everything in this folder** to the repository root: use *Add file → Upload files*, drag the contents in (not the folder itself), and commit. `index.html` must be at the top level, next to `CNAME`.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, then **Branch: `main`**, folder **`/ (root)`**, and save.
4. On the same page, the **Custom domain** box should show `innerspacewellness.app` (it's read from the `CNAME` file). If it's empty, type it in and save.
5. Once DNS is pointed at GitHub (below) and the check passes, tick **Enforce HTTPS**.

## GoDaddy DNS

In GoDaddy, go to **Domain Portfolio → innerspacewellness.app → DNS → DNS Records**:

1. Delete the existing **A** records for `@` and any **CNAME** for `www` that point to Figma.
2. Add four **A** records, each with name `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a **CNAME** record with name `www` and value `YOUR-GITHUB-USERNAME.github.io`.

DNS usually updates within an hour. GitHub then issues the HTTPS certificate automatically. `.app` domains only load over HTTPS, so expect the site to be unreachable for a short while until the certificate is ready.

Don't touch any **MX** or **TXT** records, so your `info@innerspacewellness.app` email keeps working.

## Editing

- **Text:** open the page's `index.html` on GitHub, click the pencil icon, edit, and commit. The live site updates in about a minute.
- **Legal pages:** each section is a plain `<h2>`, `<h3>` or `<p>`, so you can paste in new wording directly.
- **Video:** the explainer video and its poster image are still loaded from your existing Firebase Storage and GitHub links (`index.html`, search for `is-player`).

## Fonts

Song Myung and Fixel are both open-source (SIL Open Font License); the licenses are in `assets/fonts/`.
