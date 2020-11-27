import React from 'react';
import styled from 'styled-components/macro';

import { mainTheme } from '../styles/colors';
import { H2Style } from '../styles/headings';

// props includes children and className
// so this supports styled-components and rendering children
// encompassed by this component
const PrimaryCTA = ({ ...props }) => <Button {...props} />;

const Button = styled.button`
  ${H2Style}

  width: auto;

  background-color: ${mainTheme.linkBlue};
  color: white;

  padding: 8px 16px;
  margin: auto;

  border-radius: 4px;

  transition: all 0.5s ease;

  border: none;

  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      background-color: ${mainTheme.hoverBlue};
    }
  }
`;

export default PrimaryCTA;
