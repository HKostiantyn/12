import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// State type for user details
interface UserState {
  token: string | null;
  userId: string | null;
  username: string | null;
  email: string | null;
  level: string | null;
  stripeSessionId: string | null;
}

// Utility to safely parse localStorage items
const safeParse = (key: string): string | null => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch {
    return null;
  }
};

// Initial state
const initialState: UserState = {
  userId: localStorage.getItem('userId') || null,
  token: localStorage.getItem('token') || null,
  username: safeParse('username'),
  email: safeParse('email'),
  level: safeParse('level'),
  stripeSessionId: safeParse('stripeSessionId'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserState>) => {
      const { userId, username, email, level, stripeSessionId, token } = action.payload;
      state.userId = userId;
      state.username = username;
      state.email = email;
      state.level = level;
      state.stripeSessionId = stripeSessionId;
      state.token = token;

      // Save to localStorage
      if (userId) localStorage.setItem('userId', userId);
      if (token) localStorage.setItem('token', token);
      if (username) localStorage.setItem('username', JSON.stringify(username));
      if (email) localStorage.setItem('email', JSON.stringify(email));
      if (level) localStorage.setItem('level', JSON.stringify(level));
      if (stripeSessionId)
        localStorage.setItem('stripeSessionId', JSON.stringify(stripeSessionId));
    },
    clearUserDetails: (state) => {
      state.userId = null;
      state.username = null;
      state.email = null;
      state.level = null;
      state.stripeSessionId = null;
      state.token = null;

      // Clear specific keys
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('level');
      localStorage.removeItem('stripeSessionId');
      localStorage.removeItem('token');
    },
  },
});

// Actions
export const { setUserDetails, clearUserDetails } = authSlice.actions;

// Selectors
export const getUserDetails = (state: RootState): UserState => state.auth;

// Reducer
export default authSlice.reducer;
