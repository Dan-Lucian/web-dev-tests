import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledNotFound } from '../routes/PageNotFound';
import { StyledWrapperPage } from '../routes/test/components/WrapperPage';

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

Footer.propTypes = {
  children: PropTypes.node,
};

const StyledFooter = styled.footer`
  background: ${(p) => p.theme.color.bgAccent};
  padding: 1em;

  address {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${StyledNotFound} ~ & {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }

  ${StyledWrapperPage} ~ & {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export default Footer;
