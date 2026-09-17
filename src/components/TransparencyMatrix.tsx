import React from 'react';
import { Check, X, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { ActiveModal } from '../types/store';

interface TransparencyMatrixProps {
  openModal: (modal: ActiveModal) => void;
}

export const TransparencyMatrix: React.FC<TransparencyMatrixProps> = ({ openModal }) => {
  const comparisonRows = [
    {
      feature: '100% Active Compound Purity',
      description: 'Zero maltodextrin, silica, artificial coloring, or hidden cheap bulking agents.',
      premiumSupps: true,
      standardBrands: false,
      psDetail: '100% Pure Active Substance',
      stdDetail: 'Often padded with 20-40% fillers'
    },
    {
      feature: 'Third-Party HPLC Lab Test Published',
      description: 'Publicly downloadable batch Certificates of Analysis (COA) for purity and heavy metals.',
      premiumSupps: true,
      standardBrands: false,
      psDetail: 'Public Batch COA on site (>99.5%)',
      stdDetail: 'Hidden, non-existent, or expired'
    },
    {
      feature: 'Direct-to-Consumer Wholesale Pricing',
      description: 'Formulated and packaged in Sydney with zero middleman distributor or retail shelf markups.',
      premiumSupps: true,
      standardBrands: false,
      psDetail: 'Direct Sydney warehouse pricing',
      stdDetail: '200% - 300% distributor markups'
    },
    {
      feature: '100% Australian Formulated & Packed',
      description: 'Blended and packaged in Sydney NSW under strict food standards code and GMP compliance.',
      premiumSupps: true,
      standardBrands: false,
      psDetail: 'Sydney NSW Facility Dispatch',
      stdDetail: 'Overseas relabeled imports'
    },
    {
      feature: 'Same-Day Dispatch Guarantee',
      description: 'All domestic orders finalized before 2:00 PM Sydney time dispatch that exact afternoon.',
      premiumSupps: true,
      standardBrands: false,
      psDetail: 'Dispatched same day before 2PM',
      stdDetail: '3 to 7 business days handling'
    },
    {
      feature: '30-Day Money-Back Quality Guarantee',
      description: 'If you are not 100% satisfied with the mixability and purity of your first purchase.',
      premiumSupps: true,
      standardBrands: false,
      psDetail: 'Zero-risk refund on first tub',
      stdDetail: 'Store credit or no returns accepted'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#111111] text-[#fbf6e0] rounded-3xl p-6 sm:p-10 border border-[#333333] shadow-xl relative overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d0473e]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fbf6e0]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#d0473e] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest Australian Nutrition</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white uppercase tracking-tight">
            Why Australian Athletes Choose <br className="hidden sm:inline" />
            <span className="text-[#d0473e]">PremiumSupps</span> vs Retail Brands
          </h2>
          <p className="text-xs sm:text-sm text-[#d8d0b5] mt-2.5 leading-relaxed">
            We stripped out the multi-tier distributor cuts, celebrity marketing budgets, and proprietary filler blends to deliver pure, laboratory-verified performance compounds at direct prices.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative z-10 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-4 text-white/70 w-2/5">Quality Metric</th>
                <th className="py-4 px-4 bg-[#d0473e]/20 text-[#fbf6e0] rounded-t-xl border-x border-t border-[#d0473e]/30 w-3/10 text-center">
                  <span className="text-white font-heading font-bold text-sm tracking-normal">PREMIUMSUPPS</span>
                  <span className="block text-[10px] text-[#fbf6e0]/80">Sydney Direct Manufacturer</span>
                </th>
                <th className="py-4 px-4 text-white/50 w-3/10 text-center">
                  <span>Traditional Supplement Stores</span>
                  <span className="block text-[10px] text-white/40">Multi-Tier Retail Distribution</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4">
                    <p className="font-bold text-white uppercase tracking-tight text-xs sm:text-sm font-heading">
                      {row.feature}
                    </p>
                    <p className="text-[11px] text-[#d8d0b5] mt-0.5 max-w-sm">
                      {row.description}
                    </p>
                  </td>

                  {/* PremiumSupps column */}
                  <td className="py-4 px-4 bg-[#d0473e]/10 border-x border-[#d0473e]/20 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2E7D32] text-white mb-1 shadow-xs">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <p className="text-[11px] font-bold text-white">
                      {row.psDetail}
                    </p>
                  </td>

                  {/* Traditional Brands column */}
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-950/60 text-red-400 border border-red-800/40 mb-1">
                      <X className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <p className="text-[11px] text-white/50">
                      {row.stdDetail}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#d8d0b5]">
            <FileText className="w-4 h-4 text-[#d0473e]" />
            <span>Every product has a verified Sydney HPLC Certificate of Analysis</span>
          </div>
          <button
            onClick={() => openModal('lab-tests')}
            className="bg-[#d0473e] hover:bg-[#b53a32] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer flex items-center gap-2 shadow-md active:scale-95"
          >
            <span>Inspect All Lab Certificates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
