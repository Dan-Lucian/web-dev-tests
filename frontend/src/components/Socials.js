import styled from 'styled-components';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Socials = () => (
  <StyledSocials>
    <li>
      <a href="https://github.com/Dan-Lucian">
        <BsGithub size={30} />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/dan-lucian-gaina/">
        <BsLinkedin size={30} />
      </a>
    </li>
  </StyledSocials>
);

const StyledSocials = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  li {
    margin-left: 20px;
  }

  a:link,
  a:visited,
  a:active {
    color: white;
  }

  a:hover {
    opacity: 0.5;
  }
`;

export default Socials;
