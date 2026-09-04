import React from 'react';
import { Swords, Compass, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenBuildPlanner: () => void;
  onOpenHelper: () => void;
  buildCount: number;
  bookmarkedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBuildPlanner,
  onOpenHelper,
  buildCount,
  bookmarkedCount,
  totalCount
}) => {
  return (
    <header id="app-header" className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 flex items-center justify-center shadow-lg shadow-rose-950/40 border border-white/15">
            <Swords className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                Blox Fruits Guide
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono uppercase">
                v24 Meta
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wide">
              {totalCount} Items • Swords & Fighting Styles Database
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          {/* Obtainment & Secrets Reference Button */}
          <button
            id="btn-open-secrets"
            onClick={onOpenHelper}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Dealer & Sea Guide</span>
            <span className="sm:hidden">Guide</span>
          </button>

          {/* Build Planner Drawer Trigger */}
          <button
            id="btn-open-build-planner"
            onClick={onOpenBuildPlanner}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-slate-950 font-bold text-xs shadow-md shadow-rose-950/50 transition-all active:scale-95"
          >
            <Swords className="w-4 h-4" />
            <span>My Build</span>
            {buildCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-[10px] font-mono flex items-center justify-center font-black">
                {buildCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
