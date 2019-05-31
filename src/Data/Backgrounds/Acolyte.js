const ACOLYTE = {
  description: 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric. Performing sacred rites is not the same thing as channeling divine power.',
  proficiencies: {
    choice: false,
    items: [
      'insight',
      'religion'
    ],
  },
  languages: {
    choice: true,
    items: []
  },
  equipment: {
    choice: false,
    items: [
      'holy symbol',
      'prayer book',
      '5 sticks of incense',
      'vestments',
      'set of common clothes',
      '15 gp'
    ]
  }
}

export default ACOLYTE;