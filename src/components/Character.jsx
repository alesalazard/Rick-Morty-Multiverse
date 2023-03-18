import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleCharacter } from '../useAxios';
import '../styles/Character.css';

const Character = () => {
  const[character, setCharacter] = useState(null)
  const params = useParams()
  useEffect(() => {
    singleCharacter(params.id, setCharacter)
  }, [])  
  return (
    <>
      {character != null ? (
        <div className='character-container'> 
          <h3>{character.name}</h3>
          <img src={character.image} alt='character image' />
          <div className='list-container'>
            <ul>
              <li>Specie: {character.species}</li>
              <li>Gender: {character.gender}</li>
            </ul>
          </div> 
        </div>
        ) : ('No hay personaje')}
    </>
  );
};
export default Character;
