const FOLKHERO = {
  name: 'Folk Hero',
  description: 'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'animal handling',
        'survival'
      ],
    },
    tool: {
      choice: false,
      items: [
        'one type of artisan\'s tools',
        'vehicles (land)'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'a set of artisan\'s tools (one of your choice)',
      'shovel',
      'iron pot',
      'set of common clothes',
      '10 gp'
    ]
  }
}

export default FOLKHERO;