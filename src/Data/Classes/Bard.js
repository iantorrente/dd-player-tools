const BARD = {
  name: 'Bard',
  classFeatures: {
    hitDice: '1d8 per Bard level',
    hpAtLevelOne: 8,
    hpGainOnLevelUp: 5,
    proficiencies: {
      armor: ['light armor'],
      weapons: ['simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
      tools: ['three musical instruments of your choice'],
      savingThrows: ['dexterity', 'charisma'],
      skills: {
        choiceCount: 3,
        options: ['acrobatics', 'animal handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight of hand', 'stealth', 'survival']
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
          name: 'dagger',
          count: 1
        }
      ]
    },
    weapon: {
      options: [
        'rapier', 
        'longsword',
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
      options: ['diplomat\'s pack', 'entertainer\'s pack']
    },
    accessory: {
      options: [
        'lute',
        'bagpipes',
        'drum',
        'dulcimer',
        'flute',
        'lute',
        'lyre',
        'horn',
        'pan flute',
        'shawm',
        'viol'
      ]
    }
  },
  classOptions: {
    'extra language': {
      type: 'language',
      amount: 3,
      options: []
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['spellcasting', 'bardic inspiration'],
      classGimmick: [
        {
          name: 'Bardic Inspiration',
          type: 'buff',
          amount: 1,
          die: 'd6',
          description: 'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.',
          descriptionPoints: [
            'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll or saving throw it makes.',
            'The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails.',
            'Once the Bardic Inspiration die is rolled, it is lost.',
            'A creature can only have one Bardic Inspiration die at a time.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default BARD;