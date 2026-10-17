# Jack Chindlund — personal website

Employer-focused portfolio for product marketing, sales enablement, and practical AI implementation. Built with the existing Next.js 16 App Router, React, TypeScript, and Tailwind setup. Hosting remains GitHub → Vercel.

## Develop and check

Use Node 24, matching the existing Vercel project, and the committed npm lockfile.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm start
```

The production build prerenders the homepage, three case studies, and HTML resume. JavaScript adds only the mobile-menu refinement, email-copy action, and prepared-example selection. The stories and all three example outputs are available in the server-rendered HTML.

## Content maintenance

- `src/content/site.ts`: public name, email, navigation, site origin, substantive update date, and PDF address.
- `src/content/projects.ts`: public project summaries, ownership, status, and case-study sections. Stable slugs feed static routes and the sitemap.
- `src/content/experience.json`: resume experience, leadership, education, and skills. The homepage reuses the education record.
- `src/content/demo.ts`: fictional source facts. Prepared outputs live in the demo component; keep each claim connected to the matching source.
- `public/resume/jack-chindlund-resume.pdf`: current selectable-text public PDF. When experience changes, update the HTML record and PDF together, then inspect the rendered PDF and extracted text.
- `public/images/share/`: 1200 × 630 share images, one per public page. Update alongside substantive changes to titles.
- `public/fonts/`: locally served OFL-licensed Geist and Source Serif 4; license notices are included.

Current-role wording was confirmed October 17, 2026. Review it when employment changes. Retain scope qualifiers: initial 65 calls, a 13-feature catalog, and shared contribution to one quarter's department results.

Never commit internal source materials, transcripts, customer quotations, private context files, secrets, or the private claim register. Public illustrations and the demonstration use original fictional material with visible labels. Personal projects and analytics are excluded from this release.

## Pages and continuity

- `/`: introduction, selected work, background, and contact.
- `/work/product-knowledge`: knowledge-system story and prepared example.
- `/work/sales-call-analysis`: analysis story, verification, and training direction.
- `/work/dealer-enablement`: live-resource story and fictional feature entry.
- `/resume`: HTML professional record and downloadable PDF.

Homepage anchors `home`, `work`, `experience`, `about`, and `contact` remain available. The original PDF path permanently redirects to the current resume. The production canonical host is `www.jackchindlund.com`; the existing Vercel domain redirect is unchanged.

## Review and release

Use a separate branch and Vercel preview deployment for review. Production follows `main`; merge only after reviewing the actual screens and public wording. This redesign does not change Vercel settings, authentication, domain ownership, or analytics.

Check all routes and the PDF, radio controls and source anchors, menu/keyboard operation, reduced motion, narrow and wide reflow, metadata, missing pages, and link continuity. Code/build checks and manual browser review complement each other; neither establishes formal accessibility certification.
