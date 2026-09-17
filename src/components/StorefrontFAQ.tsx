import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { ActiveModal } from '../types/store';

interface StorefrontFAQProps {
  openModal: (modal: ActiveModal) => void;
}

export const StorefrontFAQ: React.FC<StorefrontFAQProps> = ({ openModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does same-day dispatch before 2:00 PM Sydney time work?',
      a: 'All orders placed before 2:00 PM AEST / AEDT on business days (Monday to Friday) are packed and dispatched directly from our Sydney NSW logistics facility the exact same afternoon. Once dispatched, you receive immediate Australia Post tracking updates via email and SMS.'
    },
    {
      q: 'Where can I inspect third-party HPLC laboratory certificates?',
      a: 'Every single batch of our active raw compounds (including Creatine Monohydrate, Beta-Alanine, and ALCAR) is independently tested by accredited analytical laboratories in Australia. You can view, verify, and download our complete Certificates of Analysis (COA) directly via our online Lab Tests portal.'
    },
    {
      q: 'Why are your prices lower than big commercial supplement brands?',
      a: 'Traditional retail supplement brands incur steep 200% to 300% markups across wholesale distributors, retail store shelf placement fees, and high-paid celebrity athlete endorsements. PremiumSupps manufactures and packages formulations in Sydney and ships directly to end athletes at direct wholesale value.'
    },
    {
      q: 'Can I stack Liquid Glycerol with Warrior Pre-Workout?',
      a: 'Yes! Stacking Liquid Glycerol with Warrior High-Stimulant Pre-Workout is one of our most popular high-performance protocols. Warrior provides neurological drive, caffeine, and beta-alanine, while Liquid Glycerol draws fluids into muscle tissue for maximal cellular volumization and skin-splitting pumps.'
    },
    {
      q: 'What is the 30-Day Money-Back Quality Guarantee?',
      a: 'We stand 100% behind our purity and mixability. If you are not completely satisfied with your first purchase of any unflavoured raw compound or pre-workout formula, simply contact our Sydney support team within 30 days of delivery for a hassle-free refund.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d0473e] mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] uppercase tracking-tight">
          Everything You Need to Know
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] mt-1">
          Direct answers regarding dispatch, formulation testing, and stacking protocols.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#ebe5d0] overflow-hidden shadow-xs transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fffdf7] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-heading font-bold text-sm sm:text-base text-[#111111] uppercase tracking-tight">
                  {faq.q}
                </span>
                <span className={`w-7 h-7 rounded-full bg-[#fbf6e0] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#d0473e]' : 'text-[#666666]'}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#f7f2e4] bg-[#fffdf7]">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-[#666666]">
          Have a technical formulation inquiry?{' '}
          <button
            onClick={() => openModal('contact')}
            className="text-[#d0473e] font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
          >
            <span>Contact our Sydney Laboratory Team</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </p>
      </div>
    </section>
  );
};
