'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import jwtDecode from 'jwt-decode';

import type { RefreshTokenProps } from './types';
import type { Session, TokenInfo } from '@/types';

/**
 * Refreshes the token in the session by setting a new interval for refetching.
 *
 * @param {Function} setInterval - a function that sets a new interval for refetching
 * @return {null}
 */

const RefreshToken = ({ setInterval }: RefreshTokenProps) => {
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      const token = (data as Session)?.user?.token;
      const expires = jwtDecode<TokenInfo>(token).exp;
      const refetchAfter = (expires * 1000 - Date.now()) / 1000;
      setInterval(refetchAfter);
    }
  }, [data, setInterval]);

  return null;
};

export default RefreshToken;
