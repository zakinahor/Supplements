import React, { useState, useMemo } from 'react';
import { Product, ProductVariant } from '../data/catalog';
import { 
  X, Star, ShieldCheck, Check, Truck, ArrowRight, 
  ChevronDown, ChevronUp, Sparkles, Heart, Share2, Layers
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number, tierTubs?: number) => void;
  currency: 'AUD' | 'NZD';
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currency
}) => {
  if (!product) return null;

  const [selectedVariantId, setSelectedVariantId] = useState<number>(product.variants[0]?.id);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedTier, setSelectedTier] = useState<1 | 2 | 3>(1);
  const [activeAccordion, setActiveAccordion] = useState<string>('desc');
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const currentVariant = useMemo(() => {
    return product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
  }, [product, selectedVariantId]);

  // Tier pricing calculation:
  // 1 Tub = regular price
  // 2 Tubs = 5% off each
  // 3 Tubs = 10% off each
  const tierDiscount = selectedTier === 3 ? 0.10 : selectedTier === 2 ? 0.05 : 0;
  const unitPrice = currentVariant.price * (1 - tierDiscount);
  const totalTierPrice = unitPrice * selectedTier * quantity;

  const handleAdd = () => {
    onAddToCart(product, currentVariant, quantity * selectedTier, selectedTier);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  const toggleAccordion = (key: string) => {
    setActiveAccordion(prev => prev === key ? '' : key);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#ebebeb] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 hover:bg-[#111111] hover:text-white rounded-full flex items-center justify-center text-[#111111] transition-colors shadow-xs cursor-pointer"
          aria-label="Close modal"
          id="close-pdp-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 space-y-4">
              {/* Primary Featured Image */}
              <div className="bg-[#f7f4ea] rounded-2xl aspect-square flex items-center justify-center p-6 relative overflow-hidden border border-[#ebe5d0]">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-[#111111] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {product.badge}
                  </span>
                )}
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[selectedImageIndex] || product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-[#888888] font-bold text-sm uppercase">{product.title}</span>
                )}
              </div>

              {/* Thumbnails row */}
              {product.images && product.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {product.images.slice(0, 6).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 bg-[#f7f4ea] p-1 shrink-0 transition-all cursor-pointer ${
                        selectedImageIndex === idx ? 'border-[#d0473e] scale-105' : 'border-[#ebe5d0] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Australian Made Guarantee Box */}
              <div className="bg-[#fbf6e0] p-4 rounded-xl border border-[#e8dfc5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center text-lg shrink-0">
                  🇦🇺
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#111111] uppercase tracking-wide">Australian Manufactured</p>
                  <p className="text-[#555555]">Direct factory fulfillment in Sydney, NSW with zero intermediary markup.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Buying Box & Specifications */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                
                {/* Review Stars & Type */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#111111]">{product.rating || 4.9}</span>
                    <span className="text-xs text-[#777777]">({product.reviews_count || 142} verified reviews)</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Lab Verified
                  </span>
                </div>

                {/* Product Title & Subtitle */}
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111111] uppercase tracking-tight">
                  {product.title}
                </h2>
                <p className="text-sm text-[#666666] mt-1 font-medium">
                  {product.subtitle || 'No Fillers. No Grit. Just Muscle-Building Power.'}
                </p>

                {/* Pricing Display */}
                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-3xl font-bold font-heading text-[#111111]">
                    ${unitPrice.toFixed(2)}
                  </span>
                  {currentVariant.compare_at_price && (
                    <span className="text-base text-[#888888] line-through">
                      ${currentVariant.compare_at_price.toFixed(2)}
                    </span>
                  )}
                  {selectedTier > 1 && (
                    <span className="bg-[#d0473e] text-white text-xs font-bold uppercase px-2 py-0.5 rounded-full">
                      Bundle {selectedTier === 3 ? '10%' : '5%'} OFF
                    </span>
                  )}
                  <span className="text-xs text-[#888888] uppercase font-bold">{currency} / unit</span>
                </div>

                {/* Benefit Marquee Ticker */}
                <div className="bg-[#fbf6e0] p-3 rounded-xl border border-[#e8dfc5] overflow-hidden my-3">
                  <div className="flex items-center justify-around gap-2 text-xs font-bold text-[#111111] uppercase tracking-wider">
                    {product.features?.map((feat, i) => (
                      <span key={i} className="flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span className="truncate">{feat}</span>
                      </span>
                    )) || (
                      <>
                        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#2E7D32]" /> 100% Pure Active</span>
                        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#2E7D32]" /> Zero Sugar / Zero Fillers</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Variant Options Selector (Chips) */}
                {product.variants.length > 1 && (
                  <div className="my-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                        <span>Select Option: <span className="text-[#d0473e]">{currentVariant.title}</span></span>
                      </label>
                      <span className="text-[11px] text-[#888888] font-mono">SKU: {currentVariant.sku || 'N/A'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariantId(v.id)}
                          className={`text-xs font-bold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                            selectedVariantId === v.id
                              ? 'bg-[#111111] text-white border-[#111111] shadow-xs scale-105'
                              : 'bg-white text-[#111111] border-[#d8d0b5] hover:border-[#111111]'
                          }`}
                        >
                          {v.title} — ${v.price.toFixed(2)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Volume Tier Multi-Pack Bundle Selector */}
                <div className="my-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#d0473e]" />
                    <span>Bundle & Save More</span>
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setSelectedTier(1)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedTier === 1 
                          ? 'border-[#111111] bg-[#fbf6e0] ring-2 ring-[#111111]' 
                          : 'border-[#ebebeb] hover:border-[#cccccc]'
                      }`}
                    >
                      <p className="text-xs font-bold text-[#111111]">1 ITEM</p>
                      <p className="text-[11px] text-[#666666] mt-0.5">${currentVariant.price.toFixed(2)}/ea</p>
                      <span className="text-[9px] text-[#888888] uppercase">Standard</span>
                    </button>

                    <button
                      onClick={() => setSelectedTier(2)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative ${
                        selectedTier === 2 
                          ? 'border-[#111111] bg-[#fbf6e0] ring-2 ring-[#111111]' 
                          : 'border-[#ebebeb] hover:border-[#cccccc]'
                      }`}
                    >
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                        SAVE 5%
                      </span>
                      <p className="text-xs font-bold text-[#111111]">2 ITEMS</p>
                      <p className="text-[11px] text-[#d0473e] font-bold mt-0.5">${(currentVariant.price * 0.95).toFixed(2)}/ea</p>
                      <span className="text-[9px] text-[#666666] uppercase">Popular</span>
                    </button>

                    <button
                      onClick={() => setSelectedTier(3)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative ${
                        selectedTier === 3 
                          ? 'border-[#d0473e] bg-[#fbf6e0] ring-2 ring-[#d0473e]' 
                          : 'border-[#ebebeb] hover:border-[#cccccc]'
                      }`}
                    >
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#d0473e] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                        BEST VALUE
                      </span>
                      <p className="text-xs font-bold text-[#111111]">3 ITEMS</p>
                      <p className="text-[11px] text-[#d0473e] font-bold mt-0.5">${(currentVariant.price * 0.90).toFixed(2)}/ea</p>
                      <span className="text-[9px] text-[#2E7D32] font-bold uppercase">Save 10%</span>
                    </button>
                  </div>
                </div>

                {/* Quantity Controls & Add to Cart */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center border border-[#d8d0b5] rounded-full bg-[#fbf6e0] p-1">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold hover:bg-white transition-colors cursor-pointer text-[#111111]"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-xs text-[#111111]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold hover:bg-white transition-colors cursor-pointer text-[#111111]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 px-6 rounded-full font-bold uppercase tracking-wider text-xs transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 ${
                      addedAnimation
                        ? 'bg-[#2E7D32] text-white scale-98'
                        : 'bg-[#111111] hover:bg-[#d0473e] text-white active:scale-95'
                    }`}
                    id="pdp-modal-add-to-cart-btn"
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added To Cart!</span>
                      </>
                    ) : (
                      <>
                        <span>Add To Cart • ${totalTierPrice.toFixed(2)} AUD</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Same Day Shipping Ticker */}
                <div className="flex items-center gap-2 text-xs text-[#555555] mt-3 font-medium">
                  <Truck className="w-4 h-4 text-[#d0473e]" />
                  <span>Order in next <strong className="text-[#111111]">4 hrs 22 mins</strong> for same-day Sydney dispatch.</span>
                </div>

              </div>

              {/* Accordion Panels for Product Details */}
              <div className="border-t border-[#ebebeb] pt-4 space-y-2">
                
                {/* Description & Overview */}
                <div className="border border-[#ebebeb] rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion('desc')}
                    className="w-full p-3.5 bg-[#fbf6e0]/40 text-left text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between cursor-pointer"
                  >
                    <span>Product Overview & Purpose</span>
                    {activeAccordion === 'desc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'desc' && (
                    <div className="p-4 text-xs text-[#555555] leading-relaxed border-t border-[#ebebeb] space-y-2 bg-white">
                      <p>{product.clean_description || 'High-grade laboratory certified performance supplement engineered without unnecessary binders, artificial colorings, or fillers.'}</p>
                      <p className="font-semibold text-[#111111]">Batch Verification: Independent Australian Certificate of Analysis registered.</p>
                    </div>
                  )}
                </div>

                {/* Lab Test COA Specification */}
                <div className="border border-[#ebebeb] rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion('lab')}
                    className="w-full p-3.5 bg-[#fbf6e0]/40 text-left text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-[#2E7D32]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Certificate Of Analysis (COA)</span>
                    </span>
                    {activeAccordion === 'lab' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'lab' && (
                    <div className="p-4 text-xs text-[#555555] leading-relaxed border-t border-[#ebebeb] bg-white space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#fbf6e0] p-2.5 rounded-lg border border-[#e8dfc5]">
                        <div><span className="font-bold text-[#111111]">Purity Assay:</span> &gt;99.5% Active</div>
                        <div><span className="font-bold text-[#111111]">Heavy Metals:</span> Passed USP &lt;0.1ppm</div>
                        <div><span className="font-bold text-[#111111]">Microbial:</span> Negative / Clean</div>
                        <div><span className="font-bold text-[#111111]">Method:</span> HPLC Certified</div>
                      </div>
                      <p className="text-[11px] text-[#777777]">Certified by independent accredited Australian analytical laboratories.</p>
                    </div>
                  )}
                </div>

                {/* Shipping & Returns */}
                <div className="border border-[#ebebeb] rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full p-3.5 bg-[#fbf6e0]/40 text-left text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between cursor-pointer"
                  >
                    <span>Shipping & 30-Day Guarantee</span>
                    {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'shipping' && (
                    <div className="p-4 text-xs text-[#555555] leading-relaxed border-t border-[#ebebeb] bg-white space-y-1">
                      <p>• <strong>Free Standard Shipping</strong> on all domestic Australian orders over $150 AUD.</p>
                      <p>• <strong>Same-Day Dispatch:</strong> Orders placed before 2:00 PM Sydney time leave warehouse same day.</p>
                      <p>• <strong>30-Day Guarantee:</strong> If unsatisfied, contact admin@premiumsupps.net for a prepaid return authorization.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
