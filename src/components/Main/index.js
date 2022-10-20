import {Container, Logo} from './style';
import Figure from './Cards';
import { useContext } from 'react';
import { PokemonsContext } from '../App';
import pokedexLogo from '../../images/pokedexLogo.png'
import SearchForm from '../SearchForm';

export default function MainSection({handleReset, handleSearch, nameRef}) {

    const pokemons = useContext(PokemonsContext)
    
    return (
        <>
        <Container>
        <Logo src={pokedexLogo} alt='logo'/>
        </Container>
        <Container>
            <SearchForm
            handleSearch={handleSearch}
            nameRef={nameRef}
            handleReset={handleReset}
            />
        </Container>
        <Container>
            {pokemons.map(pokemon => (
                <Figure
                    key={pokemon.id}
                    id={pokemon.id}
                    src={pokemon.sprite}
                    name={pokemon.name}
                    types={pokemon.types}
                />
            ))}
        </Container>
        </>
    )

}