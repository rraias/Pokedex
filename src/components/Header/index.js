import Container from '../Common/Container';
import { Logo } from './style';
import pokedexLogo from '../../images/pokedexLogo.png';

export default function Header() {
  return (
    <Container>
      <Logo src={pokedexLogo} alt="Pokedex Logo" />
    </Container>
  );
}
