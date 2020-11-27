import React, { useState } from 'react';
import styled from 'styled-components';

import { mainTheme } from '../styles/colors';

const Toggle = ({
  initialValue = false,
  onToggle = () => {},
  ...props
}) => {
  const [isToggled, setIsToggled] = useState(initialValue);
  return (
    <Container
      isToggled={isToggled}
      onClick={() => {
        setIsToggled(!isToggled);
        onToggle(!isToggled);
      }}
      {...props}
    >
      <Knob isToggled={isToggled} />
    </Container>
  );
};

const Container = styled.div`
  width: 20px;
  height: 10px;

  border-radius: 6px;

  background-color: ${mainTheme.disabledGrey};
  border: 1px solid ${mainTheme.disabledGrey};

  ${props => props.isToggled && `
    background-color: ${mainTheme.linkBlue};
    border: 1px solid ${mainTheme.linkBlue};
  `}

  transition: all 0.5s ease;
`;

const Knob = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: white;
  ${props => props.isToggled && `
    transform: translateX(100%);
  `}

  transition: transform 0.5s ease;
`;

export default Toggle;
