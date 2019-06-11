import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alignments from '../../../../Data/Alignments.js';

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
    const alignment = this.props.pc.alignment;
    return (
      <div className='alignment-snippet snippet'>
        <section>
          <h3>Description:</h3>
          <p>{Alignments[alignment].description}</p>
        </section>

        <section>
          <h3>Examples:</h3>
          {this.findAlignmentExamples(Alignments[alignment])}
        </section>
        <Link to='/character-creation/character-preview'> 
          <button className='commit-btn'>Finalize</button>
        </Link>
      </div>
    )
  }
}

export default AlignmentSnippet;