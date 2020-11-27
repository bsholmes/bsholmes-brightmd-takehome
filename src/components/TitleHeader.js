import React from 'react';
import styled from 'styled-components/macro';

import {
  H1Style,
  H2Style,
  H3Style,
  H4Style
} from '../styles/headings';
import { MQ_FOR_MOBILE } from '../styles/media';

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

  ${MQ_FOR_MOBILE} {
    ${H2Style}
  }
`;

const SubHeadText = styled.div`
  margin-bottom: 12px;

  // this value seems odd but this container wraps at some point and it should be responsive
  max-width: 68%;

  ${H3Style}

  ${MQ_FOR_MOBILE} {
    ${H4Style}
  }
`;

export default TitleHeader;
