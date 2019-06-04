const ALIGNMENTS = {
  'lawful good': {
    name: 'Lawful Good',
    description: 'A lawful good character typically acts with compassion and always with honor and a sense of duty, though will often regret taking any action they fear would violate their code; even if they recognize such action as being good. Such characters include righteous knights, paladins, and most dwarves. Lawful good creatures include the noble golden dragons.',
    examples: [
      {
        name: 'Dana Scully',
        franchise: 'The X Files'
      },
      {
        name: 'Leslie Knope',
        franchise: 'Parks and Recreation'
      },
      {
        name: 'Ellen Ripley',
        franchise: 'Alien'
      }
    ]
  },
  'neutral good': {
    name: 'Neutral Good',
    description: 'A neutral good character typically acts altruistically, without regard for or against lawful precepts such as rules or tradition. A neutral good character has no problems with cooperating with lawful officials, but does not feel beholden to them. In the event that doing the right thing requires the bending or breaking of rules, they do not suffer the same inner conflict that a lawful good character would.',
    examples: [
      {
        name: 'Luke Skywalker',
        franchise: 'Star Wars'
      },
      {
        name: 'Neo',
        franchise: 'The Matrix'
      },
      {
        name: 'Frodo Baggins',
        franchise: 'The Lord of the Rings'
      }
    ]
  },
  'chaotic good': {
    name: 'Chaotic Good',
    description: 'A chaotic good character does what is necessary to bring about change for the better, disdains bureaucratic organizations that get in the way of social improvement, and places a high value on personal freedom, not only for oneself, but for others as well.[9] Chaotic good characters usually intend to do the right thing, but their methods are generally disorganized and often out of sync with the rest of society.',
    examples: [
      {
        name: 'Matt Murdock (Daredevil)',
        franchise: 'Marvel\'s Daredevil'
      },
      {
        name: 'Fox Mulder',
        franchise: 'The X Files'
      },
      {
        name: 'Mal Reynolds',
        franchise: 'Firefly'
      }
    ]
  },
  'lawful neutral': {
    name: 'Lawful Neutral',
    description: 'A lawful neutral character typically believes strongly in lawful concepts such as honor, order, rules, and tradition, but often follows a personal code in addition to, or even in preference to, one set down by a benevolent authority.[9] Examples of lawful neutral characters include a soldier who always follows orders, a judge or enforcer who adheres mercilessly to the letter of the law, and a disciplined monk.',
    examples: [
      {
        name: 'Zoe Washburne',
        franchise: 'Firefly'
      },
      {
        name: 'Temperance Brennan',
        franchise: 'Bones'
      },
      {
        name: 'Gil Grissom',
        franchise: 'CSI: Crime Scene Investigation'
      }
    ]
  },
  'neutral': {
    name: 'True Neutral',
    description: 'A true neutral character is neutral on both axes and tends not to feel strongly towards any alignment, or actively seeks their balance. Druids frequently follow this dedication to balance: A typical druid might fight against a band of marauding gnolls, only to switch sides to save the gnolls\' clan from being totally exterminated.',
    examples: [
      {
        name: 'Sherlock Holmes',
        franchise: 'Sherlock Holmes'
      },
      {
        name: 'The Driver (Ryan Gosling)',
        franchise: 'Drive'
      },
      {
        name: 'M',
        franchise: 'James Bond'
      }
    ]
  },
  'chaotic neutral': {
    name: 'Chaotic Neutral',
    description: 'A chaotic neutral character is an individualist who follows their own heart and generally shirks rules and traditions. Although chaotic neutral characters promote the ideals of freedom, it is their own freedom that comes first; good and evil come second to their need to be free.',
    examples: [
      {
        name: 'Marv',
        franchise: 'Sin City'
      },
      {
        name: 'Captain Jack Sparrow',
        franchise: 'Pirates of the Carribean'
      },
      {
        name: 'River Tam',
        franchise: 'Firefly'
      }
    ]
  },
  'lawful evil': {
    name: 'Lawful Evil',
    description: 'A lawful evil character sees a well-ordered system as being easier to exploit and shows a combination of desirable and undesirable traits. Examples of this alignment include tyrants, devils, corrupt officials, and undiscriminating mercenary types who have a strict code of conduct.',
    examples: [
      {
        name: 'Hannibal Lecter',
        franchise: 'Hannibal and Silence of the Lambs'
      },
      {
        name: 'Cersei Lannister',
        franchise: 'Game of Thrones'
      },
      {
        name: 'Lex Luthor',
        franchise: 'DC\'s Superman'
      }
    ]
  },
  'neutral evil': {
    name: 'Neutral Evil',
    description: 'A neutral evil character is typically selfish and has no qualms about turning on allies-of-the-moment, and usually makes allies primarily to further their own goals. A neutral evil character has no compunctions about harming others to get what they want, but neither will they go out of their way to cause carnage or mayhem when they see no direct benefit for themselves. Another valid interpretation of neutral evil holds up evil as an ideal, doing evil for evil\'s sake and trying to spread its influence.Examples of the first type are an assassin who has little regard for formal laws but does not needlessly kill, a henchman who plots behind their superior\'s back, or a mercenary who readily switches sides if made a better offer. An example of the second type would be a masked killer who strikes only for the sake of causing fear and distrust in the community.',
    examples: [
      {
        name: 'Two-Face',
        franchise: 'DC\'s Batman'
      },
      {
        name: 'Scar',
        franchise: 'The Lion King'
      },
      {
        name: 'Yzma',
        franchise: 'The Emperor\'s New Groove'
      }
    ]
  },
  'chaotic evil': {
    name: 'Chaotic Evil',
    description: 'A chaotic evil character tends to have no respect for rules, other people\'s lives, or anything but their own desires, which are typically selfish and cruel. They set a high value on personal freedom, but do not have much regard for the lives or freedom of other people. Chaotic evil characters do not work well in groups because they resent being given orders and do not usually behave themselves unless there is no alternative. Examples of this alignment include higher forms of undead, such as liches, and violent killers who strike for pleasure rather than profit.',
    examples: [
      {
        name: 'Joffrey Baratheon',
        franchise: 'Game of Thrones'
      },
      {
        name: 'Ramsay Bolton',
        franchise: 'Game of Thrones'
      },
      {
        name: 'The Joker',
        franchise: 'DC\'s Batman'
      }
    ]
  },
}

export default ALIGNMENTS;