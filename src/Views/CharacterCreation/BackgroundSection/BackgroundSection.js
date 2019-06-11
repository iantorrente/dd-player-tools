import React, { Component } from 'react';
import BackgroundSnippet from './BackgroundSnippet/BackgroundSnippet.js';
import Explanation from '../Explanation.js';

class BackgroundSection extends Component {
  getBackgroundOptions(data) {
    const backgroundData = data;
    const backgrounds = Object.keys(backgroundData).map((bg, i) => {
      return (
        <option key={i} value={bg}>{backgroundData[bg].name}</option>
      )
    });

    return backgrounds;
  }

  render() {
    const backgroundData = this.props.data.backgroundData;
    const selectedBackground = this.props.pc.background;
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Background</h2>
        <select className='background-selection' onChange={this.props.handleBackgroundSelection} value={this.props.pc.background}>
          <option>Backgrounds:</option>
          {this.getBackgroundOptions(backgroundData)}
        </select>
        {
          (this.props.data.backgroundData[selectedBackground] !== undefined) ?
            <BackgroundSnippet
              pc={this.props.pc}
              data={this.props.data}
              handleLanguageSelection={this.props.handleLanguageSelection}
            />
          :
            <Explanation toExplain='background' />
        }
      </div>
    )
  }
}

export default BackgroundSection;