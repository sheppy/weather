import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


export default function (state = Map(), action = {}) {
    switch (action.type) {
        case T.API.WEATHER_SUCCESS:
            return state.merge({ weather: fromJS(action.response) });
        break;

        default:
            return state;
    }
};
