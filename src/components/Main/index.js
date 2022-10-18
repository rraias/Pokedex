import {Button, Container, Logo} from './style';
import Figure from './Cards';
import { useContext } from 'react';
import { PokemonsContext } from '../App';
import pokedexLogo from '../../images/pokedexLogo.png'

export default function MainSection({handlePrevious, handleNext}) {

    const pokemons = useContext(PokemonsContext)
    
    return (
        <>
        <Container>
        <Logo src={pokedexLogo} alt='logo'/>
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
        <Container>
            <Button onClick={handlePrevious}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
        </Container>
        </>
    )

}