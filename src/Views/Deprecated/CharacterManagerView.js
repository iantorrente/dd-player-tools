import React, { Component } from 'react';
import StatsView from './StatsView.js';
import EquipmentView from './EquipmentView.js';
import SpellsView from './SpellsView.js';
import JournalView from './JournalView.js';
import Navigation from '../Navigation/Navigation.js';
import CHARACTERDATA from '../Data/CharacterData.js';

class CharacterManagerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: CHARACTERDATA,
      view: 'stats'
    }
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(view) {
    this.setState({ view: view });
  }

  render() {
    const character = this.state.characterData;
    const view = this.state.view;
    let currentView = '';

    if (view === 'stats') {
      currentView = (
        <StatsView character={this.state.characterData} STATS={this.props.STATS} />
      )
    } else if (view === 'equipment') {
      currentView = (
        <EquipmentView />
      );
    } else if (view === 'spells') {
      currentView = (
        <SpellsView />
      );
    } else if (view === 'journal') {
      currentView = (
        <JournalView />
      );
    }

    return (
      <div className='character-manager-view'>
        <h1>{character.name}</h1>
        <h3>Level {character.level} {character.class}</h3>
        <Navigation handleViewChange={this.handleViewChange} />
        {currentView}
      </div>
    );
  }
}

export default CharacterManagerView;
