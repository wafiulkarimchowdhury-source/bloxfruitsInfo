import React, { useState, useRef, useEffect } from 'react';
import { Swords, BookOpen, ChevronDown, User, Instagram, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';

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
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCreditsOpen(false);
      }
    };

    if (isCreditsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCreditsOpen]);

  const handleCopyHandle = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('@wafi_ul_karim_chowdhury2');
    setCopiedHandle(true);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

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

        {/* Header Actions - Right Corner Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Obtainment & Secrets Reference Button */}
          <button
            id="btn-open-secrets"
            onClick={onOpenHelper}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Dealer & Sea Guide</span>
            <span className="md:hidden">Guide</span>
          </button>

          {/* Build Planner Drawer Trigger */}
          <button
            id="btn-open-build-planner"
            onClick={onOpenBuildPlanner}
            className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-slate-950 font-bold text-xs shadow-md shadow-rose-950/50 transition-all active:scale-95"
          >
            <Swords className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">My Build</span>
            <span className="sm:hidden">Build</span>
            {buildCount > 0 && (
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-950 text-amber-400 text-[10px] font-mono flex items-center justify-center font-black">
                {buildCount}
              </span>
            )}
          </button>

          {/* Subtle vertical divider separating functional tools from Owner & Credits */}
          <div className="hidden sm:block h-6 w-px bg-slate-800" />

          {/* Credits and Owner Dropdown on the Extreme Right Corner */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="btn-credits-owner-dropdown"
              onClick={() => setIsCreditsOpen((prev) => !prev)}
              aria-expanded={isCreditsOpen}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all shadow-sm ${
                isCreditsOpen
                  ? 'bg-gradient-to-r from-amber-500/25 to-rose-500/20 border-amber-400 text-amber-200 shadow-amber-950/50 ring-2 ring-amber-400/30'
                  : 'bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 hover:bg-slate-800/90 border-amber-500/40 text-amber-300 hover:text-amber-200 hover:border-amber-400'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/40">
                <User className="w-2.5 h-2.5 text-amber-300" />
              </div>
              <span className="hidden sm:inline">Credits and Owner</span>
              <span className="sm:hidden">Credits & Owner</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isCreditsOpen ? 'rotate-180 text-amber-300' : 'text-amber-400/80'
                }`}
              />
            </button>

            {/* Dropdown Menu Content */}
            {isCreditsOpen && (
              <div
                id="credits-owner-menu"
                className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] rounded-2xl bg-slate-900 border border-amber-500/50 shadow-2xl shadow-black/90 p-4 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-amber-400">
                      Credits & Ownership
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold border border-amber-500/30">
                    Lead Creator
                  </span>
                </div>

                {/* Owner Identity Section */}
                <div className="pt-3 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-rose-600 to-purple-600 p-[1.5px] shrink-0 shadow-md">
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <User className="w-5 h-5 text-amber-400" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                        Project Owner
                      </span>
                      <h4 className="font-serif text-base font-bold text-white tracking-tight leading-snug">
                        Wafi Ul Karim Chowdhury
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Creator & Architect of Blox Fruits Guide
                      </p>
                    </div>
                  </div>

                  {/* Instagram Section */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-rose-300 font-semibold">
                        <Instagram className="w-4 h-4 text-rose-400" />
                        <span>Instagram</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">Official Profile</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="font-mono text-xs text-amber-300 font-bold truncate">
                        @wafi_ul_karim_chowdhury2
                      </span>
                      <button
                        onClick={handleCopyHandle}
                        title="Copy handle"
                        className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        {copiedHandle ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <a
                      href="https://www.instagram.com/wafi_ul_karim_chowdhury2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/40 transition-all"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Follow on Instagram</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>

                  {/* Bottom Acknowledgement */}
                  <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                    Designed & curated for the Blox Fruits player community.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

