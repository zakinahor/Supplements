import React from 'react';
import { ShoppingBag, Search, FileText, Store, ShieldCheck, Sparkles } from 'lucide-react';
import { ViewMode, ActiveModal } from '../types/store';

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  cartCount: number;
  cartTotal: number;
  openCart: () => void;
  openModal: (modal: ActiveModal) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCurrency: 'AUD' | 'NZD';
  setSelectedCurrency: (currency: 'AUD' | 'NZD') => void;
  onSelectCategory?: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  cartCount,
  cartTotal,
  openCart,
  openModal,
  searchQuery,
  setSearchQuery,
  selectedCurrency,
  setSelectedCurrency,
  onSelectCategory
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fbf6e0] border-b border-[#ebebeb] shadow-xs">
      {/* Top Animated Announcement Marquee Ticker */}
      <div className="bg-[#111111] text-white py-2 text-[11px] sm:text-xs tracking-wider uppercase font-semibold overflow-hidden border-b border-[#222222] select-none">
        <div className="animate-marquee items-center gap-8 whitespace-nowrap cursor-default">
          {[1, 2].map((loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d0473e] animate-ping"></span>
                <span className="text-[#fbf6e0]">Free Domestic Shipping On Orders Over $150 AUD</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/90">
                <span>⚡</span>
                <span>Order Before 2PM Sydney Time For Same-Day Dispatch</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-[#fbf6e0]">
                <span>🇦🇺</span>
                <span>100% Australian Formulated & Dispatched from Sydney NSW</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-white/90">
                <span>🔬</span>
                <span>Third-Party HPLC Certified &gt;99.5% Purity</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5 text-[#fbf6e0]">
                <span>📦</span>
                <span>Stack 3 Tubs & Save Extra 10% Automatically</span>
              </span>
              <span className="text-white/30">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setViewMode('store')}
              className="text-left group cursor-pointer focus:outline-hidden"
              id="brand-logo-btn"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] font-heading uppercase group-hover:text-[#d0473e] transition-colors">
                  PREMIUM<span className="text-[#d0473e]">SUPPS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#111111] text-white px-2 py-0.5 rounded-full hidden md:inline-flex items-center gap-1">
                  <span>🇦🇺</span> AUS
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-[#444444] uppercase font-medium hidden sm:block">
                Straightforward Affordable Performance Nutrition
              </p>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide uppercase text-[#111111]">
            <button 
              onClick={() => { setViewMode('store'); onSelectCategory && onSelectCategory('all'); }}
              className="hover:text-[#d0473e] transition-colors cursor-pointer py-1 border-b-2 border-transparent hover:border-[#d0473e]"
              id="nav-shop-all"
            >
              Shop All
            </button>
            <button 
              onClick={() => { setViewMode('store'); onSelectCategory && onSelectCategory('best-seller'); }}
              className="hover:text-[#d0473e] transition-colors cursor-pointer flex items-center gap-1 py-1"
              id="nav-best-sellers"
            >
              <span>Best Sellers</span>
              <span className="text-[10px] bg-[#d0473e] text-white px-1.5 py-0.2 rounded-full font-bold">Sale</span>
            </button>
            <button 
              onClick={() => openModal('lab-tests')}
              className="hover:text-[#d0473e] transition-colors cursor-pointer flex items-center gap-1 py-1"
              id="nav-lab-tests"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>Lab Tests</span>
            </button>
            <button 
              onClick={() => openModal('about')}
              className="hover:text-[#d0473e] transition-colors cursor-pointer py-1"
              id="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => openModal('faq')}
              className="hover:text-[#d0473e] transition-colors cursor-pointer py-1"
              id="nav-faqs"
            >
              FAQs
            </button>
          </nav>

          {/* Controls: Spec/Store Mode Switcher & Cart */}
          <div className="flex items-center gap-3">
            
            {/* Hidden internal spec button preserved for programmatic testing */}
            <button
              onClick={() => setViewMode('spec')}
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
              id="mode-spec-btn"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>

            {/* Currency Selector */}
            <div className="hidden sm:flex items-center">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value as 'AUD' | 'NZD')}
                className="text-xs font-bold uppercase bg-transparent text-[#111111] border border-[#d8d0b5] rounded-full px-2.5 py-1.5 cursor-pointer focus:outline-hidden hover:border-[#111111] transition-colors"
                id="currency-select"
                aria-label="Select Currency"
              >
                <option value="AUD">AUD ($)</option>
                <option value="NZD">NZD ($)</option>
              </select>
            </div>

            {/* Cart Drawer Trigger Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-[#111111] hover:bg-[#323232] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
              id="open-cart-drawer-btn"
              aria-label="Open Shopping Cart Drawer"
            >
              <ShoppingBag className="w-4 h-4 text-[#fbf6e0]" />
              <span className="hidden md:inline">Cart</span>
              <span className="bg-[#d0473e] text-white text-[11px] font-bold px-2 py-0.2 rounded-full min-w-[20px] text-center">
                {cartCount}
              </span>
              {cartTotal > 0 && (
                <span className="hidden xl:inline border-l border-white/20 pl-2 text-white/90">
                  ${cartTotal.toFixed(2)}
                </span>
              )}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
