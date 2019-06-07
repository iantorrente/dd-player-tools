import React, { Component } from 'react';
import Races from '../../Data/Races.js';
import Backgrounds from '../../Data/Backgrounds.js';
import LanguageItem from './LanguageItem.js';

class LanguagesBlock extends Component {
  findLanguages() {
    const pc = this.props.pc;
    let race = {};
    let background = {};
    let languages = [];

    if (Races[this.props.pc.race] !== undefined) {
      race = Races[this.props.pc.race];
      languages = [...race.languages];
    }

    if (this.props.pc.backgroundLanguages.length > 0) {
      console.log('language background found');
      background = Backgrounds[this.props.pc.background];
      languages = [...languages, ...this.props.pc.backgroundLanguages]
    }

    if (this.props.pc.classExtraLanguages.length > 0) {
      languages = [...languages, ...this.props.pc.classExtraLanguages];
    }

    if (languages.length < 1) {
      return (
        <h4>No languages yet. Get languages from a Race, certain Classes, or certain Backgrounds</h4>
      )
    }

    const returnLanguages = languages.map((language, i) => {
      return (
        <LanguageItem language={language} />
      )
    })

    return returnLanguages;
  }

  render() { 
    return (
      <div className='block'>
        <h3>Languages:</h3>
        {this.findLanguages()}
      </div>
    )
  }
}

export default LanguagesBlock;