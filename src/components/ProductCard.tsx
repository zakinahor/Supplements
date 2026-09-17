import React, { useState } from 'react';
import { Product, ProductVariant } from '../data/catalog';
import { Star, Plus, ShieldCheck, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenProduct: (product: Product) => void;
  onAddToCart: (product: Product, variant: ProductVariant, qty: number) => void;
  currency: 'AUD' | 'NZD';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenProduct,
  onAddToCart,
  currency
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState<number>(product.variants[0]?.id || 0);
  const [isAddedRecently, setIsAddedRecently] = useState<boolean>(false);

  const currentVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
  const hasMultipleVariants = product.variants.length > 1;
  const discountPercent = currentVariant.compare_at_price 
    ? Math.round(((currentVariant.compare_at_price - currentVariant.price) / currentVariant.compare_at_price) * 100)
    : null;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, currentVariant, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1400);
  };

  return (
    <article 
      className="group bg-white rounded-2xl border border-[#ebebeb] overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
      id={`product-card-${product.id}`}
    >
      {/* Top Image & Badges Container */}
      <div className="relative bg-[#f7f4ea] aspect-square overflow-hidden cursor-pointer" onClick={() => onOpenProduct(product)}>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${
              product.badge.includes('Sale') 
                ? 'bg-[#d0473e] text-white'
                : 'bg-[#111111] text-white'
            }`}>
              {product.badge}
            </span>
          )}
          {discountPercent && discountPercent > 0 && (
            <span className="bg-[#d0473e] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow-xs">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Quality indicator badge */}
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-xs p-1 rounded-full shadow-xs text-[#2E7D32]" title="Third-Party Lab Tested">
          <ShieldCheck className="w-4 h-4" />
        </div>

        {/* Product Image with Secondary Image Swap Animation */}
        <div className="relative w-full h-full flex items-center justify-center">
          {product.images && product.images.length > 0 ? (
            <>
              <img
                src={product.images[0]}
                alt={product.title}
                loading="lazy"
                className={`w-full h-full object-contain p-4 transition-all duration-500 ease-out ${
                  product.images.length > 1 
                    ? 'group-hover:opacity-0 group-hover:scale-105' 
                    : 'group-hover:scale-105'
                }`}
              />
              {product.images.length > 1 && (
                <img
                  src={product.images[1]}
                  alt={`${product.title} alternative view`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none"
                />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#888888] font-bold text-xs uppercase">
              {product.title}
            </div>
          )}
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenProduct(product);
            }}
            className="bg-white hover:bg-[#111111] hover:text-white text-[#111111] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Reviews Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-[#111111]">
              {product.rating || 4.9}
            </span>
            <span className="text-[11px] text-[#777777]">
              ({product.reviews_count || 38})
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onOpenProduct(product)}
            className="font-heading font-bold text-[#111111] text-base hover:text-[#d0473e] transition-colors line-clamp-1 cursor-pointer"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Subtitle / Key Claim */}
          <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
            {product.subtitle || 'Pure Australian formula with zero fillers.'}
          </p>

          {/* Options Bar with Small Add Cart Button */}
          <div className="mt-3 pt-2.5 border-t border-[#f0ede4]">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1 text-[11px] text-[#666666] font-medium truncate">
                <span className="font-bold uppercase tracking-wider text-[10px] text-[#888888]">
                  {hasMultipleVariants ? 'Options:' : 'Option:'}
                </span>
                <span className="text-[#111111] font-semibold truncate max-w-[110px]" title={currentVariant.title}>
                  {currentVariant.title}
                </span>
              </div>

              {/* Simple "Add Cart" small button close to the options bar */}
              <button
                type="button"
                onClick={handleQuickAdd}
                className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer shadow-xs active:scale-95 shrink-0 ${
                  isAddedRecently
                    ? 'bg-[#2E7D32] text-white scale-102'
                    : 'bg-[#111111] hover:bg-[#d0473e] text-white'
                }`}
                id={`add-cart-options-bar-${product.id}`}
                title={`Add ${currentVariant.title} directly to cart`}
                aria-label={`Add ${product.title} (${currentVariant.title}) to cart`}
              >
                {isAddedRecently ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3 h-3" />
                    <span>Add Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Options Bar Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {product.variants.map((v) => {
                const isSelected = v.id === currentVariant.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVariantId(v.id);
                    }}
                    className={`text-[10px] px-2.5 py-0.5 rounded-md border font-medium whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#111111] text-white border-[#111111] font-bold shadow-xs'
                        : 'bg-[#fbf6e0] text-[#555555] border-[#e8dfc5] hover:border-[#111111] hover:text-[#111111]'
                    }`}
                    title={`${v.title} — $${v.price.toFixed(2)}`}
                  >
                    {v.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing & View Details */}
        <div className="pt-3 mt-2.5 border-t border-[#f0f0f0] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold font-heading text-[#111111]">
                ${currentVariant.price.toFixed(2)}
              </span>
              {currentVariant.compare_at_price && (
                <span className="text-xs text-[#888888] line-through">
                  ${currentVariant.compare_at_price.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#888888] uppercase font-semibold">
              {currency} {hasMultipleVariants ? 'selected' : ''}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpenProduct(product)}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#d0473e] bg-[#fbf6e0] hover:bg-[#f0ede4] border border-[#ebe5d0] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            title="View full specs, ingredients & dosage"
          >
            <Eye className="w-3.5 h-3.5 text-[#666666]" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </article>
  );
};
