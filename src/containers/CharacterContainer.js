import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector.js'
import CharacterDetail from '../components/CharacterDetail.js'

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }

  componentDidMount(){
    console.log("Mounted");
    const url = "http://hp-api.herokuapp.com/api/characters";
    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters:characters}))
    .catch(err => console.error)
  }

  render(){
    return (
      <div className="character-container">
      <br/>
        <h1>Harry Potter Characters</h1>
        <br/>
        <CharacterSelector
        characters={this.state.characters}
        onCharacterSelected={this.handleCharacterSelected}
        />
        <CharacterDetail character={this.state.currentCharacter} />
      </div>
    )
  }

}

export default CharacterContainer;
