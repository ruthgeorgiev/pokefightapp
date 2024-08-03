import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Game = () => {
  // Add console log to check if the component is being rendered
  console.log('Game component rendered');

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log('Fetching Pokemon data...');
    fetch('https://pokefightapp-0a0d7e871e13.herokuapp.com/pokemon')
      .then((response) => response.json())
      .then((data) => {
        console.log('Pokemon data fetched:', data);
        setPokemonList(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const selectRandomOpponent = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setOpponentPokemon(pokemonList[randomIndex]);
    console.log('Opponent Pokemon selected:', pokemonList[randomIndex]);
  };

  const handleBattle = () => {
    console.log('Battle started');
    if (!selectedPokemon || !opponentPokemon) return;

    const yourPower = selectedPokemon.base.Attack + selectedPokemon.base.Speed;
    const opponentPower = opponentPokemon.base.Attack + opponentPokemon.base.Speed;

    if (yourPower > opponentPower) {
      setWinner(selectedPokemon.name.english);
      console.log('You won!');
    } else if (yourPower < opponentPower) {
      setWinner(opponentPokemon.name.english);
      console.log('You lost!');
    } else {
      setWinner('Draw');
      console.log('It\'s a draw!');
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        PokeFight Game
      </Typography>

      {pokemonList.length > 0 ? (
        <>
          <Typography variant="h6">Choose Your Pokemon</Typography>
          <Grid container spacing={2}>
            {pokemonList.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                <Card onClick={() => {
                  setSelectedPokemon(pokemon);
                  selectRandomOpponent();
                  console.log('Selected Pokemon:', pokemon);
                }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name.english}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pokemon.name.english}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Type: {pokemon.type.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {selectedPokemon && opponentPokemon && (
            <Box sx={{ marginTop: '20px' }}>
              <Typography variant="h5" gutterBottom>Your Pokemon</Typography>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`}
                  alt={selectedPokemon.name.english}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {selectedPokemon.name.english}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {selectedPokemon.type.join(', ')}
                  </Typography>
                </CardContent>
              </Card>

              <Typography variant="h5" gutterBottom>Opponent Pokemon</Typography>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opponentPokemon.id}.png`}
                  alt={opponentPokemon.name.english}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {opponentPokemon.name.english}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {opponentPokemon.type.join(', ')}
                  </Typography>
                </CardContent>
              </Card>

              <Button variant="contained" color="primary" onClick={handleBattle} sx={{ marginTop: '10px' }}>
                Battle
              </Button>

              {winner && (
                <Typography variant="h5" color="secondary" gutterBottom sx={{ marginTop: '20px' }}>
                  Winner: {winner}
                </Typography>
              )}
            </Box>
          )}
        </>
      ) : (
        <Typography variant="h6">Loading Pokémon...</Typography>
      )}
    </Box>
  );
};

export default Game;
