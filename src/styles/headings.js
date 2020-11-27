
import { mainTheme } from './colors';

// font weights
export const regular = 400;
export const mediumBold = 500;

export const H1Style = `
  font-size: 24px;
  line-height: 24px;
  font-weight: ${mediumBold};

  color: ${mainTheme.textGrey};
`;

export const H2Style = `
  ${H1Style}

  font-size: 16px;
  line-height: 20px;
`;

export const H3Style = `
  ${H2Style}

  font-size: 12px;
  line-height: 16px;
`;

export const H4Style = `
  ${H3Style}

  font-size: 10px;
  line-height: 14px;
`;
