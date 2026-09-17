import React, { useState, useMemo } from 'react';
import { PRODUCTS, COLLECTIONS, Product, ProductVariant } from '../data/catalog';
import { ProductCard } from './ProductCard';
import { CategoryShowcase } from './CategoryShowcase';
import { TransparencyMatrix } from './TransparencyMatrix';
import { CustomerReviews } from './CustomerReviews';
import { StorefrontFAQ } from './StorefrontFAQ';
import { LiveSalesToast } from './LiveSalesToast';
import { 
  ShieldCheck, Truck, Sparkles, Award, ArrowRight, Search, 
  Filter, Check, ArrowUpDown, ChevronRight, Mail, Copy, CheckCircle2,
  Zap, Droplet, Flame
} from 'lucide-react';
import { ActiveModal, CategoryFilter } from '../types/store';

interface StorefrontViewProps {
  onOpenProduct: (product: Product) => void;
  onAddToCart: (product: Product, variant: ProductVariant, qty: number) => void;
  openModal: (modal: ActiveModal) => void;
  currency: 'AUD' | 'NZD';
  selectedCategory: CategoryFilter;
  setSelectedCategory: (cat: CategoryFilter) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const StorefrontView: React.FC<StorefrontViewProps> = ({
  onOpenProduct,
  onAddToCart,
  openModal,
  currency,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [heroTabIndex, setHeroTabIndex] = useState<number>(0);
  const [copiedCoupon, setCopiedCoupon] = useState<boolean>(false);

  // 3 Flagship Hero Formulations
  const heroFormulations = useMemo(() => {
    const creatine = PRODUCTS.find(p => p.handle === 'creatine-monohydrate') || PRODUCTS[0];
    const warrior = PRODUCTS.find(p => p.handle.includes('warrior')) || PRODUCTS[1];
    const glycerol = PRODUCTS.find(p => p.handle.includes('glycerol')) || PRODUCTS[2];

    return [
      {
        product: creatine,
        badge: 'Top Rated',
        tagline: 'Ultra-Fine 200 Mesh Micronized Creatine',
        specPurity: '>99.8% HPLC Certified',
        specOrigin: 'Sydney NSW Facility',
        specServing: '200 Serves / 1kg',
        specActive: '100% Pure Monohydrate'
      },
      {
        product: warrior,
        badge: 'High-Stim',
        tagline: 'Clinically Dosed Pump & Cognitive Drive',
        specPurity: 'Clinical Efficacious Doses',
        specOrigin: 'Sydney NSW Facility',
        specServing: '30 Full Servings',
        specActive: '400mg Caffeine + 3.2g Beta-Alanine'
      },
      {
        product: glycerol,
        badge: 'Max Pump',
        tagline: 'Hyper-Hydration Intra-Cellular Solution',
        specPurity: '1.25g / mL Active Solution',
        specOrigin: 'Sydney NSW Facility',
        specServing: '500mL Volume',
        specActive: '100% Water Soluble Fluid'
      }
    ];
  }, []);

  const activeHero = heroFormulations[heroTabIndex];

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SYDNEY10');
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter matching
      let matchesCat = true;
      if (selectedCategory === 'best-seller') {
        matchesCat = !!p.badge?.toLowerCase().includes('best seller') || p.tags.includes('Best Seller');
      } else if (selectedCategory === 'pre-workouts') {
        matchesCat = 
          p.product_type === 'Pre-Workout' || 
          p.tags.some(t => {
            const lower = t.toLowerCase();
            return lower === 'pre-workout' || lower === 'preworkout' || lower === 'pump';
          }) ||
          p.title.toLowerCase().includes('pre-workout') ||
          p.title.toLowerCase().includes('preworkout') ||
          p.title.toLowerCase().includes('warrior') ||
          p.handle.includes('warrior') ||
          p.handle.includes('glycerol') ||
          p.handle.includes('beta-alanine') ||
          p.handle === 'performance-stack';
      } else if (selectedCategory === 'creatine') {
        matchesCat = p.tags.includes('Creatine') || p.title.toLowerCase().includes('creatine');
      } else if (selectedCategory === 'stacks') {
        matchesCat = p.tags.includes('Stack') || p.tags.includes('Bundle') || p.title.toLowerCase().includes('stack');
      } else if (selectedCategory === 'raw-compounds') {
        matchesCat = p.product_type === 'Raw Ingredients' || p.tags.includes('Raw Compounds');
      } else if (selectedCategory === 'health') {
        matchesCat = p.product_type === 'Health & Wellness' || p.tags.includes('Health');
      } else if (selectedCategory === 'weight-loss') {
        matchesCat = p.tags.includes('Weight Loss') || p.title.toLowerCase().includes('carnitine') || p.title.toLowerCase().includes('synephrine');
      }

      // Search matching
      const matchesSearch = !searchQuery || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.min_price - b.min_price;
      if (sortBy === 'price-desc') return b.min_price - a.min_price;
      if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
      return 0; // featured default order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Hero Banner with Interactive Formulation Switcher & Athletic Background Image */}
      <section 
        className="text-[#fbf6e0] pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#333333] bg-[#111111] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 17, 17, 0.96) 0%, rgba(17, 17, 17, 0.88) 50%, rgba(17, 17, 17, 0.72) 100%), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2400&auto=format&fit=crop')`
        }}
      >
        {/* Subtle athletic texture overlay & Crimson radial glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30 pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#d0473e]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              {/* Badge & Social Proof rating */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-[#d0473e] text-white text-[11px] font-heading font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                  <span>🇦🇺</span>
                  <span>Formulated in Australia • Clinical Doses</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-sans">
                  <span>★★★★★</span>
                  <span className="font-heading font-bold text-white text-[11px]">4.9 / 5.0</span>
                  <span className="text-[#d8d0b5] text-[10px] hidden sm:inline">(Trusted by 36,000+ Australians)</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading text-white tracking-tight uppercase leading-[0.98]">
                  Pure Doses. <br />
                  No Fillers. <br />
                  <span className="text-[#d0473e]">No Excuses.</span>
                </h1>
                <p className="text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-[#d0473e] pt-1">
                  Built For Athletes Who Demand More.
                </p>
              </div>
              
              <p className="text-xs sm:text-sm font-sans text-[#d8d0b5] max-w-xl leading-relaxed">
                Straightforward, affordable performance nutrition. Formulated, blended, and tested in Sydney, Australia. Every active compound listed with exact clinical dosages, zero proprietary blends, and zero filler maltodextrin.
              </p>

              {/* Formulation Switcher Tabs */}
              <div className="pt-2">
                <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-white/60 mb-2">
                  Featured Core Formulations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Creatine Monohydrate', icon: Sparkles },
                    { label: 'Warrior King Pre-Workout', icon: Zap },
                    { label: 'Liquid Glycerol 500mL', icon: Droplet }
                  ].map((tab, idx) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => setHeroTabIndex(idx)}
                        className={`text-xs font-heading font-bold uppercase tracking-wider px-3.5 py-2 rounded-full cursor-pointer transition-all flex items-center gap-1.5 ${
                          heroTabIndex === idx
                            ? 'bg-[#d0473e] text-white shadow-md scale-105'
                            : 'bg-white/10 hover:bg-white/20 text-white/85 border border-white/15 backdrop-blur-xs'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const catalogElement = document.getElementById('product-catalog');
                    if (catalogElement) catalogElement.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#d0473e] hover:bg-[#b53a32] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-lg flex items-center gap-2 active:scale-95"
                  id="hero-shop-best-sellers"
                >
                  <span>Explore Complete Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openModal('lab-tests')}
                  className="bg-black/40 hover:bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-wider px-5 py-3.5 rounded-full transition-all cursor-pointer border border-white/25 backdrop-blur-xs flex items-center gap-2 active:scale-95"
                  id="hero-view-lab-tests"
                >
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  <span>Inspect Lab Tests (COA)</span>
                </button>
              </div>

              {/* Coupon Bar with One-Click Copy */}
              <div className="pt-2 flex items-center gap-2 text-xs font-sans">
                <span className="text-[#d8d0b5] text-[11px]">First Australian order?</span>
                <div 
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/20 px-3 py-1 rounded-full cursor-pointer transition-colors text-white font-mono text-[11px] backdrop-blur-xs"
                  title="Click to copy promo code"
                >
                  <span className="font-bold text-amber-400">SYDNEY10</span>
                  <span className="text-white/70">for 10% off</span>
                  {copiedCoupon ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-white/60" />
                  )}
                </div>
                {copiedCoupon && (
                  <span className="text-emerald-400 font-bold text-[11px] animate-pulse">
                    Copied to clipboard!
                  </span>
                )}
              </div>

            </div>

            {/* Hero Right Visual Interactive Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-[#161616]/90 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#d0473e]/25 rounded-full blur-2xl pointer-events-none"></div>
                
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse"></span>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-white/90">
                      Sydney Formulation
                    </span>
                  </div>
                  <span className="bg-[#d0473e] text-white text-[10px] font-heading font-bold uppercase px-2 py-0.5 rounded-full shadow-xs">
                    {activeHero.badge}
                  </span>
                </div>

                {/* Animated Image with Subtle Scale */}
                <div 
                  onClick={() => onOpenProduct(activeHero.product)}
                  className="aspect-square bg-black/40 rounded-2xl p-4 flex items-center justify-center relative cursor-pointer group"
                >
                  <img
                    src={activeHero.product.images[0]}
                    alt={activeHero.product.title}
                    key={activeHero.product.id}
                    className="w-full h-full object-contain group-hover:scale-108 transition-all duration-500 ease-out"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#111111]/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-white/20">
                    From ${activeHero.product.min_price.toFixed(2)} AUD
                  </div>
                </div>

                {/* Live Specification Chips */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                    <span className="text-white/40 block text-[9px] uppercase font-bold">Purity Cert</span>
                    <span className="text-[#fbf6e0] font-bold truncate block">{activeHero.specPurity}</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                    <span className="text-white/40 block text-[9px] uppercase font-bold">Dispatch Location</span>
                    <span className="text-[#fbf6e0] font-bold truncate block">{activeHero.specOrigin}</span>
                  </div>
                </div>

                {/* Bottom Title & Action */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="max-w-[220px]">
                    <h3 
                      onClick={() => onOpenProduct(activeHero.product)}
                      className="font-heading font-bold text-white uppercase text-sm line-clamp-1 cursor-pointer hover:text-[#d0473e] transition-colors"
                    >
                      {activeHero.product.title}
                    </h3>
                    <p className="text-[10px] text-[#d8d0b5] truncate">{activeHero.tagline}</p>
                  </div>
                  <button
                    onClick={() => onOpenProduct(activeHero.product)}
                    className="bg-white hover:bg-[#d0473e] hover:text-white text-[#111111] text-xs font-bold uppercase px-4 py-2 rounded-full transition-colors cursor-pointer shadow-sm active:scale-95"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#ebebeb] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#fbf6e0] flex items-center justify-center text-lg shrink-0">
              🇦🇺
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">100% Australian Made</h4>
              <p className="text-[11px] text-[#666666]">Direct Sydney warehouse dispatch.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#ebebeb] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">Third-Party Lab Tested</h4>
              <p className="text-[11px] text-[#666666]">&gt;99.5% HPLC certified purity.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#ebebeb] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#fbf6e0] text-[#d0473e] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">Same-Day Dispatch</h4>
              <p className="text-[11px] text-[#666666]">Order before 2PM Sydney time.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#ebebeb] flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#fbf6e0] text-[#111111] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#111111]">Zero Intermediary Markup</h4>
              <p className="text-[11px] text-[#666666]">Direct manufacturer wholesale value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Category Showcase Component */}
      <CategoryShowcase
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* High-Impact Brand Marquee Divider */}
      <div className="bg-[#111111] text-[#fbf6e0] py-3 overflow-hidden border-y border-[#333333] select-none">
        <div className="animate-marquee items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-widest cursor-default">
          {[1, 2].map((mIdx) => (
            <div key={mIdx} className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <span className="text-[#d0473e]">★</span>
                <span>100% UNADULTERATED PURE ACTIVE COMPOUNDS</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#d0473e]">★</span>
                <span>ZERO MALTODEXTRIN OR CHEAP BULKING FILLERS</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#d0473e]">★</span>
                <span>INDEPENDENT HPLC LAB TESTED &gt;99.5% PURITY</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#d0473e]">★</span>
                <span>SYDNEY WAREHOUSE SAME-DAY DISPATCH BEFORE 2PM</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#d0473e]">★</span>
                <span>30-DAY ZERO-RISK QUALITY REFUND GUARANTEE</span>
              </span>
              <span className="text-white/30">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Product Catalog Section */}
      <main id="product-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e5dec5] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d0473e]">
              Performance Nutrition Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-[#111111] tracking-tight mt-1">
              {selectedCategory === 'all' && `All Products (${PRODUCTS.length})`}
              {selectedCategory === 'best-seller' && 'Best Sellers & Top Rated'}
              {selectedCategory === 'pre-workouts' && `High-Stim & Pump Pre-Workouts (${filteredProducts.length})`}
              {selectedCategory === 'creatine' && 'Pure Micronized Creatine Range'}
              {selectedCategory === 'stacks' && 'Synergistic Training Stacks'}
              {selectedCategory === 'raw-compounds' && 'Pure Single Active Compounds'}
              {selectedCategory === 'health' && 'Health & Longevity Formulations'}
              {selectedCategory === 'weight-loss' && 'Metabolic & Fat Oxidation'}
            </h2>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-white rounded-full border border-[#d8d0b5] text-[#111111] focus:outline-hidden focus:border-[#d0473e] w-48 sm:w-56 shadow-2xs"
                id="catalog-search-input"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold bg-white text-[#111111] border border-[#d8d0b5] rounded-full px-3 py-1.5 cursor-pointer focus:outline-hidden shadow-2xs"
              id="sort-select"
            >
              <option value="featured">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#111111] text-white shadow-xs'
                : 'bg-white text-[#444444] border border-[#d8d0b5] hover:bg-[#fbf6e0]'
            }`}
            id="cat-filter-all"
          >
            All ({PRODUCTS.length})
          </button>

          <button
            onClick={() => setSelectedCategory('best-seller')}
            className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'best-seller'
                ? 'bg-[#111111] text-white shadow-xs'
                : 'bg-white text-[#444444] border border-[#d8d0b5] hover:bg-[#fbf6e0]'
            }`}
            id="cat-filter-best-seller"
          >
            🔥 Best Sellers
          </button>

          <button
            onClick={() => setSelectedCategory('pre-workouts')}
            className={`text-xs font-heading font-bold uppercase tracking-wider px-4.5 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'pre-workouts'
                ? 'bg-gradient-to-r from-[#d0473e] to-[#b53a32] text-white shadow-lg ring-2 ring-[#d0473e]/40 scale-102'
                : 'bg-[#d0473e]/10 text-[#d0473e] border border-[#d0473e]/40 hover:bg-[#d0473e]/20 hover:border-[#d0473e]'
            }`}
            id="cat-filter-pre-workouts"
          >
            <span className="animate-pulse text-amber-300">⚡</span>
            <span>Pre-Workouts</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans font-bold ${
              selectedCategory === 'pre-workouts' ? 'bg-white/20 text-white' : 'bg-[#d0473e] text-white'
            }`}>
              8
            </span>
          </button>

          {[
            { id: 'creatine', label: '💪 Creatine' },
            { id: 'stacks', label: '📦 Stacks & Bundles' },
            { id: 'raw-compounds', label: '🔬 Raw Compounds' },
            { id: 'health', label: '🌿 Health & Longevity' },
            { id: 'weight-loss', label: '🔥 Weight Loss' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as CategoryFilter)}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'bg-white text-[#444444] border border-[#d8d0b5] hover:bg-[#fbf6e0]'
              }`}
              id={`cat-filter-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pre-Workout Category Banner when selected */}
        {selectedCategory === 'pre-workouts' && (
          <div className="bg-[#111111] text-[#fbf6e0] rounded-2xl p-4 sm:p-5 border border-[#333333] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d0473e] animate-ping"></span>
                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#d0473e]">
                  Sydney Formulation Laboratory • Pre-Workout Category
                </span>
              </div>
              <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase tracking-tight">
                8 Authentic Formulations: Ultra-High Stim to Zero-Stim Pumps
              </h3>
              <p className="text-xs text-[#d8d0b5] max-w-2xl font-sans">
                Crawled directly from <strong className="text-white">premiumsupps.net</strong>. Complete spectrum: 500mg caffeine Warrior KING, 400mg Warrior, stimulant-free Night Warrior, pure 1.25g/mL hyper-hydration Liquid Glycerol, single-active amino buffers, and full synergistic training stacks.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-heading font-bold uppercase shrink-0">
              <span className="bg-white/10 text-white px-2.5 py-1 rounded-full border border-white/10">500mg Max Caffeine</span>
              <span className="bg-white/10 text-white px-2.5 py-1 rounded-full border border-white/10">Stim-Free Pump</span>
              <span className="bg-[#d0473e]/30 text-white px-2.5 py-1 rounded-full border border-[#d0473e]/50">Direct From Sydney</span>
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#ebebeb] space-y-3">
            <p className="text-base font-bold text-[#111111]">No products found matching your search.</p>
            <p className="text-xs text-[#666666]">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#d0473e] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenProduct={onOpenProduct}
                onAddToCart={onAddToCart}
                currency={currency}
              />
            ))}
          </div>
        )}

      </main>

      {/* Transparency Matrix Comparison Component */}
      <TransparencyMatrix openModal={openModal} />

      {/* Customer Reviews & Social Proof Component */}
      <CustomerReviews />

      {/* Frequently Asked Questions Component */}
      <StorefrontFAQ openModal={openModal} />

      {/* Featured Promotional Banner: Pure Creatine & Pre-Workout Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbf6e0] rounded-3xl p-8 sm:p-12 border border-[#dfd7b8] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xs">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest bg-[#111111] text-white px-3 py-1 rounded-full">
              Volume Multi-Pack Program
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-[#111111] tracking-tight">
              Stack 3 Tubs and Save 10% With Free Express Delivery
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Order any combination of 3 or more tubs across our raw ingredients, pre-workouts, or creatine range and automatically unlock Tier 3 volume discounts and free domestic Australian shipping.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                const catalogElement = document.getElementById('product-catalog');
                if (catalogElement) catalogElement.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#111111] hover:bg-[#d0473e] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Build Your Stack</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-2xl p-2 shadow-md border border-[#ebe5d0] flex items-center justify-center">
              <img src={PRODUCTS[0].images[0]} alt="Creatine" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-2xl p-2 shadow-md border border-[#ebe5d0] flex items-center justify-center -ml-6 sm:-ml-8 z-10">
              <img src={PRODUCTS[1].images[0]} alt="Warrior" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-2xl p-2 shadow-md border border-[#ebe5d0] flex items-center justify-center -ml-6 sm:-ml-8 z-20">
              <img src={PRODUCTS[2].images[0]} alt="Liquid Glycerol" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Live Dispatch Notification Toast */}
      <LiveSalesToast onOpenProduct={onOpenProduct} />

      {/* Footer */}
      <footer className="bg-[#111111] text-[#fbf6e0] pt-14 pb-10 border-t border-[#333333] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <span className="text-2xl font-bold font-heading text-white uppercase tracking-tight">
                PREMIUM<span className="text-[#d0473e]">SUPPS</span>
              </span>
              <p className="text-xs text-[#d8d0b5] leading-relaxed">
                Straightforward Affordable Performance Nutrition. Pure raw compounds, clean pre-workouts, and third-party laboratory tested quality manufactured in Sydney, Australia.
              </p>
              <div className="pt-2 text-xs text-white/70 flex items-center gap-2">
                <span>🇦🇺</span>
                <span>Direct Warehouse Dispatch, Sydney NSW</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2.5 text-xs">
              <p className="text-white font-bold uppercase tracking-wider text-xs mb-3">
                Catalog Navigation
              </p>
              <p>
                <button onClick={() => setSelectedCategory('all')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Shop All 26 Products
                </button>
              </p>
              <p>
                <button onClick={() => setSelectedCategory('best-seller')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Best Sellers
                </button>
              </p>
              <p>
                <button onClick={() => setSelectedCategory('pre-workouts')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Pre-Workouts
                </button>
              </p>
              <p>
                <button onClick={() => setSelectedCategory('creatine')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Pure Creatine Range
                </button>
              </p>
              <p>
                <button onClick={() => setSelectedCategory('raw-compounds')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Single Raw Active Compounds
                </button>
              </p>
            </div>

            {/* Col 3: Quality & Guarantees */}
            <div className="space-y-2.5 text-xs">
              <p className="text-white font-bold uppercase tracking-wider text-xs mb-3">
                Quality & Guarantees
              </p>
              <p>
                <button onClick={() => openModal('lab-tests')} className="hover:text-[#d0473e] transition-colors cursor-pointer flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>Lab Test Certificates (COA)</span>
                </button>
              </p>
              <p>
                <button onClick={() => openModal('about')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  About Our Brand
                </button>
              </p>
              <p>
                <button onClick={() => openModal('faq')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </p>
              <p>
                <button onClick={() => openModal('refund')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  30-Day Return Policy
                </button>
              </p>
              <p>
                <button onClick={() => openModal('contact')} className="hover:text-[#d0473e] transition-colors cursor-pointer">
                  Contact Support
                </button>
              </p>
            </div>

            {/* Col 4: Newsletter / Dispatch updates */}
            <div className="space-y-3 text-xs">
              <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">
                Dispatch Alert & Restocks
              </p>
              <p className="text-[#d8d0b5] text-[11px]">
                Subscribe for batch release notifications and formula updates. Zero marketing spam.
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  className="bg-white/10 border border-white/20 px-3 py-2 text-xs rounded-l-full text-white placeholder-white/40 focus:outline-hidden focus:border-[#d0473e] flex-1"
                />
                <button 
                  onClick={() => alert('Thank you for subscribing to PremiumSupps restock alerts.')}
                  className="bg-[#d0473e] hover:bg-[#b53a32] text-white px-3 py-2 text-xs font-bold uppercase rounded-r-full cursor-pointer transition-colors"
                >
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Badges */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
            <p>© {new Date().getFullYear()} PremiumSupps (premiumsupps.net). All rights reserved.</p>
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase">
              <span>Shop Pay</span>
              <span>•</span>
              <span>Apple Pay</span>
              <span>•</span>
              <span>Google Pay</span>
              <span>•</span>
              <span>PayPal</span>
              <span>•</span>
              <span>AUD / NZD</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

