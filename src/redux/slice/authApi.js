import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  getUserByIdInteraction,
  loginInteraction,
  signInWithGoogleInteraction,
  registerInteraction,
  logoutInteraction
} from '../interactions/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchUser: builder.mutation({
      async queryFn(userId) {
        const response = await getUserByIdInteraction(userId);
        return { data: response };
      }
    }),
    register: builder.mutation({
      async queryFn(data) {
        const response = await registerInteraction(data);
        return { data: response };
      },
      transformResponse(response) {
        return response;
      }
    }),
    google: builder.mutation({
      async queryFn() {
        const response = await signInWithGoogleInteraction();
        return { data: response };
      },
      transformResponse(response) {
        return response;
      }
    }),
    login: builder.mutation({
      async queryFn(data) {
        const response = await loginInteraction(data);
        return { data: response };
      },
      transformResponse(response) {
        return response;
      }
    }),
    logout: builder.mutation({
      async queryFn() {
        const response = await logoutInteraction();
        return { data: response };
      },
      transformResponse(response) {
        return response;
      }
    })
  })
});

export const {
  useFetchUserMutation,
  useRegisterMutation,
  useGoogleMutation,
  useLoginMutation,
  useLogoutMutation
} = authApi;
