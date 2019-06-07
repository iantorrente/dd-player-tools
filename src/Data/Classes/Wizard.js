const WIZARD = {
  name: 'Wizard',
  classFeatures: {
    hitDice: '1d6 per Wizard level',
    hpAtLevelOne: 6,
    hpGainOnLevelUp: 4,
    proficiencies: {
      armor: [],
      weapons: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'],
      tools: [],
      savingThrows: ['intelligence', 'wisdom'],
      skills: {
        choiceCount: 2,
        options: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'spellbook',
          count: 1
        }
      ]
    },
    weapon: {
      options: [
        'quarterstaff', 
        'dagger'
      ]
    },
    pack: {
      options: [
        'scholar\'s pack', 
        'explorer\'s pack'
      ]
    },
    accessory: {
      options: [
        'component pouch',
        'arcane focus'
      ]
    }
  },
  classOptions: {},
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['spellcasting', 'arcane recovery'],
      classGimmick: [
        {
          name: 'Arcane Recovery',
          type: 'action',
          description: 'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
          descriptionPoints: [
            'For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots.',
            'You can recover either a 2nd-level spell slot or two 1st-level spell slots.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default WIZARD;