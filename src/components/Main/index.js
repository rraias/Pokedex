import {Button, Container} from './style';
import { useState } from 'react';
import Figure from './Cards';
import { useContext } from 'react';
import { PokemonsContext } from '../App';
import TeamSelector from '../TeamSelector';

export default function MainSection({handlePrevious, handleNext}) {

    const [selected, setSelected] = useState()

    const pokemons = useContext(PokemonsContext)
    return (
        <>
        <TeamSelector/>
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
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
        </Container>
        </>
    )

}