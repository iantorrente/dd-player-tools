const HERMIT = {
  name: 'Hermit',
  description: 'You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life. In your time apart from the clam or of society, you found quiet, solitude, and perhaps some of the answers you were looking for.',
  proficiencies: {
    skill: {
      choice: false,
      items: [
        'medicine',
        'religion'
      ],
    },
    tool: {
      choice: false,
      items: [
        'herbalism kit'
      ]
    }
  },
  languages: {
    choice: true,
  },
  equipment: {
    choice: false,
    items: [
      'scroll case stuffed full of notes from your studies or prayers',
      'winter blanket',
      'set of common clothes',
      'herbalism kit',
      '5 gp'
    ]
  }
}

export default HERMIT;