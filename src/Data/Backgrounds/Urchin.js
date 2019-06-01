const URCHIN = {
  name: 'Urchin',
  description: 'You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'sleight of hand',
        'stealth'
      ],
    },
    tool: {
      choice: false,
      items: [
        'disguise kit',
        'thieve\'s tools'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'small knife',
      'map of the city you grew up in',
      'pet mouse',
      'token to remember your parents by',
      'set of common clothes',
      '10 gp'
    ]
  }
}

export default URCHIN;