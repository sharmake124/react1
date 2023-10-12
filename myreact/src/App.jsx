
import PokemonCard from './components/PokemonCard'
 
import './App.css'


function App() {
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
 
 console.log(pokemonList[0].imgSrc)
 
  return (
    
    <PokemonCard
    nam = {pokemonList[0].name}
    imag = {pokemonList[0].imgSrc}
    
    />
  )
}

export default App
