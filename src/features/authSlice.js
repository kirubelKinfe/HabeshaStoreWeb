import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
  }, 
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    }
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (user) => user.auth.userInfo;

export default authSlice.reducer;