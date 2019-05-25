const BARBARIAN = {
  name: 'Barbarian',
  classFeatures: {
    hitDice: '1d12 per barbarian level',
    hpAtLevelOne: '12 + conMod',
    hpGainOnLevelUp: '7 + conMod',
    proficiencies: {
      armor: ['light armor', 'medium armor', 'shields'],
      weapons: ['simple weapons', 'marital weapons'],
      tools: [],
      savingThrows: ['strength', 'constitution'],
      skills: {
        choiceCount: 2,
        choices: ['animal handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival']
      }
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['rage', 'unarmored defense'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 2,
          damage: 2
        }
      ],
      classOptions: {}
    },
    {
      level: 2,
      proficiencyBonus: 2,
      features: ['reckless attack', 'danger sense'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 2,
          damage: 2
        }
      ],
      classOptions: {}
    },
    {
      level: 3,
      proficiencyBonus: 2,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 3,
          damage: 2
        }
      ],
      classOptions: {
        name: 'primal path',
        choices: [
          {
            name: 'Path of the Berserker'
          },
          {
            name: 'Path of the Totem Warrior'
          }
        ]
      }
    },
    {
      level: 4,
      proficiencyBonus: 2,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 3,
          damage: 2
        }
      ],
      classOptions: {
        name: 'Ability Score Improvement',
        choiceCount: 2,
        choices: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
      }
    },
    {
      level: 5,
      proficiencyBonus: 3,
      features: ['extra attack', 'fast movement'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 3,
          damage: 2
        }
      ],
      classOptions: {}
    },
    {
      level: 6,
      proficiencyBonus: 2,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 4,
          damage: 2
        }
      ],
      classOptions: {
        'Path of the Berserker': 'mindless rage',
        'Path of the Totem Warrior': 'aspect of the beast'
      }
    },
    {
      level: 7,
      proficiencyBonus: 3,
      features: ['feral instinct'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 4,
          damage: 2
        }
      ],
      classOptions: {}
    },
    {
      level: 8,
      proficiencyBonus: 3,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 4,
          damage: 2
        }
      ],
      classOptions: {
        name: 'Ability Score Improvement',
        choiceCount: 2,
        choices: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
      }
    },
    {
      level: 9,
      proficiencyBonus: 4,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 4,
          damage: 3
        },
        {
          name: 'brutal critical',
          type: 'dice',
          detail: 'extra weapon damage die',
          amount: 1
        }
      ],
      classOptions: {}
    },
    {
      level: 10,
      proficiencyBonus: 4,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 4,
          damage: 3
        }
      ],
      classOptions: {
        'Path of the Berserker': 'intimidating presence',
        'Path of the Totem Warrior': 'spirit walker'
      }
    },
    {
      level: 11,
      proficiencyBonus: 4,
      features: ['relentless rage'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 4,
          damage: 3
        }
      ],
      classOptions: {}
    },
    {
      level: 12,
      proficiencyBonus: 4,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 5,
          damage: 2
        }
      ],
      classOptions: {
        name: 'Ability Score Improvement',
        choiceCount: 2,
        choices: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
      }
    },
    {
      level: 13,
      proficiencyBonus: 5,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 5,
          damage: 3
        },
        {
          name: 'brutal critical',
          type: 'dice',
          detail: 'extra weapon damage die',
          amount: 2
        }
      ],
      classOptions: {}
    },
    {
      level: 14,
      proficiencyBonus: 5,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 5,
          damage: 3
        }
      ],
      classOptions: {
        'Path of the Berserker': 'retaliation',
        'Path of the Totem Warrior': 'totemic attunement'
      }
    },
    {
      level: 15,
      proficiencyBonus: 5,
      features: ['persistent rage'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 5,
          damage: 3
        }
      ],
      classOptions: {}
    },
    {
      level: 16,
      proficiencyBonus: 5,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 5,
          damage: 4
        }
      ],
      classOptions: {
        name: 'Ability Score Improvement',
        choiceCount: 2,
        choices: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
      }
    },
    {
      level: 17,
      proficiencyBonus: 6,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 6,
          damage: 4
        },
        {
          name: 'brutal critical',
          type: 'dice',
          detail: 'extra weapon damage die',
          amount: 3
        }
      ],
      classOptions: {}
    },
    {
      level: 18,
      proficiencyBonus: 6,
      features: ['indomitable might'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 6,
          damage: 4
        }
      ],
      classOptions: {}
    },
    {
      level: 19,
      proficiencyBonus: 6,
      features: [],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 6,
          damage: 4
        }
      ],
      classOptions: {
        name: 'Ability Score Improvement',
        choiceCount: 2,
        choices: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
      }
    },
    {
      level: 20,
      proficiencyBonus: 6,
      features: ['primal champion'],
      classGimmick: [
        {
          name: 'rage',
          type: 'damageMod',
          amount: 'unlimited',
          damage: 4
        }
      ],
      classOptions: {}
    },
  ]
}

export default BARBARIAN;