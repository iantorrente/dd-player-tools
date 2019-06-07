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
//     {
//       level: 2,
//       proficiencyBonus: 2,
//       features: ['reckless attack', 'danger sense'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 2,
//           damage: 2
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 3,
//       proficiencyBonus: 2,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 3,
//           damage: 2
//         }
//       ],
//       classOptions: {
//         name: 'primal path',
//         options: [
//           {
//             name: 'Path of the Berserker'
//           },
//           {
//             name: 'Path of the Totem Warrior'
//           }
//         ]
//       }
//     },
//     {
//       level: 4,
//       proficiencyBonus: 2,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 3,
//           damage: 2
//         }
//       ],
//       classOptions: {
//         name: 'Ability Score Improvement',
//         choiceCount: 2,
//         options: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
//       }
//     },
//     {
//       level: 5,
//       proficiencyBonus: 3,
//       features: ['extra attack', 'fast movement'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 3,
//           damage: 2
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 6,
//       proficiencyBonus: 2,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 4,
//           damage: 2
//         }
//       ],
//       classOptions: {
//         'Path of the Berserker': 'mindless rage',
//         'Path of the Totem Warrior': 'aspect of the beast'
//       }
//     },
//     {
//       level: 7,
//       proficiencyBonus: 3,
//       features: ['feral instinct'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 4,
//           damage: 2
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 8,
//       proficiencyBonus: 3,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 4,
//           damage: 2
//         }
//       ],
//       classOptions: {
//         name: 'Ability Score Improvement',
//         choiceCount: 2,
//         options: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
//       }
//     },
//     {
//       level: 9,
//       proficiencyBonus: 4,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 4,
//           damage: 3
//         },
//         {
//           name: 'brutal critical',
//           type: 'dice',
//           detail: 'extra weapon damage die',
//           amount: 1
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 10,
//       proficiencyBonus: 4,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 4,
//           damage: 3
//         }
//       ],
//       classOptions: {
//         'Path of the Berserker': 'intimidating presence',
//         'Path of the Totem Warrior': 'spirit walker'
//       }
//     },
//     {
//       level: 11,
//       proficiencyBonus: 4,
//       features: ['relentless rage'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 4,
//           damage: 3
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 12,
//       proficiencyBonus: 4,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 5,
//           damage: 2
//         }
//       ],
//       classOptions: {
//         name: 'Ability Score Improvement',
//         choiceCount: 2,
//         options: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
//       }
//     },
//     {
//       level: 13,
//       proficiencyBonus: 5,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 5,
//           damage: 3
//         },
//         {
//           name: 'brutal critical',
//           type: 'dice',
//           detail: 'extra weapon damage die',
//           amount: 2
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 14,
//       proficiencyBonus: 5,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 5,
//           damage: 3
//         }
//       ],
//       classOptions: {
//         'Path of the Berserker': 'retaliation',
//         'Path of the Totem Warrior': 'totemic attunement'
//       }
//     },
//     {
//       level: 15,
//       proficiencyBonus: 5,
//       features: ['persistent rage'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 5,
//           damage: 3
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 16,
//       proficiencyBonus: 5,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 5,
//           damage: 4
//         }
//       ],
//       classOptions: {
//         name: 'Ability Score Improvement',
//         choiceCount: 2,
//         options: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
//       }
//     },
//     {
//       level: 17,
//       proficiencyBonus: 6,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 6,
//           damage: 4
//         },
//         {
//           name: 'brutal critical',
//           type: 'dice',
//           detail: 'extra weapon damage die',
//           amount: 3
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 18,
//       proficiencyBonus: 6,
//       features: ['indomitable might'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 6,
//           damage: 4
//         }
//       ],
//       classOptions: {}
//     },
//     {
//       level: 19,
//       proficiencyBonus: 6,
//       features: [],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 6,
//           damage: 4
//         }
//       ],
//       classOptions: {
//         name: 'Ability Score Improvement',
//         choiceCount: 2,
//         options: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
//       }
//     },
//     {
//       level: 20,
//       proficiencyBonus: 6,
//       features: ['primal champion'],
//       classGimmick: [
//         {
//           name: 'rage',
//           type: 'damageMod',
//           amount: 'unlimited',
//           damage: 4
//         }
//       ],
//       classOptions: {}
//     },
//   ]
// }
