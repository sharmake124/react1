const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  function PokemonCard() {
    const pokemonIndex = 0; 
    const pokemon = pokemonList[pokemonIndex];
  
    return (
      <figure>
        {pokemon ? (<> <img src={pokemon.imgSrc} alt={pokemon.name} />  <figcaption>{pokemon.name}</figcaption> </>  ) : (
          <p>???</p>
        )}
      </figure>
    );
  }
  
  
  




  

export default PokemonCard;