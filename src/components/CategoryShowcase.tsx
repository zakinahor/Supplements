import React from 'react';
import { ArrowRight, Sparkles, Zap, Flame, ShieldCheck, Layers, Droplet } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';
import { CategoryFilter } from '../types/store';

interface CategoryShowcaseProps {
  selectedCategory: CategoryFilter;
  onSelectCategory: (cat: CategoryFilter) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const creatineImg = PRODUCTS.find(p => p.tags.includes('Creatine') || p.handle.includes('creatine'))?.images[0] || PRODUCTS[0]?.images[0];
  const preImg = PRODUCTS.find(p => p.product_type === 'Pre-Workout' || p.handle.includes('warrior'))?.images[0] || PRODUCTS[1]?.images[0];
  const stackImg = PRODUCTS.find(p => p.handle.includes('stack'))?.images[0] || PRODUCTS[2]?.images[0];
  const rawImg = PRODUCTS.find(p => p.handle.includes('beta-alanine') || p.handle.includes('glutamine'))?.images[0] || PRODUCTS[3]?.images[0];
  const glycerolImg = PRODUCTS.find(p => p.handle.includes('glycerol'))?.images[0] || PRODUCTS[0]?.images[0];
  const shilajitImg = PRODUCTS.find(p => p.handle.includes('shilajit'))?.images[0] || PRODUCTS[4]?.images[0];

  const categories: Array<{
    id: CategoryFilter;
    title: string;
    subtitle: string;
    count: string;
    tag: string;
    image: string;
    icon: any;
  }> = [
    {
      id: 'creatine',
      title: 'Creatine Range',
      subtitle: '200-Mesh Micronized Powder',
      count: '5 Products',
      tag: 'Best Seller',
      image: creatineImg,
      icon: Sparkles
    },
    {
      id: 'pre-workouts',
      title: 'Pre-Workouts',
      subtitle: 'High-Stim & Non-Stim Formulas',
      count: '8 Formulations',
      tag: 'Clinically Dosed',
      image: preImg,
      icon: Zap
    },
    {
      id: 'stacks',
      title: 'Synergistic Stacks',
      subtitle: 'Bundled Protocols & Savings',
      count: '6 Stacks',
      tag: 'Save up to 20%',
      image: stackImg,
      icon: Layers
    },
    {
      id: 'raw-compounds',
      title: 'Raw Actives',
      subtitle: 'Single Pure Unflavoured Compounds',
      count: '8 Actives',
      tag: '100% Pure',
      image: rawImg,
      icon: ShieldCheck
    },
    {
      id: 'all',
      title: 'Liquid Glycerol',
      subtitle: 'Hyper-Hydration Pump Liquid',
      count: 'Flagship SKU',
      tag: 'Water-Soluble',
      image: glycerolImg,
      icon: Droplet
    },
    {
      id: 'health',
      title: 'Health & Shilajit',
      subtitle: 'Resin & Cellular Vitality',
      count: 'Pure Origin',
      tag: 'Laboratory Tested',
      image: shilajitImg,
      icon: Flame
    }
  ];

  const handleCategoryClick = (id: CategoryFilter) => {
    onSelectCategory(id);
    const catalogElement = document.getElementById('product-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#d0473e] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d0473e] animate-ping"></span>
            <span>Explore Collections</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#111111] uppercase tracking-tight">
            Shop By Formulation Category
          </h2>
        </div>
        <button
          onClick={() => handleCategoryClick('all')}
          className="text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#d0473e] flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>View All (26)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of Category Cards with Hover Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`group relative bg-white rounded-2xl p-3 sm:p-4 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 ${
                isSelected
                  ? 'border-[#d0473e] ring-2 ring-[#d0473e]/20 bg-[#fffdfa]'
                  : 'border-[#ebe5d0] hover:border-[#d0473e]'
              }`}
            >
              {/* Category Tag */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-[#fbf6e0] text-[#111111] px-2 py-0.5 rounded-full">
                  {cat.tag}
                </span>
                <Icon className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-[#d0473e]' : 'text-[#888888] group-hover:text-[#d0473e]'}`} />
              </div>

              {/* Product Thumbnail with Hover Zoom */}
              <div className="my-2 h-20 sm:h-24 w-full flex items-center justify-center relative">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 ease-out"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#fbf6e0] flex items-center justify-center text-xs font-bold">
                    PS
                  </div>
                )}
              </div>

              {/* Title and Count */}
              <div className="z-10 text-center">
                <h3 className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-tight line-clamp-1 transition-colors ${
                  isSelected ? 'text-[#d0473e]' : 'text-[#111111] group-hover:text-[#d0473e]'
                }`}>
                  {cat.title}
                </h3>
                <p className="text-[10px] text-[#777777] mt-0.5">
                  {cat.count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
