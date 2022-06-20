import {createSlice, PayloadAction, Dispatch} from '@reduxjs/toolkit';
import {getLocalWeather} from '../../api/api';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    error: null,
  },
  reducers: {
    setWeather(state: any, action: PayloadAction<any>) {
      state.weather = action.payload;
    },
    setError(state: any, action: PayloadAction<any>) {
      state.error = action.payload?.error;
    },
  },
});

export const getWeatherAsync =
  (location?: string) => async (dispatch: Dispatch) => {
    try {
      const response = await getLocalWeather(location);
      dispatch(setWeather(response.data));
    } catch (error) {
      throw dispatch(setError(error));
    }
  };

export const {setWeather, setError} = weatherSlice.actions;
export default weatherSlice.reducer;
