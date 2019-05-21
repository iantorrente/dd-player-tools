import React, { Component } from 'react';

class StatAbilities extends Component {
  render() {
    const STORE = this.props.STORE;
    const statIndex = STORE.findIndex(statEntry => statEntry.statName === this.props.name);
    const abilitiesArray = STORE[statIndex].tiedAbilities;
    console.log(abilitiesArray);

    const returnString = abilitiesArray.map((ability, i) => {
      return (
          <h5 key={i.toString()}>{ability}</h5>
      )
    });

    return(
      <span className="stat-abilities">
        <h4>STAT ABILITIES</h4>
        {returnString}
      </span>
    )
  }
}

export default StatAbilities;