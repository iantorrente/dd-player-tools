import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Languages from '../../../../Data/Languages.js';

class BackgroundSnippet extends Component {
  findLanguages(background) {
    const languages = Object.keys(Languages).map((language, i) => {
      return (
        <option key={i} value={language}>{language}</option>
      )
    })
    return languages;
  }

  findEquipment(background) {
    const equipment = background.equipment.items.map((equipment, i) => {
      return <p key={i}>{equipment}</p>
    })

    return equipment;
  }

  findProficiencies(background) {
    const backgroundProfs = background.proficiencies;
    const proficiencies = Object.keys(backgroundProfs).map((proficiency, i) => {
      return (
        <section key={i}>
          <p><b>{proficiency} proficiencies:</b></p>
          {backgroundProfs[proficiency].items.join(', ')}
        </section>
      )
    })

    return proficiencies;
  }

  render() {
    const backgroundData = this.props.data.backgroundData;
    const background = backgroundData[this.props.pc.background];
    return (
      <div className='snippet'>
        <section className='description-list'>
          <h3>Description:</h3>
          <p>{background.description}</p>
        </section>

        {
          (background.languages) && 
            <section 
              className='language-list'
            >
              <h3>Languages:</h3>
              <select
                index={0}
                source='background'
                value={this.props.pc.backgroundLanguages[0] ? this.props.pc.backgroundLanguages[0] : 'Languages:'}
                onChange={this.props.handleLanguageSelection}
              >
                <option>Languages:</option>
                {this.findLanguages(background)}
              </select>
            </section>
        }

        <section>
          <h3>Proficiencies:</h3>
          {this.findProficiencies(background)}
        </section>

        <section>
          <h3>Equipment:</h3>
          {this.findEquipment(background)}
        </section>
      </div>
    )
  }
}

export default BackgroundSnippet;