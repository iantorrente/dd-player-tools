const ROGUE = {
  name: 'Rogue',
  classFeatures: {
    hitDice: '1d8 per Rogue level',
    hpAtLevelOne: '8 + constitution',
    hpGainOnLevelUp: '5 + constitution',
    proficiencies: {
      armor: ['light armor'],
      weapons: ['simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
      tools: ['thieve\'s tools'],
      savingThrows: ['dexterity', 'intelligence'],
      skills: {
        choiceCount: 4,
        options: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight of hand', 'stealth']
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
          count: 2
        },
        {
          name: 'thieve\'s tools',
          count: 1
        }
      ]
    },
    weapon: {
      options: [
        'rapier', 
        'shortsword',
      ]
    },
    'secondary weapon': {
      options: [
        'shortbow and quiver of 20 arrows',
        'shortsword',
      ]
    },
    pack: {
      options: [
        'burglar\'s pack', 
        'dungeoneer\'s pack', 
        'explorer\'s pack']
    },
  },
  classOptions: {
    'expertise': {
      type: 'skill',
      amount: 2,
      options: ['acrobatics', 'animal handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight of hand', 'stealth', 'survival']
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['expertise', 'thieves\' cant', 'sneak attack'],
      classGimmick: [
        {
          name: 'Expertise',
          type: 'skill',
          description: 'At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves\' tools.',
          descriptionPoints: [
            'Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.',
            'At 6th level, you can choose two more of your proficiencies (in skills or with thieves\' tools) to gain this benefit.'
          ],
        },
        {
          name: 'Thieves\' Cant',
          type: 'language',
          description: 'During your rogue training you learned thieves\' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation.',
          descriptionPoints: [
            'Only another creature that knows thieves\' cant understands such messages.',
            'It takes four times longer to convey such a message than it does to speak the same idea plainly.',
            'In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves\' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.'
          ],
        },
        {
          name: 'Sneak Attack',
          type: 'action',
          die: '1d6',
          description: 'Beginning at 1st level, you know how to strike subtly and exploit a foe\'s disctraction.',
          descriptionPoints: [
            'Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.',
            'You don\'t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn\'t incapacitated,a nd you don\'t have disadvantage on the attack roll.',
            'The amount of the extra damage increases as you gain levels in this class.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default ROGUE;