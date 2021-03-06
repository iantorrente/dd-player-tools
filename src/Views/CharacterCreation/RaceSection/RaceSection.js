import React, { Component } from 'react';
import RaceSnippet from './RaceSnippet/RaceSnippet.js';
import Explanation from '../Explanation.js';

class RaceSection extends Component {
  getRaceOptions(data) {
    const raceData = data;
    const raceOptions = Object.keys(raceData).map(function(key, i) {
      return (
        <option key={i} value={key}>{raceData[key].name}</option>
      )
    });
    return raceOptions;
  }

  render() {
    const raceData = this.props.data.raceData;
    const raceOptions = this.getRaceOptions(raceData);
    return(
      <div className='step-section'>
        <select className='selection' onChange={this.props.handleRaceSelection} value={this.props.pc.race}>
          <option>Races:</option>
          {raceOptions}
        </select>
        {
          (raceData[this.props.pc.race] !== undefined) ?
            <RaceSnippet data={this.props.data} handleExtraRaceChoice={this.props.handleExtraRaceChoice} pc={this.props.pc} />
            :
            <Explanation toExplain='race'/>
        }
      </div>
    )
  }
}

export default RaceSection;