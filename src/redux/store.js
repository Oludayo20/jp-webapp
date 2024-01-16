import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './slice/authApi';
import { mediaApi } from './slice/mediaApi';
import { ministerApi } from './slice/ministerApi';
import { jobApi } from './slice/jobApi';
import { departmentApi } from './slice/departmentApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from '../redux/slice/userSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [ministerApi.reducerPath]: ministerApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      ministerApi.middleware,
      jobApi.middleware,
      departmentApi.middleware
    ),

  devTools: true
});

setupListeners(store.dispatch);
