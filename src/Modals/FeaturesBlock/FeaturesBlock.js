import React, { Component } from 'react';
import Classes from '../../Data/Classes.js';
import Races from '../../Data/Races.js';

class FeaturesBlock extends Component {
  findFeatures() {
    const pc = this.props.pc;
    let selectedClass = {};
    let race = {};
    let background = {};
    let features = [];

    if (Races[pc.race] !== undefined) {
      race = Races[pc.race];
      features = [...race.features];
    }

    if (Classes[pc.class] !== undefined) {
      selectedClass = Classes[pc.class];
      features = [...features, ...selectedClass.levelAdditions[0].features];
    }

    const returnFeatures = features.map((feature, i) => {
      return (
        <div key={i}>
          <h4>{feature}</h4>
        </div>
      )
    });

    if (features.length < 1) {
      return (
        <h4>No features yet.</h4>
      )
    }
    return returnFeatures;
  }

  render() {
    return (
      <div className='features-block block'>
        <h3>Features:</h3>
        {this.findFeatures()}
      </div>
    )
  }
}

export default FeaturesBlock;