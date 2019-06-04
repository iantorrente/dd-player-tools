const DRAGONBORN = {
  name: 'Dragonborn',
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
  raceChoices: {
    'draconic ancestry': {
      name: 'Draconic Ancestry',
      options: {
        black: {
          name: 'Black Dragon',
          damageType: 'acid',
          breathWep: '5 by 30 ft. line (Dex. save)',
          damageResistance: 'acid'
        },
        blue: {
          name: 'Blue Dragon',
          damageType: 'lightning',
          breathWep: '5 by 30 ft. line (Dex. save)',
          damageResistance: 'lightning'
        },
        brass: {
          name: 'Brass Dragon',
          damageType: 'fire',
          breathWep: '5 by 30 ft. line (Dex. save)',
          damageResistance: 'fire'
        },
        bronze: {
          name: 'Bronze Dragon',
          damageType: 'lightning',
          breathWep: '5 by 30 ft. line (Dex. save)',
          damageResistance: 'lightning'
        },
        copper: {
          name: 'Copper Dragon',
          damageType: 'acid',
          breathWep: '5 by 30 ft. line (Dex. save)',
          damageResistance: 'acid'
        },
        gold: {
          name: 'Gold Dragon',
          damageType: 'fire',
          breathWep: '15 ft. cone (Dex. save)',
          damageResistance: 'fire'
        },
        green: {
          name: 'Green Dragon',
          damageType: 'poison',
          breathWep: '15 ft. cone (Dex. save)',
          damageResistance: 'poison'
        },
        red: {
          name: 'Red Dragon',
          damageType: 'fire',
          breathWep: '15 ft. cone (Dex. save)',
          damageResistance: 'fire'
        },
        silver: {
          name: 'Silver Dragon',
          damageType: 'cold',
          breathWep: '15 ft. cone (Dex. save)',
          damageResistance: 'cold'
        },
        white: {
          name: 'White Dragon',
          damageType: 'cold',
          breathWep: '15 ft. cone (Dex. save)',
          damageResistance: 'cold'
        },
      }
    }
  },
  // extraChoices1Name: 'Draconic Ancestry',
  // extraChoices1: {
  //   black: {
  //     name: 'black',
  //     damageType: 'acid',
  //     breathWep: '5 by 30 ft. line (Dex. save)',
  //     damageResistance: 'acid'
  //   },
  //   blue: {
  //     name: 'blue',
  //     damageType: 'lightning',
  //     breathWep: '5 by 30 ft. line (Dex. save)',
  //     damageResistance: 'lightning'
  //   },
  //   brass: {
  //     name: 'brass',
  //     damageType: 'fire',
  //     breathWep: '5 by 30 ft. line (Dex. save)',
  //     damageResistance: 'fire'
  //   },
  //   bronze: {
  //     name: 'bronze',
  //     damageType: 'lightning',
  //     breathWep: '5 by 30 ft. line (Dex. save)',
  //     damageResistance: 'lightning'
  //   },
  //   copper: {
  //     name: 'copper',
  //     damageType: 'acid',
  //     breathWep: '5 by 30 ft. line (Dex. save)',
  //     damageResistance: 'acid'
  //   },
  //   gold: {
  //     name: 'gold',
  //     damageType: 'fire',
  //     breathWep: '15 ft. cone (Dex. save)',
  //     damageResistance: 'fire'
  //   },
  //   green: {
  //     name: 'green',
  //     damageType: 'poison',
  //     breathWep: '15 ft. cone (Dex. save)',
  //     damageResistance: 'poison'
  //   },
  //   red: {
  //     name: 'red',
  //     damageType: 'fire',
  //     breathWep: '15 ft. cone (Dex. save)',
  //     damageResistance: 'fire'
  //   },
  //   silver: {
  //     name: 'silver',
  //     damageType: 'cold',
  //     breathWep: '15 ft. cone (Dex. save)',
  //     damageResistance: 'cold'
  //   },
  //   white: {
  //     name: 'white',
  //     damageType: 'cold',
  //     breathWep: '15 ft. cone (Dex. save)',
  //     damageResistance: 'cold'
  //   },
  // }
}

export default DRAGONBORN;