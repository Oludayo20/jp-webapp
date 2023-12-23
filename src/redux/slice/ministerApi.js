import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import {
  getMinisterInteraction,
  addMinisterInteraction,
  getMinisterByIdInteraction
} from '../interactions/minister';

const ministerAdapter = createEntityAdapter({});
const initialState = ministerAdapter.getInitialState();

export const ministerApi = createApi({
  reducerPath: 'ministerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchMinister: builder.query({
      async queryFn() {
        const response = await getMinisterInteraction();
        return { data: response };
      },
      transformResponse(responseData) {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        if (result?.data?.id) {
          return [
            { type: 'Minister', id: 'LIST' },
            ...result.data.id.map((id) => ({ type: 'Minister', id }))
          ];
        } else return [{ type: 'Minister', id: 'LIST' }];
      }
    }),
    addMinister: builder.mutation({
      async queryFn(data) {
        const response = await addMinisterInteraction(data);
        return { data: response };
      },
      transformResponse(response) {
        return response;
      },
      invalidatesTags: [{ type: 'Minister', id: 'LIST' }]
    }),
    getMinisterById: builder.mutation({
      async queryFn(id) {
        console.log(id);
        const response = await getMinisterByIdInteraction(id);
        return { data: response };
      },
      transformResponse(response) {
        console.log(response);
        return response;
      },
      invalidatesTags: [{ type: 'Minister', id: 'LIST' }]
    })
  })
});

export const {
  useFetchMinisterQuery,
  useAddMinisterMutation,
  useGetMinisterByIdMutation
} = ministerApi;
