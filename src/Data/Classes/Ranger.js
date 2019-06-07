const RANGER = {
  name: 'Ranger',
  classFeatures: {
    hitDice: '1d10 per Ranger level',
    hpAtLevelOne: 10,
    hpGainOnLevelUp: 6,
    proficiencies: {
      armor: ['light armor', 'medium armor', 'shields'],
      weapons: ['simple weapons', 'martial weapons'],
      tools: [],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choiceCount: 3,
        options: ['animal handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'longbow',
          count: 1
        }, 
        {
          name: 'arrows',
          count: 20
        }
      ]
    },
    armor: {
      options: [
        'scale mail', 
        'leather armor'
      ]
    },
    weapon: {
      options: [
        'two shortswords',
        'two simple melee weapons'
      ]
    },
    pack: {
      options: ['dungeoneer\'s pack', 'explorer\'s pack']
    },
  },
  classOptions: {
    'favored enemy': {
      type: 'enemy',
      amount: 1,
      options: [
        'aberrations',
        'beasts',
        'celestials',
        'constructs',
        'dragons',
        'elementals',
        'fey',
        'fiends',
        'giants',
        'monstrosities',
        'oozes',
        'plants',
        'undead'
      ]
    },
    'favored terrain': {
      type: 'terrain',
      amount: 1,
      options: [
        'arctic',
        'coast',
        'desert',
        'forest',
        'grassland',
        'mountain',
        'swamp',
        'Underdark'
      ]
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['favored enemy', 'natural explorer'],
      classGimmick: [
        {
          name: 'Favored Enemy',
          type: 'specilization',
          description: 'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy',
          descriptionPoints: [
            'Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead.',
            'Alternatively, you can select two races of humanoid *such as gnolls and orcs) as favored enemies.',
            'You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.',
            'When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.',
            'You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.'
          ],
        },
        {
          name: 'Natural Explorer',
          type: '',
          description: 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you takea  long rest. With that pool, you can restore a total number of hit points equal to your Ranger level x 5.',
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

export default RANGER;