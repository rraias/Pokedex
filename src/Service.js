class Pokemon {
  constructor(id, name, types, sprite) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.sprite = sprite;
  }
}

function loadPokemon(array) {
  const pokeArray = [];
  array.forEach((pokemon) => {
    const newPokemon = new Pokemon(
      pokemon.id,
      pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
      pokemon.types.map((type) => type.type.name[0]
        .toUpperCase() + type.type.name.substring(1)).join(', '),
      pokemon.sprites.other.dream_world.front_default
    );
    pokeArray.push(newPokemon);
  });
  return pokeArray;
}

export default async function fetchApi() {
  const dataArray = [];
  for (let i = 1; i <= 386; i++) {
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await pokemons.json();
    dataArray.push(data);
  }
  const pokemonData = loadPokemon(dataArray);
  return pokemonData;
}
