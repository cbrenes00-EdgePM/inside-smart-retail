# INSIDE Smart Retail — Website Starter

A responsive bilingual (English/Spanish) static website for INSIDE Smart Retail.

## Site structure
1. Home — hero photograph of an INSIDE vending machine
2. INSIDE Vending — snacks, beverages and products
3. INSIDE Coffee — coffee machines and experience
4. INSIDE Market — micro markets and autonomous stores
5. INSIDE Technology — Nayax & cashless payments, payment systems, remote monitoring, analytics & reporting
6. Business Solutions — segments, benefits and how it works
7. About INSIDE — value proposition, values and contact form

## Files
- `index.html` — page structure (English copy) and Netlify contact form
- `script.js` — Spanish translations, language switcher and mobile navigation. The English version lives at `/en/` and the Spanish version at `/es/`; the root `/` uses the saved choice or the browser language
- `styles.css` — responsive visual system based on Brand Book 1.0
- `images/` — optimized WebP photography
- `favicon.svg` — provisional isotype (open frame + dot), to be replaced by the final logo files
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
- Contact email (inside.smartvending@gmail.com) is published in the contact section and footer; confirm the WhatsApp number.
- Replace any placeholder company details and review all claims.
- Test both languages, mobile layouts, links and form submission.
- Add privacy policy and cookie/analytics notices as applicable.
- Keep existing domain DNS and email records documented before changing nameservers.
- Connect `inside-cr.com` only after the deployed site has been tested. Follow the exact DNS records shown by Netlify.

## Brand system
Midnight `#101C2C`; Lime `#B8F36A`; Teal `#23B9AE`; Cloud `#F2F4F5`.
Typefaces: Manrope (headings) and Inter (body text), per Brand Book 1.0. Descriptor: SMART RETAIL.
Tagline: “Convenience, Reimagined.”

This is a first implementation draft. Verify legal brand availability, contact details, service scope, imagery rights, privacy requirements and commercial claims before production launch.


## Restoration notes
This package restores the original INSIDE visual identity and layout:
Midnight `#101C2C`, Lime `#B8F36A`, Teal `#23B9AE`, Cloud `#F2F4F5`,
and Manrope typography. The bilingual content, responsive navigation,
and original Vending / Coffee / Market structure are retained.
The contact form now routes to `success.html`, which follows the original brand.
