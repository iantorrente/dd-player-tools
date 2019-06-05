const ELF = {
  name: 'Elf',
  statModifiers: {
    dexterity: 2,
  },
  moveSpeed: 30,
  proficiencies: ['perception'],
  features: ['darkvision', 'fey ancestry', 'trance'],
  languages: ['common', 'elvish'],
  size: 'medium',
  raceChoices: {
    'elven subrace': {
      name: 'Elven Subrace',
      options: {
        high: {
          name: 'High Elf',
          intMod: 1,
          proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
          extraChoices: ['cantrip', 'language']
        },
        wood: {
          name: 'Wood Elf',
          wisMod: 1,
          proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
          speed: 35,
          features: ['mask of the wild']
        },
        dark: {
          name: 'Dark Elf',
          chaMod: 1,
          features: ['superior darkvision', 'sunlight sensitivity'],
          spells: ['dancing lights', 'faerie fire', 'darkness'],
          proficiencies: ['rapier', 'shortsword', 'crossbow']
        },
      }
      
    }
  },
  // extraChoices1Name: 'Elven Subrace',
  // extraChoices1: {
  //   'high elf': {
  //     name: 'high elf',
  //     intMod: 1,
  //     proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
  //     extraChoices: ['cantrip', 'language']
  //   },
  //   'wood elf': {
  //     name: 'wood elf',
  //     wisMod: 1,
  //     proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
  //     speed: 35,
  //     features: ['mask of the wild']
  //   },
  //   'dark elf': {
  //     name: 'dark elf',
  //     chaMod: 1,
  //     features: ['superior darkvision', 'sunlight sensitivity'],
  //     spells: ['dancing lights', 'faerie fire', 'darkness'],
  //     proficiencies: ['rapier', 'shortsword', 'crossbow']
  //   },
  // }
}

export default ELF;