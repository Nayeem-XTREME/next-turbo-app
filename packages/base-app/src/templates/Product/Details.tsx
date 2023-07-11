import Image from 'next/image';

import { FlexCentered } from '@app/components/core';

import type { GetProductResponse } from '@app/types';

const Details = ({ data }: { data?: GetProductResponse }) => {
  return (
    <FlexCentered className="flex-col gap-4">
      {data?.thumbnail && data?.title && (
        <Image
          src={data.thumbnail}
          alt={data.title}
          width={400}
          height={400}
          priority
          className="aspect-square rounded-lg bg-gradient-radial from-gray-600 to-gray-600/20 object-contain shadow-md"
        />
      )}
      <FlexCentered className="flex-col">
        <h3 className="font-bold">{data?.title}</h3>
        <h4>Price: {data?.price} $</h4>
      </FlexCentered>
      <FlexCentered className="flex-col">
        <h6>Brand: {data?.brand}</h6>
        <h6>Category: {data?.category}</h6>
        <h6>Rating: {data?.rating}</h6>
      </FlexCentered>
      <p className="max-w-xl text-center">{data?.description}</p>
    </FlexCentered>
  );
};

export default Details;
