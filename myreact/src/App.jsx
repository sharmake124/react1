import PokemonCard from "./components/PokemondCard";

import "./App.css";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

console.log(typeof pokemonList);
function App() {
  return (
    <div>
      <PokemonCard name={pokemonList[0].name} img={pokemonList[0].imgSrc} />
    </div>
  );
}

export default App;
