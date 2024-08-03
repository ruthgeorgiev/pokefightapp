import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokefightapp-0a0d7e871e13.herokuapp.com/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name.english}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {pokemon.name.english}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {pokemon.type.join(', ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HP: {pokemon.base.HP}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Attack: {pokemon.base.Attack}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Defense: {pokemon.base.Defense}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonDetail;
