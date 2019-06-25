import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <header className='landing-header'>
          <h1>D&D New Character Creator</h1>
          <h3>A tool for the world's greatest tabletop roleplaying game</h3>
          <Link className='nav-link' to='/character-creation/race'>
            <button className='character-creation-btn'>Create A Character</button>
          </Link>
        </header>

        <section className='landing-section '>
          <h3>What Is This?</h3>
          <p>
            The D&D New Character Creator is a simple tool to help new and veteran players with possibly the most time consuming pre-campaign ritual: creating a character. This tool takes all of the necesarry information from the 5th Edition Player Handbook and condenses it into what's relevant to character creation.
          </p>
          
          <p>
            The whole tool is guided with steps indicating what comes next and information of each option available to players. For now it's only an aid to help players create a 1st level character, but in the future I hope to include support for character creation up to level 20.
          </p>
        </section>
        <section className='landing-section'>
          <h3>Why Make This?</h3>
          <p>
            D&D is a fantastic roleplaying tabletop game, but breaking into it is pretty difficult. Unless you have an experienced Dungeon Master (DM) or veteran players on the table, it's a complex and confusing game to get your head around.
          </p>
          <p>
            Character creation is perhaps the biggest hurdle a new player faces. The Player Handbook (PHB) has all of the rules necessary to create a new character, but the information is spread out and locked inside walls of text. Worse yet is the pages upon pages of class, race, and background options to choose from. It becomes a whole day affair just to create a character, even for those who aren't new to the process. The amount of steps
          </p>
          <p>
            Creating this tool is my way of helping new and returning players, as well as myself. Creating and playing as fantastical characters should be a stress free and enjoyable part of the game that shouldn't take more than an hour to accomplish (all things considered). The meat of the game is adventuring to far off lands, slaying dragons, and getting loot. It's my goal and this app's purpose to help players get there as quickly as possible.
          </p>
        </section>
        <section className='landing-section'>
          <h3>How Do I Use It?</h3>
          <div>
            <p>
              While you can jump straight into the tool and learn as you go, the numbered steps down below will give you an idea of what the process of creating characters looks like through this tool:
            </p>
            <ol>
              <li>Begin creating a character by pressing 'Create A Character'</li>
              <li>Creating a character requires you to select a <b>Race</b>, <b>Class</b>, <b>Background</b>, and <b>Alignment</b>. With this tool, you can jump between any of those sections by clicking on the tabs.</li> 
              <li>At any time, you can see how your character is coming along by clicking on the <b>Preview Character</b> button on the top.</li>
              <li>Distributing stats (strength, constitution, dexterity, etc.) can only be done by randomizing. This takes the 5th Edition rule of rolling 4d6, dropping the lowest number, and adding the remaining numbers together. The tool automatically does this and also adds any relevant racial modifiers.</li>
              <li>When selecting a <b>Class</b>, be sure to choose skills for your character. This will allow them to be <b>proficient</b> in that skill which gives them more to that specific skill.</li>
              <li><b>Alignments</b> are, for the most part, purely for roleplay. This tool gives a brief explanation of each alignment choice, as well as examples from pop culture.</li>
              <li>When you're satisfied with your character, you can navigate to the <b>Character Preview</b> using the <b>Preview Character</b> button. Print out a physical character sheet and fill it out with what's displayed in this screen. In a future update, users will be able to either export their choices to a PDF that will automatically fill out their character sheet for them, or save their character to their username.</li>
            </ol>
          </div>
        </section>
        <section className='landing-section'>
          <h3>Future Plans</h3>
          <p>The D&D New Character Creator is just one of the many tools that I want to create. I also have plans to develop and implement some of the following in varying degrees and capacities:</p>
          <div>
            <ul>
              <li><b>Character Manager</b>: A companion tool alongside the Character Creator. The Character Manager is meant to serve as a digital character sheet which will allow users to edit and add new things to their character after creation. Saving and loading characters will also be a possibility, as well as user authentication to allow users to manage multiple characters.</li>
              <li><b>Class Creator</b>: A class creator tool that allows anyone to easily and quickly create a class using the 5th Edition rules, features, spells, etc. </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Landing;