import type { AlertColor } from '@mui/material';

export type StateProps = {
  message: string;
  type: AlertColor;
  open: true | false;
};

export type OpenSnackbarProps = Omit<StateProps, 'open'>;
