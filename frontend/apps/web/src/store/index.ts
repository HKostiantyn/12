import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer from './subscriptionSlice';

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
  },
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
