import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfo = () => {
  const { id, info } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokefightapp-0a0d7e871e13.herokuapp.com/${id}/${info}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id, info]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Pokemon {info}</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default PokemonInfo;
