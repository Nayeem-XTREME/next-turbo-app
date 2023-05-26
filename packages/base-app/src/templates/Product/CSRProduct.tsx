'use client';

import { CircularProgress } from '@mui/material';

import { Centered } from '@app/components/core';
import { useGetProductQuery } from '@app/state/reducers';

import Details from './Details';

const CSRProduct = ({ id }: { id: string }) => {
  const { isLoading, isSuccess, data } = useGetProductQuery({
    productId: id,
  });

  return (
    <Centered>
      {isLoading ? (
        <CircularProgress size={32} />
      ) : isSuccess ? (
        <Details data={data} />
      ) : (
        <div>Something went wrong</div>
      )}
    </Centered>
  );
};

export default CSRProduct;
