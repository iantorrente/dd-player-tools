const CRIMINAL = {
  name: 'Criminal',
  description: 'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You\'re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'deception',
        'stealth'
      ],
    },
    tools: {
      choice: false,
      items: [
        'one type of gaming set',
        'thieves\' tools'
      ]
    }
  },
  equipment: {
    choice: false,
    items: [
      'crowbar',
      'set of dark common clothes including a hood',
      '15 gp'
    ]
  }
}

export default CRIMINAL;