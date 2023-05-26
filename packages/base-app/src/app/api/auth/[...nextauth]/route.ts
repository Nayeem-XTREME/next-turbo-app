/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { isAfter } from 'date-fns';
import jwtDecode from 'jwt-decode';

import { publicPost } from '@app/helpers';
import { maxIdleTime } from '@app/configs/constants';

import type {
  ErrorResponse,
  Token,
  TokenInfo,
  UserLoginResponse,
} from '@app/types';
import type { AxiosError } from 'axios';

const idleTime = maxIdleTime || 15;

const handleApiError = (error: AxiosError<ErrorResponse>) => {
  const errorMessage = error?.response?.data?.message || error.message;
  throw new Error(errorMessage);
};

const refreshToken = async (token: string) => {
  try {
    const response = await publicPost<Token>('auth/refresh-token', {
      refreshToken: token,
    });
    return response;
  } catch (err) {
    handleApiError(err as AxiosError<ErrorResponse>);
  }
};

const userLogin = async (data: { email: string; password: string }) => {
  try {
    const { user, token, refreshToken } = await publicPost<UserLoginResponse>(
      'auth/login',
      data
    );
    return { ...user, token, refreshToken } as any;
  } catch (err) {
    handleApiError(err as AxiosError<ErrorResponse>);
  }
};

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: Number(idleTime) * 60,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const data = credentials as {
          email: string;
          password: string;
        };
        const response = await userLogin(data);
        return response;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.user = token.user as typeof session.user;
      return session;
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user);

      const authUser = (token as any).user as UserLoginResponse;
      const tokenInfo = authUser?.token && jwtDecode<TokenInfo>(authUser.token);

      if (
        tokenInfo &&
        tokenInfo.exp &&
        isAfter(new Date(), new Date(tokenInfo.exp * 1000))
      ) {
        const tokenPair = await refreshToken(authUser.refreshToken);
        token.user = { ...(token.user as UserLoginResponse), ...tokenPair };
      }

      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
