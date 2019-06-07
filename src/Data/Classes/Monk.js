const MONK = {
  name: 'Monk',
  classFeatures: {
    hitDice: '1d8 per Monk level',
    hpAtLevelOne: 8,
    hpGainOnLevelUp: 5,
    proficiencies: {
      armor: [],
      weapons: ['simple weapons', 'shortswords'],
      tools: ['one type of artisan\'s tools or one musical instrument'],
      savingThrows: ['strength', 'dexterity'],
      skills: {
        choiceCount: 2,
        options: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth']
      }
    }
  },
  equipment: {
    mandatory: {
      items: [
        {
          name: 'darts',
          amount: 10
        }
      ]
    },
    weapons: {
      options: [
        'shortsword',
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
      options: [
        'dungeoneer\'s pack',
        'explorer\'s pack'
      ]
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['unarmored defense', 'martial arts'],
      classGimmick: [
        {
          name: 'Martial Arts',
          type: 'specilization',
          amount: 0,
          die: 'none',
          description: 'At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don\'t have the two-handed or heavy property. You gain the following benefits while unarmed or wielding only monk weapons and you aren\'t wearing armor or wielding a shield:',
          descriptionPoints: [
            'You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons',
            'You can roll a d4 in place of the normal damage of your unarmeds trike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table',
            'When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make on unarmeds trike as a bonus action.'
          ],
        },
        {
          name: 'Unarmored Defense',
          type: 'armor',
          amount: 10,
          modifier: 'dexterity and wisdom',
          description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.'
        }
      ],
      classOptions: {}
    }
  ]
}


export default MONK;