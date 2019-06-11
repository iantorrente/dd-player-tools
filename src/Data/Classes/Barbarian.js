const BARBARIAN = {
  name: 'Barbarian',
  classFeatures: {
    hitDice: '1d12 per Barbarian level',
    hpAtLevelOne: 12,
    hpGainOnLevelUp: 7,
    proficiencies: {
      armor: ['light armor', 'medium armor', 'shields'],
      weapons: ['simple weapons', 'marital weapons'],
      tools: [],
      savingThrows: ['strength', 'constitution'],
      skills: {
        choiceCount: 2,
        options: ['animal handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'explorer\'s pack',
          count: 1
        }, 
        {
          name: 'javelin',
          count: 4
        }
      ]
    },
    weapon: {
      options: [
        'greataxe',
        'battleaxe',
        'flail',
        'glaive',
        'greataxe',
        'greatsword',
        'halberd',
        'lance',
        'longsword',
        'maul',
        'morningstar',
        'pike',
        'rapier',
        'scimitar',
        'shortsword',
        'trident',
        'war pick',
        'warhammer',
        'whip'
      ]
    },
    'secondary weapon': {
      options: [
        'two handaxes',
        'club',
        'dagger',
        'greatclub',
        'handaxe',
        'javelin',
        'light hammer',
        'mace',
        'quarterstaff',
        'sickle',
        'spear'
      ] 
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['rage', 'unarmored defense'],
      classGimmick: [
        {
          name: 'Rage',
          type: 'damageMod',
          amount: 2,
          damage: 2,
          description: 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action, gaining the following:',
          descriptionPoints: [
            'You have advantage on Strength checks and Strength saving throws.',
            'When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian.',
            'You have resistance to bludgeoning, piercing, and slashing damage.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default BARBARIAN;