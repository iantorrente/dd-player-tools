const ELF = {
  name: 'elf',
  strMod: 0,
  dexMod: 2,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 0,
  moveSpeed: 0,
  proficiencies: ['perception'],
  features: ['darkvision', 'fey ancestry', 'trance'],
  languages: ['common', 'elvish'],
  size: 'medium',
  speed: 30,
  extraChoicesName: 'Elven Subrace',
  extraChoices: [
    {
      name: 'high elf',
      intMod: 1,
      proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
      extraChoices: ['cantrip', 'language']
    },
    {
      name: 'wood elf',
      wisMod: 1,
      proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
      speed: 35,
      features: ['mask of the wild']
    },
    {
      name: 'dark elf',
      chaMod: 1,
      features: ['superior darkvision', 'sunlight sensitivity'],
      spells: ['dancing lights', 'faerie fire', 'darkness'],
      proficiencies: ['rapier', 'shortsword', 'crossbow']
    },
  ]
}

export default ELF;