import PropTypes from 'prop-types';
import Container from '../Common/Container';
import Figure from './Cards';
import SearchForm from '../SearchForm';

export default function MainSection({
  handleReset, handleSearch, nameRef, pokemons
}) {
  return (
    <>
      <Container>
        <SearchForm
          handleSearch={handleSearch}
          nameRef={nameRef}
          handleReset={handleReset}
        />
      </Container>
      <Container>
        {pokemons.map((pokemon) => (
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
  );
}

MainSection.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  nameRef: PropTypes.any.isRequired,
  pokemons: PropTypes.array.isRequired,
};
