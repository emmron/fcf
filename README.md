# FC Fitness — fcpt.com.au

The website for **FC Fitness**, Fion Chan's private personal-training studio in Tapping, Perth. It's a rebuild of the old Wix site in Next.js, made to be fast, accessible and easy to maintain.

- **Framework:** Next.js 16 (App Router, Cache Components, Turbopack) with React 19 and TypeScript
- **Styling:** Tailwind CSS v4 with design tokens in `src/app/globals.css`
- **Hosting:** Vercel. Every page is prerendered as static HTML (`ensureStatic = 'navigation'`)

## Editing content

All words, prices and photos live in `src/content/`. You don't need to touch page code to update them.

| File | What's in it |
| --- | --- |
| `site.ts` | Phone, email, address, opening hours, social links, navigation |
| `services.ts` | The nine training services (text, price, duration, photo) |
| `pricing.ts` | Every plan and pack on the Pricing page |
| `faqs.ts` | FAQs, grouped by topic, plus the Chinese welcome |
| `stories.ts` | Client reviews, before/after stories, headline stats |
| `about.ts` | Fion's bio, credentials, timeline and studio features |
| `suburbs.ts` | Suburbs shown in the service-area list |
| `images.ts` | Photo registry with alt text (files live in `src/assets/images/`) |

> **Prices to confirm:** the old site listed different prices for the same session in two places
> (45 min: $75 vs $80; 60 min: $94 vs $108; extra person: $20 vs $15). The rebuild keeps both as they were.
> Pick the right numbers and update `services.ts` and `pricing.ts`.

## Local development

Requires Node.js 24 (see `engines` in `package.json`).

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploying to Vercel

1. Push this repository to GitHub (`origin` is `github.com/emmron/fcf`).
2. In Vercel, choose **Add New → Project** and import the repo. The framework is detected as Next.js automatically, so no build settings are needed.
3. Add the environment variables from `.env.example` under **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL`: `https://www.fcpt.com.au`
   - `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`: so the enquiry form sends email (see below)
   - `NEXT_PUBLIC_BOOKING_URL` (optional): an external booking page. Leave it blank to send "Book" buttons to the enquiry form.
4. Deploy, then add the custom domain under **Settings → Domains** (`fcpt.com.au` and `www.fcpt.com.au`) and update DNS at the registrar as Vercel instructs.

### Enquiry form email

The contact form uses a Next.js Server Action that sends email through [Resend](https://resend.com):

1. Create a Resend account and verify the `fcpt.com.au` domain (add the DNS records Resend gives you).
2. Create an API key and set `RESEND_API_KEY` in Vercel.
3. Set `CONTACT_FROM_EMAIL`, for example `FC Fitness website <website@fcpt.com.au>`.

Until a key is set, the form asks visitors to call, text or email instead, so no enquiry is silently lost.

### Online booking

The old site used Wix Bookings, which stops working once the domain points to Vercel. Options:

- Keep using Wix Bookings on a subdomain (e.g. `book.fcpt.com.au`) and set `NEXT_PUBLIC_BOOKING_URL` to its booking-calendar base URL. Service buttons link to `<NEXT_PUBLIC_BOOKING_URL>/<old-wix-service-slug>`.
- Switch to a booking tool such as Cal.com, Calendly or Fresha and set `NEXT_PUBLIC_BOOKING_URL` to its page.
- Leave it blank. Every "Book" button opens the enquiry form with the chosen service pre-selected.

### Redirects from the old site

`next.config.ts` permanently redirects the old Wix URLs (`/book-online`, `/service-page/*`, `/booking-calendar/*`, `/pricing-plans/*`, `/s-projects-side-by-side`, `/paywall`) to their new pages, so search rankings and bookmarks carry over.
