import PropTypes from 'prop-types';
import { Card, CardText, CardImage } from './style';

export default function Figure({
  id, src, name, types
}) {
  return (
    <Card>
      <CardImage src={src} alt="pokemon image" />
      <CardText>{name}</CardText>
      <p>
        #
        {id}
      </p>
      <p>{types}</p>
    </Card>
  );
}

Figure.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
};
