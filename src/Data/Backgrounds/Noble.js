const NOBLE = {
  name: 'Noble',
  description: 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'history',
        'persuasion'
      ],
    },
    tool: {
      choice: false,
      items: [
        'one type of gaming set'
      ]
    }
  },
  languages: {
    choice: true,
  },
  equipment: {
    choice: false,
    items: [
      'set of fine clothes',
      'signet ring',
      'scroll of pedigree',
      '25 gp'
    ]
  }
}

export default NOBLE;