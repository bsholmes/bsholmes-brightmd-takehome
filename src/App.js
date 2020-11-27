import React, { useState } from 'react';
import styled from 'styled-components/macro';

import EditablePane from './components/EditablePane';
import HoursOfOperation from './components/HoursOfOperation';
import Branding from './components/Branding';

import mockData from './mockData.json';

const App = () => {
  // using this data as if it was from an API response
  // if I had more time I would create a Data Model for it
  // also if this data was being used in multiple different places I would
  // create some redux logic for it
  const [hoursOfOpData, setHoursOfOpData] = useState(mockData.hoursOfOperation);
  const [brandingData, setBrandingData] = useState(mockData.branding);
  return (
    <AppContainer id='app-outer-boundary'>
      <Column>
        <EditablePane
          initialData={hoursOfOpData}
          onSave={setHoursOfOpData}
        >
          <HoursOfOperation />
        </EditablePane>
        <EditablePane
          initialData={brandingData}
          onSave={setBrandingData}
        >
          <Branding />
        </EditablePane>
      </Column>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;

  box-sizing: border-box;

  padding: 24px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
