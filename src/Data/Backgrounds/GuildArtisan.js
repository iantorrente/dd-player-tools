const GUILDARTISAN = {
  name: 'Guild Artisan',
  description: 'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'insight',
        'persuasion'
      ],
    },
    tool: {
      choice: false,
      items: [
        'one type of artisan\'s tools'
      ]
    }
  },
  languages: {
    choice: true,
  },
  equipment: {
    choice: false,
    items: [
      'a set of artisan\'s tools (one of your choice)',
      'a letter of introduction from your guild',
      'set of traveler\'s clothes',
      'set of common clothes',
      '15 gp'
    ]
  }
}

export default GUILDARTISAN;