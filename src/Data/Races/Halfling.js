const HALFLING = {
  name: 'Halfling',
  statModifiers: {
    dexterity: 2,
  },
  moveSpeed: 25,
  proficiencies: [],
  features: ['lucky', 'brave', 'halfling nimbleness'],
  languages: ['common', 'halfling'],
  size: 'small',
  raceChoices: {
    'halfling subrace': {
      name: 'Halfling Subrace',
      options: {
        'lightfoot': {
          name: 'Lightfoot Halfling',
          chaMod: 1,
          features: ['naturally stealthy']
        },
        'stout': {
          name: 'Stout Halfling',
          conMod: 1,
          features: ['stout resilience']
        }
      }
    }
  }
  // extraChoices1Name: 'Halfling Subrace',
  // extraChoices1: {
  //   'lightfoot': {
  //     name: 'lightfoot',
  //     chaMod: 1,
  //     features: ['naturally stealthy']
  //   },
  //   'stout': {
  //     name: 'stout',
  //     conMod: 1,
  //     features: ['stout resilience']
  //   }
  // }
}

export default HALFLING;