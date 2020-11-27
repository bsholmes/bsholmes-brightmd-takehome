import React, { useState } from 'react';
import styled from 'styled-components/macro';

import TitleHeader from './TitleHeader';

import { H2Style, H3Style } from '../styles/headings';
import { MODE_OPTIONS } from './EditablePane';
import TextField from './TextField';

const HEADER_COPY = 'Branding';
const SUB_HEAD_COPY = 'Set name, welcome page text, and other branding for your patients to see during an exam.';

const FIELD_WIDTHS = [
  '150px',
  '80px',
  '80%'
];

const Branding = ({
  brandingData = {},
  onDataChange = () => {},
  uiMode = -1
}) => {
  const [localBrandingData, setLocalBrandingData] = useState(brandingData);

  const updateBrandingValue = (value, index) => {
    const newBrandingData = [...localBrandingData];
    newBrandingData[index].value = value;
    setLocalBrandingData([...newBrandingData]);
  };

  return (
    <Container>
      <TitleHeader header={HEADER_COPY} subhead={SUB_HEAD_COPY} />
      <SecondaryHeader>Display Name</SecondaryHeader>
      <SecondarySubHead>Set how the organization name is displayed to patients. In instances with limited screen space (emails, mobile view), a shortened name is displayed.</SecondarySubHead>
      <Grid>
        {localBrandingData.map((brandingItem, index) => (
          // assuming the label is unique
          <React.Fragment key={brandingItem.label}>
            <RowLabel>{brandingItem.label}</RowLabel>
            {uiMode === MODE_OPTIONS.view && <RowLabel>{brandingItem.value}</RowLabel>}
            {uiMode === MODE_OPTIONS.edit && (
              <FieldContainer>
                <StyledTextField
                  width={FIELD_WIDTHS[index]}
                  initialValue={brandingItem.value}
                  onChange={newValue => updateBrandingValue(newValue, index)}
                />
              </FieldContainer>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width 100%;
`;

const SecondaryHeader = styled.div`
  margin-top: 12px;

  ${H2Style}
`;
const SecondarySubHead = styled.div`
  margin-top: 4px;
  margin-bottom: 8px;

  ${H3Style}
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(1fr);
`;

const RowLabel = styled.div`
  margin-top: 12px;
  
  ${H2Style}
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledTextField = styled(TextField)`
  width: ${props => props.width || '100%'};
`;

export default Branding;
