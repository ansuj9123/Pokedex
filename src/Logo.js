import React from "react";
function Logo(props){

    return (
      <div>
        <header>
          <h1>Welcome to the {props.appName}</h1>
          <img onClick={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
        </header>
      </div>
    );
}

export default Logo;