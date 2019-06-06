const SAGE = {
  name: 'Sage',
  description: 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'arcana',
        'history'
      ],
    }
  },
  languages: {
    choice: true,
    amount: 2
  },
  equipment: {
    choice: false,
    items: [
      'bottle of black ink',
      'quill',
      'small knife',
      'letter from a dead colleague posing a question you have not yet been able to answer',
      'common clothes',
      '10 gp'
    ]
  }
}

export default SAGE;