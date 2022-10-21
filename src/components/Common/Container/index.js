import PropTypes from 'prop-types';
import DefaultContainer from './style';

export default function Container({ children }) {
  return (
    <DefaultContainer>{children}</DefaultContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};
