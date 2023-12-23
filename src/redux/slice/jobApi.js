import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJobInteraction, addJobInteraction } from '../interactions/job';

const jobsAdapter = createEntityAdapter({});
const initialState = jobsAdapter.getInitialState();

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchJob: builder.query({
      async queryFn() {
        const response = await getJobInteraction();
        return { data: response };
      }
    }),
    addJob: builder.mutation({
      async queryFn(data) {
        const response = await addJobInteraction(data);
        return { data: response };
      },
      transformResponse(response) {
        return response;
      },
      invalidatesTags: [{ type: 'Job', id: 'LIST' }]
    })
  })
});

export const { useFetchJobQuery, useAddJobMutation } = jobApi;
