const DRUID = {
  name: 'Druid',
  classFeatures: {
    hitDice: '1d8 per Druid level',
    hpAtLevelOne: '8 + constitution',
    hpGainOnLevelUp: '5 + constitution',
    proficiencies: {
      armor: ['light armor', 'medium armor', 'shields'],
      weapons: ['clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'],
      tools: ['herbalism kit'],
      savingThrows: ['intelligence', 'wisdom'],
      skills: {
        choiceCount: 2,
        options: ['animal handling', 'arcana', 'insight','medicine', 'nature', 'perception', 'religion', 'survival']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'leather armor',
          count: 1
        }, 
        {
          name: 'explorer\'s pack',
          count: 1
        },
        {
          name: 'druidic focus',
          count: 1
        }
      ]
    },
    weapon: {
      options: [
        'wooden shield',
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
    'secondary weapon': {
      options: [
        'scimitar',
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
      features: ['druidic', 'spellcasting'],
      classGimmick: [
        {
          name: 'Druidic',
          type: 'language',
          description: 'You know Druidic, the secret language of druids.',
          descriptionPoints: [
            'You can speak the language and use it to leave hidden messages.',
            'You and others who know this language automatically spot such a message.',
            'Others spot the message\'s presence with a successful DC 15 Wisdom (Perception) check but can\'t decipher it without magic.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default DRUID;