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
  admin: boolean;
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
  admin: localStorage.getItem('admin') === 'true',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set user details and save them in localStorage
    setUserDetails: (state, action: PayloadAction<UserState>) => {
      const { userId, username, email, level, stripeSessionId, token, admin } = action.payload;

      state.userId = userId;
      state.username = username;
      state.email = email;
      state.level = level;
      state.stripeSessionId = stripeSessionId;
      state.token = token;
      state.admin = admin;

      // Save to localStorage
      if (userId) localStorage.setItem('userId', userId);
      if (token) localStorage.setItem('token', token);
      if (username) localStorage.setItem('username', JSON.stringify(username));
      if (email) localStorage.setItem('email', JSON.stringify(email));
      if (level) localStorage.setItem('level', JSON.stringify(level));
      if (stripeSessionId) {
        localStorage.setItem('stripeSessionId', JSON.stringify(stripeSessionId));
      }
      localStorage.setItem('admin', JSON.stringify(admin));
    },

    // Action to clear user details and remove them from localStorage
    clearUserDetails: (state) => {
      state.userId = null;
      state.username = null;
      state.email = null;
      state.level = null;
      state.stripeSessionId = null;
      state.token = null;
      state.admin = false;

      // Clear specific keys
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('level');
      localStorage.removeItem('stripeSessionId');
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
    },
  },
});

// Selectors
export const selectUserId = (state: RootState): string | null => state.auth.userId;
export const selectToken = (state: RootState): string | null => state.auth.token;
export const selectUsername = (state: RootState): string | null => state.auth.username;
export const selectEmail = (state: RootState): string | null => state.auth.email;
export const selectLevel = (state: RootState): string | null => state.auth.level;
export const selectStripeSessionId = (state: RootState): string | null => state.auth.stripeSessionId;
export const selectIsAdmin = (state: RootState): boolean => state.auth.admin;

// Actions
export const { setUserDetails, clearUserDetails } = authSlice.actions;

// Reducer
export default authSlice.reducer;
