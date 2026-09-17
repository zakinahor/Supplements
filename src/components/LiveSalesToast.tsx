import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { PRODUCTS, Product } from '../data/catalog';

interface LiveSalesToastProps {
  onOpenProduct: (product: Product) => void;
}

export const LiveSalesToast: React.FC<LiveSalesToastProps> = ({ onOpenProduct }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [toastIndex, setToastIndex] = useState(0);

  const notifications = [
    {
      location: 'Sydney, NSW',
      time: '2 minutes ago',
      productIndex: 0, // Creatine Monohydrate or Essentials Stack
      action: 'purchased'
    },
    {
      location: 'Melbourne, VIC',
      time: '4 minutes ago',
      productIndex: 1, // Warrior Pre-Workout
      action: 'purchased'
    },
    {
      location: 'Brisbane, QLD',
      time: '7 minutes ago',
      productIndex: 2, // Liquid Glycerol
      action: 'purchased'
    },
    {
      location: 'Gold Coast, QLD',
      time: '11 minutes ago',
      productIndex: 3, // Performance Stack
      action: 'purchased'
    },
    {
      location: 'Perth, WA',
      time: '15 minutes ago',
      productIndex: 4, // Beta Alanine
      action: 'purchased'
    }
  ];

  useEffect(() => {
    if (dismissed) return;

    // Initial show after 3 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    // Interval to cycle every 14 seconds
    const cycleInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setToastIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 800);
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, [dismissed, notifications.length]);

  if (dismissed || !visible) return null;

  const currentNotification = notifications[toastIndex];
  const product = PRODUCTS[currentNotification.productIndex] || PRODUCTS[0];

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#ebe5d0] shadow-xl transition-all duration-500 ease-out transform translate-y-0 opacity-100 flex items-center gap-3">
      {/* Product Image */}
      <div 
        onClick={() => onOpenProduct(product)}
        className="w-12 h-12 rounded-xl bg-[#fbf6e0] p-1 shrink-0 flex items-center justify-center cursor-pointer hover:opacity-90"
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 text-[10px] text-[#777777]">
          <span>🇦🇺</span>
          <span className="font-bold text-[#111111]">{currentNotification.location}</span>
          <span>•</span>
          <span>{currentNotification.time}</span>
        </div>
        <p 
          onClick={() => onOpenProduct(product)}
          className="text-xs font-bold text-[#111111] font-heading line-clamp-1 cursor-pointer hover:text-[#d0473e] transition-colors mt-0.5"
        >
          {product.title}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-[#2E7D32]">
            <ShieldCheck className="w-2.5 h-2.5" />
            <span>Verified Order</span>
          </span>
          <span className="text-[9px] text-[#888888]">• Same-Day Dispatch</span>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => {
          setVisible(false);
          setDismissed(true);
        }}
        className="text-[#999999] hover:text-[#111111] p-1 rounded-full hover:bg-black/5 transition-colors cursor-pointer shrink-0"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
