import React, { Component } from 'react';

class StatSkills extends Component {
  firstLetterUC(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const character = this.props.character;
    const STATS = this.props.STATS;
    const statIndex = STATS.findIndex(statEntry => statEntry.statName === this.props.statName);
    const skillsArray = STATS[statIndex].tiedSkills;

    console.log(character);

    const skillsList = skillsArray.map((skill, i) => {
      console.log(character);
      if (character) {
        return (
          <li key={i.toString()} className="skill">
            <label>{this.firstLetterUC(skill)}
              <input className="skill-input" defaultValue={character[skill]}></input>
            </label>
          </li>
        )
      }
    });

    return(
      <span className="stat-skills">
        <h4>Skills</h4>
        <ul>
          {skillsList}
        </ul>
      </span>
    )
  }
}

export default StatSkills;