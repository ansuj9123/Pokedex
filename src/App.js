
import Logo from "./Logo";
import Ansu from "./Ansu";

import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";



function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
    function logWhenClicked() {
      console.log("when logo is clicked");
    }
  const appName = "Ansu";
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <header>
        <h1>My name is {appName} </h1>
        <Logo appName="Pokedex" handleClick={logWhenClicked}/>
        <Ansu />
        <BestPokemon pokemonAbilities={abilities}/>
        <CaughtPokemon pokemonDate={date} />
        <PokemonMovesSelector />
        <PokemonCity />

      </header>
    </div>
  );
}

export default App;
