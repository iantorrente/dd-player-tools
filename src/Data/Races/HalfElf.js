const HALFELF = {
  name: 'halfElf',
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