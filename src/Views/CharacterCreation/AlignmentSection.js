import React, { Component } from 'react';
import Alignments from '../../Data/Alignments.js';
import AlignmentSnippet from './AlignmentSection/AlignmentSnippet.js';

class AlignmentSection extends Component {
  findAlignments() {
    const alignments = Object.keys(Alignments).map((alignment, i) => {
      return (
        <option key={i} value={alignment}>{Alignments[alignment].name}</option>
      )
    });
    return alignments;
  }

  render() {
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose Your Alignment</h2>
        <select className='alignment-selection' onChange={this.props.handleAlignmentSelection} value={this.props.alignmentSelected}>
          {this.findAlignments()}
        </select>
        <AlignmentSnippet alignmentSelected={this.props.alignmentSelected} />
      </div>
    )
  }
}

export default AlignmentSection;