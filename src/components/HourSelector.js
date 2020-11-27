import React from 'react';
// import styled from 'styled-components';
import Select from 'react-dropdown-select';
import styled from 'styled-components';
import { mainTheme } from '../styles/colors';

import { H3Style } from '../styles/headings';

// assuming 12 hour time
const HourOptions = [
  '12:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00'
];

const AM_PM = [
  ' AM',
  ' PM'
];

const options = [
  ...HourOptions.map(hour => ({ label: hour + AM_PM[0], value: hour + AM_PM[0] })),
  ...HourOptions.map(hour => ({ label: hour + AM_PM[1], value: hour + AM_PM[1] }))
];

const renderContent = ({ props }) => {
  return (
    <LabelContainer>
      {props.values[0].label}
    </LabelContainer>
  );
};

const renderDropdownHandle = ({ state }) => {
  return (
    <HandleContainer>
      <Triangle enabled={state.dropdown} />
    </HandleContainer>
  );
};

const HourSelector = ({
  value = '',
  onChange = () => {}
}) => {
  const valueObj = { label: value, value };
  return (
    <HourSelect
      values={[valueObj]}
      options={options}
      onChange={onChange}
      searchable={false}
      contentRenderer={renderContent}
      dropdownHandleRenderer={renderDropdownHandle}
    />
  );
};

const HourSelect = styled(Select)`
  ${H3Style}

  border-radius: 6px !important;
  padding: 0 !important;
  min-height: unset !important;
  max-height: 20px;

  box-shadow: -1px 2px 3px 1px ${mainTheme.shadowGrey};
`;

const LabelContainer = styled.div`
  padding: 0 12px 0 4px;
`;

const HandleContainer = styled.div`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 7px 5px 6px;
  
  background-color: ${mainTheme.selectorGrey};
`;

const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid ${mainTheme.linkBlue};

  transition: transform 0.5s ease;

  ${props => props.enabled && `
    transform: rotate(180deg);
  `}
`;

export default HourSelector;
