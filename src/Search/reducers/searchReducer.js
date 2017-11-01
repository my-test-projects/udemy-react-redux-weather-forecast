import * as types from './../consts/actionTypes';

export default function(state = [], action) {
    switch (action.type) {
        case types.FETCH_WEATHER_FULFILLED:
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}
