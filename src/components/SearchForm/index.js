import PropTypes from 'prop-types';
import {
  Form, Label, TextInput, Button
} from './style';

export default function SearchForm({ handleReset, handleSearch, nameRef }) {
  return (
    <Form>
      <Label htmlFor="search">Digite o nome do Pokémon:</Label>
      <TextInput type="text" id="search" ref={nameRef} />
      <Button type="button" onClick={handleSearch}>Procurar</Button>
      <Button type="button" onClick={handleReset}>Resetar</Button>
    </Form>
  );
}

SearchForm.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  nameRef: PropTypes.any.isRequired,
};
