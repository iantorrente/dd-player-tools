const DWARF = {
  name: 'Dwarf',
  strMod: 0,
  dexMod: 0,
  conMod: 2,
  intMod: 0,
  wisMod: 0,
  chaMod: 0,
  moveSpeed: 25,
  proficiencies: ['battleaxe', 'handaxe', 'throwing hammer', 'warhammer'],
  features: ['darkvision', 'dwarven resilience', 'stonecunning'],
  languages: ['common', 'dwarvish'],
  size: 'medium',
  extraChoices1Name: 'Dwarven Subrace',
  extraChoices1: {
    'hill dwarf': {
      name: 'hill dwarf',
      wisMod: 1,
      hpMod: 1
    },
    'mountain dwarf': {
      name: 'mountain dwarf',
      strMod: 2,
      proficiencies: ['light armor', 'medium armor']
    }
  }
}

export default DWARF;