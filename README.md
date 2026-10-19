# My Dairy Book — Website

A one-page marketing website plus dedicated legal pages for the **My Dairy Book**
Android app.

This is a standalone project. It is **not** part of the Flutter app project and does
not share its build or dependencies. The only things copied from the app are the
brand images in `assets/` (app icon, logo, dashboard illustration).

## Files

```
mydairybook-website/
├── index.html              # one-page marketing site (no legal content)
├── privacy-policy.html     # dedicated legal page
├── data-deletion.html      # dedicated legal page (Play Store deletion URL)
├── terms-of-service.html   # dedicated legal page
├── billing-refunds.html    # dedicated legal page
├── cookies.html            # dedicated legal page
├── styles.css              # brand theme, layout and responsive rules
├── script.js               # mobile menu, scroll animations, contact form, back-to-top
├── assets/
│   ├── app_icon.png        # favicon, header/footer logo, app icon
│   ├── dashboard_hero.webp # app hero illustration (optional use)
│   └── logo.png            # full app logo
└── README.md
```

## Legal pages

The legal content is **not** on the main page. Each document has its own page:

| Page | File | Play Console use |
|---|---|---|
| Privacy Policy | `privacy-policy.html` | Privacy policy URL |
| Data Deletion | `data-deletion.html` | Account/data deletion URL |
| Terms of Service | `terms-of-service.html` | Website link |
| Billing & Refunds | `billing-refunds.html` | Website link |
| Cookies | `cookies.html` | Website link |

These links appear **only in the footer** of every page. The top navigation and the
main page contain no legal links or legal text.

## How to open it

No build step is needed.

1. Open this folder in VS Code.
2. Open `index.html` in a browser, **or** use the VS Code *Live Server* extension
   (right-click `index.html` → *Open with Live Server*).
3. Or run a local server from this folder:

   ```powershell
   # Python
   python -m http.server 8080

   # Node (if installed)
   npx serve .
   ```

   Then visit <http://localhost:8080>.

## What is on the main page

- Hero with app mockup, quick features and a “Coming soon” app button
- Feature grid (collection, rate charts, delivery, farmers/customers, payments,
  bills, reports, stock, suppliers/staff)
- How it works in 4 steps
- Dairy types it is made for
- 13-language section
- Security, permissions and a Play-style data-safety summary
- FAQ
- App information table (name, platform, price, developer, support email)
- Contact section with an email form
- Footer with links to all five legal pages

## Before you publish

Update these placeholders so every page is accurate:

1. **Contact email** — currently `mydairybook01@gmail.com` in every HTML page
   (header, policies, contact, footer) and `CONTACT_EMAIL` in `script.js`.
2. **Developer / legal name** — currently “My Dairy Book”.
3. **Effective dates** — currently 19 October 2026.
4. **Google Play URL** — the site currently shows “Coming soon” instead of a
   Play Store link. When the app is live, replace the “Coming soon” buttons with
   the store link:
   `https://play.google.com/store/apps/details?id=com.mydairybook.my_dairy_book`.
5. **Pricing claims** — the pages say the app is free. Change this if you add
   paid plans.

## Deploying for Google Play

Google Play requires a public URL for your privacy policy and (if the app creates
accounts) a public data-deletion URL. You can host this folder for free on:

- **GitHub Pages** — push the folder to a repository, then enable Pages
  (Settings → Pages → Deploy from branch → root).
- **Netlify / Vercel** — drag and drop the folder, or connect the repository.

After deploying, use these URLs in Play Console:

- Privacy policy: `https://your-domain.com/privacy-policy.html`
- Data deletion: `https://your-domain.com/data-deletion.html`
- Terms of service: `https://your-domain.com/terms-of-service.html`
- Website: `https://your-domain.com`
