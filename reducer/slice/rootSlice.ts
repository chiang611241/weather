import {createSlice} from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading(state: any) {
      state.loading = true;
    },
    hideLoading(state: any) {
      state.loading = false;
    },
  },
});

export const {showLoading, hideLoading} = rootSlice.actions;
export default rootSlice.reducer;
