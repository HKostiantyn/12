import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer from './subscriptionSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
    auth: authReducer,
  },
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
