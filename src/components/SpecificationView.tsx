import React, { useState, useMemo } from 'react';
import { SPECIFICATION_SECTIONS, SpecSection } from '../data/specificationData';
import { PRODUCTS, COLLECTIONS, URL_INVENTORY, Product } from '../data/catalog';
import { 
  Search, CheckCircle2, Copy, Download, Layers, ShieldCheck, 
  Database, Palette, Type, Smartphone, Compass, ArrowRight, ExternalLink
} from 'lucide-react';

export const SpecificationView: React.FC = () => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('section-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Variant Matrix state
  const [selectedMatrixProduct, setSelectedMatrixProduct] = useState<number>(PRODUCTS[0].id);

  // URL table search & category
  const [urlSearch, setUrlSearch] = useState<string>('');
  const [urlFilterCat, setUrlFilterCat] = useState<string>('All');

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'cat-1': true,
    'cat-2': true,
    'cat-3': true,
    'des-1': true,
    'des-2': true,
    'des-3': true,
    'cart-1': true,
    'cart-2': true,
    'seo-1': true,
    'seo-2': true,
  });

  const toggleChecklist = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = useMemo(() => {
    const cats = new Set(SPECIFICATION_SECTIONS.map(s => s.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredSections = useMemo(() => {
    return SPECIFICATION_SECTIONS.filter(s => {
      const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
      const matchesSearch = !searchQuery || 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeSection = useMemo(() => {
    return SPECIFICATION_SECTIONS.find(s => s.id === selectedSectionId) || SPECIFICATION_SECTIONS[0];
  }, [selectedSectionId]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exportFullMarkdown = () => {
    let md = `# PremiumSupps (premiumsupps.net) Full Architecture & Implementation Specification\n\n`;
    md += `Generated: ${new Date().toISOString()}\n`;
    md += `Reference Store: https://premiumsupps.net/\n\n`;
    SPECIFICATION_SECTIONS.forEach(s => {
      md += `## Section ${s.num}: ${s.title} (${s.category})\n`;
      md += `> ${s.summary}\n\n`;
      md += `${s.content}\n\n`;
      md += `---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PremiumSupps_Complete_Implementation_Specification.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportCatalogJson = () => {
    const dataStr = JSON.stringify(PRODUCTS, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'premiumsupps_catalog_26_products.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filtered URLs for Section 2
  const filteredUrls = useMemo(() => {
    return URL_INVENTORY.filter(u => {
      const matchCat = urlFilterCat === 'All' || u.category === urlFilterCat;
      const matchQuery = !urlSearch || 
        u.url.toLowerCase().includes(urlSearch.toLowerCase()) ||
        u.title.toLowerCase().includes(urlSearch.toLowerCase()) ||
        u.purpose.toLowerCase().includes(urlSearch.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [urlFilterCat, urlSearch]);

  const urlCategories = useMemo(() => {
    const setCats = new Set(URL_INVENTORY.map(u => u.category));
    return ['All', ...Array.from(setCats)];
  }, []);

  const matrixProduct = useMemo(() => {
    return PRODUCTS.find(p => p.id === selectedMatrixProduct) || PRODUCTS[0];
  }, [selectedMatrixProduct]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Top Hero Banner & Audit Executive Summary */}
      <div className="bg-[#111111] text-[#fbf6e0] rounded-3xl p-6 sm:p-10 mb-8 border border-[#333333] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d0473e]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d0473e] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full 24-Section Implementation Specification</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight uppercase">
              Reverse-Engineering Audit & System Blueprint
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#d8d0b5] max-w-2xl leading-relaxed">
              Exhaustive technical inspection of <span className="text-white font-bold underline decoration-[#d0473e]">https://premiumsupps.net/</span>. Complete catalog extraction (26 products, 99 variants), UX/UI design system tokens, animation dynamics, and engineering specifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={exportFullMarkdown}
              className="flex items-center gap-2 bg-[#d0473e] hover:bg-[#b53a32] text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-full transition-all cursor-pointer shadow-md"
              id="export-md-spec-btn"
            >
              <Download className="w-4 h-4" />
              <span>Export Full Spec (.MD)</span>
            </button>
            <button
              onClick={exportCatalogJson}
              className="flex items-center gap-2 bg-[#222222] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-full transition-all cursor-pointer border border-white/20"
              id="export-catalog-json-btn"
            >
              <Database className="w-4 h-4" />
              <span>Export Catalog (.JSON)</span>
            </button>
          </div>
        </div>

        {/* Live Key Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-8 pt-6 border-t border-white/15 text-center">
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="text-2xl font-bold font-heading text-white">26</p>
            <p className="text-[11px] uppercase tracking-wider text-[#d8d0b5] font-semibold">Total Products</p>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="text-2xl font-bold font-heading text-[#d0473e]">99</p>
            <p className="text-[11px] uppercase tracking-wider text-[#d8d0b5] font-semibold">SKU Variants</p>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="text-2xl font-bold font-heading text-white">15</p>
            <p className="text-[11px] uppercase tracking-wider text-[#d8d0b5] font-semibold">Collections</p>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="text-2xl font-bold font-heading text-white">79</p>
            <p className="text-[11px] uppercase tracking-wider text-[#d8d0b5] font-semibold">Indexed URLs</p>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="text-2xl font-bold font-heading text-[#2E7D32]">16</p>
            <p className="text-[11px] uppercase tracking-wider text-[#d8d0b5] font-semibold">Lab Tests COA</p>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="text-2xl font-bold font-heading text-white">$150</p>
            <p className="text-[11px] uppercase tracking-wider text-[#d8d0b5] font-semibold">Free Ship AUD</p>
          </div>
        </div>
      </div>

      {/* Main Spec Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Section Navigator */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="sticky top-28 bg-[#f5efe0] rounded-2xl p-4 border border-[#e5dec5] shadow-xs space-y-4">
            
            {/* Search filter in spec */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search all 24 sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-full border border-[#d8d0b5] text-[#111111] focus:outline-hidden focus:border-[#d0473e]"
                id="spec-search-input"
              />
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#111111] text-white' 
                      : 'bg-[#ebe5d2] text-[#555555] hover:bg-[#ded7c0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Section Item List */}
            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {filteredSections.map(sec => {
                const isActive = sec.id === selectedSectionId;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isActive 
                        ? 'bg-[#d0473e] text-white shadow-xs font-bold' 
                        : 'hover:bg-[#ebe4cf] text-[#333333]'
                    }`}
                    id={`select-${sec.id}`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isActive ? 'bg-white text-[#d0473e]' : 'bg-[#ded7c0] text-[#111111]'
                      }`}>
                        {sec.num}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'opacity-100' : 'opacity-30'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#e2daca] text-[11px] text-[#777777] text-center">
              Showing {filteredSections.length} of 24 specifications
            </div>
          </div>
        </div>

        {/* Right Content Area: Detailed Section Presentation & Interactive Tools */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          
          {/* Section Header Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ebebeb] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#f0f0f0] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest bg-[#fbf6e0] text-[#d0473e] px-2.5 py-1 rounded-full border border-[#f0e8cc]">
                  Section {activeSection.num} of 24
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                  {activeSection.category}
                </span>
              </div>
              <button
                onClick={() => handleCopy(activeSection.content, activeSection.id)}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#555555] hover:text-[#111111] bg-[#f5f5f5] hover:bg-[#ebebeb] px-3 py-1.5 rounded-full cursor-pointer transition-colors"
                id="copy-section-content-btn"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCode === activeSection.id ? 'Copied!' : 'Copy Markdown'}</span>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111111] uppercase tracking-tight mb-2">
              {activeSection.title}
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6 font-medium">
              {activeSection.summary}
            </p>

            {/* Markdown Content rendering */}
            <div className="prose prose-sm max-w-none text-[#444444] space-y-4">
              <div className="whitespace-pre-line font-sans text-sm leading-relaxed">
                {activeSection.content}
              </div>
            </div>
          </div>

          {/* DYNAMIC INTERACTIVE COMPONENT MODULES BASED ON SELECTED SECTION */}

          {/* If Section 2: Complete URL Inventory Table Explorer */}
          {activeSection.num === 2 && (
            <div className="bg-white rounded-2xl p-6 border border-[#ebebeb] shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold font-heading uppercase text-[#111111]">
                    Interactive URL Inventory (79 URLs)
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Filter by page category or search by URL slug to inspect response metadata.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search URL or purpose..."
                    value={urlSearch}
                    onChange={(e) => setUrlSearch(e.target.value)}
                    className="text-xs px-3 py-1.5 border border-[#d8d0b5] rounded-full bg-[#fbf6e0]/40 text-[#111111] focus:outline-hidden"
                  />
                  <select
                    value={urlFilterCat}
                    onChange={(e) => setUrlFilterCat(e.target.value)}
                    className="text-xs px-3 py-1.5 border border-[#d8d0b5] rounded-full bg-[#fbf6e0]/40 text-[#111111] font-medium"
                  >
                    {urlCategories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto border border-[#f0f0f0] rounded-xl max-h-96 overflow-y-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#fbf6e0] text-[#111111] uppercase font-bold sticky top-0 border-b border-[#e5dec5]">
                    <tr>
                      <th className="p-3">#</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Title / Handle</th>
                      <th className="p-3">URL</th>
                      <th className="p-3">Strategic Purpose</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f5f5f5]">
                    {filteredUrls.map((u, idx) => (
                      <tr key={u.url} className="hover:bg-[#fbf6e0]/30 transition-colors">
                        <td className="p-3 font-mono text-[#888888]">{idx + 1}</td>
                        <td className="p-3">
                          <span className="bg-[#f0e8cc] text-[#111111] px-2 py-0.5 rounded-full font-bold text-[10px]">
                            {u.category}
                          </span>
                        </td>
                        <td className="p-3 font-semibold text-[#111111]">{u.title}</td>
                        <td className="p-3 font-mono text-[11px] text-[#d0473e] truncate max-w-[200px]">
                          <a href={u.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                            <span>{u.url.replace('https://premiumsupps.net', '')}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </a>
                        </td>
                        <td className="p-3 text-[#555555] max-w-[220px]">{u.purpose}</td>
                        <td className="p-3">
                          <span className="text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full font-bold text-[10px]">
                            200 OK
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* If Section 4: Interactive Product Variation Matrix Explorer */}
          {(activeSection.num === 4 || activeSection.num === 3) && (
            <div className="bg-white rounded-2xl p-6 border border-[#ebebeb] shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold font-heading uppercase text-[#111111]">
                    Live Product Variation Matrix Explorer
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Select any of the 26 products to inspect its underlying variant matrix, options, and SKUs.
                  </p>
                </div>
                <select
                  value={selectedMatrixProduct}
                  onChange={(e) => setSelectedMatrixProduct(Number(e.target.value))}
                  className="text-xs font-bold px-3 py-2 border border-[#d8d0b5] rounded-full bg-[#fbf6e0] text-[#111111]"
                  id="matrix-product-select"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.variants.length} variants)
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Product Summary */}
              <div className="bg-[#fbf6e0]/50 p-4 rounded-xl border border-[#e8dfc5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold font-heading text-[#111111] uppercase">
                    {matrixProduct.title}
                  </h4>
                  <p className="text-xs text-[#555555]">{matrixProduct.subtitle}</p>
                  <p className="text-xs text-[#888888] mt-1 font-mono">Handle: {matrixProduct.handle} | Type: {matrixProduct.product_type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-[#888888] uppercase font-bold">Price Range</p>
                    <p className="text-lg font-bold text-[#111111]">
                      ${matrixProduct.min_price.toFixed(2)} {matrixProduct.min_price !== matrixProduct.max_price && `– $${matrixProduct.max_price.toFixed(2)}`} AUD
                    </p>
                  </div>
                </div>
              </div>

              {/* Variants Table */}
              <div className="overflow-x-auto border border-[#f0f0f0] rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#111111] text-white uppercase font-bold">
                    <tr>
                      <th className="p-3">Variant ID</th>
                      <th className="p-3">Variant Title / Combination</th>
                      <th className="p-3">SKU</th>
                      <th className="p-3">Price (AUD)</th>
                      <th className="p-3">Compare Price</th>
                      <th className="p-3">Weight (g)</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f5f5f5]">
                    {matrixProduct.variants.map((v) => (
                      <tr key={v.id} className="hover:bg-[#fbf6e0]/30 transition-colors">
                        <td className="p-3 font-mono text-[11px] text-[#888888]">{v.id}</td>
                        <td className="p-3 font-bold text-[#111111]">
                          {v.title}
                          {v.option1 && <span className="ml-1 text-[#d0473e] text-[11px]">({v.option1})</span>}
                          {v.option2 && <span className="ml-1 text-[#2E7D32] text-[11px]">[{v.option2}]</span>}
                        </td>
                        <td className="p-3 font-mono text-[11px] text-[#555555]">{v.sku || 'N/A'}</td>
                        <td className="p-3 font-bold text-[#111111]">${v.price.toFixed(2)}</td>
                        <td className="p-3 text-[#888888] line-through">
                          {v.compare_at_price ? `$${v.compare_at_price.toFixed(2)}` : '—'}
                        </td>
                        <td className="p-3 text-[#666666]">{v.weight_grams ? `${v.weight_grams}g` : '—'}</td>
                        <td className="p-3">
                          <span className="text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full font-bold text-[10px]">
                            In Stock
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* If Section 8, 9, or 10: Interactive UI/UX Design System & Color Swatches */}
          {(activeSection.num === 8 || activeSection.num === 9 || activeSection.num === 10) && (
            <div className="bg-white rounded-2xl p-6 border border-[#ebebeb] shadow-xs space-y-6">
              <h3 className="text-lg font-bold font-heading uppercase text-[#111111]">
                Interactive Design System Playground
              </h3>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-[#ebebeb] bg-[#fbf6e0]">
                  <div className="h-16 rounded-lg bg-[#fbf6e0] border border-[#d8d0b5] mb-2 flex items-center justify-center font-bold text-[#111111] text-xs">
                    #FBF6E0
                  </div>
                  <p className="font-bold text-xs text-[#111111]">Canvas Background</p>
                  <p className="text-[11px] text-[#666666]">Warm Australian Ochre</p>
                </div>

                <div className="p-4 rounded-xl border border-[#ebebeb] bg-white">
                  <div className="h-16 rounded-lg bg-[#d0473e] mb-2 flex items-center justify-center font-bold text-white text-xs">
                    #D0473E
                  </div>
                  <p className="font-bold text-xs text-[#111111]">Primary Brand Accent</p>
                  <p className="text-[11px] text-[#666666]">Australian Crimson</p>
                </div>

                <div className="p-4 rounded-xl border border-[#ebebeb] bg-white">
                  <div className="h-16 rounded-lg bg-[#111111] mb-2 flex items-center justify-center font-bold text-white text-xs">
                    #111111
                  </div>
                  <p className="font-bold text-xs text-[#111111]">Deep Obsidian</p>
                  <p className="text-[11px] text-[#666666]">Headings & CTAs</p>
                </div>

                <div className="p-4 rounded-xl border border-[#ebebeb] bg-white">
                  <div className="h-16 rounded-lg bg-[#444444] mb-2 flex items-center justify-center font-bold text-white text-xs">
                    #444444
                  </div>
                  <p className="font-bold text-xs text-[#111111]">Charcoal Slate</p>
                  <p className="text-[11px] text-[#666666]">High Legibility Body</p>
                </div>
              </div>

              {/* Live Button & Pill Styles Preview */}
              <div className="p-4 bg-[#fbf6e0] rounded-xl border border-[#e8dfc5] space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Component Geometry: 30px Pill Radius Standard
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="bg-[#111111] hover:bg-[#323232] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer">
                    Primary CTA Button (30px)
                  </button>
                  <button className="bg-[#d0473e] hover:bg-[#b53a32] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer">
                    Accent Action (30px)
                  </button>
                  <span className="bg-[#111111] text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full">
                    Best Seller Badge
                  </span>
                  <span className="bg-[#d0473e] text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full">
                    Sale -30%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* If Section 24: Interactive 50-Point Implementation QA Checklist */}
          {activeSection.num === 24 && (
            <div className="bg-white rounded-2xl p-6 border border-[#ebebeb] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading uppercase text-[#111111]">
                    Interactive Developer Verification Checklist
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Click items to toggle completion as you build your implementation.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#d0473e] bg-[#fbf6e0] px-3 py-1 rounded-full border border-[#e8dfc5]">
                    {Object.values(checkedItems).filter(Boolean).length} / 10 Key Milestones Verified
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {[
                  { id: 'cat-1', title: 'All 26 products mapped with accurate descriptions, SKUs, and options' },
                  { id: 'cat-2', title: 'All 99 variants configured with independent prices and compare-at prices' },
                  { id: 'cat-3', title: 'Multi-flavor stack matrix correctly generates variant drop-downs or chips' },
                  { id: 'des-1', title: 'Exact color tokens implemented (#FBF6E0 canvas, #D0473E crimson, #111111 obsidian)' },
                  { id: 'des-2', title: 'Typography matches: Instrument Sans for headings/buttons, Jost for body text' },
                  { id: 'des-3', title: '30px pill border-radius applied to all CTAs, chips, and inputs' },
                  { id: 'cart-1', title: 'Cart drawer slides in from right with backdrop dimming' },
                  { id: 'cart-2', title: 'Free shipping progress meter calculates remaining amount to $150.00 AUD' },
                  { id: 'seo-1', title: 'Semantic HTML5 tags and JSON-LD Product/Organization schemas configured' },
                  { id: 'seo-2', title: 'Images set to loading="lazy" except hero image with fetchpriority="high"' }
                ].map(item => (
                  <label 
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[#ebebeb] hover:bg-[#fbf6e0]/30 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleChecklist(item.id)}
                      className="w-4 h-4 rounded text-[#d0473e] accent-[#d0473e] cursor-pointer"
                    />
                    <span className={`text-xs font-medium ${checkedItems[item.id] ? 'line-through text-[#888888]' : 'text-[#111111]'}`}>
                      {item.title}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
