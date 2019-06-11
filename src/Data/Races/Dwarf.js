const DWARF = {
  name: 'Dwarf',
  statModifiers: {
    constitution: 2,
  },
  moveSpeed: 25,
  proficiencies: ['battleaxe', 'handaxe', 'throwing hammer', 'warhammer'],
  features: ['darkvision', 'dwarven resilience', 'stonecunning'],
  languages: ['Common', 'Dwarvish'],
  size: 'medium',
  raceChoices: {
    'dwarven subrace': {
      name: 'Dwarven Subrace',
      options: {
        'hill dwarf': {
          name: 'Hill Dwarf',
          wisMod: 1,
          hpMod: 1
        },
        'mountain dwarf': {
          name: 'Mountain Dwarf',
          strMod: 2,
          proficiencies: ['light armor', 'medium armor']
        }
      }
    }
  },
}

export default DWARF;