import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
    addDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addDataSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    addDataFailure: (state , action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendDataSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    sendDataFailure: (state , action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getPublicKeyStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getPublicKeySuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    getPublicKeyFailure: (state , action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signoutSuccess,
  addDataStart,
  addDataSuccess,
  addDataFailure,
  sendDataStart,
  sendDataSuccess,
  sendDataFailure,
  getPublicKeyStart,
  getPublicKeySuccess,
  getPublicKeyFailure,
} = userSlice.actions;

export default userSlice.reducer;