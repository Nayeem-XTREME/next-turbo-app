'use client';

import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

import { RefreshToken } from '../';

/**
 * Renders an authentication provider that wraps its children with a session provider and a refresh token component.
 *
 * @param {React.ReactNode} children - The child components to be wrapped.
 * @return {*} The rendered authentication provider.
 */

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [interval, setInterval] = useState<number>(0);

  return (
    <SessionProvider refetchInterval={interval}>
      {children}
      <RefreshToken setInterval={setInterval} />
    </SessionProvider>
  );
};

export default AuthProvider;
