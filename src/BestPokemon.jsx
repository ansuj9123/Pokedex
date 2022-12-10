const BestPokemon = (props) => {
  
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
    {props.pokemonAbilities.map((name) => (
    <li>{name}</li>
    ))}
      </ul>
    </div>
  );
};
export default BestPokemon;
