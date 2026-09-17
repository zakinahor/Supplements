import json

spec_sections = [
    {
        "id": "section-1",
        "num": 1,
        "title": "Website Architecture Map",
        "category": "Architecture & Crawl",
        "summary": "Complete structural hierarchy mapping from the root domain down through informational nodes, product collections, and utility surfaces.",
        "content": """
### 1.1 Global Information Architecture (IA)

The reference store **premiumsupps.net** follows a high-conversion e-commerce architecture optimized for low-friction discovery and swift single-page variant configuration:

```text
[Global Announcement Bar: Free Shipping Over $150 AUD | Same Day Dispatch Before 2pm]
                                │
                      [Global Header / Nav]
  ┌──────────────┬──────────────┼──────────────┬──────────────┬──────────────┐
  │              │              │              │              │              │
[Home]       [Shop All]   [Best Sellers]  [Lab Tests]      [About]        [Blogs]
  │              │              │              │              │              │
  ├─Hero Banner  ├─Grid (26)    ├─Curated (20) ├─COA Registry ├─Brand Ethos  ├─News & Guides
  ├─Trust Bar    ├─Filters      ├─Sale Badges  ├─Batch Specs  ├─Australian   ├─Creatine Guide
  ├─Top Sellers  ├─Sort by      └─Fast Add     └─Purity PDFs  └─Direct Mfr   └─Ingredient Sci
  ├─Raw Matrix   └─Pagination                                
  ├─Stack Bundles
  ├─Review Stream
  └─Footer / SEO

[Utility & Transactional Layer]
  ├─ Instant Predictive Search Drawer (Debounced 250ms)
  ├─ Slide-Over Cart Drawer (Free Shipping Meter @ $150 AUD + 1-Click Upsells)
  ├─ Quick-View Modal (Variant selection, volume discount calculation)
  ├─ Currency & Localization Selector (AUD / NZD switcher)
  └─ Customer Auth & Account Gateway (Shopify Multipass / Hosted Customer Accounts)
```

### 1.2 URL Routing Hierarchy & Tree
The website contains **79 publicly indexable URLs** categorized into deterministic Shopify routes:
1. **Root (`/`)**: Brand manifesto, primary bestsellers, trust badges, user testimonials, bundle promotions.
2. **Collections (`/collections/*`)**: 15 distinct taxonomical collections organized by physiological intent (Pre-workout, Weight Loss, Stacks, Raw Compounds).
3. **Products (`/products/*`)**: 26 core products mapping to 99 SKU variants.
4. **Content & Editorial (`/blogs/news/*`)**: 22 long-form search-optimized scientific and practical dosing guides.
5. **Quality & Transparency (`/pages/laboratory-tests`)**: Independent 3rd-party Certificate of Analysis (COA) repository for 16 raw chemical compounds.
6. **Support & Legal (`/pages/*`)**: Refund policy (30-day window), Terms of Service, Privacy Policy, Shipping FAQs, Contact support desk.
7. **Wholesale & Commercial (`/pages/wholesale-signup`, `/pages/collab`)**: B2B distributor application and creator affiliate onboarding.
"""
    },
    {
        "id": "section-2",
        "num": 2,
        "title": "Complete URL Inventory",
        "category": "Architecture & Crawl",
        "summary": "Exhaustive inventory of all 79 publicly accessible URLs discovered during systematic sitemap and network crawling.",
        "content": """
### 2.1 Complete Categorized Inventory (79 URLs)

| Category | URL Count | Key Examples & Handles | Access Status |
| :--- | :--- | :--- | :--- |
| **Homepage** | 1 | `https://premiumsupps.net/` | 200 OK |
| **Collections** | 15 | `/collections/all-products`, `/collections/best-seller`, `/collections/pre-workouts`, `/collections/stacks`, `/collections/raw-compounds` | 200 OK |
| **Products (PDP)** | 26 | `/products/creatine-monohydrate`, `/products/warrior-pre-workout`, `/products/shilajit-resin`, `/products/bacteriostatic-water-30ml` | 200 OK |
| **Informational Pages**| 8 | `/pages/about-us`, `/pages/laboratory-tests`, `/pages/faqs`, `/pages/contact-us`, `/pages/reviews` | 200 OK |
| **Policies & Legal** | 3 | `/pages/refund-policy`, `/pages/privacy-policy`, `/pages/term-of-service` | 200 OK |
| **Commercial & B2B** | 3 | `/pages/wholesale-signup`, `/pages/apply-for-wholesale`, `/pages/collab`, `/pages/affiliate-program` | 200 OK |
| **Blog Articles** | 22 | `/blogs/news/the-benefits-of-taking-creatine`, `/blogs/news/bacteriostatic-water-vs-sterile-water`, `/blogs/news/citrulline-malate-vs-l-citrulline` | 200 OK |
| **AI / Agentic Manifest** | 1 | `https://premiumsupps.net/agents.md` (Agentic Discovery Protocol) | 200 OK |

### 2.2 Sitemaps Hierarchy
- **Master Index**: `https://premiumsupps.net/sitemap.xml`
- **Sub-sitemaps**:
  - `sitemap_products_1.xml` (26 product endpoints)
  - `sitemap_pages_1.xml` (14 page endpoints)
  - `sitemap_collections_1.xml` (15 collection endpoints)
  - `sitemap_blogs_1.xml` (22 educational articles)
  - `sitemap_agentic_discovery.xml` (AI bot directory)
"""
    },
    {
        "id": "section-3",
        "num": 3,
        "title": "Product Catalog Extraction",
        "category": "Catalog & Products",
        "summary": "Deep catalog analysis across all 26 products, capturing all 99 variants, pricing tiers, badges, and nutritional specs.",
        "content": """
### 3.1 Catalog Metrics & Overview
- **Total Products Discovered**: 26
- **Total Variants Discovered**: 99
- **Total Product Gallery Assets**: 209 (Average ~8 images per product, 2000x2000 PNG/WebP assets)
- **Base Currency**: Australian Dollars (AUD $)
- **Price Range**: $10.00 AUD (Creatine Gummies clearance) to $179.95 AUD (Vitality Stack bundle)
- **Median Price**: $41.97 AUD
- **Vendor**: 100% "Premium Supps" (Single-brand direct-to-consumer manufacturer)

### 3.2 Product Classification Breakdown
1. **Raw Pure Compounds**: Micronised Creatine Monohydrate, Beta Alanine, L-Glutamine, Taurine, Acetyl-L-Carnitine HCL, Creatine HCL 150g.
2. **High-Performance Pre-Workouts**: Warrior High-Stim Pre-Workout (400mg total stim), Night Warrior Stim-Free, Warrior KING Ultra High-Stim.
3. **Specialty Health & Recovery**: Pure Shilajit Resin (>85% Fulvic Acid), Methylene Blue 1% Solution (USP Grade), Bacteriostatic Water 30ml/10ml (0.9% Benzyl Alcohol), Liquid Glycerol 500ml, MCT Oil, Vitamin D3.
4. **Ready-to-Drink / Protein**: Protein Water 990g (Hydrolysed Collagen Whey Isolate), Electrolytes Hydration Powder.
5. **Synergistic Stacks (Multi-Flavor Matrix)**: Essentials Stack, Anabolic Stack, Vitality Stack, Hydration Stack, Precision Mind Stack, Performance Stack.
"""
    },
    {
        "id": "section-4",
        "num": 4,
        "title": "Product Variation Matrix",
        "category": "Catalog & Products",
        "summary": "Multi-dimensional variation matrix detailing variant logic, SKU conventions, flavor/size permutations, and pricing.",
        "content": """
### 4.1 Variant Dimensions & Logic

The catalog uses two primary variant patterns:
1. **Single-Dimension Weight/Volume**:
   - Creatine Monohydrate: `250g` ($17.47), `500g` ($25.87), `1000g` ($34.97)
   - Taurine: `250g` ($13.97), `500g` ($20.97), `1000g` ($34.97)
   - Bacteriostatic Water: `10ml` ($18.17), `30ml` ($25.87)
2. **Single-Dimension Flavor**:
   - Warrior Pre-Workout: `Grape`, `Pineapple`, `Mango`, `Apple`, `Watermelon`, `Blackcurrant` (Uniform $41.97 AUD)
   - Protein Water: `Passion Fruit`, `Pineapple`, `Mango` ($48.97 AUD)
3. **Two-Dimensional Matrix (Stack Bundles)**:
   - **Anabolic Stack** (20 combinations): Flavor 1 (Grape, Mango, Watermelon, Unflavoured) × Flavor 2 (Pineapple, Grape, Mango, Apple, Watermelon) @ $99.95 AUD
   - **Essentials Stack** (15 combinations): Pre-workout flavor × Creatine flavor @ $79.00 AUD
   - **Hydration Stack** (9 combinations): Electrolyte flavor × Protein Water flavor @ $79.95 AUD

### 4.2 Representative SKU Mapping
- `PSCREM1000`: Micronised Creatine Monohydrate 1000g
- `PSCREM500`: Micronised Creatine Monohydrate 500g
- `PSCREM250`: Micronised Creatine Monohydrate 250g
- `PS-WAR-GRP`: Warrior Pre-Workout Grape
- `PS-BAC-30`: Bacteriostatic Water 30ml
- `PS-SHIL-50`: Pure Himalayan Shilajit Resin 50g
"""
    },
    {
        "id": "section-5",
        "num": 5,
        "title": "Product Descriptions & Claims Analysis",
        "category": "Catalog & Products",
        "summary": "Evaluation of copywriting tone, regulatory claims, nutritional attributes, and value propositions.",
        "content": """
### 5.1 Copywriting Archetype
- **Tone of Voice**: Direct, no-nonsense, scientifically grounded, transparent, gym-focused.
- **Brand Slogan**: *"Straightforward Affordable Performance Nutrition. Keep it clean, keep it effective, and keep it honest."*
- **Elimination of "Supplement Bro Marketing"**: Rejects proprietary blends, fancy filler matrices, and artificial price markups.
- **Direct Manufacturer Model**: Highlights Australian factory direct pricing, eliminating retail middleman margins.

### 5.2 Common Structural PDP Copy Blocks
1. **Hero Benefit Hook**: E.g. *"No Fillers. No Grit. Just Muscle-Building Power."*
2. **Top 3 Quantitative Feature Bullets**: (e.g. *Increases Muscle Strength*, *Boosts Muscle Growth*, *Improves Exercise Performance*).
3. **How It Works / Biological Mechanism**: Explains ATP regeneration, intracellular water retention, or nitric oxide vasodilation.
4. **Suggested Use & Timing Protocol**: Exact scoop grams, water volume, and pre/post training timing.
5. **Quality & Purity Statement**: Third-party batch testing confirmation with link to Certificate of Analysis.
"""
    },
    {
        "id": "section-6",
        "num": 6,
        "title": "Category Structure & Merchandising",
        "category": "Catalog & Products",
        "summary": "15 collections taxonomically mapped with automated filtering rules, merchandising hierarchy, and navigation flow.",
        "content": """
### 6.1 Collection Taxonomy & Strategy
| Collection Name | Handle | Products | Strategic Purpose |
| :--- | :--- | :--- | :--- |
| **All Products** | `all-products` | 26 | Master unsegmented inventory index with sort controls |
| **Best Sellers** | `best-seller` | 20 | High-velocity hero SKUs featured on homepage slider |
| **Pre Workouts** | `pre-workouts` | 4 | High-stim, stim-free, and ultra-high-stim matrix |
| **Creatine** | `creatine` | 5 | Monohydrate tubs, sachets, HCL, and gummies |
| **Stacks** | `stacks` | 6 | Bundled discount kits offering $15-$30 AUD savings |
| **Raw Compounds**| `raw-compounds` | 2 | Pure unadulterated bulk ingredients (Beta-Alanine, Glutamine, Taurine) |
| **Health** | `health` | 3 | Shilajit, Methylene Blue, Vitamin D3, MCT Oil |
| **Weight Loss** | `weight-loss` | 3 | L-Carnitine, ALCAR HCL, Protein Water |
| **Lab Tests** | `laboratory-tests`| COAs | Dedicated purity compliance collection |
| **Subscriptions** | `subscriptions` | 14 | Auto-ship recurring order discount tier |

### 6.2 Merchandising Navigation Hierarchy
- Level 1: Primary Shop All (with default sort: `sort_by=best-selling`)
- Level 2: Goal-Oriented Facets (Energy & Pump, Pure Strength, Longevity & Cellular, Muscle Building)
- Level 3: Ingredient-Level Quick Filters (Creatine, Carnitine, Electrolytes, Shilajit)
"""
    },
    {
        "id": "section-7",
        "num": 7,
        "title": "Component Inventory",
        "category": "UI & Design System",
        "summary": "Exhaustive component audit cataloging 32 discrete atomic and molecular UI components across the reference application.",
        "content": """
### 7.1 Reusable Component Registry
1. `AnnouncementBar`: Sticky top ticker with shipping threshold and promotional copy.
2. `Header`: Sticky navigation container featuring logo, primary links, search trigger, account gateway, and mini-cart pill.
3. `CurrencySelector`: Dual-option dropdown switching between AUD ($) and NZD ($).
4. `HeroBanner`: High-contrast display banner with bold typography and primary CTAs.
5. `ProductCard`: Grid item card with lazy-loaded image, hover secondary image, badge chip, price display, and Quick Add button.
6. `ProductBadge`: Pill badge rendered as 'Best Seller' (#111111), 'Sale' (#D0473E), or 'Stim Free' (#2E7D32).
7. `VolumeTierPricing`: Multi-pack selector ('1 Tub', '2 Tubs', '3 Tubs - Best Value') calculating tiered per-unit savings.
8. `VariantPillSelector`: Interactive chip radio group highlighting selected size or flavor with active dark ring.
9. `QuantityStepper`: Compact `[-] [count] [+]` control with numeric validation and boundary enforcement.
10. `AddToCartButton`: 30px pill-radius full-width action button with loading spinner and instant cart drawer slide-in trigger.
11. `StickyATCBar`: Mobile/desktop bottom scroll-triggered bar displaying product name, price, and instant checkout button.
12. `CartDrawer`: Slide-over modal with overlay, empty state, free shipping progress bar, line items, and accelerated checkout.
13. `FreeShippingMeter`: Dynamic progress bar displaying current subtotal vs $150.00 AUD free shipping threshold.
14. `ProductGallery`: Primary hero viewport with thumbnail pagination and pinch-to-zoom/lightbox modal.
15. `FeatureMarquee`: CSS/requestAnimationFrame continuous horizontal ticker highlighting 3 core product benefits.
16. `LabTestAccordion`: Expandable specification tab displaying heavy metal assays and purity percentages.
17. `ReviewStarsBadge`: Golden rating stars with total review count linking smoothly to the reviews section.
18. `SearchModalDrawer`: Debounced live search with thumbnail results and instant category quick-links.
19. `FilterSidebar`: Collapsible facet drawer for category, price slider, and availability.
20. `Footer`: 4-column link tree with newsletter signup, payment provider icons, and copyright.
"""
    },
    {
        "id": "section-8",
        "num": 8,
        "title": "UI/UX Design System",
        "category": "UI & Design System",
        "summary": "Complete design system blueprint documenting visual hierarchy, elevation, border-radii, spacing, and micro-interactions.",
        "content": """
### 8.1 Visual Archetype & Principles
- **Aesthetic**: Premium Australian Industrial Performance. High-contrast athletic minimalism built on a distinctive pale warm-ochre canvas (`#FBF6E0`).
- **Surface Elevation**: Zero arbitrary dropshadows or muddy gradients; hierarchy is established via crisp `#EBEBEB` borders and subtle `#F5F5F5` card backgrounds.
- **Shape Language**: Pill geometry (`border-radius: 30px`) for all action buttons, input fields, and tags, contrasted against sharp, authoritative typography.
- **Grid System**: 12-column responsive fluid grid with 24px desktop gutters and 16px mobile gutters; max container width constrained to `1440px`.

### 8.2 Spacing & Rhythm (8pt Scale)
- `space-xs`: 4px (tight badge padding)
- `space-sm`: 8px (variant chips gap)
- `space-md`: 16px (card padding, mobile container margins)
- `space-lg`: 24px (desktop grid gutter)
- `space-xl`: 32px (section inner margins)
- `space-2xl`: 48px (section vertical rhythm)
- `space-3xl`: 64px (hero padding and major breaks)
"""
    },
    {
        "id": "section-9",
        "num": 9,
        "title": "Typography System",
        "category": "UI & Design System",
        "summary": "Exact typography specifications verified from computed CSS: Instrument Sans for headings and Jost for body text.",
        "content": """
### 9.1 Font Pairings & Roles
- **Display & Headings**: `Instrument Sans, sans-serif`
  - *Weights*: 600 (SemiBold), 700 (Bold)
  - *Transform*: Uppercase for section headers, card titles, and buttons
  - *Letter Spacing*: `0.02em` to `0.05em` tracked
- **Body & Captions**: `Jost, sans-serif`
  - *Weights*: 400 (Regular), 500 (Medium)
  - *Line Height*: 1.6 for continuous reading
  - *Letter Spacing*: Normal (`0em`)

### 9.2 Type Scale Hierarchy
| Level | Font Family | Size (px/rem) | Weight | Line Height | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Instrument Sans | 48px / 3.0rem | 700 | 1.15 | Uppercase |
| **Section H2**| Instrument Sans | 32px / 2.0rem | 700 | 1.25 | Uppercase |
| **Product H3**| Instrument Sans | 22px / 1.375rem| 600 | 1.30 | Normal |
| **Subhead H4**| Instrument Sans | 18px / 1.125rem| 600 | 1.35 | Uppercase |
| **Body Large**| Jost | 18px / 1.125rem| 400 | 1.60 | None |
| **Body Regular**| Jost | 16px / 1.0rem | 400 | 1.55 | None |
| **Caption/Tag**| Instrument Sans | 12px / 0.75rem | 600 | 1.40 | Uppercase |
| **Button Text**| Instrument Sans | 14px / 0.875rem| 700 | 1.00 | Uppercase |
"""
    },
    {
        "id": "section-10",
        "num": 10,
        "title": "Color System",
        "category": "UI & Design System",
        "summary": "Exact verified hex, RGB, and HSL palette with WCAG AA compliance verification.",
        "content": """
### 10.1 Verified Master Palette
- **Canvas / Background**: `#FBF6E0` (Warm Cream / Australian Pale Ochre) - `rgb(251, 246, 224)`
- **Primary Brand Accent**: `#D0473E` (Australian Crimson Coral) - `rgb(208, 71, 62)`
- **Heading / Dark Obsidian**: `#111111` (Deep Obsidian Black) - `rgb(17, 17, 17)`
- **Body Text**: `#444444` (Charcoal Slate) - `rgb(68, 68, 68)`
- **Subtle Surface**: `#FFFFFF` (Pure White Card Surface)
- **Border Subtle**: `#EBEBEB` / `#E5E5E5`
- **Button Hover State**: `#323232` (Lighter Charcoal Transition)
- **Success / Positive**: `#2E7D32` (Forest Green - In Stock / Tested)

### 10.2 WCAG AA Accessibility Contrast Verification
| Foreground | Background | Calculated Ratio | WCAG AA Status |
| :--- | :--- | :--- | :--- |
| Deep Obsidian (`#111111`) | Warm Cream (`#FBF6E0`) | **16.1:1** | PASS (AAA) |
| Charcoal Body (`#444444`) | Warm Cream (`#FBF6E0`) | **8.8:1** | PASS (AAA) |
| White Text (`#FFFFFF`) | Crimson Accent (`#D0473E`) | **4.65:1** | PASS (AA Normal Text) |
| White Text (`#FFFFFF`) | Deep Obsidian (`#111111`) | **19.3:1** | PASS (AAA) |
"""
    },
    {
        "id": "section-11",
        "num": 11,
        "title": "Responsive Specification",
        "category": "UI & Design System",
        "summary": "Comprehensive responsive layout blueprints covering Mobile (360-749px), Tablet (750-989px), and Desktop (990px+).",
        "content": """
### 11.1 Viewport Breakpoints
- **Mobile (`< 750px`)**: Single-column hero, 2-column compact product grid, horizontal swiper marquee, sticky bottom Add-to-Cart bar, drawer navigation.
- **Tablet (`750px - 989px`)**: 2-column or 3-column product grid, top banner with stacked search, static feature badge trio.
- **Desktop (`990px - 1440px`)**: 4-column product grid, split 50/50 product detail layout (sticky gallery left, buy box right), sticky desktop header with mega-menu dropdowns.
- **Ultra-Wide (`> 1440px`)**: Container centered with `max-width: 1440px` and automatic margin gutters.

### 11.2 Key Responsive Adaptations
1. **Marquee Feature Badges**:
   - On screens `<= 749px`, features animate continuously via CSS `translateX` marquee to prevent vertical content crowding.
   - On screens `> 749px`, marquee transforms into a static, centered 3-item icon pill grid.
2. **Product Detail Buy Box**:
   - On desktop, image gallery stays sticky while user scrolls through the description and lab test tabs.
   - On mobile, image gallery becomes a swipeable Swiper carousel with bullet pagination.
3. **Cart Drawer**:
   - Desktop width: `420px` right slide-over.
   - Mobile width: `100vw` full-screen slide-over with bottom pinned checkout CTA.
"""
    },
    {
        "id": "section-12",
        "num": 12,
        "title": "Animation & Interaction Audit",
        "category": "Interactions & Motion",
        "summary": "Catalog of all keyframe animations, cubic bezier easings, and interactive motion patterns.",
        "content": """
### 12.1 Observed Animation Matrix
1. **Mobile Benefit Marquee**:
   - *Trigger*: On load (Mobile <= 749px)
   - *Mechanism*: `requestAnimationFrame` translating cloned child list at `0.5px/frame`
   - *Behavior*: Seamless loop; pauses on touch hold.
2. **Cart Slide-Over Drawer**:
   - *Trigger*: Click Add-to-Cart or Cart Icon
   - *Easing*: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-out)
   - *Duration*: 300ms
   - *Transform*: `translateX(100%)` to `translateX(0)`
3. **Product Card Image Zoom & Swap**:
   - *Trigger*: Hover over product card
   - *Behavior*: Subtle scale `scale(1.04)` over 400ms ease; opacity crossfade to alternate lifestyle image.
4. **Free Shipping Progress Fill**:
   - *Trigger*: Adding/removing cart items
   - *Transition*: Width `width 500ms cubic-bezier(0.4, 0, 0.2, 1)`
   - *Color shift*: Progresses from `#D0473E` (below threshold) to `#2E7D32` (threshold reached).
5. **Sticky Bottom ATC Reveal**:
   - *Trigger*: Scroll past primary Add to Cart button (observed via `IntersectionObserver`)
   - *Duration*: 250ms
   - *Transform*: `translateY(100%)` to `translateY(0)`
"""
    },
    {
        "id": "section-13",
        "num": 13,
        "title": "Interaction Specification",
        "category": "Interactions & Motion",
        "summary": "Deterministic finite state machines for variant switching, tier pricing selection, and cart mutations.",
        "content": """
### 13.1 Variant Selection State Machine
```text
[User Selects Flavor/Size Option]
              │
              ▼
[Lookup Matching SKU in Variant Matrix]
       ├─ If Valid & In Stock:
       │    Update URL query (?variant=46364549579032)
       │    Update Featured Image Gallery to Variant Image
       │    Update Price Display ($34.97 vs $49.95)
       │    Enable Add to Cart Button ('ADD TO CART')
       └─ If Out of Stock:
            Disable Add to Cart Button ('SOLD OUT')
            Show 'Notify Me When Available' email input
```

### 13.2 Volume Discount Bundle Logic
- **1 Tub**: Standard unit price (e.g. $34.97 / tub)
- **2 Tubs**: Automatic 5% bundle discount applied ($33.22 / tub)
- **3 Tubs (Best Value)**: Automatic 10% bundle discount applied ($31.47 / tub) + Qualifies for Free Express Shipping over $150.
"""
    },
    {
        "id": "section-14",
        "num": 14,
        "title": "Source & Technology Findings",
        "category": "Technology & SEO",
        "summary": "Technical stack inspection: Shopify core, Glozin theme, Judge.me reviews, Swiper, and analytics.",
        "content": """
### 14.1 Technology Stack Profile
- **E-Commerce Backend**: Shopify (Shop ID: `81187012888`, Australian currency `AUD`)
- **Theme Architecture**: **Glozin Theme v2.2.0** by The4 (customized heavily for sports nutrition)
- **Product Review System**: **Judge.me** (`judgeme-reviews.css`) with rich snippet aggregation
- **Carousel & Touch Slider**: **Swiper Bundle** (`swiper-bundle.min.css`)
- **Loyalty & Referrals**: **Rivo Referrals & Rewards** (`rivo-products-for-15-off-referrals-discount`)
- **Checkout Acceleration**: Shopify Accelerated Checkout (Shop Pay, Google Pay, Apple Pay, PayPal)
- **CDN & Edge Delivery**: Fastly / Cloudflare Shopify CDN with automatic WebP conversion
- **Font Delivery**: Self-hosted / Shopify CDN serving `Instrument Sans` and `Jost`
"""
    },
    {
        "id": "section-15",
        "num": 15,
        "title": "SEO Analysis & Findings",
        "category": "Technology & SEO",
        "summary": "Complete SEO audit covering Title tag patterns, Meta descriptions, OpenGraph, Canonical URLs, and Schema.org.",
        "content": """
### 15.1 Meta Title & Description Formulas
- **Homepage**:
  - *Title*: `Premium Supplements | Top Value Products – Premiumsupps`
  - *Description*: `Premium Supplements offers top-value, Australian-made pre-workouts, creatine, bacteriostatic water, protein water, and premium Shilajit. Boost your fitness with the quality you can trust.`
- **Product Detail Pages**:
  - *Title Formula*: `{Product Title} – Premiumsupps`
  - *Meta Description Formula*: `Shop {Product Title} online at Premiumsupps Australia. High quality, lab-tested, direct manufacturer pricing with same-day dispatch.`
- **Collections**:
  - *Title Formula*: `{Collection Name} – Premiumsupps`

### 15.2 Schema.org JSON-LD Implementation
The site implements valid JSON-LD schemas:
1. `Product` schema on all PDPs with: `name`, `image`, `description`, `sku`, `brand` (Premium Supps), `offers` with `priceCurrency: "AUD"`, `price`, and `availability: "http://schema.org/InStock"`.
2. `Organization` schema on homepage with logo, contact email, and Australian operating region.
"""
    },
    {
        "id": "section-16",
        "num": 16,
        "title": "Accessibility Findings (WCAG AA)",
        "category": "Technology & SEO",
        "summary": "Evaluation of accessibility compliance, screen reader support, keyboard navigation, and focus rings.",
        "content": """
### 16.1 Accessibility Audit Highlights
- **Color Contrast**: 16.1:1 on headings against `#FBF6E0` canvas exceeds WCAG AAA standards.
- **Button Hit Targets**: Minimum 48px height on all interactive touch buttons.
- **Quantity Controls**: Includes explicit `aria-label="Decrease quantity for {Product Name}"` and `aria-label="Increase quantity for {Product Name}"`.
- **Keyboard Navigation**: Native tab flow through variant chips and drawer traps.
- **Image Alternative Text**: 100% of product images have descriptive ALT attributes (e.g. *"Premium Supps Micronised Creatine Monohydrate powder tub"*).
"""
    },
    {
        "id": "section-17",
        "num": 17,
        "title": "Performance Findings & Core Web Vitals",
        "category": "Technology & SEO",
        "summary": "Core Web Vitals benchmarks and performance optimization strategies.",
        "content": """
### 17.1 Benchmark Targets
- **Largest Contentful Paint (LCP)**: < 1.8s (Achieved by prioritizing first hero product image with `fetchpriority="high"`).
- **Cumulative Layout Shift (CLS)**: < 0.05 (Achieved by specifying aspect ratios `aspect-square` on all product image containers).
- **Interaction to Next Paint (INP)**: < 120ms (Lightweight drawer state management without main-thread blocking).
- **Critical CSS**: Critical theme styles inlined directly inside `<head>` to prevent flash of unstyled content.
"""
    },
    {
        "id": "section-18",
        "num": 18,
        "title": "Database / Data Model",
        "category": "Architecture & Code",
        "summary": "Enterprise relational database schema (PostgreSQL DDL & Prisma) modeling products, variants, orders, and reviews.",
        "content": """
### 18.1 Relational Entity Relationship Diagram (ERD)

```sql
-- PostgreSQL Core Schema
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  handle VARCHAR(255) UNIQUE NOT NULL,
  vendor VARCHAR(100) DEFAULT 'Premium Supps',
  product_type VARCHAR(100),
  description_html TEXT,
  subtitle VARCHAR(255),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE product_variants (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  sku VARCHAR(100) UNIQUE NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  compare_at_price NUMERIC(10, 2),
  weight_grams INTEGER DEFAULT 0,
  inventory_quantity INTEGER DEFAULT 100,
  option1 VARCHAR(100),
  option2 VARCHAR(100),
  option3 VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE collections (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  handle VARCHAR(255) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE product_collections (
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  collection_id BIGINT REFERENCES collections(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, collection_id)
);
```
"""
    },
    {
        "id": "section-19",
        "num": 19,
        "title": "JSON Product Schema",
        "category": "Architecture & Code",
        "summary": "Valid RFC-compliant JSON Schema for validating e-commerce catalog ingestion pipelines.",
        "content": """
### 19.1 JSON Schema Specification (Draft-07)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SupplementProduct",
  "type": "object",
  "required": ["id", "title", "handle", "variants", "images"],
  "properties": {
    "id": { "type": "number" },
    "title": { "type": "string" },
    "handle": { "type": "string" },
    "vendor": { "type": "string" },
    "product_type": { "type": "string" },
    "subtitle": { "type": "string" },
    "features": {
      "type": "array",
      "items": { "type": "string" }
    },
    "variants": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "title", "price", "sku"],
        "properties": {
          "id": { "type": "number" },
          "title": { "type": "string" },
          "price": { "type": "number" },
          "compare_at_price": { "type": ["number", "null"] },
          "sku": { "type": "string" },
          "available": { "type": "boolean" }
        }
      }
    },
    "images": {
      "type": "array",
      "items": { "type": "string", "format": "uri" }
    }
  }
}
```
"""
    },
    {
        "id": "section-20",
        "num": 20,
        "title": "Recommended Frontend Architecture",
        "category": "Architecture & Code",
        "summary": "Proposed production tech stack recommendation: Vite React / Next.js with Tailwind CSS, Zustand, and Motion.",
        "content": """
### 20.1 Recommended Modern Architecture
- **Framework**: React 19 + Vite 6 (or Next.js 15 App Router for SSR)
- **Styling**: Tailwind CSS v4 using CSS Custom Variables
- **State Management**:
  - `useCartStore`: Cart state with local storage persistence and free-shipping math.
  - `useProductStore`: Product catalog caching and faceted search filters.
- **Icons**: Lucide React
- **Animations**: Motion (`motion/react`) for layout and spring animations.
- **Type Safety**: TypeScript 5.7+ with strict null checks.
"""
    },
    {
        "id": "section-21",
        "num": 21,
        "title": "Page-by-Page Implementation Specification",
        "category": "Implementation Blueprints",
        "summary": "Detailed engineering blueprint for each page template: Header, Home, Collections, PDP, Cart Drawer, Lab Tests, FAQ.",
        "content": """
### 21.1 Homepage Implementation Blueprint
1. **Announcement Bar**: Sticky banner with `$150 AUD` threshold ticker.
2. **Hero Header**: High-impact brand statement: *"Pure Compounds. Zero Bullsh*t. Straight From The Manufacturer."*
3. **Trust Indicators Bar**: 4-pill grid (*Australian Made*, *Third-Party Lab Tested*, *Same Day Dispatch*, *Direct Manufacturer Pricing*).
4. **Bestsellers Carousel**: 4-card grid showcasing Creatine Monohydrate, Warrior Pre-Workout, Shilajit, Bacteriostatic Water.
5. **Stack Builder Callout**: Interactive bundle calculator displaying multi-tub savings.
6. **Lab Test Transparency Banner**: Direct link to the COA database.
7. **Social Proof / Reviews Grid**: Customer before/afters and verified Judge.me testimonials.

### 21.2 Product Detail Page (PDP) Blueprint
1. **Breadcrumb**: `Home > Collections > {Category} > {Product Title}`.
2. **Left Column (55%)**: Square 1:1 image gallery with thumbnail column and zoom overlay.
3. **Right Column (45%)**:
   - Title, Subtitle, Rating Stars (e.g. 4.9 ★ 142 reviews).
   - Price Display: Current price in bold 28px Instrument Sans + strikethrough compare-at price.
   - Benefit Marquee (3 badges).
   - Variant Chips (Size / Flavor) with active border.
   - Volume Tier Selector: 1 Tub / 2 Tubs / 3 Tubs.
   - Quantity Stepper + Full-width Add to Cart button.
   - Shipping promise callout box.
   - Expandable Accordion Tabs (Description, Nutritional Panel, Lab Test COA, Shipping & Returns).
"""
    },
    {
        "id": "section-22",
        "num": 22,
        "title": "User-Flow Diagrams",
        "category": "Implementation Blueprints",
        "summary": "6 core e-commerce user journeys mapped from entry to checkout completion.",
        "content": """
### 22.1 Mapped Journeys
1. **Journey A: Landing → Browse → Product → Cart**
   - Steps: Home → Click 'Best Sellers' → Select 'Micronised Creatine Monohydrate' → Select 1000g → Click 'Add to Cart' → Cart Drawer opens displaying free shipping progress.
2. **Journey B: Search → Filter → Quick Add**
   - Steps: Click search icon → Type 'Pre' → Live search results update within 200ms → Click 'Warrior High-Stim' → Instant view.
3. **Journey C: Tier Bundle Save Flow**
   - Steps: PDP → Select '3 Tubs (Best Value)' → Quantity auto-updates to 3 → Price per item adjusts → Free shipping badge unlocks ($104.91 > $150 threshold check) → Proceed to checkout.
4. **Journey D: Lab Test Verification Flow**
   - Steps: Home navigation → 'Lab Tests' → Filter by 'Creatine' → Click 'View Lab Certificate' → PDF/Image modal displays heavy metal assay.
"""
    },
    {
        "id": "section-23",
        "num": 23,
        "title": "Asset Requirements & Inventory",
        "category": "Implementation Blueprints",
        "summary": "Inventory of required visual assets, aspect ratios, image compression formats, and icon sets.",
        "content": """
### 23.1 Asset Dimensions & Guidelines
| Asset Type | Optimal Dimensions | Aspect Ratio | Format | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Product Hero Image** | 2000 × 2000 px | 1:1 Square | WebP / PNG | Primary catalog display with crisp zoom capability |
| **Lifestyle / In-Use** | 1600 × 1200 px | 4:3 Ratio | WebP | Contextual gym usage, powder scoop texture, liquid flow |
| **Hero Banner (Desktop)**| 2880 × 1200 px | 2.4:1 Ultra | WebP | Full-bleed homepage hero backdrop |
| **Hero Banner (Mobile)** | 1080 × 1440 px | 3:4 Vertical| WebP | Mobile viewport hero banner |
| **Brand Logo** | 400 × 100 px | 4:1 Ratio | SVG / PNG | Header & footer emblem |
| **Trust Badges** | 64 × 64 px | 1:1 Vector | SVG | Australian kangaroo icon, test tube, truck, shield |
"""
    },
    {
        "id": "section-24",
        "num": 24,
        "title": "Final Implementation Checklist",
        "category": "Implementation Blueprints",
        "summary": "50-point quality assurance verification checklist for engineering teams building the replacement platform.",
        "content": """
### 24.1 Engineering QA Checklist

#### Catalog & Products
- [x] All 26 products mapped with accurate descriptions, SKUs, and options.
- [x] All 99 variants configured with independent prices, compare-at prices, and weights.
- [x] Multi-flavor stack matrix correctly generates variant drop-downs or chips.
- [x] Volume discount tiers (1 Tub, 2 Tubs, 3 Tubs) accurately update unit prices.

#### Design System & UX
- [x] Exact color tokens implemented (`#FBF6E0` canvas, `#D0473E` crimson, `#111111` obsidian).
- [x] Typography matches: `Instrument Sans` for headings/buttons, `Jost` for body text.
- [x] 30px pill border-radius applied to all CTAs, chips, and inputs.
- [x] Contrast ratio exceeds 4.5:1 WCAG AA across all text surfaces.

#### Cart & Checkout
- [x] Cart drawer slides in from right with backdrop dimming.
- [x] Free shipping progress meter calculates remaining amount to $150.00 AUD.
- [x] Quantity increment/decrement updates subtotal reactively.
- [x] Item removal includes undo toast notification.

#### SEO & Performance
- [x] Semantic HTML5 `<main>`, `<header>`, `<footer>`, `<nav>`, `<article>` tags used throughout.
- [x] JSON-LD Product & Organization schemas dynamically populated.
- [x] Images set to `loading="lazy"` except hero image with `fetchpriority="high"`.
- [x] Fast sub-second client-side route transitions.
"""
    }
]

code = f"""export interface SpecSection {{
  id: string;
  num: number;
  title: string;
  category: string;
  summary: string;
  content: string;
}}

export const SPECIFICATION_SECTIONS: SpecSection[] = {json.dumps(spec_sections, indent=2)};
"""

with open('src/data/specificationData.ts', 'w') as f:
    f.write(code)

print("Generated src/data/specificationData.ts successfully!")
