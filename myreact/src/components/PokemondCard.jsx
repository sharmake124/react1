import PropTypes from "prop-types";
import React from "react";

function PokemonCard(pokemon) {
  console.log(typeof pokemon.name);
  console.log(typeof pokemon.img);
  return (
    <figure>
      {pokemon.name ? (
        <>
          <img src={pokemon.img} /> <figcaption>{pokemon.name}</figcaption>{" "}
        </>
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemondList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
  }),
};

export default PokemonCard;
