import React from 'react';
import styled from 'styled-components/macro';

import { H1Style, H3Style } from '../styles/headings';

const TitleHeader = ({ header = '', subhead = '' }) => {
  return (
    <Container>
      <HeaderText>{header}</HeaderText>
      <SubHeadText>{subhead}</SubHeadText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width 100%;
`;

const HeaderText = styled.div`
  margin-bottom: 12px;

  ${H1Style}
`;

const SubHeadText = styled.div`
  margin-bottom: 12px;

  // this value seems odd but this container wraps at some point and it should be responsive
  max-width: 68%;

  ${H3Style}
`;

export default TitleHeader;
