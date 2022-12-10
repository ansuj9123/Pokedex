import { useState } from "react";

function CaughtPokemon(props) {
   const [caught, setCaught] = useState([]);
   const [pokemonNameInput, setPokemonNameInput] = useState("");
function catchPokemon() {
  if(pokemonNameInput.length == 0){
    return 
  }
setCaught([...caught, pokemonNameInput]);

setPokemonNameInput("");


}
function handleInputChange (e){
setPokemonNameInput(e.target.value)
}

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.pokemonDate}
      </p>
      <ul>
        {caught.map((name) => {
          return <li>{name}</li>;
        })}{" "}
      </ul>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
