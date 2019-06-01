const ENTERTAINER = {
  name: 'Entertainer',
  description: 'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'acrobatics',
        'performance'
      ],
    },
    tool: {
      choice: false,
      items: [
        'disguise kit',
        'one type of musical instrument'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'musical instrument (one of your choice)',
      'the favor of an admirer (love letter, lock of hair, or trinket)',
      'a costume',
      '15 gp'
    ]
  }
}

export default ENTERTAINER;