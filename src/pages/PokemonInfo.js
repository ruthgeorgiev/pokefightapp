import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const PokemonInfo = () => {
  const { id, info } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokefightapp-0a0d7e871e13.herokuapp.com/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!pokemon) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">{pokemon.name.english}</Typography>
      {info === 'type' && (
        <Typography variant="h6">Type: {pokemon.type.join(', ')}</Typography>
      )}
      {info === 'base' && (
        <div>
          <Typography variant="h6">Base Stats:</Typography>
          <Typography variant="body1">HP: {pokemon.base.HP}</Typography>
          <Typography variant="body1">Attack: {pokemon.base.Attack}</Typography>
          <Typography variant="body1">Defense: {pokemon.base.Defense}</Typography>
          <Typography variant="body1">Speed: {pokemon.base.Speed}</Typography>
        </div>
      )}
    </Box>
  );
};

export default PokemonInfo;
