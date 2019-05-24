const DWARF = {
  name: 'dwarf',
  strMod: 0,
  dexMod: 0,
  conMod: 2,
  intMod: 0,
  wisMod: 0,
  chaMod: 0,
  moveSpeed: 0,
  proficiencies: ['battleaxe', 'handaxe', 'throwing hammer', 'warhammer'],
  features: ['darkvision', 'dwarven resilience', 'stonecunning'],
  languages: ['common', 'dwarvish'],
  size: 'medium',
  speed: 25,
  extraChoicesName: 'Dwarven Subrace',
  extraChoices: [
    {
      name: 'hill dwarf',
      wisMod: 1,
      hpMod: 1
    },
    {
      name: 'mountain dwarf',
      strMod: 2,
      proficiencies: ['light armor', 'medium armor']
    }
  ]
}

export default DWARF;