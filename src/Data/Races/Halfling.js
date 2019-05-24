const HALFLING = {
  name: 'halfling',
  strMod: 0,
  dexMod: 2,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 0,
  moveSpeed: 0,
  proficiencies: [],
  features: ['lucky', 'brave', 'halfling nimbleness'],
  languages: ['common', 'halfling'],
  size: 'small',
  speed: 25,
  extraChoicesName: 'Halfling Subrace',
  extraChoices: [
    {
      name: 'lightfoot',
      chaMod: 1,
      features: ['naturally stealthy']
    },
    {
      name: 'stout',
      conMod: 1,
      features: ['stout resilience']
    }
  ]
}

export default HALFLING;