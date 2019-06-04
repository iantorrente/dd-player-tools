const HALFELF = {
  name: 'Half Elf',
  strMod: 0,
  dexMod: 0,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 2,
  moveSpeed: 30,
  proficiencies: [],
  features: ['darkvision', 'fey ancestry'],
  languages: ['common', 'elvish'],
  size: 'medium',
  raceChoices: {
    'ability score increase': {
      name: 'Ability Score Increase',
      options: {
        strength: {
          name: 'Strength',
          modifier: 1
        }, 
        dexterity: {
          name: 'Dexterity',
          modifier: 1
        }, 
        constitution: {
          name: 'Constitution',
          modifier: 1
        }, 
        intelligence: {
          name: 'Intelligence',
          modifier: 1
        }, 
        wisdom: {
          name: 'Wisdom',
          modifier: 1
        }, 
        charisma: {
          name: 'Charisma',
          modifier: 1
        }
      }
    },
    'skill versatility': {
      name: 'Skill Versatility',
      options: {
        acrobatics: {
          name: 'Acrobatics'
        }, 
        animalHandling: {
          name: 'Animal Handling',
        }, 
        arcana: {
          name: 'Arcana',
        }, 
        athletics: {
          name: 'Athletics',
        }, 
        deception: {
          name: 'Deception',
        }, 
        history: {
          name: 'History',
        }, 
        insight: {
          name: 'Insight',
        }, 
        intimidation: {
          name: 'Intimidation',
        }, 
        investigation: {
          name: 'Investigation',
        }, 
        medicine: {
          name: 'Medicine',
        }, 
        nature: {
          name: 'Nature',
        }, 
        perception: {
          name: 'Perception',
        }, 
        performance: {
          name: 'Performance',
        }, 
        persuasion: {
          name: 'Persuasion',
        }, 
        religion: {
          name: 'Religion',
        }, 
        sleightOfHand: {
          name: 'Sleight of Hand',
        }, 
        stealth: {
          name: 'Stealth',
        }, 
        survival: {
          name: 'Survival',
        }
      }
    }
  },
  extraChoices1Name: 'Ability Score Increase',
  extraChoices1: {
    strength: {
      modifier: 1
    }, 
    dexterity: {
      modifier: 1
    }, 
    constitution: {
      modifier: 1
    }, 
    intelligence: {
      modifier: 1
    }, 
    wisdom: {
      modifier: 1
    }, 
    charisma: {
      modifier: 1
    }
  },
  extraChoices2Name: 'Skill Versitility',
  extraChoices2: {
    acrobatics: {}, 
    animalHandling: {}, 
    arcana: {}, 
    athletics: {}, 
    deception: {}, 
    history: {}, 
    insight: {}, 
    intimidation: {}, 
    investigation: {}, 
    medicine: {}, 
    nature: {}, 
    perception: {}, 
    performance: {}, 
    persuasion: {}, 
    religion: {}, 
    sleightOfHand: {}, 
    stealth: {}, 
    survival: {}
  }
}

export default HALFELF;