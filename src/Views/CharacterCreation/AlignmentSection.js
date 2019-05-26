import React, { Component } from 'react';

class AlignmentSection extends Component {
  render() {
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose Your Alignment</h2>
      </div>
    )
  }
}

export default AlignmentSection;