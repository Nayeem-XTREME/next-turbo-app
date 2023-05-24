import type { ErrorResponse } from '@app/types';
import type { SerializedError } from '@reduxjs/toolkit';

export type CustomError = {
  status: number;
  data: ErrorResponse;
};

export type Error = SerializedError | CustomError | undefined;
