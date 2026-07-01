# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**PixSign** is a React + Vite + Tailwind CSS landing page for a SaaS marketing distribution platform.
- Website: [pixsign.in](https://pixsign.in)
- Owner: Tech To Grow ([techtogrow.in](https://techtogrow.in))
- Contact: +91 96590 01122, +91 98403 20932

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS 3 |
| Animations | AOS (Animate On Scroll) |
| Icons | Lucide React |
| Build | Vite 6 |
| Package manager | npm |

**No Bootstrap. No CSS frameworks other than Tailwind.**

---

## Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

Dev server runs on port 5173 by default (auto-increments if in use).

---

## Project Structure

```
src/
├── App.jsx                   # Root — initializes AOS, renders all sections in order
├── main.jsx                  # React entry point
├── index.css                 # Tailwind directives + custom utility classes + keyframe animations
└── components/
    ├── Navbar.jsx            # Fixed nav, transparent→white on scroll, mobile hamburger
    ├── Hero.jsx              # Full-screen dark gradient hero + CSS dashboard mockup
    ├── ProblemSolution.jsx   # "Biggest business problem" — 4 pain points, old vs PixSign comparison, the math (500 dealers × 300 contacts = 1.5L impressions at ₹0), 6-step visual flow, analytics advantage with Non Opened Users mockup
    ├── HowItWorks.jsx        # 6-step process cards
    ├── RealWorldExamples.jsx # 4 industry case study cards
    ├── Features.jsx          # 20-feature grid (4 cols on desktop)
    ├── Comparison.jsx        # Without vs With PixSign side-by-side
    ├── Industries.jsx        # 15 industry tiles
    ├── Testimonials.jsx      # 6 testimonial cards
    ├── Pricing.jsx           # 3-tier pricing cards
    ├── FAQ.jsx               # 15-question accordion (useState per item)
    ├── SEOContent.jsx        # ~1800 words SEO prose targeting dealer/distributor keywords
    ├── DemoSection.jsx       # Final CTA — WhatsApp + phone call buttons
    ├── Footer.jsx            # 4-column footer
    └── StickyDemoCTA.jsx     # Floating WhatsApp bubble (appears after 400px scroll)
```

---

## Styling Rules

- **Utility classes only** — never write raw CSS except in `index.css` for keyframes or truly global styles.
- Custom utilities are defined in `index.css` under `@layer utilities`: `gradient-text`, `glass`, `glass-dark`, `hero-gradient`, `card-hover`, `btn-primary`, `btn-secondary`, `section-tag`, `section-title`, `section-subtitle`.
- Use these utility classes consistently across all components; don't re-define gradients inline.
- Color palette: Blue (`blue-600`) + Purple (`purple-600`) gradient is the primary brand. Green (`green-500`) for WhatsApp. Amber (`amber-400`) for badges/highlights.
- All section padding: `py-24`. All content max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## Animation Rules

- All scroll-triggered animations use AOS: `data-aos="fade-up"`, `data-aos-delay={i * 80}` on grid items.
- Cap `data-aos-delay` at 400ms max on long lists to avoid last-item lag.
- Floating elements use CSS classes: `animate-float`, `animate-float2`, `animate-float-delay` (defined in `index.css`).
- AOS is initialized once in `App.jsx` with `duration: 700, easing: 'ease-out-cubic', once: true`.

---

## SEO Rules

- All meta tags, Open Graph, Twitter Card, and JSON-LD structured data live in `index.html`.
- JSON-LD includes: `Organization`, `SoftwareApplication`, and `FAQPage` schemas.
- `SEOContent.jsx` targets these keywords (do not remove): `marketing automation software`, `dealer marketing software`, `distributor marketing software`, `whatsapp marketing creative app`, `franchise marketing software`, `sales enablement platform`, `automatic image branding`, `marketing asset management`, `marketing automation India`.
- Canonical URL: `https://pixsign.in/`

---

## VPS Deployment

**Server:** `85.208.51.93` — Ubuntu 24.04.4 LTS  
**Web root:** `/var/www/` (static sites served here)  
**Process manager:** PM2 (already running other projects)

### Deploy user (non-root)
- **User:** `pixsign-deploy`
- **SSH:** `ssh pixsign-deploy@85.208.51.93`
- **Web root:** `/var/www/pixsign/` (owned by pixsign-deploy)
- **Sudoers:** can run `npm`, `git`, `systemctl reload nginx`, `rsync` without password

### How Claude should deploy (use this exact sequence)

```bash
# 1. Commit & push all changes to GitHub first
git add -A
git commit -m "description of changes"
git push

# 2. SSH into VPS as deploy user and run deploy script
ssh pixsign-deploy@85.208.51.93 "curl -fsSL https://raw.githubusercontent.com/G0kulakrishnan/pixsign/main/deploy.sh | bash"
```

That single command pulls latest code, builds, copies to web root, and reloads Nginx.

### Deployment flow (what deploy.sh does)
1. `git clone` repo into `/tmp/pixsign_build`
2. `npm install && npm run build`
3. `cp -r dist/ /var/www/pixsign/`
4. `sudo systemctl reload nginx`
5. Cleanup `/tmp/pixsign_build`

### Nginx config (to be created on VPS)

Site should be served by Nginx as a static site — **not** via PM2 (it's a static build, no Node server needed).

```nginx
server {
    listen 80;
    server_name pixsign.in www.pixsign.in;
    root /var/www/pixsign;
    index index.html;

    # SPA routing — all paths serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

After SSL (Certbot):
```bash
certbot --nginx -d pixsign.in -d www.pixsign.in
```

### Other projects on the VPS (do not touch)

| PM2 name | Path |
|----------|------|
| t2gcrm | /var/www/t2gcrm |
| dev-t2gcrm | /var/www/dev-t2gcrm |
| hotel-pms | /var/www/Hotel-PMS |
| vaultguard-api | /var/www/vaultguard-backend |

Static sites: `/var/www/t2g-landing` (served by Nginx, www-data owned)

---

## Real Product Details (from actual app screenshots)

### App name
**Pixsign Pro – Enhanced Status App**

### Android App (Play Store)
- URL: https://play.google.com/store/apps/details?id=com.pixsign4.world
- Package: `com.pixsign4.world`

### User Profile fields (actual fields from mobile app)
- Full Name
- Agency
- City
- Mobile Number
- Expiry Date (subscription expiry)

### Admin Portal – Sidebar navigation (actual)
**Management:** Dashboard, Visit Website, Add Users, Manage Users  
**Upload:** Upload Image, Upload Bulk Image, Upload Video, Upload Video Bulk  
**Media:** Manage All Images, Manage All Videos, Analytics  
**Settings**

### Admin Dashboard
- Shows recent/featured creatives as a horizontal banner strip
- Quick-access cards: Manage Images, Manage Videos, Add Images, Add Videos, All Users, Add Users, My Profile, Visit Website

### Manage Images (actual)
- Grid of image cards showing the creative thumbnail
- Each card: Published status + date/time, Analytics button, Download button, Delete button
- Bulk selection checkbox per card
- "Delete All" button top right

### Analytics (actual fields)
Per image analytics:
- Date range filter (From Date / To Date) + Filter button
- Stats: **Unique Shares, Total Shares, Unique Downloads, Total Downloads, Unique Users, Total Interactions**
- Table columns: S.No, User Name, Mobile, City, Shared, Downloaded, Date
- **"Non Opened Users"** section — shows users who haven't opened/downloaded the image (columns: S.No, User Name, Mobile, City)
- Download CSV button (green) for both tables

### Mobile App (Android) — actual screens
1. **Login screen:** Phone number + password fields, Login button, PixSign P logo
2. **Image feed:** Welcome [User Name], list of creatives with date/time, Download + Share buttons per image, bottom nav: Image | Video | (status icon) | Profile
3. **Profile screen:** Shows Full Name, Agency, City, Mobile Number, Expiry Date, Edit Profile button, Contact Support button

### Core value prop
Upload one creative → every dealer/agent/branch gets auto-branded version with their own details

### Actual user profile data printed on creatives
Agency name, City, Mobile Number (and optionally: name, logo, photo)

### Sharing targets
WhatsApp (chat + Status), direct Share (all apps), HD download

### Primary CTA everywhere
"Book Free Demo"

### WhatsApp demo link
`https://wa.me/919659001122`

---

## Real Pricing (from live app — do not guess)

Pricing model: **per user, per year**. Businesses buy licences for however many users (dealers/agents/sales reps) they have.

| Plan | Price | Min Users | Images/Month | Videos/Month | Setup Fee |
|------|-------|-----------|--------------|--------------|-----------|
| Standard | ₹999/year/user | 1 | 50 | 30 | ₹3,000 one-time |
| Business | ₹999/year/user | 10 | 100 | 50 | Free |
| Enterprise | ₹799/year/user | 100 | 500 | 100 | Free |

Example calculation: 50 dealers on Business = 50 × ₹999 = ₹49,950/year.

---

## Rules for Future Changes

1. **Never use Bootstrap** or any CSS framework other than Tailwind.
2. **Never use lorem ipsum** — all copy must be production-quality and relevant to PixSign.
3. **Preserve SEO content** in `SEOContent.jsx` and `index.html` — keyword density matters.
4. **Keep AOS delays capped at 400ms** on list/grid items.
5. **Primary CTA must always be "Book Free Demo"** linking to `#demo` or the WhatsApp link.
6. **Contact numbers** are `+91 96590 01122` and `+91 98403 20932` — use these consistently.
7. **Deployment is static** — `npm run build` → upload `dist/` to `/var/www/pixsign/` on VPS. No PM2 needed.
8. When adding new sections, follow the existing pattern: `section-tag` → `section-title` → `section-subtitle` → content.
9. New components go in `src/components/` and must be imported + placed in `App.jsx` in logical page order.
10. All external links (`wa.me`, social media) must have `target="_blank" rel="noopener noreferrer"`.
