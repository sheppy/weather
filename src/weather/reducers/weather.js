import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


export default function (state = Map(), action = {}) {
    switch (action.type) {
        case T.API.WEATHER_SUCCESS:
            return state.merge(Map({
                temperature: fromJS(action.response.temperature),
                wind: fromJS(action.response.wind),
                weather: fromJS(action.response.weather)
            }));
        break;

        default:
            return state;
    }
};
