import axios from 'axios';
import * as types from './../consts/actionTypes';
import { API_BASE_URL } from './../consts/urls';

export const fetchWeather = (city) => {
    const request = axios.get(`${API_BASE_URL}&q=${city},us`);

    return {
        type: types.FETCH_WEATHER,
        payload: request
    }
};
