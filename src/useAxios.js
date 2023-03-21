import axios from "axios";

const initialUrl = 'https://rickandmortyapi.com/api/character/'

const allCharacters = async (state) => {
  const petition = await axios.get(initialUrl)
  state(petition.data.results);
}


const singleCharacter = async (id,state) => {
  const petition = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(petition.data)
}

export {allCharacters, singleCharacter};
