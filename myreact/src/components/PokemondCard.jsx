
import PropTypes from 'prop-types';


  function PokemonCard(pokemon) {
   
  console.log (pokemon)
  console.log (typeof pokemon.name)
    return (
      <figure>
        {pokemon.name  ?  ( <>  <img src={pokemon.img}  />  <figcaption>{pokemon.name}</figcaption> </>  ) : (
          <p>???</p>
        )}
      </figure>
    );
  }


  

  PokemonCard.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    
  }

  

export default PokemonCard;