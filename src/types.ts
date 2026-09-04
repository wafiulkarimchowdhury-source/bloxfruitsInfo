export type ItemCategory = 'Sword' | 'Fighting Style' | 'Fruit' | 'Gun' | 'Accessory';

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';

export type Sea = 'First Sea' | 'Second Sea' | 'Third Sea' | 'All Seas';

export interface Move {
  key: 'Z' | 'X' | 'C' | 'V' | 'F' | 'Tap' | 'Passive';
  name: string;
  mastery: number;
  description: string;
  type?: 'Damage' | 'Mobility' | 'Stun' | 'Transformation' | 'Buff' | 'AoE';
}

export interface UpgradeMaterial {
  name: string;
  count: number;
}

export interface ObtainmentDetail {
  costBeli?: number;
  costFragments?: number;
  costBones?: number;
  costRobux?: number;
  masteryPrerequisite?: string;
  npcName?: string;
  npcLocation?: string;
  bossOrRaid?: string;
  dropChance?: string;
  levelRequirement?: number;
  steps: string[];
}

export interface BloxItem {
  id: string;
  name: string;
  japaneseOrAlias?: string;
  category: ItemCategory;
  rarity: Rarity;
  sea: Sea;
  subType?: string; // e.g. "Dual Sword", "Natural Fruit", "V2 Style", "Heavy Rifle"
  iconArchetype: 'katana' | 'greatsword' | 'scythe' | 'fist' | 'fruit' | 'gun' | 'crown' | 'cape' | 'trident' | 'guitar';
  summary: string;
  pvpRating: 'S+' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C';
  pveRating: 'S+' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C';
  moveset: Move[];
  obtainment: ObtainmentDetail;
  upgradeMaterials?: UpgradeMaterial[];
  passiveEffects?: string[];
  tipsAndCombos?: string[];
  tags: string[];
}

export interface FilterState {
  searchQuery: string;
  category: ItemCategory | 'All';
  sea: Sea | 'All';
  rarity: Rarity | 'All';
  sortBy: 'rarity-desc' | 'rarity-asc' | 'name-asc' | 'sea-asc' | 'pvp-rating';
  tagFilter: string | null;
  onlyBookmarked: boolean;
}

export interface PlayerBuild {
  fruitId: string | null;
  swordId: string | null;
  gunId: string | null;
  fightingStyleId: string | null;
  accessoryId: string | null;
}
