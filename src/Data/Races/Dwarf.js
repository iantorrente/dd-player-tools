const DWARF = {
  name: 'Dwarf',
  statModifiers: {
    constitution: 2,
  },
  moveSpeed: 25,
  proficiencies: ['battleaxe', 'handaxe', 'throwing hammer', 'warhammer'],
  features: ['darkvision', 'dwarven resilience', 'stonecunning'],
  languages: ['common', 'dwarvish'],
  size: 'medium',
  raceChoices: {
    'dwarven subrace': {
      name: 'Dwarven Subrace',
      options: {
        hill: {
          name: 'Hill Dwarf',
          wisMod: 1,
          hpMod: 1
        },
        mountain: {
          name: 'Mountain Dwarf',
          strMod: 2,
          proficiencies: ['light armor', 'medium armor']
        }
      }
    }
  },
  // extraChoices1Name: 'Dwarven Subrace',
  // extraChoices1: {
  //   'hill dwarf': {
  //     name: 'hill dwarf',
  //     wisMod: 1,
  //     hpMod: 1
  //   },
  //   'mountain dwarf': {
  //     name: 'mountain dwarf',
  //     strMod: 2,
  //     proficiencies: ['light armor', 'medium armor']
  //   }
  // }
}

export default DWARF;