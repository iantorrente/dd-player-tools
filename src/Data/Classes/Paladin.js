const PALADIN = {
  name: 'Paladin',
  classFeatures: {
    hitDice: '1d10 per Paladin level',
    hpAtLevelOne: 10,
    hpGainOnLevelUp: 6,
    proficiencies: {
      armor: ['all armor', 'shields'],
      weapons: ['simple weapons', 'martial weapons'],
      tools: [],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choiceCount: 2,
        options: ['acrobatics', 'insight', 'intimidation', 'medicine','persuasion', 'religion']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'chain mail',
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
        'martial weapon and a shield', 
        'two martial weapons'
      ]
    },
    'secondary weapon': {
      options: [
        'five javelins',
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
      options: ['priest\'s pack', 'explorer\'s pack']
    },
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['divine sense', 'lay on hands'],
      classGimmick: [
        {
          name: 'Divine Sense',
          type: 'action',
          description: 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover.',
          descriptionPoints: [
            'You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance).',
            'Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.',
            'You can use this feature a number of times equal to 1 + your Charisma modifier.',
            'When you finish a long rest, you regain all expended uses.'
          ],
        },
        {
          name: 'Lay on Hands',
          type: 'spell',
          description: 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you takea  long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.',
          descriptionPoints: [
            'As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.',
            'Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it.',
            'You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one',
            'This feature has no effect on undead and constructs.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default PALADIN;