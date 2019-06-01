const OUTLANDER = {
  name: 'Outlander',
  description: 'You grew up in the wilds, far from civilization and the comforts of town and technology. You\’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were anomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don\’t know the specific features of the terrain, you know the ways of the wild.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'athletics',
        'survival'
      ],
    },
    tool: {
      choice: false,
      items: [
        'one type of musical instrument'
      ]
    }
  },
  languages: {
    choice: true,
    amount: 1
  },
  equipment: {
    choice: false,
    items: [
      'staff',
      'hunting trap',
      'trophy from animal you killed',
      'traveler\'s clothes',
      '10 gp'
    ]
  }
}

export default OUTLANDER;