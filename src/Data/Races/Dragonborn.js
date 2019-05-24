const DRAGONBORN = {
  name: 'dragonborn',
  strMod: 2,
  dexMod: 0,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 1,
  moveSpeed: 30,
  proficiencies: [],
  features: [],
  languages: ['common', 'draconic'],
  size: 'medium',
  speed: 30,
  extraChoices1Name: 'Draconic Ancestry',
  extraChoices1: {
    black: {
      name: 'black',
      damageType: 'acid',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'acid'
    },
    blue: {
      name: 'blue',
      damageType: 'lightning',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'lightning'
    },
    brass: {
      name: 'brass',
      damageType: 'fire',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'fire'
    },
    bronze: {
      name: 'bronze',
      damageType: 'lightning',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'lightning'
    },
    copper: {
      name: 'copper',
      damageType: 'acid',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'acid'
    },
    gold: {
      name: 'gold',
      damageType: 'fire',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'fire'
    },
    green: {
      name: 'green',
      damageType: 'poison',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'poison'
    },
    red: {
      name: 'red',
      damageType: 'fire',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'fire'
    },
    silver: {
      name: 'silver',
      damageType: 'cold',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'cold'
    },
    white: {
      name: 'white',
      damageType: 'cold',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'cold'
    },
  }
}

export default DRAGONBORN;