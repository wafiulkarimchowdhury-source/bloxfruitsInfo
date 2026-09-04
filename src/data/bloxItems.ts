import { BloxItem } from '../types';

export const BLOX_ITEMS: BloxItem[] = [
  // ==========================================
  // SWORDS (Massive list)
  // ==========================================
  {
    id: 'cursed-dual-katana',
    name: 'Cursed Dual Katana',
    japaneseOrAlias: 'CDK / Oden Blades',
    category: 'Sword',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Dual Katana',
    iconArchetype: 'katana',
    summary: 'Forged from the fusion of Yama and Tushita. Renowned for its monstrous red/curse slashes, unmatched PvP combo potential, and lethal AoE damage.',
    pvpRating: 'S+',
    pveRating: 'S',
    moveset: [
      {
        key: 'Z',
        name: 'Revolving Ravager',
        mastery: 175,
        description: 'Dashes forward creating a swirling vortex of red cursed slashes that catches and drags enemies before blasting them backward.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Slayer of Goliath',
        mastery: 375,
        description: 'Charges forward with an unstoppable thrust, slicing past targets and generating an explosive blast of demonic cross-slashes. Breaks Instinct.',
        type: 'Stun'
      }
    ],
    obtainment: {
      masteryPrerequisite: '350 Mastery on BOTH Yama and Tushita',
      levelRequirement: 2200,
      npcName: 'Crypt Master',
      npcLocation: 'Floating Turtle (inside the rear mansion crypt behind the waterfall)',
      steps: [
        'Reach Level 2200+ and obtain both Yama and Tushita.',
        'Raise Mastery on both Yama and Tushita to at least 350.',
        'Go behind the Mansion in Floating Turtle to find the Crypt Master door.',
        'Complete the 3 Tushita Scroll Quests (Legendary Peddler, Raid on Pirate Village, and Defeat Cake Queen before torch song ends).',
        'Complete the 3 Yama Scroll Quests (Take damage from mobs until low HP, let mobs defeat you/die with Yama equipped, and defeat Soul Reaper or take Soul Reaper damage).',
        'Burn all six scrolls, combine the Alucard Fragment, enter the inner sanctum, and defeat the Cursed Skeleton boss to receive the Cursed Dual Katana.'
      ]
    },
    upgradeMaterials: [
      { name: 'Mini Tusk', count: 10 },
      { name: 'Demonic Wisp', count: 10 },
      { name: 'Dragon Scale', count: 10 }
    ],
    passiveEffects: ['+8% lifesteal potential during awakening bursts', 'Immense guard-breaking capability on both skills'],
    tipsAndCombos: ['Pair with Godhuman or Sanguine Art. Z Move into Godhuman C is one of the most reliable one-shot combos in the game.'],
    tags: ['PvP Meta', 'Combo Extender', 'Puzzle Required', 'Boss Fight', 'Mythical']
  },
  {
    id: 'true-triple-katana',
    name: 'True Triple Katana',
    japaneseOrAlias: 'TTK / Three Swords Style',
    category: 'Sword',
    rarity: 'Mythical',
    sea: 'Second Sea',
    subType: 'Triple Katana',
    iconArchetype: 'katana',
    summary: 'The ultimate form of legendary swordsmanship, wielding Shisui, Saddi, and Wando simultaneously. Delivers gigantic hurricane slashes.',
    pvpRating: 'S',
    pveRating: 'S',
    moveset: [
      {
        key: 'Z',
        name: 'Wolf Fang Rush',
        mastery: 150,
        description: 'Dashes forward slicing targets rapidly and concluding in a multi-directional claw slash that launches targets.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Dragon Hurricane',
        mastery: 300,
        description: 'Spins rapidly while firing a gigantic dragon-shaped whirlwind that traps, damages, and launches opponents skyward.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costBeli: 8000000, // 2M each x 3 + 2M craft
      masteryPrerequisite: '300 Mastery on Shisui, Saddi, and Wando',
      npcName: 'Mysterious Man',
      npcLocation: 'Green Zone (at the very peak of the highest beanstalk pillar)',
      steps: [
        'Find and purchase Shisui ($2,000,000 Beli) from Legendary Sword Dealer.',
        'Find and purchase Saddi ($2,000,000 Beli) from Legendary Sword Dealer.',
        'Find and purchase Wando ($2,000,000 Beli) from Legendary Sword Dealer.',
        'Level all 3 swords up to 300 Mastery.',
        'Climb to the very top of the Green Zone center stalk to find the Mysterious Man.',
        'Pay the Mysterious Man $2,000,000 Beli to craft the True Triple Katana (Total cost: $8,000,000 Beli).'
      ]
    },
    upgradeMaterials: [
      { name: 'Dragon Scale', count: 20 },
      { name: 'Mystic Droplet', count: 20 }
    ],
    tipsAndCombos: ['Dragon Hurricane has massive AoE hitbox, ideal for third-partying and catching opponents running away in sky battles.'],
    tags: ['PvP Meta', 'Legendary Sword Dealer', 'High Mastery', 'Mythical']
  },
  {
    id: 'dark-blade',
    name: 'Dark Blade',
    japaneseOrAlias: 'Yoru / Kokuto Yoru',
    category: 'Sword',
    rarity: 'Mythical',
    sea: 'All Seas',
    subType: 'Greatsword',
    iconArchetype: 'greatsword',
    summary: 'One of the supreme grade blades. Emits gigantic neon emerald crescent waves that slice across entire islands. Can be upgraded to V2 and V3.',
    pvpRating: 'S',
    pveRating: 'S+',
    moveset: [
      {
        key: 'Z',
        name: 'One Thousand Slices',
        mastery: 1,
        description: 'Fires multiple emerald slash waves at high velocity, culminating in a heavy piercing vertical blast.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Dark Air Slash',
        mastery: 125,
        description: 'Sends a colossal horizontal green shockwave that pierces through enemies and terrain at incredible range.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costRobux: 1200,
      npcName: 'Gamepass Shop / In-Game Trading / Brazil Cube Secret Drop',
      npcLocation: 'Available in any sea via Gamepass (1,200 Robux) or dropping from Mihawk secret events/gifts',
      steps: [
        'Purchase the Dark Blade Gamepass for 1,200 Robux or trade for it in Second/Third Sea cafe.',
        'To upgrade to Dark Blade V2: Complete the Son Quest in First Sea (find 3 love letters in Frozen Village, Skylands, and Marine Fortress).',
        'To unlock Dark Blade V3 (White Slayer): Need 2 Fist of Darkness in Second Sea, summon Darkbeard and activate the Graveyard laboratory portal simultaneously with an Angel/Human/Mink/Fish race companion.'
      ]
    },
    tags: ['Gamepass', 'Upgradable V2/V3', 'PvP Meta', 'Mythical']
  },
  {
    id: 'shark-anchor',
    name: 'Shark Anchor',
    japaneseOrAlias: 'Monster Anchor',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Heavy Anchor',
    iconArchetype: 'greatsword',
    summary: 'A colossal rusted anchor wielded by deep-sea horrors. Has unprecedented magnetizing pull, slamming enemies into submission.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Typhoon Toss',
        mastery: 150,
        description: 'Flings the colossal anchor forward; if it catches an opponent, violently reels them back like a harpoon.',
        type: 'Stun'
      },
      {
        key: 'X',
        name: 'Armor Breaker',
        mastery: 350,
        description: 'Spins the anchor in a wide arc before slamming it downward, creating an underwater geyser blast that shatters Instinct.',
        type: 'Damage'
      }
    ],
    obtainment: {
      bossOrRaid: 'Terrorshark (Anchor-bearing variant)',
      dropChance: '100% (from Anchor-bearing Terrorshark while carrying Monster Magnet)',
      npcName: 'Shark Hunter',
      npcLocation: 'Tiki Outpost (Sea Danger Level 5-6 Zone)',
      steps: [
        'Craft Tooth Necklace and Terror Jaw at the Shark Hunter NPC.',
        'Craft the Monster Magnet using: 2 Terror Eyes, 8 Electric Wings, 20 Mutant Teeth, and 10 Fools Gold.',
        'Sail to Sea Danger Level 5 or 6 (Rough Waters) with the Monster Magnet in your inventory.',
        'Spawn an Anchor-bearing Terrorshark (has 195,000 HP and a giant anchor attached to its tail).',
        'Defeat the Terrorshark to guarantee the Shark Anchor drop.'
      ]
    },
    tags: ['Sea Event', 'PvP Meta', 'Crafting', 'Legendary']
  },
  {
    id: 'fox-lamp',
    name: 'Fox Lamp',
    japaneseOrAlias: 'Kitsune Lantern / Fox Fire',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Staff / Katana',
    iconArchetype: 'katana',
    summary: 'A mystic staff glowing with ethereal blue kitsune flames. Offers near-instantaneous projectile snipes and disorienting flame trails.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Fox Fire Blast',
        mastery: 150,
        description: 'Launches three homing azure fox spirits that track opponents, detonating on contact with blinding blue fire.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Illuminating Slash',
        mastery: 300,
        description: 'Teleports behind the opponent in a flicker of blue wisps, slicing them and creating a blinding aura.',
        type: 'Mobility'
      }
    ],
    obtainment: {
      bossOrRaid: 'Kitsune Shrine Event',
      dropChance: 'Variable (Exchange 15-25 Azure Embers)',
      npcLocation: 'Kitsune Island (spawns during Full Moon in Sea Danger Level 6)',
      steps: [
        'Sail into Sea Danger Level 6 during a Full Moon until Kitsune Island appears.',
        'Interact with the central Kitsune Shrine rock when it activates.',
        'Collect Azure Embers floating across the island before the event timer expires.',
        'Offer 15-25 Azure Embers to the Shrine for a chance to receive the Fox Lamp.'
      ]
    },
    tags: ['Sea Event', 'Full Moon', 'PvP Meta', 'Legendary']
  },
  {
    id: 'tushita',
    name: 'Tushita',
    japaneseOrAlias: 'White Heaven Katana',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Katana',
    iconArchetype: 'katana',
    summary: 'One of the twin holy blades required for CDK. Features lighting-fast dash slashes and heavenly red-white light cuts.',
    pvpRating: 'S',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Heavenly Lunge',
        mastery: 150,
        description: 'Charges forward with holy thrust, delivering a piercing flash that breaks through Instinct.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Celestial Slash',
        mastery: 300,
        description: 'Unleashes a rapid volley of cross slashes that leaves opponents stunned in radiant light.',
        type: 'Stun'
      }
    ],
    obtainment: {
      bossOrRaid: 'Longma Boss (Level 2000)',
      dropChance: '100% (after completing the Holy Torch Puzzle)',
      npcLocation: 'Floating Turtle (Waterfall secret gate)',
      steps: [
        'A player on the server must summon the Rip_Indra raid boss using a God\'s Chalice and 3 Legendary Haki colors.',
        'While Rip_Indra is alive and the world is shrouded in fog, go to the waterfall on Floating Turtle.',
        'Kill the ghosts guarding the secret door, enter, jump onto the high platform, and pass through the glowing white portal.',
        'Equip the Holy Torch and light all 5 torches around Floating Turtle within 5 minutes in strict order.',
        'Enter the opened stone room and slay Longma to receive Tushita.'
      ]
    },
    tags: ['Raid Boss Drop', 'Puzzle Required', 'CDK Ingredient', 'Legendary']
  },
  {
    id: 'yama',
    name: 'Yama',
    japaneseOrAlias: 'Enma / Hell Blade',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Katana',
    iconArchetype: 'katana',
    summary: 'The demonic blade pulled from the underworld cavern. Required for CDK, dealing immense multi-slash dark damage.',
    pvpRating: 'S',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Hell Hurdle',
        mastery: 150,
        description: 'Flips through the air while releasing twin dark energy scythe slashes.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Infernal Hurricane',
        mastery: 300,
        description: 'Rapidly whirls the demonic sword, generating a vacuum tornado of black and crimson blades.',
        type: 'AoE'
      }
    ],
    obtainment: {
      npcName: 'Elite Hunter / Player Hunter',
      npcLocation: 'Castle on the Sea & Secret Waterfall Cave in Hydra Island',
      steps: [
        'Complete at least 30 Elite Hunter quests (or a combination of 30 Elite Hunter + Player Hunter quests).',
        'Go to Hydra Island and break the secret door behind the main waterfall using an explosive attack.',
        'Defeat all 5 Ghost guardians in the cavern.',
        'Interact with the sword embedded in the pedestal repeatedly until your character pulls it out.',
        'WARNING: If you have less than 30 completed quests, pulling the sword will instantly kill you!'
      ]
    },
    tags: ['Elite Hunter', 'CDK Ingredient', 'Legendary']
  },
  {
    id: 'hallow-scythe',
    name: 'Hallow Scythe',
    japaneseOrAlias: 'Soul Scythe',
    category: 'Sword',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Scythe',
    iconArchetype: 'scythe',
    summary: 'A gigantic grim reaper scythe engulfed in flickering soul flame. Boasts tremendous knockback and massive horizontal radius.',
    pvpRating: 'A+',
    pveRating: 'S',
    moveset: [
      {
        key: 'Z',
        name: 'Death Sickle',
        mastery: 150,
        description: 'Fires a crescent scythe projectile that explodes into eerie blue flame.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Soul Execution',
        mastery: 350,
        description: 'Teleports to the target, grabbing their soul and slashing downwards with devastating AoE impact.',
        type: 'Stun'
      }
    ],
    obtainment: {
      bossOrRaid: 'Soul Reaper Raid Boss',
      dropChance: '5%',
      npcLocation: 'Haunted Castle (Altar of Sacrifice)',
      steps: [
        'Roll bones at Death King in Haunted Castle (50 bones per spin) to obtain Hallow Essence.',
        'Place the Hallow Essence on the altar in the graveyard chapel to summon Soul Reaper.',
        'Defeat Soul Reaper (Level 2100 raid boss) for a 5% chance to drop the Hallow Scythe.'
      ]
    },
    tags: ['Raid Boss Drop', 'Mythical', 'AoE Control']
  },
  {
    id: 'spikey-trident',
    name: 'Spikey Trident',
    japaneseOrAlias: 'Mogura / Dough Trident',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Trident',
    iconArchetype: 'trident',
    summary: 'A barbed golden trident favored by Katakuri. Famous for the grappling pull move that drags enemies across screen straight into your combo.',
    pvpRating: 'S+',
    pveRating: 'B',
    moveset: [
      {
        key: 'Z',
        name: 'Trident Bullet',
        mastery: 150,
        description: 'Fires a high-speed spike dart that pierces opponents.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Flying Trident Pull',
        mastery: 300,
        description: 'Launches forward on a threaded spear. If it hits, yanks the opponent directly to your feet, completely disabling their movement.',
        type: 'Stun'
      }
    ],
    obtainment: {
      bossOrRaid: 'Cake Prince / Dough King',
      dropChance: '5% from Cake Prince, 15% from Dough King',
      npcLocation: 'Sea of Treats (Mirror Dimension)',
      steps: [
        'Defeat 500 enemies on Sea of Treats islands to open the portal to Cake Prince.',
        'Defeat Cake Prince for a 5% drop chance.',
        'Alternatively, craft Sweet Chalice (God\'s Chalice + 10 Conjured Cocoa) to summon Dough King, which has a higher 15% drop rate.'
      ]
    },
    tags: ['PvP Meta', 'Combo Extender', 'Raid Boss Drop', 'Legendary']
  },
  {
    id: 'saber',
    name: 'Saber',
    japaneseOrAlias: 'Gryphon / Shanks Sword',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'First Sea',
    subType: 'Saber',
    iconArchetype: 'katana',
    summary: 'The iconic weapon of the Saber Expert. Easy to obtain in First Sea and can be evolved into Saber V2 for monstrous damage scaling.',
    pvpRating: 'A',
    pveRating: 'S',
    moveset: [
      {
        key: 'Z',
        name: 'Deadly Rush',
        mastery: 50,
        description: 'Surges forward delivering a barrage of swift red slashes.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Triple Slash',
        mastery: 125,
        description: 'Unleashes a trio of crimson flying sword waves that pierce groups.',
        type: 'AoE'
      }
    ],
    obtainment: {
      bossOrRaid: 'Saber Expert (Shanks)',
      dropChance: '100%',
      levelRequirement: 200,
      npcLocation: 'Jungle (Secret Temple)',
      steps: [
        'Reach Level 200.',
        'Step on all 5 hidden green floor buttons scattered around Jungle Island.',
        'Take the Torch from the cellar inside the Jungle Questgiver structure.',
        'Take the Torch to Desert Island and burn the wooden door inside the ruined house to get the Cup.',
        'Fill the Cup with leaking icicle water in Frozen Village cave.',
        'Give water to the Sick Man in Frozen Village, then talk to Rich Son in Pirate Village.',
        'Defeat the Mob Leader on a small island near Pirate Village and return to Rich Son for the Relic.',
        'Use the Relic to unlock the temple door in Jungle and defeat the Saber Expert to get the Saber.',
        'Saber V2 Upgrade: Reach 1,000,000 Bounty/Honor and defeat another player near your level with Saber equipped.'
      ]
    },
    tags: ['First Sea GOAT', 'Upgradable V2', 'Puzzle Required', 'Legendary']
  },
  {
    id: 'shisui',
    name: 'Shisui',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Katana',
    iconArchetype: 'katana',
    summary: 'One of the three Legendary Swords of the Second Sea. Infused with purple lightning, extremely favored for swift PvP combo starters.',
    pvpRating: 'S',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'True Quiet Rush',
        mastery: 150,
        description: 'Instant dash slash shrouded in purple sparks that stuns targets in place.',
        type: 'Stun'
      },
      {
        key: 'X',
        name: 'Focus Shot',
        mastery: 300,
        description: 'Fires a focused purple lightning beam that pierces through defenses.',
        type: 'Damage'
      }
    ],
    obtainment: {
      costBeli: 2000000,
      npcName: 'Legendary Sword Dealer',
      npcLocation: 'Second Sea (Spawns across 7 spots: Colosseum arches, Green Zone leaves, Graveyard peak, Factory rock, Usoap island, etc.)',
      steps: [
        'Talk to the Manager in the Cafe at Kingdom of Rose to check dealer status.',
        'Wait for the Manager dialogue: "Some pirates said they saw him on a nearby island..." (indicates Dealer is spawned for 15 minutes).',
        'Search the 7 known spawn locations.',
        'Purchase Shisui for $2,000,000 Beli when he offers it (offers Shisui, Saddi, or Wando randomly).'
      ]
    },
    tags: ['Legendary Sword Dealer', 'TTK Ingredient', 'PvP Meta', 'Legendary']
  },
  {
    id: 'wando',
    name: 'Wando',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Katana',
    iconArchetype: 'katana',
    summary: 'One of the three Legendary Swords sold by the dealer. Features a pure white sheath and creates high-flying air geysers.',
    pvpRating: 'A',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Water Rush',
        mastery: 150,
        description: 'Charges forward with azure hydro slashes.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Earthquake Slice',
        mastery: 300,
        description: 'Slices upwards sending ground shockwaves that toss enemies into the air.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costBeli: 2000000,
      npcName: 'Legendary Sword Dealer',
      npcLocation: 'Second Sea random spawn points',
      steps: [
        'Coordinate with the Cafe Manager to check spawn timing (spawns every 4-6 hours per server).',
        'Locate the dealer and purchase Wando for $2,000,000 Beli.'
      ]
    },
    tags: ['Legendary Sword Dealer', 'TTK Ingredient', 'Legendary']
  },
  {
    id: 'saddi',
    name: 'Saddi',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Katana',
    iconArchetype: 'katana',
    summary: 'The third blade of the Legendary Sword Dealer trio. Features rapid blood-red piercing slashes.',
    pvpRating: 'A',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Flying Slashes',
        mastery: 150,
        description: 'Fires two rapid crimson arcs.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Red Dragon Sweep',
        mastery: 300,
        description: 'Sweeps the blade releasing a fiery red dragon burst that knocks foes back.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costBeli: 2000000,
      npcName: 'Legendary Sword Dealer',
      npcLocation: 'Second Sea random spawn points',
      steps: [
        'Check Cafe Manager dialogue until dealer arrives.',
        'Find the dealer and buy Saddi for $2,000,000 Beli.'
      ]
    },
    tags: ['Legendary Sword Dealer', 'TTK Ingredient', 'Legendary']
  },
  {
    id: 'rengoku',
    name: 'Rengoku',
    japaneseOrAlias: 'Flame Katana',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Katana',
    iconArchetype: 'katana',
    summary: 'A blazing fire blade locked inside a secret chest in the Ice Castle. Ignites enemies with severe burning damage.',
    pvpRating: 'A',
    pveRating: 'A+',
    moveset: [
      {
        key: 'Z',
        name: 'Demon Slayer',
        mastery: 150,
        description: 'Dashes forward slicing foes and encasing them in intense flame pillar.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Burning Slash',
        mastery: 350,
        description: 'Unleashes a huge wave of fire that leaves a burning magma trail.',
        type: 'AoE'
      }
    ],
    obtainment: {
      bossOrRaid: 'Awakened Ice Admiral / Ice Castle Mobs',
      dropChance: '1-5% for Hidden Key',
      npcLocation: 'Ice Castle (Secret room hidden inside back right stairwell)',
      steps: [
        'Travel to Ice Castle in Second Sea.',
        'Defeat Arctic Warriors or the Awakened Ice Admiral boss until you receive the "Hidden Key" (NOT the Library Key).',
        'Go behind the stairs on the right side of the throne room and walk through the hidden fake wall.',
        'Unlock the wooden chest in the secret room using the Hidden Key to receive Rengoku.'
      ]
    },
    tags: ['Boss Drop', 'Secret Room', 'Legendary']
  },
  {
    id: 'buddy-sword',
    name: 'Buddy Sword',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Greatsword',
    iconArchetype: 'greatsword',
    summary: 'A colossal golden cleaver dropped by Cake Queen. Features lightning and fire projectile waves that pierce shields.',
    pvpRating: 'A+',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Heat Slash',
        mastery: 150,
        description: 'Launches a searing blade of molten energy.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Lightning Wave',
        mastery: 300,
        description: 'Fires an electrifying blast that shocks and stuns the target.',
        type: 'Stun'
      }
    ],
    obtainment: {
      bossOrRaid: 'Cake Queen (Level 2175 Boss)',
      dropChance: '5%',
      npcLocation: 'Ice Cream Land / Sea of Treats',
      steps: ['Locate Cake Queen inside her candy palace on Sea of Treats.', 'Defeat her repeatedly until Buddy Sword drops (5% rate).']
    },
    tags: ['Boss Drop', 'Legendary']
  },
  {
    id: 'midnight-blade',
    name: 'Midnight Blade',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Dual Blade',
    iconArchetype: 'katana',
    summary: 'Forged from concentrated darkness in the Cursed Ship. Has a teleporting slash and dark dimension explosion.',
    pvpRating: 'A',
    pveRating: 'B',
    moveset: [
      {
        key: 'Z',
        name: 'Portal Opening',
        mastery: 150,
        description: 'Teleports into dark mist and strikes surrounding enemies.',
        type: 'Mobility'
      },
      {
        key: 'X',
        name: 'Sword Pout',
        mastery: 325,
        description: 'Releases a dome of pitch-black swords that explode outward.',
        type: 'AoE'
      }
    ],
    obtainment: {
      npcName: 'El Perro',
      npcLocation: 'Cursed Ship bedroom in Second Sea',
      steps: [
        'Collect 100 Ectoplasm by defeating Ship Deckhands or the Cursed Captain in Cursed Ship.',
        'Find El Perro in one of the lower bedrooms and trade 100 Ectoplasm for the Midnight Blade.'
      ]
    },
    tags: ['Ectoplasm', 'Second Sea', 'Legendary']
  },
  {
    id: 'soul-cane',
    name: 'Soul Cane',
    japaneseOrAlias: 'Brook Cane',
    category: 'Sword',
    rarity: 'Rare',
    sea: 'First Sea',
    subType: 'Cane Sword',
    iconArchetype: 'katana',
    summary: 'A deceptively slender cane concealing an ice-sharp rapier. The Z move Soul Beam provides an instant long-duration stun, making it a budget PvP legend.',
    pvpRating: 'S',
    pveRating: 'C',
    moveset: [
      {
        key: 'Z',
        name: 'Soul Beam',
        mastery: 40,
        description: 'Fires an instantaneous white ray that freezes and hard-stuns the enemy in place for several seconds.',
        type: 'Stun'
      },
      {
        key: 'X',
        name: 'Soul Slash',
        mastery: 120,
        description: 'Swipes the cane sword with high knockback.',
        type: 'Damage'
      }
    ],
    obtainment: {
      costBeli: 750000,
      npcName: 'Living Skeleton',
      npcLocation: 'Magma Village (hidden inside the volcano secret door)',
      steps: [
        'Go to Magma Village in First Sea.',
        'Enter the small secret doorway behind the volcano.',
        'Purchase Soul Cane from Living Skeleton for $750,000 Beli.'
      ]
    },
    tags: ['PvP Meta', 'Budget Stunner', 'Rare']
  },
  {
    id: 'koko',
    name: 'Koko',
    japaneseOrAlias: 'Law Kikoku Blade',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Nodachi',
    iconArchetype: 'katana',
    summary: 'Trafalgar Law iconic nodachi. When used in conjunction with the Control fruit, its slash range expands across the entire room sphere.',
    pvpRating: 'A',
    pveRating: 'B',
    moveset: [
      {
        key: 'Z',
        name: 'Electric Slash',
        mastery: 150,
        description: 'Sends an electrified crescent shockwave.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Injection Shot',
        mastery: 325,
        description: 'Lunges forward thrusting the blade with surgical electric burst.',
        type: 'Stun'
      }
    ],
    obtainment: {
      bossOrRaid: 'Order Raid Boss (Law)',
      dropChance: '5-10%',
      npcLocation: 'Laboratory in Hot and Cold / Factory',
      steps: [
        'Buy a Microchip for 1,000 Fragments from the Arithmetic NPC in Hot and Cold.',
        'Start the Order Raid in the secret laboratory.',
        'Defeat Order for a chance to drop Koko.'
      ]
    },
    tags: ['Raid Boss Drop', 'Control Synergy', 'Legendary']
  },
  {
    id: 'canvander',
    name: 'Canvander',
    japaneseOrAlias: 'Cavendish Rapier / Durandal',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Rapier',
    iconArchetype: 'katana',
    summary: 'A pristine golden rapier dropped by Beautiful Pirate. Renowned for its graceful dashes and rapid multi-thrust piercing attacks.',
    pvpRating: 'A+',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Piercing Dash', mastery: 150, description: 'Rapidly thrusts forward, stabbing and breaking through defenses.', type: 'Damage' },
      { key: 'X', name: 'Petal Dance', mastery: 300, description: 'Dashes through targets in an elegant star pattern leaving rose petal trails.', type: 'Mobility' }
    ],
    obtainment: {
      bossOrRaid: 'Beautiful Pirate (Level 1950 Boss)',
      dropChance: '5%',
      levelRequirement: 1950,
      npcLocation: 'Floating Turtle (inside the secret tree domain domain)',
      steps: [
        'Reach Level 1950+.',
        'Enter the dimensional rift behind the Mansion on Floating Turtle.',
        'Defeat the Beautiful Pirate boss repeatedly for a 5% drop chance.'
      ]
    },
    tags: ['Boss Drop', 'High Mobility', 'Legendary']
  },
  {
    id: 'pole-2nd-form',
    name: 'Pole (2nd Form)',
    japaneseOrAlias: 'Enel Golden Staff V2',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Staff',
    iconArchetype: 'trident',
    summary: 'Infused with the pure electrical fury of the Thunder God. Features two instant lightning-strike stuns that are virtually inescapable in combos.',
    pvpRating: 'S',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Hand of God', mastery: 150, description: 'Summons an instantaneous column of holy lightning directly onto the opponent.', type: 'Stun' },
      { key: 'X', name: 'Electric Prison', mastery: 350, description: 'Traps the enemy in an expanding electrical cage that locks them in place.', type: 'Stun' }
    ],
    obtainment: {
      costFragments: 5000,
      masteryPrerequisite: '180 Mastery on Pole (1st Form)',
      bossOrRaid: 'Rumble Raid Awakening',
      npcName: 'Thunder God',
      npcLocation: 'Skylands (First Sea) & Raid Laboratory (Second Sea)',
      steps: [
        'Obtain Pole (1st Form) from Thunder God in Upper Skylands (5% drop).',
        'Raise Pole (1st Form) to 180 Mastery.',
        'Awaken all 5 moves of the Rumble Fruit.',
        'Complete a Rumble Raid while holding the Rumble Fruit; you will be teleported to the secret cloud merchant to buy Pole 2nd Form for 5,000 Fragments.'
      ]
    },
    tags: ['PvP Meta', 'Double Stun', 'Fragment Cost', 'Legendary']
  },
  {
    id: 'bisento',
    name: 'Bisento',
    japaneseOrAlias: 'Whitebeard Naginata',
    category: 'Sword',
    rarity: 'Legendary',
    sea: 'First Sea',
    subType: 'Polearm',
    iconArchetype: 'greatsword',
    summary: 'The colossal naginata of the strongest man. Unleashes massive seismic air-quakes and high base damage.',
    pvpRating: 'B+',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Wind Bullet', mastery: 50, description: 'Slices the air firing a compressed shockwave.', type: 'Damage' },
      { key: 'X', name: 'Quake Sphere', mastery: 125, description: 'Strikes the atmosphere creating cracking quake fissures that shatter guards.', type: 'AoE' }
    ],
    obtainment: {
      costBeli: 1000000,
      levelRequirement: 250,
      npcName: 'Master Sword Dealer',
      npcLocation: 'Skylands (First Sea, inside the upper temple)',
      steps: [
        'Reach Level 250+ in First Sea.',
        'Travel to Upper Skylands temple and purchase Bisento for $1,000,000 Beli.',
        'Bisento V2 Upgrade: Defeat Greybeard (Whitebeard raid boss in Marine Fortress) to evolve it into Bisento V2.'
      ]
    },
    tags: ['First Sea', 'Upgradable V2', 'Legendary']
  },
  {
    id: 'dragon-trident',
    name: 'Dragon Trident',
    category: 'Sword',
    rarity: 'Rare',
    sea: 'Second Sea',
    subType: 'Trident',
    iconArchetype: 'trident',
    summary: 'A three-pronged sea spear dropped by Tide Keeper. Emits water dragon geysers that knock opponents across the map.',
    pvpRating: 'A',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Sea Dragon Flying Thrust', mastery: 150, description: 'Surges forward wrapped in water serpent.', type: 'Damage' },
      { key: 'X', name: 'Water Dragon Roar', mastery: 300, description: 'Summons a raging water dragon geyser that pulls and damages enemies.', type: 'AoE' }
    ],
    obtainment: {
      bossOrRaid: 'Tide Keeper (Level 1475 Boss)',
      dropChance: '1-2%',
      npcLocation: 'Forgotten Island (Second Sea)',
      steps: ['Defeat Tide Keeper on Forgotten Island repeatedly until Dragon Trident drops.']
    },
    tags: ['Boss Drop', 'Second Sea', 'Rare']
  },
  {
    id: 'gravity-cane',
    name: 'Gravity Cane',
    japaneseOrAlias: 'Fujitora Blade',
    category: 'Sword',
    rarity: 'Rare',
    sea: 'Second Sea',
    subType: 'Cane Sword',
    iconArchetype: 'katana',
    summary: 'Manipulates localized gravitational force. Can drop mini meteors and pull enemies straight into your blade.',
    pvpRating: 'A',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Gravity Push', mastery: 125, description: 'Repels all surrounding opponents with immense gravitational wave.', type: 'AoE' },
      { key: 'X', name: 'Meteor Rain', mastery: 250, description: 'Pulls a blazing meteor from the sky.', type: 'AoE' }
    ],
    obtainment: {
      bossOrRaid: 'Fajita (Level 925 Boss)',
      dropChance: '5%',
      npcLocation: 'Green Zone (Second Sea)',
      steps: ['Defeat Fajita on Green Zone for a 5% drop chance.']
    },
    tags: ['Boss Drop', 'Rare']
  },

  // ==========================================
  // FIGHTING STYLES (Massive list)
  // ==========================================
  {
    id: 'godhuman',
    name: 'Godhuman',
    japaneseOrAlias: 'Divine Martial Arts / Supreme Style',
    category: 'Fighting Style',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Endgame V2 Style',
    iconArchetype: 'fist',
    summary: 'The pinnacle of fighting styles in Blox Fruits. Possesses hyper-fast combo starters, invincible dash frames, and screen-shattering heavenly impact.',
    pvpRating: 'S+',
    pveRating: 'S+',
    moveset: [
      {
        key: 'Z',
        name: 'Soaring Beast',
        mastery: 125,
        description: 'Lunges forward with a heavenly punch, summoning a dragon-shaped shockwave that breaks Instinct and drags the target.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Heaven and Earth',
        mastery: 250,
        description: 'Tap for rapid wind punches, or HOLD to unleash a colossal explosion that shakes the camera and pulls nearby players into the blast.',
        type: 'AoE'
      },
      {
        key: 'C',
        name: 'Sixth Realm Gun',
        mastery: 350,
        description: 'Flies across the screen with an explosive divine grapple, blasting through Instinct and punching the target with cataclysmic force.',
        type: 'Stun'
      }
    ],
    obtainment: {
      costBeli: 5000000,
      costFragments: 5000,
      masteryPrerequisite: '400 Mastery on Superhuman, Death Step, Sharkman Karate, Electric Claw, AND Dragon Talon',
      npcName: 'Ancient Monk',
      npcLocation: 'Floating Turtle (Inside the hollow base of the giant tree near the Horned Pirate camp)',
      steps: [
        'Achieve 400 Mastery on all 5 prerequisite fighting styles: Superhuman, Death Step, Sharkman Karate, Electric Claw, and Dragon Talon.',
        'Gather the required crafting materials: 20 Fish Tails, 20 Magma Ore, 10 Dragon Scales, and 10 Mystic Droplets.',
        'Have $5,000,000 Beli and 5,000 Fragments ready.',
        'Enter the hollow tree trunk on Floating Turtle and speak to the Ancient Monk to unlock Godhuman permanently.'
      ]
    },
    tipsAndCombos: ['Godhuman C into CDK Z into CDK X is the staple competitive PvP combo.'],
    tags: ['PvP Meta', 'Endgame Grind', 'Materials Required', 'Mythical']
  },
  {
    id: 'sanguine-art',
    name: 'Sanguine Art',
    japaneseOrAlias: 'Vampiric Martial Arts',
    category: 'Fighting Style',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Blood Magic Style',
    iconArchetype: 'fist',
    summary: 'Infused with the blood of the Leviathan. Steals massive amounts of HP on hit, traps opponents in blood spheres, and delivers immense multi-target burst.',
    pvpRating: 'S+',
    pveRating: 'S+',
    moveset: [
      {
        key: 'Z',
        name: 'Bloodhound Drain',
        mastery: 125,
        description: 'Dashes forward clawing the target, ripping out their vital essence to heal your health pool by 20% of damage dealt.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Scarlet Tear',
        mastery: 250,
        description: 'Charges blood spikes that burst in a massive forward cone, knocking up all trapped opponents.',
        type: 'AoE'
      },
      {
        key: 'C',
        name: 'Devourer of Worlds',
        mastery: 350,
        description: 'Summons a gigantic dark-red blood vortex from the sky that pins enemies down while draining their health continuously.',
        type: 'Stun'
      }
    ],
    obtainment: {
      costBeli: 5000000,
      costFragments: 5000,
      npcName: 'Shafi',
      npcLocation: 'Tiki Outpost (Basement cellar locked behind heart gate)',
      steps: [
        'Harpoon and bring back a Leviathan Heart from the frozen Leviathan raid in Sea Danger Level 6 using the Beast Hunter ship.',
        'Collect materials: 2 Dark Fragments (from Darkbeard raid), 20 Demonic Wisps (from Haunted Castle), 20 Vampire Fangs (from Graveyard).',
        'Have $5,000,000 Beli and 5,000 Fragments ready.',
        'Head to Tiki Outpost, walk into the basement behind the docks, and interact with Shafi to learn Sanguine Art.'
      ]
    },
    passiveEffects: ['Life Leech on basic M1 attacks and Z skill (heals 20% of damage dealt)'],
    tags: ['Sea Event', 'PvP Meta', 'Lifesteal', 'Mythical']
  },
  {
    id: 'electric-claw',
    name: 'Electric Claw',
    japaneseOrAlias: 'E-Claw / Mink Claws',
    category: 'Fighting Style',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'V2 Fighting Style',
    iconArchetype: 'fist',
    summary: 'The upgraded evolution of Electro. Renowned for its hyper-fast forward dash (C move) that acts as one of the best combo starters and mobility tools in the game.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Rampage Slash',
        mastery: 110,
        description: 'Tears through foes with rapid electrified claws, leaving a static stun.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Lightning Thrust',
        mastery: 220,
        description: 'Fires an electrifying piercing beam that knocks opponents back.',
        type: 'Damage'
      },
      {
        key: 'C',
        name: 'Thunderclap and Flash',
        mastery: 330,
        description: 'Surges forward at lightning speed, grabbing the target and slamming them down in an explosive electrical burst.',
        type: 'Stun'
      }
    ],
    obtainment: {
      costBeli: 3000000,
      costFragments: 5000,
      masteryPrerequisite: '400 Mastery on Electro',
      npcName: 'Previous Hero',
      npcLocation: 'Floating Turtle (Beside the Mansion)',
      steps: [
        'Get Electro to 400 Mastery.',
        'Talk to the Previous Hero NPC near the Mansion on Floating Turtle.',
        'Accept his challenge: Reach the Mansion within 30 seconds after starting the timer.',
        'Return to the Previous Hero, pay $3,000,000 Beli and 5,000 Fragments to unlock Electric Claw.'
      ]
    },
    tags: ['PvP Meta', 'High Mobility', 'V2 Style', 'Legendary']
  },
  {
    id: 'dragon-talon',
    name: 'Dragon Talon',
    category: 'Fighting Style',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'V2 Fighting Style',
    iconArchetype: 'fist',
    summary: 'Upgraded evolution of Dragon Breath. Engulfs the user in monstrous dragon fire with huge hitboxes and immense pushback.',
    pvpRating: 'S',
    pveRating: 'S',
    moveset: [
      {
        key: 'Z',
        name: 'Talon Lighter',
        mastery: 125,
        description: 'Dashes forward with a flaming uppercut that launches enemies into the air.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Dragon Flame Blast',
        mastery: 250,
        description: 'Hurls a colossal fiery dragon projectile that detonates on impact.',
        type: 'AoE'
      },
      {
        key: 'C',
        name: 'Infernal Whirlwind',
        mastery: 350,
        description: 'Charges up an immense vortex of dragon fire, pulling in all surrounding foes before releasing a devastating burst.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costBeli: 3000000,
      costFragments: 5000,
      masteryPrerequisite: '400 Mastery on Dragon Breath',
      npcName: 'Uzoth',
      npcLocation: 'Haunted Castle (in the high gear shaft on the left roof tower)',
      steps: [
        'Get Dragon Breath to 400 Mastery.',
        'Collect bones and spin at Death King to obtain "Fire Essence".',
        'Bring the Fire Essence to Uzoth in the Haunted Castle tower gear.',
        'Pay $3,000,000 Beli and 5,000 Fragments to learn Dragon Talon.'
      ]
    },
    tags: ['AoE Damage', 'V2 Style', 'Fire Damage', 'Legendary']
  },
  {
    id: 'sharkman-karate',
    name: 'Sharkman Karate',
    category: 'Fighting Style',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'V2 Fighting Style',
    iconArchetype: 'fist',
    summary: 'The ultimate grinding fighting style. Has the fastest M1 click speed in the entire game and huge water wave hitboxes, making it king of Buddha raids.',
    pvpRating: 'A+',
    pveRating: 'S+',
    moveset: [
      {
        key: 'Z',
        name: 'Twelve Water Palms',
        mastery: 100,
        description: 'Strikes the air twelve times sending piercing water bullets.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Pressure Whirlpool',
        mastery: 200,
        description: 'Fires a high-pressure water vortex that pulls and immobilizes enemies.',
        type: 'Stun'
      },
      {
        key: 'C',
        name: 'Great Sea Spear',
        mastery: 300,
        description: 'Dashes forward hurling a giant trident of compressed sea water that knocks targets away.',
        type: 'Damage'
      }
    ],
    obtainment: {
      costBeli: 2500000,
      costFragments: 5000,
      masteryPrerequisite: '400 Mastery on Water Kung Fu',
      npcName: 'Daigrock the Sharkman',
      npcLocation: 'Forgotten Island (near the dock)',
      steps: [
        'Get Water Kung Fu to 400 Mastery.',
        'Defeat Tide Keeper on Forgotten Island until he drops the Water Key (10-15% chance).',
        'Hand the Water Key to Daigrock the Sharkman.',
        'Pay $2,500,000 Beli and 5,000 Fragments to purchase Sharkman Karate.'
      ]
    },
    tags: ['Grinding King', 'Fastest M1', 'Buddha Meta', 'Legendary']
  },
  {
    id: 'death-step',
    name: 'Death Step',
    japaneseOrAlias: 'Diable Jambe V2',
    category: 'Fighting Style',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'V2 Fighting Style',
    iconArchetype: 'fist',
    summary: 'Evolved Black Leg kicking style with searing blue/crimson flames and high combo damage.',
    pvpRating: 'A+',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Flying Vermilion Slash',
        mastery: 100,
        description: 'Launches a flaming air kick projectile.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Maximum Air Kick',
        mastery: 200,
        description: 'Leaps and delivers a rapid barrage of flaming kicks.',
        type: 'Damage'
      },
      {
        key: 'C',
        name: 'Wind Bullet',
        mastery: 300,
        description: 'Charges up an immense concussive kick, detonating upon contact.',
        type: 'Stun'
      },
      {
        key: 'V',
        name: 'Maximum Overheat',
        mastery: 400,
        description: 'Passive buff: Ignites legs in searing flames, boosting all M1 and move damage by 15% and causing burning DOT.',
        type: 'Buff'
      }
    ],
    obtainment: {
      costBeli: 2500000,
      costFragments: 5000,
      masteryPrerequisite: '400 Mastery on Dark Step',
      npcName: 'Phoey',
      npcLocation: 'Ice Castle (Library)',
      steps: [
        'Get Dark Step to 400 Mastery.',
        'Defeat Awakened Ice Admiral until he drops the Library Key.',
        'Unlock the library door inside Ice Castle to reveal Phoey.',
        'Pay $2,500,000 Beli and 5,000 Fragments to learn Death Step.'
      ]
    },
    tags: ['Fire Damage', 'V2 Style', 'Legendary']
  },
  {
    id: 'superhuman',
    name: 'Superhuman',
    category: 'Fighting Style',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Hybrid Fighting Style',
    iconArchetype: 'fist',
    summary: 'The original combo legend of Second Sea. Requires mastering all four base styles to 300. Incredibly snappy knockups.',
    pvpRating: 'A+',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Beast Owl Slash',
        mastery: 110,
        description: 'Dashes forward executing a swift multi-hit claw strike.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Thunder Clap',
        mastery: 220,
        description: 'Claps hands creating a heavy shockwave stun.',
        type: 'Stun'
      },
      {
        key: 'C',
        name: 'Conqueror Gun',
        mastery: 330,
        description: 'Charges forward with an earth-shattering punch that sends opponents flying into walls.',
        type: 'Damage'
      }
    ],
    obtainment: {
      costBeli: 3000000,
      masteryPrerequisite: '300 Mastery on Dark Step, Electro, Water Kung Fu, AND Dragon Breath',
      npcName: 'Martial Arts Master',
      npcLocation: 'Snow Mountain (Cave hidden inside the side cliff)',
      steps: [
        'Level Dark Step, Electro, Water Kung Fu, and Dragon Breath to 300 Mastery each.',
        'Go to Snow Mountain in Second Sea and enter the hidden cave on the mountain cliff.',
        'Pay $3,000,000 Beli to the Martial Arts Master to unlock Superhuman.'
      ]
    },
    tags: ['Godhuman Prerequisite', 'PvP Combos', 'Legendary']
  },
  {
    id: 'dragon-breath',
    name: 'Dragon Breath',
    category: 'Fighting Style',
    rarity: 'Rare',
    sea: 'Second Sea',
    subType: 'Base Fighting Style',
    iconArchetype: 'fist',
    summary: 'The first style unlockable with Fragments. Emits fiery dragon claws and breath waves.',
    pvpRating: 'B',
    pveRating: 'A',
    moveset: [
      {
        key: 'Z',
        name: 'Dragon Rush',
        mastery: 100,
        description: 'Dashes forward clawing with fiery fists.',
        type: 'Damage'
      },
      {
        key: 'X',
        name: 'Dragon Fire',
        mastery: 200,
        description: 'Breathes a column of flame.',
        type: 'AoE'
      },
      {
        key: 'C',
        name: 'Dragon Explosion',
        mastery: 300,
        description: 'Smashes the ground creating a fiery shockwave.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costFragments: 1500,
      npcName: 'Sabi',
      npcLocation: 'Kingdom of Rose (Inside the wall tunnel connecting Green Zone bridge)',
      steps: [
        'Collect 1,500 Fragments (from Raids, Sea Beasts, or Ship Raids).',
        'Find Sabi inside the stone bridge tunnel in Second Sea and purchase Dragon Breath.'
      ]
    },
    tags: ['Fragment Cost', 'Rare']
  },
  {
    id: 'water-kung-fu',
    name: 'Water Kung Fu',
    category: 'Fighting Style',
    rarity: 'Rare',
    sea: 'First Sea',
    subType: 'Base Fighting Style',
    iconArchetype: 'fist',
    summary: 'First Sea fighting style with fluid punches and water streams. High M1 attack speed, great for leveling.',
    pvpRating: 'B',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Steam Charge', mastery: 70, description: 'Surges forward with water-coated fist.', type: 'Damage' },
      { key: 'X', name: 'Deadly Shower', mastery: 130, description: 'Rapidly fires water droplets.', type: 'Damage' },
      { key: 'C', name: 'Heavy Water Punch', mastery: 200, description: 'Slams a tidal punch that tosses targets back.', type: 'Damage' }
    ],
    obtainment: {
      costBeli: 750000,
      npcName: 'Water Teacher',
      npcLocation: 'Underwater City (First Sea, inside the secret wall near the Fishman Lord room)',
      steps: ['Go to Underwater City, find the secret gap in the stone wall, and buy for $750,000 Beli.']
    },
    tags: ['First Sea', 'Sharkman Prerequisite', 'Rare']
  },
  {
    id: 'dark-step',
    name: 'Dark Step',
    category: 'Fighting Style',
    rarity: 'Uncommon',
    sea: 'First Sea',
    subType: 'Base Fighting Style',
    iconArchetype: 'fist',
    summary: 'The classic leg-based martial art. Cheap, accessible, and features the Overheat fire buff.',
    pvpRating: 'C',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Flying Kick', mastery: 40, description: 'High-speed kick gap closer.', type: 'Mobility' },
      { key: 'X', name: 'Breakdance', mastery: 90, description: 'Spins on hands sweeping surrounding mobs.', type: 'AoE' },
      { key: 'C', name: 'Barrage', mastery: 150, description: 'Unleashes rapid kick flurry.', type: 'Damage' }
    ],
    obtainment: {
      costBeli: 150000,
      npcName: 'Black Leg Teacher',
      npcLocation: 'Pirate Village (First Sea, hidden inside the doorway between houses)',
      steps: ['Purchase from Black Leg Teacher in Pirate Village for $150,000 Beli.']
    },
    tags: ['First Sea', 'Death Step Prerequisite', 'Uncommon']
  },
  {
    id: 'electro',
    name: 'Electro',
    category: 'Fighting Style',
    rarity: 'Rare',
    sea: 'First Sea',
    subType: 'Base Fighting Style',
    iconArchetype: 'fist',
    summary: 'The Mink tribe fighting technique channeling raw electricity into physical punches and static discharge.',
    pvpRating: 'B',
    pveRating: 'B+',
    moveset: [
      { key: 'Z', name: 'Electric Tackle', mastery: 60, description: 'Surges forward wrapped in crackling sparks, tackling the target.', type: 'Damage' },
      { key: 'X', name: 'Electrical Floor', mastery: 120, description: 'Discharges lightning onto the ground below, shocking all surrounding mobs.', type: 'AoE' },
      { key: 'C', name: 'Lightning Push', mastery: 200, description: 'Blasts an explosive ball of high-voltage lightning from the palms.', type: 'Damage' }
    ],
    obtainment: {
      costBeli: 500000,
      npcName: 'Mad Scientist',
      npcLocation: 'Skylands (First Sea, behind the yellow house at the lower Skylands island)',
      steps: ['Locate the Mad Scientist behind the house in lower Skylands and purchase Electro for $500,000 Beli.']
    },
    tags: ['First Sea', 'Electric Claw Prerequisite', 'Rare']
  },
  {
    id: 'combat',
    name: 'Combat',
    category: 'Fighting Style',
    rarity: 'Common',
    sea: 'First Sea',
    subType: 'Starter Style',
    iconArchetype: 'fist',
    summary: 'The default hand-to-hand combat every pirate and marine starts with. Simple, honest, and nostalgic.',
    pvpRating: 'C',
    pveRating: 'C',
    moveset: [
      { key: 'Z', name: 'Smash', mastery: 20, description: 'Punches downward with both fists.', type: 'Damage' },
      { key: 'X', name: 'Pummel', mastery: 40, description: 'Dashes forward executing a quick jab combination.', type: 'Damage' }
    ],
    obtainment: {
      npcLocation: 'Given automatically upon creating your character',
      steps: ['Free starting fighting style. Once unequipped for another style, cannot be re-obtained unless reset!']
    },
    tags: ['Starter', 'Common']
  },

  // ==========================================
  // FRUITS
  // ==========================================
  {
    id: 'kitsune-fruit',
    name: 'Kitsune Fruit',
    japaneseOrAlias: 'Nine-Tailed Fox / Mythical Beast',
    category: 'Fruit',
    rarity: 'Mythical',
    sea: 'All Seas',
    subType: 'Beast Fruit',
    iconArchetype: 'fruit',
    summary: 'The swiftest beast in Blox Fruits. Charges a Tails meter to transform into the Nine-Tailed Fox, granting hyper-speed, infinite water-running, and savage slash volleys.',
    pvpRating: 'S+',
    pveRating: 'S+',
    moveset: [
      { key: 'Z', name: 'Yamata no Orochi', mastery: 1, description: 'Dashes forward slicing with blue ethereal claws.', type: 'Damage' },
      { key: 'X', name: 'Fox Fire Blast', mastery: 100, description: 'Launches homing blue fireballs that detonate on targets.', type: 'Damage' },
      { key: 'C', name: 'Wildfire Pounce', mastery: 200, description: 'Leaps high and pounces on targets with an explosive shockwave.', type: 'AoE' },
      { key: 'V', name: 'Transformation (Kitsune Form)', mastery: 300, description: 'Transforms into the Nine-Tailed Fox with boosted defense, extreme speed, and enhanced skills.', type: 'Transformation' },
      { key: 'F', name: 'Fox Flash', mastery: 50, description: 'Teleports instantly forward with blinding blue afterimages.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 8000000,
      costRobux: 4000,
      npcName: 'Blox Fruit Dealer / Gacha',
      steps: [
        'Stock chance at Blox Fruit Dealer is approximately 0.15% ($8,000,000 Beli).',
        'Can be obtained permanently for 4,000 Robux in the shop.',
        'Extremely rare drop from Fruit Gacha spins (Zioles).'
      ]
    },
    tags: ['PvP Meta', 'Beast Transformation', 'Mythical']
  },
  {
    id: 'dragon-fruit',
    name: 'Dragon Fruit',
    japaneseOrAlias: 'Uo Uo no Mi / Eastern Dragon',
    category: 'Fruit',
    rarity: 'Mythical',
    sea: 'All Seas',
    subType: 'Beast Fruit',
    iconArchetype: 'fruit',
    summary: 'The mighty dragon. Grants staggering defensive damage resistance, soaring flight, and colossal breath blasts that obliterate entire landscapes.',
    pvpRating: 'S+',
    pveRating: 'S',
    moveset: [
      { key: 'Z', name: 'Heatwave Beam', mastery: 1, description: 'Fires an incinerating energy beam from the maw.', type: 'Damage' },
      { key: 'X', name: 'Dragon Claw', mastery: 100, description: 'Smashes down with draconic talons.', type: 'AoE' },
      { key: 'C', name: 'Fire Shower', mastery: 200, description: 'Rains molten meteors from the sky.', type: 'AoE' },
      { key: 'V', name: 'Dragon Transformation', mastery: 350, description: 'Takes the form of a gigantic flying serpentine dragon with massive damage reduction.', type: 'Transformation' },
      { key: 'F', name: 'Draconic Flight', mastery: 75, description: 'Flies across the sea leaving fire in your wake.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 5000000,
      costRobux: 3500,
      npcName: 'Blox Fruit Dealer / Gacha',
      steps: ['Purchase from Blox Fruit Dealer for $5,000,000 Beli when in stock, or 3,500 Robux permanently.']
    },
    tags: ['Beast Transformation', 'Tanky', 'Mythical']
  },
  {
    id: 'dough-fruit',
    name: 'Dough Fruit',
    japaneseOrAlias: 'Mochi Mochi no Mi / Awakened Dough',
    category: 'Fruit',
    rarity: 'Mythical',
    sea: 'All Seas',
    subType: 'Elemental / Special Paramecia',
    iconArchetype: 'fruit',
    summary: 'Awakened Dough is widely regarded as the ultimate PvP combo fruit. Traps opponents in inescapable sticky dough loops.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Missile Fist (Awakened)', mastery: 1, description: 'Fires a colossal dough fist.', type: 'Damage' },
      { key: 'X', name: 'Pastry River (Awakened)', mastery: 100, description: 'Raises spiked dough pillars from the ground that impale and carry enemies.', type: 'Stun' },
      { key: 'C', name: 'Piercing Clothesline (Awakened)', mastery: 175, description: 'Transforms into a spiked donut, grabbing the enemy and dragging them across terrain.', type: 'Stun' },
      { key: 'V', name: 'Dough Fuchsia (Awakened)', mastery: 300, description: 'Summons hundreds of dough fists slamming down in a gigantic area.', type: 'AoE' },
      { key: 'F', name: 'Scorching Donut', mastery: 50, description: 'Transforms into a flaming wheel for ultra-fast land and water travel.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 2800000,
      costRobux: 2400,
      bossOrRaid: 'Dough Raids (Requires Dough King Mirror Fractal)',
      steps: [
        'Obtain Dough Fruit from Dealer ($2,800,000 Beli) or Robux shop (2,400 Robux).',
        'To awaken: Defeat Dough King to obtain the Mirror Fractal.',
        'Talk to the Cake Scientist in Sea of Treats to trade Mirror Fractal + God\'s Chalice to unlock Advanced Dough Raids.',
        'Complete Dough Raids (18,500 Fragments total) to awaken all skills to V2.'
      ]
    },
    tags: ['Awakened', 'PvP Meta', 'Raid Awakening', 'Mythical']
  },
  {
    id: 'buddha-fruit',
    name: 'Buddha Fruit',
    japaneseOrAlias: 'Daibutsu / Golden Titan',
    category: 'Fruit',
    rarity: 'Legendary',
    sea: 'All Seas',
    subType: 'Beast Fruit',
    iconArchetype: 'fruit',
    summary: 'The indisputable king of grinding, raids, and boss fighting. Awakened Buddha expands your size, quadruples your sword/melee range, and grants 50% flat damage resistance.',
    pvpRating: 'A+',
    pveRating: 'S+',
    moveset: [
      { key: 'Z', name: 'Shift (Awakened)', mastery: 1, description: 'Transforms into a colossal golden titan, gaining massive reach, 50% damage reduction, and water walking.', type: 'Transformation' },
      { key: 'X', name: 'Heavenly Impact', mastery: 100, description: 'Smashes the ground sending massive golden shockwaves.', type: 'AoE' },
      { key: 'C', name: 'Light of Annihilation', mastery: 200, description: 'Charges a destructive beam of light from the hands.', type: 'Damage' },
      { key: 'V', name: 'Twilight of the Gods', mastery: 300, description: 'Leaps high and crashes down with a blinding explosion.', type: 'AoE' },
      { key: 'F', name: 'Retribution Dash', mastery: 50, description: 'Colossal dash leap.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 1200000,
      costRobux: 1650,
      bossOrRaid: 'Buddha Raids (Second/Third Sea)',
      steps: [
        'Buy from Fruit Dealer for $1,200,000 Beli or 1,650 Robux.',
        'Awaken the Z Move (Shift) for just 500 Fragments at the Raid Scientist. (You only need the Z move awakened for 99% of grinding!).'
      ]
    },
    tags: ['Grinding King', 'Awakened', 'Buddha Meta', 'Legendary']
  },
  {
    id: 'portal-fruit',
    name: 'Portal Fruit',
    japaneseOrAlias: 'Door Fruit / Dimensional Gate',
    category: 'Fruit',
    rarity: 'Legendary',
    sea: 'All Seas',
    subType: 'Natural Fruit',
    iconArchetype: 'fruit',
    summary: 'The ultimate utility and hunter fruit. Can warp anywhere across the entire map, create dimensional pocket rifts, and vanish mid-battle.',
    pvpRating: 'S+',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Portal Dash', mastery: 1, description: 'Opens a micro portal to teleport forward instantly.', type: 'Mobility' },
      { key: 'X', name: 'Parallel Escape', mastery: 100, description: 'Steps into a parallel dimension, becoming completely invulnerable to all damage for several seconds.', type: 'Buff' },
      { key: 'C', name: 'Dimensional Rift', mastery: 200, description: 'Sucks opponents into a black hole dimension and blasts them into the sky.', type: 'Stun' },
      { key: 'V', name: 'World Warp', mastery: 300, description: 'Opens a global map menu allowing instantaneous teleportation to any island in your current sea.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 1900000,
      costRobux: 2000,
      npcName: 'Blox Fruit Dealer',
      steps: ['Purchase from Blox Fruit Dealer for $1,900,000 Beli or 2,000 Robux permanently.']
    },
    tags: ['Teleportation', 'PvP Meta', 'Legendary']
  },
  {
    id: 'blizzard-fruit',
    name: 'Blizzard Fruit',
    category: 'Fruit',
    rarity: 'Legendary',
    sea: 'All Seas',
    subType: 'Elemental Fruit',
    iconArchetype: 'fruit',
    summary: 'Creates constant freezing blizzard auras that tick damage non-stop. Has flight and elemental intangibility.',
    pvpRating: 'A+',
    pveRating: 'S',
    moveset: [
      { key: 'Z', name: 'Snowflake Shuriken', mastery: 1, description: 'Fires sharp ice shurikens.', type: 'Damage' },
      { key: 'X', name: 'Howling Wind', mastery: 100, description: 'Surges with an icy gust.', type: 'Damage' },
      { key: 'V', name: 'Blizzard Domain', mastery: 250, description: 'Spawns a gigantic continuous freezing vortex.', type: 'AoE' },
      { key: 'F', name: 'Snow Storm Flight', mastery: 50, description: 'Glides across the sky inside a storm cloud.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 2400000,
      costRobux: 2250,
      steps: ['Purchase from Blox Fruit Dealer for $2,400,000 Beli or 2,250 Robux.']
    },
    tags: ['Elemental Intangibility', 'AoE Control', 'Legendary']
  },
  {
    id: 'leopard-fruit',
    name: 'Leopard Fruit',
    japaneseOrAlias: 'Neko Neko no Mi: Model Leopard',
    category: 'Fruit',
    rarity: 'Mythical',
    sea: 'All Seas',
    subType: 'Beast Fruit',
    iconArchetype: 'fruit',
    summary: 'Infamous predator fruit. Grants hyper-speed, auto-aim claw attacks, and extreme damage mitigation in transformed mode.',
    pvpRating: 'S+',
    pveRating: 'S',
    moveset: [
      { key: 'Z', name: 'Finger Revolver', mastery: 1, description: 'Rapidly fires air bullet barrages from fingertips.', type: 'Damage' },
      { key: 'X', name: 'Spiraling Kick', mastery: 100, description: 'Dashes forward with a supersonic cyclone kick.', type: 'Damage' },
      { key: 'C', name: 'Afterimage Assault', mastery: 200, description: 'Flashes through opponents leaving roaring shockwaves.', type: 'Stun' },
      { key: 'V', name: 'Leopard Transformation', mastery: 300, description: 'Transforms into a savage humanoid leopard, boosting speed and agility to maximum.', type: 'Transformation' },
      { key: 'F', name: 'Predator Dash', mastery: 50, description: 'Quadrupedal lightning sprint.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 5000000,
      costRobux: 3000,
      steps: ['Available at Fruit Dealer for $5,000,000 Beli (0.25% stock rate) or 3,000 Robux permanently.']
    },
    tags: ['Beast Transformation', 'PvP Meta', 'Mythical']
  },
  {
    id: 'spirit-fruit',
    name: 'Spirit Fruit',
    japaneseOrAlias: 'Soul Fruit / Soru Soru',
    category: 'Fruit',
    rarity: 'Mythical',
    sea: 'All Seas',
    subType: 'Natural Fruit',
    iconArchetype: 'fruit',
    summary: 'Harnesses the twin avatars of the Sun (Prometheus) and the Moon/Storm (Zeus). Summons soul spirits to buff speed or heal.',
    pvpRating: 'S',
    pveRating: 'S',
    moveset: [
      { key: 'Z', name: 'Frost-Fire Beam', mastery: 1, description: 'Fires intertwined beams of ice and solar flame.', type: 'Damage' },
      { key: 'X', name: 'Wrath of Ra', mastery: 100, description: 'Drops a blazing miniature sun that incinerates the target zone.', type: 'AoE' },
      { key: 'C', name: 'Sky-Ruler Tempest', mastery: 200, description: 'Calls down lightning clouds and freezing wind.', type: 'Stun' },
      { key: 'V', name: 'End of Times', mastery: 300, description: 'The spirits converge into a catastrophic dual blast.', type: 'AoE' },
      { key: 'F', name: 'Spirit Cloud Glide', mastery: 50, description: 'Rides on a living storm cloud across land and water.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 3400000,
      costRobux: 2550,
      steps: ['Purchase from Fruit Dealer for $3,400,000 Beli or 2,550 Robux.']
    },
    tags: ['Dual Element', 'AoE Control', 'Mythical']
  },
  {
    id: 'rumble-fruit',
    name: 'Rumble Fruit',
    japaneseOrAlias: 'Goro Goro no Mi / Lightning God',
    category: 'Fruit',
    rarity: 'Legendary',
    sea: 'All Seas',
    subType: 'Elemental Fruit',
    iconArchetype: 'fruit',
    summary: 'Pure lightning element. Possesses multiple instantaneous flash teleports and screen-wide electrical stuns. Required for Pole 2nd Form.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Lightning Beast (Awakened)', mastery: 1, description: 'Discharges a roaring thunder hound that electrifies the target.', type: 'Damage' },
      { key: 'X', name: 'Thunderstorm (Awakened)', mastery: 100, description: 'Rains down dozens of devastating lightning bolts across a wide perimeter.', type: 'AoE' },
      { key: 'C', name: 'Lightning Flash (Awakened)', mastery: 175, description: 'Charges a massive holy laser of lightning that breaks through Instinct.', type: 'Stun' },
      { key: 'V', name: 'Sky Judgment (Awakened)', mastery: 250, description: 'Concentrated lightning ball that detonates with tremendous stun frames.', type: 'Stun' },
      { key: 'F', name: 'Lightning Flash Step', mastery: 30, description: 'Three rapid charges of instant teleportation.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 2100000,
      costRobux: 2100,
      bossOrRaid: 'Rumble Raids',
      steps: [
        'Purchase Rumble for $2,100,000 Beli or 2,100 Robux.',
        'Complete Rumble Raids in Second/Third Sea (costs 14,500 Fragments total to fully awaken all moves).'
      ]
    },
    tags: ['Awakened', 'PvP Meta', 'Double Stun', 'Legendary']
  },
  {
    id: 'magma-fruit',
    name: 'Magma Fruit',
    japaneseOrAlias: 'Magu Magu no Mi / Red Dog',
    category: 'Fruit',
    rarity: 'Rare',
    sea: 'All Seas',
    subType: 'Elemental Fruit',
    iconArchetype: 'fruit',
    summary: 'Highest raw DPS in the entire game. Awakened Magma leaves burning lava puddles that melt Sea Beasts, Terrorsharks, and Raid Bosses within seconds.',
    pvpRating: 'A',
    pveRating: 'S+',
    moveset: [
      { key: 'Z', name: 'Magma Shower (Awakened)', mastery: 1, description: 'Fires high-arching molten projectiles that carpet the ground in lava pools.', type: 'AoE' },
      { key: 'X', name: 'Volcanic Assault (Awakened)', mastery: 50, description: 'Shoots a rapid series of burning magma fists.', type: 'Damage' },
      { key: 'C', name: 'Great Magma Hound (Awakened)', mastery: 100, description: 'Sends a colossal magma beast roaring straight forward.', type: 'Damage' },
      { key: 'V', name: 'Volcano Eruption (Awakened)', mastery: 140, description: 'Causes the earth beneath the enemy to explode into a giant active volcano.', type: 'AoE' },
      { key: 'F', name: 'Magma Ride', mastery: 10, description: 'Flies on a lava monster and permanently walks on water without taking sea damage.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 850000,
      costRobux: 1300,
      bossOrRaid: 'Magma Raids',
      steps: [
        'Buy from Fruit Dealer for $850,000 Beli or 1,300 Robux.',
        'Awaken via Magma Raids (14,500 Fragments total). Grants permanent immunity to water damage!'
      ]
    },
    tags: ['Awakened', 'Sea Beast Hunter', 'Highest DPS', 'Rare']
  },
  {
    id: 'light-fruit',
    name: 'Light Fruit',
    japaneseOrAlias: 'Pika Pika no Mi / Yellow Monkey',
    category: 'Fruit',
    rarity: 'Rare',
    sea: 'All Seas',
    subType: 'Elemental Fruit',
    iconArchetype: 'fruit',
    summary: 'The undisputed greatest fruit for First Sea grinding. Boasts the fastest flight speed in the game, an innate Light Sword M1, and long-range elemental attacks.',
    pvpRating: 'A',
    pveRating: 'S+',
    moveset: [
      { key: 'Tap', name: 'Light Spear M1', mastery: 1, description: 'Summons a sword made of solid photons with fast elemental M1 attacks.', type: 'Damage' },
      { key: 'Z', name: 'Arrow of Light', mastery: 1, description: 'Snipes targets with a high-velocity laser beam.', type: 'Damage' },
      { key: 'X', name: 'Light Swords Barrage', mastery: 40, description: 'Rains dozens of light daggers onto the ground.', type: 'AoE' },
      { key: 'V', name: 'Wrath of God', mastery: 110, description: 'Focuses a colossal pillar of light from the sky.', type: 'AoE' },
      { key: 'F', name: 'Light Speed Flight', mastery: 10, description: 'Flies across the map at near-instant supersonic velocity.', type: 'Mobility' }
    ],
    obtainment: {
      costBeli: 650000,
      costRobux: 1100,
      steps: [
        'Buy from Fruit Dealer for $650,000 Beli or 1,100 Robux.',
        'Available early in First Sea to speed up leveling drastically.'
      ]
    },
    tags: ['First Sea GOAT', 'Fastest Flight', 'Light Sword M1', 'Rare']
  },

  // ==========================================
  // GUNS
  // ==========================================
  {
    id: 'soul-guitar',
    name: 'Soul Guitar',
    japaneseOrAlias: 'Brook Skull Guitar',
    category: 'Gun',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Musical Cannon',
    iconArchetype: 'guitar',
    summary: 'The sole Mythical Gun in Blox Fruits. Fires destructive soul sound waves, heals the user with M1 notes, and traps entire teams in an inescapable soul vortex.',
    pvpRating: 'S+',
    pveRating: 'S',
    moveset: [
      {
        key: 'Z',
        name: 'Soul Shaker',
        mastery: 150,
        description: 'Fires an eerie skull missile that bursts into a soul vortex, continuously stunning enemies caught inside.',
        type: 'Stun'
      },
      {
        key: 'X',
        name: 'El Diablo',
        mastery: 300,
        description: 'Plays a terrifying rock chord, summoning an underworld blast that steals HP and burns targets.',
        type: 'AoE'
      }
    ],
    obtainment: {
      costFragments: 5000,
      costBones: 500,
      levelRequirement: 2300,
      npcName: 'Weird Machine',
      npcLocation: 'Haunted Castle (Secret basement puzzle)',
      steps: [
        'Reach Level 2300+.',
        'Wait for a Full Moon in Third Sea.',
        'Go to the Haunted Castle graveyard and pray at the Gravestone until you receive: "Would you like to play a game?".',
        'Kill all 6 living zombies in the graveyard simultaneously in one hit.',
        'Adjust the signboards in the graveyard to match the grave orientations.',
        'Talk to the Ghost NPC inside the castle, then memorize the trophy directions in the basement.',
        'Align the colored floor tiles in the basement puzzle.',
        'Interact with the Weird Machine and pay 500 Bones, 250 Ectoplasm, 1 Dark Fragment, and 5,000 Fragments to craft the Soul Guitar.'
      ]
    },
    tags: ['PvP Meta', 'Full Moon', 'Puzzle Required', 'Mythical']
  },
  {
    id: 'kabucha',
    name: 'Kabucha',
    japaneseOrAlias: 'Kuro Kabuto / Sniper Slingshot',
    category: 'Gun',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Slingshot',
    iconArchetype: 'gun',
    summary: 'Usopp signature weapon. Fires explosive stars with immense knockback and fast reload, perfect for breaking Instinct.',
    pvpRating: 'S',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Flying Fire Bird', mastery: 125, description: 'Shoots a flaming bird that causes a huge fiery detonation.', type: 'AoE' },
      { key: 'X', name: 'Intense Wind', mastery: 250, description: 'Blasts a massive gust of air that throws enemies hundreds of studs away.', type: 'Damage' }
    ],
    obtainment: {
      costFragments: 1500,
      npcName: 'Usoapp',
      npcLocation: 'Usopp\'s Island (Second Sea, small rock island behind Kingdom of Rose)',
      steps: ['Sail behind Kingdom of Rose to Usopp\'s Island and purchase Kabucha for 1,500 Fragments.']
    },
    tags: ['PvP Meta', 'Second Sea', 'Legendary']
  },
  {
    id: 'acidum-rifle',
    name: 'Acidum Rifle',
    category: 'Gun',
    rarity: 'Rare',
    sea: 'Second Sea',
    subType: 'Rifle',
    iconArchetype: 'gun',
    summary: 'A toxic rifle firing acidic rounds. High poison damage and easy stun confirms in competitive combos.',
    pvpRating: 'A+',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Acid Smoke', mastery: 100, description: 'Fires toxic fumes that blind and poison.', type: 'Damage' },
      { key: 'X', name: 'Toxic Shot', mastery: 200, description: 'Piercing acid dart that melts enemy shields.', type: 'Stun' }
    ],
    obtainment: {
      bossOrRaid: 'Factory Core Event',
      dropChance: '20% to top damage dealer',
      npcLocation: 'Kingdom of Rose Factory',
      steps: ['Participate in the Factory Raid when the siren sounds and deal the most damage to the Core.']
    },
    tags: ['Factory Raid', 'Rare']
  },
  {
    id: 'serpent-bow',
    name: 'Serpent Bow',
    category: 'Gun',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Bow',
    iconArchetype: 'gun',
    summary: 'A snake-shaped bow dropped by the Island Empress. Shoots piercing venom arrows that stun and burn.',
    pvpRating: 'A',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Poison Arrow', mastery: 125, description: 'High-speed venom shot that tracks slightly.', type: 'Damage' },
      { key: 'X', name: 'Snake Bind', mastery: 250, description: 'Entangles the foe in mystic snakes, halting their movement.', type: 'Stun' }
    ],
    obtainment: {
      bossOrRaid: 'Island Empress (Boa Hancock)',
      dropChance: '2-5%',
      npcLocation: 'Hydra Island palace',
      steps: ['Defeat the Island Empress boss on Hydra Island repeatedly until the bow drops.']
    },
    tags: ['Boss Drop', 'Third Sea', 'Legendary']
  },
  {
    id: 'bazooka',
    name: 'Bazooka',
    category: 'Gun',
    rarity: 'Legendary',
    sea: 'First Sea',
    subType: 'Heavy Cannon',
    iconArchetype: 'gun',
    summary: 'A heavy explosive launcher dropped by Wysper. Highest single-shot physical blast in First Sea.',
    pvpRating: 'B',
    pveRating: 'A',
    moveset: [
      { key: 'Z', name: 'Cannon Ball', mastery: 50, description: 'Fires an explosive cannon projectile with huge knockback.', type: 'AoE' }
    ],
    obtainment: {
      bossOrRaid: 'Wysper (Level 500 Boss)',
      dropChance: '10%',
      npcLocation: 'Upper Skylands (First Sea)',
      steps: ['Defeat Wysper in Upper Skylands for a 10% chance to drop the Bazooka.']
    },
    tags: ['First Sea', 'Boss Drop', 'Legendary']
  },
  {
    id: 'cannon',
    name: 'Cannon',
    category: 'Gun',
    rarity: 'Rare',
    sea: 'First Sea',
    subType: 'Portable Cannon',
    iconArchetype: 'gun',
    summary: 'A handheld marine artillery cannon. Great early game AoE knockback.',
    pvpRating: 'C',
    pveRating: 'B',
    moveset: [
      { key: 'Z', name: 'Bomb Shot', mastery: 1, description: 'Fires a heavy cannon shell that detonates on impact.', type: 'AoE' }
    ],
    obtainment: {
      costBeli: 100000,
      npcName: 'Advanced Weapon Dealer',
      npcLocation: 'Marine Fortress (First Sea)',
      steps: ['Purchase from Advanced Weapon Dealer in Marine Fortress for $100,000 Beli.']
    },
    tags: ['First Sea', 'Rare']
  },

  // ==========================================
  // ACCESSORIES
  // ==========================================
  {
    id: 'leviathan-crown',
    name: 'Leviathan Crown',
    category: 'Accessory',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Crown',
    iconArchetype: 'crown',
    summary: 'The reigning crown of deep sea hunters. Grants colossal buffs to Melee, Sword, and Gun damage, plus massive HP regen.',
    pvpRating: 'S+',
    pveRating: 'S+',
    moveset: [],
    obtainment: {
      npcName: 'Beast Hunter',
      npcLocation: 'Tiki Outpost (Shipwright dock)',
      steps: [
        'Collect 1 Leviathan Heart (obtained by harpooning the Leviathan Heart during the Frozen Leviathan raid in Sea Danger 6).',
        'Collect 10 Leviathan Scales.',
        'Collect 1 Dark Fragment (from Darkbeard raid).',
        'Craft at the Beast Hunter NPC in Tiki Outpost.'
      ]
    },
    passiveEffects: [
      '+12% Melee, Sword, and Gun damage',
      '+40% Health regeneration speed',
      '+1000 Health',
      '+1000 Energy'
    ],
    tags: ['Sea Event', 'Mythical', 'Endgame BiS']
  },
  {
    id: 'pale-scarf',
    name: 'Pale Scarf',
    japaneseOrAlias: 'Katakuri Scarf',
    category: 'Accessory',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Scarf',
    iconArchetype: 'cape',
    summary: 'The ultimate PvP accessory in Third Sea. Grants 10x Instinct viewing distance and +2 extra Instinct dodges.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [],
    obtainment: {
      bossOrRaid: 'Cake Prince or Dough King',
      dropChance: '100% (Guaranteed drop on defeat)',
      npcLocation: 'Sea of Treats (Mirror Dimension)',
      steps: [
        'Defeat 500 mobs on Sea of Treats to open the Mirror Portal.',
        'Defeat Cake Prince or Dough King.',
        'The Pale Scarf has a 100% guaranteed drop chance on your first kill.'
      ]
    },
    passiveEffects: [
      '+15% Blox Fruit damage',
      '+15% Sword damage',
      '+2 Extra Instinct (Ken Haki) Dodges',
      '10x Instinct Vision Range (see player names and health bars through walls across entire islands)'
    ],
    tags: ['PvP Meta', 'Guaranteed Drop', 'Legendary']
  },
  {
    id: 'valkyrie-helm',
    name: 'Valkyrie Helm',
    category: 'Accessory',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Helmet',
    iconArchetype: 'crown',
    summary: 'A radiant winged helm dropped by Rip_Indra. Provides balanced 15% buffs to all damage types.',
    pvpRating: 'S',
    pveRating: 'S',
    moveset: [],
    obtainment: {
      bossOrRaid: 'Rip_Indra Raid Boss',
      dropChance: '100% (on your first defeat of Rip_Indra)',
      npcLocation: 'Castle on the Sea',
      steps: [
        'Find a God\'s Chalice (from Elite Pirates or sea chests).',
        'Activate all 3 Legendary Haki buttons at Castle on the Sea (Pure Red, Snow White, Winter Sky).',
        'Place the God\'s Chalice on the pedestal in the Castle to summon Rip_Indra.',
        'Defeat Rip_Indra to guarantee the Valkyrie Helm drop.'
      ]
    },
    passiveEffects: [
      '+15% Sword damage',
      '+15% Melee damage',
      '+15% Blox Fruit damage',
      '+600 Health',
      '+600 Energy'
    ],
    tags: ['Raid Boss Drop', 'Mythical']
  },
  {
    id: 'swan-glasses',
    name: 'Swan Glasses',
    japaneseOrAlias: 'Doflamingo Shades',
    category: 'Accessory',
    rarity: 'Legendary',
    sea: 'Second Sea',
    subType: 'Glasses',
    iconArchetype: 'crown',
    summary: 'The best all-around accessory in Second Sea. Boosts all damage, defense, sprint speed, and reduces cooldowns.',
    pvpRating: 'S',
    pveRating: 'S',
    moveset: [],
    obtainment: {
      bossOrRaid: 'Don Swan (Level 1000 Boss)',
      dropChance: '2.5%',
      levelRequirement: 1000,
      npcLocation: 'Kingdom of Rose Mansion (Swan Room)',
      steps: [
        'Reach Level 1000 and give Trevor a Blox Fruit worth at least $1,000,000 Beli to unlock Don Swan\'s room.',
        'Defeat Don Swan repeatedly for a 2.5% chance to drop Swan Glasses.'
      ]
    },
    passiveEffects: [
      '+8% Damage to all attacks',
      '+8% Defense against all damage',
      '+8% Cooldown reduction on all skills',
      '+25% Sprint speed',
      '+250 Health',
      '+250 Energy'
    ],
    tags: ['Second Sea BiS', 'Boss Drop', 'Legendary']
  },
  {
    id: 'kitsune-ribbon',
    name: 'Kitsune Ribbon',
    category: 'Accessory',
    rarity: 'Mythical',
    sea: 'Third Sea',
    subType: 'Ribbon',
    iconArchetype: 'cape',
    summary: 'A sacred azure ribbon offering massive +2000 Energy and slashing Flash Step cooldown by 25%.',
    pvpRating: 'S+',
    pveRating: 'A',
    moveset: [],
    obtainment: {
      npcName: 'Kitsune Shrine',
      npcLocation: 'Kitsune Island (Sea Danger 6 during Full Moon)',
      steps: [
        'Travel to Sea Danger 6 during a Full Moon to find Kitsune Island.',
        'Collect Azure Embers during the timed collection event.',
        'Trade 20-25 Azure Embers to the central shrine for a chance to receive the ribbon.'
      ]
    },
    passiveEffects: [
      '+10% Blox Fruit damage',
      '+15% Dash speed',
      '-25% Flash Step cooldown',
      '+2000 Energy'
    ],
    tags: ['Sea Event', 'Full Moon', 'Mythical']
  },
  {
    id: 'dark-coat',
    name: 'Dark Coat',
    japaneseOrAlias: 'Blackbeard Coat',
    category: 'Accessory',
    rarity: 'Mythical',
    sea: 'Second Sea',
    subType: 'Coat',
    iconArchetype: 'cape',
    summary: 'An ominous black captain coat dropped by Darkbeard. Provides heavy fruit damage and extra energy.',
    pvpRating: 'A+',
    pveRating: 'A',
    moveset: [],
    obtainment: {
      bossOrRaid: 'Darkbeard (Blackbeard Raid Boss)',
      dropChance: '2%',
      npcLocation: 'Dark Arena (Second Sea)',
      steps: [
        'Obtain a Fist of Darkness (from Sea Beasts or waiting 4 hours in server for chest spawn).',
        'Place the Fist of Darkness on the altar in Dark Arena.',
        'Defeat Darkbeard for a 2% chance to drop the Dark Coat.'
      ]
    },
    passiveEffects: [
      '+15% Blox Fruit damage',
      '+600 Health',
      '+600 Energy'
    ],
    tags: ['Raid Boss Drop', 'Mythical']
  },
  {
    id: 'hunter-cape',
    name: 'Hunter Cape',
    category: 'Accessory',
    rarity: 'Rare',
    sea: 'Third Sea',
    subType: 'Cape',
    iconArchetype: 'cape',
    summary: 'Available in Black, Red, or Green variants. Boosts sword and melee damage along with sprint speed.',
    pvpRating: 'A',
    pveRating: 'A',
    moveset: [],
    obtainment: {
      bossOrRaid: 'Elite Pirates (Diablo, Urban, Deandre)',
      dropChance: '50%',
      npcLocation: 'Third Sea Islands (Spawned by Elite Hunter quest)',
      steps: ['Accept Elite Hunter quest at Castle on the Sea and eliminate the target.']
    },
    passiveEffects: [
      '+10% Sword and Melee damage',
      '+80% Sprint speed boost',
      '+750 Health'
    ],
    tags: ['Elite Hunter', 'Rare']
  },
  {
    id: 'terror-jaw',
    name: 'Terror Jaw',
    category: 'Accessory',
    rarity: 'Legendary',
    sea: 'Third Sea',
    subType: 'Jaw Armor',
    iconArchetype: 'crown',
    summary: 'Crafted from savage Terrorshark jaws. Boosts sword damage by 10% and cooldown reduction by 10%.',
    pvpRating: 'S',
    pveRating: 'A',
    moveset: [],
    obtainment: {
      npcName: 'Shark Hunter',
      npcLocation: 'Tiki Outpost',
      steps: [
        'Collect 1 Terror Eye (from Terrorshark).',
        'Collect 2 Mutant Teeth (from Terrorshark).',
        'Collect 10 Shark Teeth (from Sharks / Terrorshark).',
        'Craft at the Shark Hunter NPC in Tiki Outpost.'
      ]
    },
    passiveEffects: [
      '+10% Sword damage',
      '+10% Cooldown reduction on all skills',
      '+1000 Energy',
      '+20% Defense against sea events'
    ],
    tags: ['Sea Event', 'Crafting', 'Legendary']
  },
  {
    id: 'ghoul-mask',
    name: 'Ghoul Mask',
    category: 'Accessory',
    rarity: 'Rare',
    sea: 'Second Sea',
    subType: 'Mask',
    iconArchetype: 'crown',
    summary: 'Infuses melee attacks with life leech. Essential pairing with Buddha and fighting styles during raids.',
    pvpRating: 'B',
    pveRating: 'S',
    moveset: [],
    obtainment: {
      costBeli: 0,
      npcName: 'El Perro',
      npcLocation: 'Cursed Ship (Second Sea)',
      steps: [
        'Gather 50 Ectoplasm by defeating mobs inside the Cursed Ship.',
        'Find El Perro in the lower quarters of the Cursed Ship and trade 50 Ectoplasm for the Ghoul Mask.'
      ]
    },
    passiveEffects: [
      '+10% Melee life leech (heals HP on basic M1 hits)',
      '+35% Movement speed',
      '+500 Energy'
    ],
    tags: ['Buddha Meta', 'Lifesteal', 'Second Sea', 'Rare']
  },
  {
    id: 'black-spike-coat',
    name: 'Black Spike Coat',
    category: 'Accessory',
    rarity: 'Rare',
    sea: 'First Sea',
    subType: 'Coat',
    iconArchetype: 'cape',
    summary: 'The premiere offensive accessory in First Sea. Dropped by Vice Admiral, boosting all damage by 7.5%.',
    pvpRating: 'A',
    pveRating: 'S',
    moveset: [],
    obtainment: {
      bossOrRaid: 'Vice Admiral (Level 130 Boss)',
      dropChance: '5%',
      npcLocation: 'Marine Fortress (First Sea)',
      steps: ['Defeat Vice Admiral inside the main fortress courtyard in Marine Fortress (5% drop chance).']
    },
    passiveEffects: [
      '+7.5% Damage to all attacks',
      '+200 Health',
      '+200 Energy'
    ],
    tags: ['First Sea GOAT', 'Boss Drop', 'Rare']
  }
];
