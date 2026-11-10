# My Dairy Book — Website

The public marketing website and legal pages for the **My Dairy Book** Android app.

This is a standalone static project. It does not share the Flutter app's build,
dependencies, or source. Only the brand images in `assets/` are copied from the app.

## Live site

| Page | URL |
|---|---|
| Website | https://my-dairy-book-site.web.app/ |
| Privacy Policy | https://my-dairy-book-site.web.app/privacy-policy.html |
| Data Deletion | https://my-dairy-book-site.web.app/data-deletion.html |
| Terms of Service | https://my-dairy-book-site.web.app/terms-of-service.html |
| Billing & Refunds | https://my-dairy-book-site.web.app/billing-refunds.html |
| Cookies | https://my-dairy-book-site.web.app/cookies.html |

Use these URLs in Google Play Console:

- **Privacy policy:** `https://my-dairy-book-site.web.app/privacy-policy.html`
- **Account/data deletion:** `https://my-dairy-book-site.web.app/data-deletion.html`

Hosting is Firebase Hosting, project `my-dairy-book-site` (Spark plan).
The app itself uses the separate Firebase project `my-dairy-book`.

## Files

```
mydairybook-website/
├── index.html              # one-page marketing site (no legal content)
├── privacy-policy.html     # dedicated legal page
├── data-deletion.html      # dedicated legal page (Play Console deletion URL)
├── terms-of-service.html   # dedicated legal page
├── billing-refunds.html    # dedicated legal page
├── cookies.html            # dedicated legal page
├── styles.css              # brand theme, layout and responsive rules
├── script.js               # mobile menu, scroll animations, contact form
├── firebase.json           # Firebase Hosting configuration
├── .firebaserc             # Hosting project: my-dairy-book-site
├── assets/
│   ├── app_icon.png        # favicon, header/footer logo, app icon
│   ├── dashboard_hero.webp # app hero illustration
│   └── logo.png            # full app logo
└── README.md
```

Legal links appear only in the footer of each page. The top navigation and the
main page contain no legal content or legal links.

## Editing and previewing

No build step is needed.

```powershell
# From this folder
python -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080>.

## Deploying

The live site is deployed with Firebase Hosting:

```powershell
firebase deploy --only hosting --project my-dairy-book-site
```

The deploy uses `firebase.json` (public folder `.`) and `.firebaserc` (default
project `my-dairy-book-site`). Do not add secrets, tokens, or private data to this
folder; everything here becomes public.

## Before you publish (verified)

- **Support email:** `mydairybook01@gmail.com` on every page and in `script.js`.
- **Developer / legal name:** My Dairy Book.
- **Effective dates:** 19 October 2026.
- **Google Play:** the site shows **Coming soon**; no Play Store link yet.
- **Pricing:** the site describes the app as free. Update this if paid plans are added.
- **Data deletion:** the page documents in-app deletion at
  **More → Settings → Delete Account**, plus the email fallback.
