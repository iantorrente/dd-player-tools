const FIGHTER = {
  name: 'Fighter',
  classFeatures: {
    hitDice: '1d10 per Fighter level',
    hpAtLevelOne: '10 + constitution',
    hpGainOnLevelUp: '6 + constitution',
    proficiencies: {
      armor: ['all armor', 'shields'],
      weapons: ['simple weapons', 'martial weapons'],
      tools: [],
      savingThrows: ['strength', 'constitution'],
      skills: {
        choiceCount: 2,
        options: ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival']
      }
    }
  },
  equipment: {
    mandatory: {},
    items: {
      options: [
        'chain mail',
        'leather, longbow, and 20 arrows'
      ]
    },
    weapons: {
      options: [
        'martial weapon and a shield',
        'two martial weapons'
      ]
    },
    'secondary weapons': {
      options: [
        'light crossbow and 20 bolts',
        'two handaxes'
      ]
    },
    pack: {
      options: [
        'dungeoneer\'s pack',
        'explorer\'s pack'
      ]
    }
  },
  classOptions: {
    'fighting style': {
      type: 'specilization',
      amount: 1,
      options: [
        'archery',
        'defense',
        'dueling',
        'great weapon fighting',
        'protection',
        'two-weapon fighting'
      ]
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['fighting style', 'second wind'],
      classGimmick: [
        {
          name: 'Fighting Style',
          type: 'specilization',
          amount: 0,
          die: 'none',
          description: 'You adopt a particular style of fighting as your speciality.',
          descriptionPoints: [
            'You can\'t take a Fighting Style option more than once, even if you later get to choose again.',
          ],
        }
      ],
      classOptions: {}
    }
  ]
}


export default FIGHTER;