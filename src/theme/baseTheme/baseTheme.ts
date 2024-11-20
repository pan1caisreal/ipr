import {
  type ThemeOptions,
  createTheme as createMuiTheme,
} from '@mui/material/styles';

import { type Theme } from '../types';
import { SPACING } from '../constants';

export type CreateThemeParams = {
  options?: ThemeOptions;
};

export const createTheme = (params: CreateThemeParams) => {
  const { options } = params;

  const themeOptions = {
    spacing: SPACING,
    ...options,
  };

  return createMuiTheme(themeOptions);
};
