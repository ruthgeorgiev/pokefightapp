import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import PokemonInfo from './pages/PokemonInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/pokemon/:id/:info" element={<PokemonInfo />} />
      </Routes>
    </div>
  );
}

export default App;
