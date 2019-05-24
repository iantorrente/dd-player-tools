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
  extraChoicesName: 'Draconic Ancestry',
  extraChoices: [
    {
      name: 'black',
      damageType: 'acid',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'acid'
    },
    {
      name: 'blue',
      damageType: 'lightning',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'lightning'
    },
    {
      name: 'brass',
      damageType: 'fire',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'fire'
    },
    {
      name: 'bronze',
      damageType: 'lightning',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'lightning'
    },
    {
      name: 'copper',
      damageType: 'acid',
      breathWep: '5 by 30 ft. line (Dex. save)',
      damageResistance: 'acid'
    },
    {
      name: 'gold',
      damageType: 'fire',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'fire'
    },
    {
      name: 'green',
      damageType: 'poison',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'poison'
    },
    {
      name: 'red',
      damageType: 'fire',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'fire'
    },
    {
      name: 'silver',
      damageType: 'cold',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'cold'
    },
    {
      name: 'white',
      damageType: 'cold',
      breathWep: '15 ft. cone (Dex. save)',
      damageResistance: 'cold'
    },
  ]
}

export default DRAGONBORN;