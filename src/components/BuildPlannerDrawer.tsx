import React from 'react';
import { PlayerBuild, BloxItem } from '../types';
import { getRarityTheme, formatBeli, formatFragments } from '../utils/helpers';
import { X, Swords, Zap, Apple, Crosshair, Crown, Trash2, Share2, Sparkles, Check } from 'lucide-react';

interface BuildPlannerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  build: PlayerBuild;
  items: BloxItem[];
  onRemoveFromBuild: (category: keyof PlayerBuild) => void;
  onClearBuild: () => void;
  onSelectItem: (item: BloxItem) => void;
}

export const BuildPlannerDrawer: React.FC<BuildPlannerDrawerProps> = ({
  isOpen,
  onClose,
  build,
  items,
  onRemoveFromBuild,
  onClearBuild,
  onSelectItem
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const getItem = (id: string | null) => items.find((i) => i.id === id);

  const fightingStyle = getItem(build.fightingStyleId);
  const sword = getItem(build.swordId);
  const fruit = getItem(build.fruitId);
  const gun = getItem(build.gunId);
  const accessory = getItem(build.accessoryId);

  const equippedItems = [fightingStyle, sword, fruit, gun, accessory].filter(Boolean) as BloxItem[];

  // Calculate total costs
  const totalBeli = equippedItems.reduce((acc, curr) => acc + (curr.obtainment.costBeli || 0), 0);
  const totalFragments = equippedItems.reduce((acc, curr) => acc + (curr.obtainment.costFragments || 0), 0);

  const slots = [
    {
      label: 'Fighting Style',
      key: 'fightingStyleId' as keyof PlayerBuild,
      item: fightingStyle,
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      placeholder: 'Equip a Fighting Style (e.g. Godhuman, Sanguine Art)'
    },
    {
      label: 'Sword',
      key: 'swordId' as keyof PlayerBuild,
      item: sword,
      icon: <Swords className="w-4 h-4 text-rose-400" />,
      placeholder: 'Equip a Sword (e.g. Cursed Dual Katana, TTK)'
    },
    {
      label: 'Fruit',
      key: 'fruitId' as keyof PlayerBuild,
      item: fruit,
      icon: <Apple className="w-4 h-4 text-purple-400" />,
      placeholder: 'Equip a Fruit (e.g. Kitsune, Dough, Buddha)'
    },
    {
      label: 'Gun',
      key: 'gunId' as keyof PlayerBuild,
      item: gun,
      icon: <Crosshair className="w-4 h-4 text-blue-400" />,
      placeholder: 'Equip a Gun (e.g. Soul Guitar, Kabucha)'
    },
    {
      label: 'Accessory',
      key: 'accessoryId' as keyof PlayerBuild,
      item: accessory,
      icon: <Crown className="w-4 h-4 text-teal-400" />,
      placeholder: 'Equip an Accessory (e.g. Pale Scarf, Leviathan Crown)'
    }
  ];

  const handleCopyBuild = () => {
    const text = [
      '⚔️ MY BLOX FRUITS LOADOUT ⚔️',
      `• Fighting Style: ${fightingStyle ? fightingStyle.name : 'None'}`,
      `• Sword: ${sword ? sword.name : 'None'}`,
      `• Fruit: ${fruit ? fruit.name : 'None'}`,
      `• Gun: ${gun ? gun.name : 'None'}`,
      `• Accessory: ${accessory ? accessory.name : 'None'}`,
      `💰 Total Cost: ${formatBeli(totalBeli)} & ${formatFragments(totalFragments)}`
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="build-planner-backdrop"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="build-planner-drawer"
        className="w-full sm:max-w-md h-[88vh] sm:h-full bg-slate-900 border-t sm:border-l border-slate-700 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Swords className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-serif text-lg font-bold text-white leading-tight">
                My Blox Fruits Build
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {equippedItems.length} of 5 Slots Equipped
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {equippedItems.length > 0 && (
              <button
                onClick={onClearBuild}
                title="Clear all equipped slots"
                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Total Cost Summary Card */}
        <div className="p-4 bg-slate-950/90 border-b border-slate-800/80">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Total Beli Cost</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {formatBeli(totalBeli)}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Total Fragments</span>
              <span className="font-mono font-bold text-purple-400 text-sm">
                {formatFragments(totalFragments)}
              </span>
            </div>
          </div>
        </div>

        {/* Loadout Slots List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {slots.map((slot) => {
            const item = slot.item;
            const theme = item ? getRarityTheme(item.rarity) : null;

            return (
              <div
                key={slot.key}
                className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3 space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-1.5">
                    {slot.icon}
                    <span>{slot.label}</span>
                  </div>
                  {item && (
                    <button
                      onClick={() => onRemoveFromBuild(slot.key)}
                      className="text-[11px] text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      Unequip
                    </button>
                  )}
                </div>

                {item && theme ? (
                  <div
                    onClick={() => onSelectItem(item)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border cursor-pointer transition-all bg-slate-900/90 ${theme.cardBorder} hover:bg-slate-900`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase border ${theme.badgeBg}`}>
                          {item.rarity}
                        </span>
                        <span className="font-serif font-bold text-slate-100 text-sm hover:text-amber-300">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg border border-dashed border-slate-800 text-center text-xs text-slate-500">
                    {slot.placeholder}
                  </div>
                )}
              </div>
            );
          })}

          {/* Equipped Synergy Highlights */}
          {equippedItems.length >= 2 && (
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-950/30 to-purple-950/30 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Build Synergies & Combat Viability
              </div>
              <ul className="text-xs text-slate-300 space-y-1 pl-4 list-disc">
                {fightingStyle && sword && (
                  <li>
                    <strong>{fightingStyle.name} + {sword.name}</strong>: Enables rapid weapon swapping with high-stun combo extensions.
                  </li>
                )}
                {fruit && fruit.id === 'buddha-fruit' && fightingStyle && (
                  <li className="text-emerald-300">
                    <strong>Buddha Raid Meta</strong>: Massive M1 reach with {fightingStyle.name} for 500k+ raid boss DPS.
                  </li>
                )}
                {fruit && fruit.id === 'portal-fruit' && sword && (
                  <li className="text-sky-300">
                    <strong>Portal Hunter Setup</strong>: Parallel Escape & Dimensional Rift guarantee free {sword.name} one-shot confirmations.
                  </li>
                )}
                {accessory && (
                  <li>
                    Equipped with <strong>{accessory.name}</strong> passive bonuses.
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center gap-2">
          <button
            onClick={handleCopyBuild}
            disabled={equippedItems.length === 0}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              equippedItems.length === 0
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share / Copy Build</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
