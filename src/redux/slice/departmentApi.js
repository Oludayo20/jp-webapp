import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  getDepartmentInteraction,
  addDepartmentInteraction
} from '../interactions/department';

const jobsAdapter = createEntityAdapter({});
const initialState = jobsAdapter.getInitialState();

export const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchDepartment: builder.query({
      async queryFn() {
        const response = await getDepartmentInteraction();
        return { data: response };
      }
    }),
    addDepartment: builder.mutation({
      async queryFn(data) {
        const response = await addDepartmentInteraction(data);
        return { data: response };
      },
      transformResponse(response) {
        return response;
      },
      invalidatesTags: [{ type: 'Department', id: 'LIST' }]
    })
  })
});

export const { useFetchDepartmentQuery, useAddDepartmentMutation } =
  departmentApi;
