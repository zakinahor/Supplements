import React, { useState } from 'react';
import { CartItem } from '../types/store';
import { PRODUCTS, Product } from '../data/catalog';
import { 
  X, Trash2, ArrowRight, Truck, CheckCircle2, ShieldCheck, 
  ShoppingBag, Plus, Sparkles 
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (variantId: number, qty: number) => void;
  onRemoveItem: (variantId: number) => void;
  onClearCart: () => void;
  currency: 'AUD' | 'NZD';
  onAddUpsell: (product: Product) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  currency,
  onAddUpsell
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 150.0; // AUD $150 threshold from reference site

  const subtotal = cartItems.reduce((acc, item) => {
    // tier pricing calculation if present
    const discount = item.tierTubs === 3 ? 0.10 : item.tierTubs === 2 ? 0.05 : 0;
    const itemPrice = item.variant.price * (1 - discount);
    return acc + (itemPrice * item.quantity);
  }, 0);

  const amountRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  // Pick upsell products not already in cart
  const upsellCandidates = PRODUCTS.filter(p => 
    !cartItems.some(ci => ci.product.id === p.id)
  ).slice(0, 2);

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        onClearCart();
        setOrderComplete(false);
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside 
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
          aria-label="Shopping Cart Drawer"
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#ebebeb] flex items-center justify-between bg-[#fbf6e0]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#111111]" />
              <h2 className="text-base font-bold font-heading uppercase text-[#111111] tracking-wide">
                Your Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#111111] hover:text-white flex items-center justify-center text-[#111111] transition-colors cursor-pointer border border-[#e5dec5]"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Dynamic Progress Bar */}
          <div className="bg-[#f7f3e4] px-5 py-3.5 border-b border-[#ebe5d0]">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-1.5">
              {amountRemaining > 0 ? (
                <span className="text-[#111111] flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#d0473e]" />
                  <span>Add <strong className="text-[#d0473e]">${amountRemaining.toFixed(2)} AUD</strong> for Free Shipping</span>
                </span>
              ) : (
                <span className="text-[#2E7D32] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Unlocked FREE Express Shipping!</span>
                </span>
              )}
              <span className="text-[11px] text-[#777777] font-mono">{Math.round(progressPercent)}%</span>
            </div>
            
            {/* Progress Bar Track */}
            <div className="w-full h-2 bg-[#e8e1cb] rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  amountRemaining === 0 ? 'bg-[#2E7D32]' : 'bg-[#d0473e]'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderComplete ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#E8F5E9] text-[#2E7D32] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold font-heading uppercase text-[#111111]">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs text-[#666666] max-w-xs mx-auto">
                  Australian warehouse notification dispatched. You will receive a tracking link via email shortly.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#fbf6e0] rounded-full flex items-center justify-center mx-auto text-[#888888]">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="text-lg font-bold font-heading uppercase text-[#111111]">
                  Your Bag is Currently Empty
                </h3>
                <p className="text-xs text-[#666666] max-w-xs mx-auto">
                  Browse our Australian-made raw compounds, pre-workouts, and pure creatine to fuel your training.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#111111] hover:bg-[#d0473e] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Explore Best Sellers
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const discount = item.tierTubs === 3 ? 0.10 : item.tierTubs === 2 ? 0.05 : 0;
                  const unitPrice = item.variant.price * (1 - discount);
                  const itemTotal = unitPrice * item.quantity;

                  return (
                    <div 
                      key={item.variant.id}
                      className="flex gap-3 p-3 rounded-2xl border border-[#ebebeb] bg-white hover:border-[#dedede] transition-colors"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-20 bg-[#f7f4ea] rounded-xl overflow-hidden shrink-0 p-1 border border-[#ebe5d0] flex items-center justify-center">
                        {item.product.images && item.product.images[0] ? (
                          <img
                            src={item.product.images[0]}
                            alt={item.product.title}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-[9px] font-bold uppercase">{item.product.title.slice(0, 10)}</span>
                        )}
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-heading font-bold text-xs text-[#111111] line-clamp-1">
                              {item.product.title}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.variant.id)}
                              className="text-[#999999] hover:text-[#d0473e] transition-colors p-1 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          <p className="text-[11px] text-[#666666] font-medium">
                            Option: <span className="text-[#111111] font-semibold">{item.variant.title}</span>
                          </p>

                          {item.tierTubs && item.tierTubs > 1 && (
                            <span className="inline-block text-[9px] font-bold text-[#d0473e] bg-[#fbf6e0] px-1.5 py-0.2 rounded-sm border border-[#e8dfc5] mt-0.5">
                              {item.tierTubs} Tubs Bundle ({item.tierTubs === 3 ? '10%' : '5%'} OFF)
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-2 mt-2">
                          {/* Stepper */}
                          <div className="flex items-center border border-[#d8d0b5] rounded-full bg-[#fbf6e0] px-1 py-0.5">
                            <button
                              onClick={() => onUpdateQty(item.variant.id, item.quantity - 1)}
                              className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-[#111111] hover:bg-white cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-[11px] font-bold text-[#111111]">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQty(item.variant.id, item.quantity + 1)}
                              className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-[#111111] hover:bg-white cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-xs font-bold text-[#111111] font-heading">
                              ${itemTotal.toFixed(2)} AUD
                            </p>
                            {discount > 0 && (
                              <p className="text-[9px] text-[#888888] line-through">
                                ${(item.variant.price * item.quantity).toFixed(2)}
                              </p>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}

                {/* In-Cart Quick Recommendations */}
                {upsellCandidates.length > 0 && (
                  <div className="pt-4 border-t border-[#f0f0f0] space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#777777] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#d0473e]" />
                      <span>Recommended Upgrades</span>
                    </p>
                    {upsellCandidates.map(p => (
                      <div key={p.id} className="p-2.5 rounded-xl bg-[#fbf6e0]/50 border border-[#ebe5d0] flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 truncate">
                          <img src={p.images[0]} alt={p.title} className="w-10 h-10 object-contain bg-white rounded-lg p-0.5" />
                          <div className="truncate">
                            <p className="text-xs font-bold text-[#111111] truncate">{p.title}</p>
                            <p className="text-[10px] text-[#666666]">${p.variants[0].price.toFixed(2)} AUD</p>
                          </div>
                        </div>
                        <button
                          onClick={() => onAddUpsell(p)}
                          className="bg-[#111111] hover:bg-[#d0473e] text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full shrink-0 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Drawer Footer / Checkout Actions */}
          {cartItems.length > 0 && !orderComplete && (
            <div className="p-5 border-t border-[#ebebeb] bg-[#fbf6e0]/60 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between text-[#666666]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#111111] text-sm">${subtotal.toFixed(2)} AUD</span>
                </div>
                <div className="flex items-center justify-between text-[#666666]">
                  <span>Estimated Domestic Shipping</span>
                  <span className="font-bold text-[#111111]">
                    {amountRemaining === 0 ? (
                      <span className="text-[#2E7D32]">FREE (Over $150)</span>
                    ) : (
                      '$9.95 AUD'
                    )}
                  </span>
                </div>
                <p className="text-[10px] text-[#888888]">Taxes and regional duties calculated at checkout.</p>
              </div>

              {/* Checkout CTA Button */}
              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#111111] hover:bg-[#d0473e] text-white py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                id="drawer-checkout-btn"
              >
                {isCheckingOut ? (
                  <span>Securing Order Gateway...</span>
                ) : (
                  <>
                    <span>Proceed To Checkout • ${(subtotal + (amountRemaining === 0 ? 0 : 9.95)).toFixed(2)} AUD</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Accelerated Checkout Providers Icons */}
              <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-[#777777] uppercase font-semibold">
                <span>Shop Pay</span>
                <span>•</span>
                <span>Apple Pay</span>
                <span>•</span>
                <span>Google Pay</span>
                <span>•</span>
                <span>PayPal</span>
              </div>
            </div>
          )}

        </aside>
      </div>
    </div>
  );
};
