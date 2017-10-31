import * as types from './../consts/actionTypes';

export default function(state = [], action) {
    switch (action.type) {
        case types.FETCH_WEATHER:
            console.log("reducer: " + JSON.stringify(action.payload.data));
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}
