import React from 'react';
import { BloxItem } from '../types';
import { getRarityTheme, getSeaBadge, formatBeli, formatFragments } from '../utils/helpers';
import { ItemArtwork } from './ItemArtwork';
import { Bookmark, BookmarkCheck, ExternalLink, Zap, MapPin, Swords, ShieldAlert, Sparkles } from 'lucide-react';

interface ItemCardProps {
  item: BloxItem;
  isBookmarked: boolean;
  isInBuild: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleBuild: (item: BloxItem) => void;
  onSelect: (item: BloxItem) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  isBookmarked,
  isInBuild,
  onToggleBookmark,
  onToggleBuild,
  onSelect
}) => {
  const rarityTheme = getRarityTheme(item.rarity);
  const seaBadge = getSeaBadge(item.sea);

  return (
    <div
      id={`item-card-${item.id}`}
      className={`group relative flex flex-col rounded-xl bg-slate-900/90 border ${rarityTheme.cardBorder} ${rarityTheme.dropShadow} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden`}
    >
      {/* Visual Image Area */}
      <div className="cursor-pointer" onClick={() => onSelect(item)}>
        <ItemArtwork item={item} />
      </div>

      {/* Card Header & Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Top Badges Row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase border ${rarityTheme.badgeBg}`}
              >
                {item.rarity}
              </span>
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-medium border ${seaBadge.color}`}
              >
                {seaBadge.label}
              </span>
            </div>

            {/* Bookmark & Build Quick Actions */}
            <div className="flex items-center gap-1">
              <button
                id={`btn-build-${item.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBuild(item);
                }}
                title={isInBuild ? 'Equipped in My Build' : 'Add to My Build'}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isInBuild
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:text-amber-300 hover:bg-slate-800'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
              </button>

              <button
                id={`btn-bookmark-${item.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(item.id);
                }}
                title={isBookmarked ? 'Owned / Target Acquired' : 'Mark as Owned / Target'}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isBookmarked
                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                    : 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:text-rose-300 hover:bg-slate-800'
                }`}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-3.5 h-3.5 fill-rose-500/30 text-rose-400" />
                ) : (
                  <Bookmark className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Item Title & Alias */}
          <div className="cursor-pointer" onClick={() => onSelect(item)}>
            <h3 className="font-serif text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors tracking-tight line-clamp-1">
              {item.name}
            </h3>
            {item.japaneseOrAlias && (
              <p className="text-[12px] text-slate-400 font-mono line-clamp-1">
                {item.japaneseOrAlias}
              </p>
            )}
          </div>

          {/* Summary / Usage */}
          <p className="mt-2 text-xs text-slate-300/90 leading-relaxed line-clamp-2">
            {item.summary}
          </p>
        </div>

        {/* Moveset Area */}
        {item.moveset.length > 0 && (
          <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                Moveset & Mastery
              </span>
              <span className="text-[10px] text-slate-500">
                {item.moveset.length} Skills
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {item.moveset.slice(0, 4).map((move) => (
                <div
                  key={move.key}
                  className="flex items-center justify-between px-2 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px]"
                >
                  <span className="font-mono font-bold text-amber-400/90">
                    [{move.key}] <span className="font-sans font-medium text-slate-200">{move.name}</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {move.mastery}M
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Passive Effects for Accessories / Fruits */}
        {item.passiveEffects && item.passiveEffects.length > 0 && item.moveset.length === 0 && (
          <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-2.5 space-y-1">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-300">
              <Sparkles className="w-3 h-3" />
              Equipped Buffs
            </div>
            <ul className="space-y-0.5">
              {item.passiveEffects.slice(0, 2).map((buff, idx) => (
                <li key={idx} className="text-[11px] text-slate-300 flex items-center gap-1.5 truncate">
                  <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  {buff}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Obtainment Highlights Banner */}
        <div className="rounded-lg bg-slate-950/50 border border-slate-800/60 p-2 text-xs space-y-1">
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
            <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
            <span className="truncate">
              {item.obtainment.npcLocation || item.obtainment.bossOrRaid || item.obtainment.npcName || 'Special Event'}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono pt-1 border-t border-slate-800/40">
            <div className="flex items-center gap-2 text-slate-300">
              {item.obtainment.costBeli ? (
                <span className="text-emerald-400 font-semibold">{formatBeli(item.obtainment.costBeli)}</span>
              ) : null}
              {item.obtainment.costFragments ? (
                <span className="text-purple-400 font-semibold">{formatFragments(item.obtainment.costFragments)}</span>
              ) : null}
              {item.obtainment.dropChance ? (
                <span className="text-amber-400 font-semibold">{item.obtainment.dropChance} Drop</span>
              ) : null}
              {item.obtainment.masteryPrerequisite ? (
                <span className="text-sky-400 truncate max-w-[140px]">{item.obtainment.masteryPrerequisite}</span>
              ) : null}
            </div>
          </div>
        </div>

        {/* View Guide Button */}
        <button
          id={`btn-guide-${item.id}`}
          onClick={() => onSelect(item)}
          className="w-full mt-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-700/60"
        >
          <span>Complete Obtainment Guide</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
