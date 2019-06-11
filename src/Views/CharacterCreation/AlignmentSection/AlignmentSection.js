import React, { Component } from 'react';
import Alignments from '../../../Data/Alignments.js';
import AlignmentSnippet from './AlignmentSnippet/AlignmentSnippet.js';
import Explanation from '../Explanation.js';

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
        <select className='alignment-selection' onChange={this.props.handleAlignmentSelection} value={this.props.pc.alignment}>
          <option>Alignments:</option>
          {this.findAlignments()}
        </select>
        {
          (Alignments[this.props.pc.alignment] !== undefined) ?
            <AlignmentSnippet pc={this.props.pc} />
          :
            <Explanation toExplain='alignment' />
        }
      </div>
    )
  }
}

export default AlignmentSection;