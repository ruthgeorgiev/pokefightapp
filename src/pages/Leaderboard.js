import React, { useEffect, useState } from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Leaderboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the backend
    fetch('https://pokefightapp-0a0d7e871e13.herokuapp.com/game/leaderboard')
      .then(response => response.json())
      .then(data => {
        console.log("Leaderboard data:", data); // Log the fetched data for debugging
        setGames(data);
      })
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <List>
        {games.length > 0 ? (
          games.map((game, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Winner: ${game.winner}`}
                secondary={`Loser: ${game.loser} | Turns: ${game.turns}`}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">No games have been recorded yet.</Typography>
        )}
      </List>
    </Box>
  );
};

export default Leaderboard;
