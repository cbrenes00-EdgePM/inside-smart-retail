# INSIDE Smart Retail — Website Starter

A responsive bilingual (English/Spanish) static website for INSIDE Smart Retail.

## Files
- `index.html` — page structure and Netlify contact form
- `styles.css` — responsive visual system
- `script.js` — language switcher and mobile navigation
- `netlify.toml` — Netlify publish configuration

## Preview locally
Open `index.html` in a browser. For a local server, run:
`python -m http.server 8000`

## Deploy to Netlify
1. Create a GitHub repository and upload these files to its root.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Connect GitHub and select the repository.
4. Build command: leave blank. Publish directory: `.`.
5. Deploy. Netlify will provide a temporary `*.netlify.app` URL.

## Contact form
The HTML form uses Netlify Forms (`data-netlify="true"`). After deployment, enable form notifications in the Netlify dashboard and submit a test inquiry.

## Before connecting the production domain
- Confirm company contact email and WhatsApp number.
- Replace any placeholder company details and review all claims.
- Test both languages, mobile layouts, links and form submission.
- Add privacy policy and cookie/analytics notices as applicable.
- Keep existing domain DNS and email records documented before changing nameservers.
- Connect `inside-cr.com` only after the deployed site has been tested. Follow the exact DNS records shown by Netlify.

## Brand system
Midnight `#101C2C`; Lime `#B8F36A`; Teal `#23B9AE`; Cloud `#F2F4F5`.
Typeface: Manrope (Google Fonts). Descriptor: SMART RETAIL.
Tagline: “Convenience, Reimagined.”

This is a first implementation draft. Verify legal brand availability, contact details, service scope, imagery rights, privacy requirements and commercial claims before production launch.
