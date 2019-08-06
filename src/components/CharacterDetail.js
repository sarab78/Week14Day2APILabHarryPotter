import React from 'react';

const CharacterDetail = ({character}) => {
  if (!character) return null;
  return (
    <div className="character-detail">
    <br/>
    <h2> Character Name: {character.name}</h2>
    <br />
    <p> House: {character.house}</p>
    <br />
    <p> Wand:</p>
    <p> - Wood: {character.wand.wood}</p>
    <p> - Core: {character.wand.core}</p>
    <p> - Length: {character.wand.length}</p>
    <br />
    <img src={character.image}/>
    </div>
  )
}

export default CharacterDetail;
