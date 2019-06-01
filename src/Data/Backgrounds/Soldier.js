const SOLDIER = {
  name: 'Soldier',
  description: 'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'athletics',
        'intimidation'
      ],
    },
    tool: {
      choice: false,
      items: [
        'one type of gaming set',
        'vehicles (land)'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'insignia of rank',
      'trophy taken from a fallen enemy',
      'set of bone dice or deck of cards',
      'set of common clothes',
      '10 gp'
    ]
  }
}

export default SOLDIER;