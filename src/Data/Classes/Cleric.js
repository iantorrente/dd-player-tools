const CLERIC = {
  name: 'Cleric',
  classFeatures: {
    hitDice: '1d8 per Bard level',
    hpAtLevelOne: 8,
    hpGainOnLevelUp: 5,
    proficiencies: {
      armor: ['light armor', 'medium armor', 'shields'],
      weapons: ['all simple weapons'],
      tools: [],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choiceCount: 2,
        options: ['history', 'insight', 'medicine', 'persuasion', 'religion']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'shield',
          count: 1
        }, 
        {
          name: 'holy symbol',
          count: 1
        }
      ]
    },
    weapon: {
      options: [
        'mace',
        'warhammer'
      ]
    },
    armor: {
      options: [
        'scale mail',
        'leather armor',
        'chain mail'
      ]
    },
    pack: {
      options: ['diplomat\'s pack', 'entertainer\'s pack']
    },
    'secondary weapon': {
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
    }
  },
  classOptions: {
    'divine domain': {
      type: 'specilization',
      amount: 1,
      options: [
        'knowledge',
        'life',
        'light',
        'nature',
        'tempest',
        'trickery',
        'war'
      ]
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['spellcasting', 'divine domain'],
      classGimmick: [
        {
          name: 'Divine Domain',
          type: 'specilization',
          amount: 0,
          die: 'none',
          description: 'You can choose one domain related to your deity.',
          descriptionPoints: [
            'Your choice grants you domain spells and other features when you choose it at 1st level',
            'It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level.',
            'Further benefits at 6th, 8th, and 17th levels.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default CLERIC;