# Game Zone — HCI E-Commerce Gaming Gear Web Application

A modern, high-performance e-commerce platform crafted for gaming peripherals, accessories, and gear. Designed with a dual-role interface featuring a player/customer portal and a comprehensive seller administration console.

---

## 🛠️ Languages, Tools & Technologies

### 1. Languages
- **TypeScript (`^5.7.0`)**: Strongly typed components, data models (`Product`, `Role`, `CustomerPage`, `SellerPage`), and strict type checks for UI safety.
- **HTML5**: Semantic web markup (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, accessible forms, ARIA attributes, and skip-links).
- **CSS3**: Custom design token system with CSS variables, Barlow Condensed & Inter typography, responsive Flexbox and CSS Grid layouts, glassmorphism, glowing cyber/esports styling, and micro-animations.

### 2. Frontend Framework & Core Libraries
- **React (`^19.0.0`)**: Modern declarative UI library utilizing React Hooks (`useState`, `useMemo`), functional components, and modular state management.
- **React DOM (`^19.0.0`)**: React 19 client rendering and virtual DOM hydration into `#root`.

### 3. Styling & Design System
- **Tailwind CSS (`^4.0.0`)**: Next-generation CSS framework loaded via `@import 'tailwindcss';` in `src/index.css`.
- **@tailwindcss/vite (`^4.0.0`)**: First-class Vite plugin integration for Tailwind CSS v4 without legacy configuration files.
- **Google Fonts**:
  - `Barlow Condensed`: High-impact, condensed athletic/esports typography for headlines and banners.
  - `Inter`: Crisp, clean UI font for body text, data tables, and metrics.

### 4. Build Tools & Bundler
- **Vite (`^8.0.5`)**: High-performance frontend build tool providing lightning-fast Hot Module Replacement (HMR) and optimized rollup bundling.
- **@vitejs/plugin-react (`^6.0.0`)**: Official React plugin enabling Fast Refresh during development.

### 5. Formatting & Code Quality
- **oxfmt (`^0.2.0`)**: Ultra-fast, Rust-based code formatter.
- **TypeScript Compiler (`tsc`)**: Static type checking and AST validation.

### 6. Package & Environment Management
- **Node.js (`v22`)**: Modern JavaScript runtime engine.
- **pnpm (`10.34.3`)**: Fast, disk space efficient package manager.
- **mise (`.mise.toml`)**: Runtime and toolchain version manager pinning Node.js 22 and pnpm 10.

---

## 🎮 Key Features & Role Architecture

### 1. 🔐 Quick Demo Authentication
- **Dual-role switcher**: Instant one-click demo login or manual credentials validation:
  - **Customer Login**: `user@example.com` / `user123`
  - **Seller Login**: `seller@example.com` / `seller123`
- Passcode visibility toggle and dynamic validation error messages.

### 2. 🛒 Customer Experience (Paul Angelo)
- **Home / Hero Showcase**: Seasonal drop promotions, featured loadouts, and value proposition trust strips.
- **All Gear Catalog**: Instant live search by product name and category.
- **Category Navigation**: Keyboards, Gaming Mice, Audio, Controllers, and Accessories.
- **Interactive Shopping Bag**:
  - Real-time quantity adjustment and item removal.
  - Automatic subtotal, dynamic free shipping calculation (threshold over ₱3,000), and checkout simulator.
- **Wishlist**: One-click gear favoriting with count badge in the header.
- **Mission Log (Orders)**: Tracking for active and delivered shipments with status pills.
- **Customer Profile**: Player account information, avatar (`PA`), order history, and logout controls.
- **Responsive Navigation**: Desktop sticky header and sliding mobile navigation menu.

### 3. 📊 Seller & Store Management (Dishan Pamela)
- **Seller Console Dashboard**:
  - Key business metrics: Total revenue, total orders, active gear count, and low-stock indicators.
  - Interactive 6-month sales overview chart.
  - Live inventory health ring chart (Healthy stock vs. Low stock).
- **Manage Gear (Inventory CRUD)**:
  - Tabular inventory overview with product thumbnails, category, price, and stock quantities.
  - Interactive Modal to add new gear or edit existing listings.
  - Instant stock deletion with live reactivity.
- **Fulfillment Queue**: Real-time customer orders with fulfillment status indicators (`SHIPPED`, `PROCESSING`, `DELIVERED`).
- **Store Profile**: Verified seller badge, store ID (`GZ-SELLER-001`), owner details, and contact information.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 20+ or 22) and [pnpm](https://pnpm.io/) installed.

### Installation
Clone or navigate to the project directory and install dependencies:
```bash
pnpm install
```

### Running Locally
Start the development server with Hot Module Reloading:
```bash
pnpm dev
```

### Production Build
To generate optimized production bundles:
```bash
pnpm build
```

### Formatting Code
Run the ultra-fast `oxfmt` formatter:
```bash
pnpm format
```
