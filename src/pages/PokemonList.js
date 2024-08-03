import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokefightapp-0a0d7e871e13.herokuapp.com/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Pokemon List
      </Typography>
      <Grid container spacing={3}>
        {pokemonList.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
            <Card
              sx={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
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
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleViewDetails(pokemon.id)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PokemonList;
