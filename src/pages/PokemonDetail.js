import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokefightapp-0a0d7e871e13.herokuapp.com/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name.english}</h1>
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>Base: {JSON.stringify(pokemon.base)}</p>
    </div>
  );
};

export default PokemonDetail;
