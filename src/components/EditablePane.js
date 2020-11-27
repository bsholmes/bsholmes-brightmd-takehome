import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { mainTheme } from '../styles/colors';
import { H2Style } from '../styles/headings';
import PrimaryCTA from './PrimaryCTA';

export const MODE_OPTIONS = {
  view: 0,
  edit: 1
};

const EditablePane = ({
  children = [],
  onSave = () => {}
}) => {
  const [uiMode, setUIMode] = useState(MODE_OPTIONS.view);

  // inserts uiMode into generalized children
  const childrenWithMode = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { uiMode });
    }
    return child;
  });

  return (
    <Container>
      {uiMode === MODE_OPTIONS.view && (
        <ControlsContainer>
          <LinkText
            onClick={() => setUIMode(MODE_OPTIONS.edit)}
          >
            Edit
          </LinkText>
        </ControlsContainer>
      )}
      {uiMode === MODE_OPTIONS.edit && (
        <ControlsContainer>
          <LinkText
            onClick={() => setUIMode(MODE_OPTIONS.view)}
          >
            Cancel
          </LinkText>
          <PrimaryCTA
            onClick={onSave}
          >
            Save
          </PrimaryCTA>
        </ControlsContainer>
      )}
      {childrenWithMode}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  width 100%;

  max-width: 1024px;

  padding: 24px 0;

  &:not(:first-child) {
   border-top: 1px solid ${mainTheme.borderGrey};
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;

  right: 24px;
  top: 24px;
`;

const LinkText = styled.div`
  ${H2Style};

  color: ${mainTheme.linkBlue};

  margin: auto 16px auto 0;

  @media screen and (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default EditablePane;
