import React, { useEffect, useState } from "react";

function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemonData(data);
        console.log(data);
      });
  }, [props.pokemonId]);

  return pokemonData ? (
    <div>
      <p>{pokemonData.name}'s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  ) : null;
}

export default PokemonMoves;
