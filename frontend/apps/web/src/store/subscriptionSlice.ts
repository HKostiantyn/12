import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State type
interface SubscriptionState {
  sessionId: string | null;
}

// Initial state with error handling for localStorage
const initialState: SubscriptionState = {
  sessionId: (() => {
    try {
      const storedValue = localStorage.getItem("sessionId");
      return storedValue ? JSON.parse(storedValue) : null; // Parse only if non-empty
    } catch (error) {
      console.error("Error parsing sessionId from localStorage:", error);
      return null; // Fallback to null on error
    }
  })(),
};

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    // Save sessionId to state and localStorage
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload;
      localStorage.setItem("sessionId", JSON.stringify(action.payload)); // Persist to localStorage
    },
    // Clear sessionId from state and localStorage
    clearSessionId: (state) => {
      state.sessionId = null;
      localStorage.removeItem("sessionId"); // Remove from localStorage
    },
  },
});

// Actions
export const { setSessionId, clearSessionId } = subscriptionSlice.actions;

// Reducer
export default subscriptionSlice.reducer;
