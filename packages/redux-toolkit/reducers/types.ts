import type { SerializedError } from '@reduxjs/toolkit';
import type { ErrorResponse } from 'turbo-app';

export type CustomError = {
  status: number;
  data: ErrorResponse;
};

export type Error = SerializedError | CustomError | undefined;
