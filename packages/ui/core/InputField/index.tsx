'use client';

import { forwardRef, useId } from 'react';
import {
  CircularProgress,
  TextField,
  type TextFieldProps,
} from '@mui/material';

type InputFieldProps = Omit<TextFieldProps, 'size' | 'variant'> & {
  loading?: boolean;
};

const InputField = forwardRef(
  ({ select, loading, className, ...rest }: InputFieldProps, ref) => {
    const id = useId();
    return (
      <TextField
        id={id}
        inputRef={ref}
        size="small"
        variant="outlined"
        disabled={loading}
        fullWidth
        InputProps={{
          ...(select &&
            loading && {
              endAdornment: (
                <CircularProgress
                  size={20}
                  className="text-primary-500 mr-6 flex items-center justify-center"
                />
              ),
            }),
          classes: {
            root: 'rounded-lg overflow-hidden',
            input:
              'py-3.5 text-emp-black-medium bg-white dark:bg-gray-800 overflow-hidden text-sm dark:text-white dark:placeholder:text-gray-400',
          },
        }}
        InputLabelProps={{
          classes: {
            filled: '!top-0.5 text-neutral-600',
            focused: '!top-0.5 text-neutral-500',
            outlined: 'top-[5px] text-emp-disabled',
            error: '!text-status-error',
          },
        }}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              className: 'max-h-64',
            },
          },
        }}
        FormHelperTextProps={{
          classes: {
            error: 'text-status-error',
          },
        }}
        {...(className && { className: className })}
        {...(select && { select: true })}
        {...rest}
      />
    );
  }
);

export default InputField;
