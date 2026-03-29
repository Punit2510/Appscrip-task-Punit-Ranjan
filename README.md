# Appscrip Task — Daksh Arya

A high-fidelity, responsive **Product Listing Page (PLP)** built as part of the Appscrip frontend assignment.

## Live Demo

> Deployment link here (Vercel / Netlify)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (zero external UI libraries)
- **Data**: [FakeStore API](https://fakestoreapi.com/products) fetched server-side
- **Rendering**: Server-Side Rendering (SSR) via Next.js async Server Components

## Features

- **SSR**: Product data is fetched on the server before the page is sent to the browser, improving SEO and first contentful paint
- **Responsive**: Works on mobile (320px+), tablet (768px+), and desktop (1024px+)
- **Filter Sidebar**: Accordion-based category filters with checkbox selections and mobile full-screen drawer
- **Sort**: Dropdown to sort products by recommended, price high-to-low, or price low-to-high
- **Wishlist**: Per-card heart toggle using local React state
- **SEO**: Semantic H1/H2 tags, OpenGraph metadata, Twitter Cards, and JSON-LD schema (`ItemList` + `Product`)
- **Error boundary**: `error.tsx` catches API failures gracefully
- **Loading state**: `loading.tsx` streams a spinner while the server fetches data

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and OpenGraph SEO
│   ├── page.tsx            # SSR entry point — fetches products, injects JSON-LD
│   ├── loading.tsx         # Suspense loading boundary
│   ├── error.tsx           # Error boundary for API failures
│   └── globals.css         # Design tokens and CSS reset
│
└── components/
    ├── Header/             # Top strip, logo, icon nav, mobile hamburger drawer
    ├── Footer/             # Newsletter, links, payment icons — mobile accordion
    ├── ProductListing/     # Hero section, toolbar (filter toggle + sort), grid
    ├── SidebarFilter/      # Accordion filter groups with checkbox options
    └── ProductCard/        # Product image, title, wishlist heart toggle
```

## SEO Implementation

| Element | Implementation |
|---|---|
| Page Title | Dynamic via `metadata` in `layout.tsx` |
| Meta Description | Set in `metadata` export |
| H1 | "DISCOVER OUR PRODUCTS" in `ProductListing` hero |
| H2/H3 | Footer section headings |
| Schema | JSON-LD `ItemList` + `Product` injected in `page.tsx` |
| Image Alt Text | Product title from API used as `alt` attribute |
| OpenGraph | `og:title`, `og:description`, `og:url`, `og:type` |
| Twitter Card | `summary_large_image` with creator handle |
| Robots | `index: true, follow: true` |

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Evaluation Checklist

- [x] HTML & CSS only (no Tailwind, no Bootstrap)
- [x] React.js with Next.js framework
- [x] Server-Side Rendering (SSR)
- [x] Responsive — mobile & tablet
- [x] Code structure and naming conventions
- [x] Minimum pre-built JS packages
- [x] SEO — title, description, H1/H2, schema, alt text
- [x] FakeStore API integration
- [x] Hosted on public service
- [x] Public GitHub repository: `Appscrip-task-Daksh-Arya`
