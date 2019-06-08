const GNOME = {
  name: 'Gnome',
  statModifiers: {
    intelligence: 2,
  },
  moveSpeed: 25,
  proficiencies: [],
  features: ['gnome cunning'],
  languages: ['Common', 'Gnomish'],
  size: 'small',
  raceChoices: {
    'gnomish subrace': {
      name: 'Gnomish Subrace',
      options: {
        forest: {
          name: 'Forest Gnome',
          dexMod: 1,
          features: ['speak with small beasts'],
          cantrips: ['minor illusion'],
        },
        rock: {
          name: 'Rock Gnome',
          conMod: 1,
          features: ['artificer\'s lore'],
          proficiencies: ['tinker\'s tools']
        }
      }
    }
  },
  // extraChoices1Name: 'Gnomish Subrace',
  // extraChoices1: {
  //   'forest gnome': {
  //     name: 'forest gnome',
  //     dexMod: 1,
  //     features: ['speak with small beasts'],
  //     cantrips: ['minor illusion'],
  //   },
  //   'rock gnome': {
  //     name: 'rock gnome',
  //     conMod: 1,
  //     features: ['artificer\'s lore'],
  //     proficiencies: ['tinker\'s tools']
  //   }
  // }
}

export default GNOME;