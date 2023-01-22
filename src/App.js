import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import DisplayPokemon from './DisplayPokemon';

function App() {

  const [pokemon, setPokemon] = useState([
    {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
  ])

  //call the api to response 20 pokemons
  const get20Pokemon = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
      setPokemon(res.data.results)
    }).catch((err) => {
      console.log(err)
    });
  }
  useEffect (() =>{
   get20Pokemon();
  })

  return (
    <div className='App'>
      <h1>Pokedex</h1>
    <DisplayPokemon pokemon={pokemon}></DisplayPokemon>
    </div>
  )
}
export default App;
