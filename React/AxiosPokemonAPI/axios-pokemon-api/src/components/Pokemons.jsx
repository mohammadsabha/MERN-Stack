import React, { useState } from 'react';
import axios from 'axios';

function Pokemons() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      setPokemonList(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {pokemonList.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </div>
  );
}

export default Pokemons;
