'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import tw from 'tailwind-styled-components';

import { Button, FlexCentered } from '@app/components/core';

const StyledInput = tw.input`
  z-10 
  w-full 
  rounded-md 
  border-2 
  border-solid
  border-gray-300
  bg-transparent 
  px-4 
  py-2 
  text-black 
  outline-none 
  dark:text-white
  dark:border-[#1d4ed8] 
`;

const HomeTemplate = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<'ssr' | 'csr' | ''>('');

  useEffect(() => {
    if (loading && searchType) {
      const productId = inputRef.current?.value;
      router.push(`/products/${productId}/${searchType}`);
    }
  }, [loading, searchType, router]);

  const handleClick = (type: 'ssr' | 'csr') => {
    const productId = inputRef.current?.value;
    if (productId && !isNaN(parseFloat(productId))) {
      setLoading(true);
      setSearchType(type);
    }
  };

  return (
    <FlexCentered className="w-full max-w-lg flex-col gap-4">
      <StyledInput
        name="Search"
        placeholder="Enter Product ID"
        ref={inputRef}
      />
      <FlexCentered className="w-full justify-between gap-3">
        <Button
          variant="outlined"
          className="w-full min-w-max dark:text-white"
          onClick={() => handleClick('ssr')}
          disabled={loading}
          loading={loading && searchType === 'ssr'}
        >
          SSR Search
        </Button>
        <Button
          variant="outlined"
          className="w-full min-w-max dark:text-white"
          onClick={() => handleClick('csr')}
          disabled={loading}
          loading={loading && searchType === 'csr'}
        >
          CSR Search
        </Button>
      </FlexCentered>
    </FlexCentered>
  );
};

export default HomeTemplate;
