'use client'; // Error components must be Client components

import { useEffect } from 'react';
import { Button } from '@mui/material';

import { Centered } from '@app/components/core';

type ErrorProps = {
  error: Error;
  // Attempt to recover by trying to re-render the segment
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Centered className="h-screen flex-col gap-4">
      <h2>Something went wrong!</h2>
      <Button variant="contained" color="error" onClick={() => reset()}>
        Try again
      </Button>
    </Centered>
  );
};

export default Error;
