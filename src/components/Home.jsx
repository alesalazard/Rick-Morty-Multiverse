import React, { useEffect, useState } from "react";

// import { allCharacters } from '../useAxios';
// import { allCharacters } from '../useFetch';
import Pages from "../components/Pages";
import "../styles/Home.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const allCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    allCharacters(info.prev);
  };

  const onNext = () => {
    allCharacters(info.next);
  };

  useEffect(() => {
    allCharacters(initialUrl);
  }, []);

  return (
    <>
      <Pages
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className='home-container'>
        {characters != null
          ? characters.map((character) => (
              <div key={character.id}>
                <div>
                  <a href={`/character/${character.id}`} className='link-name'>
                    {character.name}
                  </a>
                  <img src={character.image} alt='characters' id='home-image' />
                </div>
              </div>
            ))
          : "No hay personajes"}
      </div>
      <Pages
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
};
export default Home;
