import styled from 'styled-components';
import PropTypes from 'prop-types';

// extends shared component
import { StyledHeaderShared } from '../../../components/Header';

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

Header.propTypes = {
  children: PropTypes.node,
};

const StyledHeader = styled(StyledHeaderShared)`
  margin: 8em 0;
  position: relative;
`;

export default Header;
