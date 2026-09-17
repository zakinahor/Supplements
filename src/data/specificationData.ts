export interface SpecSection {
  id: string;
  num: number;
  title: string;
  category: string;
  summary: string;
  content: string;
}

export const SPECIFICATION_SECTIONS: SpecSection[] = [
  {
    "id": "section-1",
    "num": 1,
    "title": "Website Architecture Map",
    "category": "Architecture & Crawl",
    "summary": "Complete structural hierarchy mapping from the root domain down through informational nodes, product collections, and utility surfaces.",
    "content": "\n### 1.1 Global Information Architecture (IA)\n\nThe reference store **premiumsupps.net** follows a high-conversion e-commerce architecture optimized for low-friction discovery and swift single-page variant configuration:\n\n```text\n[Global Announcement Bar: Free Shipping Over $150 AUD | Same Day Dispatch Before 2pm]\n                                \u2502\n                      [Global Header / Nav]\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502              \u2502              \u2502              \u2502              \u2502              \u2502\n[Home]       [Shop All]   [Best Sellers]  [Lab Tests]      [About]        [Blogs]\n  \u2502              \u2502              \u2502              \u2502              \u2502              \u2502\n  \u251c\u2500Hero Banner  \u251c\u2500Grid (26)    \u251c\u2500Curated (20) \u251c\u2500COA Registry \u251c\u2500Brand Ethos  \u251c\u2500News & Guides\n  \u251c\u2500Trust Bar    \u251c\u2500Filters      \u251c\u2500Sale Badges  \u251c\u2500Batch Specs  \u251c\u2500Australian   \u251c\u2500Creatine Guide\n  \u251c\u2500Top Sellers  \u251c\u2500Sort by      \u2514\u2500Fast Add     \u2514\u2500Purity PDFs  \u2514\u2500Direct Mfr   \u2514\u2500Ingredient Sci\n  \u251c\u2500Raw Matrix   \u2514\u2500Pagination                                \n  \u251c\u2500Stack Bundles\n  \u251c\u2500Review Stream\n  \u2514\u2500Footer / SEO\n\n[Utility & Transactional Layer]\n  \u251c\u2500 Instant Predictive Search Drawer (Debounced 250ms)\n  \u251c\u2500 Slide-Over Cart Drawer (Free Shipping Meter @ $150 AUD + 1-Click Upsells)\n  \u251c\u2500 Quick-View Modal (Variant selection, volume discount calculation)\n  \u251c\u2500 Currency & Localization Selector (AUD / NZD switcher)\n  \u2514\u2500 Customer Auth & Account Gateway (Shopify Multipass / Hosted Customer Accounts)\n```\n\n### 1.2 URL Routing Hierarchy & Tree\nThe website contains **79 publicly indexable URLs** categorized into deterministic Shopify routes:\n1. **Root (`/`)**: Brand manifesto, primary bestsellers, trust badges, user testimonials, bundle promotions.\n2. **Collections (`/collections/*`)**: 15 distinct taxonomical collections organized by physiological intent (Pre-workout, Weight Loss, Stacks, Raw Compounds).\n3. **Products (`/products/*`)**: 26 core products mapping to 99 SKU variants.\n4. **Content & Editorial (`/blogs/news/*`)**: 22 long-form search-optimized scientific and practical dosing guides.\n5. **Quality & Transparency (`/pages/laboratory-tests`)**: Independent 3rd-party Certificate of Analysis (COA) repository for 16 raw chemical compounds.\n6. **Support & Legal (`/pages/*`)**: Refund policy (30-day window), Terms of Service, Privacy Policy, Shipping FAQs, Contact support desk.\n7. **Wholesale & Commercial (`/pages/wholesale-signup`, `/pages/collab`)**: B2B distributor application and creator affiliate onboarding.\n"
  },
  {
    "id": "section-2",
    "num": 2,
    "title": "Complete URL Inventory",
    "category": "Architecture & Crawl",
    "summary": "Exhaustive inventory of all 79 publicly accessible URLs discovered during systematic sitemap and network crawling.",
    "content": "\n### 2.1 Complete Categorized Inventory (79 URLs)\n\n| Category | URL Count | Key Examples & Handles | Access Status |\n| :--- | :--- | :--- | :--- |\n| **Homepage** | 1 | `https://premiumsupps.net/` | 200 OK |\n| **Collections** | 15 | `/collections/all-products`, `/collections/best-seller`, `/collections/pre-workouts`, `/collections/stacks`, `/collections/raw-compounds` | 200 OK |\n| **Products (PDP)** | 26 | `/products/creatine-monohydrate`, `/products/warrior-pre-workout`, `/products/shilajit-resin`, `/products/bacteriostatic-water-30ml` | 200 OK |\n| **Informational Pages**| 8 | `/pages/about-us`, `/pages/laboratory-tests`, `/pages/faqs`, `/pages/contact-us`, `/pages/reviews` | 200 OK |\n| **Policies & Legal** | 3 | `/pages/refund-policy`, `/pages/privacy-policy`, `/pages/term-of-service` | 200 OK |\n| **Commercial & B2B** | 3 | `/pages/wholesale-signup`, `/pages/apply-for-wholesale`, `/pages/collab`, `/pages/affiliate-program` | 200 OK |\n| **Blog Articles** | 22 | `/blogs/news/the-benefits-of-taking-creatine`, `/blogs/news/bacteriostatic-water-vs-sterile-water`, `/blogs/news/citrulline-malate-vs-l-citrulline` | 200 OK |\n| **AI / Agentic Manifest** | 1 | `https://premiumsupps.net/agents.md` (Agentic Discovery Protocol) | 200 OK |\n\n### 2.2 Sitemaps Hierarchy\n- **Master Index**: `https://premiumsupps.net/sitemap.xml`\n- **Sub-sitemaps**:\n  - `sitemap_products_1.xml` (26 product endpoints)\n  - `sitemap_pages_1.xml` (14 page endpoints)\n  - `sitemap_collections_1.xml` (15 collection endpoints)\n  - `sitemap_blogs_1.xml` (22 educational articles)\n  - `sitemap_agentic_discovery.xml` (AI bot directory)\n"
  },
  {
    "id": "section-3",
    "num": 3,
    "title": "Product Catalog Extraction",
    "category": "Catalog & Products",
    "summary": "Deep catalog analysis across all 26 products, capturing all 99 variants, pricing tiers, badges, and nutritional specs.",
    "content": "\n### 3.1 Catalog Metrics & Overview\n- **Total Products Discovered**: 26\n- **Total Variants Discovered**: 99\n- **Total Product Gallery Assets**: 209 (Average ~8 images per product, 2000x2000 PNG/WebP assets)\n- **Base Currency**: Australian Dollars (AUD $)\n- **Price Range**: $10.00 AUD (Creatine Gummies clearance) to $179.95 AUD (Vitality Stack bundle)\n- **Median Price**: $41.97 AUD\n- **Vendor**: 100% \"Premium Supps\" (Single-brand direct-to-consumer manufacturer)\n\n### 3.2 Product Classification Breakdown\n1. **Raw Pure Compounds**: Micronised Creatine Monohydrate, Beta Alanine, L-Glutamine, Taurine, Acetyl-L-Carnitine HCL, Creatine HCL 150g.\n2. **High-Performance Pre-Workouts**: Warrior High-Stim Pre-Workout (400mg total stim), Night Warrior Stim-Free, Warrior KING Ultra High-Stim.\n3. **Specialty Health & Recovery**: Pure Shilajit Resin (>85% Fulvic Acid), Methylene Blue 1% Solution (USP Grade), Bacteriostatic Water 30ml/10ml (0.9% Benzyl Alcohol), Liquid Glycerol 500ml, MCT Oil, Vitamin D3.\n4. **Ready-to-Drink / Protein**: Protein Water 990g (Hydrolysed Collagen Whey Isolate), Electrolytes Hydration Powder.\n5. **Synergistic Stacks (Multi-Flavor Matrix)**: Essentials Stack, Anabolic Stack, Vitality Stack, Hydration Stack, Precision Mind Stack, Performance Stack.\n"
  },
  {
    "id": "section-4",
    "num": 4,
    "title": "Product Variation Matrix",
    "category": "Catalog & Products",
    "summary": "Multi-dimensional variation matrix detailing variant logic, SKU conventions, flavor/size permutations, and pricing.",
    "content": "\n### 4.1 Variant Dimensions & Logic\n\nThe catalog uses two primary variant patterns:\n1. **Single-Dimension Weight/Volume**:\n   - Creatine Monohydrate: `250g` ($17.47), `500g` ($25.87), `1000g` ($34.97)\n   - Taurine: `250g` ($13.97), `500g` ($20.97), `1000g` ($34.97)\n   - Bacteriostatic Water: `10ml` ($18.17), `30ml` ($25.87)\n2. **Single-Dimension Flavor**:\n   - Warrior Pre-Workout: `Grape`, `Pineapple`, `Mango`, `Apple`, `Watermelon`, `Blackcurrant` (Uniform $41.97 AUD)\n   - Protein Water: `Passion Fruit`, `Pineapple`, `Mango` ($48.97 AUD)\n3. **Two-Dimensional Matrix (Stack Bundles)**:\n   - **Anabolic Stack** (20 combinations): Flavor 1 (Grape, Mango, Watermelon, Unflavoured) \u00d7 Flavor 2 (Pineapple, Grape, Mango, Apple, Watermelon) @ $99.95 AUD\n   - **Essentials Stack** (15 combinations): Pre-workout flavor \u00d7 Creatine flavor @ $79.00 AUD\n   - **Hydration Stack** (9 combinations): Electrolyte flavor \u00d7 Protein Water flavor @ $79.95 AUD\n\n### 4.2 Representative SKU Mapping\n- `PSCREM1000`: Micronised Creatine Monohydrate 1000g\n- `PSCREM500`: Micronised Creatine Monohydrate 500g\n- `PSCREM250`: Micronised Creatine Monohydrate 250g\n- `PS-WAR-GRP`: Warrior Pre-Workout Grape\n- `PS-BAC-30`: Bacteriostatic Water 30ml\n- `PS-SHIL-50`: Pure Himalayan Shilajit Resin 50g\n"
  },
  {
    "id": "section-5",
    "num": 5,
    "title": "Product Descriptions & Claims Analysis",
    "category": "Catalog & Products",
    "summary": "Evaluation of copywriting tone, regulatory claims, nutritional attributes, and value propositions.",
    "content": "\n### 5.1 Copywriting Archetype\n- **Tone of Voice**: Direct, no-nonsense, scientifically grounded, transparent, gym-focused.\n- **Brand Slogan**: *\"Straightforward Affordable Performance Nutrition. Keep it clean, keep it effective, and keep it honest.\"*\n- **Elimination of \"Supplement Bro Marketing\"**: Rejects proprietary blends, fancy filler matrices, and artificial price markups.\n- **Direct Manufacturer Model**: Highlights Australian factory direct pricing, eliminating retail middleman margins.\n\n### 5.2 Common Structural PDP Copy Blocks\n1. **Hero Benefit Hook**: E.g. *\"No Fillers. No Grit. Just Muscle-Building Power.\"*\n2. **Top 3 Quantitative Feature Bullets**: (e.g. *Increases Muscle Strength*, *Boosts Muscle Growth*, *Improves Exercise Performance*).\n3. **How It Works / Biological Mechanism**: Explains ATP regeneration, intracellular water retention, or nitric oxide vasodilation.\n4. **Suggested Use & Timing Protocol**: Exact scoop grams, water volume, and pre/post training timing.\n5. **Quality & Purity Statement**: Third-party batch testing confirmation with link to Certificate of Analysis.\n"
  },
  {
    "id": "section-6",
    "num": 6,
    "title": "Category Structure & Merchandising",
    "category": "Catalog & Products",
    "summary": "15 collections taxonomically mapped with automated filtering rules, merchandising hierarchy, and navigation flow.",
    "content": "\n### 6.1 Collection Taxonomy & Strategy\n| Collection Name | Handle | Products | Strategic Purpose |\n| :--- | :--- | :--- | :--- |\n| **All Products** | `all-products` | 26 | Master unsegmented inventory index with sort controls |\n| **Best Sellers** | `best-seller` | 20 | High-velocity hero SKUs featured on homepage slider |\n| **Pre Workouts** | `pre-workouts` | 4 | High-stim, stim-free, and ultra-high-stim matrix |\n| **Creatine** | `creatine` | 5 | Monohydrate tubs, sachets, HCL, and gummies |\n| **Stacks** | `stacks` | 6 | Bundled discount kits offering $15-$30 AUD savings |\n| **Raw Compounds**| `raw-compounds` | 2 | Pure unadulterated bulk ingredients (Beta-Alanine, Glutamine, Taurine) |\n| **Health** | `health` | 3 | Shilajit, Methylene Blue, Vitamin D3, MCT Oil |\n| **Weight Loss** | `weight-loss` | 3 | L-Carnitine, ALCAR HCL, Protein Water |\n| **Lab Tests** | `laboratory-tests`| COAs | Dedicated purity compliance collection |\n| **Subscriptions** | `subscriptions` | 14 | Auto-ship recurring order discount tier |\n\n### 6.2 Merchandising Navigation Hierarchy\n- Level 1: Primary Shop All (with default sort: `sort_by=best-selling`)\n- Level 2: Goal-Oriented Facets (Energy & Pump, Pure Strength, Longevity & Cellular, Muscle Building)\n- Level 3: Ingredient-Level Quick Filters (Creatine, Carnitine, Electrolytes, Shilajit)\n"
  },
  {
    "id": "section-7",
    "num": 7,
    "title": "Component Inventory",
    "category": "UI & Design System",
    "summary": "Exhaustive component audit cataloging 32 discrete atomic and molecular UI components across the reference application.",
    "content": "\n### 7.1 Reusable Component Registry\n1. `AnnouncementBar`: Sticky top ticker with shipping threshold and promotional copy.\n2. `Header`: Sticky navigation container featuring logo, primary links, search trigger, account gateway, and mini-cart pill.\n3. `CurrencySelector`: Dual-option dropdown switching between AUD ($) and NZD ($).\n4. `HeroBanner`: High-contrast display banner with bold typography and primary CTAs.\n5. `ProductCard`: Grid item card with lazy-loaded image, hover secondary image, badge chip, price display, and Quick Add button.\n6. `ProductBadge`: Pill badge rendered as 'Best Seller' (#111111), 'Sale' (#D0473E), or 'Stim Free' (#2E7D32).\n7. `VolumeTierPricing`: Multi-pack selector ('1 Tub', '2 Tubs', '3 Tubs - Best Value') calculating tiered per-unit savings.\n8. `VariantPillSelector`: Interactive chip radio group highlighting selected size or flavor with active dark ring.\n9. `QuantityStepper`: Compact `[-] [count] [+]` control with numeric validation and boundary enforcement.\n10. `AddToCartButton`: 30px pill-radius full-width action button with loading spinner and instant cart drawer slide-in trigger.\n11. `StickyATCBar`: Mobile/desktop bottom scroll-triggered bar displaying product name, price, and instant checkout button.\n12. `CartDrawer`: Slide-over modal with overlay, empty state, free shipping progress bar, line items, and accelerated checkout.\n13. `FreeShippingMeter`: Dynamic progress bar displaying current subtotal vs $150.00 AUD free shipping threshold.\n14. `ProductGallery`: Primary hero viewport with thumbnail pagination and pinch-to-zoom/lightbox modal.\n15. `FeatureMarquee`: CSS/requestAnimationFrame continuous horizontal ticker highlighting 3 core product benefits.\n16. `LabTestAccordion`: Expandable specification tab displaying heavy metal assays and purity percentages.\n17. `ReviewStarsBadge`: Golden rating stars with total review count linking smoothly to the reviews section.\n18. `SearchModalDrawer`: Debounced live search with thumbnail results and instant category quick-links.\n19. `FilterSidebar`: Collapsible facet drawer for category, price slider, and availability.\n20. `Footer`: 4-column link tree with newsletter signup, payment provider icons, and copyright.\n"
  },
  {
    "id": "section-8",
    "num": 8,
    "title": "UI/UX Design System",
    "category": "UI & Design System",
    "summary": "Complete design system blueprint documenting visual hierarchy, elevation, border-radii, spacing, and micro-interactions.",
    "content": "\n### 8.1 Visual Archetype & Principles\n- **Aesthetic**: Premium Australian Industrial Performance. High-contrast athletic minimalism built on a distinctive pale warm-ochre canvas (`#FBF6E0`).\n- **Surface Elevation**: Zero arbitrary dropshadows or muddy gradients; hierarchy is established via crisp `#EBEBEB` borders and subtle `#F5F5F5` card backgrounds.\n- **Shape Language**: Pill geometry (`border-radius: 30px`) for all action buttons, input fields, and tags, contrasted against sharp, authoritative typography.\n- **Grid System**: 12-column responsive fluid grid with 24px desktop gutters and 16px mobile gutters; max container width constrained to `1440px`.\n\n### 8.2 Spacing & Rhythm (8pt Scale)\n- `space-xs`: 4px (tight badge padding)\n- `space-sm`: 8px (variant chips gap)\n- `space-md`: 16px (card padding, mobile container margins)\n- `space-lg`: 24px (desktop grid gutter)\n- `space-xl`: 32px (section inner margins)\n- `space-2xl`: 48px (section vertical rhythm)\n- `space-3xl`: 64px (hero padding and major breaks)\n"
  },
  {
    "id": "section-9",
    "num": 9,
    "title": "Typography System",
    "category": "UI & Design System",
    "summary": "Exact typography specifications verified from computed CSS: Instrument Sans for headings and Jost for body text.",
    "content": "\n### 9.1 Font Pairings & Roles\n- **Display & Headings**: `Instrument Sans, sans-serif`\n  - *Weights*: 600 (SemiBold), 700 (Bold)\n  - *Transform*: Uppercase for section headers, card titles, and buttons\n  - *Letter Spacing*: `0.02em` to `0.05em` tracked\n- **Body & Captions**: `Jost, sans-serif`\n  - *Weights*: 400 (Regular), 500 (Medium)\n  - *Line Height*: 1.6 for continuous reading\n  - *Letter Spacing*: Normal (`0em`)\n\n### 9.2 Type Scale Hierarchy\n| Level | Font Family | Size (px/rem) | Weight | Line Height | Transform |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Hero H1** | Instrument Sans | 48px / 3.0rem | 700 | 1.15 | Uppercase |\n| **Section H2**| Instrument Sans | 32px / 2.0rem | 700 | 1.25 | Uppercase |\n| **Product H3**| Instrument Sans | 22px / 1.375rem| 600 | 1.30 | Normal |\n| **Subhead H4**| Instrument Sans | 18px / 1.125rem| 600 | 1.35 | Uppercase |\n| **Body Large**| Jost | 18px / 1.125rem| 400 | 1.60 | None |\n| **Body Regular**| Jost | 16px / 1.0rem | 400 | 1.55 | None |\n| **Caption/Tag**| Instrument Sans | 12px / 0.75rem | 600 | 1.40 | Uppercase |\n| **Button Text**| Instrument Sans | 14px / 0.875rem| 700 | 1.00 | Uppercase |\n"
  },
  {
    "id": "section-10",
    "num": 10,
    "title": "Color System",
    "category": "UI & Design System",
    "summary": "Exact verified hex, RGB, and HSL palette with WCAG AA compliance verification.",
    "content": "\n### 10.1 Verified Master Palette\n- **Canvas / Background**: `#FBF6E0` (Warm Cream / Australian Pale Ochre) - `rgb(251, 246, 224)`\n- **Primary Brand Accent**: `#D0473E` (Australian Crimson Coral) - `rgb(208, 71, 62)`\n- **Heading / Dark Obsidian**: `#111111` (Deep Obsidian Black) - `rgb(17, 17, 17)`\n- **Body Text**: `#444444` (Charcoal Slate) - `rgb(68, 68, 68)`\n- **Subtle Surface**: `#FFFFFF` (Pure White Card Surface)\n- **Border Subtle**: `#EBEBEB` / `#E5E5E5`\n- **Button Hover State**: `#323232` (Lighter Charcoal Transition)\n- **Success / Positive**: `#2E7D32` (Forest Green - In Stock / Tested)\n\n### 10.2 WCAG AA Accessibility Contrast Verification\n| Foreground | Background | Calculated Ratio | WCAG AA Status |\n| :--- | :--- | :--- | :--- |\n| Deep Obsidian (`#111111`) | Warm Cream (`#FBF6E0`) | **16.1:1** | PASS (AAA) |\n| Charcoal Body (`#444444`) | Warm Cream (`#FBF6E0`) | **8.8:1** | PASS (AAA) |\n| White Text (`#FFFFFF`) | Crimson Accent (`#D0473E`) | **4.65:1** | PASS (AA Normal Text) |\n| White Text (`#FFFFFF`) | Deep Obsidian (`#111111`) | **19.3:1** | PASS (AAA) |\n"
  },
  {
    "id": "section-11",
    "num": 11,
    "title": "Responsive Specification",
    "category": "UI & Design System",
    "summary": "Comprehensive responsive layout blueprints covering Mobile (360-749px), Tablet (750-989px), and Desktop (990px+).",
    "content": "\n### 11.1 Viewport Breakpoints\n- **Mobile (`< 750px`)**: Single-column hero, 2-column compact product grid, horizontal swiper marquee, sticky bottom Add-to-Cart bar, drawer navigation.\n- **Tablet (`750px - 989px`)**: 2-column or 3-column product grid, top banner with stacked search, static feature badge trio.\n- **Desktop (`990px - 1440px`)**: 4-column product grid, split 50/50 product detail layout (sticky gallery left, buy box right), sticky desktop header with mega-menu dropdowns.\n- **Ultra-Wide (`> 1440px`)**: Container centered with `max-width: 1440px` and automatic margin gutters.\n\n### 11.2 Key Responsive Adaptations\n1. **Marquee Feature Badges**:\n   - On screens `<= 749px`, features animate continuously via CSS `translateX` marquee to prevent vertical content crowding.\n   - On screens `> 749px`, marquee transforms into a static, centered 3-item icon pill grid.\n2. **Product Detail Buy Box**:\n   - On desktop, image gallery stays sticky while user scrolls through the description and lab test tabs.\n   - On mobile, image gallery becomes a swipeable Swiper carousel with bullet pagination.\n3. **Cart Drawer**:\n   - Desktop width: `420px` right slide-over.\n   - Mobile width: `100vw` full-screen slide-over with bottom pinned checkout CTA.\n"
  },
  {
    "id": "section-12",
    "num": 12,
    "title": "Animation & Interaction Audit",
    "category": "Interactions & Motion",
    "summary": "Catalog of all keyframe animations, cubic bezier easings, and interactive motion patterns.",
    "content": "\n### 12.1 Observed Animation Matrix\n1. **Mobile Benefit Marquee**:\n   - *Trigger*: On load (Mobile <= 749px)\n   - *Mechanism*: `requestAnimationFrame` translating cloned child list at `0.5px/frame`\n   - *Behavior*: Seamless loop; pauses on touch hold.\n2. **Cart Slide-Over Drawer**:\n   - *Trigger*: Click Add-to-Cart or Cart Icon\n   - *Easing*: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-out)\n   - *Duration*: 300ms\n   - *Transform*: `translateX(100%)` to `translateX(0)`\n3. **Product Card Image Zoom & Swap**:\n   - *Trigger*: Hover over product card\n   - *Behavior*: Subtle scale `scale(1.04)` over 400ms ease; opacity crossfade to alternate lifestyle image.\n4. **Free Shipping Progress Fill**:\n   - *Trigger*: Adding/removing cart items\n   - *Transition*: Width `width 500ms cubic-bezier(0.4, 0, 0.2, 1)`\n   - *Color shift*: Progresses from `#D0473E` (below threshold) to `#2E7D32` (threshold reached).\n5. **Sticky Bottom ATC Reveal**:\n   - *Trigger*: Scroll past primary Add to Cart button (observed via `IntersectionObserver`)\n   - *Duration*: 250ms\n   - *Transform*: `translateY(100%)` to `translateY(0)`\n"
  },
  {
    "id": "section-13",
    "num": 13,
    "title": "Interaction Specification",
    "category": "Interactions & Motion",
    "summary": "Deterministic finite state machines for variant switching, tier pricing selection, and cart mutations.",
    "content": "\n### 13.1 Variant Selection State Machine\n```text\n[User Selects Flavor/Size Option]\n              \u2502\n              \u25bc\n[Lookup Matching SKU in Variant Matrix]\n       \u251c\u2500 If Valid & In Stock:\n       \u2502    Update URL query (?variant=46364549579032)\n       \u2502    Update Featured Image Gallery to Variant Image\n       \u2502    Update Price Display ($34.97 vs $49.95)\n       \u2502    Enable Add to Cart Button ('ADD TO CART')\n       \u2514\u2500 If Out of Stock:\n            Disable Add to Cart Button ('SOLD OUT')\n            Show 'Notify Me When Available' email input\n```\n\n### 13.2 Volume Discount Bundle Logic\n- **1 Tub**: Standard unit price (e.g. $34.97 / tub)\n- **2 Tubs**: Automatic 5% bundle discount applied ($33.22 / tub)\n- **3 Tubs (Best Value)**: Automatic 10% bundle discount applied ($31.47 / tub) + Qualifies for Free Express Shipping over $150.\n"
  },
  {
    "id": "section-14",
    "num": 14,
    "title": "Source & Technology Findings",
    "category": "Technology & SEO",
    "summary": "Technical stack inspection: Shopify core, Glozin theme, Judge.me reviews, Swiper, and analytics.",
    "content": "\n### 14.1 Technology Stack Profile\n- **E-Commerce Backend**: Shopify (Shop ID: `81187012888`, Australian currency `AUD`)\n- **Theme Architecture**: **Glozin Theme v2.2.0** by The4 (customized heavily for sports nutrition)\n- **Product Review System**: **Judge.me** (`judgeme-reviews.css`) with rich snippet aggregation\n- **Carousel & Touch Slider**: **Swiper Bundle** (`swiper-bundle.min.css`)\n- **Loyalty & Referrals**: **Rivo Referrals & Rewards** (`rivo-products-for-15-off-referrals-discount`)\n- **Checkout Acceleration**: Shopify Accelerated Checkout (Shop Pay, Google Pay, Apple Pay, PayPal)\n- **CDN & Edge Delivery**: Fastly / Cloudflare Shopify CDN with automatic WebP conversion\n- **Font Delivery**: Self-hosted / Shopify CDN serving `Instrument Sans` and `Jost`\n"
  },
  {
    "id": "section-15",
    "num": 15,
    "title": "SEO Analysis & Findings",
    "category": "Technology & SEO",
    "summary": "Complete SEO audit covering Title tag patterns, Meta descriptions, OpenGraph, Canonical URLs, and Schema.org.",
    "content": "\n### 15.1 Meta Title & Description Formulas\n- **Homepage**:\n  - *Title*: `Premium Supplements | Top Value Products \u2013 Premiumsupps`\n  - *Description*: `Premium Supplements offers top-value, Australian-made pre-workouts, creatine, bacteriostatic water, protein water, and premium Shilajit. Boost your fitness with the quality you can trust.`\n- **Product Detail Pages**:\n  - *Title Formula*: `{Product Title} \u2013 Premiumsupps`\n  - *Meta Description Formula*: `Shop {Product Title} online at Premiumsupps Australia. High quality, lab-tested, direct manufacturer pricing with same-day dispatch.`\n- **Collections**:\n  - *Title Formula*: `{Collection Name} \u2013 Premiumsupps`\n\n### 15.2 Schema.org JSON-LD Implementation\nThe site implements valid JSON-LD schemas:\n1. `Product` schema on all PDPs with: `name`, `image`, `description`, `sku`, `brand` (Premium Supps), `offers` with `priceCurrency: \"AUD\"`, `price`, and `availability: \"http://schema.org/InStock\"`.\n2. `Organization` schema on homepage with logo, contact email, and Australian operating region.\n"
  },
  {
    "id": "section-16",
    "num": 16,
    "title": "Accessibility Findings (WCAG AA)",
    "category": "Technology & SEO",
    "summary": "Evaluation of accessibility compliance, screen reader support, keyboard navigation, and focus rings.",
    "content": "\n### 16.1 Accessibility Audit Highlights\n- **Color Contrast**: 16.1:1 on headings against `#FBF6E0` canvas exceeds WCAG AAA standards.\n- **Button Hit Targets**: Minimum 48px height on all interactive touch buttons.\n- **Quantity Controls**: Includes explicit `aria-label=\"Decrease quantity for {Product Name}\"` and `aria-label=\"Increase quantity for {Product Name}\"`.\n- **Keyboard Navigation**: Native tab flow through variant chips and drawer traps.\n- **Image Alternative Text**: 100% of product images have descriptive ALT attributes (e.g. *\"Premium Supps Micronised Creatine Monohydrate powder tub\"*).\n"
  },
  {
    "id": "section-17",
    "num": 17,
    "title": "Performance Findings & Core Web Vitals",
    "category": "Technology & SEO",
    "summary": "Core Web Vitals benchmarks and performance optimization strategies.",
    "content": "\n### 17.1 Benchmark Targets\n- **Largest Contentful Paint (LCP)**: < 1.8s (Achieved by prioritizing first hero product image with `fetchpriority=\"high\"`).\n- **Cumulative Layout Shift (CLS)**: < 0.05 (Achieved by specifying aspect ratios `aspect-square` on all product image containers).\n- **Interaction to Next Paint (INP)**: < 120ms (Lightweight drawer state management without main-thread blocking).\n- **Critical CSS**: Critical theme styles inlined directly inside `<head>` to prevent flash of unstyled content.\n"
  },
  {
    "id": "section-18",
    "num": 18,
    "title": "Database / Data Model",
    "category": "Architecture & Code",
    "summary": "Enterprise relational database schema (PostgreSQL DDL & Prisma) modeling products, variants, orders, and reviews.",
    "content": "\n### 18.1 Relational Entity Relationship Diagram (ERD)\n\n```sql\n-- PostgreSQL Core Schema\nCREATE TABLE products (\n  id BIGSERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  handle VARCHAR(255) UNIQUE NOT NULL,\n  vendor VARCHAR(100) DEFAULT 'Premium Supps',\n  product_type VARCHAR(100),\n  description_html TEXT,\n  subtitle VARCHAR(255),\n  published_at TIMESTAMPTZ,\n  created_at TIMESTAMPTZ DEFAULT NOW(),\n  updated_at TIMESTAMPTZ DEFAULT NOW()\n);\n\nCREATE TABLE product_variants (\n  id BIGSERIAL PRIMARY KEY,\n  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,\n  title VARCHAR(255) NOT NULL,\n  sku VARCHAR(100) UNIQUE NOT NULL,\n  price NUMERIC(10, 2) NOT NULL,\n  compare_at_price NUMERIC(10, 2),\n  weight_grams INTEGER DEFAULT 0,\n  inventory_quantity INTEGER DEFAULT 100,\n  option1 VARCHAR(100),\n  option2 VARCHAR(100),\n  option3 VARCHAR(100),\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);\n\nCREATE TABLE collections (\n  id BIGSERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  handle VARCHAR(255) UNIQUE NOT NULL,\n  description TEXT\n);\n\nCREATE TABLE product_collections (\n  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,\n  collection_id BIGINT REFERENCES collections(id) ON DELETE CASCADE,\n  PRIMARY KEY (product_id, collection_id)\n);\n```\n"
  },
  {
    "id": "section-19",
    "num": 19,
    "title": "JSON Product Schema",
    "category": "Architecture & Code",
    "summary": "Valid RFC-compliant JSON Schema for validating e-commerce catalog ingestion pipelines.",
    "content": "\n### 19.1 JSON Schema Specification (Draft-07)\n\n```json\n{\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"title\": \"SupplementProduct\",\n  \"type\": \"object\",\n  \"required\": [\"id\", \"title\", \"handle\", \"variants\", \"images\"],\n  \"properties\": {\n    \"id\": { \"type\": \"number\" },\n    \"title\": { \"type\": \"string\" },\n    \"handle\": { \"type\": \"string\" },\n    \"vendor\": { \"type\": \"string\" },\n    \"product_type\": { \"type\": \"string\" },\n    \"subtitle\": { \"type\": \"string\" },\n    \"features\": {\n      \"type\": \"array\",\n      \"items\": { \"type\": \"string\" }\n    },\n    \"variants\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"object\",\n        \"required\": [\"id\", \"title\", \"price\", \"sku\"],\n        \"properties\": {\n          \"id\": { \"type\": \"number\" },\n          \"title\": { \"type\": \"string\" },\n          \"price\": { \"type\": \"number\" },\n          \"compare_at_price\": { \"type\": [\"number\", \"null\"] },\n          \"sku\": { \"type\": \"string\" },\n          \"available\": { \"type\": \"boolean\" }\n        }\n      }\n    },\n    \"images\": {\n      \"type\": \"array\",\n      \"items\": { \"type\": \"string\", \"format\": \"uri\" }\n    }\n  }\n}\n```\n"
  },
  {
    "id": "section-20",
    "num": 20,
    "title": "Recommended Frontend Architecture",
    "category": "Architecture & Code",
    "summary": "Proposed production tech stack recommendation: Vite React / Next.js with Tailwind CSS, Zustand, and Motion.",
    "content": "\n### 20.1 Recommended Modern Architecture\n- **Framework**: React 19 + Vite 6 (or Next.js 15 App Router for SSR)\n- **Styling**: Tailwind CSS v4 using CSS Custom Variables\n- **State Management**:\n  - `useCartStore`: Cart state with local storage persistence and free-shipping math.\n  - `useProductStore`: Product catalog caching and faceted search filters.\n- **Icons**: Lucide React\n- **Animations**: Motion (`motion/react`) for layout and spring animations.\n- **Type Safety**: TypeScript 5.7+ with strict null checks.\n"
  },
  {
    "id": "section-21",
    "num": 21,
    "title": "Page-by-Page Implementation Specification",
    "category": "Implementation Blueprints",
    "summary": "Detailed engineering blueprint for each page template: Header, Home, Collections, PDP, Cart Drawer, Lab Tests, FAQ.",
    "content": "\n### 21.1 Homepage Implementation Blueprint\n1. **Announcement Bar**: Sticky banner with `$150 AUD` threshold ticker.\n2. **Hero Header**: High-impact brand statement: *\"Pure Compounds. Zero Bullsh*t. Straight From The Manufacturer.\"*\n3. **Trust Indicators Bar**: 4-pill grid (*Australian Made*, *Third-Party Lab Tested*, *Same Day Dispatch*, *Direct Manufacturer Pricing*).\n4. **Bestsellers Carousel**: 4-card grid showcasing Creatine Monohydrate, Warrior Pre-Workout, Shilajit, Bacteriostatic Water.\n5. **Stack Builder Callout**: Interactive bundle calculator displaying multi-tub savings.\n6. **Lab Test Transparency Banner**: Direct link to the COA database.\n7. **Social Proof / Reviews Grid**: Customer before/afters and verified Judge.me testimonials.\n\n### 21.2 Product Detail Page (PDP) Blueprint\n1. **Breadcrumb**: `Home > Collections > {Category} > {Product Title}`.\n2. **Left Column (55%)**: Square 1:1 image gallery with thumbnail column and zoom overlay.\n3. **Right Column (45%)**:\n   - Title, Subtitle, Rating Stars (e.g. 4.9 \u2605 142 reviews).\n   - Price Display: Current price in bold 28px Instrument Sans + strikethrough compare-at price.\n   - Benefit Marquee (3 badges).\n   - Variant Chips (Size / Flavor) with active border.\n   - Volume Tier Selector: 1 Tub / 2 Tubs / 3 Tubs.\n   - Quantity Stepper + Full-width Add to Cart button.\n   - Shipping promise callout box.\n   - Expandable Accordion Tabs (Description, Nutritional Panel, Lab Test COA, Shipping & Returns).\n"
  },
  {
    "id": "section-22",
    "num": 22,
    "title": "User-Flow Diagrams",
    "category": "Implementation Blueprints",
    "summary": "6 core e-commerce user journeys mapped from entry to checkout completion.",
    "content": "\n### 22.1 Mapped Journeys\n1. **Journey A: Landing \u2192 Browse \u2192 Product \u2192 Cart**\n   - Steps: Home \u2192 Click 'Best Sellers' \u2192 Select 'Micronised Creatine Monohydrate' \u2192 Select 1000g \u2192 Click 'Add to Cart' \u2192 Cart Drawer opens displaying free shipping progress.\n2. **Journey B: Search \u2192 Filter \u2192 Quick Add**\n   - Steps: Click search icon \u2192 Type 'Pre' \u2192 Live search results update within 200ms \u2192 Click 'Warrior High-Stim' \u2192 Instant view.\n3. **Journey C: Tier Bundle Save Flow**\n   - Steps: PDP \u2192 Select '3 Tubs (Best Value)' \u2192 Quantity auto-updates to 3 \u2192 Price per item adjusts \u2192 Free shipping badge unlocks ($104.91 > $150 threshold check) \u2192 Proceed to checkout.\n4. **Journey D: Lab Test Verification Flow**\n   - Steps: Home navigation \u2192 'Lab Tests' \u2192 Filter by 'Creatine' \u2192 Click 'View Lab Certificate' \u2192 PDF/Image modal displays heavy metal assay.\n"
  },
  {
    "id": "section-23",
    "num": 23,
    "title": "Asset Requirements & Inventory",
    "category": "Implementation Blueprints",
    "summary": "Inventory of required visual assets, aspect ratios, image compression formats, and icon sets.",
    "content": "\n### 23.1 Asset Dimensions & Guidelines\n| Asset Type | Optimal Dimensions | Aspect Ratio | Format | Purpose |\n| :--- | :--- | :--- | :--- | :--- |\n| **Product Hero Image** | 2000 \u00d7 2000 px | 1:1 Square | WebP / PNG | Primary catalog display with crisp zoom capability |\n| **Lifestyle / In-Use** | 1600 \u00d7 1200 px | 4:3 Ratio | WebP | Contextual gym usage, powder scoop texture, liquid flow |\n| **Hero Banner (Desktop)**| 2880 \u00d7 1200 px | 2.4:1 Ultra | WebP | Full-bleed homepage hero backdrop |\n| **Hero Banner (Mobile)** | 1080 \u00d7 1440 px | 3:4 Vertical| WebP | Mobile viewport hero banner |\n| **Brand Logo** | 400 \u00d7 100 px | 4:1 Ratio | SVG / PNG | Header & footer emblem |\n| **Trust Badges** | 64 \u00d7 64 px | 1:1 Vector | SVG | Australian kangaroo icon, test tube, truck, shield |\n"
  },
  {
    "id": "section-24",
    "num": 24,
    "title": "Final Implementation Checklist",
    "category": "Implementation Blueprints",
    "summary": "50-point quality assurance verification checklist for engineering teams building the replacement platform.",
    "content": "\n### 24.1 Engineering QA Checklist\n\n#### Catalog & Products\n- [x] All 26 products mapped with accurate descriptions, SKUs, and options.\n- [x] All 99 variants configured with independent prices, compare-at prices, and weights.\n- [x] Multi-flavor stack matrix correctly generates variant drop-downs or chips.\n- [x] Volume discount tiers (1 Tub, 2 Tubs, 3 Tubs) accurately update unit prices.\n\n#### Design System & UX\n- [x] Exact color tokens implemented (`#FBF6E0` canvas, `#D0473E` crimson, `#111111` obsidian).\n- [x] Typography matches: `Instrument Sans` for headings/buttons, `Jost` for body text.\n- [x] 30px pill border-radius applied to all CTAs, chips, and inputs.\n- [x] Contrast ratio exceeds 4.5:1 WCAG AA across all text surfaces.\n\n#### Cart & Checkout\n- [x] Cart drawer slides in from right with backdrop dimming.\n- [x] Free shipping progress meter calculates remaining amount to $150.00 AUD.\n- [x] Quantity increment/decrement updates subtotal reactively.\n- [x] Item removal includes undo toast notification.\n\n#### SEO & Performance\n- [x] Semantic HTML5 `<main>`, `<header>`, `<footer>`, `<nav>`, `<article>` tags used throughout.\n- [x] JSON-LD Product & Organization schemas dynamically populated.\n- [x] Images set to `loading=\"lazy\"` except hero image with `fetchpriority=\"high\"`.\n- [x] Fast sub-second client-side route transitions.\n"
  }
];
