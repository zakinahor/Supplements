import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, FileText, Search, Download, ExternalLink } from 'lucide-react';

interface LabTestsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LabCompound {
  name: string;
  category: string;
  batch: string;
  purity: string;
  heavyMetals: string;
  microbial: string;
  method: string;
  date: string;
}

const LAB_COMPOUNDS: LabCompound[] = [
  { name: 'Creatine Monohydrate', category: 'Cellular Energy', batch: 'CM-2026-084', purity: '99.8% Active', heavyMetals: 'Passed (<0.05 ppm Pb, Cd, Hg)', microbial: 'Negative / USP Compliant', method: 'HPLC-UV', date: 'June 2026' },
  { name: 'Beta Alanine', category: 'Endurance & Carnosine', batch: 'BA-2026-112', purity: '99.6% Active', heavyMetals: 'Passed (<0.02 ppm)', microbial: 'Negative / USP Compliant', method: 'HPLC', date: 'May 2026' },
  { name: 'Taurine', category: 'Hydration & Osmolyte', batch: 'TAU-2026-095', purity: '99.9% Active', heavyMetals: 'Passed (<0.01 ppm)', microbial: 'Negative / USP Compliant', method: 'Titration / HPLC', date: 'June 2026' },
  { name: 'Methylene Blue (USP Grade)', category: 'Mitochondrial / Nootropic', batch: 'MB-2026-041', purity: '99.4% USP Standard', heavyMetals: 'Passed USP Assay', microbial: 'Sterile 0.22um Filtered', method: 'Spectrophotometry', date: 'April 2026' },
  { name: 'L-Citrulline', category: 'Nitric Oxide', batch: 'CIT-2026-078', purity: '99.5% Active', heavyMetals: 'Passed (<0.03 ppm)', microbial: 'Negative / Clean', method: 'HPLC', date: 'May 2026' },
  { name: 'Alpha GPC (50%)', category: 'Choline / Focus', batch: 'AGPC-2026-033', purity: '51.2% Active Choline', heavyMetals: 'Passed (<0.05 ppm)', microbial: 'Negative', method: 'HPLC', date: 'March 2026' },
  { name: 'Acetyl-L-Carnitine HCL', category: 'Mitochondrial Fat Oxidation', batch: 'ALC-2026-056', purity: '99.7% Active', heavyMetals: 'Passed (<0.02 ppm)', microbial: 'Negative', method: 'HPLC-UV', date: 'May 2026' },
  { name: 'L-Theanine', category: 'Alpha Wave Relaxation', batch: 'THE-2026-062', purity: '99.8% Active', heavyMetals: 'Passed (<0.01 ppm)', microbial: 'Negative', method: 'HPLC', date: 'April 2026' },
  { name: 'Betaine Anhydrous', category: 'Methyl Donor / Power', batch: 'BET-2026-089', purity: '99.5% Active', heavyMetals: 'Passed (<0.04 ppm)', microbial: 'Negative', method: 'Titration', date: 'June 2026' },
  { name: 'Huperzine-A (1%)', category: 'Acetylcholinesterase Inhibitor', batch: 'HUP-2026-019', purity: '1.08% Active Alkaloid', heavyMetals: 'Passed (<0.02 ppm)', microbial: 'Negative', method: 'HPLC', date: 'Feb 2026' },
  { name: 'L-Glutamine', category: 'Gut Barrier & Recovery', batch: 'GLU-2026-104', purity: '99.7% Active', heavyMetals: 'Passed (<0.02 ppm)', microbial: 'Negative', method: 'HPLC', date: 'June 2026' },
  { name: 'L-Carnitine Tartrate', category: 'Recovery & Androgen Receptor', batch: 'LCT-2026-047', purity: '99.3% Active', heavyMetals: 'Passed (<0.03 ppm)', microbial: 'Negative', method: 'HPLC', date: 'March 2026' },
  { name: 'Synephrine Hydrochloride', category: 'Metabolic & Beta-3 Adrenergic', batch: 'SYN-2026-028', purity: '99.2% Active', heavyMetals: 'Passed (<0.01 ppm)', microbial: 'Negative', method: 'HPLC', date: 'Feb 2026' },
  { name: 'Walnut Extract (Juglans Regia)', category: 'CNS Stimulant', batch: 'WAL-2026-015', purity: 'Standardized 10:1', heavyMetals: 'Passed (<0.05 ppm)', microbial: 'Negative', method: 'TLC / HPLC', date: 'Jan 2026' },
  { name: 'L-Ornithine Hydrochloride', category: 'Ammonia Clearance', batch: 'ORN-2026-037', purity: '99.4% Active', heavyMetals: 'Passed (<0.02 ppm)', microbial: 'Negative', method: 'HPLC', date: 'March 2026' },
  { name: 'Acesulfame Potassium & Sucralose', category: 'Flavor Stabilization', batch: 'SWT-2026-003', purity: '99.9% Food Chemical Codex', heavyMetals: 'Passed FCC Standard', microbial: 'Negative', method: 'HPLC', date: 'Jan 2026' }
];

export const LabTestsModal: React.FC<LabTestsModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState<string>('');
  const [selectedCompound, setSelectedCompound] = useState<LabCompound | null>(null);

  if (!isOpen) return null;

  const filtered = LAB_COMPOUNDS.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase()) ||
    c.batch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#ebebeb] max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#ebebeb] bg-[#fbf6e0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2E7D32] text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading uppercase text-[#111111]">
                Third-Party Laboratory Test Certificates (COA)
              </h2>
              <p className="text-xs text-[#555555]">
                Independent Australian analytical testing for every active ingredient used in PremiumSupps formulations.
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

        {/* Search bar */}
        <div className="p-4 border-b border-[#ebebeb] bg-[#fdfaf2] flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by ingredient or batch ID (e.g. Creatine, Taurine, BA-2026)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-full border border-[#d8d0b5] text-[#111111] focus:outline-hidden focus:border-[#d0473e]"
            />
          </div>
          <span className="text-xs font-bold text-[#2E7D32] bg-[#E8F5E9] px-3 py-1.5 rounded-full shrink-0">
            16 / 16 Compounds Certified
          </span>
        </div>

        {/* Table of Compounds */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="overflow-x-auto border border-[#ebebeb] rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#111111] text-white uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3">Compound Name</th>
                  <th className="p-3">Functional Role</th>
                  <th className="p-3">Batch Number</th>
                  <th className="p-3">Assay Purity</th>
                  <th className="p-3">Heavy Metals</th>
                  <th className="p-3">Method</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {filtered.map((item) => (
                  <tr key={item.name} className="hover:bg-[#fbf6e0]/40 transition-colors">
                    <td className="p-3 font-bold text-[#111111]">
                      {item.name}
                    </td>
                    <td className="p-3 text-[#555555]">{item.category}</td>
                    <td className="p-3 font-mono text-[11px] text-[#d0473e] font-semibold">{item.batch}</td>
                    <td className="p-3 font-bold text-[#2E7D32]">{item.purity}</td>
                    <td className="p-3 text-[#555555]">{item.heavyMetals}</td>
                    <td className="p-3 font-mono text-[11px] text-[#777777]">{item.method}</td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedCompound(item)}
                        className="bg-[#111111] hover:bg-[#d0473e] text-white text-[10px] font-bold uppercase px-2.5 py-1.5 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <FileText className="w-3 h-3" />
                        <span>View COA</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Certificate Detail Modal view when clicked */}
          {selectedCompound && (
            <div className="mt-6 p-5 rounded-2xl bg-[#fbf6e0] border-2 border-[#2E7D32]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#e5dec5] pb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                  <h4 className="font-heading font-bold text-sm text-[#111111] uppercase">
                    Official Certificate of Analysis: {selectedCompound.name}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedCompound(null)}
                  className="text-xs font-bold text-[#555555] hover:text-[#111111] cursor-pointer"
                >
                  Close Certificate
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#ebebeb]">
                  <p className="text-[10px] uppercase text-[#888888] font-bold">Tested Purity</p>
                  <p className="text-sm font-bold text-[#2E7D32] mt-0.5">{selectedCompound.purity}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#ebebeb]">
                  <p className="text-[10px] uppercase text-[#888888] font-bold">Batch ID</p>
                  <p className="text-sm font-bold font-mono text-[#111111] mt-0.5">{selectedCompound.batch}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#ebebeb]">
                  <p className="text-[10px] uppercase text-[#888888] font-bold">Test Date</p>
                  <p className="text-sm font-bold text-[#111111] mt-0.5">{selectedCompound.date}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#ebebeb]">
                  <p className="text-[10px] uppercase text-[#888888] font-bold">Analytical Method</p>
                  <p className="text-sm font-bold text-[#111111] mt-0.5">{selectedCompound.method}</p>
                </div>
              </div>

              <p className="text-[11px] text-[#666666] leading-relaxed">
                Analytical Confirmation: Tested in accordance with Australian Good Manufacturing Practice (GMP) standards. Certified free of unauthorized adulterants, banned athletic stimulants, and heavy metals exceeding therapeutic pharmacopeial limits.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#ebebeb] bg-[#fbf6e0] text-center text-xs text-[#555555]">
          <span>Full physical batch records and lab report PDF files available upon request to </span>
          <strong className="text-[#111111]">admin@premiumsupps.net</strong>
        </div>
      </div>
    </div>
  );
};
