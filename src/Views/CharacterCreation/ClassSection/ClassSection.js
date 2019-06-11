import React, { Component } from 'react';
import Classes from '../../../Data/Classes.js'
import ClassSnippet from './ClassSnippet/ClassSnippet.js';
import Explanation from '../Explanation.js';

class ClassSection extends Component {
  getClassOptions() {
    const classOptions = Object.keys(Classes).map(function(key, i) {
      return (
        <option key={i} value={key}>{Classes[key].name}</option>
      )
    });
    return classOptions;
  }

  render() {
    const classOptions = this.getClassOptions();
    
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Class</h2>
        <select className='class-selection' onChange={this.props.handleClassSelection} value={this.props.pc.class}>
        <option>Classes:</option>
          {classOptions}
        </select>
        {
          (Classes[this.props.pc.class] !== undefined) ?
            <ClassSnippet 
              pc={this.props.pc}
              handleSkillSelection={this.props.handleSkillSelection}
              handleLanguageSelection={this.props.handleLanguageSelection}
              handleEquipmentSelection={this.props.handleEquipmentSelection}
            />
          :
            <Explanation toExplain='class' />
        }
      </div>
    )
  }
}

export default ClassSection;