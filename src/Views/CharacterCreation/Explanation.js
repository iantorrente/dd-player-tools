import React, { Component } from 'react';

class Explanation extends Component {
  getExplanation() {
    const toExplain = this.props.toExplain;
    if (toExplain === 'race') {
      return (
        <section>
          <p>
            Every character belongs to a race, one of the many
            intelligent humanoid species in the D&D world. The
            most common player character races are dwarves, elves,
            halflings, and humans. Some races also have subraces,
            such as mountain dwarf or wood elf.
          </p>
          <p>
            The race you choose contributes to your character’s
            identity in an important way, by establishing a general
            appearance and the natural talents gained from culture
            and ancestry. Your character’s race grants particular
            racial traits, such as special senses, proficiency with
            certain weapons or tools, proficiency in one or more
            skills, or the ability to use minor spells. These traits
            sometimes dovetail with the capabilities of certain
            classes (see step 2). For example, the racial traits of
            lightfoot halflings make them exceptional rogues, and
            high elves tend to be powerful wizards. Sometimes
            playing against type can be fun, too. Half-orc paladins
            and mountain dwarf wizards, for example, can be
            unusual but memorable characters.
          </p>
          <p>
            Your race also increases one or more of your ability
            scores, which you determine in the final step.
          </p>
        </section>
      )
    }

    if (toExplain === 'class') {
      return (
        <section>
          <p>
            Every adventurer is a member of a class. Class broadly
            describes a character’s vocation, what special talents he
            or she possesses, and the tactics he or she is most likely
            to employ when exploring a dungeon, fighting monsters,
            or engaging in a tense negotiation.
          </p>
          <p>
            Your character receives a number of benefits from
            your choice of class. Many of these benefits are <b>class
            features</b>—capabilities (including spellcasting) that set
            your character apart from members of other classes.
            You also gain a number of <b>proficiencies</b>: armor,
            weapons, skills, saving throws, and sometimes tools.
            Your proficiencies define many of the things your
            character can do particularly well, from using certain
            weapons to telling a convincing lie.
          </p>
        </section>
      )
    }

    if (toExplain === 'background') {
      return (
        <section>
          <p>
            Your character’s background describes where he or
            she came from, his or her original occupation, and the
            character’s place in the D&D world. Your DM might
            offer additional backgrounds beyond the ones included
            in here, and might be willing to work with you to
            craft a background that’s a more precise fit for your
            character concept.
          </p>
          <p>
            A background gives your character a background
            feature (a general benefit) and proficiency in two skills,
            and it might also give you additional languages or
            proficiency with certain kinds of tools.
          </p>
        </section>
      )
    }

    if (toExplain === 'alignment') {
      return (
        <section>
          <p>
            Your character's alignment is their own personal moral compass. Are they a chaotic good Rogue who steals from the rich and gives to the poor, or a lawful good Paladin who upholds the law and enacts justice no matter the cost?
          </p>
          <p>
            The alignment serves as an underlying trait that helps to play your character. By no means is it static: a 1st level Paladin who sets off on a quest might not be the same man (or woman) they were when they become a 5th or 17th level Paladin. Keep your character's alignment in mind whenever there are roleplay or character building moments and ask yourself: is this a turning point for my character or will they continue to abide by their own moral compass.
          </p>
        </section>
      )
    }
  }

  render() {
    return (
      <div className='explanation snippet'>
        <h3>What is this?</h3>
        {this.getExplanation()}
      </div>
    )
  }
}

export default Explanation;