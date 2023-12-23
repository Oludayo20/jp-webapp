import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  getMediaInteraction,
  addMediaInteraction
} from '../interactions/media';

const mediasAdapter = createEntityAdapter({});
const initialState = mediasAdapter.getInitialState();

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchMedia: builder.query({
      async queryFn() {
        const response = await getMediaInteraction();
        return { data: response };
      }
    }),
    addMedia: builder.mutation({
      async queryFn(data) {
        const response = await addMediaInteraction(data);
        return { data: response };
      },
      transformResponse(response) {
        return response;
      },
      invalidatesTags: [{ type: 'Media', id: 'LIST' }]
    })
  })
});

export const { useFetchMediaQuery, useAddMediaMutation } = mediaApi;
