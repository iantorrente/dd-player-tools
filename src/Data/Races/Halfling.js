const HALFLING = {
  name: 'Halfling',
  statModifiers: {
    dexterity: 2,
  },
  moveSpeed: 25,
  proficiencies: [],
  features: ['lucky', 'brave', 'halfling nimbleness'],
  languages: ['Common', 'Halfling'],
  size: 'small',
  raceChoices: {
    'halfling subrace': {
      name: 'Halfling Subrace',
      options: {
        'lightfoot halfling': {
          name: 'Lightfoot Halfling',
          chaMod: 1,
          features: ['naturally stealthy']
        },
        'stout halfling': {
          name: 'Stout Halfling',
          conMod: 1,
          features: ['stout resilience']
        }
      }
    }
  }
}

export default HALFLING;