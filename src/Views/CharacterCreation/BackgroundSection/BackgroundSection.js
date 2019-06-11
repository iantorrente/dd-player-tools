import React, { Component } from 'react';
import Backgrounds from '../../../Data/Backgrounds.js';
import BackgroundSnippet from './BackgroundSnippet/BackgroundSnippet.js';
import Explanation from '../Explanation.js';

class BackgroundSection extends Component {
  getBackgroundOptions() {
    const backgrounds = Object.keys(Backgrounds).map((bg, i) => {
      return (
        <option key={i} value={bg}>{Backgrounds[bg].name}</option>
      )
    });

    return backgrounds;
  }

  render() {
    const selectedBackground = this.props.pc.background;
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Background</h2>
        <select className='background-selection' onChange={this.props.handleBackgroundSelection} value={this.props.pc.background}>
          <option>Backgrounds:</option>
          {this.getBackgroundOptions()}
        </select>
        {
          (Backgrounds[selectedBackground] !== undefined) ?
            <BackgroundSnippet
              pc={this.props.pc}
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