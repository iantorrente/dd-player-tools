const ELF = {
  name: 'Elf',
  statModifiers: {
    dexterity: 2,
  },
  moveSpeed: 30,
  proficiencies: ['perception'],
  features: ['darkvision', 'fey ancestry', 'trance'],
  languages: ['Common', 'Elvish'],
  size: 'medium',
  raceChoices: {
    'elven subrace': {
      name: 'Elven Subrace',
      options: {
        'high elf': {
          name: 'High Elf',
          intMod: 1,
          proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
          extraChoices: ['cantrip', 'language']
        },
        'wood elf': {
          name: 'Wood Elf',
          wisMod: 1,
          proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
          speed: 35,
          features: ['mask of the wild']
        },
        'dark elf': {
          name: 'Dark Elf',
          chaMod: 1,
          features: ['superior darkvision', 'sunlight sensitivity'],
          spells: ['dancing lights', 'faerie fire', 'darkness'],
          proficiencies: ['rapier', 'shortsword', 'crossbow']
        },
      }
      
    }
  },
}

export default ELF;