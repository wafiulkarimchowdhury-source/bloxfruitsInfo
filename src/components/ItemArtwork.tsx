import React from 'react';
import { BloxItem } from '../types';

interface ItemArtworkProps {
  item: BloxItem;
  className?: string;
}

export const ItemArtwork: React.FC<ItemArtworkProps> = ({ item, className = 'h-36 w-full' }) => {
  const { id, category, rarity } = item;

  // Distinct themed palettes based on item archetype and rarity
  const getGradient = () => {
    switch (rarity) {
      case 'Mythical':
        return 'from-fuchsia-950/80 via-purple-900/40 to-slate-950';
      case 'Legendary':
        return 'from-amber-950/80 via-yellow-900/30 to-slate-950';
      case 'Rare':
        return 'from-sky-950/80 via-blue-900/30 to-slate-950';
      case 'Uncommon':
        return 'from-emerald-950/80 via-teal-900/30 to-slate-950';
      case 'Common':
      default:
        return 'from-slate-900 via-slate-800/40 to-slate-950';
    }
  };

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-b ${getGradient()} ${className}`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Dynamic Item Specific Illustrations */}
      <div className="relative z-10 w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {category === 'Sword' && (
          <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {id === 'cursed-dual-katana' ? (
              <g>
                <circle cx="50" cy="50" r="32" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin" />
                {/* Red Demon Blade 1 */}
                <path d="M 25 75 L 75 25" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
                <path d="M 70 30 L 78 22 L 72 16" fill="#dc2626" />
                <circle cx="28" cy="72" r="4" fill="#7f1d1d" />
                {/* Purple Curse Blade 2 */}
                <path d="M 75 75 L 25 25" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
                <path d="M 30 30 L 22 22 L 28 16" fill="#9333ea" />
                <circle cx="72" cy="72" r="4" fill="#581c87" />
                {/* Aura Sparks */}
                <circle cx="50" cy="50" r="6" fill="#f43f5e" className="animate-pulse" />
              </g>
            ) : id === 'true-triple-katana' ? (
              <g>
                <circle cx="50" cy="50" r="34" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 3" />
                <path d="M 20 80 L 80 20" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />
                <path d="M 50 85 L 50 15" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" />
                <path d="M 80 80 L 20 20" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="50" r="7" fill="#34d399" />
              </g>
            ) : id === 'dark-blade' ? (
              <g>
                <path d="M 50 15 L 50 78" stroke="#052e16" strokeWidth="7" strokeLinecap="round" />
                <path d="M 50 15 L 50 78" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 30 65 L 70 65" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="65" r="4" fill="#e11d48" />
                <circle cx="50" cy="85" r="5" fill="#ca8a04" />
                {/* Green energy slash */}
                <path d="M 20 35 Q 50 20 80 35" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              </g>
            ) : id === 'shark-anchor' ? (
              <g>
                <path d="M 50 20 L 50 80" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
                <circle cx="50" cy="22" r="7" fill="none" stroke="#38bdf8" strokeWidth="4" />
                <path d="M 25 60 C 25 85 75 85 75 60" fill="none" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
                <polygon points="20,60 28,60 25,50" fill="#38bdf8" />
                <polygon points="72,60 80,60 75,50" fill="#38bdf8" />
              </g>
            ) : id === 'hallow-scythe' ? (
              <g>
                <path d="M 70 85 L 35 25" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                <path d="M 35 25 C 20 20 20 45 65 30" fill="none" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                <circle cx="35" cy="25" r="6" fill="#38bdf8" className="animate-pulse" />
              </g>
            ) : (
              <g>
                {/* Standard Katana / Blade Silhouette */}
                <path d="M 30 75 L 70 25" stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" />
                <path d="M 68 23 L 73 18" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                <ellipse cx="38" cy="65" rx="6" ry="3" fill="#eab308" transform="rotate(-45 38 65)" />
                <path d="M 22 85 L 34 70" stroke="#991b1b" strokeWidth="5" strokeLinecap="round" />
              </g>
            )}
          </svg>
        )}

        {category === 'Fighting Style' && (
          <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {id === 'godhuman' ? (
              <g>
                <circle cx="50" cy="50" r="32" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="5 3" />
                <path d="M 35 55 C 35 40 45 35 55 35 C 65 35 70 45 68 60 C 65 72 45 75 35 55 Z" fill="#ca8a04" />
                <circle cx="50" cy="48" r="8" fill="#fef08a" className="animate-ping opacity-75" />
                <path d="M 25 30 L 35 40 M 75 30 L 65 40 M 50 15 L 50 28" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : id === 'sanguine-art' ? (
              <g>
                <path d="M 30 70 C 20 40 50 30 50 20 C 50 30 80 40 70 70 C 60 85 40 85 30 70 Z" fill="#991b1b" />
                <path d="M 40 60 C 35 45 50 40 50 35 C 50 40 65 45 60 60 Z" fill="#ef4444" />
                <circle cx="50" cy="65" r="4" fill="#fecdd3" />
                <path d="M 32 35 L 26 25 M 68 35 L 74 25" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            ) : id === 'electric-claw' ? (
              <g>
                <path d="M 30 70 L 40 30 M 45 70 L 52 25 M 60 70 L 65 30 M 70 70 L 78 40" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
                <path d="M 35 30 L 45 42 L 55 28 L 65 40" fill="none" stroke="#67e8f9" strokeWidth="2" />
                <circle cx="52" cy="45" r="6" fill="#a5f3fc" className="animate-pulse" />
              </g>
            ) : (
              <g>
                {/* General Fist */}
                <rect x="35" y="40" width="30" height="30" rx="8" fill="#d97706" />
                <rect x="35" y="32" width="7" height="12" rx="3" fill="#f59e0b" />
                <rect x="43" y="30" width="7" height="14" rx="3" fill="#f59e0b" />
                <rect x="51" y="30" width="7" height="14" rx="3" fill="#f59e0b" />
                <rect x="59" y="33" width="7" height="11" rx="3" fill="#f59e0b" />
                <path d="M 30 52 L 35 52 L 35 65 L 30 62 Z" fill="#b45309" />
              </g>
            )}
          </svg>
        )}

        {category === 'Fruit' && (
          <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {id === 'kitsune-fruit' ? (
              <g>
                <circle cx="50" cy="55" r="24" fill="#1e1b4b" />
                <path d="M 30 45 C 20 20 40 25 45 40 Z" fill="#38bdf8" />
                <path d="M 70 45 C 80 20 60 25 55 40 Z" fill="#38bdf8" />
                {/* Swirling Tails */}
                <path d="M 50 30 C 50 15 58 12 60 15 C 62 25 52 28 50 30" fill="#0284c7" />
                <circle cx="42" cy="55" r="3" fill="#38bdf8" />
                <circle cx="58" cy="55" r="3" fill="#38bdf8" />
              </g>
            ) : id === 'buddha-fruit' ? (
              <g>
                <circle cx="50" cy="50" r="28" fill="#eab308" />
                <circle cx="50" cy="50" r="34" fill="none" stroke="#fde047" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="50" cy="38" r="8" fill="#ca8a04" />
                <path d="M 35 65 C 35 50 65 50 65 65 Z" fill="#a16207" />
              </g>
            ) : (
              <g>
                {/* Classic Swirly Blox Fruit */}
                <rect x="30" y="32" width="40" height="40" rx="14" fill="#7c3aed" />
                <path d="M 50 32 C 50 20 60 18 62 22" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                <path d="M 38 42 C 45 38 48 48 42 52" fill="none" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" />
                <path d="M 52 52 C 58 48 62 58 56 62" fill="none" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" />
              </g>
            )}
          </svg>
        )}

        {category === 'Gun' && (
          <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {id === 'soul-guitar' ? (
              <g>
                <ellipse cx="50" cy="65" rx="20" ry="15" fill="#4c1d95" />
                <circle cx="43" cy="63" r="3" fill="#cbd5e1" />
                <circle cx="57" cy="63" r="3" fill="#cbd5e1" />
                <path d="M 50 50 L 50 18" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
                <rect x="45" y="15" width="10" height="8" rx="2" fill="#334155" />
                <path d="M 32 55 Q 50 48 68 55" fill="none" stroke="#a855f7" strokeWidth="3" />
              </g>
            ) : (
              <g>
                <rect x="25" y="42" width="45" height="10" rx="2" fill="#475569" />
                <rect x="20" y="40" width="8" height="14" rx="2" fill="#1e293b" />
                <path d="M 60 52 L 72 72 L 64 74 L 56 52 Z" fill="#78350f" />
                <path d="M 50 52 C 50 60 44 60 44 52" fill="none" stroke="#94a3b8" strokeWidth="2" />
              </g>
            )}
          </svg>
        )}

        {category === 'Accessory' && (
          <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {id.includes('crown') || id.includes('helm') ? (
              <g>
                <path d="M 25 65 L 75 65 L 75 52 L 65 60 L 50 42 L 35 60 L 25 52 Z" fill="#eab308" />
                <circle cx="50" cy="40" r="3.5" fill="#ef4444" />
                <circle cx="35" cy="50" r="2.5" fill="#3b82f6" />
                <circle cx="65" cy="50" r="2.5" fill="#3b82f6" />
                <rect x="25" y="65" width="50" height="6" rx="2" fill="#ca8a04" />
              </g>
            ) : (
              <g>
                <path d="M 30 35 Q 50 48 70 35 L 75 75 Q 50 82 25 75 Z" fill="#991b1b" />
                <path d="M 35 36 Q 50 46 65 36" fill="none" stroke="#fef08a" strokeWidth="3" />
                <circle cx="50" cy="44" r="5" fill="#eab308" />
              </g>
            )}
          </svg>
        )}
      </div>

      {/* Rarity & Category Corner Badges */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
        <span className="px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 text-slate-300">
          {category}
        </span>
      </div>

      {/* Ratings Pill */}
      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5">
        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono">
          <span className="text-rose-400 font-bold">PvP: {item.pvpRating}</span>
          <span className="text-slate-500">|</span>
          <span className="text-amber-400 font-bold">PvE: {item.pveRating}</span>
        </div>
      </div>
    </div>
  );
};
