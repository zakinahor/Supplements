import React from 'react';
import { X, HelpCircle, Info, RotateCcw, Mail, Truck, ShieldCheck, Clock } from 'lucide-react';
import { ActiveModal } from '../types/store';

interface InfoModalProps {
  modalType: ActiveModal;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ modalType, onClose }) => {
  if (!modalType || modalType === 'lab-tests') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#ebebeb] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#ebebeb] bg-[#fbf6e0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {modalType === 'about' && <Info className="w-6 h-6 text-[#d0473e]" />}
            {modalType === 'faq' && <HelpCircle className="w-6 h-6 text-[#111111]" />}
            {modalType === 'refund' && <RotateCcw className="w-6 h-6 text-[#2E7D32]" />}
            {modalType === 'contact' && <Mail className="w-6 h-6 text-[#d0473e]" />}
            
            <div>
              <h2 className="text-xl font-bold font-heading uppercase text-[#111111]">
                {modalType === 'about' && 'About PremiumSupps'}
                {modalType === 'faq' && 'Frequently Asked Questions'}
                {modalType === 'refund' && '30-Day Return & Refund Policy'}
                {modalType === 'contact' && 'Contact Support Desk'}
              </h2>
              <p className="text-xs text-[#555555]">
                {modalType === 'about' && 'Straightforward Affordable Performance Nutrition'}
                {modalType === 'faq' && 'Dispatch guidelines, tracking, and product information'}
                {modalType === 'refund' && 'Our customer satisfaction guarantee'}
                {modalType === 'contact' && 'Direct contact for Australian customer assistance'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#111111] hover:text-white flex items-center justify-center text-[#111111] transition-colors border border-[#d8d0b5] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs sm:text-sm text-[#444444] leading-relaxed">
          
          {/* ABOUT US */}
          {modalType === 'about' && (
            <div className="space-y-4">
              <div className="bg-[#fbf6e0] p-4 rounded-2xl border border-[#e8dfc5]">
                <h3 className="font-heading font-bold text-base text-[#111111] uppercase mb-1">
                  Keep it clean, keep it effective, and keep it honest.
                </h3>
                <p className="text-xs text-[#555555]">
                  PremiumSupps is an Australian supplement company focused on providing affordable, pure, performance-focused products with full transparency and no unnecessary extras.
                </p>
              </div>

              <p>
                From standalone powders like Creatine Monohydrate and Beta Alanine, to complete pre-workouts like Warrior and Night Warrior, our range is designed for those who take their training seriously and expect their supplements to deliver genuine physiological results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#ebebeb]">
                  <h4 className="font-bold text-[#111111] text-xs uppercase mb-1">Direct Manufacturer Model</h4>
                  <p className="text-xs text-[#666666]">We eliminate marketing middlemen, retail distributors, and third-party margins so athletes pay only for pure active ingredients.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#ebebeb]">
                  <h4 className="font-bold text-[#111111] text-xs uppercase mb-1">100% Batch Tested</h4>
                  <p className="text-xs text-[#666666]">Every single raw material is laboratory validated via HPLC with Certificates of Analysis published publicly.</p>
                </div>
              </div>
            </div>
          )}

          {/* FAQS */}
          {modalType === 'faq' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-[#ebebeb] bg-[#fbf6e0]/30 space-y-1">
                <h4 className="font-bold text-[#111111] uppercase text-xs">
                  01. When will my order be dispatched?
                </h4>
                <p className="text-xs text-[#555555]">
                  Order before <strong>2:00 PM Sydney time (AEST/AEDT)</strong> on a business day and we aim to dispatch it the same day. We achieve that on about 9 in 10 orders; the rest leave the next business day. Business days are Monday to Friday, excluding public holidays.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#ebebeb] bg-[#fbf6e0]/30 space-y-1">
                <h4 className="font-bold text-[#111111] uppercase text-xs">
                  02. When will I receive my tracking number?
                </h4>
                <p className="text-xs text-[#555555]">
                  As soon as your package leaves our Sydney warehouse—usually the same afternoon. You will receive an automated tracking link by email. Please check your junk or promotions folder if you cannot locate it.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#ebebeb] bg-[#fbf6e0]/30 space-y-1">
                <h4 className="font-bold text-[#111111] uppercase text-xs">
                  03. How much is shipping in Australia?
                </h4>
                <p className="text-xs text-[#555555]">
                  Standard shipping is <strong>FREE for all orders over $150 AUD</strong>. For orders below $150, standard domestic shipping is a flat rate of $9.95 AUD with express delivery upgrades available at checkout.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#ebebeb] bg-[#fbf6e0]/30 space-y-1">
                <h4 className="font-bold text-[#111111] uppercase text-xs">
                  04. Do you test your ingredients for heavy metals?
                </h4>
                <p className="text-xs text-[#555555]">
                  Yes. Every raw batch is submitted for analytical HPLC assay and USP-standard heavy metal screening (lead, cadmium, mercury, arsenic). All Certificates of Analysis are publicly viewable in our Lab Tests portal.
                </p>
              </div>
            </div>
          )}

          {/* REFUND POLICY */}
          {modalType === 'refund' && (
            <div className="space-y-4">
              <div className="bg-[#fbf6e0] p-4 rounded-xl border border-[#e8dfc5]">
                <p className="font-bold text-[#111111] uppercase text-xs">
                  30-Day Money-Back Satisfaction Guarantee
                </p>
                <p className="text-xs text-[#555555] mt-1">
                  We have a 30-day return policy, which means you have 30 days after receiving your item to request a return or replacement.
                </p>
              </div>

              <p>
                To be eligible for a return, your item must be in the same condition that you received it, with original seal intact, and in its original packaging. You will also need the receipt or order number.
              </p>

              <p>
                To start a return, please contact us at <strong className="text-[#111111]">admin@premiumsupps.net</strong>. If your return is accepted, we will provide you with a return shipping label, as well as instructions on how and where to send your package.
              </p>
            </div>
          )}

          {/* CONTACT */}
          {modalType === 'contact' && (
            <div className="space-y-4">
              <div className="bg-[#fbf6e0] p-4 rounded-xl border border-[#e8dfc5] space-y-2">
                <h3 className="font-heading font-bold text-sm text-[#111111] uppercase">
                  Australian Customer Support Gateway
                </h3>
                <p className="text-xs text-[#555555]">
                  Before reaching out, please review our FAQ section where most questions regarding order tracking and delivery timelines are addressed immediately.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#ebebeb] bg-white space-y-2">
                <p className="text-xs text-[#888888] uppercase font-bold">Email Support Desk</p>
                <p className="text-base font-bold text-[#d0473e] font-mono">admin@premiumsupps.net</p>
                <p className="text-xs text-[#555555]">We respond to all customer inquiries within 24–48 business hours.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#fdfaf2] rounded-xl border border-[#ebe5d0]">
                  <p className="font-bold text-[#111111] flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#d0473e]" /> Dispatch Hours</p>
                  <p className="text-[#666666] mt-0.5">Mon–Fri: 8:00am – 4:00pm AEST</p>
                </div>
                <div className="p-3 bg-[#fdfaf2] rounded-xl border border-[#ebe5d0]">
                  <p className="font-bold text-[#111111] flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#2E7D32]" /> Warehouse Location</p>
                  <p className="text-[#666666] mt-0.5">Sydney Distribution Hub, NSW</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#ebebeb] bg-[#fbf6e0] text-center text-xs">
          <button
            onClick={onClose}
            className="bg-[#111111] hover:bg-[#323232] text-white font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
