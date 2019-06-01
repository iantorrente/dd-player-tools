const SAILOR = {
  name: 'Sailor',
  description: 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'athletics',
        'perception'
      ],
    },
    tool: {
      choice: false,
      items: [
        'navigator\'s tools',
        'vehicles (water)'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'belaying pin (club)',
      '50 feet of silk rope',
      'lucky charm such as a rabbit foot or a small stone with a hole in the center',
      'set of common clothes',
      '10 gp'
    ]
  }
}

export default SAILOR;