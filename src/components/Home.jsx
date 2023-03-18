import React, {useEffect, useState} from 'react';
import { allCharacters } from '../useAxios';
import '../styles/Home.css';

const Home = () => {
  const [characters, setCharacters] = useState(null)
  const[info, setInfo] = useState({})

  useEffect(() => {
    allCharacters(setCharacters)
  }, [])
  
  return (
  <>
  <div className='home-container'>
    {characters != null ? (
      characters.map(character => (
        <div key={character.id}>
          <a href={`/character/${character.id}`} className='link-name'>{character.name}</a>
          <img src={character.image} alt='characters' id='home-image'/>
        </div>
      ))
    ) : ('No hay personajes')}
  </div>
  </>
  );
};
export default Home;
