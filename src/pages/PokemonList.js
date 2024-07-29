import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokefightapp-0a0d7e871e13.herokuapp.com/')
      .then(response => response.json())
      .then(data => setPokemons(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
