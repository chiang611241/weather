import {combineReducers} from 'redux';
import weatherReducer from './slice/weatherSlice';
import rootReducer from './slice/rootSlice';

export default combineReducers({
  weather: weatherReducer,
  root: rootReducer,
  // TODO: other reducer
});
