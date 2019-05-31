const HALFLING = {
  name: 'Halfling',
  strMod: 0,
  dexMod: 2,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 0,
  moveSpeed: 25,
  proficiencies: [],
  features: ['lucky', 'brave', 'halfling nimbleness'],
  languages: ['common', 'halfling'],
  size: 'small',
  extraChoices1Name: 'Halfling Subrace',
  extraChoices1: {
    'lightfoot': {
      name: 'lightfoot',
      chaMod: 1,
      features: ['naturally stealthy']
    },
    'stout': {
      name: 'stout',
      conMod: 1,
      features: ['stout resilience']
    }
  }
}

export default HALFLING;