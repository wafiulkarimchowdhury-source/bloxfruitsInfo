import React, { useState, useMemo, useEffect } from 'react';
import { BLOX_ITEMS } from './data/bloxItems';
import { BloxItem, FilterState, PlayerBuild, ItemCategory, Rarity } from './types';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { ItemCard } from './components/ItemCard';
import { ItemDetailModal } from './components/ItemDetailModal';
import { BuildPlannerDrawer } from './components/BuildPlannerDrawer';
import { ObtainmentHelperModal } from './components/ObtainmentHelperModal';
import { Swords, Compass, SearchX, RotateCcw, Sparkles } from 'lucide-react';

const RARITY_WEIGHTS: Record<Rarity, number> = {
  Mythical: 5,
  Legendary: 4,
  Rare: 3,
  Uncommon: 2,
  Common: 1
};

const PVP_WEIGHTS: Record<string, number> = {
  'S+': 5,
  'S': 4,
  'A+': 3.5,
  'A': 3,
  'B+': 2.5,
  'B': 2,
  'C': 1
};

const SEA_WEIGHTS: Record<string, number> = {
  'First Sea': 1,
  'Second Sea': 2,
  'Third Sea': 3,
  'All Seas': 4
};

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  category: 'All',
  sea: 'All',
  rarity: 'All',
  sortBy: 'rarity-desc',
  tagFilter: null,
  onlyBookmarked: false
};

const STORAGE_KEYS = {
  BOOKMARKS: 'blox_fruits_guide_bookmarks_v1',
  BUILD: 'blox_fruits_guide_build_v1'
};

export default function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [selectedItem, setSelectedItem] = useState<BloxItem | null>(null);
  const [isBuildDrawerOpen, setIsBuildDrawerOpen] = useState(false);
  const [isHelperModalOpen, setIsHelperModalOpen] = useState(false);

  // Bookmarks persistence
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Player Build persistence
  const [build, setBuild] = useState<PlayerBuild>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BUILD);
      return saved
        ? JSON.parse(saved)
        : {
            fruitId: 'kitsune-fruit',
            swordId: 'cursed-dual-katana',
            gunId: 'soul-guitar',
            fightingStyleId: 'godhuman',
            accessoryId: 'pale-scarf'
          };
    } catch {
      return {
        fruitId: null,
        swordId: null,
        gunId: null,
        fightingStyleId: null,
        accessoryId: null
      };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch {
      // ignore
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BUILD, JSON.stringify(build));
    } catch {
      // ignore
    }
  }, [build]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleBuildItem = (item: BloxItem) => {
    let key: keyof PlayerBuild | null = null;
    if (item.category === 'Sword') key = 'swordId';
    if (item.category === 'Fighting Style') key = 'fightingStyleId';
    if (item.category === 'Fruit') key = 'fruitId';
    if (item.category === 'Gun') key = 'gunId';
    if (item.category === 'Accessory') key = 'accessoryId';

    if (!key) return;

    setBuild((prev) => ({
      ...prev,
      [key]: prev[key] === item.id ? null : item.id
    }));
  };

  const handleRemoveFromBuild = (categoryKey: keyof PlayerBuild) => {
    setBuild((prev) => ({
      ...prev,
      [categoryKey]: null
    }));
  };

  const handleClearBuild = () => {
    setBuild({
      fruitId: null,
      swordId: null,
      gunId: null,
      fightingStyleId: null,
      accessoryId: null
    });
  };

  const handleFilterChange = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<ItemCategory | 'All', number> = {
      All: BLOX_ITEMS.length,
      Sword: 0,
      'Fighting Style': 0,
      Fruit: 0,
      Gun: 0,
      Accessory: 0
    };

    BLOX_ITEMS.forEach((item) => {
      counts[item.category] += 1;
    });

    return counts;
  }, []);

  // Filter and Sort Engine
  const filteredItems = useMemo(() => {
    return BLOX_ITEMS.filter((item) => {
      // Category Filter
      if (filters.category !== 'All' && item.category !== filters.category) {
        return false;
      }

      // Sea Filter (if Sea is "All Seas", it matches any sea, or if filter is "All")
      if (filters.sea !== 'All') {
        if (item.sea !== filters.sea && item.sea !== 'All Seas') {
          return false;
        }
      }

      // Rarity Filter
      if (filters.rarity !== 'All' && item.rarity !== filters.rarity) {
        return false;
      }

      // Bookmarked filter
      if (filters.onlyBookmarked && !bookmarks.includes(item.id)) {
        return false;
      }

      // Tag Filter
      if (filters.tagFilter && !item.tags.includes(filters.tagFilter)) {
        return false;
      }

      // Search Query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const nameMatch = item.name.toLowerCase().includes(query);
        const aliasMatch = item.japaneseOrAlias?.toLowerCase().includes(query);
        const subTypeMatch = item.subType?.toLowerCase().includes(query);
        const summaryMatch = item.summary.toLowerCase().includes(query);
        const npcMatch = item.obtainment.npcName?.toLowerCase().includes(query);
        const locationMatch = item.obtainment.npcLocation?.toLowerCase().includes(query);
        const bossMatch = item.obtainment.bossOrRaid?.toLowerCase().includes(query);
        const tagMatch = item.tags.some((t) => t.toLowerCase().includes(query));
        const moveMatch = item.moveset.some(
          (m) =>
            m.name.toLowerCase().includes(query) ||
            m.description.toLowerCase().includes(query)
        );

        if (
          !nameMatch &&
          !aliasMatch &&
          !subTypeMatch &&
          !summaryMatch &&
          !npcMatch &&
          !locationMatch &&
          !bossMatch &&
          !tagMatch &&
          !moveMatch
        ) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'rarity-desc') {
        return RARITY_WEIGHTS[b.rarity] - RARITY_WEIGHTS[a.rarity];
      }
      if (filters.sortBy === 'rarity-asc') {
        return RARITY_WEIGHTS[a.rarity] - RARITY_WEIGHTS[b.rarity];
      }
      if (filters.sortBy === 'pvp-rating') {
        const pvpA = PVP_WEIGHTS[a.pvpRating] || 0;
        const pvpB = PVP_WEIGHTS[b.pvpRating] || 0;
        return pvpB - pvpA;
      }
      if (filters.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === 'sea-asc') {
        return (SEA_WEIGHTS[a.sea] || 0) - (SEA_WEIGHTS[b.sea] || 0);
      }
      return 0;
    });
  }, [filters, bookmarks]);

  const equippedCount = Object.values(build).filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Header / Navbar */}
      <Navbar
        onOpenBuildPlanner={() => setIsBuildDrawerOpen(true)}
        onOpenHelper={() => setIsHelperModalOpen(true)}
        buildCount={equippedCount}
        bookmarkedCount={bookmarks.length}
        totalCount={BLOX_ITEMS.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Quick Hero Banner Notice */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-purple-950/30 to-slate-900 border border-amber-500/20 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider">
                Full Obtainment Database • Swords & Fighting Styles Focus
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Instant access to mastery requirements, fragment costs, boss drop rates, and Legendary Sword Dealer timers across all 3 seas.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleFilterChange('category', 'Sword')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-rose-300 border border-rose-500/30 transition-colors"
            >
              Swords ({categoryCounts['Sword']})
            </button>
            <button
              onClick={() => handleFilterChange('category', 'Fighting Style')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-amber-300 border border-amber-500/30 transition-colors"
            >
              Styles ({categoryCounts['Fighting Style']})
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
          categoryCounts={categoryCounts}
          totalCount={BLOX_ITEMS.length}
          filteredCount={filteredItems.length}
          bookmarkedCount={bookmarks.length}
        />

        {/* Cards Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div
            id="items-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          >
            {filteredItems.map((item) => {
              const isBookmarked = bookmarks.includes(item.id);
              const isInBuild = Object.values(build).includes(item.id);

              return (
                <ItemCard
                  key={item.id}
                  item={item}
                  isBookmarked={isBookmarked}
                  isInBuild={isInBuild}
                  onToggleBookmark={toggleBookmark}
                  onToggleBuild={toggleBuildItem}
                  onSelect={(selected) => setSelectedItem(selected)}
                />
              );
            })}
          </div>
        ) : (
          <div
            id="empty-state"
            className="rounded-2xl bg-slate-900/60 border border-slate-800 p-12 text-center space-y-4 max-w-md mx-auto my-8"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400">
              <SearchX className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                No items match your criteria
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Try clearing your search query, selecting "All Seas", or changing your rarity filter.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* Floating Bottom Quick Action on Mobile */}
      <div className="sm:hidden sticky bottom-3 mx-4 z-30">
        <div className="rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl p-2 flex items-center justify-between gap-2 backdrop-blur-md">
          <button
            onClick={() => handleFilterChange('category', 'Sword')}
            className={`flex-1 py-1.5 text-center text-xs font-semibold rounded-xl ${
              filters.category === 'Sword'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'text-slate-400'
            }`}
          >
            Swords
          </button>
          <button
            onClick={() => handleFilterChange('category', 'Fighting Style')}
            className={`flex-1 py-1.5 text-center text-xs font-semibold rounded-xl ${
              filters.category === 'Fighting Style'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400'
            }`}
          >
            Styles
          </button>
          <button
            onClick={() => setIsBuildDrawerOpen(true)}
            className="flex-1 py-1.5 px-2 bg-gradient-to-r from-amber-500 to-rose-600 text-slate-950 text-xs font-bold rounded-xl flex items-center justify-center gap-1 shadow-md"
          >
            <Swords className="w-3.5 h-3.5" />
            <span>Build ({equippedCount})</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-serif font-semibold text-slate-300 text-sm">
            Blox Fruits Guide & Obtainment Compendium
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Created & Maintained by <span className="font-bold text-amber-300">Wafi Ul Karim Chowdhury</span> • Follow on Instagram:{' '}
            <a
              href="https://www.instagram.com/wafi_ul_karim_chowdhury2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-300 underline font-semibold transition-colors"
            >
              @wafi_ul_karim_chowdhury2
            </a>
          </p>
          <p className="text-[10px] text-slate-500 font-mono">
            Covering Swords, Fighting Styles, Fruits, Guns, and Accessories across all three seas.
          </p>
        </div>
      </footer>

      {/* Item Detailed Walkthrough Modal */}
      <ItemDetailModal
        item={selectedItem}
        isBookmarked={selectedItem ? bookmarks.includes(selectedItem.id) : false}
        isInBuild={selectedItem ? Object.values(build).includes(selectedItem.id) : false}
        onClose={() => setSelectedItem(null)}
        onToggleBookmark={toggleBookmark}
        onToggleBuild={toggleBuildItem}
      />

      {/* My Build Planner Drawer */}
      <BuildPlannerDrawer
        isOpen={isBuildDrawerOpen}
        onClose={() => setIsBuildDrawerOpen(false)}
        build={build}
        items={BLOX_ITEMS}
        onRemoveFromBuild={handleRemoveFromBuild}
        onClearBuild={handleClearBuild}
        onSelectItem={(item) => {
          setIsBuildDrawerOpen(false);
          setSelectedItem(item);
        }}
      />

      {/* Obtainment & Secrets Reference Modal */}
      <ObtainmentHelperModal
        isOpen={isHelperModalOpen}
        onClose={() => setIsHelperModalOpen(false)}
      />
    </div>
  );
}
