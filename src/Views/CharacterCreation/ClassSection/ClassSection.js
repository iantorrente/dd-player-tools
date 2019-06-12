import React, { Component } from 'react';
import Classes from '../../../Data/Classes.js'
import ClassSnippet from './ClassSnippet/ClassSnippet.js';
import Explanation from '../Explanation.js';

class ClassSection extends Component {
  getClassOptions(data) {
    const classData = data;
    const classOptions = Object.keys(classData).map(function(key, i) {
      return (
        <option key={i} value={key}>{classData[key].name}</option>
      )
    });
    return classOptions;
  }

  render() {
    const classData = this.props.data.classData;
    const classOptions = this.getClassOptions(classData);
    
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Class</h2>
        <select className='selection' onChange={this.props.handleClassSelection} value={this.props.pc.class}>
        <option>Classes:</option>
          {classOptions}
        </select>
        {
          (classData[this.props.pc.class] !== undefined) ?
            <ClassSnippet 
              pc={this.props.pc}
              data={this.props.data}
              handleProficiencySelection={this.props.handleProficiencySelection}
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