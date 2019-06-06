const WARLOCK = {
  name: 'Warlock',
  classFeatures: {
    hitDice: '1d8 per Warlock level',
    hpAtLevelOne: '8 + constitution',
    hpGainOnLevelUp: '5 + constitution',
    proficiencies: {
      armor: ['light armor'],
      weapons: ['simple weapons'],
      tools: [],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choiceCount: 2,
        options: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion']
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
          name: 'any simple weapon',
          count: 1
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
      options: ['scholar\'s pack', 'dungeoneer\'s pack']
    },
    accessory: {
      options: [
        'component pouch',
        'arcane focus'
      ]
    }
  },
  classOptions: {
    'otherworldly patron': {
      type: 'specilization',
      amount: 1,
      options: [
        'The Archfey',
        'The Fiend',
        'The Great Old One'
      ]
    }
  },
  levelAdditions: [
    {
      level: 1,
      proficiencyBonus: 2,
      features: ['otherworldly patron', 'pact magic'],
      classGimmick: [
        {
          name: 'Otherworldly Patron',
          type: 'specilization',
          amount: 1,
          description: 'At 1st level, you have struck a bargain with an otherworldly being of your choice:',
          descriptionPoints: [
            'The Archfey: A creature of legend who holds secrets that were forgotten before the mortal races were born. This being\'s motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power o r the settling of age-old grudges. Beings of this sort include the Prince of forStatement; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.',
            'The Fiend: A being from the lower planes of existence whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz\'Urb=luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.',
            'The Great Old One: A mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it c ould be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings.'
          ],
        }
      ],
      classOptions: {}
    }
  ]
}

export default WARLOCK;