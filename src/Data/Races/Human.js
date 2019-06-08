const HUMAN = {
  name: 'Human',
  statModifiers: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  moveSpeed: 30,
  proficiencies: [],
  features: [],
  languages: ['common'],
  size: 'medium',
  raceChoices: {
    'extra language': {
      name: 'Extra Language',
      options: {
        language: true
      }
    }
  }
}

export default HUMAN;