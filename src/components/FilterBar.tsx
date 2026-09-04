import React from 'react';
import { ItemCategory, Sea, Rarity, FilterState } from '../types';
import { Search, X, SlidersHorizontal, Swords, Zap, Apple, Crosshair, Crown, RotateCcw, BookmarkCheck } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onReset: () => void;
  categoryCounts: Record<ItemCategory | 'All', number>;
  totalCount: number;
  filteredCount: number;
  bookmarkedCount: number;
}

const CATEGORIES: { label: string; value: ItemCategory | 'All'; icon: React.ReactNode }[] = [
  { label: 'All Items', value: 'All', icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
  { label: 'Swords', value: 'Sword', icon: <Swords className="w-3.5 h-3.5 text-rose-400" /> },
  { label: 'Fighting Styles', value: 'Fighting Style', icon: <Zap className="w-3.5 h-3.5 text-amber-400" /> },
  { label: 'Fruits', value: 'Fruit', icon: <Apple className="w-3.5 h-3.5 text-purple-400" /> },
  { label: 'Guns', value: 'Gun', icon: <Crosshair className="w-3.5 h-3.5 text-blue-400" /> },
  { label: 'Accessories', value: 'Accessory', icon: <Crown className="w-3.5 h-3.5 text-teal-400" /> },
];

const SEAS: { label: string; value: Sea | 'All'; badge: string }[] = [
  { label: 'All Seas', value: 'All', badge: 'Global' },
  { label: 'First Sea', value: 'First Sea', badge: 'Old World (1-700)' },
  { label: 'Second Sea', value: 'Second Sea', badge: 'Rose (700-1500)' },
  { label: 'Third Sea', value: 'Third Sea', badge: 'Turtle (1500+)' },
];

const RARITIES: (Rarity | 'All')[] = ['All', 'Mythical', 'Legendary', 'Rare', 'Uncommon', 'Common'];

const QUICK_TAGS = [
  'PvP Meta',
  'Combo Extender',
  'Legendary Sword Dealer',
  'Awakened',
  'Boss Drop',
  'Sea Event',
  'Full Moon'
];

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onReset,
  categoryCounts,
  totalCount,
  filteredCount,
  bookmarkedCount
}) => {
  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.category !== 'All' ||
    filters.sea !== 'All' ||
    filters.rarity !== 'All' ||
    filters.tagFilter !== null ||
    filters.onlyBookmarked;

  return (
    <div id="filter-bar-container" className="space-y-4">
      {/* Top Controls: Search and Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="input-search-items"
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange('searchQuery', e.target.value)}
            placeholder="Search swords, fighting styles, fruits, moves, bosses, drop rates..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500/80 focus:ring-2 focus:ring-amber-500/20 transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange('searchQuery', '')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort and Bookmarks Toggle */}
        <div className="flex items-center gap-2">
          <select
            id="select-sort-by"
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange('sortBy', e.target.value as FilterState['sortBy'])
            }
            className="px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer font-medium"
          >
            <option value="rarity-desc">Rarity: High to Low</option>
            <option value="rarity-asc">Rarity: Low to High</option>
            <option value="pvp-rating">Highest PvP Rating (S+ first)</option>
            <option value="name-asc">Alphabetical (A - Z)</option>
            <option value="sea-asc">Sea Order (1st → 3rd)</option>
          </select>

          {/* Bookmarked Filter Toggle */}
          <button
            id="btn-filter-bookmarked"
            onClick={() => onFilterChange('onlyBookmarked', !filters.onlyBookmarked)}
            className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              filters.onlyBookmarked
                ? 'bg-rose-500/20 border-rose-500/60 text-rose-300 ring-2 ring-rose-500/20'
                : 'bg-slate-900 border-slate-700/80 text-slate-300 hover:text-white'
            }`}
          >
            <BookmarkCheck className="w-4 h-4 text-rose-400" />
            <span className="hidden sm:inline">Owned</span> ({bookmarkedCount})
          </button>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              id="btn-reset-filters"
              onClick={onReset}
              title="Reset all filters"
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-rose-300 border border-slate-700/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = filters.category === cat.value;
          const count = categoryCounts[cat.value];
          return (
            <button
              key={cat.value}
              id={`tab-category-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => onFilterChange('category', cat.value)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-amber-500/20 border-amber-500/70 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isSelected ? 'bg-amber-500/30 text-amber-200' : 'bg-slate-800 text-slate-400'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Row: Sea Tabs & Rarity Pills */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1 border-t border-slate-800/80">
        {/* Sea Selector */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            Sea:
          </span>
          {SEAS.map((sea) => {
            const isSelected = filters.sea === sea.value;
            return (
              <button
                key={sea.value}
                id={`tab-sea-${sea.value.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onFilterChange('sea', sea.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-sky-500/20 border-sky-500/60 text-sky-300'
                    : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sea.label}
              </button>
            );
          })}
        </div>

        {/* Rarity Selector */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            Rarity:
          </span>
          {RARITIES.map((rarity) => {
            const isSelected = filters.rarity === rarity;
            return (
              <button
                key={rarity}
                id={`pill-rarity-${rarity.toLowerCase()}`}
                onClick={() => onFilterChange('rarity', rarity)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all whitespace-nowrap ${
                  isSelected
                    ? rarity === 'Mythical'
                      ? 'bg-fuchsia-950 border-fuchsia-500 text-fuchsia-300 font-bold'
                      : rarity === 'Legendary'
                      ? 'bg-amber-950 border-amber-500 text-amber-300 font-bold'
                      : rarity === 'Rare'
                      ? 'bg-sky-950 border-sky-500 text-sky-300 font-bold'
                      : rarity === 'Uncommon'
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300 font-bold'
                      : rarity === 'Common'
                      ? 'bg-slate-800 border-slate-500 text-slate-200 font-bold'
                      : 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold'
                    : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                {rarity}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Filter Tags & Results Counter */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
            Tags:
          </span>
          {QUICK_TAGS.map((tag) => {
            const isSelected = filters.tagFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => onFilterChange('tagFilter', isSelected ? null : tag)}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium border transition-colors ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-400 font-semibold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="text-xs font-mono text-slate-400">
          Showing <span className="font-bold text-amber-300">{filteredCount}</span> of {totalCount} items
        </div>
      </div>
    </div>
  );
};
