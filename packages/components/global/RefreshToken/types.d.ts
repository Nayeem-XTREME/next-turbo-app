import type { Dispatch, SetStateAction } from 'react';

export type RefreshTokenProps = {
  setInterval: Dispatch<SetStateAction<number>>;
};
