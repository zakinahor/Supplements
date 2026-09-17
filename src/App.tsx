import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StorefrontView } from './components/StorefrontView';
import { SpecificationView } from './components/SpecificationView';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { LabTestsModal } from './components/LabTestsModal';
import { InfoModal } from './components/InfoModal';
import { Product, ProductVariant, PRODUCTS } from './data/catalog';
import { CartItem, ViewMode, ActiveModal, CategoryFilter } from './types/store';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('store');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('premiumsupps_cart');
      return saved ? JSON.parse(saved) : [
        // Seed default item for instant demo delight
        {
          product: PRODUCTS[0],
          variant: PRODUCTS[0].variants[0],
          quantity: 1,
          tierTubs: 1
        }
      ];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [currency, setCurrency] = useState<'AUD' | 'NZD'>('AUD');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('premiumsupps_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, variant: ProductVariant, quantity: number, tierTubs = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.variant.id === variant.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          tierTubs: tierTubs || updated[existingIndex].tierTubs
        };
        return updated;
      } else {
        return [...prev, { product, variant, quantity, tierTubs }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (variantId: number, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(variantId);
    } else {
      setCartItems(prev => prev.map(item => 
        item.variant.id === variantId ? { ...item, quantity: qty } : item
      ));
    }
  };

  const handleRemoveItem = (variantId: number) => {
    setCartItems(prev => prev.filter(item => item.variant.id !== variantId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => {
    const discount = item.tierTubs === 3 ? 0.10 : item.tierTubs === 2 ? 0.05 : 0;
    const unitPrice = item.variant.price * (1 - discount);
    return acc + (unitPrice * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-[#fbf6e0] text-[#111111] font-sans antialiased flex flex-col selection:bg-[#d0473e] selection:text-white">
      
      {/* Global Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        cartCount={cartCount}
        cartTotal={cartTotal}
        openCart={() => setIsCartOpen(true)}
        openModal={(m) => setActiveModal(m)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCurrency={currency}
        setSelectedCurrency={setCurrency}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat as CategoryFilter);
        }}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {viewMode === 'store' ? (
          <StorefrontView
            onOpenProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p, v, q) => handleAddToCart(p, v, q)}
            openModal={(m) => setActiveModal(m)}
            currency={currency}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        ) : (
          <SpecificationView />
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
        onAddUpsell={(p) => handleAddToCart(p, p.variants[0], 1)}
      />

      {/* Lab Tests Modal (COAs) */}
      <LabTestsModal
        isOpen={activeModal === 'lab-tests'}
        onClose={() => setActiveModal(null)}
      />

      {/* Informational Modals (About, FAQ, Refund, Contact) */}
      <InfoModal
        modalType={activeModal}
        onClose={() => setActiveModal(null)}
      />

    </div>
  );
}
