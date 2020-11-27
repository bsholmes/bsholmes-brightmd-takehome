import React from 'react';
import styled from 'styled-components/macro';

import TitleHeader from './TitleHeader';

import { H2Style, H3Style } from '../styles/headings';
import { MQ_FOR_MOBILE } from '../styles/media';

import Toggle from './Toggle';
import { MODE_OPTIONS } from './EditablePane';
import HourSelector from './HourSelector';

const HEADER_COPY = 'Hours of Operation';
const SUB_HEAD_COPY = 'Manage standard hours of operation when providers are available to provide care. Patients will be informed if they submit an exam outside of these hours.';

const OPEN_COPY = 'OPEN';
const CLOSED_COPY = 'CLOSED';

const DEFAULT_MIN_HOUR = '9:00 AM';
const DEFAULT_MAX_HOUR = '5:00 PM';

const HoursOfOperation = ({
  editableData = {},
  setEditableData = () => {},
  uiMode = -1
}) => {
  // TODO: separate busincess logic into controller component or custom hook
  const updateIsOpen = (isOpen, index) => {
    const newHoursData = [...editableData];
    newHoursData[index].isOpen = isOpen;

    // set default hours if we don't have any
    if (isOpen && !newHoursData[index].hoursMin) {
      newHoursData[index].hoursMin = DEFAULT_MIN_HOUR;
    }

    if (isOpen && !newHoursData[index].hoursMax) {
      newHoursData[index].hoursMax = DEFAULT_MAX_HOUR;
    }
    setEditableData([...newHoursData]);
  };

  const updateHoursMin = (hoursMin, index) => {
    const newHoursData = [...editableData];
    newHoursData[index].hoursMin = hoursMin;
    setEditableData([...newHoursData]);
  };

  const updateHoursMax = (hoursMax, index) => {
    const newHoursData = [...editableData];
    newHoursData[index].hoursMax = hoursMax;
    setEditableData([...newHoursData]);
  };

  // TODO: validation for hoursMax being less than or equal hoursMin

  return (
    <Container>
      <TitleHeader header={HEADER_COPY} subhead={SUB_HEAD_COPY} />
      <Grid>
        {editableData.map((day, index) => (
          // assuming the label is unique
          <React.Fragment key={day.label}>
            <RowLabel>{day.label}</RowLabel>
            <RowLabel>
              {uiMode === MODE_OPTIONS.edit && (
                <CenteredToggle
                  initialValue={day.isOpen}
                  onToggle={isOpen => updateIsOpen(isOpen, index)}
                />
              )}
              {day.isOpen ? OPEN_COPY : CLOSED_COPY}
            </RowLabel>
            {uiMode === MODE_OPTIONS.view && (
              <RowLabel>{day.isOpen && `${day.hoursMin} - ${day.hoursMax}`}</RowLabel>
            )}
            {uiMode === MODE_OPTIONS.edit && (
              <RowLabel>
                {day.isOpen && (
                  <>
                    <HourSelector
                      value={day.hoursMin}
                      onChange={selection => updateHoursMin(selection[0].label, index)}
                    />
                    {' - '}
                    <HourSelector
                      value={day.hoursMax}
                      onChange={selection => updateHoursMax(selection[0].label, index)}
                    />
                  </>
                )}
              </RowLabel>
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

const Grid = styled.div`
  display: grid;

  grid-template-columns: 148px 128px 1fr;
  grid-template-rows: repeat(1fr);

  ${MQ_FOR_MOBILE} {
    grid-template-columns: 72px 82px 1fr;
  }
`;

const RowLabel = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  white-space: pre;
  
  ${H2Style}

  ${MQ_FOR_MOBILE} {
    ${H3Style}
  }
`;

const CenteredToggle = styled(Toggle)`
  margin: auto 12px auto 0;
`;

export default HoursOfOperation;
