import {
  type BaseQueryFn,
  createApi,
  type FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { getToken } from '@app/helpers';
import { apiUrl } from '@app/configs/constants';

import type { CustomError } from '../types';
import type { AddProductProps, GetProductProps } from './types';
import type { GetProductResponse, SuccessResponse } from '@app/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set('authorization', token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ['Product', 'Products'],
  endpoints: (builder) => ({
    // Queries
    getProduct: builder.query<GetProductResponse, GetProductProps>({
      query: ({ productId }) => `/products/${productId}`,
      providesTags: ['Product'],
    }),
    // Mutations
    addProduct: builder.mutation<SuccessResponse, AddProductProps>({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  util: {
    resetApiState: resetProductApiState,
    getRunningQueriesThunk: getProductRunningQueriesThunk,
  },
} = productApi;
