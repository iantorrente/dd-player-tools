const SORCERER = {
  name: 'Sorcerer',
  classFeatures: {
    hitDice: '1d6 per Sorcerer level',
    hpAtLevelOne: '6 + constitution',
    hpGainOnLevelUp: '4 + constitution',
    proficiencies: {
      armor: [],
      weapons: ['daggers', 'darts', 'slings', 'quarter staffs', 'light crossbows'],
      tools: [],
      savingThrows: ['constitution', 'charisma'],
      skills: {
        choiceCount: 2,
        options: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'dagger',
          count:2
        }
      ]
    },
    weapon: {
      options: [
        'light crossbow and 20 bolts',
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
    },
    pack: {
      options: ['dungeoneer\'s pack', 'explorer\'s pack']
    },
    accessory: {
      options: [
        'component pouch',
        'arcane focus'
      ]
    }
  },
  classOptions: {
    'sorcerous origin': {
      type: 'specilization',
      amount: 1,
      options: [
        'Draconic',
        'Bloodline',
        'Wild Magic'
      ]
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['spellcasting', 'sorcerous origin'],
      classGimmick: [
        {
          name: 'Sorcerous Origin',
          type: 'specilization',
          amount: 1,
          description: 'Choose a sorcerous origin, which describes the source of your innate magical power.',
          descriptionPoints: [
            'our choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default SORCERER;