import { getSession } from 'next-auth/react';

import type { Session } from '@turbo/types';

/**
 * Retrieves the authentication token for the current session.
 *
 * @return {string} The token in the format 'Bearer {user.token}' if the session exists,
 *                  otherwise an empty string.
 */

export const getToken = async () => {
  const session = await getSession();
  return session ? `Bearer ${(session as Session).user.token}` : '';
};
