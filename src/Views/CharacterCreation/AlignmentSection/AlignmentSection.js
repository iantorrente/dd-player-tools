import React, { Component } from 'react';
import AlignmentSnippet from './AlignmentSnippet/AlignmentSnippet.js';
import Explanation from '../Explanation.js';

class AlignmentSection extends Component {
  findAlignments(data) {
    const alignmentData = data;
    const alignments = Object.keys(alignmentData).map((alignment, i) => {
      return (
        <option key={i} value={alignment}>{alignmentData[alignment].name}</option>
      )
    });
    return alignments;
  }

  render() {
    const alignmentData = this.props.data.alignmentData;
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose Your Alignment</h2>
        <select className='selection' onChange={this.props.handleAlignmentSelection} value={this.props.pc.alignment}>
          <option>Alignments:</option>
          {this.findAlignments(alignmentData)}
        </select>
        {
          (alignmentData[this.props.pc.alignment] !== undefined) ?
            <AlignmentSnippet data={this.props.data} pc={this.props.pc} />
          :
            <Explanation toExplain='alignment' />
        }
      </div>
    )
  }
}

export default AlignmentSection;