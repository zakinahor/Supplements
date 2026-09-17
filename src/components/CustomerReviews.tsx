import React, { useState } from 'react';
import { Star, ShieldCheck, ThumbsUp, ArrowRight, ArrowLeft } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'creatine' | 'warrior' | 'glycerol'>('all');

  const reviews = [
    {
      id: 1,
      name: 'Lachlan M.',
      location: 'Sydney, NSW',
      product: 'Micronised Creatine Monohydrate (1kg)',
      category: 'creatine',
      rating: 5,
      date: '3 days ago',
      title: 'Ultra-fine 200 mesh. Dissolves cleanly without grit.',
      comment: 'Been taking creatine for 8 years and this is hands down the highest quality monohydrate available in Australia. It dissolves completely in cold water with a few stirs, zero stomach bloating or chalky texture.',
      verified: true,
      helpful: 42
    },
    {
      id: 2,
      name: 'Marcus K.',
      location: 'Melbourne, VIC',
      product: 'Warrior King Ultra High Stim Pre-Workout',
      category: 'warrior',
      rating: 5,
      date: '1 week ago',
      title: 'Laser tunnel-vision focus with zero nasty crash.',
      comment: 'The ingredient profile is clinical. You get genuine tunnel vision and skin-splitting pumps without that sickening jittery anxiety other pre-workouts give you. Sour Apple flavour is crisp and not overly sweet.',
      verified: true,
      helpful: 38
    },
    {
      id: 3,
      name: 'Dave T.',
      location: 'Brisbane, QLD',
      product: 'Liquid Glycerol 500mL (1.25g/mL)',
      category: 'glycerol',
      rating: 5,
      date: '2 weeks ago',
      title: 'Incredible hyper-hydration pump. Best in AU.',
      comment: 'Stacked 20ml of this with 1 scoop of Warrior 30 mins before my heavy leg session. The intra-cellular pump and endurance was unmatched. Arrived in Brisbane within 48 hours of ordering.',
      verified: true,
      helpful: 29
    },
    {
      id: 4,
      name: 'Sam R.',
      location: 'Gold Coast, QLD',
      product: 'Performance Stack (Warrior + Creatine + Shaker)',
      category: 'all',
      rating: 5,
      date: '3 weeks ago',
      title: 'Insane value buying direct from the Sydney warehouse.',
      comment: 'I checked the HPLC third-party lab test on their website before buying. Purity verified at 99.8%. Buying direct saves about $40 compared to big retail store prices for the same active dosage.',
      verified: true,
      helpful: 51
    },
    {
      id: 5,
      name: 'Jackson B.',
      location: 'Perth, WA',
      product: 'Beta Alanine Pure Powder (500g)',
      category: 'all',
      rating: 5,
      date: '1 month ago',
      title: 'Pure unflavoured compound. Exactly what I wanted.',
      comment: 'Tired of buying commercial pre-workouts with proprietary blends where you get 1g of beta-alanine. With this I can dose the clinical 3.2g myself. Shipped fast across to WA.',
      verified: true,
      helpful: 19
    },
    {
      id: 6,
      name: 'Christian W.',
      location: 'Adelaide, SA',
      product: 'Pure Himalayan Shilajit Resin (50g)',
      category: 'all',
      rating: 5,
      date: '1 month ago',
      title: 'Authentic resin with strong mineral test results.',
      comment: 'Very potent natural Shilajit. Melts easily in warm water or herbal tea. Noticeable boost in daily afternoon energy and mental sharpness. Lab results are authentic.',
      verified: true,
      helpful: 33
    }
  ];

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === activeFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with Star Summary */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#e5dec5] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex items-center text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#111111] uppercase tracking-wider">
              4.9 / 5.0 Average Rating
            </span>
            <span className="text-xs text-[#777777]">
              (2,450+ Verified Australian Athletes)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] uppercase tracking-tight">
            Verified Community Feedback
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-1">
            Real reviews from Australian gym-goers, powerlifters, and athletes training daily.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'all' 
                ? 'bg-[#111111] text-white' 
                : 'bg-white text-[#555555] hover:bg-[#ebe5d0] border border-[#ebe5d0]'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setActiveFilter('creatine')}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'creatine' 
                ? 'bg-[#111111] text-white' 
                : 'bg-white text-[#555555] hover:bg-[#ebe5d0] border border-[#ebe5d0]'
            }`}
          >
            Creatine Range
          </button>
          <button
            onClick={() => setActiveFilter('warrior')}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'warrior' 
                ? 'bg-[#111111] text-white' 
                : 'bg-white text-[#555555] hover:bg-[#ebe5d0] border border-[#ebe5d0]'
            }`}
          >
            Warrior Pre-Workout
          </button>
          <button
            onClick={() => setActiveFilter('glycerol')}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
              activeFilter === 'glycerol' 
                ? 'bg-[#111111] text-white' 
                : 'bg-white text-[#555555] hover:bg-[#ebe5d0] border border-[#ebe5d0]'
            }`}
          >
            Liquid Glycerol
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ebe5d0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Stars and Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-[#f59e0b]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                  ))}
                </div>
                <span className="text-[11px] text-[#888888] font-mono">
                  {rev.date}
                </span>
              </div>

              {/* Review Title */}
              <h3 className="font-heading font-bold text-[#111111] text-sm uppercase tracking-tight mb-2">
                "{rev.title}"
              </h3>

              {/* Comment text */}
              <p className="text-xs text-[#555555] leading-relaxed mb-4">
                {rev.comment}
              </p>
            </div>

            {/* Author and Product Footnote */}
            <div className="pt-4 border-t border-[#f0ebd5]">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xs text-[#111111]">
                    {rev.name}
                  </span>
                  <span className="text-[11px] text-[#777777]">
                    ({rev.location})
                  </span>
                </div>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Buyer 🇦🇺</span>
                  </span>
                )}
              </div>
              <p className="text-[10px] text-[#888888] truncate font-medium">
                Purchased: <span className="text-[#111111]">{rev.product}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
