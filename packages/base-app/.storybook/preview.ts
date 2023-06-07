import { ThemeProvider } from '@mui/material';
import {
  withThemeByClassName,
  withThemeFromJSXProvider,
} from '@storybook/addon-styling';

import { theme } from '@app/components/global/MuiProvider';

import type { Preview } from '@storybook/react';

import '@/styles/index.scss';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  withThemeFromJSXProvider({
    themes: {
      mui: theme,
    },
    defaultTheme: 'mui',
    Provider: ThemeProvider,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
