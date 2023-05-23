'use client';

import { LoadingButton, type LoadingButtonProps } from '@mui/lab';

/**
 * Renders a styled button component with text and a loading state.
 *
 * @param {LoadingButtonProps} rest - The props object containing the children and any other props for the underlying LoadingButton.
 * @return {JSX.Element} A styled button component with text and a loading state.
 */

const StyledButton = ({ children, ...rest }: LoadingButtonProps) => (
  <LoadingButton
    classes={{
      root: 'min-h-[40px] rounded-lg text-base font-semibold normal-case text-emp-black-medium px-4',
      disabled:
        '!bg-emp-disabled/20' + (rest.loading ? ' !text-transparent' : ''),
    }}
    {...rest}
  >
    {children}
  </LoadingButton>
);

export default StyledButton;
