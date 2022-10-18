class Pokemon{
    constructor(id, name, types, sprite){
        this.id = id;
        this.name = name;
        this.types = types;
        this.sprite = sprite;
    }
};


export default async function fetchApi(i, end){
    let dataArray = [];
    for (i; i < end; i++) {
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await pokemons.json();
        dataArray.push(data);
    };
    let pokeArray = []
    dataArray.forEach((pokemon) => {
        let newPokemon = new Pokemon(pokemon.id,
             pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
             pokemon.types.map(type => type.type.name[0]
                .toUpperCase() + type.type.name.substring(1)).join(', '),
             pokemon.sprites.other.dream_world.front_default);
             pokeArray.push(newPokemon)
            });
    return pokeArray
};
