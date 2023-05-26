import { Centered } from '@app/components/core';
import { publicGet } from '@app/helpers';
import { GetProductResponse } from '@app/types';

import Details from './Details';

/**
 * Renders a product's details in the server side using its id.
 *
 * @param {object} props - An object containing the product's id.
 * @param {string} props.id - The id of the product to be rendered.
 * @return {JSX.Element} A centered component wrapping a Details component that receives the product data.
 */

const SSRProduct = async ({ id }: { id: string }) => {
  const data = await publicGet<GetProductResponse>(`products/${id}`, {
    cache: 'no-store',
  });

  return (
    <Centered>
      <Details data={data} />
    </Centered>
  );
};

export default SSRProduct;
