import React, { useState } from 'react';
import styled from 'styled-components';
import { mainTheme } from '../styles/colors';

import { H2Style } from '../styles/headings';

const TextField = ({
  initialValue = '',
  onChange = () => {},
  onBlur = () => {},
  ...props
}) => {
  const [textValue, setTextValue] = useState(initialValue);
  return (
    <Field
      defaultValue={textValue}
      onChange={evt => {
        setTextValue(textValue);
        onChange(textValue);
      }}
      onBlur={onBlur}
      {...props}
    />
  );
};

const Field = styled.input`
  ${H2Style}

  width: 100%;
  height: 20px;

  padding: 2px;

  border-radius: 4px;
  border: 1px solid ${mainTheme.midGrey};
`;

export default TextField;
