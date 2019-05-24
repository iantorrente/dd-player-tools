const GNOME = {
  name: 'gnome',
  strMod: 0,
  dexMod: 0,
  conMod: 0,
  intMod: 2,
  wisMod: 0,
  chaMod: 0,
  moveSpeed: 25,
  proficiencies: [],
  features: ['gnome cunning'],
  languages: ['common', 'gnomish'],
  size: 'small',
  extraChoicesName: 'Gnomish Subrace',
  extraChoices: [
    {
      name: 'forest gnome',
      dexMod: 1,
      features: ['speak with small beasts'],
      cantrips: ['minor illusion'],
    },
    {
      name: 'rock gnome',
      conMod: 1,
      features: ['artificer\'s lore'],
      proficiencies: ['tinker\'s tools']
    }
  ]
}

export default GNOME;