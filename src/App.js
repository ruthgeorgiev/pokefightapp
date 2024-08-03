import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import PokemonInfo from './pages/PokemonInfo';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route - Displays the list of all Pokémon */}
        <Route path="/" element={<PokemonList />} />

        {/* Pokemon Detail Route - Displays detailed information about a specific Pokémon */}
        <Route path="/pokemon/:id" element={<PokemonDetail />} />

        {/* Pokemon Info Route - Displays specific information about a Pokémon such as type, base stats, etc. */}
        <Route path="/pokemon/:id/:info" element={<PokemonInfo />} />

        {/* Game Route - Allows users to select Pokémon and battle */}
        <Route path="/game" element={<Game />} />

        {/* Leaderboard Route - Displays the leaderboard with previous game results */}
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
