import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultsInternalLinks = ({ children }) => (
  <StyledResultsInternalLinks>{children}</StyledResultsInternalLinks>
);

ResultsInternalLinks.propTypes = {
  children: PropTypes.node,
};

const StyledResultsInternalLinks = styled.ul`
  display: flex;
  margin: 2em auto;
  justify-content: flex-end;

  a {
    margin-left: 60px;
    padding: 1em 2em;
    background-color: ${(p) => p.theme.color.bgAccent};
  }

  a:link,
  a:visited {
    color: ${(p) => p.theme.color.text};
    text-decoration: none;
  }

  a:hover {
    color: ${(p) => p.theme.color.bgAccent};
    background-color: ${(p) => p.theme.color.text};
  }
`;

export default ResultsInternalLinks;
