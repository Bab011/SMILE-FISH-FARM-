# Smile Fish Farm — Official Website

A responsive static food-brand website for **Smile Fish Farm** (Badore Cooperative, Badore, Ajah, Lagos State, Nigeria), built with React, Vite, Tailwind CSS, and TypeScript.

- **Tagline:** Good Food. Good Mood. / Eat Well. Smile More.
- **Products:** Fresh Catfish (400g – 1.5kg) and Smoked Catfish (available on request).
- **Primary Conversion:** Direct WhatsApp enquiries (`08032300422`).
- **Hosting:** 100% static build (`dist/`) — no backend, database, login, or paid services required.

---

## Project Structure

```text
├── index.html                  # Page title, SEO meta tags, OpenGraph, Google Fonts, JSON-LD
├── netlify.toml                # Pre-configured Netlify static build & publish settings
├── public/
│   ├── favicon.svg             # Smile Fish Farm brand icon
│   └── assets/aistudio/        # Uploaded product & food photographs
├── src/
│   ├── assets/images/          # Lifestyle dining & culinary inspiration photography
│   ├── data/brand.ts           # Single source of truth for copy, WhatsApp URLs, & image paths
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive top navigation + mobile menu
│   │   ├── Hero.tsx            # First screen with catfish platter & primary CTAs
│   │   ├── Products.tsx        # Fresh Catfish & Smoked Catfish cards with photo switchers
│   │   ├── Experience.tsx      # "It's more than a meal. It's a reason to smile."
│   │   ├── WhyChooseSmile.tsx  # 4 key reasons to order from Smile Fish Farm
│   │   ├── FoodInspiration.tsx # "What's Cooking?" culinary inspiration cards
│   │   ├── Contact.tsx         # Address, phone, WhatsApp CTA & Quick Enquiry builder
│   │   ├── Footer.tsx          # Brand footer with dynamic year copyright
│   │   └── ResilientImage.tsx  # Image wrapper with automatic fallback
│   ├── App.tsx                 # Main single-page layout
│   ├── index.css               # Tailwind CSS theme & typography rules
│   └── main.tsx                # Application entry point
└── package.json
```

---

## How to Replace Images

All product and lifestyle images are configured in one central file: **`src/data/brand.ts`**.

1. **Using files in `public/`:**
   - Place your new `.jpg`, `.jpeg`, or `.png` photos inside `public/assets/` (for example, `public/assets/fresh-catfish-1.jpg`).
   - Open `src/data/brand.ts` and update the matching `src` string to `'/assets/fresh-catfish-1.jpg'`.
2. **Using files in `src/assets/images/`:**
   - Place your photos inside `src/assets/images/`.
   - Import them at the top of `src/data/brand.ts` (just like `experienceDiningImg`) and assign the imported variable to `src`.
3. **Update alt text:**
   - Always update the `alt` description next to each `src` in `src/data/brand.ts` so screen readers and search engines accurately describe your photo.

---

## How to Edit Business Information

Open **`src/data/brand.ts`** to update:

- **Business Name, Tagline & Address:** Edit `BUSINESS_INFO` (`name`, `tagline`, `supportingLine`, `addressLines`, `fullAddress`).
- **Phone & WhatsApp Number:** Update `phoneDisplay`, `phoneHref`, and `whatsappNumber` (international format without `+`, e.g., `2348032300422`).
- **Pre-filled WhatsApp Messages:** Edit `WHATSAPP_URLS` or `buildCustomWhatsAppUrl` in `src/data/brand.ts`.
- **Product Descriptions & Sizes:** Edit `PRODUCTS` in `src/data/brand.ts`.
- **SEO & Social Sharing Preview:** Edit `<title>`, `<meta name="description">`, `og:*`, and the JSON-LD block in `index.html`.

---

## Local Development

```bash
npm install
npm run dev
```

To build the production static site:

```bash
npm run build
```

The ready-to-host static files will be generated in the **`dist/`** folder.

---

## Free Deployment to Netlify

This project includes a `netlify.toml` file so Netlify detects the build settings automatically.

### Option 1: Drag-and-Drop (Fastest, No Git Required)

1. Run `npm install` and `npm run build` locally to generate the `dist/` folder.
2. Create or sign in to a free account at [https://app.netlify.com](https://app.netlify.com).
3. Go to **Sites** and click **Add new site → Deploy manually**.
4. Drag and drop the generated **`dist`** folder onto the Netlify upload area.
5. Your site will be live within seconds on a free `*.netlify.app` URL.

### Option 2: Git-Connected Auto-Deploy (Free Tier)

1. Push this project folder to a GitHub, GitLab, or Bitbucket repository.
2. In Netlify, select **Add new site → Import an existing project**.
3. Connect your repository. Netlify will read `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**. Any future updates pushed to your repository will redeploy automatically at zero cost.
