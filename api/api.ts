import axios from 'axios';
import {WEATHER_CODE} from './config';

const weather = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${WEATHER_CODE}`;

export const getLocalWeather = (location?: string) =>
  axios.get(weather, {params: {locationName: location}});
