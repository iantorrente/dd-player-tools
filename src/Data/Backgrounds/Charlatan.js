const CHARLATAN = {
  name: 'Charlatan',
  description: 'You have always had a way with people. You know what makes them tick, you can tease out their hearts\' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children\'s books. It\'s a useful talent, and one that you\'re perfectly willing to use for your advantage.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'deception',
        'sleight of hand'
      ],
    },
    tool: {
      choice: false,
      items: [
        'disguise kit',
        'forgery kit'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'a set of fine clothes',
      'disguise kit',
      'tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, ad eck of marked cards, or a signet ring of an imaginary duke)',
      '15 gp'
    ]
  }
}

export default CHARLATAN;