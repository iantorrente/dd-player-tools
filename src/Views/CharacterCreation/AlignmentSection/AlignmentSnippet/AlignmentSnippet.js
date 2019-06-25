import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlignmentSnippet extends Component {
  findAlignmentExamples(alignment) {
    const examples = alignment.examples.map((example, i) => {
      return (
        <p key={i}>{example.name} from <i>{example.franchise}</i></p>
      )
    });
    return examples;
  }

  render() {
    const alignmentData = this.props.data.alignmentData;
    const alignment = this.props.pc.alignment;
    return (
      <div className='alignment-snippet snippet'>
        <section>
          <h3>Description:</h3>
          <p>{alignmentData[alignment].description}</p>
        </section>

        <section>
          <h3>Examples:</h3>
          {this.findAlignmentExamples(alignmentData[alignment])}
        </section>
      </div>
    )
  }
}

export default AlignmentSnippet;