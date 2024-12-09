import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State type
interface SubscriptionState {
  sessionId: string | null;
}

// Initial state
const initialState: SubscriptionState = {
  sessionId: null,
};

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload;
    },
    clearSessionId: (state) => {
      state.sessionId = null;
    },
  },
});

// Actions
export const { setSessionId, clearSessionId} = subscriptionSlice.actions;

// Reducer
export default subscriptionSlice.reducer;