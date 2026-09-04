import { Rarity, Sea, ItemCategory } from '../types';

export function getRarityTheme(rarity: Rarity) {
  switch (rarity) {
    case 'Mythical':
      return {
        badgeBg: 'bg-fuchsia-950/70 border-fuchsia-500/50 text-fuchsia-300',
        cardBorder: 'border-fuchsia-500/30 hover:border-fuchsia-400/60',
        accentGlow: 'from-fuchsia-600/20 via-rose-600/10 to-transparent',
        tagBg: 'bg-fuchsia-900/30 text-fuchsia-300 border-fuchsia-700/40',
        textColor: 'text-fuchsia-400',
        barColor: 'bg-gradient-to-r from-fuchsia-500 to-rose-500',
        ringColor: 'ring-fuchsia-500/40',
        dropShadow: 'shadow-[0_0_20px_rgba(217,70,239,0.15)]'
      };
    case 'Legendary':
      return {
        badgeBg: 'bg-amber-950/70 border-amber-500/50 text-amber-300',
        cardBorder: 'border-amber-500/30 hover:border-amber-400/60',
        accentGlow: 'from-amber-600/20 via-orange-600/10 to-transparent',
        tagBg: 'bg-amber-900/30 text-amber-300 border-amber-700/40',
        textColor: 'text-amber-400',
        barColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
        ringColor: 'ring-amber-500/40',
        dropShadow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]'
      };
    case 'Rare':
      return {
        badgeBg: 'bg-sky-950/70 border-sky-500/50 text-sky-300',
        cardBorder: 'border-sky-500/30 hover:border-sky-400/60',
        accentGlow: 'from-sky-600/20 via-blue-600/10 to-transparent',
        tagBg: 'bg-sky-900/30 text-sky-300 border-sky-700/40',
        textColor: 'text-sky-400',
        barColor: 'bg-gradient-to-r from-sky-500 to-blue-500',
        ringColor: 'ring-sky-500/40',
        dropShadow: 'shadow-[0_0_20px_rgba(14,165,233,0.15)]'
      };
    case 'Uncommon':
      return {
        badgeBg: 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300',
        cardBorder: 'border-emerald-500/30 hover:border-emerald-400/60',
        accentGlow: 'from-emerald-600/20 via-teal-600/10 to-transparent',
        tagBg: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/40',
        textColor: 'text-emerald-400',
        barColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
        ringColor: 'ring-emerald-500/40',
        dropShadow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]'
      };
    case 'Common':
    default:
      return {
        badgeBg: 'bg-slate-800/80 border-slate-600/50 text-slate-300',
        cardBorder: 'border-slate-700/40 hover:border-slate-500/60',
        accentGlow: 'from-slate-700/20 via-slate-800/10 to-transparent',
        tagBg: 'bg-slate-800/40 text-slate-300 border-slate-700/40',
        textColor: 'text-slate-400',
        barColor: 'bg-gradient-to-r from-slate-400 to-slate-500',
        ringColor: 'ring-slate-500/40',
        dropShadow: 'shadow-[0_0_12px_rgba(148,163,184,0.08)]'
      };
  }
}

export function getSeaBadge(sea: Sea) {
  switch (sea) {
    case 'First Sea':
      return {
        label: '1st Sea',
        tag: 'Old World (Lv 1-700)',
        color: 'bg-amber-950/50 text-amber-300 border-amber-600/30'
      };
    case 'Second Sea':
      return {
        label: '2nd Sea',
        tag: 'Kingdom of Rose (Lv 700-1500)',
        color: 'bg-cyan-950/50 text-cyan-300 border-cyan-600/30'
      };
    case 'Third Sea':
      return {
        label: '3rd Sea',
        tag: 'Floating Turtle (Lv 1500+)',
        color: 'bg-violet-950/50 text-violet-300 border-violet-600/30'
      };
    case 'All Seas':
    default:
      return {
        label: 'All Seas',
        tag: 'Universal Access',
        color: 'bg-emerald-950/50 text-emerald-300 border-emerald-600/30'
      };
  }
}

export function formatBeli(amount?: number): string {
  if (!amount) return '0 Beli';
  return '$' + amount.toLocaleString() + ' Beli';
}

export function formatFragments(amount?: number): string {
  if (!amount) return '0 Fragments';
  return amount.toLocaleString() + ' F';
}

export function getCategoryBadge(category: ItemCategory) {
  switch (category) {
    case 'Sword':
      return { bg: 'bg-rose-950/60 text-rose-300 border-rose-600/30', label: 'Sword' };
    case 'Fighting Style':
      return { bg: 'bg-amber-950/60 text-amber-300 border-amber-600/30', label: 'Fighting Style' };
    case 'Fruit':
      return { bg: 'bg-purple-950/60 text-purple-300 border-purple-600/30', label: 'Fruit' };
    case 'Gun':
      return { bg: 'bg-blue-950/60 text-blue-300 border-blue-600/30', label: 'Gun' };
    case 'Accessory':
      return { bg: 'bg-teal-950/60 text-teal-300 border-teal-600/30', label: 'Accessory' };
  }
}
