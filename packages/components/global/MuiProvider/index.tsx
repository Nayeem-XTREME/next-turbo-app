'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { inter } from 'utils/fonts';

const isBrowser = typeof document !== 'undefined';

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: '14px',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: '14px',
        },
      },
    },
  },
});

const createEmotionCache = () => {
  let insertionPoint: HTMLMetaElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
};

const emotionCache = createEmotionCache();

/**
 * Renders a Material-UI theme provider with styled components and Emotion cache
 *
 * @param {React.ReactNode} children - The children to render in the theme provider
 * @return {React.ReactNode} - The rendered theme provider with styled components and Emotion cache
 */

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};

export default MuiProvider;
