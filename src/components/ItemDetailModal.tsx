import React, { useState } from 'react';
import { BloxItem } from '../types';
import { getRarityTheme, getSeaBadge, formatBeli, formatFragments } from '../utils/helpers';
import { ItemArtwork } from './ItemArtwork';
import { X, CheckCircle2, Circle, Swords, Bookmark, BookmarkCheck, MapPin, Zap, Shield, Sparkles, Flame } from 'lucide-react';

interface ItemDetailModalProps {
  item: BloxItem | null;
  isBookmarked: boolean;
  isInBuild: boolean;
  onClose: () => void;
  onToggleBookmark: (id: string) => void;
  onToggleBuild: (item: BloxItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  isBookmarked,
  isInBuild,
  onClose,
  onToggleBookmark,
  onToggleBuild
}) => {
  if (!item) return null;

  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const rarityTheme = getRarityTheme(item.rarity);
  const seaBadge = getSeaBadge(item.sea);

  return (
    <div
      id="item-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="item-detail-modal-container"
        className={`relative w-full max-w-3xl my-auto rounded-2xl bg-slate-900 border ${rarityTheme.cardBorder} shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Area */}
        <div className="relative">
          <ItemArtwork item={item} className="h-44 sm:h-52 w-full" />

          {/* Close Button */}
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Actions on Hero */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${rarityTheme.badgeBg}`}>
                {item.rarity}
              </span>
              <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${seaBadge.color}`}>
                {item.sea}
              </span>
              {item.subType && (
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-md text-xs bg-slate-800/90 text-slate-300 border border-slate-700">
                  {item.subType}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                id="modal-btn-build"
                onClick={() => onToggleBuild(item)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isInBuild
                    ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                    : 'bg-black/60 border-slate-700 text-slate-300 hover:text-white hover:bg-black/80'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span>{isInBuild ? 'In Build' : 'Equip in Build'}</span>
              </button>

              <button
                id="modal-btn-bookmark"
                onClick={() => onToggleBookmark(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isBookmarked
                    ? 'bg-rose-500/20 border-rose-500/60 text-rose-300'
                    : 'bg-black/60 border-slate-700 text-slate-300 hover:text-white hover:bg-black/80'
                }`}
              >
                {isBookmarked ? (
                  <>
                    <BookmarkCheck className="w-3.5 h-3.5 fill-rose-500/30 text-rose-400" />
                    <span>Owned</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Mark Owned</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Title & Ratings */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {item.name}
                </h2>
                {item.japaneseOrAlias && (
                  <p className="text-sm font-mono text-slate-400 mt-0.5">
                    {item.japaneseOrAlias}
                  </p>
                )}
              </div>

              {/* Combat Ratings */}
              <div className="flex items-center gap-3 font-mono text-sm bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <span className="flex items-center gap-1 text-rose-400 font-bold">
                  <Flame className="w-4 h-4 text-rose-500" /> PvP: {item.pvpRating}
                </span>
                <span className="text-slate-600">|</span>
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Shield className="w-4 h-4 text-amber-500" /> PvE: {item.pveRating}
                </span>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Obtainment Requirements & Costs */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
              <MapPin className="w-4 h-4 text-amber-400" />
              Obtainment Requirements & Location
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {item.obtainment.costBeli ? (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Beli Cost</span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">
                    {formatBeli(item.obtainment.costBeli)}
                  </span>
                </div>
              ) : null}

              {item.obtainment.costFragments ? (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Fragments</span>
                  <span className="text-purple-400 font-mono font-bold text-sm">
                    {formatFragments(item.obtainment.costFragments)}
                  </span>
                </div>
              ) : null}

              {item.obtainment.costBones ? (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Bones</span>
                  <span className="text-slate-200 font-mono font-bold text-sm">
                    {item.obtainment.costBones} Bones
                  </span>
                </div>
              ) : null}

              {item.obtainment.dropChance ? (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Drop Chance</span>
                  <span className="text-amber-400 font-mono font-bold text-sm">
                    {item.obtainment.dropChance}
                  </span>
                </div>
              ) : null}

              {item.obtainment.levelRequirement ? (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Required Level</span>
                  <span className="text-sky-400 font-mono font-bold text-sm">
                    Lv. {item.obtainment.levelRequirement}+
                  </span>
                </div>
              ) : null}

              {item.obtainment.masteryPrerequisite ? (
                <div className="col-span-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Required Mastery</span>
                  <span className="text-amber-300 font-medium text-xs">
                    {item.obtainment.masteryPrerequisite}
                  </span>
                </div>
              ) : null}
            </div>

            {item.obtainment.npcLocation && (
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                <span className="text-slate-400 font-medium">NPC / Location: </span>
                <span className="text-slate-200 font-medium">
                  {item.obtainment.npcName ? `${item.obtainment.npcName} — ` : ''}
                  {item.obtainment.npcLocation}
                </span>
              </div>
            )}

            {/* Step by step interactive quest tracker */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Step-by-Step Walkthrough (Click to track progress):
              </span>
              <div className="space-y-2">
                {item.obtainment.steps.map((step, idx) => {
                  const isDone = !!completedSteps[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleStep(idx)}
                      className={`flex items-start gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-950/30 border-emerald-600/40 text-emerald-200'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <button className="mt-0.5 shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-950" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                      <span className={`text-xs leading-relaxed ${isDone ? 'line-through opacity-80' : ''}`}>
                        <strong className="text-slate-400 mr-1.5">{idx + 1}.</strong>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Movesets Section */}
          {item.moveset.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                <Zap className="w-4 h-4 text-amber-400" />
                Moveset & Skill Descriptions
              </h3>

              <div className="grid gap-2.5">
                {item.moveset.map((move) => (
                  <div
                    key={move.key}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-bold text-xs">
                          [{move.key}]
                        </span>
                        <span className="font-semibold text-slate-100 text-sm">
                          {move.name}
                        </span>
                        {move.type && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                            {move.type}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        Mastery: {move.mastery}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300/90 leading-relaxed pl-7">
                      {move.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Passive Buffs */}
          {item.passiveEffects && item.passiveEffects.length > 0 && (
            <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-2">
              <h3 className="text-sm font-semibold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Passive Effects & Buffs
              </h3>
              <ul className="space-y-1.5">
                {item.passiveEffects.map((effect, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {effect}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pro Tips & Combos */}
          {item.tipsAndCombos && item.tipsAndCombos.length > 0 && (
            <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-2">
              <h3 className="text-sm font-semibold text-rose-300 flex items-center gap-1.5 uppercase tracking-wide">
                <Swords className="w-4 h-4 text-rose-400" />
                PvP Combo Advice & Meta Tips
              </h3>
              <ul className="space-y-1.5">
                {item.tipsAndCombos.map((tip, idx) => (
                  <li key={idx} className="text-xs text-slate-300 leading-relaxed">
                    • {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Upgrade Materials */}
          {item.upgradeMaterials && item.upgradeMaterials.length > 0 && (
            <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-2">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                Blacksmith Upgrade Materials
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.upgradeMaterials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {mat.name}: <strong className="text-amber-400">{mat.count}x</strong>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
