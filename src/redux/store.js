import { configureStore } from '@reduxjs/toolkit';
import { mediaApi } from './slice/mediaApi';
import { ministerApi } from './slice/ministerApi';
import { jobApi } from './slice/jobApi';
import { departmentApi } from './slice/departmentApi';
import { setupListeners } from '@reduxjs/toolkit/query';
// import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [mediaApi.reducerPath]: mediaApi.reducer,
    [ministerApi.reducerPath]: ministerApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      mediaApi.middleware,
      ministerApi.middleware,
      jobApi.middleware,
      departmentApi.middleware
    ),

  devTools: true
});

setupListeners(store.dispatch);
